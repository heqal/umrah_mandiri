/*
 * DAFTAR PENGGUNA — jangan edit manual (password disimpan sebagai hash).
 * Kelola pengguna lewat Dashboard Admin di aplikasi, lalu klik "Unduh users.js"
 * dan ganti file ini dengan hasil unduhan, kemudian upload ulang ke Netlify.
 * Akun bawaan: admin / admin123  dan  jamaah / jamaah123  (WAJIB diganti setelah login pertama).
 */
window.UMRAH_USERS = {
  "version": 1,
  "users": [
    {
      "username": "admin",
      "nama": "Administrator",
      "role": "admin",
      "aktif": true,
      "salt": "koKZF3kwTdKO1TRozZ4z5A==",
      "iter": 100000,
      "hash": "SxGZpB+O+QsZB15uRbiVSL3ePcZC9TlVfE7imsNxRmA=",
      "wajibGanti": true,
      "dibuat": "2026-10-25"
    },
    {
      "username": "jamaah",
      "nama": "Jamaah",
      "role": "user",
      "aktif": true,
      "salt": "MR1q6+FTjaGtsd3RUDL4lw==",
      "iter": 100000,
      "hash": "eIM24AQCZZ3+2VKSzeyF4Gl5yTAOuwIDl31ZAJoW8cY=",
      "wajibGanti": true,
      "dibuat": "2026-10-25"
    }
  ]
};
