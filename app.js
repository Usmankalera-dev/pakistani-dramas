/* PakDrama data — grounded in Oct–Nov 2026 trending reports (Neemopani, Filmibeat).
   Cast / channel / schedule only where reported. Watch links go to the channels'
   official YouTube accounts — episodes are uploaded there after TV airing. */
const CHANNELS = {
  "ARY Digital": { yt: "https://www.youtube.com/@ARYDigital", color: "#e50914", short: "ARY", logo: "logos/ary.png" },
  "HUM TV": { yt: "https://www.youtube.com/@HUMTV", color: "#7b2ff7", short: "HUM", logo: "logos/hum.jpg" },
  "Geo Entertainment": { yt: "https://www.youtube.com/@HarPalGeo", color: "#00a651", short: "GEO", logo: "logos/geo.png" },
  "Green Entertainment": { yt: "https://www.youtube.com/@GreenEntertainment", color: "#00b3a6", short: "GREEN", logo: "logos/green.jpg" },
};

const DRAMAS = [
  { id: "dar-e-nijaat", title: "Dar-e-Nijaat", urdu: "دارِ نجات", channel: "ARY Digital", year: 2026,
    cast: ["Sheheryar Munawar", "Durefishan Saleem", "Nameer Nawaz Khan"], genre: "Romance • Drama",
    status: "On Air", schedule: "Fri & Sat, 8:00 PM", views: "1.7B+ views (ARY)",
    synopsis: "A story of love, family expectations, emotional conflict and the possibility of redemption — the most talked-about new drama of the season, written by Umera Ahmed.",
    poster: "posters/dar-e-nijaat.webp", rank: 1, progress: 0 },
  { id: "kafeel", title: "Kafeel", urdu: "کفیل", channel: "ARY Digital", year: 2026,
    cast: ["Sanam Saeed", "Emmad Irfani", "Munnaza Arif"], genre: "Social Drama",
    status: "Completed", schedule: "Mon & Tue, 8:00 PM", views: "",
    synopsis: "A social drama by Umera Ahmed about a powerful man and the people who depend on him — one of the top-rated shows of the year. Ended 28 April 2026.",
    poster: "posters/kafeel.jpg", rank: 2, progress: 0 },
  { id: "shar-pasand", title: "Shar Pasand", urdu: "شر پسند", channel: "ARY Digital", year: 2026,
    cast: ["Nauman Ijaz", "Hareem Farooq", "Hira Mani", "Affan Waheed"], genre: "Social Drama",
    status: "Completed", schedule: "Wed & Thu, 8:00 PM", views: "",
    synopsis: "A woman pushes back against social expectations and class divides, carried by Nauman Ijaz's much-praised performance. Ended 2 April 2026 after 52 episodes.",
    poster: "posters/shar-pasand.jpg", rank: 3, progress: 0 },
  { id: "bas-tera-saath-ho", title: "Bas Tera Saath Ho", urdu: "بس تیرا ساتھ ہو", channel: "ARY Digital", year: 2026,
    cast: ["Farhan Saeed", "Sana Javed", "Zoya Nasir", "Saba Hamid"], genre: "Romance • Family",
    status: "Completed", schedule: "Mon & Tue, 8:00 PM", views: "11.3 TRP",
    synopsis: "A romantic family drama that premiered in May and became one of the year's highest-rated shows. Ended 5 October 2026.",
    poster: "posters/bas-tera-saath-ho.webp", rank: 4, progress: 0 },
  { id: "nashtar", title: "Nashtar", urdu: "نشتر", channel: "Geo Entertainment", year: 2026,
    cast: ["Danish Taimoor", "Anmol Baloch"], genre: "Romance • Drama",
    status: "On Air", schedule: "Fri & Sat, 8:00 PM", views: "First episode 20M+ views",
    synopsis: "A Geo drama whose first episode crossed 20 million views — one of the biggest openings of 2026.",
    poster: "posters/nashtar.webp", rank: 5, progress: 0 },
  { id: "zanjeerain", title: "Zanjeerain", urdu: "زنجیریں", channel: "HUM TV", year: 2026,
    cast: ["Sajal Aly", "Ameer Gilani", "Ahsan Khan", "Danyal Zafar"], genre: "Romance • Drama",
    status: "Completed", schedule: "Wed & Thu, 8:00 PM", views: "7.7 TRP",
    synopsis: "A star-studded HUM TV drama that stayed in the conversation from April to September 2026.",
    poster: "posters/zanjeerain.webp", rank: 6, progress: 0 },
  { id: "mitti-de-baway", title: "Mitti De Baway", urdu: "مٹی دے باوے", channel: "Green Entertainment", year: 2026,
    cast: ["Mahira Khan", "Wahaj Ali"], genre: "Period Romance",
    status: "On Air", schedule: "Wed & Thu, 8:00 PM", views: "",
    synopsis: "A Punjab-set period romance by Faiza Iftikhar that went viral after its first promo.",
    poster: "posters/mitti-de-baway.jpg", rank: 7, progress: 0 },
  { id: "humrahi", title: "Humrahi", urdu: "ہمراہی", channel: "Geo Entertainment", year: 2026,
    cast: ["Danish Taimoor", "Hiba Bukhari"], genre: "Romance • Drama",
    status: "Completed", schedule: "Fri & Sat, 8:00 PM", views: "8.1 TRP",
    synopsis: "A Geo favourite from March to August 2026, led by one of TV's most popular on-screen pairs.",
    poster: "posters/humrahi.jpg", rank: 8, progress: 0 },
  { id: "meri-zindagi-hai-tu", title: "Meri Zindagi Hai Tu", urdu: "میری زندگی ہے تو", channel: "ARY Digital", year: 2025,
    cast: ["Hania Aamir", "Bilal Abbas Khan"], genre: "Romance • Drama",
    status: "Completed", schedule: "", views: "1.3B+ views — most-watched drama of 2026",
    synopsis: "The most-watched Pakistani drama of 2026. Hania Aamir and Bilal Abbas Khan in a love story that entered the all-time top 10 before ending in March.",
    poster: "posters/meri-zindagi-hai-tu.jpg", rank: 9, progress: 0 },
  { id: "sanwal-yaar-piya", title: "Sanwal Yaar Piya", urdu: "سنول یار پیا", channel: "Geo Entertainment", year: 2026,
    cast: [], genre: "Romance • Drama",
    status: "Completed", schedule: "", views: "First 2026 drama to cross 1B views",
    synopsis: "The first Pakistani drama of 2026 to cross one billion views — 40 episodes in all, ending January 2026.",
    poster: "posters/sanwal-yaar-piya.jpg", rank: 10, progress: 0 },
  { id: "kabhi-main-kabhi-tum", title: "Kabhi Main Kabhi Tum", urdu: "کبھی میں کبھی تم", channel: "ARY Digital", year: 2024,
    cast: ["Fahad Mustafa", "Hania Aamir"], genre: "Romance • Drama",
    status: "Completed", schedule: "", views: "1.24B+ views",
    synopsis: "Fahad Mustafa and Hania Aamir in the ARY blockbuster that passed 1.24 billion views and still trends in 2026.",
    poster: "posters/kabhi-main-kabhi-tum.jpg", rank: 11, progress: 0 },
  { id: "tere-bin", title: "Tere Bin", urdu: "تیرے بن", channel: "Geo Entertainment", year: 2022,
    cast: ["Wahaj Ali", "Yumna Zaidi"], genre: "Romance • Drama",
    status: "Completed", schedule: "", views: "4B+ views — most-watched Pakistani drama ever",
    synopsis: "Wahaj Ali and Yumna Zaidi in the most-watched Pakistani drama of all time — over 4 billion views and counting.",
    poster: "posters/tere-bin.jpg", rank: 12, progress: 0 },
  { id: "sher", title: "Sher", urdu: "شیر", channel: "ARY Digital", year: 2025,
    cast: ["Danish Taimoor", "Sarah Khan"], genre: "Romance • Drama",
    status: "Completed", schedule: "Wed & Thu, 8:00 PM", views: "One of 2025's most-watched dramas",
    synopsis: "Danish Taimoor and Sarah Khan in ARY's 2025 hit — a powerful love story with one of the year's biggest audiences.",
    poster: "posters/sher.jpg", rank: 13, progress: 0 },
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
    synopsis: "A Geo family drama from 2026.",
    poster: "posters/mohabbat.jpg", rank: 18, progress: 0 },
  { id: "muamma", title: "Muamma", urdu: "معمہ", channel: "HUM TV", year: 2026,
    cast: ["Saba Qamar", "Usman Mukhtar", "Ali Ansari"], genre: "Mystery Thriller",
    status: "Completed", schedule: "", views: "",
    synopsis: "A slow-burn mystery thriller built around one central puzzle, with strong viewership. Ended 23 April 2026 after 35 episodes.",
    poster: "posters/muamma.jpg", rank: 19, progress: 0 },
  { id: "case-no-9", title: "Case No. 9", urdu: "کیس نمبر 9", channel: "Geo Entertainment", year: 2025,
    cast: ["Saba Qamar", "Faysal Quraishi", "Junaid Khan", "Aamina Sheikh"], genre: "Courtroom Drama",
    status: "Completed", schedule: "Wed & Thu, 8:00 PM", views: "",
    synopsis: "Sehar Moazzam fights a powerful man in court after a sexual assault — Geo's boldest courtroom drama, written by Shahzeb Khanzada. 32 episodes, ending 8 January 2026.",
    poster: "posters/case-no-9.jpg", rank: 20, progress: 0 },
];

