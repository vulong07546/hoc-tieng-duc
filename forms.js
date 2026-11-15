(() => {
  "use strict";
  const PASS_PCT = 99;
  const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const V = typeof VOCAB !== "undefined" ? VOCAB : {};
  const VB = typeof VERBS !== "undefined" ? VERBS : [];

  const { pluralOf } = QZ;   // dùng chung với trắc nghiệm (quiz-units.js)

  // ---------- Bài học ----------
  function buildUnits(kind, lv) {
    if (kind === "plural") {
      const items = [];
      for (const [e, g, v, pl] of V[lv] || []) {
        const m = g.match(/^(der|die|das) (\S+)$/);
        if (!m) continue;
        const p = pluralOf(m[2], pl);
        if (!p || p === m[2] && pl.trim() !== "-" && pl.trim() !== "–") { if (!p) continue; }
        items.push({ kind, e, g, v, answers: ["die " + p], full: "die " + p, id: g });
      }
      return chunk(items, 20, "Số nhiều");
    }
    const items = VB.filter((x) => x.level === lv).map((x) => ({ kind, ...x, id: x.inf, full: `${x.praes} – ${x.praet} – ${x.perf}` }));
    return chunk(items, 10, "Động từ");
  }
  function chunk(items, size, name) {
    const out = [];
    for (let i = 0, n = 1; i < items.length; i += size, n++) out.push({ title: `${name} ${n}`, items: items.slice(i, i + size) });
    if (out.length > 1 && out[out.length - 1].items.length < size / 2) out[out.length - 2].items.push(...out.pop().items);
    return out;
  }

  let KIND = localStorage.getItem("dw-forms-kind") || "plural";
  let units = {};
  const rebuild = () => { units = {}; for (const lv of LEVELS) units[lv] = buildUnits(KIND, lv); };
  rebuild();

  const STORE = "dw-forms-v1";
  let progress = (() => { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch { return {}; } })();
  const save = () => localStorage.setItem(STORE, JSON.stringify(progress));
  const key = (lv, i) => `${KIND}-${lv}-${i}`;
  const best = (lv, i) => progress[key(lv, i)] ?? null;
  const passed = (lv, i) => (best(lv, i) ?? 0) >= PASS_PCT;
  const unlocked = (lv, i) => i === 0 || passed(lv, i - 1);

  function show(name) {
    ["homeScreen", "levelScreen", "practiceScreen", "doneScreen"].forEach((s) => $(s).classList.toggle("hidden", s !== name));
    window.scrollTo(0, 0);
  }
  const setLv = (lv) => document.documentElement.style.setProperty("--lv", `var(--${lv})`);

  function renderHome() {
    document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t.dataset.kind === KIND));
    const box = $("levels");
    box.innerHTML = "";
    for (const lv of LEVELS) {
      const list = units[lv];
      if (!list.length) continue;
      const done = list.filter((_, i) => passed(lv, i)).length;
      const n = list.reduce((s, u) => s + u.items.length, 0);
      const el = document.createElement("div");
      el.className = "level";
      el.style.setProperty("--lv", `var(--${lv})`);
      el.innerHTML = `<h3>${lv}</h3><div class="desc">${n} ${KIND === "plural" ? "danh từ" : "động từ"} · ${list.length} bài</div>
        <div class="progress">Qua ${done}/${list.length}</div>
        <div class="mini-bar"><div style="width:${(done / list.length) * 100}%"></div></div>
        <div class="row"><button class="btn primary small">Vào học</button></div>`;
      el.querySelector("button").onclick = () => showLevel(lv);
      box.appendChild(el);
    }
    if (!box.children.length) box.innerHTML = "<p>Chưa có dữ liệu.</p>";
    show("homeScreen");
  }

  let curLv = "A1";
  function showLevel(lv) {
    curLv = lv; setLv(lv);
    $("levelTitle").textContent = lv;
    $("levelSummary").textContent = `${KIND === "plural" ? "Số nhiều" : "Chia động từ"} · cần ≥ ${PASS_PCT}% để qua`;
    const box = $("lessons");
    box.innerHTML = "";
    units[lv].forEach((u, i) => {
      const b = best(lv, i), ok = passed(lv, i), open = unlocked(lv, i);
      const el = document.createElement("div");
      el.className = "lesson" + (ok ? " passed" : "") + (open ? "" : " locked");
      el.innerHTML = `<div class="top"><span class="name">Bài ${i + 1}</span><span>${ok ? "✅" : open ? "🔓" : "🔒"}</span></div>
        <div class="unit-title">${u.items.slice(0, 4).map((x) => esc(x.kind === "plural" ? x.g.split(" ")[1] : x.inf)).join(", ")}…</div>
        <div class="best">${u.items.length} câu · ${b === null ? "chưa làm" : "cao nhất " + b + "%"}</div>
        <div class="row"><button class="btn primary small" ${open ? "" : "disabled"}>${ok ? "Ôn lại" : "Học"}</button></div>`;
      el.querySelector("button").onclick = () => startUnit(lv, i);
      box.appendChild(el);
    });
    show("levelScreen");
  }

  const S = { lv: "A1", unit: 0, queue: [], cur: null, answered: false, total: 0, finished: new Set(), first: new Map(), mistakes: new Map() };
  function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  function startUnit(lv, i) {
    if (!unlocked(lv, i)) return;
    const items = [...units[lv][i].items];
    Object.assign(S, { lv, unit: i, queue: shuffle(items), total: items.length, finished: new Set(), first: new Map(), mistakes: new Map() });
    setLv(lv);
    $("lessonBadge").textContent = `${lv} · ${units[lv][i].title}`;
    show("practiceScreen");
    next();
  }

  function next() {
    if (!S.queue.length) return finish();
    const it = (S.cur = S.queue.shift());
    S.answered = false;
    const f = $("fields");
    if (it.kind === "plural") {
      $("picture").textContent = it.e;
      $("picture").classList.remove("hidden");
      $("prompt").innerHTML = esc(it.g);
      $("meaning").textContent = it.v;
      $("subline").textContent = "Số nhiều là gì? (gõ kèm “die”)";
      f.innerHTML = `<input class="form-in" data-k="0" type="text" spellcheck="false" autocapitalize="off" placeholder="die …" />`;
    } else {
      $("picture").classList.add("hidden");
      $("prompt").innerHTML = esc(it.inf);
      $("meaning").textContent = it.vi;
      $("subline").textContent = "Chia ở ngôi er/sie/es";
      f.innerHTML = [["Hiện tại (Präsens)", "er …"], ["Quá khứ (Präteritum)", "er …"], ["Hoàn thành (Perfekt)", "er hat/ist …"]]
        .map(([l, ph], k) => `<label class="form-row"><span>${l}</span><input class="form-in" data-k="${k}" type="text" spellcheck="false" autocapitalize="off" placeholder="${ph}" /></label>`).join("");
    }
    f.querySelectorAll("input").forEach((inp, k, all) => {
      inp.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !S.answered && k < all.length - 1 && !e.shiftKey) { e.preventDefault(); all[k + 1].focus(); }
      });
    });
    $("feedback").innerHTML = "";
    $("checkBtn").textContent = "Kiểm tra ↵";
    updateBar();
    f.querySelector("input").focus();
  }

  function updateBar() {
    $("sessionCount").textContent = `${S.finished.size}/${S.total}`;
    $("sessionBar").style.width = (S.finished.size / S.total) * 100 + "%";
    const vals = [...S.first.values()];
    const a = vals.length ? Math.floor((vals.filter(Boolean).length / vals.length) * 100) : 100;
    $("sessionAcc").textContent = a + "%";
    $("sessionAcc").classList.toggle("bad", a < PASS_PCT);
  }

  const clean = (s) => s.trim().replace(/\s+/g, " ").replace(/^(er|sie|es)\s+/i, "");
  const loose = (s) => clean(s).toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss");
  function same(typed, target, allowNoArticle) {
    const t = clean(typed);
    const cands = [target]; if (allowNoArticle) cands.push(target.replace(/^die /, ""));
    for (const c of cands) {
      if (t === c) return 2;
      if (loose(t) === loose(c)) return 1;
    }
    return 0;
  }

  function check() {
    if (S.answered) return next();
    const it = S.cur;
    const inputs = [...document.querySelectorAll("#fields input")];
    if (inputs.some((i) => !i.value.trim())) { inputs.find((i) => !i.value.trim()).focus(); return; }
    let ok = true, note = "";
    if (it.kind === "plural") {
      const r = same(inputs[0].value, it.full, true);
      ok = r > 0; if (r === 1) note = "Chú ý chữ hoa / ä ö ü ß.";
      inputs[0].className = "form-in " + (ok ? "ok" : "err");
    } else {
      const targets = [it.praes, it.praet, it.perf];
      inputs.forEach((inp, k) => {
        const r = same(inp.value, targets[k], false);
        if (!r) ok = false; if (r === 1) note = "Chú ý ä ö ü ß.";
        inp.className = "form-in " + (r ? "ok" : "err");
      });
    }
    settle(ok, note);
  }

  function answerHtml(it) {
    return it.kind === "plural"
      ? `<span class="answer">${esc(it.full)}</span>`
      : `<div class="verb-ans"><b>${esc(it.inf)}</b> → er <b>${esc(it.praes)}</b> · er <b>${esc(it.praet)}</b> · er <b>${esc(it.perf)}</b></div>`;
  }

  function settle(ok, note) {
    const it = S.cur;
    if (!S.first.has(it.id)) S.first.set(it.id, ok);
    if (window.DW) DW.logAnswer(ok);
    if (ok) S.finished.add(it.id);
    else { S.mistakes.set(it.id, it); S.queue.splice(Math.min(S.queue.length, 3 + Math.floor(Math.random() * 3)), 0, it); }
    S.answered = true;
    document.querySelectorAll("#fields input").forEach((i) => (i.disabled = true));
    $("feedback").innerHTML = (ok ? `<span class="ok">✔ Chính xác!</span> ` : `<span class="err">✘ Chưa đúng.</span> Đáp án: `) +
      answerHtml(it) + (note ? `<span class="note">${note}</span>` : "") + (ok ? "" : `<span class="note">Câu này sẽ xuất hiện lại để ôn.</span>`);
    $("checkBtn").textContent = "Tiếp tục →";
    updateBar();
    speak(it.kind === "plural" ? it.full : `${it.inf}. ${it.praes}. ${it.praet}. ${it.perf}.`);
    $("checkBtn").focus();
  }

  function skip() {
    if (S.answered) return next();
    document.querySelectorAll("#fields input").forEach((i) => (i.className = "form-in err"));
    settle(false, "");
  }

  function finish() {
    const vals = [...S.first.values()], good = vals.filter(Boolean).length;
    const acc = Math.floor((good / S.total) * 100);
    const k = key(S.lv, S.unit);
    progress[k] = Math.max(progress[k] ?? 0, acc); save();
    const ok = acc >= PASS_PCT, hasNext = S.unit + 1 < units[S.lv].length;
    $("doneIcon").textContent = ok ? "🎉" : "💪";
    $("doneTitle").textContent = ok ? "Qua bài!" : "Chưa đạt – làm lại nhé!";
    $("doneScore").textContent = acc + "%";
    $("doneScore").className = "score " + (ok ? "pass" : "fail");
    $("doneText").textContent = `Đúng ngay lần đầu ${good}/${S.total}.` + (ok ? "" : ` Cần ≥ ${PASS_PCT}% để mở bài tiếp theo.`);
    $("mistakes").innerHTML = [...S.mistakes.values()].map((it) =>
      `<span>${esc(it.kind === "plural" ? `${it.g} → ${it.full}` : `${it.inf}: ${it.full}`)}</span>`).join("");
    $("nextLessonBtn").classList.toggle("hidden", !(ok && hasNext));
    show("doneScreen");
  }

  let deVoice = null;
  if ("speechSynthesis" in window) {
    const pick = () => { const v = speechSynthesis.getVoices(); deVoice = v.find((x) => x.lang === "de-DE") || v.find((x) => x.lang.startsWith("de")) || null; };
    pick(); speechSynthesis.onvoiceschanged = pick;
  }
  function speak(t) {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(t); u.lang = "de-DE"; if (deVoice) u.voice = deVoice; u.rate = 0.9;
    speechSynthesis.speak(u);
  }

  $("answerForm").addEventListener("submit", (e) => { e.preventDefault(); check(); });
  $("checkBtn").onclick = check;
  $("skipBtn").onclick = skip;
  $("speakBtn").onclick = () => S.cur && speak(S.cur.kind === "plural" ? S.cur.g : S.cur.inf);
  document.querySelectorAll(".umlauts button").forEach((b) => {
    b.onclick = () => {
      const i = document.activeElement?.classList.contains("form-in") ? document.activeElement : document.querySelector("#fields input:not(:disabled)");
      if (!i || i.disabled) return;
      const s = i.selectionStart ?? i.value.length, e = i.selectionEnd ?? i.value.length;
      i.value = i.value.slice(0, s) + b.dataset.ch + i.value.slice(e); i.focus(); i.setSelectionRange(s + 1, s + 1);
    };
    b.addEventListener("mousedown", (e) => e.preventDefault());   // giữ con trỏ ở ô đang gõ
  });
  document.addEventListener("keydown", (e) => {
    if (!$("practiceScreen").classList.contains("hidden") && e.key === "Enter" && S.answered && document.activeElement !== $("checkBtn")) { e.preventDefault(); next(); }
  });
  document.querySelectorAll(".tab").forEach((t) => (t.onclick = () => {
    KIND = t.dataset.kind; localStorage.setItem("dw-forms-kind", KIND); rebuild(); renderHome();
  }));
  $("levelBackBtn").onclick = renderHome;
  $("backBtn").onclick = () => showLevel(S.lv);
  $("againBtn").onclick = () => startUnit(S.lv, S.unit);
  $("nextLessonBtn").onclick = () => startUnit(S.lv, S.unit + 1);

  window.__pluralOf = pluralOf;   // để kiểm thử
  renderHome();
})();
