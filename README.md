# Website Kandidat RT/RW Cluster Sriwijaya

Static website untuk menampilkan profil kandidat RT/RW Cluster Sriwijaya, Perumahan Darmawangsa Bekasi.

## Edit Data

Data utama ada di `data.js`.

- Ubah informasi panitia dan WhatsApp di bagian `site`.
- Ubah daftar kandidat di bagian `candidates`.
- Ganti foto kandidat dengan file gambar di folder `assets`, lalu ubah path `photo`.
- Ubah FAQ di bagian `faqs`.
- Ubah jadwal di bagian `timeline`.
- Ubah panduan pemilih di bagian `voterGuide`.

## Import Data dari Google Form

Untuk tahap ini aplikasi belum memakai backend atau Google Sheets API. Alur yang disiapkan:

1. Response Google Form masuk ke Google Sheets.
2. Panitia export response sebagai CSV.
3. CSV mengikuti contoh `samples/kandidat-google-form.csv`.
4. Data CSV dikonversi ke bagian `candidates` di `data.js`.

Kolom CSV yang disiapkan:

| Kolom CSV | Field di `data.js` | Catatan |
| --- | --- | --- |
| `nama` | `name` | Nama lengkap kandidat. |
| `kategori` | `category` | Isi `RT` atau `RW`. |
| `rt_rw` | `rtRw`, `role`, `filter` | Contoh: `RT 01`, `RT 02`, atau `RW`. |
| `blok_area` | `area` | Wilayah/blok yang diwakili. |
| `alamat_rumah` | `house` | Ditampilkan di modal profil. |
| `profesi` | `profession` | Ditampilkan di modal profil. |
| `foto` | `photo` | Path file lokal, contoh `assets/portrait-arief.svg`. |
| `tagline` | `tagline` | Kalimat pendek di kartu kandidat. |
| `ringkasan` | `summary` | Ringkasan profil di modal. |
| `visi` | `vision` | Visi kandidat. |
| `misi` | `missions` | Pisahkan beberapa item dengan tanda `|`. |
| `program` | `programs` | Pisahkan beberapa item dengan tanda `|`. |
| `pengalaman` | `experience` | Pisahkan beberapa item dengan tanda `|`. |
| `quote` | `quote` | Kutipan kandidat. |
| `status_verifikasi` | `verificationStatus` | Contoh: `Belum diverifikasi`, `Terverifikasi panitia`, atau `Final`. |

Jika beberapa field belum lengkap, halaman tetap memakai fallback seperti "Informasi sedang dilengkapi panitia" supaya tampilan tidak rusak.

Foto kandidat tahap awal belum di-upload otomatis dari Google Form. Simpan file foto di folder `assets`, lalu isi kolom `foto` dengan path file tersebut.

## Edit Panduan Pemilih

Bagian panduan pemilih ada di `voterGuide` dalam `data.js`.

- `statusLabel`: status informasi, contoh `Informasi sementara`.
- `location`: lokasi pemilihan, atau isi `Menunggu keputusan panitia`.
- `time`: tanggal/jam pemilihan, atau isi `Menunggu keputusan panitia`.
- `eligibility`: daftar syarat pemilih.
- `documents`: daftar dokumen atau informasi yang perlu disiapkan.
- `rules`: aturan voting, termasuk `1 suara untuk setiap KK`.
- `steps`: alur pemilih saat datang ke lokasi.
- `notes`: catatan tambahan dari panitia.

Aturan awal yang sudah dimasukkan:

- 1 suara untuk setiap KK.
- Hasil voting ditentukan berdasarkan suara terbanyak dari pemilih yang hadir.
- Suara diberikan langsung saat pemilihan dan tidak dititipkan.

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
