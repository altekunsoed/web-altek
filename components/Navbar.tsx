"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { syncAltekPersistentIconStates } from "@/lib/altekIconMotion";
import { AltekBrandLogo } from "@/components/altek/AltekBrandLogo";
import { AltekIcon } from "@/components/altek/AltekIcon";

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Informasi", href: "/informasi", icon: "info" },
  { label: "Praktikum", href: "/praktikum", icon: "praktikum" },
  { label: "Keanggotaan", href: "/keanggotaan", icon: "users" },
  { label: "About", href: "/about", icon: "circuit" },
];

type ThemeMode = "light" | "dark";

function syncThemeColorMeta(mode: ThemeMode) {
  const color = mode === "dark" ? "#111f30" : "#ffffff";
  const metas = document.querySelectorAll('meta[name="theme-color"]');
  if (metas.length > 0) {
    metas.forEach((meta) => {
      meta.removeAttribute("media");
      meta.setAttribute("content", color);
    });
  } else {
    const meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.content = color;
    document.head.appendChild(meta);
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const initial: ThemeMode =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";
    setTheme(initial);
    syncThemeColorMeta(initial);
  }, []);

  useEffect(() => {
    syncAltekPersistentIconStates();
  }, [pathname, mobileOpen, theme]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const toggleTheme = () => {
    const next: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem("altek-theme", next);
    } catch {
      /* abaikan bila penyimpanan lokal tidak tersedia */
    }
    syncThemeColorMeta(next);
  };

  const isActiveRoute = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const themeLabel =
    theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap";

  return (
    <header
      className={scrolled ? "topbar is-scrolled" : "topbar"}
      id="topbar"
    >
      <div className="altek-container nav-wrap">
        <Link className="brand" href="/">
          <AltekBrandLogo size={46} className="altek-nav-logo" />
          <div className="brand-text">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/branding/tulisan_altek.png"
              alt="ALTEK UNSOED"
              height={21}
              className="altek-wordmark-img altek-wordmark-nav"
            />
            <div className="brand-sub">
              Aliansi Laboratorium Teknik Elektro
            </div>
          </div>
        </Link>

        <nav className="nav-links" aria-label="Navigasi utama">
          {NAV_ITEMS.map((item) => {
            const active = isActiveRoute(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "nav-link active" : "nav-link"}
                aria-current={active ? "page" : undefined}
              >
                <AltekIcon name={item.icon} variant="mini" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            id="themeToggle"
            aria-label={themeLabel}
            title={themeLabel}
            onClick={toggleTheme}
          >
            <span id="themeIcon">
              <AltekIcon
                name={theme === "dark" ? "sun" : "moon"}
                variant="mini"
              />
            </span>
          </button>

          <button
            type="button"
            className="menu-btn"
            id="mobileMenuBtn"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobileNav"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <AltekIcon
              name={mobileOpen ? "close" : "menu"}
              variant="mini"
            />
          </button>
        </div>
      </div>

      <nav
        className={mobileOpen ? "mobile-nav open" : "mobile-nav"}
        id="mobileNav"
        aria-label="Navigasi mobile"
        aria-hidden={!mobileOpen}
      >
        {NAV_ITEMS.map((item) => {
          const active = isActiveRoute(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? "nav-link active" : "nav-link"}
              aria-current={active ? "page" : undefined}
              onClick={() => setMobileOpen(false)}
            >
              <AltekIcon name={item.icon} variant="mini" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
