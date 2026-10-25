/*
 * ISI APLIKASI — edit file ini untuk mengubah isi (teks, doa, jadwal),
 * ATAU kelola langsung lewat aplikasi (login admin → Mode edit) lalu klik "Unduh content.js" di tab Admin
 * dan ganti file ini dengan hasil unduhan, kemudian upload ulang ke Netlify.
 * Format: JSON biasa. Tanda kutip ganda " wajib; hati-hati dengan koma di akhir baris.
 *
 * meta.versi            : naik otomatis saat Anda mengunduh dari aplikasi (jangan diturunkan).
 * meta.subjudulOtomatis : true = subjudul dihitung dari daftar hari (jumlah hari + kota); false = pakai meta.subjudul.
 * meta.kontakAdmin      : nomor WhatsApp admin (format 62812xxxxxxx) untuk tombol "Kirim permintaan doa".
 * hariInfo + itinerary  : daftar hari ("Hari 1", "Hari 2", ...) dan langkah-langkahnya. Setiap langkah punya "id" unik.
 * doaPribadi            : doa pilihan per pengguna ("untuk": username, atau "*" untuk semua pengguna).
 * header.surah          : surah/ayat yang tampil di header (aktif: true/false).
 * Kode bacaan seperti B8 pada kolom "bacaan"/"doa" otomatis menjadi tombol yang membuka bacaan terkait.
 * Kategori filter: "hukum" ("wajib"/"sunnah") dan "lokasiKat" (harus sama persis dengan isi "kategoriLokasi").
 */
