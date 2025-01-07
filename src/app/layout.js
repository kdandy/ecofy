import "./globals.css";

export const metadata = {
  title: "Ecofy",
  description: "Ecofy landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="font-poppins">
        <main>{children}</main>
      </body>
    </html>
  );
}
