/* Penyimpanan perubahan konten oleh admin — berjalan di browser (tanpa server).
 *
 *  - Isi asli ada di data/content.js (window.UMRAH_DATA).
 *  - Perubahan admin (itinerary, catatan, doa pribadi, surah header, judul/kontak) disimpan di perangkat admin (localStorage)
 *    dan langsung menimpa tampilan di perangkat itu.
 *  - Agar berlaku di semua perangkat: tab Admin → "Unduh content.js" → ganti file data/content.js → upload ulang ke Netlify.
 *  - Setiap unduhan menaikkan meta.versi; setelah file baru terpasang, perubahan lokal yang lebih lama otomatis dibuang.
 */
(function () {
  "use strict";
  var KEY = "umrah:content";
  var D = window.UMRAH_DATA = window.UMRAH_DATA || {};
  D.meta = D.meta || {};
  var BASEV = D.meta.versi || 0;
  var EDIT = ["hariInfo", "itinerary", "catatan", "doaPribadi", "header"];
  var META = ["judul", "subjudul", "subjudulOtomatis", "kontakAdmin"];
  var HDR = "/*\n * ISI APLIKASI — dihasilkan dari tab Admin (Unduh content.js).\n * Ganti file data/content.js dengan file ini lalu upload ulang ke Netlify.\n * Penjelasan kolom: lihat README.md.\n */\nwindow.UMRAH_DATA = ";

  function read() { try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; } }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  function apply() {
    var o = read();
    if (!o) return;
    if (o.baseVersion < BASEV) { try { localStorage.removeItem(KEY); } catch (e) {} return; }
    EDIT.forEach(function (k) { if (o[k] !== undefined) D[k] = o[k]; });
    META.forEach(function (k) { if (o.meta && o.meta[k] !== undefined) D.meta[k] = o.meta[k]; });
  }

  function save() {
    var o = { baseVersion: BASEV, meta: {} };
    EDIT.forEach(function (k) { o[k] = D[k]; });
    META.forEach(function (k) { o.meta[k] = D.meta[k]; });
    try { localStorage.setItem(KEY, JSON.stringify(o)); return true; } catch (e) { return false; }
  }

  function isLocal() { var o = read(); return !!(o && o.baseVersion >= BASEV); }

  function exportText() {
    var c = clone(D);
    c.meta.versi = BASEV + 1;
    return HDR + JSON.stringify(c, null, 2) + ";\n";
  }

  function importText(text) {
    try {
      var i = text.indexOf("window.UMRAH_DATA");
      var s = i >= 0 ? text.slice(text.indexOf("=", i) + 1) : text;
      var data = JSON.parse(s.slice(s.indexOf("{"), s.lastIndexOf("}") + 1));
      if (!Array.isArray(data.itinerary) || !Array.isArray(data.hariInfo)) throw new Error("File tidak berisi itinerary/hariInfo.");
      EDIT.forEach(function (k) { if (data[k] !== undefined) D[k] = data[k]; });
      META.forEach(function (k) { if (data.meta && data.meta[k] !== undefined) D.meta[k] = data.meta[k]; });
      save();
      return { ok: true };
    } catch (e) { return { ok: false, error: e.message }; }
  }

  function resetLocal() { try { localStorage.removeItem(KEY); } catch (e) {} }

  apply();
  window.Content = { save: save, isLocal: isLocal, exportText: exportText, importText: importText, resetLocal: resetLocal, baseVersion: function () { return BASEV; } };
})();
