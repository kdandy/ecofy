import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Ecofy",
  description: "Ecofy landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
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
