import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Altek",
  description: "Website Organisasi Altek",
  icons: {
    icon: "/LogoAltek.png",
    apple: "/LogoAltek.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-slate-950 text-slate-200 antialiased selection:bg-sky-500/30 selection:text-white">
        {/* Navbar */}
        <Navbar />

        {/* Konten Utama - pt-14 md:pt-16 disesuaikan dengan tinggi navbar baru */}
        <main className="flex-1 pt-14 md:pt-16 w-full overflow-x-hidden flex flex-col">
          {children}
        </main>

        {/* Tombol Back to Top Melayang */}
        <ScrollToTop />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
