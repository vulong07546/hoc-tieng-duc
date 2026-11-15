(() => {
  "use strict";
  const R = typeof READING !== "undefined" ? READING : {};
  const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"].filter((l) => (R[l] || []).length);
  const STORE = "dw-reading-v1";
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  let progress = (() => { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch { return {}; } })();
  const save = () => localStorage.setItem(STORE, JSON.stringify(progress));
  let curLv = localStorage.getItem("dw-reading-lv") || LEVELS[0];
  if (!LEVELS.includes(curLv)) curLv = LEVELS[0];
  let cur = null;

  function show(name) {
    ["homeScreen", "readScreen"].forEach((s) => $(s).classList.toggle("hidden", s !== name));
    window.scrollTo(0, 0);
  }
  const setLv = (lv) => document.documentElement.style.setProperty("--lv", `var(--${lv})`);

  function renderHome() {
    setLv(curLv);
    $("levelTabs").innerHTML = LEVELS.map((l) => `<button class="tab${l === curLv ? " active" : ""}" data-lv="${l}">${l}</button>`).join("");
    $("levelTabs").querySelectorAll(".tab").forEach((t) => (t.onclick = () => { curLv = t.dataset.lv; localStorage.setItem("dw-reading-lv", curLv); renderHome(); }));
    $("textList").innerHTML = (R[curLv] || []).map((t, i) => {
      const b = progress[`${curLv}-${i}`];
      return `<div class="text-card${b === 100 ? " passed" : ""}" data-i="${i}">
        <div class="e">${t.emoji || "📄"}</div>
        <div><div class="t">${esc(t.title)}</div><div class="muted small">${esc(t.title_vi || "")}${t.source && t.source !== "Eigener Text" ? " · " + esc(t.source) : ""}</div></div>
        <div class="s">${b == null ? "chưa làm" : (b === 100 ? "✅ " : "") + b + "%"}</div></div>`;
    }).join("") || "<p>Chưa có bài đọc cho cấp này.</p>";
    $("textList").querySelectorAll(".text-card").forEach((c) => (c.onclick = () => openText(+c.dataset.i)));
    show("homeScreen");
  }

  // Gạch chân các từ trong bảng từ khó ngay trong bài đọc
  function annotate(text, glossary) {
    let html = esc(text);
    const terms = (glossary || []).map((g) => ({ ...g, key: g.de.replace(/^(der|die|das|sich) /, "").trim() }))
      .filter((g) => g.key.length > 2).sort((a, b) => b.key.length - a.key.length);
    const marks = [];
    for (const g of terms) {
      const word = esc(g.key).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(`(^|[^\\wäöüÄÖÜß])(${word}\\w*)`, "");
      const m = html.match(re);
      if (!m) continue;
      const token = `\u0000${marks.length}\u0000`;
      marks.push(`<span class="gl" tabindex="0" data-vi="${esc(g.vi)}">${m[2]}</span>`);
      html = html.replace(re, `$1${token}`);
    }
    html = html.replace(/\u0000(\d+)\u0000/g, (_, n) => marks[+n]);
    return html.split(/\n\s*\n/).map((p) => `<p>${p.replace(/\n/g, "<br>")}</p>`).join("");
  }

  function openText(i) {
    const t = R[curLv][i];
    cur = { lv: curLv, i, t, submitted: false };
    $("readBadge").textContent = `${curLv} · Bài ${i + 1}`;
    $("rTitle").textContent = `${t.emoji || ""} ${t.title}`;
    $("rSub").textContent = [t.title_vi, t.source && t.source !== "Eigener Text" ? "Nguồn: " + t.source : ""].filter(Boolean).join(" · ");
    $("rText").innerHTML = annotate(t.text, t.glossary);
    $("rTrans").innerHTML = (t.vi || "").split(/\n\s*\n/).map((p) => `<p>${esc(p)}</p>`).join("");
    $("rTrans").classList.add("hidden");
    $("transBtn").textContent = "🇻🇳 Hiện bản dịch";
    $("rGloss").innerHTML = (t.glossary || []).map((g) => `<span class="gl-item" data-de="${esc(g.de)}"><b>${esc(g.de)}</b> – ${esc(g.vi)}</span>`).join("");
    $("rGloss").querySelectorAll(".gl-item").forEach((s) => (s.onclick = () => speak(s.dataset.de)));
    $("rQuestions").innerHTML = (t.questions || []).map((q, qi) => `
      <div class="q" data-q="${qi}">
        <div class="qt">${qi + 1}. ${esc(q.q)}</div>
        ${q.options.map((o, oi) => `<label class="opt"><input type="radio" name="q${qi}" value="${oi}" /> ${esc(o)}</label>`).join("")}
        <div class="qexp hidden"></div>
      </div>`).join("");
    $("rResult").innerHTML = "";
    $("submitBtn").textContent = "Nộp bài";
    setLv(curLv);
    show("readScreen");
  }

  function submit() {
    if (cur.submitted) { openText(cur.i); return; }           // "Làm lại"
    const qs = cur.t.questions || [];
    const unanswered = qs.findIndex((_, qi) => !document.querySelector(`input[name=q${qi}]:checked`));
    if (unanswered >= 0) { $("rResult").innerHTML = `<span class="err">Còn câu ${unanswered + 1} chưa chọn đáp án.</span>`; return; }
    let good = 0;
    qs.forEach((q, qi) => {
      const box = document.querySelector(`.q[data-q="${qi}"]`);
      const chosen = +document.querySelector(`input[name=q${qi}]:checked`).value;
      const ok = chosen === q.answer;
      if (ok) good++;
      if (window.DW) DW.logAnswer(ok);
      box.querySelectorAll(".opt").forEach((l, oi) => {
        l.classList.toggle("right", oi === q.answer);
        l.classList.toggle("wrong", oi === chosen && !ok);
        l.querySelector("input").disabled = true;
      });
      const ex = box.querySelector(".qexp");
      ex.innerHTML = (ok ? "✔ " : "✘ ") + esc(q.explain || "");
      ex.classList.remove("hidden");
      ex.classList.toggle("ok", ok);
    });
    const pct = Math.round((good / qs.length) * 100);
    const k = `${cur.lv}-${cur.i}`;
    progress[k] = Math.max(progress[k] ?? 0, pct); save();
    $("rResult").innerHTML = `<div class="score ${pct >= 99 ? "pass" : "fail"}">${pct}%</div>` +
      (pct >= 99 ? "Tuyệt vời – hiểu bài hoàn toàn!" : `Đúng ${good}/${qs.length}. Đọc lại đoạn liên quan rồi làm lại để đạt 100%.`);
    cur.submitted = true;
    $("submitBtn").textContent = "Làm lại";
  }

  let deVoice = null;
  if ("speechSynthesis" in window) {
    const pick = () => { const v = speechSynthesis.getVoices(); deVoice = v.find((x) => x.lang === "de-DE") || v.find((x) => x.lang.startsWith("de")) || null; };
    pick(); speechSynthesis.onvoiceschanged = pick;
  }
  function speak(text, rate = 0.9) {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    // Chia theo câu để trình duyệt không cắt ngang bài dài
    for (const s of text.match(/[^.!?\n]+[.!?]?/g) || [text]) {
      const u = new SpeechSynthesisUtterance(s.trim()); u.lang = "de-DE"; if (deVoice) u.voice = deVoice; u.rate = rate;
      speechSynthesis.speak(u);
    }
  }

  $("backBtn").onclick = () => { speechSynthesis.cancel(); renderHome(); };
  $("speakBtn").onclick = () => speak(cur.t.text);
  $("stopBtn").onclick = () => speechSynthesis.cancel();
  $("transBtn").onclick = () => {
    const h = $("rTrans").classList.toggle("hidden");
    $("transBtn").textContent = h ? "🇻🇳 Hiện bản dịch" : "🇻🇳 Ẩn bản dịch";
  };
  $("submitBtn").onclick = submit;
  document.addEventListener("click", (e) => {
    const g = e.target.closest(".gl");
    document.querySelectorAll(".gl.open").forEach((x) => x !== g && x.classList.remove("open"));
    if (g) g.classList.toggle("open");
  });

  renderHome();
})();
