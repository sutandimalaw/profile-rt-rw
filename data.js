window.sriwijayaElectionData = {
  site: {
    name: "Cluster Sriwijaya",
    shortName: "Sriwijaya",
    region: "Cluster Sriwijaya, Perumahan Darmawangsa Bekasi",
    electionTitle: "Pemilihan RT/RW Cluster Sriwijaya 2026",
    electionDate: "Tanggal menunggu keputusan panitia",
    whatsappNumber: "6281234567890",
    whatsappMessage:
      "Halo Panitia Pemilihan RT/RW Cluster Sriwijaya, saya ingin bertanya tentang informasi kandidat.",
  },
  dataImport: {
    mode: "Google Form ke Google Sheets CSV",
    sourceLabel: "Google Form panitia",
    listDelimiter: "|",
    sampleCsv: "samples/kandidat-google-form.csv",
    requiredColumns: ["nama", "kategori", "rt_rw", "status_verifikasi"],
  },
  filters: [
    { label: "Semua", value: "all" },
    { label: "RT 01", value: "rt-01" },
    { label: "RT 02", value: "rt-02" },
    { label: "RT 03", value: "rt-03" },
    { label: "RT 04", value: "rt-04" },
    { label: "RW", value: "rw" },
  ],
  candidates: [
    {
      id: "arief-rt-01",
      filter: "rt-01",
      category: "RT",
      rtRw: "RT 01",
      name: "Bapak Arief Wicaksono",
      role: "Kandidat RT 01",
      area: "Blok A dan B",
      house: "Sriwijaya A7",
      profession: "Karyawan swasta",
      photo: "assets/portrait-arief.svg",
      source: "Google Form panitia",
      verificationStatus: "Terverifikasi panitia",
      tagline: "Administrasi tertib, respons warga lebih cepat.",
      summary:
        "Aktif membantu pendataan warga dan koordinasi keamanan blok sejak awal menempati Cluster Sriwijaya.",
      vision:
        "Mewujudkan RT 01 yang tertib, responsif, dan nyaman untuk keluarga.",
      missions: [
        "Merapikan database warga dan kontak darurat.",
        "Membuat alur surat pengantar yang jelas dan cepat.",
        "Mengaktifkan kembali koordinasi keamanan antarblok.",
      ],
      programs: [
        "Pendataan warga berbasis formulir digital.",
        "Jadwal ronda fleksibel dan transparan.",
        "Laporan kas bulanan yang mudah dibaca warga.",
      ],
      experience: [
        "Koordinator keamanan blok 2024-2025.",
        "Panitia kegiatan 17 Agustus Cluster Sriwijaya.",
      ],
      quote: "RT yang baik harus mudah dihubungi dan rapi dalam administrasi.",
    },
    {
      id: "nadya-rt-02",
      filter: "rt-02",
      category: "RT",
      rtRw: "RT 02",
      name: "Ibu Nadya Permatasari",
      role: "Kandidat RT 02",
      area: "Blok C dan D",
      house: "Sriwijaya C12",
      profession: "Wirausaha",
      photo: "assets/portrait-nadya.svg",
      source: "Google Form panitia",
      verificationStatus: "Terverifikasi panitia",
      tagline: "Lingkungan bersih, komunikasi warga lebih hangat.",
      summary:
        "Sering terlibat dalam kegiatan sosial warga dan pengelolaan acara keluarga di lingkungan cluster.",
      vision:
        "Menjadikan RT 02 sebagai lingkungan yang bersih, aktif, dan saling peduli.",
      missions: [
        "Mendorong kegiatan warga yang inklusif untuk semua usia.",
        "Menjadwalkan kerja bakti ringan dengan sistem giliran.",
        "Memastikan informasi warga tersampaikan dengan bahasa yang jelas.",
      ],
      programs: [
        "Gerakan halaman dan taman depan rumah lebih asri.",
        "Kalender kegiatan warga setiap kuartal.",
        "Kanal aspirasi warga yang ditutup dengan tindak lanjut.",
      ],
      experience: [
        "Koordinator konsumsi acara warga.",
        "Penggerak kegiatan berbagi saat bulan Ramadan.",
      ],
      quote: "Cluster yang nyaman dimulai dari komunikasi yang baik antar tetangga.",
    },
    {
      id: "fajar-rt-03",
      filter: "rt-03",
      category: "RT",
      rtRw: "RT 03",
      name: "Bapak Fajar Nugraha",
      role: "Kandidat RT 03",
      area: "Blok E dan F",
      house: "Sriwijaya F3",
      profession: "Analis operasional",
      photo: "assets/portrait-fajar.svg",
      source: "Google Form panitia",
      verificationStatus: "Belum diverifikasi",
      tagline: "Keamanan rapi, keputusan berbasis data warga.",
      summary:
        "Memiliki pengalaman menyusun jadwal operasional dan terbiasa membuat laporan singkat untuk tim.",
      vision:
        "Membangun RT 03 yang aman, transparan, dan terukur dalam pelayanan warga.",
      missions: [
        "Menyusun sistem pelaporan gangguan keamanan.",
        "Membuka rekap iuran dan pengeluaran secara berkala.",
        "Membuat prioritas perbaikan fasilitas berdasarkan masukan warga.",
      ],
      programs: [
        "Peta titik lampu dan CCTV yang perlu perhatian.",
        "Rekap keputusan rapat warga dalam format singkat.",
        "Forum bulanan untuk evaluasi masalah lingkungan.",
      ],
      experience: [
        "Relawan dokumentasi rapat warga.",
        "Anggota tim audit kas kegiatan lingkungan.",
      ],
      quote: "Warga perlu tahu masalahnya apa, rencananya apa, dan progresnya sampai mana.",
    },
    {
      id: "melati-rt-04",
      filter: "rt-04",
      category: "RT",
      rtRw: "RT 04",
      name: "Ibu Melati Rahma",
      role: "Kandidat RT 04",
      area: "Blok G dan H",
      house: "Sriwijaya H9",
      profession: "Guru",
      photo: "assets/portrait-melati.svg",
      source: "Google Form panitia",
      verificationStatus: "Final",
      tagline: "Ruang warga yang ramah keluarga dan anak.",
      summary:
        "Aktif mendampingi kegiatan edukatif anak dan beberapa kali membantu mediasi kebutuhan warga.",
      vision:
        "Menciptakan RT 04 yang ramah keluarga, aman untuk anak, dan peduli sesama.",
      missions: [
        "Menghidupkan kegiatan anak dan keluarga secara berkala.",
        "Mendorong lingkungan bermain yang lebih aman.",
        "Membuat komunikasi warga lebih tenang dan solutif.",
      ],
      programs: [
        "Kelas kecil akhir pekan untuk anak warga.",
        "Kampanye keselamatan berkendara di area cluster.",
        "Tim bantuan cepat untuk warga yang membutuhkan.",
      ],
      experience: [
        "Pendamping kegiatan anak saat hari besar nasional.",
        "Mediator informal untuk beberapa agenda warga.",
      ],
      quote: "Lingkungan yang baik terasa aman untuk anak dan nyaman untuk orang tua.",
    },
    {
      id: "rendra-rw",
      filter: "rw",
      category: "RW",
      rtRw: "RW",
      name: "Bapak Rendra Mahaputra",
      role: "Kandidat RW",
      area: "Koordinasi seluruh Cluster Sriwijaya",
      house: "Sriwijaya B18",
      profession: "Konsultan proyek",
      photo: "assets/portrait-rendra.svg",
      source: "Google Form panitia",
      verificationStatus: "Terverifikasi panitia",
      tagline: "Koordinasi antar-RT lebih solid dan transparan.",
      summary:
        "Berpengalaman mengelola koordinasi lintas tim dan terbiasa membuat rencana kerja bertahap.",
      vision:
        "Menyatukan koordinasi antar-RT agar pelayanan warga lebih konsisten dan transparan.",
      missions: [
        "Menyelaraskan agenda prioritas setiap RT.",
        "Membuat forum rutin pengurus RT dan perwakilan warga.",
        "Mengawal isu keamanan, fasilitas, dan administrasi di tingkat RW.",
      ],
      programs: [
        "Dashboard sederhana agenda RT/RW.",
        "Standar komunikasi pengumuman resmi warga.",
        "Prioritas tahunan perbaikan fasilitas bersama.",
      ],
      experience: [
        "Koordinator proyek komunitas perumahan.",
        "Penanggung jawab logistik beberapa kegiatan cluster.",
      ],
      quote: "RW perlu menjadi penghubung yang adil, rapi, dan bisa dipercaya semua RT.",
    },
  ],
  timeline: [
    {
      phase: "Pendataan kandidat",
      date: "Tahap 1",
      description: "Panitia mengumpulkan nama, foto, dan profil singkat kandidat.",
    },
    {
      phase: "Publikasi profil",
      date: "Tahap 2",
      description: "Warga mulai membaca visi, misi, dan program prioritas kandidat.",
    },
    {
      phase: "Sosialisasi warga",
      date: "Tahap 3",
      description: "Kandidat dapat menyampaikan gagasan dan menjawab pertanyaan warga.",
    },
    {
      phase: "Hari pemilihan",
      date: "Tahap 4",
      description: "Warga memberikan suara sesuai ketentuan panitia.",
    },
  ],
  voterGuide: {
    statusLabel: "Informasi sementara",
    location: "Menunggu keputusan panitia",
    time: "Menunggu keputusan panitia",
    eligibility: [
      "Pemilih adalah KK atau warga yang terdaftar di Cluster Sriwijaya.",
      "Setiap KK memiliki 1 suara dalam pemilihan.",
      "Pemilih hadir langsung di lokasi pemilihan sesuai jadwal panitia.",
    ],
    documents: [
      "Membawa identitas warga atau bukti domisili jika diminta panitia.",
      "Mengetahui nomor rumah atau blok untuk proses pengecekan daftar pemilih.",
      "Mengikuti arahan panitia saat registrasi dan pengambilan suara.",
    ],
    rules: [
      "1 suara untuk setiap KK.",
      "Hasil voting ditentukan berdasarkan suara terbanyak dari pemilih yang hadir.",
      "Suara diberikan langsung saat pemilihan dan tidak dititipkan.",
      "Jika satu KK hadir lebih dari satu orang, tetap hanya dihitung 1 suara.",
      "Keputusan hasil penghitungan disahkan oleh panitia sesuai berita acara.",
    ],
    steps: [
      "Datang ke lokasi pemilihan sesuai jadwal yang ditetapkan panitia.",
      "Registrasi atau konfirmasi kehadiran kepada petugas panitia.",
      "Menerima arahan pemilihan dan memberikan suara sesuai ketentuan.",
      "Menunggu proses penghitungan dan pengumuman resmi dari panitia.",
    ],
    notes: [
      "Detail lokasi, jam, dan teknis pemungutan suara masih dapat disesuaikan.",
      "Panduan ini bukan fasilitas voting online; pemilihan dilakukan langsung/offline.",
      "Jika ada perubahan aturan, panitia dapat memperbarui bagian voterGuide di data.js.",
    ],
  },
  faqs: [
    {
      question: "Apakah data kandidat di halaman ini sudah final?",
      answer:
        "Belum. Semua data saat ini masih contoh dan disiapkan agar struktur website bisa diuji lebih dulu.",
    },
    {
      question: "Bagaimana cara mengganti nama dan foto kandidat?",
      answer:
        "Edit file data.js, lalu ubah bagian candidates. Foto bisa diganti dengan file gambar di folder assets.",
    },
    {
      question: "Apakah data bisa diambil dari Google Form?",
      answer:
        "Bisa. Response Google Form masuk ke Google Sheets, lalu panitia export CSV sesuai format contoh dan konversi ke data kandidat di data.js.",
    },
    {
      question: "Apakah website ini mewakili satu kandidat tertentu?",
      answer:
        "Tidak. Desainnya dibuat netral untuk menampilkan semua kandidat secara seimbang.",
    },
    {
      question: "Apakah bisa dipublish di Vercel?",
      answer:
        "Bisa. Website ini statis, sehingga bisa langsung dipublish melalui Vercel setelah repository dihubungkan.",
    },
  ],
};