const HERO_IDS = ["dar-e-nijaat", "kabhi-main-kabhi-tum", "tere-bin", "sher"];
const CW_IDS = ["meri-zindagi-hai-tu", "kabhi-main-kabhi-tum", "tere-bin", "sher"];

/* ---------- actors (derived from the verified cast lists) ---------- */
function epCount(id) { const e = (typeof EPISODES !== "undefined" && EPISODES[id]) || null; return e ? e.count : 0; }
const ACTORS = (() => {
  const m = {};
  DRAMAS.forEach(d => d.cast.forEach(name => {
    m[name] = m[name] || { name, dramas: [] };
    m[name].dramas.push(d);
  }));
  const list = Object.values(m).map(a => {
    a.dramas.sort((x, y) => x.rank - y.rank);
    a.top = a.dramas[0];
    a.channels = [...new Set(a.dramas.map(d => d.channel))];
    a.totalEps = a.dramas.reduce((s, d) => s + epCount(d.id), 0);
    a.years = [Math.min(...a.dramas.map(d => d.year)), Math.max(...a.dramas.map(d => d.year))];
    return a;
  });
  list.sort((a, b) => b.dramas.length - a.dramas.length || a.top.rank - b.top.rank);
  return list;
})();

function actorCardHTML(a) {
  return `<article class="card actor-card" data-actor="${esc(a.name)}" tabindex="0" role="button" aria-label="${esc(a.name)}">
    <div class="poster"><img src="${a.top.poster}" alt="${esc(a.name)}" loading="lazy" onerror="this.closest('.poster').classList.add('noimg');this.remove();">
      <span class="poster-title">${esc(a.name)}</span>
      <span class="actor-count">${a.dramas.length} drama${a.dramas.length === 1 ? "" : "s"}</span>
    </div>
    <div class="card-body">
      <h3>${esc(a.name)}</h3>
      <p class="meta">${a.channels.map(esc).join(" • ")} • ${a.totalEps} episodes</p>
      <p class="meta">Top: ${esc(a.top.title)} (${a.top.year})</p>
    </div>
  </article>`;
}

