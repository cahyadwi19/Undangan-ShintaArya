-- Jalankan ini di Supabase SQL Editor HANYA jika kolom created_at / realtime belum aktif.
-- Skip kalau tabel ucapan_tamu kamu sudah punya kolom created_at (timestamp) dan RLS policy insert+select.

-- 1. Tambah kolom created_at kalau belum ada (aman dijalankan walau sudah ada, tidak akan error duplikat karena IF NOT EXISTS)
alter table ucapan_tamu
  add column if not exists created_at timestamptz default now();

-- 2. Aktifkan Row Level Security (kalau belum)
alter table ucapan_tamu enable row level security;

-- 3. Policy: siapa pun (anon) boleh INSERT ucapan baru
create policy if not exists "Allow public insert"
  on ucapan_tamu
  for insert
  to anon
  with check (true);

-- 4. Policy: siapa pun (anon) boleh SELECT / membaca semua ucapan
create policy if not exists "Allow public read"
  on ucapan_tamu
  for select
  to anon
  using (true);

-- 5. Aktifkan Realtime untuk tabel ini (supaya ucapan baru langsung muncul tanpa refresh)
alter publication supabase_realtime add table ucapan_tamu;
