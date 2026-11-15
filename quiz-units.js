// Dữ liệu bài luyện dùng chung cho quiz.js, profile.js, forms.js:
// xây danh sách bài cho mọi chế độ (gõ chữ và trắc nghiệm) + đề thi tổng hợp.
(() => {
  "use strict";
  const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const TEST_SIZE = 30;
  const G = () => (typeof GRAMMAR !== "undefined" ? GRAMMAR : {});
  const P = () => (typeof PHRASES !== "undefined" ? PHRASES : {});
  const V = () => (typeof VOCAB !== "undefined" ? VOCAB : {});
  const M = () => (typeof MCQ !== "undefined" ? MCQ : {});
  const VB = () => (typeof VERBS !== "undefined" ? VERBS : []);

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const sample = (a, n) => shuffle(a.slice()).slice(0, n);

  // ---------- Số nhiều từ ký hiệu từ điển ----------
  function umlaut(stem) {
    for (let i = stem.length - 1; i >= 0; i--) {
      const c = stem[i], lower = c.toLowerCase();
      if (lower === "u" && i > 0 && stem[i - 1].toLowerCase() === "a") {      // au -> äu
        return stem.slice(0, i - 1) + (stem[i - 1] === "A" ? "Ä" : "ä") + stem.slice(i);
      }
      if (lower === "u" && i > 0 && "eäE".includes(stem[i - 1])) continue;    // eu, äu: không biến âm
      if ("aou".includes(lower)) {
        const map = { a: "ä", o: "ö", u: "ü", A: "Ä", O: "Ö", U: "Ü" };
        if (lower === "a" && i > 0 && stem[i - 1].toLowerCase() === "a") return stem.slice(0, i - 1) + map[stem[i - 1]] + stem.slice(i + 1); // Saal -> Säle
        return stem.slice(0, i) + map[c] + stem.slice(i + 1);
      }
    }
    return null;
  }
  function pluralOf(noun, note) {
    if (!note) return null;
    let n = note.trim().split(/\s*[/(→]\s*|\s+-\s+die\s|\s+die\s/)[0].trim().replace(/^–$/, "-");
    if (/^[A-ZÄÖÜ][a-zäöüß]+$/.test(n)) return n;                 // dạng đầy đủ, vd. "Risiken"
    let uml = false, suffix;
    let m = n.match(/^-([äöüÄÖÜ]),?\s*(\w*)$/);                       // "-ä, e", "-Ä"
    if (m) { uml = true; suffix = m[2] || ""; }
    else if ((m = n.match(/^¨-?(\w*)$/))) { uml = true; suffix = m[1]; }
    else if ((m = n.match(/^-(e|en|n|nen|s|se|er|)$/))) suffix = m[1];
    else return null;
    let stem = noun;
    if (uml) { stem = umlaut(noun); if (!stem) return null; }
    return stem + suffix;
  }
  // Danh từ có số nhiều suy ra được: [{e, g, v, sg, pl}]
  function pluralNouns(lv) {
    const out = [];
    for (const [e, g, v, pl] of V()[lv] || []) {
      const m = g.match(/^(der|die|das) (\S+)$/);
      if (!m) continue;
      const p = pluralOf(m[2], pl);
      if (p) out.push({ e, g, v, sg: m[2], pl: p });
    }
    return out;
  }

  // ---------- Câu hỏi trắc nghiệm (sinh tự động) ----------
  // Lấy tối đa 3 phương án nhiễu từ pool, khác nhãn và khác "khóa" (vd. nghĩa) với các phương án đã có
  function pickDistractors(right, pool, label, keyFn = label) {
    const opts = [right];
    for (const x of shuffle(pool.slice())) {
      if (opts.length === 4) break;
      if (opts.some((o) => label(o) === label(x) || keyFn(o) === keyFn(x))) continue;
      opts.push(x);
    }
    return opts.length === 4 ? opts.map(label) : null;
  }
  const choice = (o) => ({ kind: "choice", answer: 0, vi: "", ...o });

  // Từ vựng: hình + nghĩa → từ Đức, hoặc từ Đức → nghĩa
  function vocabChoice(w, words, toGerman) {
    const same = words.filter((x) => x.noun === w.noun);
    const options = pickDistractors(w, same.length >= 8 ? same : words, (x) => (toGerman ? x.g : x.v), (x) => x.g + "|" + x.v)
      || pickDistractors(w, words, (x) => (toGerman ? x.g : x.v));
    return choice({
      cat: "Từ vựng", e: toGerman ? w.e : "", q: toGerman ? w.v : w.g, big: true,
      prompt: toGerman ? "Từ tiếng Đức nào có nghĩa này?" : "Từ này nghĩa là gì?",
      options, say: w.g, explain: `${w.g} = ${w.v}` + (w.ex ? `. Ví dụ: ${w.ex}` : ""),
    });
  }
  // Cụm từ: hình + nghĩa → câu Đức, hoặc câu Đức → nghĩa (nhiễu ưu tiên cùng chủ đề)
  function phraseChoice(p, topic, all, toGerman) {
    const pool = topic.length >= 6 ? topic : all;
    const label = (x) => (toGerman ? x.de : x.vi);
    const options = pickDistractors(p, pool, label) || pickDistractors(p, all, label);
    return choice({
      cat: "Cụm từ", e: toGerman ? p.e : "", q: toGerman ? p.vi : p.de,
      prompt: toGerman ? "Nói câu này bằng tiếng Đức thế nào?" : "Câu này nghĩa là gì?",
      options, say: p.de, explain: `${p.de} = ${p.vi}`,
    });
  }
  // Nghe: phát âm thanh, chọn nghĩa đúng hoặc chọn câu/từ đã nghe
  function listenChoice(x, pool, byMeaning) {
    const label = (y) => (byMeaning ? y.vi : y.de);
    const options = pickDistractors(x, pool, label, (y) => y.de + "|" + y.vi);
    return choice({
      cat: "Nghe", audio: true, q: "", e: "",
      prompt: byMeaning ? "Nghe rồi chọn nghĩa đúng" : "Bạn vừa nghe thấy gì?",
      options, say: x.de, explain: `${x.de} = ${x.vi}`,
    });
  }
  // Số nhiều: các dạng sai hay gặp (đuôi -e/-en/-er/-s, biến âm hay không)
  function pluralChoice(n) {
    const uml = umlaut(n.sg);
    const cands = [n.sg + "e", n.sg + "en", n.sg + "n", n.sg + "er", n.sg + "s", n.sg,
                   uml && uml + "e", uml && uml + "er", uml];
    const wrong = [...new Set(cands)].filter((x) => x && x !== n.pl && !/ee$|nnn$/.test(x));
    const options = ["die " + n.pl, ...sample(wrong, 3).map((x) => "die " + x)];
    return choice({
      cat: "Dạng từ", e: n.e, q: `${n.g} (${n.v})`, prompt: "Số nhiều đúng là?",
      options, say: `${n.g}, die ${n.pl}`, explain: `${n.g} → die ${n.pl}`,
    });
  }
  // Động từ: Perfekt (hat/ist × đuôi phân từ đúng/sai) hoặc Präteritum
  const BOTH_AUX = new Set(["fahren", "fliegen", "schwimmen", "reiten", "ziehen", "treten", "stoßen", "brechen", "segeln", "rudern", "joggen", "tanzen", "surfen"]);
  function swapEnding(part) {
    if (/en$/.test(part)) return part.replace(/en$/, "t");
    if (/t$/.test(part)) return part.replace(/t$/, "en");
    return null;
  }
  function verbChoice(v, perfQ) {
    const [aux, ...rest] = v.perf.split(" ");
    const part = rest.join(" ");
    const other = aux === "hat" ? "ist" : "hat";
    const wrongPart = swapEnding(part);
    const base = v.inf.replace(/(e?n)$/, "");
    if (perfQ && wrongPart && !BOTH_AUX.has(v.inf)) {
      return choice({
        cat: "Dạng từ", q: `${v.inf} (${v.vi})`, prompt: "Perfekt (er/sie/es) đúng là?",
        options: [v.perf, `${other} ${part}`, `${aux} ${wrongPart}`, `${other} ${wrongPart}`],
        say: v.perf, explain: `${v.inf}: ${v.praes} – ${v.praet} – ${v.perf}`,
      });
    }
    const cands = [v.praes, part, base + "te", base + "t", v.inf, wrongPart].filter((x) => x && x !== v.praet);
    const options = [v.praet, ...sample([...new Set(cands)], 3)];
    if (options.length < 4) return null;
    return choice({
      cat: "Dạng từ", q: `${v.inf} (${v.vi})`, prompt: "Präteritum (er/sie/es) đúng là?",
      options, say: v.praet, explain: `${v.inf}: ${v.praes} – ${v.praet} – ${v.perf}`,
    });
  }

  // ---------- Danh sách bài theo chế độ ----------
  function chunk(items, size, title, emoji) {
    const out = [];
    for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
    if (out.length > 1 && out[out.length - 1].length < size / 2) out[out.length - 2].push(...out.pop());
    return out.map((its, n) => ({ title: typeof title === "function" ? title(its, n) : `${title} ${n + 1}`, emoji, items: its }));
  }
  const testUnit = (lv, list, what = "câu") =>
    list.length ? [...list, { title: `Kiểm tra tổng hợp ${lv} (${TEST_SIZE} ${what} ngẫu nhiên)`, emoji: "📝", test: true, size: TEST_SIZE,
                              items: list.flatMap((u) => u.items) }] : list;
  const lazy = (fn) => ({ kind: "choice", build: fn });
  // Chiều hỏi cho Từ vựng / Cụm từ: "mix" (xen kẽ), "vi2de" (Việt → Đức), "de2vi" (Đức → Việt)
  const DIR_KEY = "dw-mc-dir";
  const getDir = () => { try { return localStorage.getItem(DIR_KEY) || "mix"; } catch { return "mix"; } };
  // Nghe: "mix", "meaning" (nghe → chọn nghĩa tiếng Việt), "heard" (nghe → chọn chữ tiếng Đức)
  const LDIR_KEY = "dw-lmc-dir";
  const getLDir = () => { try { return localStorage.getItem(LDIR_KEY) || "mix"; } catch { return "mix"; } };
  const byMeaning = (k) => { const d = getLDir(); return d === "meaning" ? true : d === "heard" ? false : k % 2 === 0; };
  const toGerman = (k) => { const d = getDir(); return d === "vi2de" ? true : d === "de2vi" ? false : k % 2 === 0; };

  const vocabWords = (lv) => (V()[lv] || []).map(([e, g, v, , ex = ""]) => ({ e, g, v, ex, noun: /^(der|die|das) /.test(g) }));
  const phraseTopics = (lv) => (P()[lv] || []).map((t) => ({ ...t, items: t.items.map((i) => ({ ...i })) }));

  function buildUnits(mode, lv) {
    if (mode === "grammar") {
      return (G()[lv] || []).map((t) => ({
        title: t.title, emoji: "📐", intro: t.intro,
        items: t.questions.map((q) => ({
          kind: "gap", q: q.q, hint: q.hint || "", vi: q.vi || "",
          answers: q.answers, explain: q.explain || "", full: q.q.replace("___", q.answers[0]),
        })),
      }));
    }
    if (mode === "mc") {
      return testUnit(lv, (M()[lv] || []).map((t) => ({
        title: t.title, emoji: "☑️", intro: t.intro,
        items: t.questions.map((q) => ({ kind: "choice", cat: "Ngữ pháp", q: q.q, options: q.options, answer: q.answer, vi: q.vi || "", explain: q.explain || "" })),
      })));
    }
    if (mode === "vmc") {
      const words = vocabWords(lv);
      const items = words.map((w, k) => lazy(() => vocabChoice(w, words, toGerman(k))));
      return testUnit(lv, chunk(items, 20, (its, n) => words.slice(n * 20, n * 20 + 3).map((w) => w.g.replace(/^(der|die|das) /, "")).join(", ") + "…", "🔠"), "từ");
    }
    if (mode === "pmc") {
      const topics = phraseTopics(lv), all = topics.flatMap((t) => t.items);
      return testUnit(lv, topics.map((t) => ({
        title: t.title, emoji: t.emoji || "💬",
        items: t.items.map((p, k) => lazy(() => phraseChoice(p, t.items, all, toGerman(k)))),
      })));
    }
    if (mode === "lmc") {
      const sPool = (P()[lv] || []).flatMap((t) => t.items.map((i) => ({ de: i.de, vi: i.vi })));
      const wPool = vocabWords(lv).map((w) => ({ de: w.g, vi: w.v }));
      const sentences = (P()[lv] || []).map((t) => ({
        title: `Nghe câu: ${t.title}`, emoji: "🎧",
        items: t.items.map((i, k) => lazy(() => listenChoice({ de: i.de, vi: i.vi }, sPool, byMeaning(k)))),
      }));
      const words = vocabWords(lv).map((w, k) => lazy(() => listenChoice({ de: w.g, vi: w.v }, wPool, byMeaning(k))));
      return testUnit(lv, [...sentences, ...chunk(words, 20, "Nghe từ – phần", "👂")]);
    }
    if (mode === "fmc") {
      const plurals = pluralNouns(lv).map((n) => lazy(() => pluralChoice(n)));
      const verbs = VB().filter((x) => x.level === lv).map((v, k) => lazy(() => verbChoice(v, k % 2 === 0) || verbChoice(v, true)));
      return testUnit(lv, [...chunk(plurals, 20, "Số nhiều", "🔤"), ...chunk(verbs, 10, "Động từ", "🔁")]);
    }
    if (mode === "exam") {
      const parts = { vmc: 12, mc: 12, pmc: 6, lmc: 5, fmc: 5 };
      const pools = {};
      for (const m in parts) pools[m] = buildUnits(m, lv).filter((u) => !u.test).flatMap((u) => u.items);
      if (!Object.values(pools).some((p) => p.length)) return [];
      const size = Object.entries(parts).reduce((s, [m, n]) => s + Math.min(n, pools[m].length), 0);
      const pick = () => Object.entries(parts).flatMap(([m, n]) => sample(pools[m], n));
      return [1, 2, 3].map((n) => ({
        title: `Đề thi tổng hợp ${lv} – đề ${n}`, emoji: "🏆", exam: true, size, pick,
        items: Object.values(pools).flat(),
      }));
    }
    if (mode === "phrases") {
      return (P()[lv] || []).map((t) => ({
        title: t.title, emoji: t.emoji || "💬",
        items: t.items.map((i) => ({ kind: "phrase", e: i.e, vi: i.vi, answers: [i.de, ...(i.alt || [])], full: i.de })),
      }));
    }
    // listen / speak (gõ chữ / nói): câu từ phần Cụm từ + từ vựng chia nhóm 20
    const kind = mode;
    const verb = mode === "speak" ? "Nói" : "Nghe";
    const units = (P()[lv] || []).map((t) => ({
      title: `${verb} câu: ${t.title}`, emoji: mode === "speak" ? "🗣️" : "🎧",
      items: t.items.map((i) => ({ kind, e: i.e, vi: i.vi, answers: [i.de, ...(mode === "speak" ? i.alt || [] : [])], full: i.de })),
    }));
    const words = V()[lv] || [];
    for (let i = 0, n = 1; i < words.length; i += 20, n++) {
      units.push({
        title: `${verb} từ – phần ${n}`, emoji: mode === "speak" ? "👄" : "👂",
        items: words.slice(i, i + 20).map((w) => ({ kind, vi: w[2], e: w[0], answers: [w[1]], full: w[1] })),
      });
    }
    return units;
  }

  // Các mục trắc nghiệm (gộp chung một trang)
  const MC_MODES = [
    ["vmc", "🔠", "Từ vựng"], ["mc", "📐", "Ngữ pháp"], ["pmc", "💬", "Cụm từ"],
    ["lmc", "🎧", "Nghe"], ["fmc", "🔤", "Dạng từ"], ["exam", "🏆", "Thi tổng hợp"],
  ];

  window.QZ = { DIR_KEY, getDir, LDIR_KEY, getLDir, LEVELS, TEST_SIZE, MC_MODES, shuffle, sample, buildUnits, umlaut, pluralOf, pluralNouns };
})();
