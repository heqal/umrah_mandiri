/* Logika aplikasi. Isi: data/content.js · Pengguna: data/users.js · Tema: css/theme.css */
(function () {
  "use strict";
  var D = window.UMRAH_DATA || {};
  var KEY = "umrah:";
  var $ = function (s, r) { return (r || document).querySelector(s); };

  function store(k, v) {
    try {
      if (v === undefined) { var x = localStorage.getItem(KEY + k); return x === null ? null : JSON.parse(x); }
      localStorage.setItem(KEY + k, JSON.stringify(v));
    } catch (e) { return null; }
  }

  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === "class") el.className = attrs[k];
      else if (k === "text") el.textContent = attrs[k];
      else if (k.slice(0, 2) === "on") el.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] !== false && attrs[k] !== null && attrs[k] !== undefined) el.setAttribute(k, attrs[k]);
    }
    function add(c) {
      if (c === null || c === undefined || c === false) return;
      if (Array.isArray(c)) { c.forEach(add); return; }
      el.appendChild(typeof c === "string" || typeof c === "number" ? document.createTextNode(String(c)) : c);
    }
    for (var i = 2; i < arguments.length; i++) add(arguments[i]);
    return el;
  }

  var bacaanByCode = {};
  (D.bacaan || []).forEach(function (b) { bacaanByCode[b.kode] = b; });

  var state = {
    user: null,
    tab: store("tab") || "itinerary",
    day: store("day") || ((D.hariInfo && D.hariInfo[0] && D.hariInfo[0].hari) || "Hari 1"),
    q: "", done: {},
    filters: {},
    hideLatin: !!store("hideLatin"), hideArti: !!store("hideArti"),
    offlineReady: false,
    edit: false, doaFilter: "", surahIdx: null
  };

  var HUKUM_LABEL = {
    bacaan: { wajib: "Wajib", sunnah: "Sunnah" },
    lokasi: { wajib: "Wajib", sunnah: "Sunnah" },
    shalat: { wajib: "Shalat Wajib", sunnah: "Shalat Sunnah" }
  };

  /* ================= util tampilan ================= */
  function linkify(text) {
    var frag = document.createDocumentFragment();
    if (!text) return frag;
    var re = /\bB\d+b?\b/g, last = 0, m;
    while ((m = re.exec(text))) {
      if (!bacaanByCode[m[0]]) continue;
      frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      (function (code) {
        frag.appendChild(h("button", { class: "chip", type: "button", title: bacaanByCode[code].nama, onclick: function () { openBacaan(code); } }, code));
      })(m[0]);
      last = m.index + m[0].length;
    }
    frag.appendChild(document.createTextNode(text.slice(last)));
    return frag;
  }

  function kv(pairs, wideKeys) {
    var dl = h("dl", { class: "kv" });
    pairs.forEach(function (p) {
      if (!p[1]) return;
      var wide = wideKeys && wideKeys.indexOf(p[0]) >= 0;
      dl.appendChild(h("div", { class: wide ? "wide" : "" }, h("dt", { text: p[0] }), h("dd", { class: p[2] || "" }, p[3] ? linkify(p[1]) : p[1])));
    });
    return dl;
  }

  function match(obj) {
    if (!state.q) return true;
    var q = state.q.toLowerCase();
    return Object.keys(obj).some(function (k) { return String(obj[k]).toLowerCase().indexOf(q) >= 0; });
  }

  function hukumPill(tabKey, hk) {
    if (!hk) return null;
    return h("span", { class: "pill " + hk, text: HUKUM_LABEL[tabKey][hk] });
  }
  function lokTags(list) {
    if (!list || !list.length) return null;
    return h("div", { class: "tags" }, list.map(function (t) { return h("span", { class: "tag", text: t }); }));
  }

  function showDialog(nodes) {
    var dlg = $("#dlg"), box = $("#dlg .inner");
    box.textContent = "";
    box.appendChild(h("button", { class: "close", type: "button", onclick: function () { dlg.close(); } }, "Tutup"));
    nodes.forEach(function (n) { box.appendChild(n); });
    if (dlg.showModal) { if (!dlg.open) dlg.showModal(); } else dlg.setAttribute("open", "");
  }

  /* ================= pembantu admin / form ================= */
  function isAdmin() { return !!(state.user && state.user.role === "admin"); }
  function editing() { return isAdmin() && state.edit; }
  function persist() { if (!Content.save()) alert("Perubahan tidak bisa disimpan di browser ini (penyimpanan penuh/dimatikan)."); }
  function newId(p) { return p + Date.now().toString(36) + Math.random().toString(36).slice(2, 5); }
  function msgLine() { return h("p", { class: "msgline", role: "status" }); }
  function setMsg(el, text, ok) { el.textContent = text; el.className = "msgline " + (ok ? "ok" : "err"); }

  /* fields: [{k,label,type:"text"|"textarea"|"select",options:[{v,t}],req,rtl,rows}] ; onSave(values) -> string error | undefined */
  function formDialog(title, fields, init, onSave) {
    var inputs = {}, msg = msgLine();
    var form = h("form", { class: "form", onsubmit: function (e) {
      e.preventDefault();
      var v = {}; Object.keys(inputs).forEach(function (k) { v[k] = inputs[k].value; });
      var err = onSave(v);
      if (err) { setMsg(msg, err, false); return; }
      $("#dlg").close();
    } },
      h("h3", { text: title }),
      fields.map(function (f) {
        var el;
        if (f.type === "textarea") el = h("textarea", { rows: String(f.rows || 3), dir: f.rtl ? "rtl" : null, lang: f.rtl ? "ar" : null, class: f.rtl ? "arabin" : "" });
        else if (f.type === "select") el = h("select", null, f.options.map(function (o) { return h("option", { value: o.v, text: o.t }); }));
        else el = h("input", { type: "text", autocomplete: "off" });
        if (f.req) el.required = true;
        el.value = init && init[f.k] !== undefined && init[f.k] !== null ? init[f.k] : (f.def || "");
        inputs[f.k] = el;
        return h("label", null, f.label, el);
      }),
      h("div", { class: "btnrow" }, h("button", { class: "btn", type: "submit", text: "Simpan" }), h("button", { class: "btn ghost", type: "button", onclick: function () { $("#dlg").close(); } }, "Batal")),
      msg);
    showDialog([form]);
  }

  function swap(arr, i, j) { var t = arr[i]; arr[i] = arr[j]; arr[j] = t; }
  function moveInList(arr, item, dir) {          // pindah item ke atas/bawah di array
    var i = arr.indexOf(item), j = i + dir;
    if (i < 0 || j < 0 || j >= arr.length) return;
    swap(arr, i, j);
  }
  function editBar(buttons) {
    return h("div", { class: "btnrow editbar" }, buttons.map(function (b) {
      return h("button", { class: "btn small " + (b.cls || "ghost"), type: "button", title: b.title || b.t, onclick: b.fn }, b.t);
    }));
  }

  /* ----- hari & itinerary ----- */
  function dayList() { return (D.hariInfo || []).map(function (d) { return { old: d.hari, kota: d.kota, judul: d.judul }; }); }
  function relabelDays(list) {
    var map = {};
    var info = list.map(function (d, i) { var lab = "Hari " + (i + 1); if (d.old) map[d.old] = lab; return { hari: lab, kota: d.kota, judul: d.judul }; });
    D.itinerary = (D.itinerary || []).filter(function (s) { return map[s.hari]; }).map(function (s) { s.hari = map[s.hari]; return s; });
    state.day = map[state.day] || (info[0] && info[0].hari) || "Hari 1";
    D.hariInfo = info;
    store("day", state.day);
    persist(); render();
  }
  function dayForm(title, init, onOk) {
    formDialog(title, [
      { k: "kota", label: "Kota / lokasi (mis. Makkah, Madinah, Jeddah)", req: true },
      { k: "judul", label: "Judul/ringkasan hari", req: true }
    ], init, function (v) { onOk({ kota: v.kota.trim(), judul: v.judul.trim() }); });
  }
  var STEP_FIELDS = function () {
    return [
      { k: "hari", label: "Hari", type: "select", options: (D.hariInfo || []).map(function (d) { return { v: d.hari, t: d.hari + " · " + d.kota }; }) },
      { k: "waktu", label: "Waktu (mis. Pagi, 08:00)" },
      { k: "tahap", label: "Tahap (mis. Thawaf, Madinah). Tulis kata \"Rukun\" bila termasuk rukun.", req: true },
      { k: "kegiatan", label: "Kegiatan", type: "textarea", rows: 4, req: true },
      { k: "lokasi", label: "Lokasi" },
      { k: "bacaan", label: "Bacaan (boleh tulis kode, mis. B8, B12)" },
      { k: "doa", label: "Doa yang dipanjatkan", type: "textarea" },
      { k: "tempat", label: "Tempat berdoa yang tepat" },
      { k: "catatan", label: "Catatan", type: "textarea" },
      { k: "rujukan", label: "Rujukan (opsional)" }
    ];
  };
  function saveStep(step, v, isNew) {
    ["waktu", "tahap", "kegiatan", "lokasi", "bacaan", "doa", "tempat", "catatan", "rujukan"].forEach(function (k) { step[k] = (v[k] || "").trim(); });
    var moved = isNew || step.hari !== v.hari;
    if (moved) {
      var arr = D.itinerary, i = arr.indexOf(step); if (i >= 0) arr.splice(i, 1);
      step.hari = v.hari;
      var last = -1; arr.forEach(function (s, k) { if (s.hari === v.hari) last = k; });
      if (last < 0) arr.push(step); else arr.splice(last + 1, 0, step);
    }
    persist(); state.day = v.hari; store("day", state.day); render();
  }
  function moveStep(step, dir) {
    var arr = D.itinerary, i = arr.indexOf(step), j = i + dir;
    while (j >= 0 && j < arr.length && arr[j].hari !== step.hari) j += dir;
    if (j < 0 || j >= arr.length) return;
    swap(arr, i, j); persist(); render();
  }

  function dayManager(root) {
    var info = D.hariInfo || [];
    var box = h("details", { class: "card admin", open: "open" }, h("summary", { text: "Kelola hari — " + info.length + " hari" }));
    info.forEach(function (d, i) {
      var n = (D.itinerary || []).filter(function (s) { return s.hari === d.hari; }).length;
      box.appendChild(h("div", { class: "drow" },
        h("div", { class: "dtxt" }, h("b", { text: d.hari }), " · " + d.kota + " — " + d.judul, h("span", { class: "meta", text: " (" + n + " langkah)" })),
        editBar([
          { t: "↑", title: "Naikkan hari", fn: function () { if (i === 0) return; var l = dayList(); swap(l, i, i - 1); relabelDays(l); } },
          { t: "↓", title: "Turunkan hari", fn: function () { if (i === info.length - 1) return; var l = dayList(); swap(l, i, i + 1); relabelDays(l); } },
          { t: "Ubah", fn: function () { dayForm("Ubah " + d.hari, { kota: d.kota, judul: d.judul }, function (v) { var l = dayList(); l[i].kota = v.kota; l[i].judul = v.judul; relabelDays(l); }); } },
          { t: "Sisipkan sebelum", fn: function () { dayForm("Sisipkan hari baru sebelum " + d.hari, { kota: d.kota, judul: "" }, function (v) { var l = dayList(); l.splice(i, 0, { old: null, kota: v.kota, judul: v.judul }); relabelDays(l); }); } },
          { t: "Hapus", cls: "danger", fn: function () {
            if (info.length <= 1) return alert("Minimal harus ada satu hari.");
            if (!confirm("Hapus " + d.hari + " beserta " + n + " langkahnya? Hari sesudahnya akan dinomori ulang.")) return;
            var l = dayList(); l.splice(i, 1); relabelDays(l);
          } }
        ])));
    });
    box.appendChild(h("div", { class: "btnrow" }, h("button", { class: "btn small", type: "button", onclick: function () {
      dayForm("Tambah hari di akhir", { kota: info.length ? info[info.length - 1].kota : "", judul: "" }, function (v) { var l = dayList(); l.push({ old: null, kota: v.kota, judul: v.judul }); relabelDays(l); state.day = "Hari " + l.length; store("day", state.day); render(); });
    } }, "+ Tambah hari di akhir")));
    root.appendChild(box);
  }

  /* ----- subjudul otomatis ----- */
  function computeSubjudul() {
    var m = D.meta || {};
    if (m.subjudulOtomatis === false && m.subjudul) return m.subjudul;
    var info = D.hariInfo || [], groups = [];
    info.forEach(function (d, i) {
      var g = groups[groups.length - 1];
      if (g && g.kota === d.kota) g.to = i + 1; else groups.push({ kota: d.kota, from: i + 1, to: i + 1 });
    });
    return "Itinerary " + info.length + " hari" + (groups.length ? " · " : "") + groups.map(function (g) {
      return g.kota + " (Hari " + (g.from === g.to ? g.from : g.from + "–" + g.to) + ")";
    }).join(" · ");
  }

  /* ================= filter kategori ================= */
  function getFilter(key) { return state.filters[key] || (state.filters[key] = { hukum: "", lok: "" }); }
  function passFilter(key, item) {
    var f = getFilter(key);
    if (f.hukum && item.hukum !== f.hukum) return false;
    if (f.lok && (item.lokasiKat || []).indexOf(f.lok) < 0) return false;
    return true;
  }
  function filterBar(key, total, shown) {
    var f = getFilter(key), labels = HUKUM_LABEL[key];
    var seg = h("div", { class: "seg", role: "group", "aria-label": "Kategori hukum" });
    [["", "Semua"], ["wajib", labels.wajib], ["sunnah", labels.sunnah]].forEach(function (o) {
      seg.appendChild(h("button", { type: "button", class: "segbtn " + o[0], "aria-pressed": String(f.hukum === o[0]), onclick: function () { f.hukum = o[0]; render(); } }, o[1]));
    });
    var sel = h("select", { "aria-label": "Pilih kategori lokasi", onchange: function (e) { f.lok = e.target.value; render(); } },
      h("option", { value: "", text: "Semua lokasi" }),
      (D.kategoriLokasi || []).map(function (l) { return h("option", { value: l, text: l }); }));
    sel.value = f.lok;
    var bar = h("div", { class: "filters" }, seg, sel,
      h("div", { class: "count", text: shown + " dari " + total + " ditampilkan" }),
      (D.keteranganHukum && D.keteranganHukum[key]) ? h("details", { class: "hint" }, h("summary", { text: "Apa bedanya?" }), h("p", { text: D.keteranganHukum[key] })) : null
    );
    if (f.hukum || f.lok) bar.appendChild(h("button", { class: "reset", type: "button", onclick: function () { f.hukum = ""; f.lok = ""; render(); } }, "Hapus filter"));
    return bar;
  }

  /* ================= kartu bacaan ================= */
  function bacaanCard(b, inDialog) {
    return h("article", { class: "card", id: inDialog ? null : "b-" + b.kode },
      h("h3", null, h("span", { class: "code", text: b.kode }), b.nama),
      h("div", { class: "meta" }, hukumPill("bacaan", b.hukum), b.kategori),
      lokTags(b.lokasiKat),
      b.arab ? h("div", { class: "arab", lang: "ar", dir: "rtl", text: b.arab }) : null,
      b.latin ? h("div", { class: "latin", text: b.latin }) : null,
      b.arti ? h("p", { class: "arti", text: b.arti }) : null,
      kv([["Dibaca saat", b.saat], ["Sumber / keterangan", b.sumber, "ref"]], ["Sumber / keterangan"])
    );
  }
  function openBacaan(code) {
    var b = bacaanByCode[code]; if (!b) return;
    showDialog([bacaanCard(b, true)]);
  }

  /* ================= progres ================= */
  function progress() {
    var all = D.itinerary || [], n = all.filter(function (s) { return state.done[s.id]; }).length;
    $("#progress").textContent = "Selesai " + n + " / " + all.length + " langkah";
  }
  function dayDone(hari) {
    var s = (D.itinerary || []).filter(function (x) { return x.hari === hari; });
    return s.length && s.every(function (x) { return state.done[x.id]; });
  }
  function saveDone() { store("done:" + state.user.username, state.done); }

  /* ================= tampilan per tab ================= */
  var views = {};

  views.itinerary = function (root) {
    var info = D.hariInfo || [];
    var ed = editing();
    if (ed) dayManager(root);
    var days = h("div", { class: "days", role: "tablist" });
    info.forEach(function (d) {
      days.appendChild(h("button", {
        class: "day" + (dayDone(d.hari) ? " done" : ""), role: "tab", "aria-selected": String(d.hari === state.day),
        onclick: function () { state.day = d.hari; store("day", d.hari); render(); }
      }, d.hari.replace("Hari ", "H"), h("small", { text: d.kota })));
    });
    if (!state.q) root.appendChild(days);

    var steps = (D.itinerary || []).filter(function (s) { return state.q ? match(s) : s.hari === state.day; });
    if (!state.q) {
      var cur = info.filter(function (d) { return d.hari === state.day; })[0];
      if (cur) root.appendChild(h("div", { class: "dayhead" }, h("h2", { text: cur.hari + " · " + cur.kota }), h("p", { text: cur.judul })));
    }
    if (!steps.length) root.appendChild(h("p", { class: "empty", text: "Tidak ada langkah." }));
    steps.forEach(function (s) {
      var rukun = /rukun/i.test(s.tahap);
      var cb = h("input", { type: "checkbox", "aria-label": "Tandai selesai", onchange: function (e) {
        if (e.target.checked) state.done[s.id] = 1; else delete state.done[s.id];
        saveDone(); render();
      } });
      cb.checked = !!state.done[s.id];
      root.appendChild(h("article", { class: "card" + (rukun ? " rukun" : "") + (state.done[s.id] ? " done" : "") },
        h("div", { class: "row" }, cb, h("div", { style: "flex:1;min-width:0" },
          h("div", { class: "meta" }, state.q ? s.hari + " · " : "", s.waktu),
          h("h3", null, h("span", { class: "pill" + (rukun ? " rukun" : ""), text: s.tahap })),
          h("p", { class: "kegiatan", text: s.kegiatan }),
          kv([["Lokasi", s.lokasi], ["Bacaan", s.bacaan, "", true], ["Doa", s.doa], ["Tempat berdoa", s.tempat], ["Catatan", s.catatan], ["Rujukan buku", s.rujukan, "ref"]], ["Catatan"]),
          ed ? editBar([
            { t: "↑", title: "Naikkan", fn: function () { moveStep(s, -1); } },
            { t: "↓", title: "Turunkan", fn: function () { moveStep(s, 1); } },
            { t: "Ubah", fn: function () { formDialog("Ubah langkah", STEP_FIELDS(), s, function (v) { saveStep(s, v, false); }); } },
            { t: "Hapus", cls: "danger", fn: function () { if (confirm("Hapus langkah ini?")) { D.itinerary.splice(D.itinerary.indexOf(s), 1); delete state.done[s.id]; saveDone(); persist(); render(); } } }
          ]) : null
        ))
      ));
    });
    if (ed && !state.q) {
      root.appendChild(h("div", { class: "btnrow" }, h("button", { class: "btn", type: "button", onclick: function () {
        formDialog("Tambah langkah ke " + state.day, STEP_FIELDS(), { hari: state.day }, function (v) { saveStep({ id: newId("s") }, v, true); });
      } }, "+ Tambah langkah ke " + state.day)));
    }
    if (!state.q) {
      root.appendChild(h("button", { class: "reset", type: "button", onclick: function () {
        if (!confirm("Hapus semua centang pada " + state.day + "?")) return;
        (D.itinerary || []).forEach(function (s) { if (s.hari === state.day) delete state.done[s.id]; });
        saveDone(); render();
      } }, "Reset centang " + state.day));
    }
  };

  views.bacaan = function (root) {
    var all = D.bacaan || [], list = all.filter(function (b) { return passFilter("bacaan", b) && match(b); });
    root.appendChild(filterBar("bacaan", all.length, list.length));
    root.appendChild(h("div", { class: "toggles" },
      h("label", null, (function () { var c = h("input", { type: "checkbox", onchange: function (e) { state.hideLatin = !e.target.checked; store("hideLatin", state.hideLatin); applyBody(); } }); c.checked = !state.hideLatin; return c; })(), "Latin"),
      h("label", null, (function () { var c = h("input", { type: "checkbox", onchange: function (e) { state.hideArti = !e.target.checked; store("hideArti", state.hideArti); applyBody(); } }); c.checked = !state.hideArti; return c; })(), "Arti")
    ));
    if (!list.length) root.appendChild(h("p", { class: "empty", text: "Tidak ada bacaan untuk kategori ini." }));
    list.forEach(function (b) { root.appendChild(bacaanCard(b)); });
  };

  views.shalat = function (root) {
    var all = D.shalat || [], list = all.filter(function (s) { return passFilter("shalat", s) && match(s); });
    root.appendChild(filterBar("shalat", all.length, list.length));
    if (!list.length) root.appendChild(h("p", { class: "empty", text: "Tidak ada shalat untuk kategori ini." }));
    list.forEach(function (s) {
      var wajib = s.hukum === "wajib";
      root.appendChild(h("article", { class: "card" + (wajib ? " rukun" : "") },
        h("h3", null, s.nama),
        h("div", { class: "meta" }, hukumPill("shalat", s.hukum), s.kategori + (s.rakaat ? " · Rakaat: " + s.rakaat : "")),
        lokTags(s.lokasiKat),
        kv([["Waktu", s.waktu], ["Bacaan", s.bacaan], ["Lokasi", s.lokasi], ["Niat", s.niat], ["Keterangan", s.keterangan]], ["Keterangan"])
      ));
    });
  };

  views.lokasi = function (root) {
    var all = D.lokasi || [], list = all.filter(function (l) { return passFilter("lokasi", l) && match(l); });
    root.appendChild(filterBar("lokasi", all.length, list.length));
    if (!list.length) root.appendChild(h("p", { class: "empty", text: "Tidak ada lokasi untuk kategori ini." }));
    list.forEach(function (l) {
      root.appendChild(h("article", { class: "card" + (l.hukum === "wajib" ? " rukun" : "") },
        h("h3", { text: l.nama }),
        h("div", { class: "meta" }, hukumPill("lokasi", l.hukum), l.waktu),
        lokTags(l.lokasiKat),
        kv([["Letak", l.letak], ["Doa & amalan", l.doa, "", true], ["Keterangan", l.keterangan], ["Status dalil", l.dalil, "ref"], ["Tips", l.tips]], ["Letak"])
      ));
    });
  };

  views.rukun = function (root) {
    var list = (D.rukun || []).filter(match);
    if (!list.length) root.appendChild(h("p", { class: "empty", text: "Tidak ada hasil." }));
    list.forEach(function (r) {
      var key = /rukun/i.test(r.kelompok);
      root.appendChild(h("article", { class: "card" + (key ? " rukun" : "") },
        h("div", { class: "meta" }, h("span", { class: "pill" + (key ? " rukun" : ""), text: r.kelompok })),
        h("h3", { text: r.item }), h("p", { class: "kegiatan", text: r.penjelasan })
      ));
    });
  };

  views.catatan = function (root) {
    var ed = editing();
    var list = (D.catatan || []).filter(match);
    if (ed) root.appendChild(h("div", { class: "btnrow" }, h("button", { class: "btn", type: "button", onclick: function () {
      formDialog("Tambah catatan", [{ k: "topik", label: "Judul catatan", req: true }, { k: "catatan", label: "Isi catatan", type: "textarea", rows: 5, req: true }], {}, function (v) {
        D.catatan.push({ topik: v.topik.trim(), catatan: v.catatan.trim() }); persist(); render();
      });
    } }, "+ Tambah catatan")));
    if (!list.length) root.appendChild(h("p", { class: "empty", text: "Tidak ada catatan." }));
    list.forEach(function (c) {
      root.appendChild(h("article", { class: "card" }, h("h3", { text: c.topik }), h("p", { class: "kegiatan", text: c.catatan }),
        ed ? editBar([
          { t: "↑", title: "Naikkan", fn: function () { moveInList(D.catatan, c, -1); persist(); render(); } },
          { t: "↓", title: "Turunkan", fn: function () { moveInList(D.catatan, c, 1); persist(); render(); } },
          { t: "Ubah", fn: function () { formDialog("Ubah catatan", [{ k: "topik", label: "Judul catatan", req: true }, { k: "catatan", label: "Isi catatan", type: "textarea", rows: 5, req: true }], c, function (v) { c.topik = v.topik.trim(); c.catatan = v.catatan.trim(); persist(); render(); }); } },
          { t: "Hapus", cls: "danger", fn: function () { if (confirm("Hapus catatan \"" + c.topik + "\"?")) { D.catatan.splice(D.catatan.indexOf(c), 1); persist(); render(); } } }
        ]) : null));
    });
  };

  /* ================= doa pribadi ================= */
  function doaFields(isAdminForm) {
    var users = Auth.users().map(function (u) { return { v: u.username, t: (u.nama || u.username) + " (@" + u.username + ")" }; });
    return [
      { k: "untuk", label: "Untuk pengguna", type: "select", options: [{ v: "*", t: "Semua pengguna" }].concat(users) },
      { k: "judul", label: "Judul doa", req: true },
      { k: "arab", label: "Teks Arab", type: "textarea", rtl: true, rows: 3 },
      { k: "latin", label: "Latin", type: "textarea" },
      { k: "arti", label: "Arti / terjemahan", type: "textarea" },
      { k: "catatan", label: "Catatan (mis. permintaan dari jamaah)", type: "textarea" }
    ];
  }
  function doaCard(d, adminMode) {
    var users = Auth.users(), owner = d.untuk === "*" ? null : users.filter(function (u) { return u.username === d.untuk; })[0];
    return h("article", { class: "card" },
      h("h3", null, d.judul),
      h("div", { class: "meta" }, h("span", { class: "pill sunnah", text: d.untuk === "*" ? "Untuk semua" : "@" + d.untuk }), adminMode && d.untuk !== "*" && !owner ? h("span", { class: "pill off", text: "pengguna tidak ada" }) : null, d.dibuat ? " Ditambahkan " + d.dibuat : ""),
      d.arab ? h("div", { class: "arab", lang: "ar", dir: "rtl", text: d.arab }) : null,
      d.latin ? h("div", { class: "latin", text: d.latin }) : null,
      d.arti ? h("p", { class: "arti", text: d.arti }) : null,
      d.catatan ? kv([["Catatan", d.catatan]]) : null,
      adminMode ? editBar([
        { t: "Ubah", fn: function () { formDialog("Ubah doa pilihan", doaFields(), d, function (v) { Object.keys(v).forEach(function (k) { d[k] = v[k].trim ? v[k].trim() : v[k]; }); persist(); render(); }); } },
        { t: "Hapus", cls: "danger", fn: function () { if (confirm("Hapus doa \"" + d.judul + "\"?")) { D.doaPribadi.splice(D.doaPribadi.indexOf(d), 1); persist(); render(); } } }
      ]) : null);
  }
  function requestComposer(root) {
    var ta = h("textarea", { rows: "3", placeholder: "Tulis doa atau niat yang ingin ditambahkan…" });
    var info = h("p", { class: "msgline" });
    function text() {
      return "Assalamu'alaikum admin, saya " + (state.user.nama || state.user.username) + " (@" + state.user.username + ") mohon ditambahkan doa pilihan:\n" + (ta.value.trim() || "(tulis doa/niat di sini)");
    }
    var wa = ((D.meta && D.meta.kontakAdmin) || "").replace(/\D/g, "");
    root.appendChild(h("div", { class: "notice" },
      h("b", { text: "Ingin menambah doa pilihan? " }), "Hubungi admin. Admin yang menambahkan doa pilihan ke tab ini, sesuai permintaan Anda.",
      h("div", { class: "form", style: "margin-top:8px" }, ta,
        h("div", { class: "btnrow" },
          h("button", { class: "btn small", type: "button", onclick: function () {
            var t = text();
            (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(function () { setMsg(info, "Pesan disalin. Kirim ke admin.", true); }, function () { ta.value = t; ta.select(); setMsg(info, "Salin teks di kotak lalu kirim ke admin.", true); });
          } }, "Salin pesan permintaan"),
          wa ? h("a", { class: "btn small ghost", target: "_blank", rel: "noopener", href: "#", onclick: function (e) { e.currentTarget.href = "https://wa.me/" + wa + "?text=" + encodeURIComponent(text()); } }, "Kirim via WhatsApp") : h("span", { class: "meta", text: "Kontak admin belum diatur." })),
        info)));
  }

  views.doa = function (root) {
    var ad = isAdmin();
    root.appendChild(h("h2", { class: "sec", text: "Doa Pribadi" }));
    var all = D.doaPribadi || [];
    if (!ad) {
      requestComposer(root);
      var mine = all.filter(function (d) { return (d.untuk === state.user.username || d.untuk === "*") && match(d); });
      if (!mine.length) root.appendChild(h("p", { class: "empty", text: "Belum ada doa pilihan untuk Anda. Hubungi admin untuk menambahkannya." }));
      mine.forEach(function (d) { root.appendChild(doaCard(d, false)); });
      return;
    }
    var f = state.doaFilter || "";
    var users = Auth.users();
    var sel = h("select", { "aria-label": "Filter pengguna", onchange: function (e) { state.doaFilter = e.target.value; render(); } },
      h("option", { value: "", text: "Semua doa (" + all.length + ")" }), h("option", { value: "*", text: "Untuk semua pengguna" }),
      users.map(function (u) { return h("option", { value: u.username, text: (u.nama || u.username) + " (@" + u.username + ")" }); }));
    sel.value = f;
    root.appendChild(h("div", { class: "filters" }, sel, h("button", { class: "btn", type: "button", onclick: function () {
      formDialog("Tambah doa pilihan", doaFields(), { untuk: f || "*" }, function (v) {
        var d = { id: newId("d"), dibuat: new Date().toISOString().slice(0, 10) };
        Object.keys(v).forEach(function (k) { d[k] = v[k].trim ? v[k].trim() : v[k]; });
        D.doaPribadi.push(d); persist(); render();
      });
    } }, "+ Tambah doa pilihan")));
    root.appendChild(h("p", { class: "meta", text: "Pengguna biasa melihat doa yang ditujukan untuk mereka (atau untuk semua). Unduh content.js di tab Admin dan upload ulang agar doa ini terlihat di perangkat mereka." }));
    var list = all.filter(function (d) { return (!f || d.untuk === f) && match(d); });
    if (!list.length) root.appendChild(h("p", { class: "empty", text: "Belum ada doa pilihan." }));
    list.forEach(function (d) { root.appendChild(doaCard(d, true)); });
  };

  /* ================= dashboard admin ================= */
  function fmtTime(t) { var d = new Date(t); return d.toLocaleDateString("id-ID") + " " + d.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }); }
  function stat(label, value) { return h("div", { class: "stat" }, h("b", { text: String(value) }), h("span", { text: label })); }
  function msgLine() { return h("p", { class: "msgline", role: "status" }); }
  function setMsg(el, text, ok) { el.textContent = text; el.className = "msgline " + (ok ? "ok" : "err"); }

  views.admin = function (root) {
    if (!state.user || state.user.role !== "admin") { root.appendChild(h("p", { class: "empty", text: "Hanya untuk admin." })); return; }
    var users = Auth.users(), me = state.user.username;
    var today = new Date().toDateString();
    var logins = Auth.getLog().filter(function (l) { return l.e === "Masuk" && new Date(l.t).toDateString() === today; }).length;

    root.appendChild(h("h2", { class: "sec", text: "Dashboard Admin" }));
    root.appendChild(h("div", { class: "stats" },
      stat("Total pengguna", users.length),
      stat("Admin", users.filter(function (u) { return u.role === "admin"; }).length),
      stat("Aktif", users.filter(function (u) { return u.aktif; }).length),
      stat("Nonaktif", users.filter(function (u) { return !u.aktif; }).length),
      stat("Login hari ini (perangkat ini)", logins),
      stat("Isi: bacaan / shalat / lokasi", (D.bacaan || []).length + " / " + (D.shalat || []).length + " / " + (D.lokasi || []).length)
    ));

    var sync = Auth.isLocal();
    root.appendChild(h("div", { class: "notice " + (sync ? "warn" : "") },
      h("b", { text: sync ? "Perubahan belum diunggah. " : "Daftar pengguna sama dengan file di server. " }),
      sync ? "Perubahan tersimpan di perangkat ini saja. Klik \"Unduh users.js\", ganti file data/users.js di folder aplikasi, lalu upload ulang ke Netlify agar berlaku di semua perangkat."
           : "Setiap perubahan yang Anda buat hanya tersimpan di perangkat ini sampai Anda mengunduh users.js dan mengunggahnya ke Netlify."));

    /* tambah pengguna */
    var msgAdd = msgLine();
    var fUser = h("input", { id: "nu", required: "required", autocomplete: "off", placeholder: "mis. budi" });
    var fNama = h("input", { id: "nn", autocomplete: "off", placeholder: "Nama lengkap" });
    var fRole = h("select", { id: "nr" }, h("option", { value: "user", text: "User" }), h("option", { value: "admin", text: "Admin" }));
    var fPw = h("input", { id: "np", type: "text", required: "required", autocomplete: "off", placeholder: "min. 6 karakter" });
    var fForce = h("input", { type: "checkbox", id: "nf" }); fForce.checked = true;
    var form = h("form", { class: "card form", onsubmit: function (e) {
      e.preventDefault();
      Auth.addUser({ username: fUser.value, nama: fNama.value, role: fRole.value, password: fPw.value, wajibGanti: fForce.checked }, me).then(function (r) {
        if (r.ok) { var u = fUser.value, p = fPw.value; render(); showDialog([h("h3", { text: "Pengguna ditambahkan" }), h("p", null, "Username: ", h("b", { text: u }), h("br"), "Password: ", h("b", { class: "mono", text: p })), h("p", { class: "meta", text: "Catat/bagikan password ini sekarang. Setelah ditutup tidak bisa dilihat lagi." })]); }
        else setMsg(msgAdd, r.error, false);
      });
    } },
      h("h3", { text: "Tambah pengguna" }),
      h("div", { class: "grid2" },
        h("label", null, "Username", fUser), h("label", null, "Nama", fNama),
        h("label", null, "Peran", fRole), h("label", null, "Password awal", fPw)),
      h("div", { class: "btnrow" },
        h("button", { type: "button", class: "btn ghost", onclick: function () { var a = "abcdefghjkmnpqrstuvwxyz23456789", s = ""; var r = crypto.getRandomValues(new Uint8Array(8)); for (var i = 0; i < 8; i++) s += a[r[i] % a.length]; fPw.value = s; } }, "Buat password acak"),
        h("label", { class: "inl" }, fForce, "Wajib ganti password saat login pertama")),
      h("button", { type: "submit", class: "btn", text: "Tambah" }), msgAdd);
    root.appendChild(form);

    /* daftar pengguna */
    root.appendChild(h("h3", { class: "sec", text: "Daftar pengguna (" + users.length + ")" }));
    users.forEach(function (u) {
      var m = msgLine();
      var self = u.username.toLowerCase() === me.toLowerCase();
      function act(r) { if (r.ok) render(); else setMsg(m, r.error, false); }
      root.appendChild(h("article", { class: "card user" + (u.aktif ? "" : " off") },
        h("div", { class: "uhead" },
          h("b", { text: u.nama || u.username }), " ",
          h("span", { class: "meta", text: "@" + u.username }),
          h("span", { class: "pill " + (u.role === "admin" ? "rukun" : ""), text: u.role === "admin" ? "Admin" : "User" }),
          h("span", { class: "pill " + (u.aktif ? "" : "off"), text: u.aktif ? "Aktif" : "Nonaktif" }),
          u.wajibGanti ? h("span", { class: "pill off", text: "Belum ganti password" }) : null,
          self ? h("span", { class: "pill", text: "Anda" }) : null),
        h("div", { class: "meta", text: "Dibuat: " + (u.dibuat || "-") }),
        h("div", { class: "btnrow" },
          h("button", { class: "btn small ghost", type: "button", onclick: function () {
            Auth.resetPassword(u.username, me).then(function (r) { if (r.ok) { render(); showDialog([h("h3", { text: "Password sementara" }), h("p", null, "Untuk ", h("b", { text: u.username }), ": ", h("b", { class: "mono", text: r.password })), h("p", { class: "meta", text: "Pengguna akan diminta menggantinya. Jangan lupa unduh users.js dan upload ulang." })]); } else setMsg(m, r.error, false); });
          } }, "Reset password"),
          h("button", { class: "btn small ghost", type: "button", onclick: function () { act(Auth.setRole(u.username, u.role === "admin" ? "user" : "admin", me)); } }, u.role === "admin" ? "Jadikan User" : "Jadikan Admin"),
          h("button", { class: "btn small ghost", type: "button", onclick: function () { act(Auth.setActive(u.username, !u.aktif, me)); } }, u.aktif ? "Nonaktifkan" : "Aktifkan"),
          h("button", { class: "btn small danger", type: "button", onclick: function () { if (confirm("Hapus pengguna " + u.username + "?")) act(Auth.removeUser(u.username, me)); } }, "Hapus")),
        m));
    });

    adminContent(root, me);

    /* cadangan */
    var msgIO = msgLine();
    var file = h("input", { type: "file", accept: ".js,.json,text/javascript,application/json", hidden: "hidden", onchange: function (e) {
      var f = e.target.files[0]; if (!f) return;
      var rd = new FileReader();
      rd.onload = function () { var r = Auth.importText(String(rd.result), me); if (r.ok) { render(); } else setMsg(msgIO, r.error, false); };
      rd.readAsText(f);
    } });
    root.appendChild(h("h3", { class: "sec", text: "Ekspor, impor, dan reset daftar pengguna" }));
    root.appendChild(h("div", { class: "card" },
      h("div", { class: "btnrow" },
        h("button", { class: "btn", type: "button", onclick: function () {
          var blob = new Blob([Auth.exportText()], { type: "text/javascript" });
          var a = h("a", { href: URL.createObjectURL(blob), download: "users.js" }); document.body.appendChild(a); a.click(); a.remove();
          setMsg(msgIO, "users.js diunduh. Ganti file data/users.js lalu upload ulang ke Netlify.", true);
        } }, "Unduh users.js"),
        h("button", { class: "btn ghost", type: "button", onclick: function () { file.click(); } }, "Impor users.js"),
        h("button", { class: "btn danger", type: "button", onclick: function () { if (confirm("Buang perubahan lokal dan kembali ke daftar pengguna dari file server?")) { Auth.resetLocal(me); render(); } } }, "Reset ke file server")),
      file, msgIO));

    /* log */
    var lg = Auth.getLog().slice(0, 15);
    root.appendChild(h("h3", { class: "sec", text: "Aktivitas terakhir (perangkat ini)" }));
    root.appendChild(h("div", { class: "card" },
      lg.length ? h("ul", { class: "log" }, lg.map(function (l) { return h("li", null, h("span", { class: "meta", text: fmtTime(l.t) }), " · ", h("b", { text: l.u }), " — " + l.e); })) : h("p", { class: "meta", text: "Belum ada aktivitas." }),
      lg.length ? h("button", { class: "btn small ghost", type: "button", onclick: function () { Auth.clearLog(); render(); } }, "Hapus log") : null));
  };

  /* ----- bagian admin: header, kontak, surah, konten ----- */
  function surahFields() {
    return [
      { k: "nama", label: "Nama surah/ayat (mis. Q.S. Al-Fatihah [1]: 1–7)", req: true },
      { k: "arab", label: "Teks Arab", type: "textarea", rtl: true, rows: 3, req: true },
      { k: "arti", label: "Arti / terjemahan", type: "textarea", rows: 3 }
    ];
  }
  function download(name, text) {
    var blob = new Blob([text], { type: "text/javascript" });
    var a = h("a", { href: URL.createObjectURL(blob), download: name }); document.body.appendChild(a); a.click(); a.remove();
  }
  function adminContent(root, me) {
    var dirty = Content.isLocal();
    root.appendChild(h("h3", { class: "sec", text: "Header, kontak, dan konten" }));
    root.appendChild(h("div", { class: "notice " + (dirty ? "warn" : "") },
      h("b", { text: dirty ? "Konten sudah diubah, belum diunggah. " : "Konten sama dengan file di server. " }),
      "Perubahan itinerary, catatan, doa pribadi, surah header, dan judul tersimpan di perangkat ini. Klik \"Unduh content.js\", ganti file data/content.js di folder aplikasi, lalu upload ulang ke Netlify agar berlaku di semua perangkat."));

    var meta = D.meta || (D.meta = {});
    root.appendChild(h("div", { class: "card" },
      h("h3", { text: "Judul, subjudul, dan kontak admin" }),
      kv([["Judul", meta.judul], ["Subjudul", computeSubjudul() + (meta.subjudulOtomatis === false ? " (manual)" : " (otomatis dari daftar hari)")], ["WhatsApp admin", meta.kontakAdmin || "belum diatur"]]),
      editBar([{ t: "Ubah", cls: "", fn: function () {
        formDialog("Judul, subjudul, dan kontak", [
          { k: "judul", label: "Judul aplikasi", req: true },
          { k: "mode", label: "Subjudul", type: "select", options: [{ v: "otomatis", t: "Otomatis (jumlah hari + kota dari itinerary)" }, { v: "manual", t: "Manual (isi sendiri di bawah)" }] },
          { k: "subjudul", label: "Subjudul manual" },
          { k: "kontak", label: "Nomor WhatsApp admin (62812…, untuk tombol permintaan doa)" }
        ], { judul: meta.judul, mode: meta.subjudulOtomatis === false ? "manual" : "otomatis", subjudul: meta.subjudul, kontak: meta.kontakAdmin }, function (v) {
          meta.judul = v.judul.trim(); meta.subjudulOtomatis = v.mode !== "manual"; meta.subjudul = v.subjudul.trim(); meta.kontakAdmin = v.kontak.replace(/\D/g, "");
          persist(); render();
        });
      } }])));

    /* surah header */
    var list = (D.header && D.header.surah) || [];
    var sc = h("div", { class: "card" }, h("h3", { text: "Surah di header (" + list.length + ")" }),
      h("p", { class: "meta", text: "Tampil di header di samping judul dan subjudul. Bila ada lebih dari satu yang aktif, pengguna bisa menggeser dengan tombol ‹ ›." }));
    list.forEach(function (s) {
      sc.appendChild(h("div", { class: "drow" },
        h("div", { class: "dtxt" }, h("b", { text: s.nama }), " ", h("span", { class: "pill " + (s.aktif === false ? "off" : ""), text: s.aktif === false ? "Nonaktif" : "Aktif" }), h("div", { class: "arab small", lang: "ar", dir: "rtl", text: s.arab })),
        editBar([
          { t: "↑", fn: function () { moveInList(list, s, -1); persist(); render(); } },
          { t: "↓", fn: function () { moveInList(list, s, 1); persist(); render(); } },
          { t: "Ubah", fn: function () { formDialog("Ubah surah", surahFields(), s, function (v) { s.nama = v.nama.trim(); s.arab = v.arab.trim(); s.arti = v.arti.trim(); state.surahIdx = null; persist(); render(); }); } },
          { t: s.aktif === false ? "Aktifkan" : "Nonaktifkan", fn: function () { s.aktif = s.aktif === false; state.surahIdx = null; persist(); render(); } },
          { t: "Hapus", cls: "danger", fn: function () { if (confirm("Hapus " + s.nama + " dari header?")) { list.splice(list.indexOf(s), 1); state.surahIdx = null; persist(); render(); } } }
        ])));
    });
    sc.appendChild(h("div", { class: "btnrow" }, h("button", { class: "btn small", type: "button", onclick: function () {
      formDialog("Tambah surah di header", surahFields(), {}, function (v) {
        D.header = D.header || {}; D.header.surah = D.header.surah || [];
        D.header.surah.push({ id: newId("s"), aktif: true, nama: v.nama.trim(), arab: v.arab.trim(), arti: v.arti.trim() });
        state.surahIdx = D.header.surah.length - 1; persist(); render();
      });
    } }, "+ Tambah surah")));
    sc.id = "surahAdmin";
    root.appendChild(sc);

    /* ekspor konten */
    var msgC = msgLine();
    var file = h("input", { type: "file", accept: ".js,.json,text/javascript,application/json", hidden: "hidden", onchange: function (e) {
      var f = e.target.files[0]; if (!f) return;
      var rd = new FileReader();
      rd.onload = function () { var r = Content.importText(String(rd.result)); if (r.ok) { state.surahIdx = null; render(); } else setMsg(msgC, r.error, false); };
      rd.readAsText(f);
    } });
    root.appendChild(h("div", { class: "card" }, h("h3", { text: "Ekspor, impor, dan reset konten" }),
      h("div", { class: "btnrow" },
        h("button", { class: "btn", type: "button", onclick: function () { download("content.js", Content.exportText()); setMsg(msgC, "content.js diunduh. Ganti file data/content.js lalu upload ulang ke Netlify.", true); } }, "Unduh content.js"),
        h("button", { class: "btn ghost", type: "button", onclick: function () { file.click(); } }, "Impor content.js"),
        h("button", { class: "btn danger", type: "button", onclick: function () { if (confirm("Buang semua perubahan konten di perangkat ini dan kembali ke file server?")) { Content.resetLocal(); location.reload(); } } }, "Reset konten")),
      file, msgC));
  }

  /* ----- header: judul, subjudul otomatis, surah ----- */
  function activeSurah() { return ((D.header && D.header.surah) || []).filter(function (s) { return s.aktif !== false; }); }
  function renderHeader() {
    var m = D.meta || {};
    document.title = m.judul || "Panduan Umrah";
    $("#judul").textContent = m.judul || "Panduan Umrah";
    $("#loginTitle").textContent = m.judul || "Panduan Umrah";
    $("#subjudul").textContent = computeSubjudul();
    var box = $("#surah"); box.textContent = "";
    var list = activeSurah();
    if (!list.length) { box.hidden = true; return; }
    box.hidden = false;
    if (state.surahIdx === null) state.surahIdx = Math.floor(Date.now() / 864e5) % list.length;
    var i = state.surahIdx % list.length, s = list[i];
    box.appendChild(h("div", { class: "sname", text: s.nama }));
    box.appendChild(h("div", { class: "sarab", lang: "ar", dir: "rtl", text: s.arab }));
    if (s.arti) box.appendChild(h("div", { class: "sarti", text: s.arti }));
    var nav = h("div", { class: "snav" });
    if (list.length > 1) {
      nav.appendChild(h("button", { type: "button", "aria-label": "Sebelumnya", onclick: function () { state.surahIdx = (i - 1 + list.length) % list.length; renderHeader(); } }, "‹"));
      nav.appendChild(h("span", { text: (i + 1) + "/" + list.length }));
      nav.appendChild(h("button", { type: "button", "aria-label": "Berikutnya", onclick: function () { state.surahIdx = (i + 1) % list.length; renderHeader(); } }, "›"));
    }
    if (isAdmin()) nav.appendChild(h("button", { type: "button", class: "kelola", onclick: function () { state.tab = "admin"; store("tab", "admin"); render(); var t = $("#surahAdmin"); if (t) t.scrollIntoView(); } }, "Kelola"));
    if (nav.childNodes.length) box.appendChild(nav);
  }

  /* ================= kerangka ================= */
  function tabsList() {
    var t = (D.tabs || []).slice();
    if (!t.some(function (x) { return x.id === "doa"; })) {
      var ci = t.map(function (x) { return x.id; }).indexOf("catatan");
      t.splice(ci < 0 ? t.length : ci, 0, { id: "doa", label: "Doa Pribadi" });
    }
    if (state.user && state.user.role === "admin") t.push({ id: "admin", label: "Admin" });
    return t;
  }

  function renderTabs() {
    var nav = $("#tabs"); nav.textContent = "";
    tabsList().forEach(function (t) {
      nav.appendChild(h("button", { class: "tab", role: "tab", "aria-selected": String(t.id === state.tab), onclick: function () {
        state.tab = t.id; state.q = ""; $("#q").value = ""; store("tab", t.id); render(); window.scrollTo(0, 0);
      } }, t.label));
    });
  }

  function renderWarn() {
    var w = $("#warn"); w.textContent = "";
    if (state.user && state.user.wajibGanti) {
      w.hidden = false;
      w.appendChild(h("span", { text: "Password Anda masih bawaan/sementara. " }));
      w.appendChild(h("button", { class: "btn small", type: "button", onclick: function () { openAccount(); } }, "Ganti sekarang"));
    } else w.hidden = true;
  }

  function render() {
    if (!state.user) return;
    var ids = tabsList().map(function (t) { return t.id; });
    if (ids.indexOf(state.tab) < 0) state.tab = ids[0] || "itinerary";
    renderTabs(); renderWarn();
    var root = $("#view"); root.textContent = "";
    $("#search").hidden = state.tab === "admin";
    (views[state.tab] || views.itinerary)(root);
    $("#q").placeholder = state.tab === "itinerary" ? "Cari di seluruh itinerary…" : "Cari…";
    $("#who").textContent = (state.user.nama || state.user.username) + (state.user.role === "admin" ? " (admin)" : "");
    var eb = $("#editBtn"); eb.hidden = !isAdmin() || state.tab === "admin";
    eb.textContent = state.edit ? "Mode edit: AKTIF" : "Mode edit: mati";
    eb.classList.toggle("on", !!state.edit);
    renderHeader();
    progress();
  }

  function applyBody() {
    document.body.classList.toggle("hide-latin", state.hideLatin);
    document.body.classList.toggle("hide-arti", state.hideArti);
  }
  function applyTheme(t) {
    if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
    $("#themeBtn").textContent = t === "dark" ? "Tema: gelap" : t === "light" ? "Tema: terang" : "Tema: otomatis";
  }

  /* ================= akun ================= */
  function openAccount() {
    var msg = msgLine();
    var o = h("input", { type: "password", autocomplete: "current-password", required: "required" });
    var n = h("input", { type: "password", autocomplete: "new-password", required: "required", minlength: "6" });
    var c = h("input", { type: "password", autocomplete: "new-password", required: "required", minlength: "6" });
    var f = h("form", { class: "form", onsubmit: function (e) {
      e.preventDefault();
      if (n.value !== c.value) return setMsg(msg, "Konfirmasi password tidak sama.", false);
      Auth.changePassword(state.user.username, o.value, n.value).then(function (r) {
        if (r.ok) { state.user = Auth.current(); render(); setMsg(msg, "Password berhasil diganti (tersimpan di perangkat ini).", true); f.reset(); }
        else setMsg(msg, r.error, false);
      });
    } },
      h("h3", { text: "Akun: " + (state.user.nama || state.user.username) }),
      h("p", { class: "meta", text: "@" + state.user.username + " · " + (state.user.role === "admin" ? "Admin" : "User") }),
      h("label", null, "Password lama", o), h("label", null, "Password baru", n), h("label", null, "Ulangi password baru", c),
      h("div", { class: "btnrow" }, h("button", { class: "btn", type: "submit", text: "Simpan password" }),
        h("button", { class: "btn danger", type: "button", onclick: function () { $("#dlg").close(); doLogout(); } }, "Keluar")),
      msg,
      h("p", { class: "meta", text: "Catatan: password baru berlaku di perangkat ini. Untuk semua perangkat, admin perlu mengunggah users.js terbaru." }));
    showDialog([f]);
  }

  /* ================= login ================= */
  function showLogin() {
    state.user = null;
    document.body.classList.add("locked");
    $("#login").hidden = false;
    $("#app").hidden = true;
    var u = $("#lu"); u.value = ""; $("#lp").value = ""; $("#lerr").textContent = ""; u.focus();
  }
  function enter(user) {
    state.user = user; state.edit = false;
    state.done = store("done:" + user.username) || {};
    document.body.classList.remove("locked");
    $("#login").hidden = true; $("#app").hidden = false;
    var ids = tabsList().map(function (t) { return t.id; });
    if (ids.indexOf(state.tab) < 0) state.tab = ids[0];
    render();
    if (user.wajibGanti) openAccount();
  }
  function doLogout() { Auth.logout(); showLogin(); }

  /* ================= offline ================= */
  function netUpdate() {
    var el = $("#net"); if (!el) return;
    var online = navigator.onLine !== false;
    var swOk = "serviceWorker" in navigator && location.protocol.indexOf("http") === 0;
    if (!online) { el.textContent = state.offlineReady ? "Offline · memakai data tersimpan" : "Offline"; el.className = "net off"; }
    else if (!swOk) { el.textContent = "Mode file lokal"; el.className = "net"; }
    else if (state.offlineReady) { el.textContent = "Online · siap offline ✓"; el.className = "net ready"; }
    else { el.textContent = "Menyiapkan offline…"; el.className = "net"; }
  }
  function checkCache() {
    if (!window.caches) return;
    caches.match("index.html", { ignoreSearch: true }).then(function (r) {
      return r ? caches.match("data/content.js", { ignoreSearch: true }) : null;
    }).then(function (r) { state.offlineReady = !!r; netUpdate(); if (!r) setTimeout(checkCache, 2000); });
  }
  function toast(text, actionLabel, action) {
    var t = $("#toast"); t.textContent = ""; t.hidden = false;
    t.appendChild(h("span", { text: text }));
    if (actionLabel) t.appendChild(h("button", { class: "btn small", type: "button", onclick: action }, actionLabel));
    t.appendChild(h("button", { class: "btn small ghost", type: "button", onclick: function () { t.hidden = true; } }, "Nanti"));
  }
  function setupOffline() {
    window.addEventListener("online", netUpdate); window.addEventListener("offline", netUpdate);
    netUpdate();
    if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
      navigator.serviceWorker.register("sw.js").then(function () { return navigator.serviceWorker.ready; }).then(checkCache).catch(function () {});
      navigator.serviceWorker.addEventListener("message", function (e) {
        if (e.data && e.data.type === "updated") toast("Versi baru aplikasi tersedia.", "Muat ulang", function () { location.reload(); });
      });
    }
  }

  /* ================= start ================= */
  function boot() {
    var m = D.meta || {};
    document.title = m.judul || "Panduan Umrah";
    $("#loginTitle").textContent = m.judul || "Panduan Umrah";
    $("#foot").textContent = m.catatanKaki || "";
    $("#editBtn").addEventListener("click", function () { state.edit = !state.edit; render(); });

    var theme = store("theme") || "auto"; applyTheme(theme);
    $("#themeBtn").addEventListener("click", function () { theme = theme === "auto" ? "light" : theme === "light" ? "dark" : "auto"; store("theme", theme); applyTheme(theme); });

    var arab = store("arab") || 1.9;
    function setArab(v) { arab = Math.max(1.2, Math.min(3.4, v)); document.documentElement.style.setProperty("--arab-size", arab + "rem"); store("arab", arab); }
    setArab(arab);
    $("#arabPlus").addEventListener("click", function () { setArab(arab + 0.2); });
    $("#arabMinus").addEventListener("click", function () { setArab(arab - 0.2); });
    $("#q").addEventListener("input", function (e) { state.q = e.target.value.trim(); render(); });
    $("#accBtn").addEventListener("click", openAccount);
    $("#showpw").addEventListener("change", function (e) { $("#lp").type = e.target.checked ? "text" : "password"; });

    $("#loginForm").addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = $("#lbtn"); btn.disabled = true; $("#lerr").textContent = "";
      Auth.login($("#lu").value.trim(), $("#lp").value).then(function (r) {
        btn.disabled = false;
        if (r.ok) enter(r.user); else $("#lerr").textContent = r.error;
      });
    });

    applyBody(); setupOffline();
    var u = Auth.current();
    if (u) enter(u); else showLogin();
  }
  document.addEventListener("DOMContentLoaded", boot);
})();
