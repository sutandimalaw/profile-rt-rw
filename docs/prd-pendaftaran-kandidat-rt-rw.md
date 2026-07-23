# PRD Pendaftaran Kandidat RT/RW Cluster Sriwijaya

## 1. Ringkasan Produk

Fitur pendaftaran kandidat RT/RW digunakan untuk mengumpulkan data warga yang bersedia menjadi kandidat RT atau RW Cluster Sriwijaya. Untuk MVP, pendaftaran dilakukan melalui Google Form. Data masuk ke Google Sheets, diverifikasi panitia, lalu dapat diekspor sebagai CSV untuk dimasukkan ke website profil kandidat.

Tujuan utama fitur ini adalah membuat proses pendataan kandidat lebih rapi, seragam, mudah diverifikasi, dan siap dipublikasikan ke website.

## 2. Tujuan

- Memudahkan warga yang ingin mendaftar sebagai kandidat RT/RW.
- Membantu panitia mengumpulkan data kandidat dengan format yang konsisten.
- Mengurangi input manual yang tercecer lewat WhatsApp atau chat pribadi.
- Menyiapkan data kandidat agar mudah dipindahkan ke `data.js` atau CSV aplikasi.
- Memberi status verifikasi sebelum kandidat dipublikasikan.

## 3. Pengguna

### Kandidat

Warga yang mendaftarkan dirinya sendiri sebagai calon RT/RW.

### Panitia

Pihak yang memverifikasi data, mengecek kelengkapan, menghubungi kandidat jika ada koreksi, dan menentukan kandidat final.

### Warga

Melihat kandidat yang sudah diverifikasi dan dipublikasikan di website.

## 4. Scope MVP

### Masuk Scope

- Pendaftaran kandidat lewat Google Form.
- Kandidat mendaftar untuk dirinya sendiri.
- Data otomatis masuk Google Sheets.
- Panitia memverifikasi data kandidat.
- Kandidat yang lolos verifikasi dapat dipublikasikan ke website.
- Status kandidat: `Belum diverifikasi`, `Terverifikasi panitia`, dan `Final`.

### Tidak Masuk Scope

- Login kandidat.
- Dashboard admin custom.
- Upload foto otomatis ke website.
- Voting online.
- Integrasi Google Sheets API langsung.

## 5. Alur Utama

1. Panitia membagikan link Google Form pendaftaran kandidat.
2. Kandidat mengisi data diri, kategori pencalonan, visi, misi, program, dan persetujuan publikasi.
3. Response masuk ke Google Sheets.
4. Panitia mengecek kelengkapan dan validitas data.
5. Panitia memberi status verifikasi.
6. Data kandidat diekspor sebagai CSV.
7. Data kandidat dipindahkan ke website profil kandidat.
8. Warga melihat kandidat yang sudah siap dipublikasikan.

## 6. Field Google Form

### Field Wajib untuk Kandidat

- Nama lengkap.
- Nomor HP/WhatsApp.
- Kategori pencalonan: `RT` atau `RW`.
- RT/RW yang dituju.
- Blok atau area.
- Alamat rumah.
- Profesi.
- Ringkasan profil.
- Visi.
- Misi.
- Program prioritas.
- Pernyataan kesediaan menjadi kandidat.
- Persetujuan data profil dipublikasikan di website.

### Field Opsional untuk Kandidat

- Pengalaman organisasi atau kegiatan warga.
- Quote kandidat.
- Foto kandidat.
- Catatan tambahan untuk panitia.

### Field Internal Panitia

- Status verifikasi.
- Catatan verifikasi.
- Tanggal verifikasi.
- Nama verifikator.

## 7. Status Kandidat

- `Belum diverifikasi`: data sudah masuk, tetapi belum dicek atau masih perlu dilengkapi.
- `Terverifikasi panitia`: data sudah dicek dan kandidat dapat masuk daftar publikasi.
- `Final`: kandidat sudah disahkan sebagai kandidat final oleh panitia.

## 8. Aturan Validasi