function openActor(name) {
  const a = ACTORS.find(x => x.name === name);
  if (!a) return;
  modalOpen = "actor:" + name;
  const rows = a.dramas.map(d => {
    const eps = epCount(d.id);
    return `<button class="mini actor-drama" data-id="${d.id}"><img src="${d.poster}" alt="" loading="lazy" onerror="this.remove();"><span>${esc(d.title)} <small>${d.year} · ${esc(d.channel)}${eps ? " · " + eps + " episodes" : ""} · ${d.status}</small></span></button>`;
  }).join("");
  $("#modal-body").innerHTML = `
    <div class="modal-poster"><img src="${a.top.poster}" alt="${esc(a.name)}" onerror="this.closest('.modal-poster').classList.add('noimg');this.remove();">
      <span class="poster-title">${esc(a.name)}</span></div>
    <div class="modal-info">
      <h2>${esc(a.name)}</h2>
      <div class="modal-meta"><span>${a.dramas.length} drama${a.dramas.length === 1 ? "" : "s"} on PakDrama</span><span>${a.channels.map(esc).join(" • ")}</span><span>${a.years[0]}${a.years[1] !== a.years[0] ? "–" + a.years[1] : ""}</span><span>${a.totalEps} episodes</span></div>
      <p class="syn">Filmography on PakDrama — every drama ${esc(a.name)} stars in on this site, with channel, year and episode count.</p>
      <div class="modal-actions">
        <button class="btn watch" id="actor-view-all">▶ View all their dramas</button>
      </div>
      <h4>Dramas</h4>
      <div class="actor-list">${rows}</div>
      <p class="fine">Cast details come from the drama listings on this site. Tap a drama to open it.</p>
    </div>`;
  $("#modal").classList.add("open");
  document.body.style.overflow = "hidden";
  $("#actor-view-all").onclick = () => {
    closeModal();
    state.view = "browse"; state.channel = "All"; syncChips();
    $("#search").value = a.name; state.query = a.name.toLowerCase();
    renderGrid();
    $("#all").scrollIntoView({ behavior: "smooth" });
  };
  $$("#modal-body .actor-drama").forEach(b => b.addEventListener("click", () => openModal(b.dataset.id)));
  $("#modal").scrollTop = 0;
}

/* ---------- tonight on TV + stats (computed from schedules & data) ---------- */
const DAY_ABBR = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAY_FULL = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function airingOn(dayIdx) {
  const abbr = DAY_ABBR[dayIdx];
  return DRAMAS.filter(d => d.status === "On Air" && d.schedule && d.schedule.includes(abbr));
}
function renderTonight() {
  const today = new Date().getDay();
  let day = today, list = airingOn(today), label = "Tonight";
  if (!list.length) {
    for (let i = 1; i <= 7; i++) {
      const d = (today + i) % 7, l = airingOn(d);
      if (l.length) { day = d; list = l; label = "Next: " + DAY_FULL[d]; break; }
    }
  }
  const sec = $("#tonight-sec");
  if (!list.length) { sec.style.display = "none"; return; }
  sec.style.display = "";
  $("#tonight-title").textContent = label === "Tonight" ? "📺 Tonight on TV — " + DAY_FULL[day] : "📺 " + label + " on TV";
  $("#tonight-row").innerHTML = list.map(d => cardHTML(d)).join("");
  $$("#tonight-row .card").forEach(bindCard);
}
function renderNewThisWeek() {
  const sec = $("#new-sec");
  const list = DRAMAS.filter(d => d.status === "On Air" && EPISODES[d.id])
    .sort((a, b) => latestDate(b) - latestDate(a));
  if (!list.length) { sec.style.display = "none"; return; }
  sec.style.display = "";
  $("#new-row").innerHTML = list.map(d => {
    const e = EPISODES[d.id];
    const last = e.eps[e.eps.length - 1];
    return last.v
      ? cardHTML(d, { resume: "Play latest", resumeVid: last.v, resumeN: last.n })
      : cardHTML(d);
  }).join("");
  $$("#new-row .card").forEach(bindCard);
}
function renderSchedule() {
  const order = [1, 2, 3, 4, 5, 6, 0]; // Mon..Sun
  const today = new Date().getDay();
  $("#sched-row").innerHTML = order.map(di => {
    const list = airingOn(di);
    return `<div class="sched-day${di === today ? " today" : ""}">
      <h4>${DAY_ABBR[di]}${di === today ? " · Today" : ""}</h4>
      ${list.length ? list.map(d => `<button class="sched-drama" data-id="${d.id}"><span class="chan-dot" style="--c:${chanColor(d.channel)}"></span>${esc(d.title)} <small>${esc((d.schedule.split(", ").pop() || ""))}</small></button>`).join("") : `<p class="sched-none">No new episode</p>`}
    </div>`;
  }).join("");
  $$("#sched-row .sched-drama").forEach(b => b.addEventListener("click", () => openModal(b.dataset.id)));
}

/* ---------- follow reminders (saved in browser) ---------- */
let followed = [];
try { followed = JSON.parse(localStorage.getItem("pakdrama-follow") || "[]"); } catch (e) { followed = []; }
function saveFollowed() { try { localStorage.setItem("pakdrama-follow", JSON.stringify(followed)); } catch (e) {} }
function isFollowing(id) { return followed.indexOf(id) >= 0; }
function toggleFollow(id) {
  const i = followed.indexOf(id);
  if (i >= 0) followed.splice(i, 1); else followed.push(id);
  saveFollowed();
  renderBell();
}
function nextAir(d) {
  if (!d.schedule) return null;
  const days = DAY_ABBR.map((a, i) => d.schedule.includes(a) ? i : -1).filter(i => i >= 0);
  if (!days.length) return null;
  const now = new Date();
  for (let add = 0; add < 8; add++) {
    const t = new Date(now.getFullYear(), now.getMonth(), now.getDate() + add, 20, 0, 0);
    if (days.indexOf(t.getDay()) >= 0 && t.getTime() > now.getTime()) return t;
  }
  return null;
}
const MONTH_ABBR = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function fmtAir(t) {
  if (!t) return "";
  return DAY_ABBR[t.getDay()] + " " + t.getDate() + " " + MONTH_ABBR[t.getMonth()] + " · 8:00 PM";
}
function renderBell() {
  const drop = $("#bell-drop");
  const f = followed.map(byId).filter(Boolean);
  const timings = DRAMAS.filter(d => d.status === "On Air" && d.schedule);
  drop.innerHTML = `<p class="drop-title">This week on TV</p>` +
    (f.length
      ? `<p class="drop-title">🔔 Following</p>` + f.map(d => {
          const na = nextAir(d);
          return `<p>🔔 <b>${esc(d.title)}</b> — ${na ? "next episode " + fmtAir(na) : "schedule not listed"} <button class="unfollow" data-id="${d.id}">Unfollow</button></p>`;
        }).join("")
      : `<p class="drop-note">Tap 🔔 Follow on an ongoing drama to see its next airing here.</p>`) +
    timings.map(d => `<p>🔴 <b>${esc(d.title)}</b> — new episode ${esc(d.schedule)} (${esc(d.channel.replace(" Entertainment", "").replace(" Digital", ""))})</p>`).join("") +
    `<p class="drop-note">Timings are Pakistan time and can change — check the channel's schedule.</p>`;
  $$("#bell-drop .unfollow").forEach(b => b.addEventListener("click", e => {
    e.stopPropagation();
    toggleFollow(b.dataset.id);
    const fb = $("#modal-follow");
    if (fb && modalOpen === b.dataset.id) fb.textContent = "🔔 Follow";
  }));
}
function renderStats() {
  const tot = Object.values(EPISODES).reduce((s, e) => s + e.count, 0);
  const insite = Object.values(EPISODES).reduce((s, e) => s + e.eps.filter(ep => ep.v).length, 0);
  const chans = [...new Set(DRAMAS.map(d => d.channel))].length;
  $("#stats-bar").innerHTML = `<span><b>${DRAMAS.length}</b> dramas</span><span><b>${tot}</b> episodes</span><span><b>${chans}</b> channels</span><span><b>${insite}</b> play in-site</span>`;
  const fb = $("#foot-stats");
  if (fb) fb.innerHTML = `<b>${DRAMAS.length}</b> dramas · <b>${tot}</b> episodes · <b>${chans}</b> channels · <b>${insite}</b> play in-site`;
}

