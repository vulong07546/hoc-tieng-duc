// Dùng chung cho mọi trang: thanh menu, ôn tập ngắt quãng (SRS), thống kê, sao lưu.
(() => {
  "use strict";

  const SRS_KEY = "dw-srs-v1";
  const STATS_KEY = "dw-stats-v1";
  // Khoảng cách ôn (ngày) theo "hộp" Leitner: hộp càng cao, càng lâu mới ôn lại.
  const INTERVALS = [0, 1, 3, 7, 14, 30, 60, 120, 240];

  const load = (k, fb) => { try { return JSON.parse(localStorage.getItem(k)) ?? fb; } catch { return fb; } };
  const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));

  const pad = (n) => String(n).padStart(2, "0");
  function dateKey(d = new Date()) { return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; }
  function dayNum(d = new Date()) { return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000); }

  // ---------- SRS ----------
  // srs[id] = { box, due (số ngày), wrong (tổng số lần sai), lapses, last }
  function srsAll() { return load(SRS_KEY, {}); }

  /** Ghi nhận một câu trả lời cho từ vựng id ("A1:der Apfel").
   *  firstTryClean = đúng ngay, không gợi ý. */
  function recordWord(id, ok, firstTryClean = ok) {
    const all = srsAll();
    const today = dayNum();
    const e = all[id] || { box: 0, due: today, wrong: 0, lapses: 0, last: 0 };
    if (ok && firstTryClean) {
      // Chỉ lên hộp khi đến hạn (tránh "học dồn" trong một ngày làm tăng hộp ảo)
      if (e.box === 0 || e.due <= today) e.box = Math.min(e.box + 1, INTERVALS.length - 1);
      e.due = today + INTERVALS[e.box];
    } else if (!ok) {
      e.wrong++;
      if (e.box >= 2) e.lapses++;
      e.box = 1;
      e.due = today + 1;
    } else if (e.box === 0) {
      e.box = 1; e.due = today + 1;
    }
    e.last = today;
    all[id] = e;
    save(SRS_KEY, all);
    logAnswer(ok, !all[id].seenBefore);
    if (!all[id].seenBefore) { all[id].seenBefore = 1; save(SRS_KEY, all); }
  }

  function dueIds(limit = Infinity) {
    const all = srsAll(), today = dayNum();
    return Object.entries(all)
      .filter(([, e]) => e.box > 0 && e.due <= today)
      .sort((a, b) => a[1].due - b[1].due || a[1].box - b[1].box)
      .slice(0, limit)
      .map(([id]) => id);
  }

  function hardIds() {
    return Object.entries(srsAll())
      .filter(([, e]) => e.wrong >= 2 || e.lapses >= 1)
      .sort((a, b) => b[1].wrong - a[1].wrong)
      .map(([id]) => id);
  }

  // ---------- Thống kê theo ngày ----------
  function stats() { return Object.assign({ days: {}, goal: 50 }, load(STATS_KEY, {})); }
  function logAnswer(ok, isNew = false) {
    const s = stats(), k = dateKey();
    const d = s.days[k] || { answers: 0, correct: 0, newWords: 0 };
    d.answers++;
    if (ok) d.correct++;
    if (isNew) d.newWords++;
    s.days[k] = d;
    save(STATS_KEY, s);
  }
  function setGoal(n) { const s = stats(); s.goal = Math.max(5, Math.min(1000, n | 0)); save(STATS_KEY, s); }
  function dayStreak() {
    const s = stats(); let n = 0; const d = new Date();
    if (!s.days[dateKey(d)]) d.setDate(d.getDate() - 1);   // hôm nay chưa học vẫn giữ chuỗi
    while (s.days[dateKey(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  // ---------- Sao lưu / khôi phục ----------
  function exportBackup() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k.startsWith("dw-")) data[k] = localStorage.getItem(k);
    }
    const blob = new Blob([JSON.stringify({ app: "deutsch-wortschatz", date: new Date().toISOString(), data }, null, 1)],
      { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `tieng-duc-sao-luu-${dateKey()}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }
  function importBackup(file) {
    return file.text().then((txt) => {
      const j = JSON.parse(txt);
      if (j.app !== "deutsch-wortschatz" || typeof j.data !== "object") throw new Error("File không phải bản sao lưu của web này.");
      for (const [k, v] of Object.entries(j.data)) if (k.startsWith("dw-")) localStorage.setItem(k, v);
      return Object.keys(j.data).length;
    });
  }

  // ---------- Kinh nghiệm (XP) & cấp bậc ----------
  // XP được tính lại từ toàn bộ tiến độ đã lưu, nên luôn khớp với bản sao lưu.
  const LV_MULT = { A1: 1, A2: 1.2, B1: 1.5, B2: 2, C1: 2.5, C2: 3 };
  const PASS = 99;
  const UNIT_XP = 50;
  const TITLES = [
    [1, "🌱", "Anfänger", "Người mới bắt đầu"],
    [5, "📘", "Lernender", "Người đang học"],
    [10, "🚀", "Fortgeschrittener", "Người học khá"],
    [15, "🎓", "Kenner", "Người am hiểu"],
    [20, "⚖️", "Experte", "Chuyên gia"],
    [30, "🏛️", "Jurist", "Luật gia"],
    [40, "👑", "Meister", "Bậc thầy"],
  ];

  function xpBreakdown() {
    const b = { answers: 0, vocab: 0, quiz: 0, forms: 0, reading: 0, writing: 0, memory: 0 };
    const mult = (k) => LV_MULT[(k.match(/(A1|A2|B1|B2|C1|C2)/) || [])[1]] || 1;
    // 1) Mỗi câu trả lời đúng: 2 XP
    for (const d of Object.values(stats().days)) b.answers += (d.correct || 0) * 2;
    // 2) Mỗi bài qua (≥ 99%): 50 XP × hệ số cấp độ
    const vocab = load("dw-progress-v2", {}).lessons || {};
    for (const [k, v] of Object.entries(vocab)) if (v >= PASS) b.vocab += UNIT_XP * mult(k);
    for (const m of ["grammar", "phrases", "listen", "speak"]) {
      for (const [k, v] of Object.entries(load("dw-quiz-" + m, {}))) if (v >= PASS) b.quiz += UNIT_XP * mult(k);
    }
    for (const [k, v] of Object.entries(load("dw-forms-v1", {}))) if (v >= PASS) b.forms += UNIT_XP * mult(k);
    // 3) Bài đọc đúng 100%: 80 XP × hệ số; bài viết tự chấm 100%: 200 XP
    for (const [k, v] of Object.entries(load("dw-reading-v1", {}))) if (v >= PASS) b.reading += 80 * mult(k);
    for (const v of Object.values(load("dw-writing-v1", {}))) if ((v.score || 0) >= PASS) b.writing += 200;
    // 4) Trí nhớ dài hạn: từ ở hộp ≥ 3 (+5), hộp ≥ 5 (+10 nữa)
    for (const e of Object.values(srsAll())) { if (e.box >= 3) b.memory += 5; if (e.box >= 5) b.memory += 10; }
    for (const k in b) b[k] = Math.round(b[k]);
    b.total = Object.values(b).reduce((s, x) => s + x, 0);
    return b;
  }
  // XP cần để đạt cấp L: 50·(L−1)²  → Lv2 = 50, Lv5 = 800, Lv10 = 4.050, Lv20 = 18.050, Lv40 = 76.050
  const xpForLevel = (L) => 50 * (L - 1) * (L - 1);
  function levelInfo(xp = xpBreakdown().total) {
    const level = Math.floor(Math.sqrt(xp / 50)) + 1;
    const from = xpForLevel(level), to = xpForLevel(level + 1);
    let t = TITLES[0];
    for (const x of TITLES) if (level >= x[0]) t = x;
    return { xp, level, from, to, pct: Math.round(((xp - from) / (to - from)) * 100), icon: t[1], title: t[2], titleVi: t[3] };
  }

  // Lưu XP mỗi ngày để vẽ biểu đồ tiến bộ
  function snapshotXP(xp) {
    const s = stats();
    s.xp = s.xp || {};
    s.xp[dateKey()] = xp;
    save(STATS_KEY, s);
  }

  function toast(html) {
    const t = document.createElement("div");
    t.className = "toast";
    t.innerHTML = html;
    document.body.appendChild(t);
    setTimeout(() => t.classList.add("show"), 10);
    setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 400); }, 3800);
  }

  let lastXP = null;
  function refreshXP() {
    const info = levelInfo();
    if (info.xp !== lastXP) {
      snapshotXP(info.xp);
      const prevLv = +localStorage.getItem("dw-last-level") || info.level;
      if (info.level > prevLv) toast(`🎉 Lên cấp <b>Lv ${info.level}</b>! ${info.icon} ${info.title}`);
      else if (lastXP !== null && info.xp - lastXP >= 20) toast(`+${info.xp - lastXP} XP ✨`);   // chỉ báo khi qua bài / thành tích
      localStorage.setItem("dw-last-level", info.level);
      lastXP = info.xp;
    }
    let chip = document.querySelector(".xp-chip");
    const bar = document.querySelector(".topbar");
    if (!bar) return info;
    if (!chip) {
      chip = document.createElement("a");
      chip.className = "xp-chip";
      chip.href = "profile.html";
      chip.title = "Xem trình độ & kinh nghiệm";
      bar.appendChild(chip);
    }
    chip.innerHTML = `<span class="lv">${info.icon} Lv ${info.level}</span>` +
      `<span class="xpbar"><span style="width:${info.pct}%"></span></span>` +
      `<span class="xpn">${info.xp.toLocaleString("vi-VN")} XP</span>`;
    return info;
  }

  // ---------- Thanh menu ----------
  const NAV = [
    ["index.html", "📚 Từ vựng"],
    ["review.html", "🔁 Ôn tập"],
    ["forms.html", "🔤 Dạng từ"],
    ["quiz.html?mode=grammar", "📐 Ngữ pháp"],
    ["quiz.html?mode=phrases", "💬 Cụm từ"],
    ["quiz.html?mode=listen", "🎧 Nghe"],
    ["quiz.html?mode=speak", "🎤 Nói"],
    ["reading.html", "📖 Đọc"],
    ["writing.html", "✍️ Viết"],
    ["profile.html", "🏅 Trình độ"],
  ];
  function renderNav() {
    const nav = document.querySelector(".nav");
    if (!nav) return;
    const here = (location.pathname.split("/").pop() || "index.html") + location.search;
    const mode = new URLSearchParams(location.search).get("mode");
    nav.innerHTML = NAV.map(([href, label]) => {
      const active = href === here || (href.startsWith("quiz.html") && mode && href.endsWith("mode=" + mode)) ||
        (href === "quiz.html?mode=grammar" && here === "quiz.html");
      const due = href === "review.html" ? dueIds().length : 0;
      return `<a href="${href}"${active ? ' class="active"' : ""}>${label}${due ? ` <span class="due-badge">${due > 99 ? "99+" : due}</span>` : ""}</a>`;
    }).join("");
  }

  // ---------- Cài đặt như ứng dụng / chạy offline ----------
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }

  window.DW = { recordWord, dueIds, hardIds, srsAll, INTERVALS, dayNum, dateKey, stats, logAnswer, setGoal, dayStreak,
                exportBackup, importBackup, renderNav, xpBreakdown, levelInfo, xpForLevel, refreshXP, TITLES, LV_MULT, load };
  function boot() {
    renderNav();
    refreshXP();
    // Cập nhật XP định kỳ (sau mỗi câu trả lời / khi qua bài)
    setInterval(refreshXP, 2500);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
