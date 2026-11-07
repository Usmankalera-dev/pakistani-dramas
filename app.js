/* PakDrama data — grounded in Oct–Nov 2026 trending reports (Neemopani, Filmibeat).
   Cast / channel / schedule only where reported. Watch links go to the channels'
   official YouTube accounts — episodes are uploaded there after TV airing. */
const CHANNELS = {
  "ARY Digital": { yt: "https://www.youtube.com/@ARYDigital", color: "#e50914", short: "ARY" },
  "HUM TV": { yt: "https://www.youtube.com/@HUMTV", color: "#7b2ff7", short: "HUM" },
  "Geo Entertainment": { yt: "https://www.youtube.com/@HarPalGeo", color: "#00a651", short: "GEO" },
  "Green Entertainment": { yt: "https://www.youtube.com/@GreenEntertainment", color: "#00b3a6", short: "GREEN" },
};

const DRAMAS = [
  { id: "dar-e-nijaat", title: "Dar-e-Nijaat", urdu: "دارِ نجات", channel: "ARY Digital", year: 2026,
    cast: ["Sheheryar Munawar", "Durefishan Saleem", "Nameer Nawaz Khan"], genre: "Romance • Drama",
    status: "On Air", schedule: "Fri & Sat, 8:00 PM", views: "1.7B+ views (ARY)",
    synopsis: "A story of love, family expectations, emotional conflict and the possibility of redemption — the most talked-about new drama of the season, written by Umera Ahmed.",
    poster: "posters/dar-e-nijaat.webp", rank: 1, progress: 0 },
  { id: "kafeel", title: "Kafeel", urdu: "کفیل", channel: "ARY Digital", year: 2026,
    cast: ["Sanam Saeed", "Emmad Irfani", "Munnaza Arif"], genre: "Social Drama",
    status: "On Air", schedule: "", views: "",
    synopsis: "A social drama about a powerful man and the people who depend on him — one of the top-rated shows of the year.",
    poster: "posters/kafeel.jpg", rank: 2, progress: 0 },
  { id: "shar-pasand", title: "Shar Pasand", urdu: "شر پسند", channel: "ARY Digital", year: 2026,
    cast: ["Nauman Ijaz", "Hareem Farooq", "Hira Mani", "Affan Waheed"], genre: "Social Drama",
    status: "On Air", schedule: "", views: "",
    synopsis: "A woman pushes back against social expectations and class divides, carried by Nauman Ijaz's much-praised performance.",
    poster: "posters/shar-pasand.jpg", rank: 3, progress: 0 },
  { id: "bas-tera-saath-ho", title: "Bas Tera Saath Ho", urdu: "بس تیرا ساتھ ہو", channel: "ARY Digital", year: 2026,
    cast: ["Farhan Saeed", "Sana Javed", "Zoya Nasir", "Saba Hamid"], genre: "Romance • Family",
    status: "On Air", schedule: "Mon & Tue, 8:00 PM", views: "11.3 TRP",
    synopsis: "A romantic family drama that premiered in May and became one of the year's highest-rated shows.",
    poster: "posters/bas-tera-saath-ho.webp", rank: 4, progress: 0 },
  { id: "nashtar", title: "Nashtar", urdu: "نشتر", channel: "Geo Entertainment", year: 2026,
    cast: ["Danish Taimoor", "Anmol Baloch"], genre: "Romance • Drama",
    status: "On Air", schedule: "Fri & Sat, 8:00 PM", views: "First episode 20M+ views",
    synopsis: "A Geo drama whose first episode crossed 20 million views — one of the biggest openings of 2026.",
    poster: "posters/nashtar.webp", rank: 5, progress: 0 },
  { id: "zanjeerain", title: "Zanjeerain", urdu: "زنجیریں", channel: "HUM TV", year: 2026,
    cast: ["Sajal Aly", "Ameer Gilani", "Ahsan Khan", "Danyal Zafar"], genre: "Romance • Drama",
    status: "On Air", schedule: "Wed & Thu, 8:00 PM", views: "7.7 TRP",
    synopsis: "A star-studded HUM TV drama that has stayed in the conversation since April.",
    poster: "posters/zanjeerain.webp", rank: 6, progress: 0 },
  { id: "mitti-de-baway", title: "Mitti De Baway", urdu: "مٹی دے باوے", channel: "Green Entertainment", year: 2026,
    cast: ["Mahira Khan", "Wahaj Ali"], genre: "Period Romance",
    status: "On Air", schedule: "Wed & Thu, 8:00 PM", views: "",
    synopsis: "A Punjab-set period romance by Faiza Iftikhar that went viral after its first promo.",
    poster: "posters/mitti-de-baway.jpg", rank: 7, progress: 0 },
  { id: "humrahi", title: "Humrahi", urdu: "ہمراہی", channel: "Geo Entertainment", year: 2026,
    cast: ["Danish Taimoor", "Hiba Bukhari"], genre: "Romance • Drama",
    status: "On Air", schedule: "Fri & Sat, 8:00 PM", views: "8.1 TRP",
    synopsis: "A Geo favourite since March, led by one of TV's most popular on-screen pairs.",
    poster: "posters/humrahi.jpg", rank: 8, progress: 0 },
  { id: "meri-zindagi-hai-tu", title: "Meri Zindagi Hai Tu", urdu: "میری زندگی ہے تو", channel: "HUM TV", year: 2026,
    cast: ["Hania Aamir", "Bilal Abbas Khan"], genre: "Romance • Drama",
    status: "Completed", schedule: "", views: "1.3B+ views — most-watched drama of 2026",
    synopsis: "The most-watched Pakistani drama of 2026. Hania Aamir and Bilal Abbas Khan in a love story that entered the all-time top 10 before ending in March.",
    poster: "posters/meri-zindagi-hai-tu.jpg", rank: 9, progress: 62 },
  { id: "sanwal-yaar-piya", title: "Sanwal Yaar Piya", urdu: "سنول یار پیا", channel: "Geo Entertainment", year: 2026,
    cast: [], genre: "Romance • Drama",
    status: "On Air", schedule: "", views: "First 2026 drama to cross 1B views",
    synopsis: "The first Pakistani drama of 2026 to cross one billion views — in just 33 episodes.",
    poster: "posters/sanwal-yaar-piya.jpg", rank: 10, progress: 0 },
  { id: "kabhi-main-kabhi-tum", title: "Kabhi Main Kabhi Tum", urdu: "کبھی میں کبھی تم", channel: "ARY Digital", year: 2024,
    cast: ["Fahad Mustafa", "Hania Aamir"], genre: "Romance • Drama",
    status: "Completed", schedule: "", views: "1.24B+ views",
    synopsis: "Fahad Mustafa and Hania Aamir in the ARY blockbuster that passed 1.24 billion views and still trends in 2026.",
    poster: "posters/kabhi-main-kabhi-tum.jpg", rank: 11, progress: 45 },
  { id: "tere-bin", title: "Tere Bin", urdu: "تیرے بن", channel: "Geo Entertainment", year: 2022,
    cast: ["Wahaj Ali", "Yumna Zaidi"], genre: "Romance • Drama",
    status: "Completed", schedule: "", views: "4B+ views — most-watched Pakistani drama ever",
    synopsis: "Wahaj Ali and Yumna Zaidi in the most-watched Pakistani drama of all time — over 4 billion views and counting.",
    poster: "posters/tere-bin.jpg", rank: 12, progress: 78 },
  { id: "sher", title: "Sher", urdu: "شیر", channel: "ARY Digital", year: 2025,
    cast: ["Danish Taimoor", "Sarah Khan"], genre: "Romance • Drama",
    status: "Completed", schedule: "Wed & Thu, 8:00 PM", views: "One of 2025's most-watched dramas",
    synopsis: "Danish Taimoor and Sarah Khan in ARY's 2025 hit — a powerful love story with one of the year's biggest audiences.",
    poster: "posters/sher.jpg", rank: 13, progress: 23 },
  { id: "meem-se-mohabbat", title: "Meem Se Mohabbat", urdu: "میم سے محبت", channel: "HUM TV", year: 2024,
    cast: ["Ahad Raza Mir", "Dananeer Mobeen"], genre: "Romance • Drama",
    status: "Completed", schedule: "", views: "",
    synopsis: "Ahad Raza Mir and Dananeer Mobeen in HUM TV's 2024–25 romance.",
    poster: "posters/meem-se-mohabbat.jpg", rank: 14, progress: 0 },
  { id: "jaan-nisar", title: "Jaan Nisar", urdu: "جان نثار", channel: "Geo Entertainment", year: 2024,
    cast: ["Danish Taimoor", "Hiba Bukhari"], genre: "Romance • Drama",
    status: "Completed", schedule: "", views: "",
    synopsis: "Danish Taimoor and Hiba Bukhari in Geo's 2024 hit.",
    poster: "posters/jaan-nisar.jpg", rank: 15, progress: 0 },
  { id: "ishq-murshid", title: "Ishq Murshid", urdu: "عشق مرشد", channel: "HUM TV", year: 2023,
    cast: ["Bilal Abbas Khan", "Durefishan Saleem"], genre: "Romance • Drama",
    status: "Completed", schedule: "", views: "",
    synopsis: "Bilal Abbas Khan and Durefishan Saleem in HUM TV's beloved 2023–24 romance.",
    poster: "posters/ishq-murshid.jpg", rank: 16, progress: 0 },
  { id: "hurmat", title: "Hurmat", urdu: "حرمت", channel: "HUM TV", year: 2026,
    cast: ["Dananeer Mobeen", "Shahveer Jafry", "Uzma Hassan"], genre: "Romance • Drama",
    status: "On Air", schedule: "Mon & Tue, 8:00 PM", views: "",
    synopsis: "A HUM TV drama that premiered in October 2026.",
    poster: "posters/hurmat.webp", rank: 17, progress: 0 },
  { id: "mohabbat", title: "Mohabbat", urdu: "محبت", channel: "Geo Entertainment", year: 2026,
    cast: ["Feroze Khan", "Nawal Saeed", "Aina Asif"], genre: "Family Drama",
    status: "On Air", schedule: "", views: "",
    synopsis: "A Geo family drama that premiered in September 2026.",
    poster: "posters/mohabbat.jpg", rank: 18, progress: 0 },
  { id: "muamma", title: "Muamma", urdu: "معمہ", channel: "HUM TV", year: 2026,
    cast: ["Saba Qamar", "Usman Mukhtar", "Ali Ansari"], genre: "Mystery Thriller",
    status: "On Air", schedule: "", views: "",
    synopsis: "A slow-burn mystery thriller built around one central puzzle, with strong viewership.",
    poster: "posters/muamma.jpg", rank: 19, progress: 0 },
  { id: "case-no-9", title: "Case No. 9", urdu: "کیس نمبر 9", channel: "ARY Digital", year: 2026,
    cast: ["Saba Qamar", "Usman Mukhtar"], genre: "Drama",
    status: "On Air", schedule: "", views: "",
    synopsis: "A 2026 ARY drama starring Saba Qamar and Usman Mukhtar.",
    poster: "posters/case-no-9.jpg", rank: 20, progress: 0 },
];

