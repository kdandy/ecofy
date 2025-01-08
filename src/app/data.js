export const features = [
  {
    id: 0,
    imageLink: "/features1.jpg",
    title: "Event Sharing untuk Aktivitas Lingkungan",
    description:
      "Pengguna dapat menemukan berbagai acara atau kegiatan lingkungan di sekitar mereka, seperti penanaman pohon, pembersihan sampah, atau seminar edukasi lingkungan.",
    routeLink: "/events",
  },
  {
    id: 1,
    imageLink: "/features1.jpg",
    title: "Laporan Jejak Karbon Pengguna",
    description:
      "Fitur ini membantu pengguna menghitung dan memantau jejak karbon pribadi berdasarkan aktivitas harian mereka, seperti penggunaan transportasi, konsumsi energi, dan pola konsumsi.",
    routeLink: "/karboncalulator",
  },
  {
    id: 2,
    imageLink: "/features1.jpg",
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
            thumbnail: ["/event1.jpg"],
            content: `
                React is a powerful library for building user interfaces. 
                It uses a <strong>component-based architecture</strong> to make development efficient. 
                With React, you can create *interactive* and **dynamic** web applications.
              `,
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
            thumbnail: ["/event1.jpg"],
            content: `
                React is a powerful library for building user interfaces. 
                It uses a <strong>component-based architecture</strong> to make development efficient. 
                With React, you can create *interactive* and **dynamic** web applications.
              `,
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
            thumbnail: ["/event1.jpg"],
            content: `
                React is a powerful library for building user interfaces. 
                It uses a <strong>component-based architecture</strong> to make development efficient. 
                With React, you can create *interactive* and **dynamic** web applications.
              `,
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

export const events2 = [
  {
    id: 0,
    date: new Date("2025-01-08T10:00:00").toISOString("en-UK"), // Example ISO date string
    title: "Pembersihan Sungai Ciliwung",
    description:
      "Event ini di tujukan untuk membersihkan sungai cilliwung dari sampah-sampah.",
    location: "Sungai Ciliwung, Kabupaten Denpasar",
    link: "/event1",
    images: ["/event1.jpg", "/event1_2.jpg"],
    content: `
      React is a powerful library for building user interfaces. 
      It uses a <strong>component-based architecture</strong> to make development efficient. 
      With React, you can create *interactive* and **dynamic** web applications.
    `,
  },
];