window.UMRAH_DATA = {
  "meta": {
    "judul": "Panduan Umrah Mandiri",
    "subjudul": "Itinerary 14 hari · Makkah (Hari 1–8) · Madinah (Hari 9–14)",
    "catatanKaki": "Disusun dari Buku Tuntunan Manasik Haji dan Umrah (Kemenhaj) dan pengetahuan umum. Teks Arab mohon dicek dengan buku/ustadz sebelum dihafal.",
    "kontakAdmin": "",
    "versi": 1,
    "subjudulOtomatis": true
  },
  "tabs": [
    {
      "id": "itinerary",
      "label": "Itinerary"
    },
    {
      "id": "bacaan",
      "label": "Bacaan & Doa"
    },
    {
      "id": "shalat",
      "label": "Shalat"
    },
    {
      "id": "lokasi",
      "label": "Lokasi Doa"
    },
    {
      "id": "doa",
      "label": "Doa Pribadi"
    },
    {
      "id": "rukun",
      "label": "Rukun & Larangan"
    },
    {
      "id": "catatan",
      "label": "Catatan"
    }
  ],
  "hariInfo": [
    {
      "hari": "Hari 1",
      "kota": "Makkah",
      "judul": "Berangkat, ihram di pesawat, umrah (thawaf, sa'i, tahallul)"
    },
    {
      "hari": "Hari 2",
      "kota": "Makkah",
      "judul": "Ibadah di Masjidil Haram"
    },
    {
      "hari": "Hari 3",
      "kota": "Makkah",
      "judul": "Ziarah Makkah (dekat Masjidil Haram)"
    },
    {
      "hari": "Hari 4",
      "kota": "Makkah",
      "judul": "Ibadah dan umrah sunnah (opsional)"
    },
    {
      "hari": "Hari 5",
      "kota": "Makkah",
      "judul": "Ziarah Jabal Nur / Jabal Tsur"
    },
    {
      "hari": "Hari 6",
      "kota": "Makkah",
      "judul": "Ziarah Arafah, Muzdalifah, Mina"
    },
    {
      "hari": "Hari 7",
      "kota": "Makkah",
      "judul": "Ibadah mandiri"
    },
    {
      "hari": "Hari 8",
      "kota": "Makkah",
      "judul": "Persiapan dan thawaf wada'"
    },
    {
      "hari": "Hari 9",
      "kota": "Madinah",
      "judul": "Perjalanan ke Madinah, Masjid Nabawi"
    },
    {
      "hari": "Hari 10",
      "kota": "Madinah",
      "judul": "Subuh, Raudhah, makam Nabi, Baqi'"
    },
    {
      "hari": "Hari 11",
      "kota": "Madinah",
      "judul": "Uhud, Qiblatain, Khandaq"
    },
    {
      "hari": "Hari 12",
      "kota": "Madinah",
      "judul": "Quba, Jum'ah, Abu Dzar, Ghamamah"
    },
    {
      "hari": "Hari 13",
      "kota": "Madinah",
      "judul": "Al-Ijabah, Bir Ali, persiapan pulang"
    },
    {
      "hari": "Hari 14",
      "kota": "Madinah",
      "judul": "Pulang"
    }
  ],
  "itinerary": [
    {
      "id": "h1-1",
      "hari": "Hari 1",
      "waktu": "Pagi",
      "tahap": "Persiapan Ihram",
      "kegiatan": "Mandi sunnah, berwudhu, memotong kuku, memakai wangi-wangian di badan (sebelum niat), dan memakai pakaian ihram. Pria: 2 helai kain putih tak berjahit, kepala terbuka. Wanita: pakaian menutup aurat, wajah dan telapak tangan terbuka.",
      "lokasi": "Rumah/hotel transit atau ruang tunggu bandara keberangkatan",
      "bacaan": "—",
      "doa": "Doa bebas: kemudahan perjalanan dan niat yang ikhlas.",
      "tempat": "—",
      "catatan": "Wewangian hanya pada badan dan hanya sebelum niat. Rapikan ihram dan pastikan aurat tertutup. Kain ihram sebaiknya menyerap keringat.",
      "rujukan": "Hlm. 191–192, 258–259"
    },
    {
      "id": "h1-2",
      "hari": "Hari 1",
      "waktu": "Sebelum boarding",
      "tahap": "Persiapan Ihram",
      "kegiatan": "Shalat sunnah ihram 2 rakaat (bila waktu dan tempat memungkinkan; jauhi waktu terlarang untuk shalat sunnah).",
      "lokasi": "Mushala bandara keberangkatan",
      "bacaan": "Rakaat 1: Al-Fatihah + Al-Kafirun · Rakaat 2: Al-Fatihah + Al-Ikhlas",
      "doa": "Doa bebas setelah shalat.",
      "tempat": "Mushala bandara.",
      "catatan": "Lihat sheet 'Shalat Sunnah'. Niat ihram dapat dilakukan sebelum miqat (di bandara asal, atau di pesawat sebelum melintas Yalamlam).",
      "rujukan": "Hlm. 191, 256"
    },
    {
      "id": "h1-3",
      "hari": "Hari 1",
      "waktu": "Sepanjang penerbangan",
      "tahap": "Perjalanan",
      "kegiatan": "Naik pesawat menuju Jeddah; shalat fardhu di pesawat sesuai kemampuan (jamak-qashar bila memenuhi syarat musafir).",
      "lokasi": "Bandara keberangkatan → Bandara King Abdulaziz Jeddah (JED)",
      "bacaan": "B1 Doa bepergian",
      "doa": "Keselamatan perjalanan dan kemudahan seluruh rangkaian ibadah.",
      "tempat": "Saat lepas landas. Doa musafir termasuk doa yang dikabulkan (HR. Abu Dawud, Tirmidzi).",
      "catatan": "Ihram sudah dipakai, tetapi larangan ihram belum berlaku sebelum niat.",
      "rujukan": "—"
    },
    {
      "id": "h1-4",
      "hari": "Hari 1",
      "waktu": "± 1 jam sebelum mendarat (ikuti pengumuman)",
      "tahap": "IHRAM (Rukun 1)",
      "kegiatan": "Setelah awak kabin/pembimbing mengumumkan pesawat melintas Yalamlam, berniat umrah dan segera bertalbiyah. Jemaah lansia, sakit, atau khawatir terhalang berniat dengan isytirath (B7b).",
      "lokasi": "Di atas pesawat — sejajar miqat Yalamlam (Qarnul Manazil)",
      "bacaan": "B7 Niat ihram umrah (RUKUN) atau B7b Niat dengan isytirath · B8 Talbiyah · B9 Doa setelah talbiyah",
      "doa": "Mohon umrah diterima, dimudahkan, dan dijaga dari larangan ihram.",
      "tempat": "Di tempat duduk masing-masing, ketika sejajar/sebelum melintas miqat.",
      "catatan": "Pria: talbiyah dengan suara wajar; wanita pelan. Mulai sekarang larangan ihram berlaku (pria tidak menutup kepala, tidak memakai wewangian, tidak memotong rambut/kuku). Wanita haid tetap wajib berniat ihram di miqat yang dilewati. Jika belum sempat berniat di pesawat, buku menyebut boleh berniat di bus di bandara Jeddah; sebagian ulama mensyaratkan niat sebelum melewati miqat, jadi sebaiknya berniat di pesawat.",
      "rujukan": "Hlm. 192–193, 256–257"
    },
    {
      "id": "h1-5",
      "hari": "Hari 1",
      "waktu": "Sore",
      "tahap": "Perjalanan",
      "kegiatan": "Tiba di Jeddah, imigrasi, lalu bus menuju Makkah (± 1,5–2 jam). Perbanyak talbiyah, shalawat, doa, dan dzikir; hindari larangan ihram.",
      "lokasi": "Bandara Jeddah (JED) → Makkah",
      "bacaan": "B8 Talbiyah",
      "doa": "Doa ketika tiba di gerbang kota Makkah; doa bebas dengan hati khusyuk.",
      "tempat": "Di bus, ketika memasuki gerbang kota Makkah.",
      "catatan": "Masuk Makkah dengan hati khusyuk, tenang, dan tetap bertalbiyah.",
      "rujukan": "Hlm. 194"
    },
    {
      "id": "h1-6",
      "hari": "Hari 1",
      "waktu": "Malam",
      "tahap": "Persiapan Thawaf",
      "kegiatan": "Check-in hotel, beristirahat sebentar (sesuai sunnah Nabi ﷺ), orientasi lingkungan. Mandi sunnah dan berwudhu sebelum berangkat ke Masjidil Haram.",
      "lokasi": "Hotel Makkah",
      "bacaan": "B8 Talbiyah",
      "doa": "Doa bebas.",
      "tempat": "—",
      "catatan": "Pastikan suci dari hadats dan najis, aurat tertutup. Wanita haid menunggu suci di hotel dan tetap menjaga larangan ihram.",
      "rujukan": "Hlm. 194–195"
    },
    {
      "id": "h1-7",
      "hari": "Hari 1",
      "waktu": "Malam",
      "tahap": "Masjidil Haram",
      "kegiatan": "Masuk Masjidil Haram dengan kaki kanan (disunnahkan melalui pintu Bani Syaibah; bila tidak memungkinkan, pintu mana saja), menuju Mataf dan melihat Ka'bah dengan mengangkat tangan serta berdoa.",
      "lokasi": "Masjidil Haram (pintu terdekat menuju Mataf)",
      "bacaan": "B2 Doa masuk masjid · B10 Doa melihat Ka'bah",
      "doa": "Doa bebas dan mohon dengan sungguh-sungguh: dunia dan akhirat, ampunan, keluarga.",
      "tempat": "Saat pandangan pertama ke Ka'bah (mengangkat tangan: HR. Syafi'i dari Ibnu Abbas).",
      "catatan": "Tahiyat Masjidil Haram adalah thawaf sunnah, bukan shalat tahiyatul masjid (buku menyebut sebagian ulama membolehkan shalat tahiyat). Hentikan talbiyah ketika mulai thawaf (mazhab Syafi'i). Bersabar bila berdesakan; maafkan jika terdorong.",
      "rujukan": "Hlm. 195, 314"
    },
    {
      "id": "h1-8",
      "hari": "Hari 1",
      "waktu": "Malam",
      "tahap": "THAWAF (Rukun 2)",
      "kegiatan": "Berdiri sejajar Hajar Aswad (ditandai lampu hijau), menghadap Hajar Aswad, istilam (sentuh/cium bila mungkin, atau lambaikan tangan lalu cium tangan, atau isyarat), lalu mulai putaran 1.",
      "lokasi": "Mataf — sejajar Hajar Aswad (garis/lampu hijau)",
      "bacaan": "B11 Takbir istilam",
      "doa": "Niat dalam hati: thawaf umrah karena Allah (niat umrah sudah mencakup).",
      "tempat": "Hajar Aswad: sentuh/cium bila tidak menyakiti orang lain; jika ramai cukup isyarat tangan.",
      "catatan": "Syarat sah: suci hadats/najis, aurat tertutup, di dalam Masjidil Haram (lantai 1–4), mulai dari Hajar Aswad, Ka'bah di kiri, di luar Hijr Ismail, 7 putaran. Jangan memaksa mencium Hajar Aswad; berdesakan laki-laki dan perempuan haram.",
      "rujukan": "Hlm. 196–197, 201, 260"
    },
    {
      "id": "h1-9",
      "hari": "Hari 1",
      "waktu": "Malam",
      "tahap": "THAWAF (Rukun 2)",
      "kegiatan": "Putaran 1–3: raml (lari kecil) bagi pria; wanita berjalan biasa. Idhtiba' (bahu kanan terbuka) bagi pria pada seluruh putaran. Setiap tiba di Rukun Yamani, usap (istilam); jika tidak mungkin, angkat tangan tanpa mengecup.",
      "lokasi": "Mataf, mengelilingi Ka'bah (Ka'bah di sebelah kiri)",
      "bacaan": "B12 Rabbana atina (antara Rukun Yamani–Hajar Aswad) · B11 Takbir tiap sampai Hajar Aswad/Rukun Yamani",
      "doa": "Di luar bacaan pokok: dzikir, doa bebas, atau Al-Qur'an dengan suara lirih (B18–B23).",
      "tempat": "Rukun Yamani → Hajar Aswad (sisi selatan Ka'bah), doa sapu jagat.",
      "catatan": "Selama thawaf dilarang menyentuh dinding Ka'bah, Hijr Ismail, dan Syadzarwan: putaran itu batal dan harus ditambah. Hindari sentuhan kulit dengan lawan jenis (menurut Syafi'i wudhu tidak batal jika tidak sengaja).",
      "rujukan": "Hlm. 198–200"
    },
    {
      "id": "h1-10",
      "hari": "Hari 1",
      "waktu": "Malam",
      "tahap": "THAWAF (Rukun 2)",
      "kegiatan": "Putaran 4–7: berjalan biasa. Putaran ke-7 berakhir di sejajar Hajar Aswad (lampu hijau). Jika ragu jumlah putaran, ambil yang paling sedikit lalu genapkan 7.",
      "lokasi": "Mataf",
      "bacaan": "B12 · B11",
      "doa": "Doa bebas.",
      "tempat": "Rukun Yamani → Hajar Aswad.",
      "catatan": "Jemaah lansia/sakit boleh thawaf dengan kursi roda, skuter, atau mobil golf; lebih baik mencari waktu sepi.",
      "rujukan": "Hlm. 200–201, 260–262"
    },
    {
      "id": "h1-11",
      "hari": "Hari 1",
      "waktu": "Malam",
      "tahap": "Setelah Thawaf",
      "kegiatan": "Shalat sunnah thawaf 2 rakaat. Rakaat 1: Al-Fatihah + Al-Kafirun; rakaat 2: Al-Fatihah + Al-Ikhlas. Kemudian berdoa.",
      "lokasi": "Belakang Maqam Ibrahim; jika padat, di mana saja di Masjidil Haram",
      "bacaan": "B13 Ayat Maqam Ibrahim & surat shalat",
      "doa": "Doa bebas setelah shalat.",
      "tempat": "Belakang Maqam Ibrahim.",
      "catatan": "Tidak perlu memaksakan dekat Maqam; shalat di area mana pun di Masjidil Haram sah. Lihat sheet 'Shalat Sunnah'.",
      "rujukan": "Hlm. 201–202 (cat. kaki 6)"
    },
    {
      "id": "h1-12",
      "hari": "Hari 1",
      "waktu": "Malam",
      "tahap": "Setelah Thawaf",
      "kegiatan": "Berdoa di Multazam (antara Hajar Aswad dan pintu Ka'bah). Jika padat, ambil tempat yang searah dengan Multazam.",
      "lokasi": "Multazam",
      "bacaan": "Doa bebas (B18–B23)",
      "doa": "Ampunan, perlindungan, hajat dunia-akhirat, orang tua, keluarga.",
      "tempat": "Multazam (tempat mustajab menurut atsar sahabat).",
      "catatan": "Jangan berdesakan atau berhenti terlalu lama saat ramai.",
      "rujukan": "Hlm. 202"
    },
    {
      "id": "h1-13",
      "hari": "Hari 1",
      "waktu": "Malam",
      "tahap": "Setelah Thawaf",
      "kegiatan": "Minum air zamzam dari galon/kran yang disediakan, kemudian berdoa.",
      "lokasi": "Tempat minum zamzam di Masjidil Haram",
      "bacaan": "B14 Doa zamzam",
      "doa": "Ilmu bermanfaat, rezeki luas, kesembuhan, atau hajat lain sesuai niat.",
      "tempat": "Di dekat tempat minum zamzam.",
      "catatan": "Air zamzam sesuai niat peminumnya (HR. Ibnu Majah).",
      "rujukan": "Hlm. 202"
    },
    {
      "id": "h1-14",
      "hari": "Hari 1",
      "waktu": "Malam",
      "tahap": "Menuju Sa'i",
      "kegiatan": "Istilam Hajar Aswad (sunnah) bila memungkinkan, lalu menuju Mas'a.",
      "lokasi": "Hajar Aswad → Bukit Shafa",
      "bacaan": "B11 Takbir istilam",
      "doa": "Doa bebas.",
      "tempat": "—",
      "catatan": "Bila ramai, cukup isyarat tangan dari kejauhan. Sa'i disunnahkan dalam keadaan suci dari hadats.",
      "rujukan": "Hlm. 203"
    },
    {
      "id": "h1-15",
      "hari": "Hari 1",
      "waktu": "Malam",
      "tahap": "SA'I (Rukun 3)",
      "kegiatan": "Mendaki/menuju Shafa sambil berdzikir dan berdoa, menghadap kiblat dan berdoa di atas Shafa.",
      "lokasi": "Bukit Shafa (awal Sa'i)",
      "bacaan": "B15 Ayat naik Shafa · B16 Tahlil Shafa-Marwah",
      "doa": "Berdoa panjang menghadap Ka'bah dengan mengangkat tangan.",
      "tempat": "Di Shafa menghadap kiblat (Nabi ﷺ berdoa panjang di sini, HR. Muslim).",
      "catatan": "Kondisi Shafa kini datar (lantai 1, 3, 4); di lantai 2 ada bagian menanjak. Sa'i dimulai dari Shafa dan berakhir di Marwah.",
      "rujukan": "Hlm. 203–204"
    },
    {
      "id": "h1-16",
      "hari": "Hari 1",
      "waktu": "Malam",
      "tahap": "SA'I (Rukun 3)",
      "kegiatan": "Berjalan Shafa → Marwah (perjalanan 1). Pria berlari kecil di sepanjang lampu hijau; wanita berjalan biasa. Berdzikir dan berdoa sepanjang jalan; sa'i boleh diselingi shalat fardhu.",
      "lokasi": "Mas'a — jalur antara Shafa dan Marwah",
      "bacaan": "B17 Doa di Mil Akhdhar",
      "doa": "Mohon ampunan dan rahmat.",
      "tempat": "Di antara dua penanda hijau (Mil Akhdhar).",
      "catatan": "Sa'i disunnahkan berjalan kaki bagi yang mampu; boleh dengan kursi roda atau skuter bagi yang udzur.",
      "rujukan": "Hlm. 204, 262"
    },
    {
      "id": "h1-17",
      "hari": "Hari 1",
      "waktu": "Malam",
      "tahap": "SA'I (Rukun 3)",
      "kegiatan": "Di Marwah: menghadap Ka'bah, tahlil/takbir dan berdoa; kembali ke Shafa (perjalanan 2). Ulangi hingga 7 perjalanan; perjalanan ke-7 berakhir di Marwah. Berdoa di Marwah setelah selesai; tidak perlu shalat sunnah setelah sa'i.",
      "lokasi": "Bukit Marwah dan Mas'a",
      "bacaan": "B16 Tahlil · B17 Doa Mil Akhdhar",
      "doa": "Doa bebas, pilihan B18–B23.",
      "tempat": "Di Marwah menghadap Ka'bah.",
      "catatan": "Shafa→Marwah = 1, Marwah→Shafa = 2, dst; total 7 kali.",
      "rujukan": "Hlm. 204–205"
    },
    {
      "id": "h1-18",
      "hari": "Hari 1",
      "waktu": "Dini hari",
      "tahap": "TAHALLUL (Rukun 4)",
      "kegiatan": "Pria: mencukur gundul (utama) atau memotong sebagian rambut dengan doa mencukur. Wanita: memotong rambut sebatas ujung jari, minimal 3 helai. Yang botak: menempelkan/menggerakkan alat cukur di kepala sebagai isyarat. Setelah ini ihram selesai dan umrah sempurna.",
      "lokasi": "Tukang cukur sekitar Marwah, atau hotel",
      "bacaan": "B24 Doa setelah bercukur",
      "doa": "Syukur, istighfar, mohon umrah diterima.",
      "tempat": "Di mana saja setelah Sa'i selesai di Marwah.",
      "catatan": "Bercukur adalah rukun umrah menurut mazhab Syafi'i; umrah tidak sempurna tanpanya. Boleh menggunting sendiri atau dibantu mahram. Tertib (ihram–thawaf–sa'i–tahallul) adalah rukun ke-5.",
      "rujukan": "Hlm. 205–206, 272–273"
    },
    {
      "id": "h2-1",
      "hari": "Hari 2",
      "waktu": "Setelah Subuh",
      "tahap": "Ibadah di Makkah",
      "kegiatan": "Shalat Subuh berjamaah; duduk berdzikir hingga matahari terbit, lalu shalat Isyraq 2 rakaat; tilawah dan dzikir pagi.",
      "lokasi": "Masjidil Haram",
      "bacaan": "B2 Doa masuk masjid · B3 Doa keluar masjid",
      "doa": "Doa untuk diri, orang tua, keluarga, umat Islam.",
      "tempat": "Di Masjidil Haram (pahala shalat berlipat 100.000 kali, HR. Ibnu Majah).",
      "catatan": "Lihat sheet 'Shalat Sunnah'. Jangan memaksakan diri shalat di Masjidil Haram setiap waktu jika kondisi kesehatan tidak memungkinkan; shalat di hotel juga sah.",
      "rujukan": "Hlm. 52, 314"
    },
    {
      "id": "h2-2",
      "hari": "Hari 2",
      "waktu": "Sepanjang hari",
      "tahap": "Ibadah di Makkah",
      "kegiatan": "Shalat lima waktu berjamaah, thawaf sunnah, tilawah, dzikir. Shalat 2 rakaat di Hijr Ismail bila ada ruang.",
      "lokasi": "Masjidil Haram · Hijr Ismail",
      "bacaan": "B12 · B13 · B18–B23",
      "doa": "Doa untuk diri, orang tua, keluarga, umat Islam.",
      "tempat": "Hijr Ismail: sebagian dianggap bagian Ka'bah (HR. Abu Dawud, Tirmidzi). Multazam, Rukun Yamani–Hajar Aswad, belakang Maqam Ibrahim.",
      "catatan": "Shalat di Hijr Ismail adalah sunnah mutlak yang tidak terkait thawaf; dapat dilakukan kapan saja. Jangan melompati pagar.",
      "rujukan": "Hlm. 202–203"
    },
    {
      "id": "h3-1",
      "hari": "Hari 3",
      "waktu": "Pagi–siang",
      "tahap": "Ziarah Makkah (dekat)",
      "kegiatan": "Napak tilas: tempat kelahiran Nabi ﷺ (Maulid, kini perpustakaan), pemakaman Ma'la, Masjid Jin, Masjid Syajarah, sumur/Masjid Dzi Thuwa.",
      "lokasi": "Sekitar Masjidil Haram (Maulid), Ma'la, Masjid Jin, Jarwal (Dzi Thuwa)",
      "bacaan": "Al-Fatihah + surat pendek (shalat tahiyatul masjid di masjid yang disinggahi)",
      "doa": "Doa bebas; salam kepada ahli kubur di Ma'la (B6).",
      "tempat": "Di masjid yang dikunjungi.",
      "catatan": "Tujuan utama ziarah adalah i'tibar (mengambil pelajaran sejarah). Hindari mencari berkah di pohon, batu, atau makam dengan cara yang tidak diajarkan Rasulullah ﷺ.",
      "rujukan": "Hlm. 275–276, 312–325"
    },
    {
      "id": "h4-1",
      "hari": "Hari 4",
      "waktu": "Pagi",
      "tahap": "Ibadah di Makkah",
      "kegiatan": "Perbanyak thawaf sunnah, tilawah, dan i'tikaf. Umrah sunnah ulang bagi yang mampu (berihram dari Tan'im/Ji'ranah: shalat sunnah ihram, niat, lalu thawaf–sa'i–tahallul).",
      "lokasi": "Masjid Aisyah (Tan'im) atau Ji'ranah → Masjidil Haram",
      "bacaan": "B7 Niat ihram umrah · B8 Talbiyah",
      "doa": "Doa bebas.",
      "tempat": "Masjid Aisyah / miqat Tan'im.",
      "catatan": "Buku tidak membahas Tan'im; ikuti petunjuk pembimbing. Buku menganjurkan tidak memaksakan umrah sunnah bila kondisi kesehatan tidak memungkinkan.",
      "rujukan": "Hlm. 52"
    },
    {
      "id": "h5-1",
      "hari": "Hari 5",
      "waktu": "Pagi",
      "tahap": "Ziarah Makkah (gunung)",
      "kegiatan": "Jabal Nur dan Gua Hira (tempat wahyu pertama, ± 6 km utara Masjidil Haram, mendaki ± 1,5 jam) atau Jabal Tsur (± 6 km selatan, mendaki ± 1,5 jam, medan terjal). Pilih salah satu sesuai kemampuan.",
      "lokasi": "Jabal Nur (Gua Hira) · Jabal Tsur",
      "bacaan": "—",
      "doa": "Doa bebas.",
      "tempat": "—",
      "catatan": "Ziarah bersifat sejarah, bukan ibadah wajib. Medan berat: perhatikan fisik dan keselamatan.",
      "rujukan": "Hlm. 318–320"
    },
    {
      "id": "h6-1",
      "hari": "Hari 6",
      "waktu": "Pagi–siang",
      "tahap": "Ziarah Makkah (masyair)",
      "kegiatan": "Napak tilas Arafah (Masjid Namirah, Jabal Rahmah), Muzdalifah, Mina (Masjid al-Bai'ah dan Masjid al-Khaif). Opsional: Masjid Hudaibiyah (± 25 km dari Masjidil Haram).",
      "lokasi": "Arafah · Muzdalifah · Mina · Hudaibiyah",
      "bacaan": "Al-Fatihah + surat pendek",
      "doa": "Doa bebas.",
      "tempat": "Di masjid yang dikunjungi.",
      "catatan": "Ziarah sejarah di luar musim haji. Bagian depan Masjid Namirah berada di wadi 'Uranah dan bukan bagian Arafah.",
      "rujukan": "Hlm. 320–334"
    },
    {
      "id": "h7-1",
      "hari": "Hari 7",
      "waktu": "Sepanjang hari",
      "tahap": "Ibadah di Makkah",
      "kegiatan": "Ibadah mandiri: shalat berjamaah, thawaf sunnah, tilawah, dzikir, istirahat, belanja seperlunya.",
      "lokasi": "Masjidil Haram · Hotel",
      "bacaan": "B3 Doa keluar masjid",
      "doa": "Doa bebas.",
      "tempat": "Multazam; belakang Maqam Ibrahim; dekat zamzam.",
      "catatan": "",
      "rujukan": "Hlm. 314"
    },
    {
      "id": "h8-1",
      "hari": "Hari 8",
      "waktu": "Siang–sore",
      "tahap": "Ibadah di Makkah",
      "kegiatan": "Packing, menyelesaikan urusan, istirahat sebelum thawaf wada' dan berangkat ke Madinah.",
      "lokasi": "Hotel · Masjidil Haram",
      "bacaan": "B3",
      "doa": "Doa bebas.",
      "tempat": "Masjidil Haram.",
      "catatan": "",
      "rujukan": "—"
    },
    {
      "id": "h8-2",
      "hari": "Hari 8",
      "waktu": "Malam",
      "tahap": "Thawaf Wada'",
      "kegiatan": "Thawaf wada' (perpisahan) 7 putaran; shalat sunnah thawaf 2 rakaat; minum zamzam; doa perpisahan, dilakukan sebelum meninggalkan Makkah.",
      "lokasi": "Mataf → belakang Maqam Ibrahim → zamzam",
      "bacaan": "B11 · B12 · B13 · B14",
      "doa": "Doa perpisahan: mohon diterima, dapat kembali, istiqamah.",
      "tempat": "Multazam (jika memungkinkan).",
      "catatan": "Buku Kemenhaj menyebut thawaf wada' sebagai kewajiban bagi jemaah haji sebelum meninggalkan Makkah; untuk umrah hukumnya diperselisihkan, sehingga sebaiknya tetap dilakukan.",
      "rujukan": "Hlm. 66, 226"
    },
    {
      "id": "h9-1",
      "hari": "Hari 9",
      "waktu": "Pagi",
      "tahap": "Perjalanan",
      "kegiatan": "Check-out Makkah dan menuju Madinah (kereta cepat Haramain ± 2 jam, atau bus ± 5–6 jam, sesuai pilihan Anda).",
      "lokasi": "Makkah → Madinah",
      "bacaan": "B1 Doa bepergian",
      "doa": "Keselamatan perjalanan dan keberkahan ziarah.",
      "tempat": "Di bus/kereta.",
      "catatan": "Ihram sudah selesai; berpakaian biasa yang sopan.",
      "rujukan": "—"
    },
    {
      "id": "h9-2",
      "hari": "Hari 9",
      "waktu": "Siang",
      "tahap": "Madinah",
      "kegiatan": "Tiba di Madinah, check-in hotel, istirahat. Shalat 2 rakaat setiba dari safar di masjid bila memungkinkan.",
      "lokasi": "Hotel kawasan Markaziyah (sekitar Masjid Nabawi)",
      "bacaan": "B2 Doa masuk masjid · B4 Shalawat",
      "doa": "Syukur tiba di kota Nabi ﷺ; mohon ziarah yang diterima.",
      "tempat": "Halaman dan pintu masuk Masjid Nabawi.",
      "catatan": "Madinah adalah tanah haram: tidak boleh berburu atau menebang pohon, dan hindari maksiat di dalamnya. Iman berkumpul di Madinah (HR. Bukhari).",
      "rujukan": "Hlm. 276–280"
    },
    {
      "id": "h9-3",
      "hari": "Hari 9",
      "waktu": "Sore–malam",
      "tahap": "Madinah",
      "kegiatan": "Masuk Masjid Nabawi dengan kaki kanan, shalat tahiyatul masjid 2 rakaat, shalat berjamaah. Pahala shalat di Masjid Nabawi 1.000 kali lipat dibanding masjid lain (selain Masjidil Haram).",
      "lokasi": "Masjid Nabawi",
      "bacaan": "B2 Doa masuk masjid · B4 Shalawat",
      "doa": "Doa bebas dan syukur.",
      "tempat": "Di dalam Masjid Nabawi.",
      "catatan": "Masjid Nabawi dibangun Nabi ﷺ pada tahun pertama Hijriyah; Mihrab Nabawi dan Mihrab Tahajjud adalah tempat shalat Nabi ﷺ.",
      "rujukan": "Hlm. 280–286"
    },
    {
      "id": "h10-1",
      "hari": "Hari 10",
      "waktu": "Subuh",
      "tahap": "Madinah",
      "kegiatan": "Shalat Subuh berjamaah, isyraq setelah matahari terbit, dzikir dan tilawah.",
      "lokasi": "Masjid Nabawi",
      "bacaan": "B2 · B3",
      "doa": "Doa bebas: ampunan dosa, ilmu bermanfaat, keluarga, kesehatan.",
      "tempat": "Di dalam Masjid Nabawi.",
      "catatan": "",
      "rujukan": "Hlm. 280–281"
    },
    {
      "id": "h10-2",
      "hari": "Hari 10",
      "waktu": "Pagi (sesuai slot)",
      "tahap": "Madinah",
      "kegiatan": "Raudhah: shalat sunnah 2 rakaat dan berdoa.",
      "lokasi": "Raudhah — antara makam/rumah Nabi ﷺ dan mimbar; ditandai tiang-tiang putih; ± 22 m × 15 m",
      "bacaan": "Al-Fatihah + surat pendek · B4 Shalawat",
      "doa": "Doa pilihan B18–B23 dan hajat pribadi.",
      "tempat": "Raudhah (taman dari taman-taman surga, HR. Bukhari; tempat doa dikabulkan menurut buku).",
      "catatan": "Masuk melalui tasreh/jadwal resmi. Untuk jemaah mandiri, umumnya pendaftaran via aplikasi Nusuk; jadwal pria/wanita dipisah dan bisa berubah. Jangan berdesakan.",
      "rujukan": "Hlm. 284, 287–288"
    },
    {
      "id": "h10-3",
      "hari": "Hari 10",
      "waktu": "Setelah Raudhah",
      "tahap": "Madinah",
      "kegiatan": "Salam kepada Nabi ﷺ, Abu Bakar, dan Umar r.a. (ziarah singkat dan sopan, tanpa berhenti lama di jalur).",
      "lokasi": "Muwajahah Syarifah — depan makam Nabi ﷺ (pintu at-Taubah di sisi kiblat; pintu Fatimah di timur; pintu Tahajjud di utara)",
      "bacaan": "B5 Salam kepada Nabi ﷺ & dua sahabat",
      "doa": "Doakan keselamatan untuk Nabi ﷺ dan sahabat; mohon ampunan untuk diri dan umat.",
      "tempat": "Menghadap makam dari jalur jamaah. Doa tetap ditujukan kepada Allah, bukan kepada makam.",
      "catatan": "Tidak mengusap/menciumi dinding makam; tidak mengeraskan suara.",
      "rujukan": "Hlm. 287"
    },
    {
      "id": "h10-4",
      "hari": "Hari 10",
      "waktu": "Setelah Subuh/akhir malam",
      "tahap": "Madinah",
      "kegiatan": "Ziarah Baqi' (pria): memberi salam dan mendoakan ahli kubur sebagaimana Nabi ﷺ di akhir malam.",
      "lokasi": "Pemakaman Baqi' al-Gharqad (sisi timur Masjid Nabawi)",
      "bacaan": "B6b Doa di Baqi'",
      "doa": "Mohon ampunan bagi ahli Baqi' dan ingat kematian.",
      "tempat": "Dari pintu/pagar Baqi'; berdoa menghadap kiblat.",
      "catatan": "Di Baqi' dimakamkan Utsman bin Affan, para istri Nabi ﷺ, putra-putri Nabi ﷺ, dan banyak sahabat. Wanita tidak masuk area makam; ikuti aturan buka-tutup setempat.",
      "rujukan": "Hlm. 289–291"
    },
    {
      "id": "h11-1",
      "hari": "Hari 11",
      "waktu": "Pagi",
      "tahap": "Madinah",
      "kegiatan": "Ziarah syuhada Uhud: salam kepada Hamzah r.a., Mush'ab bin Umair r.a., dan para syuhada; lihat bukit ar-Rimah.",
      "lokasi": "Kompleks Syuhada Uhud / Jabal Uhud (± 5 km dari pusat kota)",
      "bacaan": "B25 Salam kepada syuhada Uhud",
      "doa": "Mohon ampunan bagi para syuhada; mohon keteguhan iman dan kesabaran.",
      "tempat": "Di depan area makam syuhada (kini bertembok).",
      "catatan": "Perang Uhud terjadi pada 3 H; 70 syuhada gugur. Ziarah untuk i'tibar.",
      "rujukan": "Hlm. 294–298"
    },
    {
      "id": "h11-2",
      "hari": "Hari 11",
      "waktu": "Siang",
      "tahap": "Madinah",
      "kegiatan": "Shalat tahiyatul masjid 2 rakaat di tempat pindahnya kiblat; kemudian Masjid Khamsah (peninggalan perang Khandaq).",
      "lokasi": "Masjid Qiblatain · Masjid Khamsah/Khandaq",
      "bacaan": "Al-Fatihah + surat pendek",
      "doa": "Doa bebas dan syukur atas nikmat Islam.",
      "tempat": "Di dalam masjid.",
      "catatan": "Ziarah sejarah: perubahan kiblat (Q.S. Al-Baqarah: 144) dan penggalian parit.",
      "rujukan": "Hlm. 298–301"
    },
    {
      "id": "h12-1",
      "hari": "Hari 12",
      "waktu": "Pagi",
      "tahap": "Madinah",
      "kegiatan": "Shalat 2 rakaat di Masjid Quba (bersuci/berwudhu dari hotel terlebih dahulu). Nabi ﷺ biasa mengunjunginya setiap Sabtu.",
      "lokasi": "Masjid Quba (± 5 km barat daya Madinah)",
      "bacaan": "Al-Fatihah + surat pendek · B4 Shalawat",
      "doa": "Doa bebas: keluarga, ilmu, keberkahan.",
      "tempat": "Di dalam masjid. Pahala seperti umrah (HR. Ibnu Majah, dari Sahl bin Hunaif).",
      "catatan": "Berwudhu di hotel sebelum berangkat adalah syarat keutamaan dalam riwayat.",
      "rujukan": "Hlm. 291–294"
    },
    {
      "id": "h12-2",
      "hari": "Hari 12",
      "waktu": "Siang",
      "tahap": "Madinah",
      "kegiatan": "Masjid Jum'ah (± 500 m utara Quba), Masjid Abi Dzar al-Ghifari (Masjid Shalawat), dan Masjid Ghamamah (opsional); shalat tahiyatul masjid di tiap masjid.",
      "lokasi": "Masjid Jum'ah · Masjid Abi Dzar · Masjid Ghamamah",
      "bacaan": "Al-Fatihah + surat pendek · B4 Shalawat",
      "doa": "Doa bebas dan shalawat.",
      "tempat": "Di dalam masjid masing-masing.",
      "catatan": "Masjid Jum'ah: tempat Jum'at pertama Nabi ﷺ. Masjid Ghamamah kini tidak untuk shalat Id/Jum'at.",
      "rujukan": "Hlm. 303–308"
    },
    {
      "id": "h13-1",
      "hari": "Hari 13",
      "waktu": "Pagi–siang",
      "tahap": "Madinah",
      "kegiatan": "Masjid al-Ijabah (tempat Nabi ﷺ shalat 2 rakaat dan berdoa panjang); opsional Masjid Miqat Bir Ali (Dzulhulaifah, ± 10 km dari Masjid Nabawi) sebagai ziarah.",
      "lokasi": "Masjid al-Ijabah · Masjid Miqat Bir Ali",
      "bacaan": "Al-Fatihah + surat pendek",
      "doa": "Doa bebas.",
      "tempat": "Di dalam masjid.",
      "catatan": "Bir Ali hanya ziarah (niat umrah Anda dilakukan di pesawat/Yalamlam).",
      "rujukan": "Hlm. 302, 309"
    },
    {
      "id": "h13-2",
      "hari": "Hari 13",
      "waktu": "Sore–malam",
      "tahap": "Madinah",
      "kegiatan": "Shalat berjamaah di Masjid Nabawi, Raudhah ulang bila ada slot, tilawah, dzikir; packing untuk pulang.",
      "lokasi": "Masjid Nabawi · Hotel",
      "bacaan": "B2 · B3",
      "doa": "Doa perpisahan dengan Madinah dan memohon dapat kembali lagi.",
      "tempat": "Raudhah/di mana saja di dalam Masjid Nabawi.",
      "catatan": "Perhatikan aturan maskapai untuk bagasi; buku menyebut air zamzam tidak boleh dimasukkan ke koper pada pemulangan.",
      "rujukan": "Hlm. 66–70"
    },
    {
      "id": "h14-1",
      "hari": "Hari 14",
      "waktu": "Pagi–siang",
      "tahap": "Pulang",
      "kegiatan": "Check-out; menuju Bandara Madinah (MED); masuk gate 3 jam sebelum penerbangan; simpan barang berharga di tas tenteng.",
      "lokasi": "Madinah → Bandara Amir Muhammad bin Abdulaziz (MED) → Tanah Air",
      "bacaan": "B1 Doa bepergian",
      "doa": "Syukur dan doa agar menjadi umrah mabrur, istiqamah sepulang.",
      "tempat": "Di bus/pesawat.",
      "catatan": "Periksa paspor, tiket, dan barang sebelum meninggalkan hotel.",
      "rujukan": "Hlm. 66–70"
    }
  ],
  "bacaan": [
    {
      "kode": "B1",
      "nama": "Doa bepergian (safar)",
      "kategori": "Sunnah",
      "arab": "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
      "latin": "Subhaanalladzii sakh-khara lanaa haadzaa wa maa kunnaa lahu muqriniin, wa innaa ilaa rabbinaa lamunqalibuun.",
      "arti": "Maha Suci Allah yang menundukkan kendaraan ini untuk kami, padahal kami tidak mampu menguasainya. Dan sesungguhnya kepada Tuhan kami, kami akan kembali.",
      "saat": "Naik pesawat/bus, memulai perjalanan.",
      "sumber": "Q.S. Az-Zukhruf: 13–14; HR. Muslim.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Bandara / Pesawat",
        "Perjalanan (bus/kereta)"
      ]
    },
    {
      "kode": "B2",
      "nama": "Doa masuk masjid",
      "kategori": "Sunnah",
      "arab": "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
      "latin": "Allaahummaf-tah lii abwaaba rahmatik.",
      "arti": "Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.",
      "saat": "Masuk Masjid Nabawi dan Masjidil Haram (kaki kanan terlebih dahulu).",
      "sumber": "HR. Muslim.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Masjidil Haram",
        "Masjid Nabawi",
        "Masjid Quba & masjid bersejarah"
      ]
    },
    {
      "kode": "B3",
      "nama": "Doa keluar masjid",
      "kategori": "Sunnah",
      "arab": "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
      "latin": "Allaahumma innii as-aluka min fadhlik.",
      "arti": "Ya Allah, aku memohon karunia-Mu.",
      "saat": "Keluar masjid (kaki kiri terlebih dahulu).",
      "sumber": "HR. Muslim.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Masjidil Haram",
        "Masjid Nabawi",
        "Masjid Quba & masjid bersejarah"
      ]
    },
    {
      "kode": "B4",
      "nama": "Shalawat Ibrahimiyah",
      "kategori": "Sunnah",
      "arab": "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
      "latin": "Allaahumma shalli 'alaa Muhammad wa 'alaa aali Muhammad, kamaa shallaita 'alaa Ibraahiim wa 'alaa aali Ibraahiim, innaka hamiidum majiid. Allaahumma baarik 'alaa Muhammad wa 'alaa aali Muhammad, kamaa baarakta 'alaa Ibraahiim wa 'alaa aali Ibraahiim, innaka hamiidum majiid.",
      "arti": "Ya Allah, limpahkanlah shalawat kepada Muhammad dan keluarganya sebagaimana Engkau limpahkan kepada Ibrahim dan keluarganya; sesungguhnya Engkau Maha Terpuji lagi Maha Mulia. Ya Allah, berkahilah Muhammad dan keluarganya sebagaimana Engkau berkahi Ibrahim dan keluarganya.",
      "saat": "Di Madinah, di Raudhah, dan kapan saja.",
      "sumber": "HR. Bukhari–Muslim.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Masjid Nabawi",
        "Raudhah",
        "Makam Nabi ﷺ"
      ]
    },
    {
      "kode": "B5",
      "nama": "Salam kepada Nabi ﷺ, Abu Bakar, dan Umar r.a.",
      "kategori": "Sunnah (ziarah)",
      "arab": "السَّلَامُ عَلَيْكَ يَا رَسُولَ اللَّهِ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ\nالسَّلَامُ عَلَيْكَ يَا أَبَا بَكْرٍ الصِّدِّيقَ\nالسَّلَامُ عَلَيْكَ يَا عُمَرُ الْفَارُوقَ",
      "latin": "Assalaamu 'alaika yaa Rasuulallaah wa rahmatullaahi wa barakaatuh.\nAssalaamu 'alaika yaa Abaa Bakr ash-shiddiiq.\nAssalaamu 'alaika yaa 'Umar al-faaruuq.",
      "arti": "Salam sejahtera atasmu, wahai Rasulullah, beserta rahmat dan berkah Allah. Salam atasmu, wahai Abu Bakar ash-Shiddiq. Salam atasmu, wahai Umar al-Faruq.",
      "saat": "Di Muwajahah Syarifah (depan makam Nabi ﷺ).",
      "sumber": "Amalan Ibnu Umar r.a. (diriwayatkan Malik, Baihaqi). Cukup singkat dan sopan.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Makam Nabi ﷺ"
      ]
    },
    {
      "kode": "B6",
      "nama": "Salam kepada ahli kubur",
      "kategori": "Sunnah (ziarah)",
      "arab": "السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَلَاحِقُونَ، أَسْأَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ",
      "latin": "Assalaamu 'alaikum ahlad-diyaari minal mu'miniina wal muslimiin, wa innaa insyaa Allaahu bikum lalaahiquun, as-alullaaha lanaa wa lakumul 'aafiyah.",
      "arti": "Salam atas kalian, penghuni kubur dari kalangan mukminin dan muslimin. Insya Allah kami akan menyusul kalian. Aku memohon kepada Allah keselamatan bagi kami dan kalian.",
      "saat": "Ziarah Baqi' dan Uhud.",
      "sumber": "HR. Muslim. Buku Kemenhaj hlm. 290–291.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Baqi' & Uhud (ziarah kubur)",
        "Ziarah Makkah"
      ]
    },
    {
      "kode": "B6b",
      "nama": "Salam dan doa di Baqi'",
      "kategori": "Sunnah (ziarah)",
      "arab": "السَّلَامُ عَلَيْكُمْ دَارَ قَوْمٍ مُؤْمِنِينَ، وَأَتَاكُمْ مَا تُوعَدُونَ غَدًا مُؤَجَّلُونَ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَاحِقُونَ، اللَّهُمَّ اغْفِرْ لِأَهْلِ بَقِيعِ الْغَرْقَدِ",
      "latin": "Assalaamu 'alaikum daara qaumin mu'miniin, wa ataakum maa tuu'aduuna ghadan mu-ajjaluun, wa innaa insyaa Allaahu bikum laahiquun. Allaahummaghfir li-ahli baqii'il gharqad.",
      "arti": "Salam sejahtera atas kalian wahai penghuni rumah kaum beriman. Apa yang dijanjikan kepada kalian, yang masih ditangguhkan esok, pasti akan datang kepada kalian, dan kami insya Allah akan menyusul kalian. Ya Allah, ampunilah ahli Baqi' al-Gharqad.",
      "saat": "Ziarah Baqi' (Hari 10).",
      "sumber": "Buku Kemenhaj hlm. 290–291; HR. Muslim no. 974.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Baqi' & Uhud (ziarah kubur)"
      ]
    },
    {
      "kode": "B7",
      "nama": "Niat ihram umrah",
      "kategori": "RUKUN (niat ihram)",
      "arab": "نَوَيْتُ الْعُمْرَةَ وَأَحْرَمْتُ بِهَا لِلَّهِ تَعَالَى\n(atau) لَبَّيْكَ اللَّهُمَّ عُمْرَةً",
      "latin": "Nawaitul 'umrata wa ahramtu bihaa lillaahi ta'aalaa.\n(atau) Labbaikallaahumma 'umratan.",
      "arti": "Aku berniat umrah dan berihram untuknya karena Allah Ta'ala. / Aku penuhi panggilan-Mu ya Allah untuk umrah.",
      "saat": "Di atas pesawat saat sejajar miqat Yalamlam (atau di miqat lain), setelah shalat sunnah ihram bila memungkinkan.",
      "sumber": "Niat di hati adalah pokok; melafalkannya boleh. Lafaz kedua: HR. Muslim. Jika khawatir terhalang (sakit/haid), lihat sheet Catatan. Buku Kemenhaj hlm. 192, 256 (niat umrah di pesawat sebelum melintas Yalamlam/Qarnul Manazil).",
      "hukum": "wajib",
      "lokasiKat": [
        "Bandara / Pesawat"
      ]
    },
    {
      "kode": "B7b",
      "nama": "Niat ihram umrah dengan isytirath (ihram bersyarat)",
      "kategori": "Dianjurkan (lansia/sakit/khawatir terhalang)",
      "arab": "اللَّهُمَّ لَبَّيْكَ عُمْرَةً، وَإِنْ حَبَسَنِي حَابِسٌ فَمَحِلِّي حَيْثُ حَبَسْتَنِي",
      "latin": "Allaahumma labbaika 'umratan, wa in habasanii haabisun fa mahallii haitsu habastanii.",
      "arti": "Aku sambut panggilan-Mu ya Allah untuk berumrah. Tetapi jika aku terhalang oleh sesuatu, maka aku akan bertahallul di tempat aku terhalang itu.",
      "saat": "Menggantikan B7 bagi yang lemah, sakit, atau khawatir terhalang.",
      "sumber": "Buku Kemenhaj hlm. 193, 256–257; HR. Muslim.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Bandara / Pesawat"
      ]
    },
    {
      "kode": "B8",
      "nama": "Talbiyah",
      "kategori": "Sunnah muakkad",
      "arab": "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ",
      "latin": "Labbaika Allaahumma labbaik, labbaika laa syariika laka labbaik, innal hamda wan ni'mata laka wal mulk, laa syariika lak.",
      "arti": "Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Aku penuhi panggilan-Mu, tiada sekutu bagi-Mu, aku penuhi panggilan-Mu. Sesungguhnya segala puji, nikmat, dan kerajaan adalah milik-Mu, tiada sekutu bagi-Mu.",
      "saat": "Sejak niat ihram hingga mulai thawaf (umrah). Pria: keras; wanita: pelan.",
      "sumber": "HR. Bukhari no. 1549. Buku Kemenhaj hlm. 111–114: sunnah menurut Syafi'i dan Ahmad; diulang 3× berturut-turut tanpa jeda, lalu shalawat dan doa; berhenti saat mulai thawaf (umrah); pria keras, wanita pelan.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Bandara / Pesawat",
        "Perjalanan (bus/kereta)",
        "Hotel"
      ]
    },
    {
      "kode": "B9",
      "nama": "Shalawat dan doa setelah talbiyah",
      "kategori": "Dianjurkan",
      "arab": "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ\nاللَّهُمَّ إِنَّا نَسْأَلُكَ رِضَاكَ وَالْجَنَّةَ، وَنَعُوذُ بِكَ مِنْ غَضَبِكَ وَالنَّارِ، رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
      "latin": "Allaahumma shalli 'alaa Muhammad wa 'alaa aali Muhammad.\nAllaahumma innaa nas-aluka ridhaaka wal jannah, wa na'uudzu bika min ghadhabika wan naar. Rabbanaa aatinaa fid-dunyaa hasanah wa fil aakhirati hasanah wa qinaa 'adzaaban-naar.",
      "arti": "Ya Allah, limpahkan rahmat dan salam kepada Nabi Muhammad dan keluarganya. Ya Allah, kami memohon keridhaan-Mu dan surga-Mu, kami berlindung kepada-Mu dari kemurkaan-Mu dan siksa neraka. Wahai Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat dan hindarkan kami dari siksa neraka.",
      "saat": "Setelah selesai membaca talbiyah (didahului shalawat).",
      "sumber": "Buku Kemenhaj hlm. 113 (shalawat, doa, dan Q.S. Al-Baqarah: 201).",
      "hukum": "sunnah",
      "lokasiKat": [
        "Bandara / Pesawat",
        "Perjalanan (bus/kereta)",
        "Hotel"
      ]
    },
    {
      "kode": "B10",
      "nama": "Doa melihat Ka'bah",
      "kategori": "Dianjurkan (doa bebas)",
      "arab": "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ فَحَيِّنَا رَبَّنَا بِالسَّلَامِ",
      "latin": "Allaahumma antas-salaam wa minkas-salaam fahayyinaa rabbanaa bis-salaam.",
      "arti": "Ya Allah, Engkau Maha Sejahtera, dari-Mu kesejahteraan; hidupkanlah kami, wahai Tuhan kami, dengan penuh kesejahteraan.",
      "saat": "Saat pertama melihat Ka'bah.",
      "sumber": "Atsar Umar bin Khattab r.a. (Baihaqi), sanad terputus. Boleh ditambah doa bebas.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Masjidil Haram"
      ]
    },
    {
      "kode": "B11",
      "nama": "Takbir istilam Hajar Aswad",
      "kategori": "Sunnah",
      "arab": "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ",
      "latin": "Bismillaahi wallaahu akbar.",
      "arti": "Dengan nama Allah, Allah Maha Besar.",
      "saat": "Setiap sejajar Hajar Aswad (awal thawaf dan akhir tiap putaran).",
      "sumber": "HR. Bukhari (takbir); atsar Ibnu Umar r.a. (Baihaqi). Buku Kemenhaj hlm. 197.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Mataf (Thawaf)"
      ]
    },
    {
      "kode": "B12",
      "nama": "Doa Rukun Yamani–Hajar Aswad",
      "kategori": "Sunnah",
      "arab": "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
      "latin": "Rabbanaa aatinaa fid-dunyaa hasanah, wa fil aakhirati hasanah, wa qinaa 'adzaaban-naar.",
      "arti": "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka.",
      "saat": "Setiap putaran, di antara Rukun Yamani dan Hajar Aswad.",
      "sumber": "Q.S. Al-Baqarah: 201; HR. Abu Dawud (hasan). Buku Kemenhaj hlm. 198–199 (Abu Daud no. 1892, hasan).",
      "hukum": "sunnah",
      "lokasiKat": [
        "Mataf (Thawaf)"
      ]
    },
    {
      "kode": "B13",
      "nama": "Ayat Maqam Ibrahim & bacaan shalat sunnah thawaf",
      "kategori": "Sunnah",
      "arab": "وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى\nRakaat 1: Al-Fatihah + سورة الكافرون\nRakaat 2: Al-Fatihah + سورة الإخلاص",
      "latin": "Wattakhidzuu mim maqaami Ibraahiima mushallaa.\nRakaat 1: Al-Fatihah + Al-Kaafiruun.\nRakaat 2: Al-Fatihah + Al-Ikhlaash.",
      "arti": "Jadikanlah sebagian maqam Ibrahim sebagai tempat shalat.",
      "saat": "Setelah thawaf, ketika mendekati/di belakang Maqam Ibrahim.",
      "sumber": "Q.S. Al-Baqarah: 125; HR. Muslim (hadis Jabir). Buku Kemenhaj hlm. 202 (cat. kaki 6).",
      "hukum": "sunnah",
      "lokasiKat": [
        "Maqam Ibrahim",
        "Masjidil Haram"
      ]
    },
    {
      "kode": "B14",
      "nama": "Doa setelah minum zamzam",
      "kategori": "Dianjurkan",
      "arab": "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا وَاسِعًا وَشِفَاءً مِنْ كُلِّ دَاءٍ",
      "latin": "Allaahumma innii as-aluka 'ilman naafi'an, wa rizqan waasi'an, wa syifaa-an min kulli daa-in.",
      "arti": "Ya Allah, aku memohon ilmu yang bermanfaat, rezeki yang luas, dan kesembuhan dari segala penyakit.",
      "saat": "Setelah minum zamzam.",
      "sumber": "Lafaz populer; riwayat lafaznya lemah. Yang kuat: zamzam sesuai niat peminumnya (HR. Ibnu Majah). Boleh berdoa dengan hajat lain. Buku Kemenhaj hlm. 202 (minum zamzam lalu berdoa).",
      "hukum": "sunnah",
      "lokasiKat": [
        "Zamzam"
      ]
    },
    {
      "kode": "B15",
      "nama": "Ayat naik Shafa",
      "kategori": "Sunnah",
      "arab": "إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ\nأَبْدَأُ بِمَا بَدَأَ اللَّهُ بِهِ",
      "latin": "Innash-shafaa wal-marwata min sya'aa-irillaah.\nAbda-u bimaa bada-allaahu bih.",
      "arti": "Sesungguhnya Shafa dan Marwah adalah sebagian syiar Allah. Aku mulai dengan apa yang Allah mulai.",
      "saat": "Ketika mendekati/naik Shafa (hanya di awal Sa'i).",
      "sumber": "Q.S. Al-Baqarah: 158; HR. Muslim.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Shafa–Marwah (Sa'i)"
      ]
    },
    {
      "kode": "B16",
      "nama": "Tahlil di Shafa & Marwah",
      "kategori": "Sunnah",
      "arab": "اللَّهُ أَكْبَرُ (3×)\nلَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزَابَ وَحْدَهُ",
      "latin": "Allaahu akbar (3×).\nLaa ilaaha illallaahu wahdahu laa syariika lah, lahul mulku wa lahul hamdu wa huwa 'alaa kulli syai-in qadiir. Laa ilaaha illallaahu wahdah, anjaza wa'dah, wa nashara 'abdah, wa hazamal ahzaaba wahdah.",
      "arti": "Allah Maha Besar. Tiada Tuhan selain Allah semata, tiada sekutu bagi-Nya; milik-Nya kerajaan dan pujian, dan Dia Maha Kuasa atas segala sesuatu. Tiada Tuhan selain Allah semata, Dia menepati janji-Nya, menolong hamba-Nya, dan mengalahkan golongan-golongan musuh sendirian.",
      "saat": "Di atas Shafa dan Marwah, menghadap Ka'bah; diulang 3× diselingi doa (sebanyak tiga kali).",
      "sumber": "HR. Muslim (hadis Jabir).",
      "hukum": "sunnah",
      "lokasiKat": [
        "Shafa–Marwah (Sa'i)"
      ]
    },
    {
      "kode": "B17",
      "nama": "Doa di Mil Akhdhar (antara dua lampu hijau)",
      "kategori": "Dianjurkan",
      "arab": "رَبِّ اغْفِرْ وَارْحَمْ، إِنَّكَ أَنْتَ الْأَعَزُّ الْأَكْرَمُ",
      "latin": "Rabbighfir warham, innaka antal a'azzul akram.",
      "arti": "Ya Tuhanku, ampunilah dan rahmatilah; sesungguhnya Engkau Maha Perkasa lagi Maha Mulia.",
      "saat": "Saat Sa'i di antara dua penanda hijau.",
      "sumber": "Atsar Ibnu Mas'ud dan Ibnu Umar r.a. Boleh diganti dzikir/doa lain.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Shafa–Marwah (Sa'i)"
      ]
    },
    {
      "kode": "B18",
      "nama": "Doa 'afiyah (pilihan)",
      "kategori": "Doa pilihan",
      "arab": "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
      "latin": "Allaahumma innii as-alukal 'afwa wal 'aafiyata fid-dunyaa wal aakhirah.",
      "arti": "Ya Allah, aku memohon pemaafan dan keselamatan di dunia dan akhirat.",
      "saat": "Thawaf, Sa'i, Multazam, Raudhah, kapan saja.",
      "sumber": "HR. Abu Dawud, Ibnu Majah (sahih).",
      "hukum": "sunnah",
      "lokasiKat": [
        "Mataf (Thawaf)",
        "Multazam",
        "Shafa–Marwah (Sa'i)",
        "Raudhah"
      ]
    },
    {
      "kode": "B19",
      "nama": "Doa memohon maaf (pilihan)",
      "kategori": "Doa pilihan",
      "arab": "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
      "latin": "Allaahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'annii.",
      "arti": "Ya Allah, sesungguhnya Engkau Maha Pemaaf dan menyukai pemaafan, maka maafkanlah aku.",
      "saat": "Kapan saja; terutama malam hari.",
      "sumber": "HR. Tirmidzi, Ibnu Majah (sahih).",
      "hukum": "sunnah",
      "lokasiKat": [
        "Mataf (Thawaf)",
        "Multazam",
        "Shafa–Marwah (Sa'i)",
        "Raudhah"
      ]
    },
    {
      "kode": "B20",
      "nama": "Doa memohon ampunan (pilihan)",
      "kategori": "Doa pilihan",
      "arab": "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
      "latin": "Rabbanaa zhalamnaa anfusanaa wa illam taghfir lanaa wa tarhamnaa lanakuunanna minal khaasiriin.",
      "arti": "Ya Tuhan kami, kami telah menzalimi diri kami sendiri. Jika Engkau tidak mengampuni dan merahmati kami, pastilah kami termasuk orang-orang yang rugi.",
      "saat": "Thawaf, Sa'i, Multazam.",
      "sumber": "Q.S. Al-A'raf: 23.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Mataf (Thawaf)",
        "Multazam",
        "Shafa–Marwah (Sa'i)",
        "Raudhah"
      ]
    },
    {
      "kode": "B21",
      "nama": "Doa untuk orang tua (pilihan)",
      "kategori": "Doa pilihan",
      "arab": "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا\nرَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ",
      "latin": "Rabbirhamhumaa kamaa rabbayaanii shaghiiraa.\nRabbighfir lii wa liwaalidayya.",
      "arti": "Ya Tuhanku, sayangilah keduanya sebagaimana mereka mendidikku waktu kecil. Ya Tuhanku, ampunilah aku dan kedua orang tuaku.",
      "saat": "Setiap doa; terutama Multazam dan Raudhah.",
      "sumber": "Q.S. Al-Isra': 24; Q.S. Nuh: 28.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Mataf (Thawaf)",
        "Multazam",
        "Shafa–Marwah (Sa'i)",
        "Raudhah"
      ]
    },
    {
      "kode": "B22",
      "nama": "Doa untuk keluarga dan keturunan (pilihan)",
      "kategori": "Doa pilihan",
      "arab": "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
      "latin": "Rabbanaa hab lanaa min azwaajinaa wa dzurriyyaatinaa qurrata a'yunin waj'alnaa lil-muttaqiina imaamaa.",
      "arti": "Ya Tuhan kami, anugerahkanlah kepada kami pasangan dan keturunan sebagai penyejuk mata, dan jadikanlah kami pemimpin bagi orang-orang yang bertakwa.",
      "saat": "Setiap doa; Sa'i, Multazam.",
      "sumber": "Q.S. Al-Furqan: 74.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Mataf (Thawaf)",
        "Multazam",
        "Shafa–Marwah (Sa'i)",
        "Raudhah"
      ]
    },
    {
      "kode": "B23",
      "nama": "Doa keteguhan hati (pilihan)",
      "kategori": "Doa pilihan",
      "arab": "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
      "latin": "Yaa muqallibal quluub, tsabbit qalbii 'alaa diinik.",
      "arti": "Wahai Dzat yang membolak-balikkan hati, teguhkanlah hatiku di atas agama-Mu.",
      "saat": "Kapan saja; mohon istiqamah sepulang umrah.",
      "sumber": "HR. Tirmidzi (hasan).",
      "hukum": "sunnah",
      "lokasiKat": [
        "Mataf (Thawaf)",
        "Multazam",
        "Shafa–Marwah (Sa'i)",
        "Raudhah"
      ]
    },
    {
      "kode": "B24",
      "nama": "Doa setelah bercukur/tahallul",
      "kategori": "Dianjurkan (doa bebas)",
      "arab": "الْحَمْدُ لِلَّهِ الَّذِي قَضَى عَنَّا نُسُكَنَا، اللَّهُمَّ تَقَبَّلْ مِنَّا عُمْرَتَنَا",
      "latin": "Alhamdulillaahilladzii qadhaa 'annaa nusukanaa. Allaahumma taqabbal minnaa 'umratanaa.",
      "arti": "Segala puji bagi Allah yang telah menyempurnakan ibadah kami. Ya Allah, terimalah umrah kami.",
      "saat": "Setelah bercukur atau menggunting rambut (tahallul).",
      "sumber": "Buku Kemenhaj hlm. 206 menyebut 'doa mencukur rambut' dan hadis Nabi ﷺ mendoakan ampunan dan rahmat bagi yang bercukur gundul (HR. Bukhari 1727–1728) tanpa menuliskan lafaznya. Lafaz di sini adalah doa bebas yang lazim dibaca.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Shafa–Marwah (Sa'i)",
        "Hotel"
      ]
    },
    {
      "kode": "B25",
      "nama": "Salam kepada syuhada Uhud",
      "kategori": "Sunnah (ziarah)",
      "arab": "السَّلَامُ عَلَيْكَ يَا عَمَّ رَسُولِ اللَّهِ سَيِّدَنَا حَمْزَةَ بْنَ عَبْدِ الْمُطَّلِبِ، السَّلَامُ عَلَيْكَ يَا أَسَدَ اللَّهِ وَأَسَدَ رَسُولِهِ، السَّلَامُ عَلَيْكَ يَا سَيِّدَ الشُّهَدَاءِ، السَّلَامُ عَلَيْكَ يَا مُصْعَبَ بْنَ عُمَيْرٍ",
      "latin": "Assalaamu 'alaika yaa 'amma rasuulillaah sayyidanaa Hamzata bna 'Abdil Muththalib. Assalaamu 'alaika yaa asadallaah wa asada rasuulih. Assalaamu 'alaika yaa sayyidasy syuhadaa-i. Assalaamu 'alaika yaa Mush'aba bna 'Umair.",
      "arti": "Salam untukmu wahai paman Nabi, Sayyidina Hamzah bin Abdul Muthalib; wahai singa Allah dan singa Rasul-Nya; wahai pemimpin para syuhada. Salam untukmu wahai Mush'ab bin Umair.",
      "saat": "Ziarah syuhada Uhud (Hari 11).",
      "sumber": "Buku Kemenhaj hlm. 297–298 (ucapan salam kepada Hamzah, Mush'ab, dan syuhada Uhud).",
      "hukum": "sunnah",
      "lokasiKat": [
        "Baqi' & Uhud (ziarah kubur)"
      ]
    }
  ],
  "shalat": [
    {
      "nama": "Shalat Subuh",
      "kategori": "FARDHU (wajib)",
      "waktu": "Fajar shadiq hingga terbit matahari. Setiap hari (Hari 1–14).",
      "rakaat": "2",
      "bacaan": "Rakaat 1–2: Al-Fatihah + surat pendek. Qunut Subuh pada i'tidal rakaat 2 (sunnah menurut mazhab Syafi'i; ikuti imam jika imam tidak qunut).",
      "lokasi": "Berjamaah di Masjidil Haram (Hari 1–8) dan Masjid Nabawi (Hari 9–14). Boleh di hotel bila udzur/sakit.",
      "niat": "Ushallii fardhash shubhi rak'ataini mustaqbilal qiblati adaa-an lillaahi ta'aalaa. (Makmum: ... ma'muuman ...)",
      "keterangan": "Shalat di Masjidil Haram bernilai 100.000 kali lipat, di Masjid Nabawi 1.000 kali lipat (HR. Ibnu Majah). Datang lebih awal agar mendapat shaf. Buku Kemenhaj hlm. 281, 314.",
      "hukum": "wajib",
      "lokasiKat": [
        "Masjidil Haram",
        "Masjid Nabawi",
        "Hotel"
      ]
    },
    {
      "nama": "Shalat Dzuhur",
      "kategori": "FARDHU (wajib)",
      "waktu": "Setelah matahari tergelincir hingga bayangan sama panjang dengan benda. Setiap hari.",
      "rakaat": "4",
      "bacaan": "Rakaat 1–2: Al-Fatihah + surat pendek; rakaat 3–4: Al-Fatihah saja.",
      "lokasi": "Masjidil Haram / Masjid Nabawi (berjamaah), atau hotel.",
      "niat": "Ushallii fardhadh dhuhri arba'a raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aalaa.",
      "keterangan": "Hari Jumat: diganti Shalat Jumat (lihat baris Shalat Jumat). Ikuti pembimbing/aturan musafir pada Hari 1 (lihat baris Qashar dan Jamak).",
      "hukum": "wajib",
      "lokasiKat": [
        "Masjidil Haram",
        "Masjid Nabawi",
        "Hotel"
      ]
    },
    {
      "nama": "Shalat Ashar",
      "kategori": "FARDHU (wajib)",
      "waktu": "Bayangan lebih panjang dari bendanya hingga matahari terbenam. Setiap hari.",
      "rakaat": "4",
      "bacaan": "Rakaat 1–2: Al-Fatihah + surat pendek; rakaat 3–4: Al-Fatihah saja.",
      "lokasi": "Masjidil Haram / Masjid Nabawi (berjamaah), atau hotel.",
      "niat": "Ushallii fardhal 'ashri arba'a raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aalaa.",
      "keterangan": "Setelah shalat Ashar tidak dianjurkan shalat sunnah mutlak (waktu terlarang) sampai Maghrib, kecuali yang punya sebab (misalnya shalat sunnah thawaf menurut sebagian ulama).",
      "hukum": "wajib",
      "lokasiKat": [
        "Masjidil Haram",
        "Masjid Nabawi",
        "Hotel"
      ]
    },
    {
      "nama": "Shalat Maghrib",
      "kategori": "FARDHU (wajib)",
      "waktu": "Matahari terbenam hingga hilang mega merah. Setiap hari.",
      "rakaat": "3",
      "bacaan": "Rakaat 1–2: Al-Fatihah + surat pendek; rakaat 3: Al-Fatihah saja.",
      "lokasi": "Masjidil Haram / Masjid Nabawi (berjamaah), atau hotel.",
      "niat": "Ushallii fardhal maghribi tsalaatsa raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aalaa.",
      "keterangan": "Waktu Maghrib singkat; segera bersiap sebelum adzan. Setelahnya shalat ba'diyah Maghrib 2 rakaat.",
      "hukum": "wajib",
      "lokasiKat": [
        "Masjidil Haram",
        "Masjid Nabawi",
        "Hotel"
      ]
    },
    {
      "nama": "Shalat Isya",
      "kategori": "FARDHU (wajib)",
      "waktu": "Hilangnya mega merah hingga terbit fajar shadiq. Setiap hari.",
      "rakaat": "4",
      "bacaan": "Rakaat 1–2: Al-Fatihah + surat pendek; rakaat 3–4: Al-Fatihah saja.",
      "lokasi": "Masjidil Haram / Masjid Nabawi (berjamaah), atau hotel.",
      "niat": "Ushallii fardhal 'isyaa-i arba'a raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aalaa.",
      "keterangan": "Setelah Isya: ba'diyah Isya 2 rakaat dan Witir (lihat baris sunnah).",
      "hukum": "wajib",
      "lokasiKat": [
        "Masjidil Haram",
        "Masjid Nabawi",
        "Hotel"
      ]
    },
    {
      "nama": "Shalat Jumat (bila Hari 1–14 mencakup hari Jumat)",
      "kategori": "FARDHU (wajib) bagi pria mukim/non-musafir",
      "waktu": "Waktu Dzuhur pada hari Jumat, didahului dua khutbah.",
      "rakaat": "2",
      "bacaan": "Rakaat 1–2: Al-Fatihah + surat (Jumat/Al-A'la, Al-Ghasyiyah, atau yang dimudahkan).",
      "lokasi": "Masjidil Haram atau Masjid Nabawi; datang jauh lebih awal karena sangat padat.",
      "niat": "Ushallii fardhal jumu'ati rak'ataini mustaqbilal qiblati adaa-an ma'muuman lillaahi ta'aalaa.",
      "keterangan": "Mandi sunnah, berwudhu, dan memakai pakaian terbaik. Buku Kemenhaj menyebut Masjid Jum'ah di Madinah sebagai tempat Jumat pertama Nabi ﷺ (hlm. 303–304). Wanita dan musafir tidak wajib Jumat tetapi shalat Dzuhur; ikuti arahan pembimbing.",
      "hukum": "wajib",
      "lokasiKat": [
        "Masjidil Haram",
        "Masjid Nabawi"
      ]
    },
    {
      "nama": "Qashar dan Jamak (khusus musafir)",
      "kategori": "Keringanan (rukhsah) musafir",
      "waktu": "Hari 1 (perjalanan Tanah Air → Makkah) dan Hari 14 (perjalanan pulang). Jamak/qashar boleh bila memenuhi syarat jarak dan niat.",
      "rakaat": "Dzuhur, Ashar, Isya: 2 rakaat (qashar). Jamak: Dzuhur+Ashar, Maghrib+Isya.",
      "bacaan": "Bacaan sama seperti shalat biasa; Maghrib dan Subuh tidak diqashar.",
      "lokasi": "Di pesawat/bus/bandara sesuai kemampuan; hadapkan ke kiblat bila memungkinkan.",
      "niat": "Niat qashar: Ushallii fardhadh dhuhri rak'ataini qashran ... Niat jamak: ... jam'an taqdiiman/ta'khiiran.",
      "keterangan": "Menurut ketentuan yang dikutip buku Kemenhaj, seseorang dianggap mukim setelah sekitar 4 hari (pendapat Malik, Syafi'i, Abu Tsaur, Ahmad; hlm. 392). Di Makkah (8 hari) dan Madinah (6 hari) Anda kemungkinan sudah berstatus mukim sehingga shalat sempurna (tidak diqashar), kecuali ada pendapat pembimbing yang berbeda. Makmum yang shalat di belakang imam mukim wajib menyempurnakan 4 rakaat.",
      "hukum": "wajib",
      "lokasiKat": [
        "Bandara / Pesawat",
        "Perjalanan (bus/kereta)"
      ]
    },
    {
      "nama": "Menghentikan thawaf/sa'i saat shalat berjamaah",
      "kategori": "Ketentuan praktis",
      "waktu": "Ketika iqamah shalat fardhu berjamaah dikumandangkan saat thawaf atau sa'i berlangsung.",
      "rakaat": "—",
      "bacaan": "—",
      "lokasi": "Di Mataf atau Mas'a (pilih shaf terdekat).",
      "niat": "Niat shalat fardhu seperti biasa.",
      "keterangan": "Thawaf: berhenti, ikut shalat berjamaah, lalu lanjutkan sisa putaran dari tempat mulai masuk shaf (hlm. 386). Sa'i: bagi yang berpendapat shalat berjamaah fardhu 'ain, berhenti lalu lanjutkan; yang berpendapat fardhu kifayah boleh meneruskan (hlm. 397). Jangan mengulang dari awal.",
      "hukum": "wajib",
      "lokasiKat": [
        "Mataf (Thawaf)",
        "Shafa–Marwah (Sa'i)"
      ]
    },
    {
      "nama": "Shalat sunnah wudhu",
      "kategori": "Sunnah",
      "waktu": "Setelah berwudhu, sebelum berihram dan sebelum thawaf.",
      "rakaat": "2",
      "bacaan": "Al-Fatihah + surat pendek",
      "lokasi": "Hotel, mushala bandara, atau masjid.",
      "niat": "Ushallii sunnatal wudhuu-i rak'ataini lillaahi ta'aalaa.",
      "keterangan": "Nabi ﷺ menyebut amalan ini kepada Bilal r.a. (HR. Bukhari–Muslim). Tidak dilakukan di waktu terlarang.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Hotel",
        "Bandara / Pesawat",
        "Masjidil Haram",
        "Masjid Nabawi"
      ]
    },
    {
      "nama": "Shalat sunnah ihram",
      "kategori": "Sunnah",
      "waktu": "Sebelum niat umrah (hari 1, di bandara/mushala; atau di Tan'im untuk umrah sunnah).",
      "rakaat": "2",
      "bacaan": "Rakaat 1: Al-Fatihah + Al-Kafirun\nRakaat 2: Al-Fatihah + Al-Ikhlas",
      "lokasi": "Mushala bandara/hotel; di Tan'im: Masjid Aisyah.",
      "niat": "Ushallii sunnatal ihraami rak'ataini lillaahi ta'aalaa.",
      "keterangan": "Nabi ﷺ berihram setelah shalat (HR. Bukhari–Muslim). Jika tidak memungkinkan (misalnya di pesawat), niat ihram tetap sah. Hindari waktu terlarang untuk shalat sunnah.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Bandara / Pesawat",
        "Hotel"
      ]
    },
    {
      "nama": "Tahiyatul masjid (Masjid Nabawi dan masjid lain)",
      "kategori": "Sunnah muakkad",
      "waktu": "Saat masuk Masjid Nabawi, Masjid Quba, Masjid Qiblatain dan masjid lain di Madinah.",
      "rakaat": "2",
      "bacaan": "Al-Fatihah + surat pendek",
      "lokasi": "Di dalam masjid sebelum duduk.",
      "niat": "Ushallii sunnata tahiyyatil masjidi rak'ataini lillaahi ta'aalaa.",
      "keterangan": "HR. Bukhari–Muslim. Dikerjakan sebelum duduk; bila shalat fardhu sedang didirikan, langsung ikut berjamaah.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Masjid Nabawi",
        "Masjid Quba & masjid bersejarah"
      ]
    },
    {
      "nama": "Tahiyat Masjidil Haram",
      "kategori": "Sunnah (berupa thawaf)",
      "waktu": "Saat pertama masuk Masjidil Haram (Hari 2).",
      "rakaat": "—",
      "bacaan": "Lihat thawaf (B11, B12)",
      "lokasi": "Mataf.",
      "niat": "Niat thawaf umrah (sudah tercakup dalam niat ihram).",
      "keterangan": "Menurut mayoritas ulama, tahiyat Masjidil Haram adalah thawaf, bukan shalat 2 rakaat. Thawaf umrah sudah mencakupnya.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Masjidil Haram",
        "Mataf (Thawaf)"
      ]
    },
    {
      "nama": "Shalat sunnah thawaf",
      "kategori": "Sunnah muakkad",
      "waktu": "Setelah setiap thawaf 7 putaran (thawaf umrah, thawaf sunnah, thawaf wada').",
      "rakaat": "2",
      "bacaan": "Rakaat 1: Al-Fatihah + Al-Kafirun\nRakaat 2: Al-Fatihah + Al-Ikhlas",
      "lokasi": "Belakang Maqam Ibrahim; jika padat, di mana saja di Masjidil Haram (hindari menghalangi Mataf).",
      "niat": "Ushallii sunnatath thawaafi rak'ataini lillaahi ta'aalaa.",
      "keterangan": "Q.S. Al-Baqarah: 125; HR. Muslim (hadis Jabir tentang haji Nabi ﷺ). Jangan berhenti lama di belakang Maqam saat ramai.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Maqam Ibrahim",
        "Masjidil Haram"
      ]
    },
    {
      "nama": "Shalat sunnah di Hijr Ismail",
      "kategori": "Sunnah mutlak",
      "waktu": "Setelah thawaf atau kapan saja di Makkah (Hari 3).",
      "rakaat": "2",
      "bacaan": "Al-Fatihah + surat pendek",
      "lokasi": "Di dalam Hijr Ismail (area setengah lingkaran di sisi utara Ka'bah).",
      "niat": "Ushallii sunnatan muthlaqan rak'ataini lillaahi ta'aalaa.",
      "keterangan": "HR. Abu Dawud, Tirmidzi (hadis Aisyah): sebagian Hijr termasuk Ka'bah. Dilakukan bila ada tempat; tidak berdesakan.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Hijr Ismail",
        "Masjidil Haram"
      ]
    },
    {
      "nama": "Shalat sunnah di Raudhah",
      "kategori": "Sunnah mutlak",
      "waktu": "Hari 6 (Madinah), sesuai slot kunjungan.",
      "rakaat": "2",
      "bacaan": "Al-Fatihah + surat pendek",
      "lokasi": "Raudhah (antara makam/rumah Nabi ﷺ dan mimbar; karpet hijau).",
      "niat": "Ushallii sunnatan muthlaqan rak'ataini lillaahi ta'aalaa.",
      "keterangan": "HR. Bukhari–Muslim: area ini adalah taman dari taman-taman surga. Waktu di Raudhah terbatas; cukup 2 rakaat singkat dan doa.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Raudhah",
        "Masjid Nabawi"
      ]
    },
    {
      "nama": "Shalat sunnah di Masjid Quba",
      "kategori": "Sunnah",
      "waktu": "Hari 8 (Madinah).",
      "rakaat": "2",
      "bacaan": "Al-Fatihah + surat pendek",
      "lokasi": "Di dalam Masjid Quba (berwudhu dari hotel terlebih dahulu).",
      "niat": "Ushallii sunnatan muthlaqan rak'ataini lillaahi ta'aalaa.",
      "keterangan": "HR. Ibnu Majah, An-Nasa'i: pahala seperti umrah bagi yang berwudhu di rumah kemudian shalat di Quba.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Masjid Quba & masjid bersejarah"
      ]
    },
    {
      "nama": "Shalat 2 rakaat setiba dari safar",
      "kategori": "Sunnah",
      "waktu": "Setelah tiba di Madinah (Hari 6) dan setelah tiba kembali di Tanah Air.",
      "rakaat": "2",
      "bacaan": "Al-Fatihah + surat pendek",
      "lokasi": "Masjid terdekat.",
      "niat": "Ushallii sunnata qudumis safari rak'ataini lillaahi ta'aalaa.",
      "keterangan": "HR. Bukhari–Muslim (hadis Ka'b bin Malik): Nabi ﷺ shalat 2 rakaat di masjid setiba dari safar.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Masjid Nabawi",
        "Bandara / Pesawat"
      ]
    },
    {
      "nama": "Qabliyah Subuh",
      "kategori": "Rawatib muakkad",
      "waktu": "Setiap hari sebelum Subuh berjamaah.",
      "rakaat": "2",
      "bacaan": "Rakaat 1: Al-Fatihah + Al-Kafirun\nRakaat 2: Al-Fatihah + Al-Ikhlas",
      "lokasi": "Masjidil Haram, Masjid Nabawi, atau hotel.",
      "niat": "Ushallii sunnatas shubhi rak'ataini qabliyyatan lillaahi ta'aalaa.",
      "keterangan": "HR. Muslim: lebih baik daripada dunia dan seisinya. Dalam safar, Nabi ﷺ menjaga sunnah Fajar dan Witir (HR. Abu Dawud, riwayat Ibnu Umar).",
      "hukum": "sunnah",
      "lokasiKat": [
        "Masjidil Haram",
        "Masjid Nabawi",
        "Hotel"
      ]
    },
    {
      "nama": "Rawatib Dzuhur",
      "kategori": "Rawatib muakkad",
      "waktu": "Setiap hari: 2 (atau 4) rakaat sebelum, 2 rakaat sesudah Dzuhur.",
      "rakaat": "2 + 2 (atau 4 + 2)",
      "bacaan": "Al-Fatihah + surat pendek",
      "lokasi": "Masjid atau hotel.",
      "niat": "Ushallii sunnatadh dhuhri rak'ataini qabliyyatan/ba'diyyatan lillaahi ta'aalaa.",
      "keterangan": "HR. Bukhari–Muslim. Bagi musafir, sebagian rawatib boleh ditinggalkan, kecuali Subuh dan Witir yang ditekankan.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Masjidil Haram",
        "Masjid Nabawi",
        "Hotel"
      ]
    },
    {
      "nama": "Qabliyah Ashar",
      "kategori": "Rawatib ghairu muakkad",
      "waktu": "Sebelum Ashar berjamaah.",
      "rakaat": "2 atau 4",
      "bacaan": "Al-Fatihah + surat pendek",
      "lokasi": "Masjid atau hotel.",
      "niat": "Ushallii sunnatal 'ashri rak'ataini qabliyyatan lillaahi ta'aalaa.",
      "keterangan": "HR. Abu Dawud, Tirmidzi (hasan).",
      "hukum": "sunnah",
      "lokasiKat": [
        "Masjidil Haram",
        "Masjid Nabawi",
        "Hotel"
      ]
    },
    {
      "nama": "Ba'diyah Maghrib",
      "kategori": "Rawatib muakkad",
      "waktu": "Setelah Maghrib.",
      "rakaat": "2",
      "bacaan": "Al-Fatihah + surat pendek",
      "lokasi": "Masjid atau hotel.",
      "niat": "Ushallii sunnatal maghribi rak'ataini ba'diyyatan lillaahi ta'aalaa.",
      "keterangan": "HR. Bukhari–Muslim.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Masjidil Haram",
        "Masjid Nabawi",
        "Hotel"
      ]
    },
    {
      "nama": "Ba'diyah Isya",
      "kategori": "Rawatib muakkad",
      "waktu": "Setelah Isya.",
      "rakaat": "2",
      "bacaan": "Al-Fatihah + surat pendek",
      "lokasi": "Masjid atau hotel.",
      "niat": "Ushallii sunnatal 'isyaa-i rak'ataini ba'diyyatan lillaahi ta'aalaa.",
      "keterangan": "HR. Bukhari–Muslim.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Masjidil Haram",
        "Masjid Nabawi",
        "Hotel"
      ]
    },
    {
      "nama": "Shalat Isyraq",
      "kategori": "Sunnah",
      "waktu": "Setelah Subuh berjamaah, duduk berdzikir hingga matahari terbit sekitar 15–20 menit (hari-hari di Makkah dan Madinah).",
      "rakaat": "2",
      "bacaan": "Al-Fatihah + surat pendek",
      "lokasi": "Di tempat shalat Subuh, Masjidil Haram atau Masjid Nabawi.",
      "niat": "Ushallii sunnatal isyraaqi rak'ataini lillaahi ta'aalaa.",
      "keterangan": "HR. Tirmidzi (hasan): pahala seperti haji dan umrah yang sempurna bagi yang shalat Subuh berjamaah, berdzikir hingga terbit matahari, kemudian shalat 2 rakaat.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Masjidil Haram",
        "Masjid Nabawi"
      ]
    },
    {
      "nama": "Shalat Dhuha",
      "kategori": "Sunnah",
      "waktu": "Pagi hari setelah matahari meninggi hingga sebelum Dzuhur.",
      "rakaat": "2–8",
      "bacaan": "Al-Fatihah + surat pendek",
      "lokasi": "Masjid atau hotel.",
      "niat": "Ushallii sunnatadh dhuhaa rak'ataini lillaahi ta'aalaa.",
      "keterangan": "HR. Muslim.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Masjidil Haram",
        "Masjid Nabawi",
        "Hotel"
      ]
    },
    {
      "nama": "Shalat Tahajud",
      "kategori": "Sunnah muakkad",
      "waktu": "Sepertiga malam terakhir (Makkah dan Madinah, setiap malam).",
      "rakaat": "2–12 (salam tiap 2)",
      "bacaan": "Al-Fatihah + surat pilihan",
      "lokasi": "Masjidil Haram, Masjid Nabawi, atau hotel.",
      "niat": "Ushallii sunnatat tahajjudi rak'ataini lillaahi ta'aalaa.",
      "keterangan": "Q.S. Al-Isra': 79; HR. Muslim: doa di sepertiga malam terakhir diijabah.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Masjidil Haram",
        "Masjid Nabawi",
        "Hotel"
      ]
    },
    {
      "nama": "Shalat Witir",
      "kategori": "Sunnah muakkad",
      "waktu": "Setelah Isya hingga sebelum Subuh (sebaiknya di penghujung shalat malam).",
      "rakaat": "1, 3, 5, atau lebih (ganjil)",
      "bacaan": "Rakaat 1: Al-A'la\nRakaat 2: Al-Kafirun\nRakaat 3: Al-Ikhlas",
      "lokasi": "Hotel, atau masjid.",
      "niat": "Ushallii sunnatal witri rak'atan lillaahi ta'aalaa.",
      "keterangan": "HR. Abu Dawud, An-Nasa'i. Nabi ﷺ tidak meninggalkan witir dalam safar.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Hotel",
        "Masjidil Haram",
        "Masjid Nabawi"
      ]
    },
    {
      "nama": "Shalat Jenazah (fardhu kifayah)",
      "kategori": "Fardhu kifayah",
      "waktu": "Sering diumumkan setelah shalat fardhu di Masjidil Haram dan Masjid Nabawi.",
      "rakaat": "4 takbir",
      "bacaan": "Takbir 1: Al-Fatihah\nTakbir 2: Shalawat\nTakbir 3: Doa untuk jenazah\nTakbir 4: Doa penutup",
      "lokasi": "Di shaf shalat fardhu, tanpa rukuk/sujud.",
      "niat": "Ushallii 'alaa haadzal mayyiti arba'a takbiiraatin fardhal kifaayati lillaahi ta'aalaa.",
      "keterangan": "Bukan sunnah, tetapi sering dijumpai jamaah. Cukup mengikuti imam.",
      "hukum": "wajib",
      "lokasiKat": [
        "Masjidil Haram",
        "Masjid Nabawi"
      ]
    }
  ],
  "lokasi": [
    {
      "nama": "Miqat Yalamlam (di atas pesawat)",
      "letak": "Titik di jalur penerbangan, sekitar 100 km di selatan Makkah; rute Indonesia–Jeddah melintas sejajar titik ini. Awak kabin/pembimbing biasanya mengumumkannya sekitar 1 jam sebelum mendarat.",
      "waktu": "Ihram umrah (Hari 1)",
      "doa": "Niat umrah (B7), talbiyah (B8, B9) di tempat duduk.",
      "keterangan": "Miqat bagi jamaah yang datang dari arah Yaman/selatan dan jalur ini (HR. Bukhari–Muslim).",
      "dalil": "Syariat miqat sahih (HR. Bukhari–Muslim)",
      "tips": "Berniat sebelum pesawat melewati titik miqat; jangan menunggu mendarat di Jeddah.",
      "hukum": "wajib",
      "lokasiKat": [
        "Bandara / Pesawat"
      ]
    },
    {
      "nama": "Raudhah (Masjid Nabawi)",
      "letak": "Di antara rumah/makam Nabi ﷺ dan mimbar; ditandai karpet hijau.",
      "waktu": "Hari 10 (Madinah)",
      "doa": "Shalat sunnah 2 rakaat, shalawat (B4), doa bebas (B18–B23).",
      "keterangan": "Taman dari taman-taman surga.",
      "dalil": "Ada hadis sahih tentang keutamaan tempat",
      "tips": "Akses via jadwal resmi (umumnya aplikasi Nusuk); jangan berdesakan.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Raudhah",
        "Masjid Nabawi"
      ]
    },
    {
      "nama": "Muwajahah Syarifah (depan makam Nabi ﷺ)",
      "letak": "Jalur jamaah dekat pagar makam Nabi ﷺ, Abu Bakar, dan Umar r.a. (sisi barat Raudhah).",
      "waktu": "Hari 10 (Madinah)",
      "doa": "Salam B5 singkat; berdoa kepada Allah.",
      "keterangan": "Tempat salam kepada Nabi ﷺ.",
      "dalil": "Amalan para sahabat (Ibnu Umar)",
      "tips": "Jalan terus bersama arus jamaah setelah salam.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Makam Nabi ﷺ",
        "Masjid Nabawi"
      ]
    },
    {
      "nama": "Pemakaman Baqi'",
      "letak": "Sisi timur Masjid Nabawi.",
      "waktu": "Hari 10",
      "doa": "Salam dan doa Baqi' (B6b).",
      "keterangan": "Banyak sahabat dimakamkan di sini.",
      "dalil": "Ziarah kubur sahih (HR. Muslim)",
      "tips": "Hanya pria yang masuk area makam.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Baqi' & Uhud (ziarah kubur)"
      ]
    },
    {
      "nama": "Masjid Quba",
      "letak": "Selatan Madinah; masjid pertama yang dibangun Nabi ﷺ.",
      "waktu": "Hari 12",
      "doa": "Shalat 2 rakaat setelah berwudhu dari rumah/hotel.",
      "keterangan": "Pahala seperti umrah.",
      "dalil": "Dinilai sahih oleh sebagian ulama (HR. Ibnu Majah)",
      "tips": "Datang dalam keadaan telah berwudhu.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Masjid Quba & masjid bersejarah"
      ]
    },
    {
      "nama": "Syuhada Uhud / Gunung Uhud",
      "letak": "Utara Madinah.",
      "waktu": "Hari 11",
      "doa": "Salam syuhada Uhud (B25).",
      "keterangan": "Lokasi perang Uhud dan makam Hamzah r.a.",
      "dalil": "Ziarah sejarah (tidak ada ibadah khusus)",
      "tips": "Hindari panas siang hari.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Baqi' & Uhud (ziarah kubur)"
      ]
    },
    {
      "nama": "Masjid Qiblatain",
      "letak": "Barat laut Madinah.",
      "waktu": "Hari 11",
      "doa": "Shalat tahiyatul masjid.",
      "keterangan": "Tempat turunnya perintah pindah kiblat.",
      "dalil": "Ziarah sejarah",
      "tips": "",
      "hukum": "sunnah",
      "lokasiKat": [
        "Masjid Quba & masjid bersejarah"
      ]
    },
    {
      "nama": "Hajar Aswad",
      "letak": "Sudut tenggara Ka'bah, setinggi dada; titik awal dan akhir thawaf.",
      "waktu": "Thawaf",
      "doa": "Istilam (usap/cium/isyarat), takbir B11.",
      "keterangan": "Mengusapnya menghapus dosa (HR. Tirmidzi, hasan), bukan karena batu itu berkuasa.",
      "dalil": "Ada hadis hasan; atsar sahabat",
      "tips": "Jika ramai cukup isyarat tangan; jangan menyikut jamaah.",
      "hukum": "wajib",
      "lokasiKat": [
        "Mataf (Thawaf)",
        "Masjidil Haram"
      ]
    },
    {
      "nama": "Rukun Yamani → Hajar Aswad",
      "letak": "Sisi selatan Ka'bah (sudut barat daya ke tenggara).",
      "waktu": "Setiap putaran thawaf",
      "doa": "Doa sapu jagat B12.",
      "keterangan": "Nabi ﷺ membaca Rabbana atina di antara kedua sudut ini.",
      "dalil": "HR. Abu Dawud (hasan)",
      "tips": "Cukup dibaca sambil berjalan.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Mataf (Thawaf)",
        "Masjidil Haram"
      ]
    },
    {
      "nama": "Multazam",
      "letak": "Dinding Ka'bah antara Hajar Aswad dan pintu Ka'bah (± 2 meter).",
      "waktu": "Setelah thawaf/shalat sunnah",
      "doa": "Berdoa bebas: ampunan, hajat dunia-akhirat, orang tua, keluarga.",
      "keterangan": "Tempat doa yang mustajab menurut atsar sahabat.",
      "dalil": "Atsar sahabat; sebagian ulama menilai lemah namun menyunnahkan",
      "tips": "Hindari berdesakan; boleh berdoa dari jarak dekat jika ramai.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Multazam",
        "Masjidil Haram"
      ]
    },
    {
      "nama": "Hijr Ismail",
      "letak": "Area setengah lingkaran di sisi utara (barat laut) Ka'bah, dibatasi pagar rendah.",
      "waktu": "Kapan saja di Makkah",
      "doa": "Shalat 2 rakaat, doa bebas.",
      "keterangan": "Sebagian Hijr termasuk Ka'bah; shalat di dalamnya seperti shalat di dalam Ka'bah.",
      "dalil": "HR. Abu Dawud, Tirmidzi (hadis Aisyah)",
      "tips": "Thawaf harus di luar Hijr; jangan melompati pagar.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Hijr Ismail",
        "Masjidil Haram"
      ]
    },
    {
      "nama": "Belakang Maqam Ibrahim",
      "letak": "Dekat sisi pintu Ka'bah (sisi timur laut), dalam kotak kaca/emas.",
      "waktu": "Setelah thawaf",
      "doa": "Shalat sunnah thawaf 2 rakaat (B13), doa bebas.",
      "keterangan": "Tempat berpijak Nabi Ibrahim a.s. saat membangun Ka'bah.",
      "dalil": "Q.S. Al-Baqarah: 125; HR. Muslim",
      "tips": "Jika padat, shalat di mana saja di masjid.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Maqam Ibrahim",
        "Masjidil Haram"
      ]
    },
    {
      "nama": "Tempat minum Zamzam",
      "letak": "Dispenser/teko zamzam di Mataf dan sekitar jalur Sa'i (sumur sendiri tidak terbuka untuk umum).",
      "waktu": "Setelah thawaf",
      "doa": "Doa B14 sambil menghadap kiblat.",
      "keterangan": "Zamzam sesuai niat peminumnya.",
      "dalil": "HR. Ibnu Majah",
      "tips": "Bawa botol pribadi; perhatikan aturan bagasi pulang.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Zamzam",
        "Masjidil Haram"
      ]
    },
    {
      "nama": "Bukit Shafa",
      "letak": "Awal Sa'i; sisi tenggara Ka'bah.",
      "waktu": "Sa'i",
      "doa": "Ayat B15, takbir/tahlil B16, doa panjang menghadap Ka'bah.",
      "keterangan": "Nabi ﷺ berdoa panjang di sini.",
      "dalil": "HR. Muslim (hadis Jabir)",
      "tips": "Menghadap Ka'bah, tidak perlu naik terlalu tinggi.",
      "hukum": "wajib",
      "lokasiKat": [
        "Shafa–Marwah (Sa'i)"
      ]
    },
    {
      "nama": "Bukit Marwah",
      "letak": "Akhir Sa'i; sisi timur laut Ka'bah.",
      "waktu": "Sa'i",
      "doa": "Tahlil B16 dan doa bebas.",
      "keterangan": "Tempat berakhirnya Sa'i dan tahallul.",
      "dalil": "HR. Muslim (hadis Jabir)",
      "tips": "Gunting rambut di tempat tukang cukur sekitar Marwah.",
      "hukum": "wajib",
      "lokasiKat": [
        "Shafa–Marwah (Sa'i)"
      ]
    },
    {
      "nama": "Mil Akhdhar (penanda hijau)",
      "letak": "Dua titik penanda hijau di tengah jalur Sa'i.",
      "waktu": "Sa'i putaran Shafa–Marwah",
      "doa": "Pria berlari kecil; doa B17.",
      "keterangan": "Meneladani Siti Hajar yang berlari mencari air.",
      "dalil": "Amalan Nabi ﷺ (HR. Muslim); doa atsar sahabat",
      "tips": "Wanita berjalan biasa.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Shafa–Marwah (Sa'i)"
      ]
    },
    {
      "nama": "Tan'im (Masjid Aisyah)",
      "letak": "Miqat umrah bagi orang yang sudah berada di Makkah (titik terdekat di luar Tanah Haram).",
      "waktu": "Umrah sunnah",
      "doa": "Niat umrah (B7), talbiyah (B8).",
      "keterangan": "Aisyah r.a. berumrah dari sini.",
      "dalil": "HR. Bukhari–Muslim",
      "tips": "Opsional; ulangi urutan rukun.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Ziarah Makkah"
      ]
    },
    {
      "nama": "Jabal Rahmah / Arafah",
      "letak": "Sekitar 20 km dari Masjidil Haram.",
      "waktu": "Ziarah",
      "doa": "Doa bebas.",
      "keterangan": "Tempat wukuf saat haji.",
      "dalil": "Wukuf hanya rukun haji; tidak untuk umrah",
      "tips": "Ziarah sejarah, bukan ritual umrah.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Ziarah Makkah"
      ]
    },
    {
      "nama": "Jabal Nur (Gua Hira) & Jabal Tsur",
      "letak": "Sekitar Makkah.",
      "waktu": "Ziarah",
      "doa": "Mengambil pelajaran sirah.",
      "keterangan": "Tempat turunnya wahyu pertama dan tempat persembunyian hijrah.",
      "dalil": "Ziarah sejarah (tidak ada ibadah khusus)",
      "tips": "Medan berat; perhatikan fisik dan keselamatan.",
      "hukum": "sunnah",
      "lokasiKat": [
        "Ziarah Makkah"
      ]
    }
  ],
  "rukun": [
    {
      "kelompok": "RUKUN UMRAH",
      "item": "Ihram (niat)",
      "penjelasan": "Niat memasuki ibadah umrah dari miqat; mulai berlaku larangan ihram."
    },
    {
      "kelompok": "RUKUN UMRAH",
      "item": "Thawaf",
      "penjelasan": "7 putaran mengelilingi Ka'bah, Ka'bah di sebelah kiri, di luar Hijr Ismail, mulai dan berakhir di Hajar Aswad."
    },
    {
      "kelompok": "RUKUN UMRAH",
      "item": "Sa'i",
      "penjelasan": "7 kali perjalanan antara Shafa dan Marwah, mulai dari Shafa, berakhir di Marwah."
    },
    {
      "kelompok": "RUKUN UMRAH",
      "item": "Tahallul",
      "penjelasan": "Mencukur atau menggunting rambut minimal 3 helai."
    },
    {
      "kelompok": "RUKUN UMRAH",
      "item": "Tertib",
      "penjelasan": "Berurutan: ihram, thawaf, sa'i, tahallul."
    },
    {
      "kelompok": "WAJIB UMRAH",
      "item": "Ihram dari miqat",
      "penjelasan": "Berniat ihram di miqat (Dzulhulaifah/Bir Ali, Yalamlam, Qarnul Manazil, Dzatu 'Irq, Juhfah)."
    },
    {
      "kelompok": "WAJIB UMRAH",
      "item": "Menjauhi larangan ihram",
      "penjelasan": "Pelanggaran dapat berakibat dam/fidyah; tanyakan kepada pembimbing."
    },
    {
      "kelompok": "SYARAT THAWAF",
      "item": "Suci & menutup aurat",
      "penjelasan": "Suci dari hadats dan najis, menutup aurat."
    },
    {
      "kelompok": "SUNNAH IHRAM",
      "item": "Mandi, shalat 2 rakaat, talbiyah",
      "penjelasan": "Mandi sunnah, wewangian pada badan sebelum niat, shalat 2 rakaat, memperbanyak talbiyah."
    },
    {
      "kelompok": "SUNNAH THAWAF",
      "item": "Idhtiba' & raml (pria)",
      "penjelasan": "Idhtiba': bahu kanan terbuka sepanjang thawaf; raml: berjalan cepat pada putaran 1–3."
    },
    {
      "kelompok": "SUNNAH SA'I",
      "item": "Lari kecil di Mil Akhdhar (pria)",
      "penjelasan": "Pria berlari kecil di antara dua penanda hijau; wanita berjalan biasa."
    },
    {
      "kelompok": "LARANGAN IHRAM",
      "item": "Pakaian berjahit & penutup kepala (pria)",
      "penjelasan": "Tidak boleh memakai pakaian berjahit/menutup kepala secara langsung."
    },
    {
      "kelompok": "LARANGAN IHRAM",
      "item": "Cadar & sarung tangan (wanita)",
      "penjelasan": "Wanita tidak boleh memakai cadar dan sarung tangan; tetap menutup aurat."
    },
    {
      "kelompok": "LARANGAN IHRAM",
      "item": "Wewangian",
      "penjelasan": "Tidak boleh memakai wewangian pada badan/pakaian setelah niat."
    },
    {
      "kelompok": "LARANGAN IHRAM",
      "item": "Memotong rambut/kuku",
      "penjelasan": "Tidak mencukur, mencabut, atau memotong rambut dan kuku (kecuali tahallul)."
    },
    {
      "kelompok": "LARANGAN IHRAM",
      "item": "Berburu & mencabut tumbuhan",
      "penjelasan": "Tidak berburu/membunuh hewan buruan darat, tidak mencabut tumbuhan di Tanah Haram."
    },
    {
      "kelompok": "LARANGAN IHRAM",
      "item": "Akad nikah & hubungan suami istri",
      "penjelasan": "Tidak melakukan akad nikah, meminang, hubungan suami-istri dan pendahuluannya."
    },
    {
      "kelompok": "LARANGAN IHRAM",
      "item": "Berbuat fasik & bertengkar",
      "penjelasan": "Menjaga lisan dan perilaku; hindari perdebatan."
    }
  ],
  "catatan": [
    {
      "topik": "Asumsi itinerary",
      "catatan": "Itinerary 14 hari. Hari 1: berangkat, memakai ihram, niat umrah di atas pesawat saat melintas miqat Yalamlam, tiba di Jeddah, ke Makkah, lalu langsung thawaf, sa'i, dan tahallul (selesai dini hari). Hari 2–8: ibadah dan ziarah di Makkah; Hari 8 malam thawaf wada'. Hari 9–14: Madinah (Raudhah, makam Nabi ﷺ, Baqi', Uhud, Quba, dll.); Hari 14 pulang dari Madinah. Jam dan urutan dapat berubah mengikuti maskapai, hotel, dan jadwal Anda.",
      "id": "c1"
    },
    {
      "topik": "Ihram di pesawat",
      "catatan": "Pakai pakaian ihram sebelum naik pesawat, namun jangan berniat dahulu. Berniat saat pesawat sejajar Yalamlam sesuai pengumuman awak kabin atau pembimbing; setelah itu larangan ihram berlaku di pesawat (pria tidak menutup kepala, tidak memakai wewangian). Jika tidak yakin posisi miqat, berniatlah lebih awal secara hati-hati sesuai arahan pembimbing.",
      "id": "c2"
    },
    {
      "topik": "Mazhab",
      "catatan": "Mengikuti pandangan yang umum di Indonesia (mazhab Syafi'i). Beberapa detail (batas talbiyah, hukum thawaf wada', jumlah helai rambut) berbeda antar mazhab; ikuti bimbingan pembimbing travel.",
      "id": "c3"
    },
    {
      "topik": "Bacaan 'wajib'",
      "catatan": "Dalam umrah, hanya niat ihram yang termasuk rukun; talbiyah sunnah muakkad. Bacaan thawaf dan sa'i bersifat sunnah/dianjurkan, boleh diganti doa dan dzikir dalam bahasa sendiri.",
      "id": "c4"
    },
    {
      "topik": "Niat bersyarat (jika khawatir terhalang)",
      "catatan": "Bagi yang khawatir sakit/halangan lain, disunnahkan menambahkan: 'Fa in habasanii haabisun fa mahallii haitsu habastanii' (jika aku tertahan, tempat tahallulku adalah di tempat Engkau menahanku). HR. Muslim.",
      "id": "c5"
    },
    {
      "topik": "Wanita haid",
      "catatan": "Wanita yang sedang haid tidak boleh thawaf; konsultasikan kepada pembimbing mengenai waktu/cara penyesuaian. Ihram tetap sah.",
      "id": "c6"
    },
    {
      "topik": "Doa di tempat mustajab",
      "catatan": "Beberapa tempat dikenal mustajab berdasarkan hadis sahih, sebagian berdasarkan atsar sahabat yang dinilai lemah (tercantum di kolom Status Dalil). Prinsipnya doa dapat dikabulkan di mana saja; jangan menyakiti jamaah lain demi mengejar tempat tertentu.",
      "id": "c7"
    },
    {
      "topik": "Keselamatan",
      "catatan": "Jangan berdesakan di Hajar Aswad, Multazam, dan Raudhah. Cukup isyarat tangan jika ramai. Minum air cukup, hindari panas siang hari, jaga rombongan.",
      "id": "c8"
    },
    {
      "topik": "Perubahan aturan",
      "catatan": "Aturan akses (Raudhah via Nusuk, jam buka area, kode pakaian) dapat berubah. Konfirmasi kepada pembimbing/travel sebelum berangkat.",
      "id": "c9"
    },
    {
      "topik": "Sumber & verifikasi",
      "catatan": "Tata cara, urutan, dan keterangan hukum dicocokkan dengan Buku Tuntunan Manasik Haji dan Umrah (Kemenhaj) di project Anda; nomor halaman di kolom Rujukan adalah nomor cetak di buku. Buku itu ditujukan bagi jemaah haji, sehingga bagian umrah (ihram, thawaf, sa'i, tahallul) dipakai langsung dan bagian lain disesuaikan untuk umrah mandiri. Teks buku dibaca dengan OCR dari scan sehingga teks Arab di buku tidak terbaca dengan baik; semua teks Arab di file ini saya tulis ulang dan mohon dicek dengan buku/ustadz sebelum dihafal. Doa B24 adalah doa bebas yang lazim (buku tidak menuliskan lafaznya). Hal yang tidak dibahas buku (misalnya Tan'im, jadwal Nusuk, kereta Haramain) berasal dari pengetahuan umum dan perlu dikonfirmasi.",
      "id": "c10"
    },
    {
      "topik": "Shalat berjamaah saat thawaf/sa'i",
      "catatan": "Jika iqamah berkumandang saat thawaf, hentikan thawaf, ikut shalat berjamaah, lalu lanjutkan dari tempat Anda masuk shaf. Untuk sa'i, ikuti pembimbing (berhenti bila berpendapat berjamaah fardhu 'ain; boleh diteruskan bila fardhu kifayah). Buku Kemenhaj hlm. 386, 397.",
      "id": "c11"
    },
    {
      "topik": "Talbiyah",
      "catatan": "Mulai setelah niat ihram dan berhenti ketika mulai thawaf (umrah). Dianjurkan mengulang 3× berturut-turut tanpa jeda pembicaraan, lalu shalawat dan doa, dan diulang sebanyak mungkin. Pria keras, wanita pelan. Boleh bertalbiyah dari rumah tanpa niat ihram. Buku Kemenhaj hlm. 111–114, 380.",
      "id": "c12"
    },
    {
      "topik": "Thawaf wada'",
      "catatan": "Buku Kemenhaj menyebut thawaf wada' wajib bagi jemaah haji yang akan meninggalkan Makkah (menurut Hanafi, Syafi'i, Ahmad, dan kebanyakan ulama); wanita haid/nifas dan yang sakit berat tidak wajib. Untuk umrah, hukumnya diperselisihkan sehingga sebaiknya tetap dilakukan. Hlm. 119–120, 392, 431.",
      "id": "c13"
    },
    {
      "topik": "Sa'i tidak ada yang sunnah",
      "catatan": "Tidak ada sa'i sunnah; setiap sa'i diikuti bercukur/tahallul. Thawaf sunnah boleh sebanyak mungkin tanpa sa'i. Hlm. 119, 397.",
      "id": "c14"
    }
  ],
  "kategoriLokasi": [
    "Bandara / Pesawat",
    "Perjalanan (bus/kereta)",
    "Hotel",
    "Masjidil Haram",
    "Mataf (Thawaf)",
    "Multazam",
    "Maqam Ibrahim",
    "Zamzam",
    "Shafa–Marwah (Sa'i)",
    "Hijr Ismail",
    "Masjid Nabawi",
    "Raudhah",
    "Makam Nabi ﷺ",
    "Baqi' & Uhud (ziarah kubur)",
    "Masjid Quba & masjid bersejarah",
    "Ziarah Makkah"
  ],
  "keteranganHukum": {
    "bacaan": "Wajib = bacaan yang termasuk rukun (niat ihram). Selebihnya sunnah/dianjurkan. Talbiyah: sunnah menurut Syafi'i dan Ahmad, wajib menurut Hanafi dan Maliki.",
    "lokasi": "Wajib = tempat yang menjadi bagian rukun/wajib umrah (miqat, titik mulai thawaf, Shafa dan Marwah). Lainnya sunnah/ziarah.",
    "shalat": "Wajib = shalat fardhu (termasuk Jumat dan jenazah sebagai fardhu kifayah). Sunnah = shalat sunnah lainnya (rawatib, tahiyatul masjid, thawaf, isyraq, dhuha, tahajud, witir, dll.)."
  },
  "versi": 1,
  "doaPribadi": [
    {
      "id": "d1",
      "untuk": "*",
      "judul": "Contoh: doa memohon keturunan yang shalih",
      "arab": "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
      "latin": "Rabbi hab lii minash shaalihiin.",
      "arti": "Ya Tuhanku, anugerahkanlah kepadaku (seorang anak) yang termasuk orang-orang yang shalih.",
      "catatan": "Q.S. Ash-Shaffat: 37:100. Ini contoh doa untuk semua pengguna; admin dapat mengubah atau menghapusnya.",
      "dibuat": "2026-10-25"
    }
  ],
  "header": {
    "surah": [
      {
        "id": "s-ikhlas",
        "aktif": true,
        "nama": "Q.S. Al-Ikhlas [112]: 1–4",
        "arab": "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
        "arti": "Katakanlah, \"Dialah Allah Yang Maha Esa. Allah tempat bergantung segala sesuatu. Dia tidak beranak dan tidak pula diperanakkan. Dan tidak ada sesuatu yang setara dengan-Nya.\""
      },
      {
        "id": "s-baqarah-201",
        "aktif": true,
        "nama": "Q.S. Al-Baqarah [2]: 201",
        "arab": "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        "arti": "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka."
      }
    ]
  }
};