const HERO_IDS = ["dar-e-nijaat", "kabhi-main-kabhi-tum", "tere-bin", "sher"];
const CW_IDS = ["meri-zindagi-hai-tu", "kabhi-main-kabhi-tum", "tere-bin", "sher"];

const state = { view: "browse", query: "", channel: "All", sort: "popular" };
let myList = [];
try { myList = JSON.parse(localStorage.getItem("pakdrama-mylist") || "[]"); } catch (e) { myList = []; }
function saveList() { try { localStorage.setItem("pakdrama-mylist", JSON.stringify(myList)); } catch (e) {} }

const $ = (s, el) => (el || document).querySelector(s);
const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
const byId = id => DRAMAS.find(d => d.id === id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const chanColor = c => (CHANNELS[c] || {}).color || "#e50914";

function statusBadge(d) {
  return d.status === "On Air"
    ? '<span class="pill onair"><i class="dot"></i>On Air</span>'
    : '<span class="pill done">Completed</span>';
}

function cardHTML(d, opts) {
  opts = opts || {};
  const inList = myList.includes(d.id);
  const rank = opts.rank ? `<span class="rank">${opts.rank}</span>` : "";
  const prog = d.progress ? `<div class="prog"><i style="width:${d.progress}%"></i></div>` : "";
  return `<article class="card" data-id="${d.id}" tabindex="0" role="button" aria-label="${esc(d.title)}">
    ${rank}
    <div class="poster"><img src="${d.poster}" alt="${esc(d.title)} poster" loading="lazy" onerror="this.closest('.poster').classList.add('noimg');this.remove();">
      <span class="poster-title">${esc(d.title)}<small>${esc(d.urdu)}</small></span>
      <button class="card-play" aria-label="Open ${esc(d.title)}">▶</button>
      <button class="card-list ${inList ? "on" : ""}" data-list="${d.id}" aria-label="My List">${inList ? "✓" : "+"}</button>
    </div>
    ${prog}
    <div class="card-body">
      <h3>${esc(d.title)}</h3>
      <p class="urdu">${esc(d.urdu)}</p>
      <p class="meta"><span class="chan" style="--c:${chanColor(d.channel)}">${esc(d.channel)}</span> • ${d.year}</p>
      <div class="card-foot">${statusBadge(d)}${d.schedule ? `<span class="sched">${esc(d.schedule)}</span>` : ""}</div>
    </div>
  </article>`;
}

function filtered() {
  let list = DRAMAS.slice();
  if (state.view === "trending") list = list.filter(d => d.rank <= 10);
  if (state.view === "mylist") list = list.filter(d => myList.includes(d.id));
  if (state.view === "onair") list = list.filter(d => d.status === "On Air");
  if (state.channel !== "All") list = list.filter(d => d.channel === state.channel);
  if (state.query) {
    const q = state.query.toLowerCase();
    list = list.filter(d => (d.title + " " + d.urdu + " " + d.channel + " " + d.cast.join(" ")).toLowerCase().includes(q));
  }
  if (state.sort === "popular") list.sort((a, b) => a.rank - b.rank);
  if (state.sort === "newest") list.sort((a, b) => b.year - a.year || a.rank - b.rank);
  if (state.sort === "az") list.sort((a, b) => a.title.localeCompare(b.title));
  return list;
}

function renderGrid() {
  const list = filtered();
  const grid = $("#grid");
  const titles = { browse: "All Dramas", trending: "Trending Now", mylist: "My List", onair: "On Air Now" };
  $("#grid-title").textContent = titles[state.view] || "All Dramas";
  $("#grid-count").textContent = list.length + (list.length === 1 ? " drama" : " dramas");
  $("#empty").style.display = list.length ? "none" : "block";
  grid.innerHTML = list.map(d => cardHTML(d)).join("");
  $$("#grid .card").forEach(bindCard);
  updateCounts();
}

function renderRows() {
  const cw = CW_IDS.map(byId).filter(Boolean);
  $("#cw-row").innerHTML = cw.map(d => cardHTML(d)).join("");
  $$("#cw-row .card").forEach(bindCard);
  const tr = DRAMAS.filter(d => d.rank <= 10).sort((a, b) => a.rank - b.rank);
  $("#tr-row").innerHTML = tr.map((d, i) => cardHTML(d, { rank: i + 1 })).join("");
  $$("#tr-row .card").forEach(bindCard);
}

function updateCounts() {
  $("#mylist-count").textContent = myList.length;
  $("#mylist-count").style.display = myList.length ? "" : "none";
  $$(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.view === state.view));
}

