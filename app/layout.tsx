import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AltekEffects from "@/components/altek/AltekEffects";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_TITLE = "ALTEK UNSOED — Informasi Praktikum, Arsip & Organisasi";
const SITE_DESCRIPTION =
  "Informasi dan arsip Aliansi Laboratorium Teknik Elektro (ALTEK) UNSOED: daftar praktikum, modul, pedoman, dan struktur kepengurusan.";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | ALTEK UNSOED",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "ALTEK UNSOED",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/assets/branding/og-altek-unsoed.jpg",
        width: 1200,
        height: 630,
        alt: "ALTEK UNSOED — Aliansi Laboratorium Teknik Elektro Universitas Jenderal Soedirman",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/assets/branding/og-altek-unsoed.jpg"],
  },
  icons: {
    icon: [
      { url: "/assets/branding/favicon.ico" },
      { url: "/assets/branding/favicon-64.png", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const THEME_INIT_SCRIPT = `(function(){
  var theme = 'light';
  try {
    var saved = window.localStorage && window.localStorage.getItem('altek-theme');
    if (saved === 'dark' || saved === 'light') {
      theme = saved;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    }
  } catch (e) {
    try {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) theme = 'dark';
    } catch (e2) {}
  }
  document.documentElement.setAttribute('data-theme', theme);
  var color = theme === 'dark' ? '#111f30' : '#ffffff';
  var metas = document.querySelectorAll('meta[name="theme-color"]');
  if (metas.length) {
    for (var i = 0; i < metas.length; i++) {
      metas[i].removeAttribute('media');
      metas[i].setAttribute('content', color);
    }
  } else {
    var meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = color;
    document.head.appendChild(meta);
  }
})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      data-theme="light"
      className={plusJakartaSans.variable}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="flex flex-col min-h-screen antialiased selection:bg-[#0e8f9e]/20">
        <Navbar />
        <AltekEffects />
        <main className="flex-1 w-full overflow-x-hidden flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
