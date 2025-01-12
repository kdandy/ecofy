import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Ecofy",
  description: "Ecofy landing page",
  icons: {
    icon: "/faviconn.ico", // Path ke file favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* Tambahkan link favicon jika ingin lebih eksplisit */}
        <link rel="icon" href="/faviconn.ico" />
      </head>
      <body className="font-poppins">
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}