function bindCard(card) {
  card.addEventListener("click", e => {
    if (e.target.closest("[data-list]")) return;
    openModal(card.dataset.id);
  });
  card.addEventListener("keydown", e => { if (e.key === "Enter") openModal(card.dataset.id); });
  const btn = card.querySelector("[data-list]");
  if (btn) btn.addEventListener("click", e => {
    e.stopPropagation();
    toggleList(btn.dataset.list);
  });
}

function toggleList(id) {
  const i = myList.indexOf(id);
  if (i >= 0) { myList.splice(i, 1); toast("Removed from My List"); }
  else { myList.push(id); toast("Added to My List ✓"); }
  saveList();
  renderGrid(); renderRows();
  if (modalOpen) openModal(id, true);
}

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove("show"), 2200);
}

/* ---------- hero ---------- */
let heroIdx = 0;
function setHero(id) {
  const d = byId(id);
  if (!d) return;
  heroIdx = HERO_IDS.indexOf(id);
  $("#hero").style.backgroundImage = `url(${d.poster})`;
  $("#hero-kicker").textContent = `${d.channel} • ${d.year} • ${d.status === "On Air" ? "Trending #" + d.rank : "All-time favourite"}`;
  $("#hero-title").textContent = d.title;
  $("#hero-urdu").textContent = d.urdu;
  $("#hero-meta").innerHTML = `${statusBadge(d)}${d.schedule ? `<span>${esc(d.schedule)}</span>` : ""}${d.views ? `<span class="views">${esc(d.views)}</span>` : ""}`;
  $("#hero-watch").onclick = () => openModal(d.id);
  const lb = $("#hero-list");
  lb.textContent = myList.includes(d.id) ? "✓ In My List" : "+ My List";
  lb.onclick = () => toggleList(d.id);
  $$("#hero-thumbs .thumb").forEach(t => t.classList.toggle("active", t.dataset.id === id));
}
function heroStep(dir) {
  heroIdx = (heroIdx + dir + HERO_IDS.length) % HERO_IDS.length;
  setHero(HERO_IDS[heroIdx]);
}

