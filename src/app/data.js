export const features = [
  {
    id: 0,
    imageLink: "/features/events.svg",
    title: "Event Sharing untuk Aktivitas Lingkungan",
    description:
      "Pengguna dapat menemukan berbagai acara atau kegiatan lingkungan di sekitar mereka, seperti penanaman pohon, pembersihan sampah, atau seminar edukasi lingkungan.",
    routeLink: "/events",
  },
  {
    id: 1,
    imageLink: "/features/carbon.svg",
    title: "Laporan Jejak Karbon Pengguna",
    description:
      "Fitur ini membantu pengguna menghitung dan memantau jejak karbon pribadi berdasarkan aktivitas harian mereka, seperti penggunaan transportasi, konsumsi energi, dan pola konsumsi.",
    routeLink: "/karboncalulator",
  },
  {
    id: 2,
    imageLink: "/features/artikel.svg",
    title: "Artikel dan Edukasi Berbasis Keberlanjutan",
    description:
      "Perpustakaan digital yang menyajikan artikel, tips, dan panduan praktis tentang gaya hidup berkelanjutan serta berita terkini tentang isu lingkungan.",
    routeLink: "/blog",
  },
];

export const artikelEdukasi = [
  {
    title: "Berita 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel mauris vel metus gravida efficitur.",
    link: "/berita1",
    thumbnail: "/featuredNews1.jpg",
  },
  {
    title: "Berita 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel mauris vel metus gravida efficitur.",
    link: "/berita2",
    thumbnail: "/featuredNews2.jpg",
  },
  {
    title: "Berita 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel mauris vel metus gravida efficitur.",
    link: "/berita3",
    thumbnail: "/featuredNews3.jpg",
  },
];

export const events = [
  {
    event_id: 0,
    month: "Januari",
    eventsOnDate: [
      {
        day: "01",
        events: [
          {
            event_date_id: 0,
            title: "Pembersihan Sungai Ciliwung",
            description:
              "Event ini di tujukan untuk membersihkan sungai cilliwung dari sampah-sampah.",
            location: "Sungai Ciliwung, Kabupaten Denpasar",
            link: "/event1",
            images: ["/event1.jpg", "/event1_2.jpg"],
            thumbnail: ["/featuredNews1.jpg"],
            organizer: {
              name: "Pandawara Group",
              link: "/",
            },
          },
        ],
      },
      {
        day: "15",
        events: [
          {
            event_date_id: 0,
            title: "Pembersihan Sungai Ciliwung",
            description:
              "Event ini di tujukan untuk membersihkan sungai cilliwung dari sampah-sampah.",
            location: "Sungai Ciliwung, Kabupaten Denpasar",
            link: "/event1",
            images: ["/event1.jpg", "/event1_2.jpg"],
            thumbnail: ["/featuredNews1.jpg"],
            organizer: {
              name: "Pandawara Group",
              link: "/",
            },
          },
        ],
      },
    ],
  },
  {
    event_id: 1,
    month: "febuari",
    eventsOnDate: [
      {
        day: "03",
        events: [
          {
            event_date_id: 0,
            title: "Pembersihan Sungai Ciliwung",
            description:
              "Event ini di tujukan untuk membersihkan sungai cilliwung dari sampah-sampah.",
            location: "Sungai Ciliwung, Kabupaten Denpasar",
            link: "/event1",
            images: ["/event1.jpg", "/event1_2.jpg"],
            thumbnail: ["/featuredNews1.jpg"],
            organizer: {
              name: "Pandawara Group",
              link: "/",
            },
          },
        ],
      },
    ],
  },
];

