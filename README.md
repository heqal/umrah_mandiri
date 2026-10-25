# Panduan Umrah Mandiri (webapp statis, offline, dengan login)

Tanpa build dan tanpa server. Upload ke Netlify: ekstrak ZIP, buka https://app.netlify.com/drop, seret foldernya.

## Akun bawaan (WAJIB diganti)
| Username | Password   | Peran |
|----------|------------|-------|
| admin    | admin123   | Admin |
| jamaah   | jamaah123  | User  |

Saat login pertama, aplikasi meminta password diganti.

## Bagaimana aplikasi bisa offline
1. Saat pertama dibuka dengan internet, browser mendaftarkan **service worker** (`sw.js`), program kecil yang berjalan di antara aplikasi dan jaringan.
2. Service worker mengunduh semua file aplikasi (HTML, CSS, JS, isi, daftar pengguna) ke **Cache Storage** browser. Lencana di header berubah menjadi "Online · siap offline ✓" bila sudah selesai.
3. Setelah itu setiap permintaan file dijawab **dari cache lebih dulu**, sehingga aplikasi terbuka cepat dan tetap jalan di pesawat, bus, atau area tanpa sinyal.
4. Bila ada internet, service worker mengambil versi terbaru di latar belakang dan memperbarui cache. Jika ada perubahan, muncul tombol "Muat ulang".
5. Data Anda (centang progres, tema, sesi login) disimpan di **localStorage** perangkat, jadi tidak butuh internet.
6. Login pun jalan offline karena daftar pengguna ikut tersimpan di cache dan pengecekan password dilakukan di browser.

Syarat: buka sekali lewat alamat https Netlify (service worker tidak aktif jika file dibuka langsung dari folder), dan jangan membersihkan data situs. **Buka dan tunggu lencana "siap offline" sebelum berangkat.**

## Login dan Dashboard Admin
- **User**: melihat semua tab panduan.
- **Admin**: sama seperti user, ditambah tab **Admin**: statistik, tambah pengguna, reset password (membuat password sementara), jadikan admin/user, aktifkan/nonaktifkan, hapus, ekspor/impor, dan log aktivitas.
- Tidak bisa menghapus/menonaktifkan akun sendiri atau admin terakhir.
- Password disimpan sebagai hash PBKDF2-SHA256 (100.000 iterasi) dengan salt acak, bukan teks biasa.
- Setelah 5 kali salah, login dikunci 30 detik.

### Agar perubahan pengguna berlaku di semua perangkat
Aplikasi ini statis, jadi tidak ada database bersama. Perubahan admin tersimpan di perangkat admin. Untuk menyebarkannya:
1. Dashboard Admin → **Unduh users.js**.
2. Ganti file `data/users.js` di folder dengan hasil unduhan.
3. Upload ulang folder ke Netlify. Perangkat lain menerima daftar baru saat berikutnya online.

Catatan: pengguna yang mengganti password sendiri hanya mengubahnya di perangkatnya; admin perlu mengunggah users.js terbaru agar berlaku di perangkat lain.

### Batasan keamanan (jujur)
Login di sini adalah **pembatas akses di sisi browser**, bukan keamanan tingkat server. Siapa pun yang tahu alamat situs dan membuka file `data/content.js` langsung dapat membaca isinya, dan pembatasan bisa dilewati oleh yang paham teknis. Cukup untuk membatasi pemakaian awam (kelompok jamaah, keluarga). Bila perlu perlindungan sungguhan: pakai fitur *password protection* Netlify (paket berbayar), atau tambahkan backend (mis. Netlify Functions, Supabase, Firebase) untuk autentikasi dan data pengguna bersama.

## Fitur admin v3: kelola isi langsung dari aplikasi

Login sebagai admin, lalu tekan **Mode edit** di header (muncul tombol Ubah/Hapus/↑↓ di tiap kartu).

- **Itinerary**: panel "Kelola hari" untuk tambah hari di akhir, sisipkan hari, ubah kota/judul, geser, atau hapus hari. Nomor hari otomatis disusun ulang, langkah ikut berpindah (langkah pada hari yang dihapus ikut terhapus). Setiap langkah bisa ditambah, diubah, digeser, dihapus. Subjudul header otomatis menghitung jumlah hari dan kota.
- **Doa Pribadi**: pengguna biasa melihat pesan "hubungi admin" + kotak untuk menyalin/mengirim permintaan via WhatsApp (isi nomor di tab Admin), dan melihat doa yang ditujukan kepadanya (atau "Semua pengguna"). Admin menambah/ubah/hapus doa per pengguna dan bisa memfilter berdasarkan pengguna.
- **Catatan**: admin menambah, mengubah, menggeser, menghapus catatan (di tab Catatan, Mode edit).
- **Surah di header**: tampil di samping judul dan subjudul. Admin menambah, mengubah, menonaktifkan, menghapus, mengurutkan di tab Admin (Surah di header). Bila lebih dari satu, pengguna menggeser dengan tombol ‹ ›.

### Agar perubahan konten berlaku di semua perangkat
Perubahan tersimpan di browser admin. Di tab Admin klik **Unduh content.js**, ganti `data/content.js`, lalu upload ulang folder ke Netlify. Perangkat lain menerima pembaruan otomatis (toast "Muat ulang"). Doa pribadi di `content.js` bersifat publik bagi yang bisa membuka alamat situs, jadi jangan menulis hal rahasia.

## Mengedit isi dan tema
- Isi: `data/content.js` (itinerary, bacaan, shalat, lokasi, rukun, catatan, daftar kategori lokasi).
- Tema: `css/theme.css` (warna, font, ukuran, mode gelap).
- Kategori filter: tiap item bacaan/lokasi/shalat punya `"hukum": "wajib" | "sunnah"` dan `"lokasiKat": [...]`; pilihan lokasi pada filter ada di `"kategoriLokasi"` (nilai harus sama persis).
- Tambah langkah itinerary: salin satu blok, beri `id` unik. Kode seperti `B8` otomatis menjadi tombol.
- Setelah mengedit dan upload ulang, perangkat yang sudah memasang aplikasi akan melihat tombol "Muat ulang". Untuk memaksa semua perangkat memuat ulang total, naikkan `VERSION` di `sw.js`.

## Struktur
```
index.html              kerangka + layar login
css/theme.css           TEMA
css/style.css           tata letak
data/content.js         ISI
data/users.js           PENGGUNA (hash; kelola lewat Dashboard Admin)
js/auth.js
  js/store.js     penyimpanan perubahan konten admin              login, peran, manajemen pengguna
js/app.js               tampilan, filter, dashboard admin
sw.js                   cache offline
manifest.webmanifest    pasang sebagai aplikasi
_headers                aturan cache Netlify
```
