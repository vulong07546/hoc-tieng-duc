(() => {
  "use strict";
  const ARTICLES = ["der", "die", "das"];
  const SESSION_MAX = 50;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // id "A1:der Apfel" -> từ
  const byId = {};
  const levelTotals = {};
  for (const lv of Object.keys(VOCAB)) {
    levelTotals[lv] = VOCAB[lv].length;
    for (const [e, g, v, pl = ""] of VOCAB[lv]) {
      const parts = g.split(" ");
      const article = ARTICLES.includes(parts[0]) && parts.length > 1 ? parts[0] : null;
      byId[lv + ":" + g] = { id: lv + ":" + g, lv, e, g, v, pl, article, bare: article ? parts.slice(1).join(" ") : g };
    }
  }
  const known = (id) => byId[id];

  function show(name) {
    ["homeScreen", "practiceScreen", "doneScreen"].forEach((s) => $(s).classList.toggle("hidden", s !== name));
    window.scrollTo(0, 0);
  }
  function colored(w) {
    return w.article ? `<span class="art-${w.article}">${w.article}</span> ${esc(w.bare)}` : esc(w.g);
  }

  // ---------- Trang tổng quan ----------
  function renderHome() {
    const srs = DW.srsAll();
    const ids = Object.keys(srs).filter(known);
    const due = DW.dueIds().filter(known);
    const st = DW.stats();
    const today = st.days[DW.dateKey()] || { answers: 0, correct: 0 };
    $("stDue").textContent = due.length;
    $("stStreak").textContent = DW.dayStreak();
    $("stLearned").textContent = ids.length;
    $("stStrong").textContent = ids.filter((id) => srs[id].box >= 5).length;

    $("goalInput").value = st.goal;
    const pct = Math.min(100, Math.round((today.answers / st.goal) * 100));
    $("goalBar").style.width = pct + "%";
    $("goalText").textContent = `Hôm nay: ${today.answers}/${st.goal} câu (${pct}%) · đúng ${today.correct}` +
      (pct >= 100 ? " · 🎉 Đã đạt mục tiêu!" : "");

    // Lịch 7 ngày tới
    const d0 = DW.dayNum();
    const next7 = ids.filter((id) => srs[id].box > 0 && srs[id].due > d0 && srs[id].due <= d0 + 7).length;
    $("upcoming").textContent = `7 ngày tới: ${next7} từ đến hạn`;
    $("startDueBtn").textContent = due.length ? `Bắt đầu ôn (${Math.min(due.length, SESSION_MAX)} từ)` : "Hôm nay không có từ cần ôn 🎉";
    $("startDueBtn").disabled = !due.length;

    // Biểu đồ 14 ngày
    const days = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const k = DW.dateKey(d);
      days.push({ k, label: `${d.getDate()}/${d.getMonth() + 1}`, n: (st.days[k] || {}).answers || 0 });
    }
    const max = Math.max(st.goal, ...days.map((d) => d.n));
    $("chart").innerHTML = days.map((d) =>
      `<div class="col" title="${d.k}: ${d.n} câu"><div class="v">${d.n || ""}</div>` +
      `<div class="b${d.n >= st.goal ? " hit" : ""}" style="height:${Math.round((d.n / max) * 100)}%"></div>` +
      `<div class="d">${d.label}</div></div>`).join("") +
      `<div class="goal-line" style="bottom:calc(${Math.round((st.goal / max) * 100)}% * 0.78 + 22px)"></div>`;

    // Theo cấp độ
    const per = {};
    for (const id of ids) { const lv = byId[id].lv; per[lv] = per[lv] || { learned: 0, strong: 0 }; per[lv].learned++; if (srs[id].box >= 5) per[lv].strong++; }
    $("levelTable").innerHTML = Object.keys(levelTotals).map((lv) => {
      const p = per[lv] || { learned: 0, strong: 0 }, t = levelTotals[lv];
      return `<div class="lv-row" style="--lv:var(--${lv})"><b>${lv}</b>
        <div class="bar"><div class="bar-fill" style="width:${(p.learned / t) * 100}%"></div></div>
        <span class="muted small">${p.learned}/${t} đã học · ${p.strong} nhớ vững</span></div>`;
    }).join("");

    // Sổ từ khó
    const hard = DW.hardIds().filter(known);
    const graduated = Object.values(srs).filter((e) => (e.wrong >= 2 || e.lapses >= 1) && (e.okStreak || 0) >= DW.HARD_EXIT).length;
    $("hardCount").textContent = (hard.length ? `${hard.length} từ` : "") + (graduated ? ` · ${graduated} từ đã thoát 🎓` : "");
    $("hardList").innerHTML = hard.length
      ? hard.slice(0, 80).map((id) => {
          const w = byId[id], e = srs[id], f = e.forgets || 0, ok = e.okStreak || 0;
          return `<span class="hard-item" title="Sai ${e.wrong} lần · quên ${f} ngày · ôn dày hơn ×${String(DW.intervalFactor(e)).replace(".", ",")}">` +
            `${w.e} ${colored(w)} – ${esc(w.v)} <em class="forgets">quên ${f}×</em>` +
            `<em class="exit">${"●".repeat(ok)}${"○".repeat(DW.HARD_EXIT - ok)}</em></span>`;
        }).join("")
      : "<span class='okbg'>Chưa có từ khó nào. Từ sai từ 2 lần trở lên sẽ hiện ở đây.</span>";
    $("startHardBtn").disabled = !hard.length;
    DW.renderNav();
    show("homeScreen");
  }

  // ---------- Luyện ----------
  const S = { queue: [], cur: null, answered: false, total: 0, done: new Set(), firstSeen: new Set(), good: 0 };
  function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  function start(ids, label) {
    const words = ids.slice(0, SESSION_MAX).map((id) => byId[id]);
    Object.assign(S, { queue: shuffle(words), total: words.length, done: new Set(), firstSeen: new Set(), good: 0 });
    $("sessionBadge").textContent = label;
    show("practiceScreen");
    next();
  }

  function next() {
    if (!S.queue.length) return finish();
    const w = (S.cur = S.queue.shift());
    S.answered = false;
    $("lvlTag").textContent = w.lv;
    $("lvlTag").style.setProperty("--lv", `var(--${w.lv})`);
    $("picture").textContent = w.e;
    $("meaning").textContent = w.v;
    $("pattern").textContent = (w.article ? "___   " : "") + [...w.bare].map((c) => (c === " " ? "  " : "_")).join(" ");
    const input = $("answer");
    input.value = ""; input.className = ""; input.disabled = false;
    $("feedback").innerHTML = "";
    $("checkBtn").textContent = "Kiểm tra ↵";
    $("sessionCount").textContent = `${S.done.size}/${S.total}`;
    $("sessionBar").style.width = (S.done.size / S.total) * 100 + "%";
    input.focus();
  }

  const clean = (s) => s.trim().replace(/\s+/g, " ");
  const loose = (s) => clean(s).toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss");

  function finishItem(ok, html) {
    const w = S.cur;
    const counted = !S.firstSeen.has(w.id);
    if (counted) {                         // chỉ lần trả lời đầu tiên trong lượt mới tính vào lịch ôn
      S.firstSeen.add(w.id);
      DW.recordWord(w.id, ok);
      if (ok) S.good++;
    }
    if (ok) S.done.add(w.id);
    else S.queue.splice(Math.min(S.queue.length, 3 + Math.floor(Math.random() * 3)), 0, w);
    S.answered = true;
    $("answer").disabled = true;
    $("feedback").innerHTML = html + (ok ? "" : penaltyNote(w, counted));
    $("checkBtn").textContent = "Tiếp tục →";
    $("sessionCount").textContent = `${S.done.size}/${S.total}`;
    $("sessionBar").style.width = (S.done.size / S.total) * 100 + "%";
    speak(w.g);
    $("checkBtn").focus();
  }

  function check() {
    if (S.answered) return next();
    const input = $("answer"), w = S.cur;
    if (!input.value.trim()) return input.focus();
    const t = clean(input.value);
    let ok = false, note = "";
    if (t === w.g) ok = true;
    else if (loose(t) === loose(w.g)) { ok = true; note = t.toLowerCase() === w.g.toLowerCase() ? "Chú ý viết hoa." : "Cách viết chuẩn có ä/ö/ü/ß."; }
    else if (w.article && loose(t) === loose(w.bare)) note = "Thiếu mạo từ.";
    else if (w.article && ARTICLES.includes(t.split(" ")[0].toLowerCase()) && loose(t.split(" ").slice(1).join(" ")) === loose(w.bare)) note = `Sai mạo từ – phải là “${w.article}”.`;
    input.className = ok ? "ok" : "err";
    const pl = w.pl ? `<span class="plural">(số nhiều: ${esc(w.pl)})</span>` : "";
    finishItem(ok, (ok ? `<span class="ok">✔ Chính xác!</span> ` : `<span class="err">✘ Chưa đúng.</span> Đáp án: `) +
      `<span class="answer">${colored(w)}</span>${pl}` + (note ? `<span class="note">${note}</span>` : "") +
      "");
  }

  function skip() {
    if (S.answered) return next();
    finishItem(false, `Đáp án: <span class="answer">${colored(S.cur)}</span>`);
  }

  // Ghi chú sau khi sai: lần quên thứ mấy, bị trừ bao nhiêu XP
  function penaltyNote(w, counted) {
    if (!counted) return `<span class="note">Hỏi lại trong cùng lượt ôn – không trừ thêm XP.</span>`;
    const e = DW.srsAll()[w.id] || {};
    const f = e.forgets || 1;
    const lost = 2 + (e.lastWrongDay === DW.dayNum() ? e.lastExtra || 0 : 0);
    return `<span class="note">Quên lần thứ ${f} → −${lost} XP. Từ quay lại hộp 1, ôn lại ngày mai` +
      (f >= 2 ? `; khoảng cách ôn sẽ ngắn hơn (×${String(DW.intervalFactor(e)).replace(".", ",")})` : "") + `.</span>`;
  }

  function finish() {
    $("doneText").textContent = `Đã ôn ${S.total} từ · nhớ ngay ${S.good}/${S.total}. Những từ sai sẽ được hỏi lại vào ngày mai.`;
    show("doneScreen");
  }

  let deVoice = null;
  if ("speechSynthesis" in window) {
    const pick = () => { const v = speechSynthesis.getVoices(); deVoice = v.find((x) => x.lang === "de-DE") || v.find((x) => x.lang.startsWith("de")) || null; };
    pick(); speechSynthesis.onvoiceschanged = pick;
  }
  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text); u.lang = "de-DE"; if (deVoice) u.voice = deVoice; u.rate = 0.9;
    speechSynthesis.speak(u);
  }

  // ---------- Sự kiện ----------
  $("answerForm").addEventListener("submit", (e) => { e.preventDefault(); check(); });
  $("checkBtn").onclick = check;
  $("skipBtn").onclick = skip;
  $("speakBtn").onclick = () => S.cur && speak(S.cur.g);
  document.querySelectorAll(".umlauts button").forEach((b) => {
    b.onclick = () => {
      const i = $("answer"); if (i.disabled) return;
      const s = i.selectionStart ?? i.value.length, e = i.selectionEnd ?? i.value.length;
      i.value = i.value.slice(0, s) + b.dataset.ch + i.value.slice(e); i.focus(); i.setSelectionRange(s + 1, s + 1);
    };
  });
  document.addEventListener("keydown", (e) => {
    if (!$("practiceScreen").classList.contains("hidden") && e.key === "Enter" && S.answered && document.activeElement !== $("checkBtn")) { e.preventDefault(); next(); }
  });
  $("startDueBtn").onclick = () => start(DW.dueIds().filter(known), "Ôn tập hôm nay");
  $("startHardBtn").onclick = () => start(shuffle(DW.hardIds().filter(known)), "Sổ từ khó");
  $("backBtn").onclick = renderHome;
  $("doneBtn").onclick = renderHome;
  $("goalInput").onchange = (e) => { DW.setGoal(+e.target.value); renderHome(); };
  $("exportBtn").onclick = () => { DW.exportBackup(); $("backupMsg").textContent = "Đã tải file sao lưu. Hãy cất nó vào Google Drive/OneDrive cho an toàn."; };
  $("importInput").onchange = (e) => {
    const f = e.target.files[0]; if (!f) return;
    if (!confirm("Khôi phục sẽ ghi đè tiến độ hiện tại bằng dữ liệu trong file. Tiếp tục?")) { e.target.value = ""; return; }
    DW.importBackup(f).then((n) => { $("backupMsg").textContent = `Đã khôi phục ${n} mục dữ liệu.`; renderHome(); })
      .catch((err) => { $("backupMsg").textContent = "Lỗi: " + err.message; })
      .finally(() => { e.target.value = ""; });
  };

  renderHome();
})();
