# PakDrama — Pakistani Dramas, All in One Place

A Netflix-style catalogue of Pakistani dramas, in the same spirit as
[Pakistan Fast News](https://usmankalera-dev.github.io/pakistan-fast-news/).

- **20 real dramas** — the trending shows of Oct–Nov 2026 (Dar-e-Nijaat, Kafeel,
  Shar Pasand, Bas Tera Saath Ho, Nashtar, Zanjeerain, Mitti De Baway, Humrahi,
  Meri Zindagi Hai Tu, Sanwal Yaar Piya…) plus all-time favourites
  (Kabhi Main Kabhi Tum, Tere Bin, Sher, Meem Se Mohabbat, Jaan Nisar, Ishq Murshid).
- **Cast, channel, year, status and TV timings** — grounded in Oct–Nov 2026
  trending reports (Neemopani, Filmibeat). No invented ratings or episode counts.
- **Full episode lists — 704 episodes across all 20 dramas** (checked 7 Nov 2026).
  Every drama's detail popup has an **Episodes** tab: every episode number,
  air date where verified (TVmaze, Wikipedia, Moviefone, harpalgeo.tv, official
  YouTube descriptions), a Latest/Finale badge. **Episodes play inside the site:**
  703 of 704 episodes have a verified official YouTube video id and open in an
  in-site player (all 20 dramas covered — the only row still opening YouTube is
  Mohabbat Episode 13, whose official video (5lFlC_8gtZE) is private on YouTube,
  confirmed 7 Nov 2026, so it stays a search link until the channel publishes
  a public upload),
  with a "Play all episodes" button that plays the channel's official playlist.
  Rows without a verified video (marked ↗) open a YouTube search on the
  channel's official uploads instead. Ongoing shows list the episodes aired so far.
- **Search, channel filter, sort** (Popular / Newest / A–Z / Recently updated),
  **My List** (saved in the browser), drama detail popups, hero switcher,
  notification panel with the week's TV timings.
- **Continue Watching is real now** — the episodes you actually play are saved
  in the browser with a Resume chip (empty state falls back to curated picks).
  **Episode filter** inside the Episodes tab (find by number or date).
  **Share** any drama (copy link / WhatsApp) — shared links open that drama
  directly (`#drama-id`). On-Air cards show a **New Ep** chip.
- **Watched episodes** — tick any episode as watched (saved in the browser);
  cards show real progress (`12/39 watched` with a progress bar) and the
  Episodes tab has a **Mark all watched / Clear watched** button. A
  **Next episode** button under the player moves you on — and marks the
  episode you just finished as watched.
- **Episode thumbnails** — every episode row shows its official YouTube
  thumbnail (lazy-loaded; the episode number shows if a thumb can't load).
  **🆕 New This Week** — the 5 ongoing dramas sorted by latest air date;
  clicking a card plays its newest episode. The **hero** now drifts slowly
  and shows the episode count + latest episode. Cards zoom on hover, and
  section headings carry a red accent bar.
- **📅 This Week on TV** — a 7-day schedule strip from the verified air days
  (today highlighted; tap a drama to open it). **🔔 Follow** an ongoing drama
  and the bell shows its next airing. The modal suggests **🎭 More like this**
  from shared cast, and the Actors directory has a **search box**.
- **⭐ Your ratings** — rate any drama 1–5 stars in its modal (saved in your
  browser, shown on its card, with a **Top rated** sort). **🎲 Surprise me**
  in the topbar opens a random drama. **📊 My Stats** in My List shows your
  episodes watched, dramas fully watched and ≈ hours. Ongoing dramas show
  their **next episode** date in the modal.
- **🎲 Surprise me fixed + auto-play** — it now opens a random drama AND
  starts playing its episode (latest for ongoing, Ep 1 for completed).
  Assets are versioned (`?v=`) so a new deploy never serves a stale cached
  file. **Header** has the PakDrama logo in the topbar on phones (tap it to
  go home) plus a red accent line. **Footer** is now 3 columns — About +
  Share, Browse links, Channels — with a live stats line.
- **Real posters** (downloaded from official channel art and poster sources),
  stored locally in `posters/`.
- **Watch links go to the channels' official YouTube accounts**
  (ARY Digital, HUM TV, Har Pal Geo, Green Entertainment). This site lists
  dramas — it does not host episodes.

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000/
```

## Deploy

Static site — any static host works. On GitHub Pages it lives at
`https://usmankalera-dev.github.io/pakistani-dramas/`.

Made by Usman Kalera, November 2026.
