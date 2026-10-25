/* Login & manajemen pengguna — berjalan sepenuhnya di browser (tanpa server).
 *
 * Cara kerja:
 *  - Daftar pengguna bawaan ada di data/users.js (password disimpan sebagai hash PBKDF2-SHA256).
 *  - Perubahan oleh admin (tambah/hapus/nonaktifkan/reset password) disimpan di perangkat admin (localStorage).
 *  - Agar perubahan berlaku di semua perangkat: Dashboard Admin → "Unduh users.js" → ganti file
 *    data/users.js → upload ulang ke Netlify.
 *  - PENTING: ini pembatas akses di sisi browser, bukan pengamanan tingkat server (lihat README).
 */
(function () {
  "use strict";
  var LS = "umrah:";
  var MAX_FAIL = 5, LOCK_MS = 30000, SESSION_MS = 30 * 24 * 3600 * 1000;
  var BASE = window.UMRAH_USERS || { version: 0, users: [] };
  var enc = new TextEncoder();

  function get(k) { try { var x = localStorage.getItem(LS + k); return x === null ? null : JSON.parse(x); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(LS + k, JSON.stringify(v)); } catch (e) {} }
  function del(k) { try { localStorage.removeItem(LS + k); } catch (e) {} }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  function b64(buf) { var s = ""; new Uint8Array(buf).forEach(function (b) { s += String.fromCharCode(b); }); return btoa(s); }
  function unb64(s) { var bin = atob(s), a = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) a[i] = bin.charCodeAt(i); return a; }

  function hash(pw, saltB64, iter) {
    if (!window.crypto || !crypto.subtle) return Promise.reject(new Error("Browser ini tidak mendukung enkripsi yang dibutuhkan (buka lewat https)."));
    return crypto.subtle.importKey("raw", enc.encode(pw), "PBKDF2", false, ["deriveBits"]).then(function (k) {
      return crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: unb64(saltB64), iterations: iter }, k, 256);
    }).then(b64);
  }
  function newSalt() { return b64(crypto.getRandomValues(new Uint8Array(16))); }

  /* ---------- daftar pengguna efektif (override lokal jika masih berlaku) ---------- */
  function effective() {
    var l = get("users");
    if (l && Array.isArray(l.users) && l.baseVersion >= BASE.version) return l.users;
    if (l) del("users");            // file users.js di server lebih baru -> buang override lama
    return clone(BASE.users);
  }
  function save(list) { set("users", { baseVersion: BASE.version, users: list }); }
  function isLocal() { var l = get("users"); return !!(l && l.baseVersion >= BASE.version); }
  function find(list, u) { u = String(u || "").toLowerCase(); return list.filter(function (x) { return x.username.toLowerCase() === u; })[0]; }
  function pub(u) { if (!u) return null; var c = clone(u); delete c.hash; delete c.salt; return c; }
  function activeAdmins(list) { return list.filter(function (x) { return x.role === "admin" && x.aktif; }); }

  /* ---------- log aktivitas (perangkat ini) ---------- */
  function log(event, user) {
    var l = get("log") || [];
    l.unshift({ t: Date.now(), u: user || "-", e: event });
    set("log", l.slice(0, 80));
  }

  /* ---------- sesi ---------- */
  function current() {
    var s = get("session");
    if (!s || Date.now() - s.t > SESSION_MS) return null;
    var u = find(effective(), s.u);
    if (!u || !u.aktif) { del("session"); return null; }
    return pub(u);
  }

  function throttle() {
    var a = get("att") || { n: 0, until: 0 };
    return a.until > Date.now() ? Math.ceil((a.until - Date.now()) / 1000) : 0;
  }
  function failed() {
    var a = get("att") || { n: 0, until: 0 };
    a.n++;
    if (a.n >= MAX_FAIL) { a.until = Date.now() + LOCK_MS; a.n = 0; }
    set("att", a);
  }

  function login(username, password) {
    var wait = throttle();
    if (wait) return Promise.resolve({ ok: false, error: "Terlalu banyak percobaan. Coba lagi dalam " + wait + " detik." });
    var u = find(effective(), username);
    var salt = u ? u.salt : newSalt(), iter = u ? u.iter : 100000;
    return hash(String(password || ""), salt, iter).then(function (h) {
      if (!u || h !== u.hash) { failed(); log("Gagal masuk", username || "-"); return { ok: false, error: "Username atau password salah." }; }
      if (!u.aktif) { log("Akun nonaktif mencoba masuk", u.username); return { ok: false, error: "Akun ini dinonaktifkan. Hubungi admin." }; }
      set("att", { n: 0, until: 0 });
      set("session", { u: u.username, t: Date.now() });
      log("Masuk", u.username);
      return { ok: true, user: pub(u) };
    }, function (err) { return { ok: false, error: err.message }; });
  }

  function logout() { var c = current(); if (c) log("Keluar", c.username); del("session"); }

  /* ---------- operasi pengguna ---------- */
  function validUsername(u) { return /^[a-z0-9._-]{3,24}$/i.test(u); }
  function randomPw() {
    var a = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789", out = "", r = crypto.getRandomValues(new Uint8Array(10));
    for (var i = 0; i < 10; i++) out += a[r[i] % a.length];
    return out;
  }
  function setPassword(user, pw) {
    user.salt = newSalt(); user.iter = 100000;
    return hash(pw, user.salt, user.iter).then(function (h) { user.hash = h; return user; });
  }

  function addUser(o, actor) {
    var list = effective(), username = String(o.username || "").trim();
    if (!validUsername(username)) return Promise.resolve({ ok: false, error: "Username 3–24 karakter: huruf, angka, titik, garis bawah, atau strip." });
    if (find(list, username)) return Promise.resolve({ ok: false, error: "Username sudah dipakai." });
    if (String(o.password || "").length < 6) return Promise.resolve({ ok: false, error: "Password minimal 6 karakter." });
    var u = { username: username, nama: String(o.nama || username).trim(), role: o.role === "admin" ? "admin" : "user", aktif: true, wajibGanti: !!o.wajibGanti, dibuat: new Date().toISOString().slice(0, 10) };
    return setPassword(u, o.password).then(function () {
      list.push(u); save(list); log("Menambah pengguna " + username, actor); return { ok: true };
    });
  }
  function removeUser(username, actor) {
    var list = effective(), u = find(list, username);
    if (!u) return { ok: false, error: "Pengguna tidak ditemukan." };
    if (u.username.toLowerCase() === String(actor).toLowerCase()) return { ok: false, error: "Anda tidak bisa menghapus akun yang sedang dipakai." };
    var rest = list.filter(function (x) { return x !== u; });
    if (!activeAdmins(rest).length) return { ok: false, error: "Harus tersisa minimal satu admin aktif." };
    save(rest); log("Menghapus pengguna " + u.username, actor); return { ok: true };
  }
  function setRole(username, role, actor) {
    var list = effective(), u = find(list, username);
    if (!u) return { ok: false, error: "Pengguna tidak ditemukan." };
    u.role = role === "admin" ? "admin" : "user";
    if (!activeAdmins(list).length) return { ok: false, error: "Harus tersisa minimal satu admin aktif." };
    save(list); log("Mengubah peran " + u.username + " → " + u.role, actor); return { ok: true };
  }
  function setActive(username, aktif, actor) {
    var list = effective(), u = find(list, username);
    if (!u) return { ok: false, error: "Pengguna tidak ditemukan." };
    if (!aktif && u.username.toLowerCase() === String(actor).toLowerCase()) return { ok: false, error: "Anda tidak bisa menonaktifkan akun yang sedang dipakai." };
    u.aktif = !!aktif;
    if (!activeAdmins(list).length) return { ok: false, error: "Harus tersisa minimal satu admin aktif." };
    save(list); log((aktif ? "Mengaktifkan " : "Menonaktifkan ") + u.username, actor); return { ok: true };
  }
  function resetPassword(username, actor) {
    var list = effective(), u = find(list, username);
    if (!u) return Promise.resolve({ ok: false, error: "Pengguna tidak ditemukan." });
    var tmp = randomPw();
    return setPassword(u, tmp).then(function () { u.wajibGanti = true; save(list); log("Reset password " + u.username, actor); return { ok: true, password: tmp }; });
  }
  function changePassword(username, oldPw, newPw) {
    var list = effective(), u = find(list, username);
    if (!u) return Promise.resolve({ ok: false, error: "Pengguna tidak ditemukan." });
    if (String(newPw || "").length < 6) return Promise.resolve({ ok: false, error: "Password baru minimal 6 karakter." });
    return hash(String(oldPw || ""), u.salt, u.iter).then(function (h) {
      if (h !== u.hash) return { ok: false, error: "Password lama salah." };
      return setPassword(u, newPw).then(function () { u.wajibGanti = false; save(list); log("Mengganti password", username); return { ok: true }; });
    }, function (e) { return { ok: false, error: e.message }; });
  }

  /* ---------- ekspor / impor ---------- */
  function exportText() {
    var data = { version: BASE.version + 1, users: effective() };
    var hdr = "/*\n * DAFTAR PENGGUNA — jangan edit manual (password disimpan sebagai hash).\n * Kelola pengguna lewat Dashboard Admin di aplikasi, lalu klik \"Unduh users.js\"\n * dan ganti file ini dengan hasil unduhan, kemudian upload ulang ke Netlify.\n */\nwindow.UMRAH_USERS = ";
    return hdr + JSON.stringify(data, null, 2) + ";\n";
  }
  function importText(text, actor) {
    try {
      var i = text.indexOf("window.UMRAH_USERS");
      var s = i >= 0 ? text.slice(text.indexOf("=", i) + 1) : text;
      var data = JSON.parse(s.slice(s.indexOf("{"), s.lastIndexOf("}") + 1));
      var list = data.users;
      if (!Array.isArray(list) || !list.length) throw new Error("Tidak ada daftar pengguna di file.");
      list.forEach(function (u) { if (!u.username || !u.hash || !u.salt || !u.iter) throw new Error("Data pengguna tidak lengkap: " + (u.username || "?")); });
      if (!activeAdmins(list).length) throw new Error("File harus berisi minimal satu admin aktif.");
      save(list); log("Impor daftar pengguna (" + list.length + ")", actor); return { ok: true, count: list.length };
    } catch (e) { return { ok: false, error: e.message }; }
  }
  function resetLocal(actor) { del("users"); log("Reset ke daftar pengguna bawaan", actor); }

  window.Auth = {
    users: function () { return effective().map(pub); },
    current: current, login: login, logout: logout, isLocal: isLocal, baseVersion: function () { return BASE.version; },
    addUser: addUser, removeUser: removeUser, setRole: setRole, setActive: setActive,
    resetPassword: resetPassword, changePassword: changePassword,
    exportText: exportText, importText: importText, resetLocal: resetLocal,
    getLog: function () { return get("log") || []; }, clearLog: function () { del("log"); }
  };
})();
