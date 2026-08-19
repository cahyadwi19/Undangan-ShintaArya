# Undangan Digital — Khoirul Nisa & Indra Jaya

Undangan pernikahan digital berbasis React + Vite + Tailwind CSS v4, dengan
tema **modern dark gold**, animasi transisi (Framer Motion), dan fitur
ucapan tamu real-time menggunakan **Supabase**.

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (animasi & transisi)
- Supabase (database ucapan tamu + realtime subscription)

## Menjalankan Project

1. Install dependency:
   ```bash
   npm install
   ```

2. Siapkan file `.env` di root project (lihat `.env.example`):
   ```
   VITE_SUPABASE_URL=isi-url-project-supabase-kamu
   VITE_SUPABASE_ANON_KEY=isi-anon-key-supabase-kamu
   ```

3. Jalankan dev server:
   ```bash
   npm run dev
   ```

## Setup Database Supabase

Tabel `ucapan_tamu` perlu kolom: `id`, `nama`, `kehadiran`, `ucapan`,
`created_at` (timestamptz, default `now()`).

Jika tabel sudah ada tapi belum punya `created_at`, RLS policy, atau
realtime, jalankan `supabase/setup.sql` di SQL Editor Supabase kamu.

Tanpa langkah ini, fitur "tampilkan ucapan secara real-time" tidak akan
berjalan (insert tetap bisa, tapi list tidak akan ter-update otomatis).

## Struktur Komponen

```
src/
├── components/
│   ├── Cover.jsx        # Halaman sampul "Buka Undangan"
│   ├── MusicPlayer.jsx  # Tombol kontrol musik (sinkron dengan Cover)
│   ├── Hero.jsx         # Section nama mempelai utama
│   ├── Countdown.jsx    # Hitung mundur ke hari-H
│   ├── Couple.jsx       # Profil kedua mempelai
│   ├── Story.jsx        # Timeline kisah cinta
│   ├── Gallery.jsx      # Galeri foto + lightbox
│   ├── Event.jsx        # Detail Akad & Resepsi
│   ├── Maps.jsx         # Embed Google Maps lokasi acara
│   ├── Gift.jsx         # Info rekening + tombol salin
│   ├── RSVP.jsx         # Form ucapan + daftar ucapan realtime (Supabase)
│   └── Reveal.jsx       # Wrapper animasi scroll-reveal (dipakai di semua section)
├── context/
│   ├── audioContextDef.js  # Definisi React Context untuk audio
│   ├── AudioContext.jsx    # Provider (state play/pause musik)
│   └── useAudio.js         # Hook untuk mengakses AudioContext
├── hooks/
│   └── useCountdown.js
└── services/
    └── supabase.js       # Inisialisasi Supabase client (pakai env var)
```

## Catatan Perbaikan dari Versi Sebelumnya

- Nama mempelai pria/wanita pada `Couple.jsx` sudah dibetulkan (sebelumnya tertukar).
- Bug `Gallery.jsx` yang memanggil `gallery4.jpg` (file tidak ada) sudah dihapus.
- Audio di `Cover.jsx` dan `MusicPlayer.jsx` sebelumnya berjalan independen
  (tidak sinkron) — sekarang menggunakan satu `AudioContext` bersama.
- Supabase key sebelumnya hardcode di kode — sekarang dipindah ke `.env`
  (lebih aman untuk version control, walau key ini adalah anon/publishable key).
- File `services/googleSheet.js` (legacy, sudah tidak dipakai) dihapus.
- RSVP sebelumnya hanya bisa mengirim ucapan, sekarang juga menampilkan
  daftar ucapan tamu secara realtime.