/* ---------- modal ---------- */
let modalOpen = null;
function openModal(id, keep) {
  const d = byId(id);
  if (!d) return;
  modalOpen = id;
  const ch = CHANNELS[d.channel];
  const same = DRAMAS.filter(x => x.channel === d.channel && x.id !== id).slice(0, 3);
  $("#modal-body").innerHTML = `
    <div class="modal-poster"><img src="${d.poster}" alt="${esc(d.title)} poster" onerror="this.closest('.modal-poster').classList.add('noimg');this.remove();">
      <span class="poster-title">${esc(d.title)}<small>${esc(d.urdu)}</small></span></div>
    <div class="modal-info">
      <h2>${esc(d.title)}</h2>
      <p class="urdu big">${esc(d.urdu)}</p>
      <div class="modal-meta">${statusBadge(d)}<span class="chan" style="--c:${chanColor(d.channel)}">${esc(d.channel)}</span><span>${d.year}</span><span>${esc(d.genre)}</span></div>
      ${d.schedule ? `<p class="line"><b>Airs:</b> ${esc(d.schedule)} (Pakistan time)</p>` : ""}
      ${d.cast.length ? `<p class="line"><b>Cast:</b> ${d.cast.map(esc).join(", ")}</p>` : ""}
      ${d.views ? `<p class="line"><b>Buzz:</b> ${esc(d.views)}</p>` : ""}
      <p class="syn">${esc(d.synopsis)}</p>
      <div class="modal-actions">
        <a class="btn watch" href="${ch.yt}" target="_blank" rel="noopener">▶ Watch on YouTube — ${esc(d.channel)}</a>
        <button class="btn ghost" id="modal-list">${myList.includes(d.id) ? "✓ In My List" : "+ My List"}</button>
      </div>
      <p class="fine">Episodes air on TV first, then on the channel's official YouTube. This site lists dramas — it does not host episodes.</p>
      ${same.length ? `<h4>More on ${esc(d.channel)}</h4><div class="modal-more">${same.map(x => `<button class="mini" data-id="${x.id}"><img src="${x.poster}" alt="" loading="lazy" onerror="this.remove();"><span>${esc(x.title)}</span></button>`).join("")}</div>` : ""}
    </div>`;
  $("#modal").classList.add("open");
  document.body.style.overflow = "hidden";
  $("#modal-list").onclick = () => toggleList(d.id);
  $$("#modal-body .mini").forEach(b => b.addEventListener("click", () => openModal(b.dataset.id)));
  if (!keep) $("#modal").scrollTop = 0;
}
function closeModal() {
  modalOpen = null;
  $("#modal").classList.remove("open");
  document.body.style.overflow = "";
}