const state = { view: "browse", query: "", channel: "All", sort: "popular" };
let myList = [];
try { myList = JSON.parse(localStorage.getItem("pakdrama-mylist") || "[]"); } catch (e) { myList = []; }
function saveList() { try { localStorage.setItem("pakdrama-mylist", JSON.stringify(myList)); } catch (e) {} }

/* ---------- continue watching (real: what you actually played) ---------- */
let continueList = [];
try { continueList = JSON.parse(localStorage.getItem("pakdrama-continue") || "[]"); } catch (e) { continueList = []; }
function saveContinueList() { try { localStorage.setItem("pakdrama-continue", JSON.stringify(continueList)); } catch (e) {} }
function saveContinue(id, n, vid) {
  continueList = continueList.filter(x => x.id !== id);
  continueList.unshift({ id, n, vid: vid || null, at: Date.now() });
  continueList = continueList.slice(0, 8);
  saveContinueList();
  renderRows();
}

/* ---------- watched episodes (real progress) ---------- */
let watched = {};
try { watched = JSON.parse(localStorage.getItem("pakdrama-watched") || "{}"); } catch (e) { watched = {}; }
function saveWatched() { try { localStorage.setItem("pakdrama-watched", JSON.stringify(watched)); } catch (e) {} }
function watchedCount(id) { return (watched[id] || []).length; }
function isWatched(id, n) { return (watched[id] || []).indexOf(Number(n)) >= 0; }
function setWatched(id, n, on) {
  const arr = watched[id] || (watched[id] = []);
  const i = arr.indexOf(Number(n));
  if (on && i < 0) arr.push(Number(n));
  if (!on && i >= 0) arr.splice(i, 1);
  if (!arr.length) delete watched[id];
  saveWatched();
}
/* ---------- your star ratings (saved in browser) ---------- */
let ratings = {};
try { ratings = JSON.parse(localStorage.getItem("pakdrama-ratings") || "{}"); } catch (e) { ratings = {}; }
function saveRatings() { try { localStorage.setItem("pakdrama-ratings", JSON.stringify(ratings)); } catch (e) {} }

function refreshWatchedUI(id) {
  const e = (typeof EPISODES !== "undefined" && EPISODES[id]) || null;
  if (!e) return;
  const total = e.count;
  const c = watchedCount(id);
  const cnt = $("#tab-episodes .ep-watched-count");
  if (cnt) cnt.textContent = c + " of " + total + " watched";
  const ma = $("#ep-markall");
  if (ma) ma.textContent = c >= total ? "Clear watched" : "✓ Mark all watched";
  $$("#tab-episodes .ep-row").forEach(r => {
    const on = isWatched(id, Number(r.dataset.n));
    r.classList.toggle("watched", on);
    const chk = r.querySelector(".ep-check");
    if (chk) chk.classList.toggle("on", on);
  });
  renderRows();
}

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
  const eps = epCount(d.id);
  const w = watchedCount(d.id);
  const prog = w ? `<div class="prog"><i style="width:${Math.round(w / eps * 100)}%"></i></div>` : "";
  return `<article class="card" data-id="${d.id}"${opts.resumeVid ? ` data-rvid="${opts.resumeVid}" data-rn="${opts.resumeN}"` : ""}${opts.resumePl ? ` data-rpl="1"` : ""} tabindex="0" role="button" aria-label="${esc(d.title)}">
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
      <p class="meta"><span class="chan" style="--c:${chanColor(d.channel)}">${esc(d.channel)}</span> • ${d.year}${eps ? ` • <span class="epn">${eps} episode${eps === 1 ? "" : "s"}</span>` : ""}${w ? ` • <span class="watched-n">${w}/${eps} watched</span>` : ""}${ratings[d.id] ? ` • <span class="my-rating">★ ${ratings[d.id]}/5</span>` : ""}</p>
      <div class="card-foot">${statusBadge(d)}${d.status === "On Air" ? `<span class="newep">● New Ep ${eps}</span>` : ""}${d.schedule && d.status === "On Air" ? `<span class="sched">${esc(d.schedule)}</span>` : ""}${opts.resume ? `<span class="resume">▶ ${esc(opts.resume)}</span>` : ""}</div>
    </div>
  </article>`;
}

const MONTHS = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
function latestDate(d) {
  const e = (typeof EPISODES !== "undefined" && EPISODES[d.id]) || null;
  if (!e || !e.eps.length) return 0;
  const last = e.eps[e.eps.length - 1];
  if (!last.d) return 0;
  const m = last.d.match(/(\d+)\s+(\w+)\s+(\d{4})/);
  if (!m) return 0;
  return new Date(+m[3], MONTHS[m[2]] || 0, +m[1]).getTime();
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
  if (state.sort === "recent") list.sort((a, b) => latestDate(b) - latestDate(a) || a.rank - b.rank);
  if (state.sort === "rated") list.sort((a, b) => (ratings[b.id] || 0) - (ratings[a.id] || 0) || a.rank - b.rank);
  return list;
}

