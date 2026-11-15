(() => {
  "use strict";

  const LESSON_SIZE = 20;      // số từ mỗi bài
  const PASS_PCT = 99;         // phải đạt >= 99% mới qua bài
  const LEVEL_INFO = {
    A1: "Sơ cấp – Goethe-Zertifikat A1",
    A2: "Sơ cấp – Goethe-Zertifikat A2",
    B1: "Trung cấp – Goethe-Zertifikat B1",
    B2: "Trung cao – kinh tế, xã hội, khoa học, lập luận",
    C1: "Cao cấp – học thuật, luật cơ bản, tài chính & thuế",
    C2: "Thành thạo – luật dân sự, hình sự, hành chính & luật thuế",
  };
  const ARTICLES = ["der", "die", "das"];
  const STORE_KEY = "dw-progress-v2";
  const OPT_KEY = "dw-options-v2";

  // ---------- Dữ liệu ----------
  // VOCAB[level] = [[emoji, tiếng Đức, tiếng Việt, số nhiều, câu ví dụ DE, câu ví dụ EN], ...]
  const levels = {};
  for (const lv of Object.keys(VOCAB)) {
    const list = VOCAB[lv].map(([e, g, v, pl = "", exDe = "", exEn = ""]) => {
      const parts = g.split(" ");
      const article = ARTICLES.includes(parts[0]) && parts.length > 1 ? parts[0] : null;
      const bare = article ? parts.slice(1).join(" ") : g;
      // Chuẩn hóa ký hiệu số nhiều của danh sách A1 ("-ä, er" → "¨-er")
      pl = pl.replace(/^-\s*[äöüÄÖÜ],\s*/, "¨-").replace(/^¨-\s*-/, "¨-");
      return { id: lv + ":" + g, e, g, v, pl, exDe, exEn, article, bare };
    });
    const lessons = [];
    for (let i = 0; i < list.length; i += LESSON_SIZE) lessons.push(list.slice(i, i + LESSON_SIZE));
    // Gộp bài cuối nếu quá ngắn
    if (lessons.length > 1 && lessons[lessons.length - 1].length < LESSON_SIZE / 2) {
      lessons[lessons.length - 2].push(...lessons.pop());
    }
    levels[lv] = { list, lessons };
  }

  // progress: { lessons: { "A1-0": bestPct }, words: { id: {seen, correct} } }
  let progress = Object.assign({ lessons: {}, words: {} }, load(STORE_KEY, {}));
  const options = Object.assign({ article: true, speak: true, streak: 0 }, load(OPT_KEY, {}));

  function load(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  }
  function save() {
    localStorage.setItem(STORE_KEY, JSON.stringify(progress));
    localStorage.setItem(OPT_KEY, JSON.stringify(options));
  }

  const lessonKey = (lv, i) => `${lv}-${i}`;
  const best = (lv, i) => progress.lessons[lessonKey(lv, i)] ?? null;
  const passed = (lv, i) => (best(lv, i) ?? 0) >= PASS_PCT;
  const unlocked = (lv, i) => i === 0 || passed(lv, i - 1);
  const passedCount = (lv) => levels[lv].lessons.filter((_, i) => passed(lv, i)).length;

  // ---------- DOM ----------
  const $ = (id) => document.getElementById(id);
  const screens = ["homeScreen", "levelScreen", "practiceScreen", "doneScreen", "listScreen"];
  function show(name) {
    screens.forEach((s) => $(s).classList.toggle("hidden", s !== name));
    window.scrollTo(0, 0);
  }
  function setLevelColor(lv) {
    document.documentElement.style.setProperty("--lv", `var(--${lv})`);
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }
  function coloredWord(w) {
    if (!w.article) return `<span>${esc(w.g)}</span>`;
    return `<span class="art-${w.article}">${w.article}</span> ${esc(w.bare)}`;
  }
  function exampleHtml(w) {
    if (!w.exDe) return "";
    return `<div class="example">„${esc(w.exDe)}“${w.exEn ? `<br>${esc(w.exEn)}` : ""}</div>`;
  }

  // ---------- Trang chủ ----------
  function renderHome() {
    const box = $("levels");
    box.innerHTML = "";
    for (const lv of Object.keys(levels)) {
      const { list, lessons } = levels[lv];
      const done = passedCount(lv);
      const pct = Math.round((done / lessons.length) * 100);
      const el = document.createElement("div");
      el.className = "level";
      el.style.setProperty("--lv", `var(--${lv})`);
      el.innerHTML = `
        <h3>${lv}</h3>
        <div class="desc">${LEVEL_INFO[lv] || ""}</div>
        <div class="progress">${list.length} từ · Qua ${done}/${lessons.length} bài</div>
        <div class="mini-bar"><div style="width:${pct}%"></div></div>
        <div class="row"><button class="btn primary small">Vào học</button></div>`;
      el.querySelector("button").onclick = () => showLevel(lv);
      box.appendChild(el);
    }
    $("optArticle").checked = options.article;
    $("optSpeak").checked = options.speak;
    $("streak").textContent = "🔥 " + options.streak;
    show("homeScreen");
  }

  // ---------- Danh sách bài ----------
  let curLevel = "A1";
  function showLevel(lv) {
    curLevel = lv;
    setLevelColor(lv);
    const { lessons } = levels[lv];
    $("levelTitle").textContent = lv;
    $("levelSummary").textContent = `Qua ${passedCount(lv)}/${lessons.length} bài · cần ≥ ${PASS_PCT}% để qua`;
    const box = $("lessons");
    box.innerHTML = "";
    lessons.forEach((words, i) => {
      const b = best(lv, i);
      const ok = passed(lv, i);
      const open = unlocked(lv, i);
      const el = document.createElement("div");
      el.className = "lesson" + (ok ? " passed" : "") + (open ? "" : " locked");
      el.innerHTML = `
        <div class="top"><span class="name">Bài ${i + 1}</span><span>${ok ? "✅" : open ? "🔓" : "🔒"}</span></div>
        <div class="emojis">${words.slice(0, 5).map((w) => w.e).join("")}</div>
        <div class="best">${words.length} từ · ${b === null ? "chưa làm" : "cao nhất " + b + "%"}</div>
        <div class="row">
          <button class="btn primary small" data-act="go" ${open ? "" : "disabled"}>${ok ? "Ôn lại" : "Học"}</button>
          <button class="btn ghost small" data-act="list">Xem từ</button>
        </div>`;
      el.querySelector('[data-act="go"]').onclick = () => startLesson(lv, i);
      el.querySelector('[data-act="list"]').onclick = () => showList(lv, i);
      box.appendChild(el);
    });
    show("levelScreen");
    // Cuộn tới bài đang học
    const firstOpen = lessons.findIndex((_, i) => unlocked(lv, i) && !passed(lv, i));
    if (firstOpen > 3) box.children[firstOpen].scrollIntoView({ block: "center" });
  }

  // ---------- Xem từ ----------
  let listLesson = 0;
  function showList(lv, i) {
    listLesson = i;
    setLevelColor(lv);
    $("listBadge").textContent = `${lv} · Bài ${i + 1}`;
    $("listPracticeBtn").disabled = !unlocked(lv, i);
    const grid = $("wordGrid");
    grid.innerHTML = "";
    for (const w of levels[lv].lessons[i]) {
      const el = document.createElement("div");
      el.className = "word";
      el.title = w.exDe ? `${w.exDe}\n${w.exEn}` : "Bấm để nghe phát âm";
      el.innerHTML = `
        <div class="e">${w.e}</div>
        <div class="g">${coloredWord(w)}</div>
        ${w.pl ? `<div class="v">${w.article ? "số nhiều" : "dạng"}: ${esc(w.pl)}</div>` : ""}
        <div class="v">${esc(w.v)}</div>`;
      el.onclick = () => speak(w.g);
      grid.appendChild(el);
    }
    show("listScreen");
  }

  // ---------- Luyện tập ----------
  const S = {
    level: "A1", lesson: 0, queue: [], current: null, answered: false,
    hints: 0, total: 0, finished: new Set(), firstResult: new Map(), mistakes: new Map(),
  };

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function startLesson(lv, i) {
    if (!unlocked(lv, i)) return;
    const pool = levels[lv].lessons[i];
    Object.assign(S, {
      level: lv, lesson: i, queue: shuffle([...pool]), total: pool.length,
      finished: new Set(), firstResult: new Map(), mistakes: new Map(),
    });
    setLevelColor(lv);
    $("lessonBadge").textContent = `${lv} · Bài ${i + 1}`;
    show("practiceScreen");
    next();
  }

  // Độ chính xác = số từ đúng ngay lần đầu (không gợi ý) / tổng số từ trong bài
  function accuracy() {
    let good = 0;
    for (const v of S.firstResult.values()) if (v) good++;
    return Math.floor((good / S.total) * 100);
  }
  // Độ chính xác hiện tại tính trên các từ đã gặp
  function liveAccuracy() {
    if (S.firstResult.size === 0) return 100;
    let good = 0;
    for (const v of S.firstResult.values()) if (v) good++;
    return Math.floor((good / S.firstResult.size) * 100);
  }

  function expected(w) {
    return options.article || !w.article ? w.g : w.bare;
  }

  function renderPattern() {
    const w = S.current;
    const target = expected(w);
    let out = "";
    let idx = 0;
    target.split(" ").forEach((part, i) => {
      if (i > 0) out += "   ";
      if (i === 0 && w.article && options.article && S.hints === 0) {
        out += "___";
      } else {
        out += [...part].map((ch, k) => (idx + k < S.hints ? ch : "_")).join(" ");
      }
      idx += part.length + 1;
    });
    $("pattern").textContent = out;
  }

  function next() {
    if (S.queue.length === 0) return finish();
    S.current = S.queue.shift();
    S.answered = false;
    S.hints = 0;
    const w = S.current;
    const pic = $("picture");
    pic.textContent = w.e;
    pic.style.animation = "none"; void pic.offsetWidth; pic.style.animation = "";
    $("meaning").textContent = w.v;
    renderPattern();
    const input = $("answer");
    input.value = "";
    input.className = "";
    input.disabled = false;
    $("feedback").innerHTML = "";
    $("checkBtn").textContent = "Kiểm tra ↵";
    updateBar();
    input.focus();
  }

  function updateBar() {
    $("sessionCount").textContent = `${S.finished.size}/${S.total}`;
    $("sessionBar").style.width = (S.finished.size / S.total) * 100 + "%";
    const acc = liveAccuracy();
    $("sessionAcc").textContent = acc + "%";
    $("sessionAcc").classList.toggle("bad", acc < PASS_PCT);
  }

  const clean = (s) => s.trim().replace(/\s+/g, " ");
  const loose = (s) =>
    clean(s).toLowerCase()
      .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss");

  function judge(input, w) {
    const target = expected(w);
    const typed = clean(input);
    const candidates = [target];
    if (!options.article && w.article) candidates.push(w.g);
    for (const c of candidates) {
      if (typed === c) return { ok: true };
      if (typed.toLowerCase() === c.toLowerCase())
        return { ok: true, note: "Chú ý viết hoa: danh từ tiếng Đức luôn viết hoa chữ cái đầu." };
      if (loose(typed) === loose(c))
        return { ok: true, note: "Đúng! Cách viết chuẩn có ä / ö / ü / ß." };
    }
    if (w.article) {
      const parts = typed.split(" ");
      if (parts.length > 1 && ARTICLES.includes(parts[0].toLowerCase()) &&
          loose(parts.slice(1).join(" ")) === loose(w.bare)) {
        return { ok: false, why: `Sai mạo từ – phải là “${w.article}”.` };
      }
      if (options.article && loose(typed) === loose(w.bare)) {
        return { ok: false, why: "Thiếu mạo từ (der / die / das)." };
      }
    }
    return { ok: false };
  }

  function record(w, ok) {
    if (!S.firstResult.has(w.id)) S.firstResult.set(w.id, ok && S.hints === 0);
    const p = progress.words[w.id] || { seen: 0, correct: 0 };
    p.seen++;
    if (ok) p.correct++;
    progress.words[w.id] = p;
    if (window.DW) DW.recordWord(w.id, ok, ok && S.hints === 0);   // đưa vào lịch ôn tập ngắt quãng
    options.streak = ok ? options.streak + 1 : 0;
    $("streak").textContent = "🔥 " + options.streak;
    save();
  }

  function showAnswer(w, html) {
    $("feedback").innerHTML = html + exampleHtml(w);
    S.hints = 99; renderPattern();
    $("checkBtn").textContent = "Tiếp tục →";
    updateBar();
    if (options.speak) speak(w.g);
    $("checkBtn").focus();
  }

  function check() {
    if (S.answered) return next();
    const input = $("answer");
    if (!input.value.trim()) { input.focus(); return; }
    const w = S.current;
    const r = judge(input.value, w);
    S.answered = true;
    input.disabled = true;
    record(w, r.ok);
    const pl = w.pl ? `<span class="plural">(${w.article ? "số nhiều" : "dạng"}: ${esc(w.pl)})</span>` : "";

    if (r.ok) {
      S.finished.add(w.id);
      input.className = "ok";
      const hintNote = S.hints > 0 ? "Có dùng gợi ý nên tính là sai trong điểm bài. " : "";
      showAnswer(w,
        `<span class="ok">✔ Chính xác!</span> <span class="answer">${coloredWord(w)}</span>${pl}` +
        (r.note || hintNote ? `<span class="note">${hintNote}${r.note || ""}</span>` : ""));
    } else {
      S.mistakes.set(w.id, w);
      input.className = "err";
      requeue(w);
      $("card").classList.remove("shake"); void $("card").offsetWidth; $("card").classList.add("shake");
      showAnswer(w,
        `<span class="err">✘ Chưa đúng.</span> Đáp án: <span class="answer">${coloredWord(w)}</span>${pl}` +
        `<span class="note">${r.why ? r.why + " " : ""}Từ này sẽ xuất hiện lại để ôn.</span>`);
    }
  }

  function requeue(w) {
    const pos = Math.min(S.queue.length, 3 + Math.floor(Math.random() * 3));
    S.queue.splice(pos, 0, w);
  }

  function hint() {
    if (S.answered) return;
    const target = expected(S.current);
    if (S.hints === 0 && S.current.article && options.article) S.hints = S.current.article.length + 1;
    S.hints = Math.min(S.hints + 1, target.length);
    renderPattern();
    $("answer").focus();
  }

  function skip() {
    if (S.answered) return next();
    const w = S.current;
    S.answered = true;
    S.mistakes.set(w.id, w);
    record(w, false);
    requeue(w);
    $("answer").disabled = true;
    showAnswer(w, `Đáp án: <span class="answer">${coloredWord(w)}</span><span class="note">Từ này sẽ xuất hiện lại để ôn.</span>`);
  }

  function finish() {
    const acc = accuracy();
    const key = lessonKey(S.level, S.lesson);
    progress.lessons[key] = Math.max(progress.lessons[key] ?? 0, acc);
    save();
    const ok = acc >= PASS_PCT;
    const hasNext = S.lesson + 1 < levels[S.level].lessons.length;
    $("doneIcon").textContent = ok ? "🎉" : "💪";
    $("doneTitle").textContent = ok ? `Qua bài ${S.lesson + 1}!` : "Chưa đạt – làm lại nhé!";
    $("doneScore").textContent = acc + "%";
    $("doneScore").className = "score " + (ok ? "pass" : "fail");
    const good = [...S.firstResult.values()].filter(Boolean).length;
    $("doneText").textContent = ok
      ? `Đúng ngay lần đầu ${good}/${S.total} từ.` + (hasNext ? " Bài tiếp theo đã được mở khóa." : " Bạn đã hoàn thành cấp độ này!")
      : `Đúng ngay lần đầu ${good}/${S.total} từ. Cần ≥ ${PASS_PCT}% (tức là không sai từ nào) để mở bài tiếp theo.`;
    const m = $("mistakes");
    m.innerHTML = S.mistakes.size
      ? "<div style='width:100%'>Cần ôn lại:</div>" +
        [...S.mistakes.values()].map((w) => `<span>${w.e} ${coloredWord(w)} – ${esc(w.v)}</span>`).join("")
      : "";
    $("nextLessonBtn").classList.toggle("hidden", !(ok && hasNext));
    $("againBtn").textContent = ok ? "Làm lại bài này" : "Làm lại ngay";
    $("againBtn").className = ok ? "btn ghost" : "btn primary";
    show("doneScreen");
  }

  // ---------- Phát âm ----------
  let deVoice = null;
  function pickVoice() {
    const voices = speechSynthesis.getVoices();
    deVoice = voices.find((v) => v.lang === "de-DE") || voices.find((v) => v.lang.startsWith("de")) || null;
  }
  if ("speechSynthesis" in window) {
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  }
  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE";
    if (deVoice) u.voice = deVoice;
    u.rate = 0.9;
    speechSynthesis.speak(u);
  }

  // ---------- Sự kiện ----------
  $("answerForm").addEventListener("submit", (e) => { e.preventDefault(); check(); });
  $("checkBtn").onclick = check;
  $("hintBtn").onclick = hint;
  $("skipBtn").onclick = skip;
  $("speakBtn").onclick = () => speak(S.current.g);
  document.querySelectorAll(".umlauts button").forEach((b) => {
    b.onclick = () => {
      const input = $("answer");
      if (input.disabled) return;
      const s = input.selectionStart ?? input.value.length;
      const e = input.selectionEnd ?? input.value.length;
      input.value = input.value.slice(0, s) + b.dataset.ch + input.value.slice(e);
      input.focus();
      input.setSelectionRange(s + 1, s + 1);
    };
  });
  document.addEventListener("keydown", (e) => {
    if ($("practiceScreen").classList.contains("hidden")) return;
    if (e.key === "Enter" && S.answered && document.activeElement !== $("checkBtn")) {
      e.preventDefault(); next();
    }
  });

  $("homeBtn").onclick = renderHome;
  $("levelBackBtn").onclick = renderHome;
  $("backBtn").onclick = () => showLevel(S.level);
  $("listBackBtn").onclick = () => showLevel(curLevel);
  $("doneListBtn").onclick = () => showLevel(S.level);
  $("againBtn").onclick = () => startLesson(S.level, S.lesson);
  $("nextLessonBtn").onclick = () => startLesson(S.level, S.lesson + 1);
  $("listPracticeBtn").onclick = () => startLesson(curLevel, listLesson);

  $("optArticle").onchange = (e) => { options.article = e.target.checked; save(); };
  $("optSpeak").onchange = (e) => { options.speak = e.target.checked; save(); };
  $("resetBtn").onclick = () => {
    if (!confirm("Xóa toàn bộ tiến độ học?")) return;
    progress = { lessons: {}, words: {} };
    options.streak = 0;
    save();
    renderHome();
  };

  renderHome();
})();
