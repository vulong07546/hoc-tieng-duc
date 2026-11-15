(() => {
  "use strict";
  const TASKS = (typeof WRITING !== "undefined" ? WRITING.tasks : []) || [];
  const STORE = "dw-writing-v1";
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  let data = (() => { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch { return {}; } })();
  const save = () => localStorage.setItem(STORE, JSON.stringify(data));
  const FILTERS = ["Tất cả", ...new Set(TASKS.map((t) => t.area))];
  let filter = "Tất cả";
  let curIdx = -1;

  function show(name) {
    ["homeScreen", "taskScreen"].forEach((s) => $(s).classList.toggle("hidden", s !== name));
    window.scrollTo(0, 0);
  }
  const words = (s) => (s.trim().match(/\S+/g) || []).length;

  function renderHome() {
    $("filterTabs").innerHTML = FILTERS.map((f) => `<button class="tab${f === filter ? " active" : ""}">${esc(f)}</button>`).join("");
    $("filterTabs").querySelectorAll(".tab").forEach((b, i) => (b.onclick = () => { filter = FILTERS[i]; renderHome(); }));
    $("taskList").innerHTML = TASKS.map((t, i) => ({ t, i })).filter(({ t }) => filter === "Tất cả" || t.area === filter).map(({ t, i }) => {
      const d = data[i] || {};
      const st = d.score != null ? `${d.score === 100 ? "✅ " : ""}tự chấm ${d.score}%` : d.text ? `đang viết · ${words(d.text)} từ` : "chưa làm";
      return `<div class="text-card${d.score === 100 ? " passed" : ""}" data-i="${i}" style="--lv:var(--${t.level})">
        <div class="lvl-tag">${t.level}</div>
        <div><div class="t">${esc(t.title)}</div><div class="muted small">${esc(t.area)} · ${esc(t.title_vi || "")}</div></div>
        <div class="s">${st}</div></div>`;
    }).join("") || "<p>Chưa có đề viết.</p>";
    $("taskList").querySelectorAll(".text-card").forEach((c) => (c.onclick = () => openTask(+c.dataset.i)));
    show("homeScreen");
  }

  const para = (s) => esc(s).split(/\n\s*\n/).map((p) => `<p>${p.replace(/\n/g, "<br>")}</p>`).join("");

  function openTask(i) {
    curIdx = i;
    const t = TASKS[i], d = data[i] || {};
    document.documentElement.style.setProperty("--lv", `var(--${t.level})`);
    $("taskBadge").textContent = `${t.level} · ${t.area}`;
    $("tTitle").textContent = t.title;
    $("tSub").textContent = `${t.title_vi || ""} · Độ dài gợi ý: ${t.words || ""}`;
    $("tPrompt").innerHTML = para(t.prompt);
    $("tPromptVi").innerHTML = para(t.prompt_vi || "");
    $("tPromptVi").classList.add("hidden");
    $("transBtn").textContent = "🇻🇳 Hiện bản dịch đề";
    $("tRedemittel").innerHTML = (t.redemittel || []).map((r) => `<span class="gl-item" title="Bấm để chèn vào bài">${esc(r)}</span>`).join("");
    $("tRedemittel").querySelectorAll(".gl-item").forEach((s) => (s.onclick = () => insert(s.textContent + " ")));
    $("essay").value = d.text || "";
    updateCount();
    $("saveState").textContent = d.text ? "Đã lưu bản nháp." : "";
    $("tModel").innerHTML = para(t.model || "").replace(/(^|<br>|<p>)([A-H]\.|[IVX]+\.|\d+\.)\s/g, "$1<b>$2</b> ");
    $("tModelVi").innerHTML = para(t.model_vi || "");
    $("tChecklist").innerHTML = (t.checklist || []).map((c, k) => `<label class="check"><input type="checkbox" data-k="${k}" ${(d.checks || [])[k] ? "checked" : ""}/>
      <span>${esc(c.de)}<br><span class="muted small">${esc(c.vi)}</span></span></label>`).join("");
    $("tChecklist").querySelectorAll("input").forEach((cb) => (cb.onchange = scoreChecks));
    $("modelBox").classList.toggle("hidden", !d.revealed);
    $("revealBtn").classList.toggle("hidden", !!d.revealed);
    if (d.revealed) scoreChecks();
    show("taskScreen");
  }

  function updateCount() { $("wordCount").textContent = `(${words($("essay").value)} từ)`; }
  let timer = null;
  function autosave() {
    updateCount();
    clearTimeout(timer);
    timer = setTimeout(() => {
      data[curIdx] = Object.assign(data[curIdx] || {}, { text: $("essay").value });
      save();
      $("saveState").textContent = "Đã lưu bản nháp lúc " + new Date().toLocaleTimeString("vi-VN");
    }, 500);
  }
  function insert(txt) {
    const ta = $("essay"), s = ta.selectionStart, e = ta.selectionEnd;
    ta.value = ta.value.slice(0, s) + txt + ta.value.slice(e);
    ta.focus(); ta.setSelectionRange(s + txt.length, s + txt.length);
    autosave();
  }

  function reveal() {
    if (words($("essay").value) < 20 && !confirm("Bạn mới viết rất ít. Vẫn muốn xem bài mẫu?")) return;
    data[curIdx] = Object.assign(data[curIdx] || {}, { text: $("essay").value, revealed: true });
    save();
    $("modelBox").classList.remove("hidden");
    $("revealBtn").classList.add("hidden");
    scoreChecks();
    $("modelBox").scrollIntoView({ behavior: "smooth" });
  }

  function scoreChecks() {
    const boxes = [...$("tChecklist").querySelectorAll("input")];
    const checks = boxes.map((b) => b.checked);
    const score = boxes.length ? Math.round((checks.filter(Boolean).length / boxes.length) * 100) : 0;
    data[curIdx] = Object.assign(data[curIdx] || {}, { checks, score });
    save();
    $("selfScore").innerHTML = `<div class="score ${score >= 99 ? "pass" : "fail"}">${score}%</div>` +
      (score >= 99 ? "Bài viết đạt mọi tiêu chí 🎉" : "Đánh dấu những tiêu chí bài của bạn đã đạt. Sửa bài rồi tự chấm lại cho đủ 100%.");
  }

  $("essay").addEventListener("input", autosave);
  $("backBtn").onclick = renderHome;
  $("revealBtn").onclick = reveal;
  $("transBtn").onclick = () => {
    const h = $("tPromptVi").classList.toggle("hidden");
    $("transBtn").textContent = h ? "🇻🇳 Hiện bản dịch đề" : "🇻🇳 Ẩn bản dịch đề";
  };
  document.querySelectorAll(".umlauts button").forEach((b) => {
    b.addEventListener("mousedown", (e) => e.preventDefault());
    b.onclick = () => insert(b.dataset.ch);
  });

  renderHome();
})();
