window.sriwijayaElectionData = {
  site: {
    name: "Cluster Sriwijaya",
    shortName: "Sriwijaya",
    region: "Cluster Sriwijaya, Perumahan Darmawangsa Bekasi",
    electionTitle: "Pemilihan RT/RW Cluster Sriwijaya 2026",
    electionDate: "Sabtu, 25 Juli 2026, pukul 16.00 WIB - selesai",
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
  publication: {
    hiddenCategories: [],
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
      id: "Nasib-rt-01",
      filter: "rt-01",
      category: "RT",
      rtRw: "RT 01",
      name: "Nasib Agape Banjarnahor",
      role: "Kandidat RT 01",
      area: "SE 3 No 6",
      profession: "Karyawan ",
      house: "SE 3 No 6",
      photo: "assets/rt01.png",
    },
    {
      id: "dedi-rt-02",
      filter: "rt-02",
      category: "RT",
      rtRw: "RT 02",
      name: "Dedi Dian Haryanto",
      role: "Kandidat RT 02",
      area: "SD 2 no 18",
      house: "SD 2 no 18",
      profession: "karyawan",
      photo: "assets/rt02.png",
      source: "Google Form panitia",
    },
    {
      id: "demas-rt-03",
      filter: "rt-03",
      category: "RT",
      rtRw: "RT 03",
      name: "Demas Kevin Audy Putra",
      role: "Kandidat RT 03",
      area: "SE 1 No 24",
      house: "Blok SE 1 No 24",
      profession: "Karyawan",
      photo: "assets/rt03.png",
      source: "Google Form panitia",
    },
    {
      id: "malin-lumban-gaol-rt-04",
      filter: "rt-04",
      category: "RT",
      rtRw: "RT 04",
      name: "Malin J.T Lumbangaol",
      role: "Kandidat RT 04",
      area: "SB 3 No 23",
      house: "Blok SB 3 No 23",
      profession: "Karyawan",
      photo: "assets/rt04.png",
    },
    {
      id: "tom-rizky-augustino-rw",
      filter: "rw",
      category: "RW",
      rtRw: "4 / 19",
      name: "Tom Rizky Augustino",
      candidateNumber: "1",
      term: "2026–2031",
      role: "Calon Ketua RW 19",
      area: "Cluster Sriwijaya",
      house: "SA. 3 No 10",
      profession: "Wiraswasta",
      photo: "assets/Tom Rizky Augustino.jpeg",
      video: "https://drive.google.com/file/d/1CGhXGMY7b9QwTsInbQYrOhlK2FVmzhVn/preview",
      tagline:
        "PAKULARAS — Paguyuban Kuat, Keselarasan dan Harmoni.",
      summary:
        "Mencalonkan diri sebagai Ketua RW 19 Cluster Sriwijaya periode 2026–2031 dengan fokus pada pembaruan tata kelola, inovasi fasilitas dan keamanan lingkungan, serta kepedulian terhadap lingkungan yang bersih, aman, sehat, dan nyaman.",
      vision: "",
      campaignTheme: {
        title: "PAKULARAS",
        description:
          "PAKU – Paguyuban Kuat; LARAS – Keselarasan dan Harmoni.",
      },
      reasons: [
        {
          title: "Pembaruan Tata Kelola",
          description:
            "Mendorong pembaruan tata kelola lingkungan agar pelayanan kepada warga semakin baik.",
        },
        {
          title: "Inovasi Fasilitas & Keamanan",
          description:
            "Mendorong inovasi fasilitas dan keamanan lingkungan Cluster Sriwijaya.",
        },
        {
          title: "Kepedulian Lingkungan",
          description:
            "Mewujudkan lingkungan yang bersih, aman, sehat, dan nyaman bagi seluruh warga.",
        },
      ],
      mainIdeas: [
        {
          title: "PAKU – Paguyuban Kuat",
          description:
            "Membangun kolaborasi dan kebersamaan seluruh warga.",
        },
        {
          title: "LARAS – Keselarasan dan Harmoni",
          description:
            "Menciptakan hubungan yang harmonis antara warga, lingkungan, dan sesama.",
        },
      ],
      missions: [],
      programs: [
        "Pembangunan Teknokratik — Berbasis data, analisis, dan keputusan yang terukur.",
        "Komunikasi & Transparansi — Melalui platform digital serta administrasi yang terbuka dan akuntabel.",
        "Keamanan & Kebersihan — Menjaga keamanan dan kebersihan lingkungan serta fasilitas umum.",
        "Pemberdayaan Komunitas — Memberdayakan komunitas, pemuda, dan kelompok masyarakat.",
        "BANK Tumbuh — Dana patungan warga yang dikelola secara transparan untuk pemeliharaan dan pembangunan lingkungan.",
      ],
      experience: [],
      values: [
        "Aman dan nyaman",
        "Rukun dan guyub",
        "Modern dan tertata",
        "Transparan dan akuntabel",
        "Peduli lingkungan",
      ],
      electionInfo: [
        { title: "Tanggal", description: "Sabtu, 25 Juli 2026" },
        { title: "Waktu", description: "Pukul 16.00 WIB – selesai" },
        {
          title: "Lokasi",
          description: "Lapangan Badminton Cluster Sriwijaya",
        },
      ],
      slogans: [
        "Satu tujuan, satu hati, satu RW 19. Bersama kita bisa, bersatu kita maju!",
      ],
      quote: "",
    },
    {
      id: "roy-fernando-k-manihuruk-rw",
      filter: "rw",
      category: "RW",
      rtRw: "5 / 19",
      name: "Roy Fernando K. Manihuruk",
      candidateNumber: "2",
      role: "Calon Ketua RW 19",
      area: "Cluster Sriwijaya",
      house: "Blok SB 1 No 25",
      profession: "IT QA Lead",
      photo: "assets/Roy .jpeg",
      video: "https://drive.google.com/file/d/1WDu99Owb0SOljsMw5oRyGzkmEwfm3auU/preview",
      source: "Google Form panitia",
      verificationStatus: "Data dari panitia",
      tagline: "Siap Mendengarkan, Siap Melayani, dan Transparan.",
      campaignTheme: {
        title: "Siap Mendengarkan, Siap Melayani, dan Transparan",
        description: "",
      },
      summary:
        "Roy Fernando K. Manihuruk mencalonkan diri sebagai Ketua RW bukan sekadar untuk memegang jabatan, tetapi ingin menjadi penghubung yang baik antara warga, pengembang, dan pihak-pihak terkait. Ia ingin membangun lingkungan dengan komunikasi terbuka, transparan, dan responsif terhadap berbagai kebutuhan serta aspirasi warga. Melalui kerja sama dan keterbukaan, ia berharap Cluster Sriwijaya menjadi semakin nyaman untuk ditinggali seluruh keluarga.",
      purpose:
        "Roy Fernando K. Manihuruk mencalonkan diri sebagai Ketua RW bukan sekadar untuk memegang jabatan, tetapi ingin menjadi penghubung yang baik antara warga, pengembang, dan pihak-pihak terkait. Ia ingin membangun lingkungan dengan komunikasi terbuka, transparan, dan responsif terhadap berbagai kebutuhan serta aspirasi warga. Melalui kerja sama dan keterbukaan, ia berharap Cluster Sriwijaya menjadi semakin nyaman untuk ditinggali seluruh keluarga.",
      vision:
        "Mewujudkan Cluster Sriwijaya sebagai lingkungan yang aman, nyaman, rukun, modern, dan transparan, sehingga menjadi tempat tinggal yang membanggakan bagi seluruh warga.",
      visionDescription:
        "Visi tersebut menekankan pentingnya keamanan, kenyamanan, kerukunan antarwarga, tata kelola yang mengikuti perkembangan zaman, serta keterbukaan dalam menjalankan pemerintahan lingkungan.",
      missions: [
        "Meningkatkan keamanan lingkungan melalui koordinasi yang baik dengan petugas keamanan serta meningkatkan partisipasi aktif seluruh warga.",
        "Membangun komunikasi yang cepat, terbuka, dan transparan melalui grup informasi warga maupun forum musyawarah.",
        "Mendorong kebersihan, kerapian, dan penghijauan lingkungan agar Cluster Sriwijaya lebih sehat dan nyaman bagi keluarga serta anak-anak.",
        "Menjadi penghubung aspirasi warga dengan aktif menyampaikan berbagai kebutuhan, keluhan, dan usulan warga kepada pengembang maupun instansi terkait.",
        "Mengadakan kegiatan yang mempererat kebersamaan, seperti kerja bakti, kegiatan olahraga, acara keluarga, dan berbagai kegiatan sosial warga.",
        "Mengelola administrasi lingkungan secara tertib, transparan, dan akuntabel, sehingga setiap kegiatan dan keputusan dapat dipertanggungjawabkan kepada warga.",
      ],
      programs: [],
      experience: [],
      commitmentDetails: [
        {
          title: "Lingkungan aman dan nyaman",
          description:
            "Meningkatkan keamanan sehingga warga merasa tenang dan nyaman tinggal di Cluster Sriwijaya.",
        },
        {
          title: "Komunikasi terbuka dan cepat",
          description:
            "Memastikan informasi lingkungan disampaikan secara cepat, jelas, dan dapat diakses oleh seluruh warga.",
        },
        {
          title: "Lingkungan bersih, rapi, dan hijau",
          description:
            "Mendorong kegiatan kebersihan dan penghijauan untuk menciptakan kawasan hunian yang sehat dan indah.",
        },
        {
          title: "Siap menjadi penghubung aspirasi warga",
          description:
            "Mendengarkan masukan warga dan memperjuangkannya kepada pengembang atau pihak terkait.",
        },
        {
          title: "Administrasi tertib, transparan, dan akuntabel",
          description:
            "Membangun pengelolaan RW yang lebih teratur, terbuka, serta dapat dipertanggungjawabkan.",
        },
      ],
      valueDetails: [
        {
          title: "Rukun dan guyub",
          description: "Menjaga hubungan harmonis antarwarga.",
        },
        {
          title: "Peduli keamanan",
          description: "Menjaga lingkungan tetap aman dan kondusif.",
        },
        {
          title: "Peduli kebersihan",
          description: "Menciptakan kawasan yang sehat dan nyaman.",
        },
        {
          title: "Peduli lingkungan",
          description:
            "Mendorong penghijauan dan pengelolaan lingkungan yang baik.",
        },
        {
          title: "Peduli sesama",
          description:
            "Membangun budaya saling membantu dan memperhatikan kebutuhan warga.",
        },
      ],
      mainMessage:
        "Bersama Bapak/Ibu Warga, mari kita wujudkan Cluster Sriwijaya yang lebih aman, nyaman, dan harmonis.",
      // quote: "Siap Mendengarkan, Siap Melayani, dan Transparan.",
    },
    {
      id: "ivan-firman-panjaitan-rw",
      filter: "rw",
      category: "RW",
      rtRw: "2 / 19",
      name: "Ivan Firman Panjaitan",
      candidateNumber: "3",
      term: "2026–2031",
      role: "Calon Ketua RW 19",
      area: "Cluster Sriwijaya",
      house: "Blok SD 2 No 24",
      profession: "Karyawan",
      photo: "assets/Ivan.jpeg",
      video: "https://drive.google.com/file/d/1v6s4acsBlUDgF_sboJ42V3HM4sJt05mS/preview",
      source: "Google Form panitia",
      verificationStatus: "Data dari panitia",
      tagline:
        "Bersama Kita Ciptakan Lingkungan yang Terjaga, Bersih dan Nyaman untuk Seluruh Warga.",
      summary:
        "Ivan Firman Panjaitan mencalonkan diri sebagai Ketua RW 19 dengan pengalaman sebagai Ketua RT 02 dan dukungan dari pengurus lingkungan. Programnya berfokus pada keberlanjutan program positif, peningkatan kualitas setiap RT, kompetisi sehat antar-RT, keamanan, kebersihan, komunikasi transparan, dan kebersamaan warga.",
      reasons: [
        {
          title: "Memiliki pengalaman sebagai Ketua RT",
          description:
            "Ivan pernah menjabat sebagai Ketua RT 02. Pengalaman tersebut menjadi modal untuk memahami kebutuhan warga, menangani persoalan lingkungan, mengelola komunikasi, dan berkoordinasi dengan pengurus RT maupun RW.",
        },
        {
          title: "Mendapat dukungan dari pengurus lingkungan",
          description:
            "Pencalonan Ivan mendapat dukungan dari pengurus RT 02, pengurus RT lainnya, dan pengurus RW lainnya untuk maju sebagai Calon Ketua RW 19 periode 2026–2031.",
        },
      ],
      vision: "",
      missions: [],
      programs: [
        "Melanjutkan program-program positif yang telah dirintis oleh pengurus RT dan RW sebelumnya, lalu mengembangkan dan menyesuaikannya dengan kebutuhan warga saat ini.",
        "Mendorong kompetisi positif antar-RT 01 sampai RT 05 agar setiap wilayah berlomba secara sehat menjadi lebih bersih, rapi, aman, nyaman, aktif, dan berprestasi.",
        "Mewujudkan Cluster Sriwijaya sebagai lingkungan yang terjaga dengan baik, bersih, aman, rapi, nyaman, dan layak menjadi tempat tinggal bagi seluruh warga dan keluarga.",
      ],
      experience: [],
      commitmentDetails: [
        {
          title: "Keamanan lebih terjaga",
          description:
            "Meningkatkan pengawasan dan koordinasi terkait keamanan lingkungan agar warga merasa lebih tenang dan terlindungi.",
        },
        {
          title: "Komunikasi terbuka dan transparan",
          description:
            "Informasi mengenai kegiatan, kebijakan, keputusan, dan pengelolaan lingkungan disampaikan secara terbuka, cepat, jelas, dan mudah diakses oleh warga.",
        },
        {
          title: "Lingkungan bersih, rapi, dan nyaman",
          description:
            "Menjaga kebersihan fasilitas umum, jalan lingkungan, saluran air, penghijauan, dan kenyamanan kawasan tempat tinggal.",
        },
        {
          title: "Kebersamaan warga",
          description:
            "Memperkuat hubungan sosial dan rasa kekeluargaan antarwarga melalui komunikasi serta kegiatan lingkungan yang melibatkan berbagai kelompok masyarakat.",
        },
      ],
      valueDetails: [
        {
          title: "Lingkungan lebih aman",
          description:
            "Keamanan yang terkoordinasi dengan baik menciptakan rasa tenang bagi warga dan keluarga.",
        },
        {
          title: "Lingkungan lebih bersih dan nyaman",
          description:
            "Kebersihan, kerapian, dan pengelolaan lingkungan yang konsisten meningkatkan kualitas hidup warga.",
        },
        {
          title: "Kebersamaan yang rapi dan harmonis",
          description:
            "Hubungan antarwarga menjadi lebih kompak, tertib, saling menghormati, dan mengutamakan musyawarah.",
        },
        {
          title: "Komunikasi lebih cepat dan terbuka",
          description:
            "Informasi penting dapat disampaikan lebih cepat untuk mengurangi kesalahpahaman dan meningkatkan keterlibatan warga.",
        },
        {
          title: "Pengelolaan tertib, transparan, dan akuntabel",
          description:
            "Administrasi, kegiatan, program kerja, dan pengelolaan lingkungan dapat dipertanggungjawabkan serta diketahui warga secara terbuka.",
        },
      ],
      mainMessage:
        "Ivan mengajak seluruh warga untuk bersama-sama menciptakan lingkungan Cluster Sriwijaya yang terjaga keamanannya, bersih dan rapi, nyaman untuk seluruh keluarga, memiliki komunikasi yang terbuka, serta menjunjung kebersamaan dan keharmonisan antarwarga.",
      electionInfo: [
        { title: "Tanggal", description: "Sabtu, 25 Juli 2026" },
        { title: "Waktu", description: "Pukul 16.00 WIB – selesai" },
        {
          title: "Lokasi",
          description: "Lapangan Badminton Cluster Sriwijaya",
        },
      ],
      slogans: [
        "Ayo Bersama!",
        "Satu suara, satu perubahan, untuk kita semua!",
      ],
      quote:
        "Bersama Kita Ciptakan Lingkungan yang Terjaga, Bersih dan Nyaman untuk Seluruh Warga.",
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
  candidateRegistration: {
    statusLabel: "Pendaftaran belum dibuka",
    formUrl: "",
    ctaLabel: "Daftar sebagai Kandidat",
    fallbackCtaLabel: "Tanya Panitia",
    notice:
      "Checklist ini untuk membantu calon kandidat menilai kesiapan awal. Keputusan final tetap mengikuti verifikasi panitia.",
    requirements: [
      "Warga atau KK terdaftar di Cluster Sriwijaya.",
      "Berdomisili di area RT/RW yang sesuai dengan posisi pencalonan.",
      "Mendaftar atas nama sendiri dan bersedia mengikuti proses verifikasi panitia.",
      "Bersedia data profil kandidat dipublikasikan di website informasi warga.",
      "Tidak sedang mewakili lebih dari satu posisi pencalonan aktif.",
    ],
    readiness: [
      "Bersedia menjalankan tugas sosial lingkungan jika terpilih.",
      "Siap berkoordinasi dengan warga, pengurus, dan panitia secara terbuka.",
      "Siap menyampaikan visi, misi, dan program dengan bahasa yang jelas.",
      "Siap hadir atau dihubungi saat panitia membutuhkan klarifikasi data.",
    ],
    documents: [
      "Nama lengkap dan nomor WhatsApp aktif.",
      "Alamat rumah, blok, dan area RT/RW yang dituju.",
      "Ringkasan profil, visi, misi, dan program prioritas.",
      "Foto kandidat jika sudah tersedia.",
      "Pernyataan kesediaan dan persetujuan publikasi data profil.",
    ],
    positionNotes: [
      {
        label: "Kandidat RT",
        description:
          "Fokus pada pelayanan warga di wilayah RT atau blok terkait, termasuk administrasi, komunikasi, keamanan, dan kegiatan lingkungan.",
      },
      {
        label: "Kandidat RW",
        description:
          "Siap berkoordinasi lintas RT dan mengawal isu bersama cluster seperti keamanan, fasilitas, komunikasi resmi, dan prioritas warga.",
      },
    ],
    steps: [
      "Baca syarat pendaftaran dan cek kesiapan pribadi.",
      "Siapkan data profil, visi, misi, program, dan foto jika ada.",
      "Isi Google Form pendaftaran saat link resmi dibuka panitia.",
      "Panitia memeriksa kelengkapan data dan menghubungi kandidat jika perlu klarifikasi.",
      "Kandidat yang lolos verifikasi dipublikasikan di website profil kandidat.",
    ],
  },
  voterGuide: {
    statusLabel: "Informasi sementara",
    location: "Lapangan Badminton, Cluster Sriwijaya",
    time: "Sabtu, 25 Juli 2026, pukul 16.00 WIB - selesai",
    eligibility: [
      "Pemilih adalah KK atau warga yang terdaftar di Cluster Sriwijaya.",
      "Setiap KK memiliki 1 suara dalam pemilihan.",
      "Pemilih hadir langsung di lokasi pemilihan sesuai jadwal panitia.",
    ],
    documents: [
      "Membawa surat undangan pemilihan.",
      "Mengetahui nomor rumah atau blok untuk proses pengecekan daftar pemilih.",
      "Mengikuti arahan panitia saat registrasi dan pengambilan suara.",
    ],
    rules: [
      "1 suara untuk setiap KK.",
      "Hasil voting ditentukan berdasarkan suara terbanyak dari pemilih yang hadir.",
      "Suara diberikan langsung saat pemilihan.",
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