/* ---------- init ---------- */
function init() {
  renderRows();
  renderGrid();
  setHero(HERO_IDS[0]);
  $("#hero-thumbs").innerHTML = HERO_IDS.map(id => {
    const d = byId(id);
    return `<button class="thumb" data-id="${id}" aria-label="${esc(d.title)}"><img src="${d.poster}" alt="" loading="lazy" onerror="this.remove();"></button>`;
  }).join("");
  $$("#hero-thumbs .thumb").forEach(t => t.addEventListener("click", () => setHero(t.dataset.id)));
  $("#hero-prev").addEventListener("click", () => heroStep(-1));
  $("#hero-next").addEventListener("click", () => heroStep(1));

  $$(".nav-item").forEach(b => b.addEventListener("click", () => {
    state.view = b.dataset.view;
    state.query = ""; $("#search").value = "";
    renderGrid();
    $("#all").scrollIntoView({ behavior: "smooth" });
    closeDrawer();
  }));
  $$(".chan-row").forEach(b => b.addEventListener("click", () => {
    state.view = "browse";
    state.channel = b.dataset.channel;
    syncChips();
    renderGrid();
    $("#all").scrollIntoView({ behavior: "smooth" });
    closeDrawer();
  }));
  $$(".chip").forEach(c => c.addEventListener("click", () => {
    state.channel = c.dataset.channel;
    syncChips(); renderGrid();
  }));
  $("#sort").addEventListener("change", e => { state.sort = e.target.value; renderGrid(); });
  $("#search").addEventListener("input", e => {
    state.query = e.target.value.trim();
    if (state.view === "mylist" || state.view === "trending" || state.view === "onair") { state.view = "browse"; }
    renderGrid();
  });
  $("#bell").addEventListener("click", e => { e.stopPropagation(); $("#bell-drop").classList.toggle("open"); });
  document.addEventListener("click", e => { if (!e.target.closest("#bell-wrap")) $("#bell-drop").classList.remove("open"); });
  $("#modal-close").addEventListener("click", closeModal);
  $("#modal").addEventListener("click", e => { if (e.target.id === "modal") closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
  $("#menu-btn").addEventListener("click", () => $("#sidebar").classList.add("open"));
  $("#drawer-close").addEventListener("click", closeDrawer);
  $("#scrim").addEventListener("click", closeDrawer);
}
function syncChips() { $$(".chip").forEach(c => c.classList.toggle("active", c.dataset.channel === state.channel)); }
function closeDrawer() { $("#sidebar").classList.remove("open"); }

document.addEventListener("DOMContentLoaded", init);
