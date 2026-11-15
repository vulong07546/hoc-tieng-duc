(() => {
  "use strict";

  const PASS_PCT = 99;
  const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const params = new URLSearchParams(location.search);
  const MODE = ["grammar", "mc", "vmc", "pmc", "lmc", "fmc", "exam", "tn", "phrases", "listen", "speak"].includes(params.get("mode")) ? params.get("mode") : "grammar";
  const STORE_KEY = "dw-quiz-" + MODE;
  const TEST_SIZE = 30;

  const MODE_INFO = {
    grammar: {
      title: "📐 Ngữ pháp",
      sub: "Đọc quy tắc, rồi điền từ còn thiếu vào câu. Cần đúng ≥ 99% để mở chủ đề tiếp theo.",
    },
    mc: {
      title: "☑️ Trắc nghiệm ngữ pháp",
      sub: "Bộ trắc nghiệm đầy đủ chương trình ngữ pháp từng cấp: đọc lý thuyết, chọn 1 trong 4 đáp án (bấm hoặc phím 1–4). Cuối mỗi cấp có bài kiểm tra tổng hợp 30 câu. Cần đúng ≥ 99% để mở bài tiếp theo.",
    },
    tn: {
      title: "☑️ Trắc nghiệm",
      sub: "Tất cả bài trắc nghiệm 4 lựa chọn, chia theo mục. Mỗi mục có bài theo cấp A1–C2 và bài kiểm tra 30 câu cuối cấp; mục 🏆 Thi tổng hợp trộn câu hỏi của mọi mục thành đề thi theo cấp. Cần đúng ≥ 99% để qua bài.",
    },
    pmc: {
      title: "💬 Trắc nghiệm cụm từ",
      sub: "Nhìn hình + nghĩa chọn câu tiếng Đức đúng, hoặc đọc câu tiếng Đức chọn nghĩa (phím 1–4). Cần đúng ≥ 99% để mở bài tiếp theo.",
    },
    lmc: {
      title: "🎧 Trắc nghiệm nghe",
      sub: "Nghe giọng đọc tiếng Đức (không hiện chữ), rồi chọn nghĩa đúng hoặc chọn câu/từ bạn vừa nghe. Bấm 🔊 hoặc Ctrl+Space để nghe lại. Cần đúng ≥ 99% để mở bài tiếp theo.",
    },
    fmc: {
      title: "🔤 Trắc nghiệm dạng từ",
      sub: "Chọn dạng số nhiều đúng của danh từ, và dạng Präteritum / Perfekt đúng của động từ (phím 1–4). Cần đúng ≥ 99% để mở bài tiếp theo.",
    },
    exam: {
      title: "🏆 Thi tổng hợp",
      sub: "Mỗi đề 40 câu ngẫu nhiên: 12 từ vựng, 12 ngữ pháp, 6 cụm từ, 5 nghe, 5 dạng từ — đúng trình độ cấp đó. Mỗi lần làm là một bộ câu mới. Cần đúng ≥ 99% để qua đề.",
    },
    vmc: {
      title: "🔠 Trắc nghiệm từ vựng",
      sub: "Nhìn hình + nghĩa tiếng Việt chọn từ tiếng Đức, hoặc nhìn từ tiếng Đức chọn nghĩa (bấm hoặc phím 1–4). Bài chia giống phần Từ vựng (20 từ/bài); cuối mỗi cấp có bài kiểm tra 30 từ ngẫu nhiên. Cần đúng ≥ 99% để mở bài tiếp theo.",
    },
    phrases: {
      title: "💬 Cụm từ & mẫu câu",
      sub: "Nhìn hình và nghĩa tiếng Việt, gõ câu tiếng Đức tương ứng. Cần đúng ≥ 99% để mở chủ đề tiếp theo.",
    },
    listen: {
      title: "🎧 Luyện nghe",
      sub: "Nghe giọng đọc tiếng Đức và gõ lại chính xác những gì nghe được. Cần đúng ≥ 99% để mở bài tiếp theo.",
    },
    speak: {
      title: "🎤 Luyện nói",
      sub: "Nghe mẫu, bấm micro và đọc to câu tiếng Đức. Máy nhận dạng giọng nói sẽ chấm từng từ. Mỗi câu có 3 lần thử; cần đúng ≥ 99% để mở bài tiếp theo. Dùng Chrome hoặc Edge và cho phép micro.",
    },
  };

  const buildUnits = (lv) => QZ.buildUnits(MODE, lv);

  const units = {};
  for (const lv of LEVELS) units[lv] = buildUnits(lv);

  let progress = load(STORE_KEY, {});
  function load(key, fb) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fb; } catch { return fb; }
  }
  function save() { localStorage.setItem(STORE_KEY, JSON.stringify(progress)); }

  const key = (lv, i) => `${lv}-${i}`;
  const best = (lv, i) => progress[key(lv, i)] ?? null;
  const passed = (lv, i) => (best(lv, i) ?? 0) >= PASS_PCT;
  const unlocked = (lv, i) => i === 0 || MODE === "exam" || passed(lv, i - 1);
  const passedCount = (lv) => units[lv].filter((_, i) => passed(lv, i)).length;

  // ---------- DOM ----------
  const $ = (id) => document.getElementById(id);
  const screens = ["homeScreen", "levelScreen", "introScreen", "practiceScreen", "doneScreen"];
  function show(name) {
    screens.forEach((s) => $(s).classList.toggle("hidden", s !== name));
    window.scrollTo(0, 0);
  }
  const setLevelColor = (lv) => document.documentElement.style.setProperty("--lv", `var(--${lv})`);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  $("modeTitle").textContent = MODE_INFO[MODE].title;
  $("modeSub").textContent = MODE_INFO[MODE].sub;
  document.title = MODE_INFO[MODE].title.replace(/^\S+\s/, "") + " – Học tiếng Đức";

  // ---------- Trang chủ ----------
  function renderTabs() {
    const box = $("mcTabs");
    if (!QZ.MC_MODES.some(([m]) => m === MODE) && MODE !== "tn") return;
    box.classList.remove("hidden");
    box.innerHTML = [["tn", "☑️", "Tất cả"], ...QZ.MC_MODES].map(([m, ic, name]) =>
      `<a class="tab${m === MODE ? " active" : ""}" href="quiz.html?mode=${m}">${ic} ${name}</a>`).join("") +
      `<a class="tab" href="reading.html">📖 Đọc hiểu</a>`;
  }
  // Trang tổng: thẻ cho từng mục trắc nghiệm, tiến độ theo cấp
  function renderHub() {
    const box = $("levels");
    box.innerHTML = "";
    for (const [m, ic, name] of QZ.MC_MODES) {
      const store = load("dw-quiz-" + m, {});
      let total = 0, done = 0, q = 0;
      const per = LEVELS.map((lv) => {
        const list = QZ.buildUnits(m, lv);
        const d = list.filter((_, i) => (store[`${lv}-${i}`] ?? 0) >= PASS_PCT).length;
        total += list.length; done += d;
        q += list.filter((u) => !u.test && !u.exam).reduce((s, u) => s + u.items.length, 0);
        return list.length ? `<span class="lvchip" style="--lv:var(--${lv})" title="${lv}: qua ${d}/${list.length}">${lv} ${d}/${list.length}</span>` : "";
      }).join("");
      const el = document.createElement("a");
      el.className = "level hub-card";
      el.href = "quiz.html?mode=" + m;
      el.innerHTML = `<h3>${ic} ${name}</h3>
        <div class="desc">${m === "exam" ? "3 đề × 6 cấp, 40 câu/đề, trộn mọi mục" : `${q.toLocaleString("vi-VN")} câu · ${total} bài`}</div>
        <div class="progress">Qua ${done}/${total}</div>
        <div class="mini-bar"><div style="width:${total ? Math.round((done / total) * 100) : 0}%"></div></div>
        <div class="lvchips">${per}</div>`;
      box.appendChild(el);
    }
    const r = document.createElement("a");
    r.className = "level hub-card"; r.href = "reading.html";
    r.innerHTML = `<h3>📖 Đọc hiểu</h3><div class="desc">Đọc bài và trả lời câu hỏi trắc nghiệm</div><div class="progress">Mở trang Đọc →</div>`;
    box.appendChild(r);
    show("homeScreen");
  }

  function renderHome() {
    if (MODE === "tn") return renderHub();
    const box = $("levels");
    box.innerHTML = "";
    for (const lv of LEVELS) {
      const list = units[lv];
      if (!list.length) continue;
      const done = passedCount(lv);
      const total = list.filter((u) => !u.test && !u.exam).reduce((s, u) => s + u.items.length, 0);
      const el = document.createElement("div");
      el.className = "level";
      el.style.setProperty("--lv", `var(--${lv})`);
      el.innerHTML = `
        <h3>${lv}</h3>
        <div class="desc">${MODE === "exam" ? `${list.length} đề · ${list[0].size} câu/đề`
          : `${list.filter((u) => !u.test).length} ${["mc", "grammar", "phrases", "pmc"].includes(MODE) ? "chủ đề" : "bài"}${list.some((u) => u.test) ? " + kiểm tra" : ""} · ${total} câu`}</div>
        <div class="progress">Qua ${done}/${list.length}</div>
        <div class="mini-bar"><div style="width:${Math.round((done / list.length) * 100)}%"></div></div>
        <div class="row"><button class="btn primary small">Vào học</button></div>`;
      el.querySelector("button").onclick = () => showLevel(lv);
      box.appendChild(el);
    }
    if (!box.children.length) box.innerHTML = "<p>Chưa có dữ liệu cho phần này.</p>";
    show("homeScreen");
  }

  // ---------- Danh sách bài ----------
  let curLevel = "A1";
  function showLevel(lv) {
    curLevel = lv;
    setLevelColor(lv);
    $("levelTitle").textContent = lv;
    $("levelSummary").textContent = `Qua ${passedCount(lv)}/${units[lv].length} · cần ≥ ${PASS_PCT}% để qua`;
    const box = $("lessons");
    box.innerHTML = "";
    units[lv].forEach((u, i) => {
      const b = best(lv, i), ok = passed(lv, i), open = unlocked(lv, i);
      const el = document.createElement("div");
      el.className = "lesson" + (ok ? " passed" : "") + (open ? "" : " locked");
      el.innerHTML = `
        <div class="top"><span class="name">${u.emoji} ${i + 1}</span><span>${ok ? "✅" : open ? "🔓" : "🔒"}</span></div>
        <div class="unit-title">${esc(u.title)}</div>
        <div class="best">${u.size ?? u.items.length} câu · ${b === null ? "chưa làm" : "cao nhất " + b + "%"}</div>
        <div class="row"><button class="btn primary small" ${open ? "" : "disabled"}>${ok ? "Ôn lại" : "Học"}</button></div>`;
      el.querySelector("button").onclick = () => openUnit(lv, i);
      box.appendChild(el);
    });
    show("levelScreen");
    const firstOpen = units[lv].findIndex((_, i) => unlocked(lv, i) && !passed(lv, i));
    if (firstOpen > 3) box.children[firstOpen].scrollIntoView({ block: "center" });
  }

  function openUnit(lv, i) {
    if (!unlocked(lv, i)) return;
    const u = units[lv][i];
    if (u.intro) {
      setLevelColor(lv);
      $("introBadge").textContent = `${lv} · ${i + 1}`;
      $("introTitle").textContent = u.title;
      $("introText").textContent = u.intro;
      $("introStartBtn").onclick = () => startUnit(lv, i);
      show("introScreen");
    } else startUnit(lv, i);
  }

  // ---------- Luyện tập ----------
  const S = { level: "A1", unit: 0, queue: [], cur: null, answered: false, total: 0,
              finished: new Set(), first: new Map(), mistakes: new Map() };

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Trộn thứ tự đáp án để không học thuộc vị trí
  function prepareChoice(it) {
    const order = shuffle(it.options.map((_, k) => k));
    const options = order.map((k) => it.options[k]);
    const answer = order.indexOf(it.answer);
    const right = options[answer];
    const full = it.say || (it.q.includes("___") ? it.q.replace("___", right) : right);
    return { ...it, options, answer, answers: [right], full };
  }

  function startUnit(lv, i) {
    const u = units[lv][i];
    let src = u.pick ? u.pick() : u.items.slice();
    if (u.test) src = shuffle(src).slice(0, u.size || TEST_SIZE);
    src = src.map((it) => (it.build ? it.build() : it))
      .filter((it) => it && (it.kind !== "choice" || (Array.isArray(it.options) && it.options.length === 4)));
    const items = src.map((it, k) => ({ ...(it.kind === "choice" ? prepareChoice(it) : it), id: k }));
    Object.assign(S, { level: lv, unit: i, queue: shuffle(items), total: items.length,
                       finished: new Set(), first: new Map(), mistakes: new Map() });
    setLevelColor(lv);
    $("lessonBadge").textContent = `${lv} · ${units[lv][i].title}`;
    show("practiceScreen");
    next();
  }

  function next() {
    if (!S.queue.length) return finish();
    const it = (S.cur = S.queue.shift());
    S.answered = false;
    const pic = $("picture"), input = $("answer");
    $("listenBtns").classList.toggle("hidden", it.kind !== "listen" && !it.audio);
    const isChoice = it.kind === "choice";
    $("gapSentence").classList.toggle("hidden", it.kind !== "gap" && !isChoice);
    pic.classList.toggle("hidden", it.kind === "gap" || it.kind === "listen" || (isChoice && !it.e));
    $("choices").classList.toggle("hidden", !isChoice);
    const isSpeak = it.kind === "speak";
    $("speakArea").classList.toggle("hidden", !isSpeak);
    $("answerForm").classList.toggle("hidden", isSpeak || isChoice);
    $("umlauts").classList.toggle("hidden", isSpeak || isChoice);
    $("checkBtn").classList.toggle("hidden", isSpeak || isChoice);
    $("meaning").textContent = "";
    $("subline").textContent = "";
    $("subline").classList.toggle("plain", isChoice);

    if (isChoice) {
      $("gapSentence").innerHTML = esc(it.q).replace("___", '<span class="gap">＿＿＿</span>');
      $("subline").textContent = (MODE === "exam" && it.cat ? it.cat + " · " : "") + (it.prompt || "Chọn đáp án đúng") + " (phím 1–4)";
      if (it.audio) setTimeout(() => speak(it.full, 0.9), 250);
      if (it.e) { pic.textContent = it.e; pic.style.animation = "none"; void pic.offsetWidth; pic.style.animation = ""; }
      $("gapSentence").classList.toggle("word-q", !!it.big);
      $("gapSentence").classList.toggle("hidden", !it.q);
      $("choices").innerHTML = it.options.map((o, k) =>
        `<button type="button" class="choice" data-k="${k}"><span class="ck">${k + 1}</span>${esc(o)}</button>`).join("");
      $("choices").querySelectorAll(".choice").forEach((b) => (b.onclick = () => pickChoice(+b.dataset.k)));
      $("feedback").innerHTML = "";
      updateBar();
      return;
    } else if (it.kind === "gap") {
      $("gapSentence").innerHTML = esc(it.q).replace("___", '<span class="gap">＿＿＿</span>');
      $("meaning").textContent = it.vi;
      $("subline").textContent = it.hint;
      input.placeholder = "Gõ từ còn thiếu…";
    } else if (it.kind === "phrase") {
      pic.textContent = it.e || "💬";
      $("meaning").textContent = it.vi;
      input.placeholder = "Gõ câu tiếng Đức…";
    } else if (isSpeak) {
      stopMic();
      S.tries = 0;
      pic.textContent = it.e || "🗣️";
      $("meaning").textContent = it.vi;
      $("sayText").textContent = hardMode() ? "" : it.full;
      $("sayText").classList.toggle("hidden", hardMode());
      $("subline").textContent = hardMode() ? "Nói câu tiếng Đức có nghĩa trên" : "Đọc to câu trên";
      $("heard").innerHTML = "";
      $("tries").textContent = `Còn ${MAX_TRIES} lần thử`;
      $("micBtn").disabled = !Recognition;
      $("feedback").innerHTML = Recognition ? "" :
        '<span class="err">Trình duyệt này không hỗ trợ nhận dạng giọng nói.</span><span class="note">Hãy mở web bằng Google Chrome hoặc Microsoft Edge.</span>';
      updateBar();
      $("micBtn").focus();
      return;
    } else {
      $("subline").textContent = "Nghe và gõ lại";
      input.placeholder = "Gõ những gì bạn nghe được…";
      setTimeout(() => speak(it.full, 0.9), 250);
    }
    pic.style.animation = "none"; void pic.offsetWidth; pic.style.animation = "";
    input.value = "";
    input.className = it.kind === "gap" ? "" : "wide";
    input.disabled = false;
    $("feedback").innerHTML = "";
    $("checkBtn").textContent = "Kiểm tra ↵";
    updateBar();
    input.focus();
  }

  function liveAcc() {
    if (!S.first.size) return 100;
    return Math.floor(([...S.first.values()].filter(Boolean).length / S.first.size) * 100);
  }
  function updateBar() {
    $("sessionCount").textContent = `${S.finished.size}/${S.total}`;
    $("sessionBar").style.width = (S.finished.size / S.total) * 100 + "%";
    const a = liveAcc();
    $("sessionAcc").textContent = a + "%";
    $("sessionAcc").classList.toggle("bad", a < PASS_PCT);
  }

  // Bỏ dấu câu, khoảng trắng thừa; so sánh từng mức
  const strip = (s) => s.replace(/[.,!?;:„“”"'‚‘’«»()\-–—…]/g, " ").replace(/\s+/g, " ").trim();
  const loose = (s) => strip(s).toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss");

  function judge(typed, it) {
    const t = strip(typed);
    for (const a of it.answers) {
      if (t === strip(a)) return { ok: true };
    }
    for (const a of it.answers) {
      if (t.toLowerCase() === strip(a).toLowerCase())
        return { ok: true, note: "Chú ý viết hoa đúng (danh từ và Sie viết hoa)." };
      if (loose(t) === loose(a)) return { ok: true, note: "Cách viết chuẩn có ä / ö / ü / ß." };
    }
    return { ok: false };
  }

  function pickChoice(k) {
    if (S.answered || !S.cur || S.cur.kind !== "choice") return;
    const it = S.cur, ok = k === it.answer;
    markChoices(k);
    if (!ok) { $("card").classList.remove("shake"); void $("card").offsetWidth; $("card").classList.add("shake"); }
    settle(ok, (ok ? `<span class="ok">✔ Chính xác!</span>` : `<span class="err">✘ Chưa đúng.</span> Đáp án:`) +
      `<div class="answer-line">${answerHtml(it)}</div>` + extraHtml(it) +
      (ok ? "" : `<span class="note">Câu này sẽ xuất hiện lại để ôn.</span>`));
  }
  function markChoices(chosen) {
    $("choices").querySelectorAll(".choice").forEach((b) => {
      const k = +b.dataset.k;
      b.disabled = true;
      if (k === S.cur.answer) b.classList.add("right");
      else if (k === chosen) b.classList.add("wrong");
    });
  }

  function answerHtml(it) {
    if (it.kind === "choice") {
      const right = it.options[it.answer];
      return it.q.includes("___") ? esc(it.q).replace("___", `<b class="fill">${esc(right)}</b>`) : `<b>${esc(right)}</b>`;
    }
    if (it.kind === "gap") {
      return esc(it.q).replace("___", `<b class="fill">${esc(it.answers[0])}</b>`);
    }
    return `<b>${esc(it.full)}</b>`;
  }
  function extraHtml(it) {
    const parts = [];
    if (it.kind === "listen" && it.vi) parts.push(`Nghĩa: ${esc(it.vi)}`);
    if ((it.kind === "gap" || it.kind === "choice") && it.explain) parts.push(esc(it.explain));
    if (it.kind === "choice" && it.vi) parts.push("Nghĩa: " + esc(it.vi));
    if (it.answers.length > 1 && it.kind !== "gap" && it.kind !== "choice") parts.push("Cách nói khác: " + it.answers.slice(1).map(esc).join(" / "));
    if (it.kind === "gap" && it.answers.length > 1) parts.push("Cũng đúng: " + it.answers.slice(1).map(esc).join(" / "));
    return parts.length ? `<span class="note">${parts.join("<br>")}</span>` : "";
  }

  function settle(ok, html) {
    const it = S.cur;
    if (!S.first.has(it.id)) S.first.set(it.id, ok);
    if (window.DW) DW.logAnswer(ok);
    if (ok) S.finished.add(it.id);
    else { S.mistakes.set(it.id, it); requeue(it); }
    S.answered = true;
    if (it.kind === "choice") $("checkBtn").classList.remove("hidden");
    if (it.kind === "speak") { stopMic(); $("checkBtn").classList.remove("hidden"); $("sayText").classList.remove("hidden"); $("sayText").textContent = it.full; }
    $("answer").disabled = true;
    $("feedback").innerHTML = html;
    $("checkBtn").textContent = "Tiếp tục →";
    updateBar();
    if (it.kind !== "listen") speak(it.full);
    $("checkBtn").focus();
  }

  function check() {
    if (S.answered) return next();
    const input = $("answer");
    if (!input.value.trim()) return input.focus();
    const it = S.cur;
    const r = judge(input.value, it);
    input.className = (it.kind === "gap" ? "" : "wide ") + (r.ok ? "ok" : "err");
    if (r.ok) {
      settle(true, `<span class="ok">✔ Chính xác!</span><div class="answer-line">${answerHtml(it)}</div>` +
        (r.note ? `<span class="note">${r.note}</span>` : "") + extraHtml(it));
    } else {
      $("card").classList.remove("shake"); void $("card").offsetWidth; $("card").classList.add("shake");
      settle(false, `<span class="err">✘ Chưa đúng.</span> Đáp án:<div class="answer-line">${answerHtml(it)}</div>` +
        extraHtml(it) + `<span class="note">Câu này sẽ xuất hiện lại để ôn.</span>`);
    }
  }

  function skip() {
    if (S.answered) return next();
    if (S.cur.kind === "choice") markChoices(-1);
    settle(false, `Đáp án:<div class="answer-line">${answerHtml(S.cur)}</div>` + extraHtml(S.cur) +
      `<span class="note">Câu này sẽ xuất hiện lại để ôn.</span>`);
  }

  function requeue(it) {
    const pos = Math.min(S.queue.length, 3 + Math.floor(Math.random() * 3));
    S.queue.splice(pos, 0, it);
  }

  function finish() {
    const good = [...S.first.values()].filter(Boolean).length;
    const acc = Math.floor((good / S.total) * 100);
    const k = key(S.level, S.unit);
    progress[k] = Math.max(progress[k] ?? 0, acc);
    save();
    const ok = acc >= PASS_PCT;
    const hasNext = S.unit + 1 < units[S.level].length;
    $("doneIcon").textContent = ok ? "🎉" : "💪";
    $("doneTitle").textContent = ok ? "Qua bài!" : "Chưa đạt – làm lại nhé!";
    $("doneScore").textContent = acc + "%";
    $("doneScore").className = "score " + (ok ? "pass" : "fail");
    $("doneText").textContent = `Đúng ngay lần đầu ${good}/${S.total} câu. ` +
      (ok ? (hasNext ? "Bài tiếp theo đã được mở khóa." : "Bạn đã hoàn thành cấp độ này!")
          : `Cần ≥ ${PASS_PCT}% (không sai câu nào) để mở bài tiếp theo.`);
    $("mistakes").innerHTML = S.mistakes.size
      ? "<div style='width:100%'>Cần ôn lại:</div>" +
        [...S.mistakes.values()].map((it) => `<span>${esc(it.full)}</span>`).join("")
      : "";
    $("nextLessonBtn").classList.toggle("hidden", !(ok && hasNext));
    $("againBtn").className = ok ? "btn ghost" : "btn primary";
    show("doneScreen");
  }

  // ---------- Luyện nói (nhận dạng giọng nói) ----------
  const MAX_TRIES = 3;
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  let rec = null, listening = false;
  const hardMode = () => MODE === "speak" && $("optHard") && $("optHard").checked;

  function stopMic() {
    if (rec && listening) { try { rec.abort(); } catch {} }
    listening = false;
    $("micBtn").classList.remove("on");
    $("micBtn").textContent = "🎤 Bấm để nói";
  }

  function startMic() {
    if (S.answered || !Recognition) return;
    if (listening) return stopMic();
    speechSynthesis.cancel();
    rec = new Recognition();
    rec.lang = "de-DE";
    rec.interimResults = true;
    rec.maxAlternatives = 5;
    let finalAlts = null;
    rec.onresult = (e) => {
      const r = e.results[e.results.length - 1];
      $("heard").innerHTML = `<span class="muted">Đang nghe: </span>${esc(r[0].transcript)}`;
      if (r.isFinal) finalAlts = [...r].map((a) => a.transcript);
    };
    rec.onerror = (e) => {
      const msg = e.error === "not-allowed" ? "Chưa cho phép dùng micro. Hãy bấm biểu tượng ổ khóa trên thanh địa chỉ để cho phép."
        : e.error === "no-speech" ? "Không nghe thấy gì, hãy thử nói to hơn."
        : e.error === "network" ? "Lỗi mạng: nhận dạng giọng nói cần kết nối Internet."
        : "Lỗi micro: " + e.error;
      $("heard").innerHTML = `<span class="err">${msg}</span>`;
    };
    rec.onend = () => {
      listening = false;
      $("micBtn").classList.remove("on");
      $("micBtn").textContent = "🎤 Bấm để nói";
      if (finalAlts) evaluateSpeech(finalAlts);
    };
    rec.start();
    listening = true;
    $("micBtn").classList.add("on");
    $("micBtn").textContent = "⏹ Đang nghe… (bấm để dừng)";
  }

  const words = (s) => loose(s).split(" ").filter(Boolean);
  // So khớp từng từ của câu mẫu với những gì nhận dạng được
  function scoreSpeech(heard, target) {
    const h = words(heard), t = words(target);
    const pool = [...h];
    const marks = t.map((w) => {
      const k = pool.indexOf(w);
      if (k >= 0) { pool.splice(k, 1); return true; }
      return false;
    });
    const hit = marks.filter(Boolean).length;
    return { marks, pct: t.length ? hit / t.length : 0, extra: pool.length };
  }

  function evaluateSpeech(alts) {
    if (S.answered) return;
    const it = S.cur;
    let best = null;
    for (const heard of alts) for (const target of it.answers) {
      const r = scoreSpeech(heard, target);
      if (!best || r.pct > best.pct || (r.pct === best.pct && r.extra < best.extra)) best = { ...r, heard, target };
    }
    S.tries++;
    const targetWords = best.target.split(/\s+/);
    // Chế độ khó: không để lộ từ chưa nói đúng khi vẫn còn lượt thử
    const conceal = hardMode() && !(best.pct === 1 && best.extra <= 1) && S.tries < MAX_TRIES;
    const diff = targetWords.map((w, i) => best.marks[i]
      ? `<span class="w-ok">${esc(w)}</span>`
      : `<span class="w-miss">${conceal ? "_".repeat(Math.max(3, w.replace(/[^\p{L}]/gu, "").length)) : esc(w)}</span>`).join(" ");
    $("heard").innerHTML = `<span class="muted">Máy nghe được: </span>„${esc(best.heard)}“<div class="diff">${diff}</div>`;
    const ok = best.pct === 1 && best.extra <= 1;
    if (ok) {
      settle(true, `<span class="ok">✔ Phát âm tốt!</span>` +
        (S.tries > 1 ? `<span class="note">Đúng ở lần thử thứ ${S.tries}.</span>` : ""));
    } else if (S.tries >= MAX_TRIES) {
      settle(false, `<span class="err">✘ Chưa đạt sau ${MAX_TRIES} lần thử.</span><div class="answer-line"><b>${esc(it.full)}</b></div>` +
        `<span class="note">Nghĩa: ${esc(it.vi)}. Câu này sẽ xuất hiện lại để ôn.</span>`);
    } else {
      $("tries").textContent = `Chưa khớp ${Math.round(best.pct * 100)}% – còn ${MAX_TRIES - S.tries} lần thử. Từ màu đỏ là từ máy chưa nghe rõ.`;
    }
  }
  // Dùng để kiểm thử khi không có micro: window.__speechTest("Guten Morgen")
  window.__speechTest = (text) => evaluateSpeech([text]);

  // ---------- Phát âm ----------
  let deVoice = null;
  function pickVoice() {
    const v = speechSynthesis.getVoices();
    deVoice = v.find((x) => x.lang === "de-DE") || v.find((x) => x.lang.startsWith("de")) || null;
  }
  if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text, rate = 0.9) {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE";
    if (deVoice) u.voice = deVoice;
    u.rate = rate;
    speechSynthesis.speak(u);
  }

  // ---------- Sự kiện ----------
  $("answerForm").addEventListener("submit", (e) => { e.preventDefault(); check(); });
  $("checkBtn").onclick = check;
  $("micBtn").onclick = startMic;
  $("modelBtn").onclick = () => { stopMic(); S.cur && speak(S.cur.full, 0.85); };
  $("skipBtn").onclick = skip;
  $("speakBtn").onclick = () => S.cur && speak(S.cur.full);
  $("playBtn").onclick = () => { speak(S.cur.full, 0.9); $("answer").focus(); };
  $("slowBtn").onclick = () => { speak(S.cur.full, 0.55); $("answer").focus(); };
  document.querySelectorAll(".umlauts button").forEach((b) => {
    b.onclick = () => {
      const input = $("answer");
      if (input.disabled) return;
      const s = input.selectionStart ?? input.value.length, e = input.selectionEnd ?? input.value.length;
      input.value = input.value.slice(0, s) + b.dataset.ch + input.value.slice(e);
      input.focus();
      input.setSelectionRange(s + 1, s + 1);
    };
  });
  document.addEventListener("keydown", (e) => {
    // Trắc nghiệm: phím 1–4 để chọn
    if (!$("practiceScreen").classList.contains("hidden") && S.cur && S.cur.kind === "choice" && !S.answered && /^[1-4]$/.test(e.key)) {
      e.preventDefault(); pickChoice(+e.key - 1); return;
    }
    if ($("practiceScreen").classList.contains("hidden")) return;
    if (e.key === "Enter" && S.answered && document.activeElement !== $("checkBtn")) { e.preventDefault(); next(); }
    // Phím Space (khi không gõ chữ) trong luyện nói: bật/tắt micro
    if (MODE === "speak" && e.key === " " && !e.ctrlKey && !S.answered && document.activeElement !== $("answer")) { e.preventDefault(); startMic(); }
    // Ctrl+Space: nghe lại
    if (e.key === " " && e.ctrlKey && S.cur) { e.preventDefault(); speak(S.cur.full, 0.9); }
  });

  $("levelBackBtn").onclick = renderHome;
  $("introBackBtn").onclick = () => showLevel(curLevel);
  $("backBtn").onclick = () => showLevel(S.level);
  $("againBtn").onclick = () => openUnit(S.level, S.unit);
  $("nextLessonBtn").onclick = () => openUnit(S.level, S.unit + 1);

  if (MODE === "speak") {
    $("tip").textContent = "Phím Space: bật/tắt micro. Enter: sang câu tiếp. Cần Chrome/Edge và kết nối Internet. Nếu máy nghe sai do tiếng ồn, bạn có 3 lần thử cho mỗi câu.";
    $("speakOpts").classList.remove("hidden");
    $("optHard").checked = localStorage.getItem("dw-speak-hard") === "1";
    $("optHard").onchange = (e) => localStorage.setItem("dw-speak-hard", e.target.checked ? "1" : "0");
  }
  if (MODE === "listen") $("tip").textContent =
    "Ctrl+Space để nghe lại. Enter để kiểm tra / sang câu tiếp. Dấu câu không bắt buộc; gõ ae, oe, ue, ss thay cho ä, ö, ü, ß cũng được.";

  if (MODE === "lmc") $("tip").textContent = "Ctrl+Space hoặc nút 🔊 để nghe lại, 🐢 để nghe chậm. Phím 1–4 để chọn, Enter để sang câu tiếp.";
  else if (QZ.MC_MODES.some(([m]) => m === MODE)) $("tip").textContent = "Phím 1–4 để chọn đáp án, Enter để sang câu tiếp.";
  if (MODE === "vmc" || MODE === "pmc") {
    $("dirOpts").classList.remove("hidden");
    $("optDir").value = QZ.getDir();
    $("optDir").onchange = (e) => localStorage.setItem(QZ.DIR_KEY, e.target.value);
  }
  renderTabs();
  renderHome();
})();
