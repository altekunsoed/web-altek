/**
 * URL dasar situs (tanpa slash di akhir), dipakai untuk metadataBase, sitemap, dan robots.
 *
 * Urutan prioritas:
 * 1. NEXT_PUBLIC_SITE_URL: isi di Vercel bila nanti memakai domain kustom.
 * 2. VERCEL_PROJECT_PRODUCTION_URL: diisi otomatis oleh Vercel saat build (tanpa https://).
 * 3. http://localhost:3000 untuk pengembangan lokal.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    const withProtocol = /^https?:\/\//i.test(explicit)
      ? explicit
      : `https://${explicit}`;
    return withProtocol.replace(/\/+$/, "");
  }

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction) {
    return `https://${vercelProduction.replace(/^https?:\/\//i, "").replace(/\/+$/, "")}`;
  }

  return "http://localhost:3000";
}
