(() => {
  "use strict";
  const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const REACH = 0.8;            // tỉ lệ bài phải qua để "đạt" một cấp
  const PASS = 99;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const load = DW.load;
  const V = typeof VOCAB !== "undefined" ? VOCAB : {};
  const G = typeof GRAMMAR !== "undefined" ? GRAMMAR : {};
  const P = typeof PHRASES !== "undefined" ? PHRASES : {};
  const R = typeof READING !== "undefined" ? READING : {};
  const W = typeof WRITING !== "undefined" ? WRITING.tasks : [];

  // Số bài từ vựng mỗi cấp (cùng quy tắc với app.js: 20 từ/bài, gộp bài cuối nếu < 10 từ)
  function vocabLessons(lv) {
    const n = (V[lv] || []).length;
    let k = Math.ceil(n / 20);
    if (k > 1 && n - (k - 1) * 20 < 10) k--;
    return k;
  }
  const passedKeys = (obj) => new Set(Object.entries(obj).filter(([, v]) => v >= PASS).map(([k]) => k));

  // Mỗi kỹ năng: số bài từng cấp + số bài đã qua từng cấp
  function skillData() {
    const vocabPass = passedKeys(load("dw-progress-v2", {}).lessons || {});
    const q = (m) => passedKeys(load("dw-quiz-" + m, {}));
    const readPass = passedKeys(load("dw-reading-v1", {}));
    const writing = load("dw-writing-v1", {});
    const count = (set, lv) => [...set].filter((k) => k.startsWith(lv + "-")).length;
    const listenUnits = (lv) => (P[lv] || []).length + Math.ceil((V[lv] || []).length / 20);
    const qs = { grammar: q("grammar"), phrases: q("phrases"), listen: q("listen"), speak: q("speak") };
    const mk = (fnTotal, fnDone) => Object.fromEntries(LEVELS.map((lv) => [lv, { total: fnTotal(lv), done: fnDone(lv) }]));
    return [
      { key: "vocab", name: "📚 Từ vựng", core: true, lv: mk(vocabLessons, (lv) => count(vocabPass, lv)) },
      { key: "grammar", name: "📐 Ngữ pháp", core: true, lv: mk((lv) => (G[lv] || []).length, (lv) => count(qs.grammar, lv)) },
      { key: "listen", name: "🎧 Nghe", core: true, lv: mk(listenUnits, (lv) => count(qs.listen, lv)) },
      { key: "reading", name: "📖 Đọc", core: true, lv: mk((lv) => (R[lv] || []).length, (lv) => count(readPass, lv)) },
      { key: "phrases", name: "💬 Cụm từ", core: false, lv: mk((lv) => (P[lv] || []).length, (lv) => count(qs.phrases, lv)) },
      { key: "speak", name: "🎤 Nói", core: false, lv: mk(listenUnits, (lv) => count(qs.speak, lv)) },
      { key: "writing", name: "✍️ Viết", core: false, lv: mk(
          (lv) => W.filter((t) => t.level === lv).length,
          (lv) => W.reduce((s, t, i) => s + (t.level === lv && (writing[i]?.score || 0) >= PASS ? 1 : 0), 0)) },
    ];
  }

  // Cấp đạt được: đi lần lượt A1 → C2, dừng ở cấp đầu tiên chưa đạt 80%.
  // Cấp không có bài nào (vd. Viết A1–A2) được bỏ qua nếu kỹ năng đã có bài qua.
  function evaluate(skill) {
    const anyDone = LEVELS.some((lv) => skill.lv[lv].done > 0);
    let reached = null, next = null;
    for (const lv of LEVELS) {
      const { total, done } = skill.lv[lv];
      if (total === 0) { if (anyDone) reached = lv; continue; }   // cấp không có bài: bỏ qua
      if (done / total >= REACH) { reached = lv; continue; }
      next = lv; break;
    }
    const n = next ? skill.lv[next] : null;
    const pct = n && n.total ? Math.round((n.done / (n.total * REACH)) * 100) : 100;
    return { reached, next, pct: Math.min(pct, 100), nextInfo: n };
  }

  function render() {
    // ----- Thẻ cấp bậc -----
    const info = DW.levelInfo();
    $("heroIcon").textContent = info.icon;
    $("heroLv").textContent = `Lv ${info.level}`;
    $("heroTitle").textContent = info.title;
    $("heroTitleVi").textContent = info.titleVi;
    $("heroBar").style.width = info.pct + "%";
    $("heroNext").textContent = `${(info.xp - info.from).toLocaleString("vi-VN")} / ${(info.to - info.from).toLocaleString("vi-VN")} XP để lên Lv ${info.level + 1}`;
    $("heroXP").textContent = info.xp.toLocaleString("vi-VN");

    const st = DW.stats(), hist = st.xp || {};
    const xpAt = (daysAgo) => {
      // XP ở cuối ngày gần nhất có ghi nhận, tính tới "daysAgo" ngày trước
      for (let i = daysAgo; i < daysAgo + 400; i++) {
        const d = new Date(); d.setDate(d.getDate() - i);
        if (hist[DW.dateKey(d)] != null) return hist[DW.dateKey(d)];
      }
      return 0;
    };
    $("heroWeek").textContent = "+" + Math.max(0, info.xp - xpAt(7)).toLocaleString("vi-VN");

    // ----- CEFR theo kỹ năng -----
    const skills = skillData().map((s) => ({ ...s, ev: evaluate(s) }));
    const order = (lv) => (lv ? LEVELS.indexOf(lv) : -1);
    const core = skills.filter((s) => s.core);
    const minCore = core.reduce((m, s) => Math.min(m, order(s.ev.reached)), 99);
    $("overall").innerHTML = minCore >= 0 ? `Trình độ chung: <b>${LEVELS[minCore]}</b>` : "Trình độ chung: <b>chưa đạt A1</b>";
    $("skills").innerHTML = skills.map((s) => {
      const ev = s.ev;
      const reached = ev.reached ? `<span class="cefr" style="--lv:var(--${ev.reached})">${ev.reached}</span>` : `<span class="cefr none">—</span>`;
      const nextTxt = ev.next
        ? `Đang tiến tới <b>${ev.next}</b>: qua ${ev.nextInfo.done}/${ev.nextInfo.total} bài (cần ${Math.ceil(ev.nextInfo.total * REACH)})`
        : (ev.reached === "C2" ? "Đã hoàn thành C2 🎉" : "");
      const levelsDots = LEVELS.map((lv) => {
        const { total, done } = s.lv[lv];
        const p = total ? done / total : 0;
        return `<span class="dot${total && p >= REACH ? " full" : p > 0 ? " part" : ""}" style="--lv:var(--${lv})" title="${lv}: ${done}/${total} bài">${lv}</span>`;
      }).join("");
      return `<div class="skill-row">
        <div class="sk-name">${s.name}${s.core ? "" : ' <span class="muted small">(bổ trợ)</span>'}</div>
        <div class="sk-level">${reached}</div>
        <div class="sk-prog">
          <div class="bar"><div class="bar-fill" style="width:${ev.pct}%;background:var(--${ev.next || ev.reached || "A1"})"></div></div>
          <div class="muted small">${nextTxt}</div>
          <div class="dots">${levelsDots}</div>
        </div>
      </div>`;
    }).join("");

    // ----- Biểu đồ XP 30 ngày -----
    const days = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const today = xpAt(i), before = xpAt(i + 1);
      days.push({ label: `${d.getDate()}/${d.getMonth() + 1}`, total: today, gain: Math.max(0, today - before) });
    }
    const maxGain = Math.max(50, ...days.map((d) => d.gain));
    $("xpChart").innerHTML = days.map((d, i) =>
      `<div class="col" title="${d.label}: +${d.gain} XP (tổng ${d.total})"><div class="v">${d.gain ? "+" + d.gain : ""}</div>` +
      `<div class="b${d.gain ? " hit" : ""}" style="height:${Math.round((d.gain / maxGain) * 100)}%"></div>` +
      `<div class="d">${i % 3 === 2 || i === 29 ? d.label : ""}</div></div>`).join("");

    // ----- Thành tích -----
    const srs = DW.srsAll();
    const srsVals = Object.values(srs);
    const totalCorrect = Object.values(st.days).reduce((s, d) => s + (d.correct || 0), 0);
    const goalHit = Object.values(st.days).some((d) => d.answers >= st.goal);
    const maxStreak = (() => {
      const keys = Object.keys(st.days).sort(); let best = 0, run = 0, prev = null;
      for (const k of keys) {
        const t = new Date(k + "T12:00:00").getTime();
        run = prev && Math.round((t - prev) / 86400000) === 1 ? run + 1 : 1;
        best = Math.max(best, run); prev = t;
      }
      return best;
    })();
    const sk = Object.fromEntries(skills.map((s) => [s.key, s]));
    const lvDone = (key, lv) => sk[key].lv[lv].total > 0 && sk[key].lv[lv].done >= sk[key].lv[lv].total;
    const anyPassed = skills.some((s) => LEVELS.some((lv) => s.lv[lv].done > 0)) || Object.values(load("dw-forms-v1", {})).some((v) => v >= PASS);
    const readingPerfect = Object.values(load("dw-reading-v1", {})).filter((v) => v >= PASS).length;
    const gutachten = W.some((t, i) => ["C1", "C2"].includes(t.level) && (load("dw-writing-v1", {})[i]?.score || 0) >= PASS);
    const BADGES = [
      ["🌱", "Bước đầu tiên", "Qua bài học đầu tiên", anyPassed],
      ["🎯", "Đúng mục tiêu", "Đạt mục tiêu số câu trong một ngày", goalHit],
      ["🔥", "3 ngày liên tiếp", "Học 3 ngày liên tục", maxStreak >= 3],
      ["🔥", "1 tuần bền bỉ", "Học 7 ngày liên tục", maxStreak >= 7],
      ["🌋", "30 ngày không nghỉ", "Học 30 ngày liên tục", maxStreak >= 30],
      ["📚", "100 từ", "Có 100 từ trong lịch ôn tập", srsVals.length >= 100],
      ["📚", "1.000 từ", "Có 1.000 từ trong lịch ôn tập", srsVals.length >= 1000],
      ["🧠", "Trí nhớ thép", "100 từ nhớ vững (≥ 30 ngày)", srsVals.filter((e) => e.box >= 5).length >= 100],
      ["💯", "1.000 câu đúng", "Trả lời đúng tổng cộng 1.000 câu", totalCorrect >= 1000],
      ["🥉", "Từ vựng A1", "Qua toàn bộ bài từ vựng A1", lvDone("vocab", "A1")],
      ["🥈", "Từ vựng B1", "Qua toàn bộ bài từ vựng B1", lvDone("vocab", "B1")],
      ["🥇", "Từ vựng C2", "Qua toàn bộ bài từ vựng C2", lvDone("vocab", "C2")],
      ["📐", "Ngữ pháp A1", "Qua toàn bộ ngữ pháp A1", lvDone("grammar", "A1")],
      ["📐", "Ngữ pháp B2", "Qua toàn bộ ngữ pháp B2", lvDone("grammar", "B2")],
      ["📖", "Mọt sách", "Đọc hiểu đúng 100% 5 bài", readingPerfect >= 5],
      ["⚖️", "Luật gia tập sự", "Qua 1 bài từ vựng C2", sk.vocab.lv.C2.done > 0],
      ["🧾", "Bài Gutachten đầu tiên", "Tự chấm 100% một bài giải tình huống C1/C2", gutachten],
      ["🏛️", "Sẵn sàng C1", "Trình độ chung đạt B2", minCore >= LEVELS.indexOf("B2")],
    ];
    const got = BADGES.filter((b) => b[3]).length;
    $("badgeCount").textContent = `${got}/${BADGES.length}`;
    $("badges").innerHTML = BADGES.map(([ic, name, desc, ok]) =>
      `<div class="badge-item${ok ? " got" : ""}" title="${esc(desc)}"><div class="bi">${ic}</div><div class="bn">${esc(name)}</div><div class="bd">${esc(desc)}</div></div>`).join("");

    // ----- Nguồn XP -----
    const b = DW.xpBreakdown();
    const rows = [["Câu trả lời đúng", b.answers], ["Bài từ vựng", b.vocab], ["Ngữ pháp / Cụm từ / Nghe / Nói", b.quiz],
                  ["Dạng từ", b.forms], ["Đọc hiểu", b.reading], ["Luyện viết", b.writing], ["Trí nhớ dài hạn", b.memory]];
    const mx = Math.max(1, ...rows.map((r) => r[1]));
    $("breakdown").innerHTML = rows.map(([n, v]) =>
      `<div class="lv-row"><span class="br-name">${n}</span><div class="bar"><div class="bar-fill" style="width:${(v / mx) * 100}%;background:var(--gold)"></div></div><span class="muted small">${v.toLocaleString("vi-VN")} XP</span></div>`).join("");
    $("titleList").innerHTML = DW.TITLES.map(([lv, ic, t, vi]) =>
      `<span class="${info.level >= lv ? "got" : ""}">${ic} Lv ${lv}+ ${t} – ${vi}</span>`).join("");
  }

  render();
})();
