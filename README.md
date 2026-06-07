# Website Kandidat RT/RW Cluster Sriwijaya

Static website untuk menampilkan profil kandidat RT/RW Cluster Sriwijaya, Perumahan Darmawangsa Bekasi.

## Edit Data

Data utama ada di `data.js`.

- Ubah informasi panitia dan WhatsApp di bagian `site`.
- Ubah daftar kandidat di bagian `candidates`.
- Ganti foto kandidat dengan file gambar di folder `assets`, lalu ubah path `photo`.
- Ubah FAQ di bagian `faqs`.
- Ubah jadwal di bagian `timeline`.

## Preview Lokal

Bisa langsung buka `index.html` di browser.

Alternatif via local server:

```bash
python3 -m http.server 4173
```

Lalu buka `http://localhost:4173`.

## Publish ke Vercel

1. Push folder ini ke GitHub.
2. Buka Vercel dan pilih `Add New Project`.
3. Import repository ini.
4. Framework preset: `Other`.
5. Build command: kosongkan.
6. Output directory: `.` atau biarkan default jika Vercel mendeteksi static site.
7. Deploy.