- Satu kandidat hanya boleh mengirim satu pendaftaran aktif.
- Kandidat wajib merupakan warga atau KK yang terdaftar di Cluster Sriwijaya.
- Kandidat wajib mendaftar atas nama dirinya sendiri.
- Kandidat wajib menyetujui publikasi data profil.
- Foto boleh menyusul jika belum siap.
- Data yang belum lengkap diberi status `Belum diverifikasi`.
- Kandidat hanya tampil di website setelah disetujui panitia.

## 9. Syarat Pendaftaran Kandidat

Website perlu menampilkan section publik `Syarat Pendaftaran Kandidat RT/RW` agar calon kandidat bisa mengecek kelayakan awal sebelum mengisi Google Form. Bahasa section menggunakan `Cek Kelayakan Pendaftaran` agar tetap netral dan tidak menghakimi.

Checklist kelayakan awal:

- Warga atau KK terdaftar di Cluster Sriwijaya.
- Berdomisili di area RT/RW yang sesuai dengan posisi pencalonan.
- Bersedia mendaftar atas nama sendiri.
- Bersedia data profil dipublikasikan di website informasi warga.
- Bersedia hadir atau berkoordinasi saat verifikasi panitia.
- Bersedia menjalankan tugas sosial lingkungan jika terpilih.
- Tidak sedang mewakili lebih dari satu posisi pencalonan aktif.

Catatan posisi:

- Kandidat RT fokus pada pelayanan warga di wilayah RT atau blok terkait.
- Kandidat RW perlu siap koordinasi lintas RT dan isu bersama cluster.

Catatan wajib ditampilkan:

- Checklist ini untuk membantu calon kandidat menilai kesiapan awal.
- Keputusan final tetap mengikuti verifikasi panitia.

## 10. Format Data untuk Website

Data Google Sheets perlu disiapkan agar cocok dengan format kandidat di website:

- `nama` menjadi `name`.
- `kategori` menjadi `category`.
- `rt_rw` menjadi `rtRw`, `role`, dan `filter`.
- `blok_area` menjadi `area`.
- `alamat_rumah` menjadi `house`.
- `profesi` menjadi `profession`.
- `foto` menjadi `photo`.
- `tagline` menjadi `tagline`.
- `ringkasan` menjadi `summary`.
- `visi` menjadi `vision`.
- `misi` menjadi `missions`.
- `program` menjadi `programs`.
- `pengalaman` menjadi `experience`.
- `quote` menjadi `quote`.
- `status_verifikasi` menjadi `verificationStatus`.

Untuk field berisi banyak item seperti misi, program, dan pengalaman, gunakan tanda `|` sebagai pemisah antar item.

## 11. Kriteria Sukses

- Panitia punya satu sumber data kandidat yang rapi di Google Sheets.
- Semua kandidat mengisi field penting dengan format yang sama.
- Data kandidat bisa diekspor ke CSV tanpa banyak edit manual.
- Warga hanya melihat kandidat yang sudah diverifikasi atau final.
- Website tetap bisa berjalan walaupun beberapa field kandidat belum lengkap.
- Calon kandidat bisa memahami syarat pendaftaran sebelum mengisi Google Form.

## 12. Risiko dan Mitigasi

- Kandidat mengisi data tidak lengkap: gunakan status `Belum diverifikasi` dan catatan verifikasi.
- Kandidat mengirim lebih dari satu pendaftaran: panitia memakai nomor WhatsApp dan alamat rumah untuk cek duplikasi.
- Foto belum siap: website memakai placeholder sampai foto tersedia.
- Data berubah setelah publikasi: panitia memperbarui Google Sheets dan `data.js` sebelum publish ulang.

## 13. Asumsi

- MVP memakai Google Form, bukan form custom di website.
- Kandidat mendaftarkan dirinya sendiri.
- Website tetap static HTML/CSS/JS.
- Google Sheets digunakan sebagai tempat kerja panitia.
- CSV digunakan sebagai jembatan data menuju website.
- Panitia tetap menjadi pihak final untuk verifikasi dan publikasi kandidat.
- Voting dilakukan offline, bukan melalui website.
