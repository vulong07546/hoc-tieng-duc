// Service worker: lưu toàn bộ web vào bộ nhớ đệm để học được khi không có mạng.
// Chiến lược: trả bản đã lưu ngay, đồng thời tải bản mới ở nền (stale-while-revalidate).
const CACHE = "dw-v12";
const FILES = [
  "./", "index.html", "review.html", "forms.html", "quiz.html", "reading.html", "writing.html", "profile.html", "stories.html",
  "style.css", "common.js", "app.js", "review.js", "forms.js", "quiz.js", "reading.js", "writing.js", "profile.js", "stories.js",
  "data.js", "grammar-data.js", "phrases-data.js", "mc-data.js", "quiz-units.js", "verbs-data.js", "reading-data.js", "stories-data.js", "writing-data.js",
  "manifest.webmanifest", "icon.svg", "icon-192.png", "icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(FILES.map((f) => c.add(f).catch(() => {})))));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(e.request, { ignoreSearch: true });
      const network = fetch(e.request).then((res) => {
        if (res.ok) cache.put(e.request, res.clone());
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
