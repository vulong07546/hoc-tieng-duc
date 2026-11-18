(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const LIST = typeof STORIES !== "undefined" ? STORIES : [];
  const LEVELS = ["A1", "A2", "B1"];
  const OPT_KEY = "dw-stories-opt", DONE_KEY = "dw-stories-v1";
  const load = (k, fb) => { try { return JSON.parse(localStorage.getItem(k)) ?? fb; } catch { return fb; } };
  const DEF_SPEED = { rate: 0.95, pitch: 1, gap: 0.4 };
  const opt = Object.assign({ voice: "", ...DEF_SPEED, showVi: true, hideText: false, repeat2: false,
                              autoNext: true, timer: 0, noise: 0, level: "all" }, load(OPT_KEY, {}));
  // Bản cũ đọc quá chậm và nghỉ quá lâu → đưa về mặc định mới một lần
  if (opt.v !== 2) { Object.assign(opt, DEF_SPEED, { v: 2 }); localStorage.setItem(OPT_KEY, JSON.stringify(opt)); }
  const saveOpt = () => localStorage.setItem(OPT_KEY, JSON.stringify(opt));
  const done = load(DONE_KEY, {});

  // ---------- Danh sách ----------
  function renderList() {
    $("levelTabs").innerHTML = [["all", "Tất cả"], ...LEVELS.map((l) => [l, l])].map(([v, t]) =>
      `<button class="tab${opt.level === v ? " active" : ""}" data-v="${v}">${t}</button>`).join("");
    $("levelTabs").querySelectorAll(".tab").forEach((b) => (b.onclick = () => { opt.level = b.dataset.v; saveOpt(); renderList(); }));
    const box = $("storyList");
    box.innerHTML = "";
    LIST.forEach((s, i) => {
      if (opt.level !== "all" && s.level !== opt.level) return;
      const mins = Math.max(2, Math.round(s.sentences.reduce((t, x) => t + x.de.split(" ").length, 0) / 130 / opt.rate + s.sentences.length * opt.gap / 60));
      const el = document.createElement("div");
      el.className = "level story-item";
      el.style.setProperty("--lv", `var(--${s.level})`);
      el.innerHTML = `<h3>${s.emoji} ${esc(s.title)}</h3>
        <div class="desc"><b>${esc(s.title_vi)}</b> · ${s.level} · ${s.sentences.length} câu · ~${mins} phút${done[s.id] ? " · ✅ đã nghe" : ""}</div>
        <p class="muted small">${esc(s.summary_vi || "")}</p>
        <div class="row"><button class="btn primary small">▶ Nghe truyện</button></div>`;
      el.querySelector("button").onclick = () => openStory(i);
      box.appendChild(el);
    });
    if (!box.children.length) box.innerHTML = "<p>Chưa có truyện.</p>";
    show("homeScreen");
  }
  function show(name) {
    ["homeScreen", "playerScreen"].forEach((s) => $(s).classList.toggle("hidden", s !== name));
    window.scrollTo(0, 0);
  }

  // ---------- Giọng đọc: ưu tiên giọng tự nhiên, êm ----------
  let voices = [];
  const SOFT = /katja|amala|seraphina|hedda|anna|petra|marlene|vicki|helena|elke|louisa|ingrid|gisela|klarissa|maja|tanja|female|frau/i;
  function score(v) {
    let s = 0;
    if (/natural|neural|online|premium|enhanced/i.test(v.name)) s += 6;
    if (/google/i.test(v.name)) s += 3;
    if (SOFT.test(v.name)) s += 2;
    if (v.lang === "de-DE") s += 1;
    return s;
  }
  function loadVoices() {
    if (!("speechSynthesis" in window)) return;
    voices = speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith("de")).sort((a, b) => score(b) - score(a));
    const sel = $("voiceSel");
    sel.innerHTML = voices.map((v) => `<option value="${esc(v.voiceURI)}">${esc(v.name)}${score(v) >= 6 ? " ★" : ""}</option>`).join("") ||
      "<option>Không có giọng tiếng Đức</option>";
    if (!voices.some((v) => v.voiceURI === opt.voice)) opt.voice = voices[0]?.voiceURI || "";
    sel.value = opt.voice;
    $("voiceTip").innerHTML = voices.some((v) => score(v) >= 6) ? "★ = giọng tự nhiên (đọc êm nhất)." :
      "Mẹo: giọng êm và tự nhiên nhất là <b>Microsoft Katja / Amala / Seraphina (Natural)</b> trong trình duyệt <b>Microsoft Edge</b>; trên Chrome chọn <b>Google Deutsch</b>. Trên điện thoại có thể tải thêm giọng tiếng Đức trong Cài đặt → Chuyển văn bản thành giọng nói.";
  }
  const curVoice = () => voices.find((v) => v.voiceURI === opt.voice) || null;

  // ---------- Phát ----------
  const P = { story: 0, idx: 0, playing: false, token: 0, rep: 0, timerEnd: 0, sleep: false };
  let watchdog = null, waitT = null;
  const story = () => LIST[P.story];

  function openStory(i) {
    stop();
    P.story = i; P.idx = 0;
    const s = story();
    document.documentElement.style.setProperty("--lv", `var(--${s.level})`);
    $("storyBadge").textContent = `${s.level} · ${s.emoji}`;
    $("storyTitle").textContent = `${s.title} – ${s.title_vi}`;
    $("storySummary").textContent = s.summary_vi || "";
    $("storyText").innerHTML = s.sentences.map((x, k) =>
      `<p class="st-line" data-k="${k}"><span class="st-de">${esc(x.de)}</span><span class="st-vi">${esc(x.vi)}</span></p>`).join("");
    $("storyText").querySelectorAll(".st-line").forEach((p) => (p.onclick = () => { P.idx = +p.dataset.k; play(); }));
    $("glossary").innerHTML = (s.glossary || []).map((g) => `<span class="gl"><b>${esc(g.de)}</b> – ${esc(g.vi)}</span>`).join("");
    applyView();
    mark();
    show("playerScreen");
  }
  function applyView() {
    $("storyText").classList.toggle("show-vi", opt.showVi);
    $("storyText").classList.toggle("hide-text", opt.hideText);
  }
  function mark() {
    const s = story();
    $("storyText").querySelectorAll(".st-line").forEach((p) => p.classList.toggle("cur", +p.dataset.k === P.idx));
    $("storyCount").textContent = `${Math.min(P.idx + 1, s.sentences.length)}/${s.sentences.length}`;
    $("storyBar").style.width = `${(P.idx / s.sentences.length) * 100}%`;
    const cur = $("storyText").querySelector(".st-line.cur");
    if (cur && P.playing && !P.sleep) cur.scrollIntoView({ block: "center", behavior: "smooth" });
    const x = s.sentences[P.idx];
    $("sleepLine").textContent = x && !opt.hideText ? x.de : "";
    $("sleepVi").textContent = x && opt.showVi && !opt.hideText ? x.vi : "";
    $("playBtn").textContent = P.playing ? "⏸ Tạm dừng" : "▶ Nghe";
  }

  // Âm lượng giảm dần trong 3 phút cuối của hẹn giờ
  function volume() {
    if (!P.timerEnd) return 1;
    const left = P.timerEnd - Date.now();
    return Math.max(0.15, Math.min(1, left / 180000));
  }

  function speakCur() {
    const s = story(), x = s.sentences[P.idx];
    if (!x) return finishStory();
    const my = ++P.token;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(x.de);
    u.lang = "de-DE";
    const v = curVoice(); if (v) u.voice = v;
    u.rate = opt.rate; u.pitch = opt.pitch; u.volume = volume();
    u.onend = u.onerror = () => { if (my === P.token) afterSentence(my); };
    // Chrome đôi khi không báo onend → tự sang câu sau
    clearTimeout(watchdog);
    watchdog = setTimeout(() => { if (my === P.token && P.playing) afterSentence(my); }, 4000 + x.de.length * 160 / opt.rate);
    mark();
    speechSynthesis.speak(u);
  }
  function afterSentence(my) {
    clearTimeout(watchdog);
    if (!P.playing || my !== P.token) return;
    P.token++;
    const t = ++P.token;
    clearTimeout(waitT);
    waitT = setTimeout(() => {
      if (!P.playing || t !== P.token) return;
      if (P.timerEnd && Date.now() >= P.timerEnd) return timerDone();
      if (opt.repeat2 && P.rep === 0) { P.rep = 1; return speakCur(); }
      P.rep = 0; P.idx++;
      speakCur();
    }, opt.gap * 1000);
  }
  function finishStory() {
    const s = story();
    done[s.id] = true; localStorage.setItem(DONE_KEY, JSON.stringify(done));
    if (opt.autoNext && LIST.length > 1) {
      P.story = (P.story + 1) % LIST.length; P.idx = 0;
      openStoryKeep();
      waitT = setTimeout(() => P.playing && speakCur(), 3000);
    } else { stop(); P.idx = 0; mark(); }
  }
  function openStoryKeep() {
    const playing = P.playing, sleep = P.sleep;
    const tok = P.token;
    openStory(P.story);
    P.playing = playing; P.sleep = sleep; P.token = tok;
    if (sleep) $("sleepOverlay").classList.remove("hidden");
    if (playing) lockScreen(true);
    mark();
  }
  function play() {
    if (!("speechSynthesis" in window)) return alert("Trình duyệt không hỗ trợ đọc tiếng Đức.");
    P.playing = true; P.rep = 0;
    startTimer(); noiseOn();
    lockScreen(true);
    speakCur();
  }
  function stop() {
    P.playing = false; P.token++;
    clearTimeout(watchdog); clearTimeout(waitT);
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    lockScreen(false);
    mark0();
  }
  const mark0 = () => { if (LIST.length && $("playBtn")) $("playBtn").textContent = "▶ Nghe"; };
  const toggle = () => (P.playing ? stop() : play());

  // ---------- Hẹn giờ ----------
  let tick = null;
  function startTimer() {
    P.timerEnd = opt.timer ? Date.now() + opt.timer * 60000 : 0;
    clearInterval(tick);
    tick = setInterval(showTimer, 1000); showTimer();
  }
  function showTimer() {
    const t = P.timerEnd ? Math.max(0, P.timerEnd - Date.now()) : 0;
    const txt = P.timerEnd ? `còn ${Math.floor(t / 60000)}:${String(Math.floor(t / 1000) % 60).padStart(2, "0")}` : "";
    $("timerLeft").textContent = P.playing ? txt : "";
    $("sleepInfo").textContent = (P.playing ? "" : "⏸ Đã dừng · ") + (txt ? "Tắt sau " + txt.replace("còn ", "") : "");
    if (P.timerEnd) noiseGain(opt.noise * volume());
    if (P.playing && P.timerEnd && t <= 0) timerDone();
  }
  function timerDone() {
    stop(); noiseOff(); P.timerEnd = 0; showTimer();
    $("sleepInfo").textContent = "Chúc ngủ ngon 🌙 Gute Nacht!";
  }

  // ---------- Tiếng mưa nhẹ (nhiễu nâu tạo bằng Web Audio) ----------
  let ac = null, gain = null;
  function noiseOn() {
    if (!opt.noise) return;
    try {
      if (!ac) {
        ac = new (window.AudioContext || window.webkitAudioContext)();
        const len = ac.sampleRate * 4, buf = ac.createBuffer(1, len, ac.sampleRate), d = buf.getChannelData(0);
        let last = 0;
        for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; }
        const src = ac.createBufferSource(); src.buffer = buf; src.loop = true;
        const lp = ac.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 900;
        gain = ac.createGain(); gain.gain.value = 0;
        src.connect(lp).connect(gain).connect(ac.destination); src.start();
      }
      ac.resume();
      noiseGain(opt.noise * volume());
    } catch { /* không hỗ trợ */ }
  }
  function noiseGain(v) { if (gain) gain.gain.setTargetAtTime(v, ac.currentTime, 0.5); }
  function noiseOff() { if (gain) noiseGain(0); }

  // ---------- Giữ màn hình (để điện thoại không ngắt giọng đọc) ----------
  let wake = null;
  async function lockScreen(on) {
    try {
      if (on && P.sleep && "wakeLock" in navigator && !wake) wake = await navigator.wakeLock.request("screen");
      if (!on && wake) { await wake.release(); wake = null; }
    } catch { wake = null; }
  }
  function sleepMode(on) {
    P.sleep = on;
    $("sleepOverlay").classList.toggle("hidden", !on);
    if (on) {
      if (!opt.timer) { opt.timer = 30; $("sleepTimer").value = "30"; saveOpt(); }
      if (!P.playing) play(); else { startTimer(); lockScreen(true); }
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
    mark(); showTimer();
  }

  // ---------- Điều khiển ----------
  const bindRange = (id, key, fmt) => {
    const el = $(id); el.value = opt[key];
    const upd = () => { opt[key] = +el.value; $(id + "Val") && ($(id + "Val").textContent = fmt(opt[key])); saveOpt(); };
    el.oninput = upd; upd();
  };
  bindRange("rate", "rate", (v) => v.toFixed(2) + "×");
  bindRange("pitch", "pitch", (v) => v.toFixed(2));
  bindRange("gap", "gap", (v) => v.toFixed(1) + " giây");
  bindRange("noise", "noise", () => "");
  $("noise").addEventListener("input", () => { if (opt.noise) { noiseOn(); } else noiseOff(); });
  const bindCheck = (id, key, after) => { const el = $(id); el.checked = opt[key]; el.onchange = () => { opt[key] = el.checked; saveOpt(); after && after(); }; };
  bindCheck("showVi", "showVi", () => { applyView(); mark(); });
  bindCheck("hideText", "hideText", () => { applyView(); mark(); });
  bindCheck("repeatVi", "repeat2");
  bindCheck("autoNext", "autoNext");
  $("sleepTimer").value = String(opt.timer);
  $("sleepTimer").onchange = (e) => { opt.timer = +e.target.value; saveOpt(); if (P.playing) startTimer(); };
  $("voiceSel").onchange = (e) => { opt.voice = e.target.value; saveOpt(); };
  $("testVoice").onclick = () => {
    stop();
    const u = new SpeechSynthesisUtterance("Es war einmal ein kleines Mädchen. Gute Nacht und schlaf gut.");
    u.lang = "de-DE"; const v = curVoice(); if (v) u.voice = v; u.rate = opt.rate; u.pitch = opt.pitch;
    speechSynthesis.speak(u);
  };
  $("playBtn").onclick = toggle;
  $("prevBtn").onclick = () => { P.idx = Math.max(0, P.idx - 1); P.rep = 0; P.playing ? speakCur() : mark(); };
  $("nextBtn").onclick = () => { P.idx = Math.min(story().sentences.length - 1, P.idx + 1); P.rep = 0; P.playing ? speakCur() : mark(); };
  $("sleepBtn").onclick = () => sleepMode(true);
  $("sleepOverlay").onclick = () => sleepMode(false);
  $("backBtn").onclick = () => { stop(); noiseOff(); renderList(); };
  document.addEventListener("keydown", (e) => {
    if ($("playerScreen").classList.contains("hidden") || /INPUT|SELECT/.test(document.activeElement.tagName)) return;
    if (e.key === " ") { e.preventDefault(); toggle(); }
    if (e.key === "Escape" && P.sleep) sleepMode(false);
    if (e.key === "ArrowRight") $("nextBtn").click();
    if (e.key === "ArrowLeft") $("prevBtn").click();
  });

  if ("speechSynthesis" in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
  window.__stories = { P, opt };   // để kiểm thử
  renderList();
})();
