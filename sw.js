/* Modo sin conexión de Mi Entrenamiento.
   Cambiá el número de VERSION cada vez que subas una versión nueva de index.html. */
const VERSION = "entrenamiento-v1";
const CORE = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const r = e.request;
  if (r.method !== "GET") return;
  const u = new URL(r.url);
  if (u.origin === location.origin) {
    // Archivos propios: primero la red (así llegan las actualizaciones), si no hay internet el guardado
    e.respondWith(
      fetch(r)
        .then((res) => {
          const copia = res.clone();
          caches.open(VERSION).then((c) => c.put(r, copia));
          return res;
        })
        .catch(() => caches.match(r).then((m) => m || caches.match("index.html")))
    );
  } else if (u.hostname === "fonts.googleapis.com" || u.hostname === "fonts.gstatic.com") {
    // Fuentes: se guardan la primera vez y después salen del guardado
    e.respondWith(
      caches.match(r).then(
        (m) =>
          m ||
          fetch(r).then((res) => {
            const copia = res.clone();
            caches.open(VERSION).then((c) => c.put(r, copia));
            return res;
          })
      )
    );
  }
});
