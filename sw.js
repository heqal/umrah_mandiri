/* Service worker — membuat aplikasi bisa dibuka tanpa internet.
 *
 * Mekanisme:
 *  1. INSTALL : semua file aplikasi (ASSETS) diunduh dan disimpan di Cache Storage browser.
 *  2. FETCH   : setiap permintaan dijawab dari cache lebih dulu (instan, tanpa internet).
 *               Bila ada internet, file yang sama diambil ulang di latar belakang dan cache diperbarui.
 *  3. UPDATE  : bila isi file di server berubah (etag berbeda), halaman diberi tahu agar menampilkan
 *               tombol "Muat ulang" — pembaruan terpasang tanpa mengganggu yang sedang dibaca.
 *  4. ACTIVATE: cache versi lama dihapus. Naikkan VERSION untuk memaksa semua perangkat memuat ulang semuanya.
 */
var VERSION = "umrah-v3";
var ASSETS = ["./", "index.html", "css/theme.css", "css/style.css", "js/app.js", "js/auth.js", "js/store.js",
              "data/content.js", "data/users.js", "manifest.webmanifest", "icon.svg"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) {
    return Promise.all(ASSETS.map(function (a) {
      return fetch(new Request(a, { cache: "reload" })).then(function (r) { if (r.ok) return c.put(a, r); });
    }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function sig(res) { return res && (res.headers.get("etag") || res.headers.get("last-modified") || res.headers.get("content-length")); }

function refresh(req, cached) {
  return fetch(req, { cache: "no-cache" }).then(function (res) {
    if (!res || !res.ok) return;
    var changed = cached && sig(cached) !== sig(res);
    return caches.open(VERSION).then(function (c) { return c.put(req, res.clone()); }).then(function () {
      if (changed) self.clients.matchAll().then(function (cl) { cl.forEach(function (c) { c.postMessage({ type: "updated", url: req.url }); }); });
    });
  }).catch(function () {});
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.open(VERSION).then(function (c) {
    return c.match(req, { ignoreSearch: true }).then(function (hit) {
      if (hit) { e.waitUntil(refresh(req, hit)); return hit; }
      return fetch(req).then(function (res) {
        if (res && res.ok) c.put(req, res.clone());
        return res;
      }).catch(function () { return c.match("index.html"); });
    });
  }));
});
