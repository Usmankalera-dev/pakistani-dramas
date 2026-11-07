# PakDrama — Pakistani Dramas, All in One Place

A Netflix-style catalogue of Pakistani dramas, in the same spirit as
[Pakistan Fast News](https://usmankalera-dev.github.io/pakistan-fast-news/).

- **20 real dramas** — the trending shows of Oct–Nov 2026 (Dar-e-Nijaat, Kafeel,
  Shar Pasand, Bas Tera Saath Ho, Nashtar, Zanjeerain, Mitti De Baway, Humrahi,
  Meri Zindagi Hai Tu, Sanwal Yaar Piya…) plus all-time favourites
  (Kabhi Main Kabhi Tum, Tere Bin, Sher, Meem Se Mohabbat, Jaan Nisar, Ishq Murshid).
- **Cast, channel, year, status and TV timings** — grounded in Oct–Nov 2026
  trending reports (Neemopani, Filmibeat). No invented ratings or episode counts.
- **Search, channel filter, sort** (Popular / Newest / A–Z), **My List**
  (saved in the browser), drama detail popups, hero switcher, notification panel
  with the week's TV timings.
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