function renderGrid() {
  const grid = $("#grid");
  const showChips = state.view !== "actors";
  $("#sort").style.display = showChips ? "" : "none";
  $(".chips").style.display = showChips ? "" : "none";
  $("#actor-search").style.display = state.view === "actors" ? "" : "none";
  if (state.view === "actors") {
    $("#grid-title").textContent = "Actors";
    const q = ($("#actor-search").value || "").trim().toLowerCase();
    const list = q ? ACTORS.filter(a => a.name.toLowerCase().includes(q)) : ACTORS;
    $("#grid-count").textContent = list.length + " actors";
    $("#empty").style.display = "none";
    grid.innerHTML = list.length ? list.map(actorCardHTML).join("") : `<p class="fine" style="grid-column:1/-1">No actor matches "${esc(q)}".</p>`;
    $$("#grid .actor-card").forEach(c => {
      c.addEventListener("click", () => openActor(c.dataset.actor));
      c.addEventListener("keydown", e => { if (e.key === "Enter") openActor(c.dataset.actor); });
    });
    updateCounts();
    return;
  }
  const ms = $("#mylist-stats");
  if (state.view === "mylist") {
    const totW = Object.values(watched).reduce((s, a) => s + a.length, 0);
    const done = DRAMAS.filter(d => { const e = EPISODES[d.id]; return e && watchedCount(d.id) >= e.count; }).length;
    const hrs = Math.round(totW * 40 / 60);
    ms.style.display = "";
    ms.innerHTML = `📊 You watched <b>${totW}</b> episode${totW === 1 ? "" : "s"} · <b>${done}</b> drama${done === 1 ? "" : "s"} fully watched · ≈ <b>${hrs}h</b> of drama`;
  } else ms.style.display = "none";
  const list = filtered();
  const titles = { browse: "All Dramas", trending: "Trending Now", mylist: "My List", onair: "On Air Now" };
  $("#grid-title").textContent = titles[state.view] || "All Dramas";
  $("#grid-count").textContent = list.length + (list.length === 1 ? " drama" : " dramas");
  $("#empty").style.display = list.length ? "none" : "block";
  grid.innerHTML = list.map(d => cardHTML(d)).join("");
  $$("#grid .card").forEach(bindCard);
  updateCounts();
}

