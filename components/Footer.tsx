import Link from "next/link";
import { AltekBrandLogo } from "@/components/altek/AltekBrandLogo";
import { AltekIcon } from "@/components/altek/AltekIcon";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Modul & Aturan", href: "/praktikum?tab=modul" },
  { label: "Informasi", href: "/informasi" },
  { label: "Semester Ini", href: "/praktikum?tab=semester-ini" },
  { label: "Praktikum", href: "/praktikum?tab=daftar" },
  { label: "Tutorial", href: "/praktikum?tab=tutorial" },
  { label: "Keanggotaan", href: "/keanggotaan" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="altek-container">
        <div className="footer-grid altek-footer-3col">
          <div className="footer-identity-block">
            <div className="footer-brand">
              <AltekBrandLogo size={54} className="altek-footer-logo" />
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/branding/tulisan_altek.png"
                  alt="ALTEK UNSOED"
                  height={22}
                  className="altek-wordmark-img"
                />
                <div className="footer-brand-sub">
                  Aliansi Laboratorium Teknik Elektro — Universitas Jenderal
                  Soedirman
                </div>
              </div>
            </div>
            <p className="footer-brand-desc">
              Informasi praktikum, modul PDF, pedoman laporan, dan
              arsip kepengurusan laboratorium Teknik Elektro UNSOED.
            </p>
          </div>

          <div className="footer-nav-block">
            <h4>Navigasi Cepat</h4>
            <div className="altek-footer-nav-cols">
              {FOOTER_LINKS.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-contact-column">
            <h4>Kontak Resmi</h4>
            <a
              className="footer-contact-email"
              href="mailto:aliansilaborat@gmail.com"
            >
              <span className="footer-mini-icon" aria-hidden="true">
                <AltekIcon name="mail" variant="mini" />
              </span>
              <span>aliansilaborat@gmail.com</span>
            </a>

            <div
              className="footer-social-links"
              aria-label="Kanal resmi ALTEK UNSOED"
            >
              <a
                className="footer-social-link"
                href="https://instagram.com/altek_unsoed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram ALTEK UNSOED"
              >
                <span className="motion-icon">
                  <AltekIcon name="instagram" />
                </span>
              </a>
              <a
                className="footer-social-link"
                href="https://linkedin.com/in/altek-unsoed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn ALTEK UNSOED"
              >
                <span className="motion-icon">
                  <AltekIcon name="linkedin" />
                </span>
              </a>
              <a
                className="footer-social-link"
                href="https://github.com/altekunsoed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub ALTEK UNSOED"
              >
                <span className="motion-icon">
                  <AltekIcon name="github" />
                </span>
              </a>
            </div>

            <small className="footer-contact-caption">
              Kampus Blater, Purbalingga — FT UNSOED.
            </small>
          </div>
        </div>

        <div className="copyright">
          <span>
            © {new Date().getFullYear()} ALTEK UNSOED — Aliansi Laboratorium
            Teknik Elektro, Universitas Jenderal Soedirman.
          </span>
        </div>
      </div>
    </footer>
  );
}