function renderRows() {
  const cwReal = continueList.map(x => byId(x.id)).filter(Boolean);
  const cw = cwReal.length ? cwReal : CW_IDS.map(byId).filter(Boolean);
  $("#cw-row").innerHTML = cw.map(d => {
    const hit = continueList.find(x => x.id === d.id);
    if (!hit) return cardHTML(d);
    if (hit.n === "all") return cardHTML(d, { resume: "Playlist", resumePl: true });
    return cardHTML(d, { resume: "Resume Ep " + hit.n, resumeVid: hit.vid, resumeN: hit.n });
  }).join("");
  $$("#cw-row .card").forEach(bindCard);
  const tr = DRAMAS.filter(d => d.rank <= 10).sort((a, b) => a.rank - b.rank);
  $("#tr-row").innerHTML = tr.map((d, i) => cardHTML(d, { rank: i + 1 })).join("");
  $$("#tr-row .card").forEach(bindCard);
  $("#actors-row").innerHTML = ACTORS.slice(0, 8).map(actorCardHTML).join("");
  $$("#actors-row .actor-card").forEach(c => {
    c.addEventListener("click", () => openActor(c.dataset.actor));
    c.addEventListener("keydown", e => { if (e.key === "Enter") openActor(c.dataset.actor); });
  });
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
    if (card.dataset.rvid) {
      const tab = $("#modal-body .tab[data-tab='episodes']");
      if (tab) tab.click();
      const ep = ((EPISODES[card.dataset.id] || {}).eps || []).find(x => String(x.n) === card.dataset.rn);
      loadEpisode(card.dataset.rvid, card.dataset.rn, ep ? ep.d : "");
    } else if (card.dataset.rpl) {
      const tab = $("#modal-body .tab[data-tab='episodes']");
      if (tab) tab.click();
      const pl = (EPISODES[card.dataset.id] || {}).p;
      if (pl) loadPlaylist(pl);
    }
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
  if (modalOpen && byId(modalOpen)) openModal(id, true);
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
  $("#hero-badge").innerHTML = d.status === "On Air"
    ? '<i class="pulse"></i>Live • Trending'
    : '★ All-time favourite';
  $("#hero-kicker").textContent = `${d.channel} • ${d.year} • ${d.status === "On Air" ? "Trending #" + d.rank : "All-time favourite"}`;
  $("#hero-title").textContent = d.title;
  $("#hero-urdu").textContent = d.urdu;
  const heps = epCount(d.id);
  const hlat = (typeof EPISODES !== "undefined" && EPISODES[d.id] && EPISODES[d.id].latest) || "";
  $("#hero-meta").innerHTML = `${statusBadge(d)}${d.schedule ? `<span>${esc(d.schedule)}</span>` : ""}${heps ? `<span>${heps} episodes</span>` : ""}${hlat ? `<span class="views">Latest: ${esc(hlat)}</span>` : ""}${d.views ? `<span class="views">${esc(d.views)}</span>` : ""}`;
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

/* ---------- episodes ---------- */
const YT_SEARCH_NAME = { "ARY Digital": "ARY Digital", "HUM TV": "HUM TV",
  "Geo Entertainment": "Har Pal Geo", "Green Entertainment": "Green TV Entertainment" };
function ytEpURL(d, n) {
  return "https://www.youtube.com/results?search_query=" +
    encodeURIComponent(d.title + " Episode " + n + " " + (YT_SEARCH_NAME[d.channel] || d.channel));
}
function ytAllURL(d) {
  return "https://www.youtube.com/results?search_query=" +
    encodeURIComponent(d.title + " full episodes " + (YT_SEARCH_NAME[d.channel] || d.channel));
}
function episodesHTML(d) {
  const e = (typeof EPISODES !== "undefined" && EPISODES[d.id]) || null;
  if (!e) return '<p class="fine">Episode list coming soon.</p>';
  const statusLine = e.status === "ongoing"
    ? "Ongoing — " + e.count + " episodes aired so far" + (e.latest ? " · latest: " + esc(e.latest) : "")
    : "Completed — " + e.count + " episodes";
  const withV = e.eps.filter(ep => ep.v);
  const defEp = withV.length ? (e.status === "ongoing" ? withV[withV.length - 1] : withV[0]) : null;
  const defIdx = defEp ? withV.indexOf(defEp) : -1;
  const nextEp = defIdx >= 0 ? withV[defIdx + 1] || null : null;
  const playerHTML = defEp ? `
    <div class="ep-player" style="background-image:url(${d.poster});background-size:cover;background-position:center">
      <iframe id="ep-player-frame" src="https://www.youtube-nocookie.com/embed/${defEp.v}?rel=0" title="Episode player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <p class="ep-now" id="ep-now">Now playing: Episode ${defEp.n}${defEp.d ? " · " + esc(defEp.d) : ""} <a class="ep-yt" href="https://www.youtube.com/watch?v=${defEp.v}" target="_blank" rel="noopener">Open on YouTube ↗</a></p>
    <button class="btn ghost ep-next" id="ep-next" data-vid="${nextEp ? nextEp.v : ""}" data-n="${nextEp ? nextEp.n : ""}" data-d="${nextEp && nextEp.d ? esc(nextEp.d) : ""}"${nextEp ? "" : ' style="display:none"'}>Next: Episode ${nextEp ? nextEp.n : ""} ▶</button>` : "";
  const rows = e.eps.map(ep => {
    const badge = e.status === "ongoing" && ep.n === e.count
      ? '<span class="ep-badge latest">Latest</span>'
      : (e.status === "completed" && ep.n === e.count ? '<span class="ep-badge">Finale</span>' : "");
    const title = ep.t ? " — " + esc(ep.t) : "";
    const date = ep.d ? `<span class="ep-date">${esc(ep.d)}</span>` : "";
    const w = isWatched(d.id, ep.n);
    const thumb = ep.v
      ? `<span class="ep-visual"><span class="ep-num">${ep.n}</span><img class="ep-thumb" src="https://i.ytimg.com/vi/${ep.v}/hqdefault.jpg" alt="" loading="lazy" onerror="this.style.display='none'"></span>`
      : `<span class="ep-visual"><span class="ep-num">${ep.n}</span></span>`;
    const inner = `${thumb}
      <span class="ep-name">Episode ${ep.n}${title}</span>
      ${badge}${date}`;
    if (ep.v) {
      return `<button class="ep-row${defEp && ep.n === defEp.n ? " active" : ""}${w ? " watched" : ""}" data-vid="${ep.v}" data-n="${ep.n}" data-d="${esc(ep.d || "")}">${inner}
      <span class="ep-check${w ? " on" : ""}" role="button" tabindex="0" title="Mark as watched">✓</span>
      <span class="ep-play" aria-label="Play episode">▶</span></button>`;
    }
    return `<a class="ep-row${w ? " watched" : ""}" data-n="${ep.n}" href="${ytEpURL(d, ep.n)}" target="_blank" rel="noopener">${inner}
      <span class="ep-check${w ? " on" : ""}" role="button" tabindex="0" title="Mark as watched">✓</span>
      <span class="ep-play" aria-label="Watch episode">↗</span></a>`;
  }).join("");
  const playAll = e.p
    ? `<button class="btn watch ep-all" id="ep-playall" data-pl="${e.p}">▶ Play all episodes</button>`
    : `<a class="btn watch ep-all" href="${ytAllURL(d)}" target="_blank" rel="noopener">▶ Watch all on YouTube</a>`;
  return `${playerHTML}
    <div class="ep-head">
      <p>${statusLine}</p>
      ${playAll}
    </div>
    <div class="ep-tools">
      <span class="ep-watched-count">${watchedCount(d.id)} of ${e.count} watched</span>
      <button class="btn ghost ep-markall" id="ep-markall">${watchedCount(d.id) >= e.count ? "Clear watched" : "✓ Mark all watched"}</button>
    </div>
    <div class="ep-filter-wrap"><input class="ep-filter" type="search" placeholder="Find an episode… try a number or a date" aria-label="Find an episode"><span class="ep-filter-count">${e.eps.length} episodes</span></div>
    <p class="ep-nomatch" hidden>No episodes match that search.</p>
    <div class="ep-list">${rows}</div>
    <p class="fine">Episodes play right here, from the channel's official YouTube uploads — this site does not host episodes. A row marked ↗ has no official video linked yet, so it opens a YouTube search instead. Air dates are shown only where verified. Episode list checked 7 Nov 2026.</p>`;
}

function updateNextBtn() {
  const nb = $("#ep-next");
  if (!nb || !modalOpen) return;
  const e = (typeof EPISODES !== "undefined" && EPISODES[modalOpen]) || null;
  if (!e) { nb.style.display = "none"; return; }
  const f = $("#ep-player-frame");
  const cur = f ? ((f.src.match(/embed\/([^?&#]+)/) || [])[1] || "") : "";
  const idx = e.eps.findIndex(ep => ep.v === cur);
  const nx = idx >= 0 ? e.eps.slice(idx + 1).find(ep => ep.v) : null;
  if (!nx) { nb.style.display = "none"; return; }
  nb.style.display = "";
  nb.dataset.vid = nx.v; nb.dataset.n = nx.n; nb.dataset.d = nx.d || "";
  nb.textContent = "Next: Episode " + nx.n + " ▶";
}
function loadEpisode(vid, n, d) {
  const f = $("#ep-player-frame");
  if (!f) return;
  if (modalOpen && byId(modalOpen)) saveContinue(modalOpen, n, vid);
  f.src = "https://www.youtube-nocookie.com/embed/" + vid + "?autoplay=1&rel=0";
  const now = $("#ep-now");
  if (now) now.innerHTML = "Now playing: Episode " + n + (d ? " · " + esc(d) : "") +
    ' <a class="ep-yt" href="https://www.youtube.com/watch?v=' + vid + '" target="_blank" rel="noopener">Open on YouTube ↗</a>';
  $$("#modal-body .ep-row").forEach(r => r.classList.toggle("active", r.dataset.vid === vid));
  f.scrollIntoView({ behavior: "smooth", block: "nearest" });
  updateNextBtn();
}
function loadPlaylist(pl) {
  const f = $("#ep-player-frame");
  if (!f) return;
  if (modalOpen && byId(modalOpen)) saveContinue(modalOpen, "all", null);
  const nb = $("#ep-next");
  if (nb) nb.style.display = "none";
  f.src = "https://www.youtube-nocookie.com/embed?listType=playlist&list=" + pl + "&autoplay=1&rel=0";
  const now = $("#ep-now");
  if (now) now.innerHTML = 'Now playing: full playlist — all episodes, in order.' +
    ' <a class="ep-yt" href="https://www.youtube.com/playlist?list=' + pl + '" target="_blank" rel="noopener">Open playlist on YouTube ↗</a>';
  $$("#modal-body .ep-row").forEach(r => r.classList.remove("active"));
  f.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ---------- share + deep links ---------- */
function shareURL(d) {
  const base = location.protocol.indexOf("http") === 0
    ? location.origin + location.pathname
    : "https://usmankalera-dev.github.io/pakistani-dramas/";
  return base + "#" + d.id;
}
function fallbackCopy(t, done) {
  const ta = document.createElement("textarea");
  ta.value = t; ta.style.position = "fixed"; ta.style.opacity = "0";
  document.body.appendChild(ta); ta.select();
  try { document.execCommand("copy"); done(); } catch (e) { toast("Copy failed — long-press the link"); }
  document.body.removeChild(ta);
}
function copyText(t) {
  const done = () => toast("Link copied ✓");
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(t).then(done, () => fallbackCopy(t, done));
  } else fallbackCopy(t, done);
}

/* ---------- modal ---------- */
let modalOpen = null;
function openModal(id, keep) {
  const d = byId(id);
  if (!d) return;
  modalOpen = id;
  const ch = CHANNELS[d.channel];
  const same = DRAMAS.filter(x => x.channel === d.channel && x.id !== id).slice(0, 3);
  const similar = DRAMAS.filter(x => x.id !== id && x.cast.some(c => d.cast.includes(c)) && !same.some(s => s.id === x.id))
    .map(x => ({ x, shared: x.cast.filter(c => d.cast.includes(c)).length }))
    .sort((a, b) => b.shared - a.shared || a.x.rank - b.x.rank)
    .slice(0, 3).map(o => o.x);
  $("#modal-body").innerHTML = `
    <div class="modal-poster"><img src="${d.poster}" alt="${esc(d.title)} poster" onerror="this.closest('.modal-poster').classList.add('noimg');this.remove();">
      <span class="poster-title">${esc(d.title)}<small>${esc(d.urdu)}</small></span></div>
    <div class="modal-info">
      <h2>${esc(d.title)}</h2>
      <p class="urdu big">${esc(d.urdu)}</p>
      <div class="modal-meta">${statusBadge(d)}<span class="chan" style="--c:${chanColor(d.channel)}"><img class="chan-logo" src="${ch.logo}" alt="">${esc(d.channel)}</span><span>${d.year}</span><span>${esc(d.genre)}</span></div>
      <div class="tabs" role="tablist">
        <button class="tab active" data-tab="details">Details</button>
        <button class="tab" data-tab="episodes">Episodes <span class="ep-count">${epCount(d.id)}</span></button>
      </div>
      <div class="tab-pane" id="tab-details">
        ${d.schedule ? `<p class="line"><b>${d.status === "On Air" ? "Airs" : "Aired"}:</b> ${esc(d.schedule)} (Pakistan time)</p>` : ""}
        ${d.cast.length ? `<p class="line"><b>Cast:</b> ${d.cast.map(esc).join(", ")}</p>` : ""}
        ${d.views ? `<p class="line"><b>Buzz:</b> ${esc(d.views)}</p>` : ""}
        ${d.status === "On Air" && nextAir(d) ? `<p class="line"><b>Next episode:</b> ${fmtAir(nextAir(d))}</p>` : ""}
        <div class="rate-row"><span>Your rating:</span><span class="stars" id="modal-stars">${[1, 2, 3, 4, 5].map(n => `<button class="star${(ratings[d.id] || 0) >= n ? " on" : ""}" data-n="${n}" aria-label="${n} stars">★</button>`).join("")}</span><span class="rate-label" id="rate-label">${ratings[d.id] ? ratings[d.id] + "/5" : "Tap a star"}</span></div>
        <p class="syn">${esc(d.synopsis)}</p>
        <div class="modal-actions">
          <a class="btn watch" href="${ch.yt}" target="_blank" rel="noopener">▶ Watch on YouTube — ${esc(d.channel)}</a>
          <button class="btn ghost" id="modal-list">${myList.includes(d.id) ? "✓ In My List" : "+ My List"}</button>
          ${d.status === "On Air" ? `<button class="btn ghost" id="modal-follow">${isFollowing(d.id) ? "✓ Following" : "🔔 Follow"}</button>` : ""}
          <button class="btn ghost" id="modal-share">↗ Share</button>
          <a class="btn ghost" id="modal-wa" href="https://wa.me/?text=${encodeURIComponent("Watch " + d.title + " on PakDrama — " + shareURL(d))}" target="_blank" rel="noopener">WhatsApp</a>
        </div>
        <p class="fine">Episodes air on TV first, then on the channel's official YouTube. This site lists dramas — it does not host episodes.</p>
        ${same.length ? `<h4><img class="chan-logo" src="${ch.logo}" alt=""> More on ${esc(d.channel)}</h4><div class="modal-more">${same.map(x => `<button class="mini" data-id="${x.id}"><img src="${x.poster}" alt="" loading="lazy" onerror="this.remove();"><span>${esc(x.title)}</span></button>`).join("")}</div>` : ""}
        ${similar.length ? `<h4>🎭 More like this</h4><div class="modal-more">${similar.map(x => `<button class="mini" data-id="${x.id}"><img src="${x.poster}" alt="" loading="lazy" onerror="this.remove();"><span>${esc(x.title)}</span></button>`).join("")}</div>` : ""}
      </div>
      <div class="tab-pane" id="tab-episodes" hidden>${episodesHTML(d)}</div>
    </div>`;
  $("#modal").classList.add("open");
  document.body.style.overflow = "hidden";
  $("#modal-list").onclick = () => toggleList(d.id);
  const fo = $("#modal-follow");
  if (fo) fo.onclick = () => { toggleFollow(d.id); fo.textContent = isFollowing(d.id) ? "✓ Following" : "🔔 Follow"; };
  $$("#modal-stars .star").forEach(s => s.addEventListener("click", () => {
    ratings[d.id] = Number(s.dataset.n);
    saveRatings();
    $$("#modal-stars .star").forEach(x => x.classList.toggle("on", Number(x.dataset.n) <= ratings[d.id]));
    const rl = $("#rate-label");
    if (rl) rl.textContent = ratings[d.id] + "/5";
    renderRows();
    renderGrid();
  }));
  const sh = $("#modal-share");
  if (sh) sh.onclick = () => copyText(shareURL(d));
  try { history.replaceState(null, "", "#" + id); } catch (e) {}
  $$("#modal-body .tab").forEach(t => t.addEventListener("click", () => {
    $$("#modal-body .tab").forEach(x => x.classList.toggle("active", x === t));
    $("#tab-details").hidden = t.dataset.tab !== "details";
    $("#tab-episodes").hidden = t.dataset.tab !== "episodes";
    if (t.dataset.tab === "episodes") {
      const act = $("#tab-episodes .ep-row.active");
      if (act) act.scrollIntoView({ block: "nearest" });
    }
  }));
  $$("#modal-body .mini").forEach(b => b.addEventListener("click", () => openModal(b.dataset.id)));
  if (!keep) $("#modal").scrollTop = 0;
}
function closeModal() {
  modalOpen = null;
  try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
  $("#modal").classList.remove("open");
  document.body.style.overflow = "";
}

/* ---------- init ---------- */
function init() {
  renderRows();
  renderGrid();
  renderTonight();
  renderNewThisWeek();
  renderSchedule();
  renderBell();
  renderStats();
  $("#actor-search").addEventListener("input", () => renderGrid());
  $("#surprise").addEventListener("click", () => {
    const d = DRAMAS[Math.floor(Math.random() * DRAMAS.length)];
    openModal(d.id);
    const e = EPISODES[d.id];
    const withV = e ? e.eps.filter(ep => ep.v) : [];
    const ep = withV.length ? (e.status === "ongoing" ? withV[withV.length - 1] : withV[0]) : null;
    if (ep) {
      const tab = $("#modal-body .tab[data-tab='episodes']");
      if (tab) tab.click();
      loadEpisode(ep.v, ep.n, ep.d);
    }
  });
  $$(".foot-nav").forEach(b => b.addEventListener("click", () => {
    state.view = b.dataset.view;
    state.query = ""; $("#search").value = "";
    renderGrid();
    $("#all").scrollIntoView({ behavior: "smooth" });
  }));
  const fs = $("#foot-share");
  if (fs) fs.onclick = () => copyText(location.origin + location.pathname);
  const tl = $("#top-logo");
  if (tl) tl.addEventListener("click", () => {
    state.view = "browse";
    state.query = ""; $("#search").value = "";
    renderGrid();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
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
    $("#search-clear").style.display = state.query ? "" : "none";
    if (state.view === "mylist" || state.view === "trending" || state.view === "onair" || state.view === "actors") { state.view = "browse"; }
    renderGrid();
  });
  $("#search-clear").addEventListener("click", () => {
    $("#search").value = "";
    state.query = "";
    $("#search-clear").style.display = "none";
    renderGrid();
    $("#search").focus();
  });
  window.addEventListener("scroll", () => {
    $("#to-top").classList.toggle("show", window.scrollY > 600);
  }, { passive: true });
  $("#to-top").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  $("#bell").addEventListener("click", e => { e.stopPropagation(); $("#bell-drop").classList.toggle("open"); });
  document.addEventListener("click", e => { if (!e.target.closest("#bell-wrap")) $("#bell-drop").classList.remove("open"); });
  $("#modal-close").addEventListener("click", closeModal);
  $("#modal").addEventListener("click", e => { if (e.target.id === "modal") closeModal(); });
  // in-site episode player: rows with a video id load it into the player
  $("#modal-body").addEventListener("click", e => {
    const chk = e.target.closest(".ep-check");
    if (chk) {
      e.preventDefault();
      const row = chk.closest(".ep-row");
      if (row && modalOpen) {
        const n = Number(row.dataset.n);
        setWatched(modalOpen, n, !isWatched(modalOpen, n));
        refreshWatchedUI(modalOpen);
      }
      return;
    }
    const nx = e.target.closest("#ep-next");
    if (nx && nx.dataset.vid) {
      const f = $("#ep-player-frame");
      const cur = f ? ((f.src.match(/embed\/([^?&#]+)/) || [])[1] || "") : "";
      const eps = ((EPISODES[modalOpen] || {}).eps || []);
      const curEp = eps.find(ep => ep.v === cur);
      if (curEp && modalOpen) { setWatched(modalOpen, curEp.n, true); refreshWatchedUI(modalOpen); }
      loadEpisode(nx.dataset.vid, nx.dataset.n, nx.dataset.d);
      return;
    }
    const ma = e.target.closest("#ep-markall");
    if (ma && modalOpen) {
      const eps = ((EPISODES[modalOpen] || {}).eps || []);
      const allDone = eps.length && eps.every(ep => isWatched(modalOpen, ep.n));
      eps.forEach(ep => setWatched(modalOpen, ep.n, !allDone));
      refreshWatchedUI(modalOpen);
      return;
    }
    const row = e.target.closest(".ep-row[data-vid]");
    if (row) { loadEpisode(row.dataset.vid, row.dataset.n, row.dataset.d); return; }
    const all = e.target.closest("#ep-playall");
    if (all) loadPlaylist(all.dataset.pl);
  });
  // episode filter inside the modal
  $("#modal-body").addEventListener("input", e => {
    if (!e.target.classList.contains("ep-filter")) return;
    const q = e.target.value.trim().toLowerCase();
    const rows = $$("#tab-episodes .ep-row");
    let shown = 0;
    rows.forEach(r => {
      const hit = !q || r.textContent.toLowerCase().includes(q);
      r.style.display = hit ? "" : "none";
      if (hit) shown++;
    });
    const nm = $("#tab-episodes .ep-nomatch");
    if (nm) nm.hidden = shown !== 0;
    const cnt = $("#tab-episodes .ep-filter-count");
    if (cnt) cnt.textContent = q ? shown + " of " + rows.length + " episodes" : rows.length + " episodes";
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
  $("#menu-btn").addEventListener("click", () => $("#sidebar").classList.add("open"));
  $("#drawer-close").addEventListener("click", closeDrawer);
  $("#scrim").addEventListener("click", closeDrawer);
  const h = (location.hash || "").slice(1);
  if (h && byId(h)) openModal(h);
}
function syncChips() { $$(".chip").forEach(c => c.classList.toggle("active", c.dataset.channel === state.channel)); }
function closeDrawer() { $("#sidebar").classList.remove("open"); }

document.addEventListener("DOMContentLoaded", init);
