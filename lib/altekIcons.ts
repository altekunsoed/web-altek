import iconData from "@/data/altekIcons.json";

/**
 * Library ikon ALTEK (port dari UI v0.6.5: ALTEK_ICONS_V120 + renderAltekIcon).
 * Data ikon diekstrak otomatis ke data/altekIcons.json oleh scripts/port-ui-v065.ps1.
 */
export interface AltekIconSpec {
  /** viewBox */
  v: string;
  /** mode motion: "continuous" | "interactive" | ... */
  m: string;
  /** class dasar ikon */
  c: string;
  /** isi SVG (markup mentah) */
  b: string;
}

const ICONS = iconData as unknown as Record<string, AltekIconSpec>;

const ALIASES: Record<string, string> = {
  diode: "opamp",
  sparkles: "spark",
  check: "spark",
  empty: "folder",
  filter: "sliders",
  "map-pin": "info",
  tool: "sliders",
  warning: "info",
};

export function resolveAltekIconName(name: string | null | undefined): string {
  const key = String(name ?? "").trim();
  if (Object.prototype.hasOwnProperty.call(ICONS, key)) return key;
  if (Object.prototype.hasOwnProperty.call(ALIASES, key)) return ALIASES[key];
  return "info";
}

export function getAltekIcon(name: string | null | undefined): {
  resolved: string;
  spec: AltekIconSpec;
} {
  const resolved = resolveAltekIconName(name);
  return { resolved, spec: ICONS[resolved] ?? ICONS.info };
}

/**
 * Setiap instance ikon butuh id gradien/filter yang unik, supaya beberapa ikon
 * yang sama di satu halaman tidak saling menimpa referensi url(#id).
 */
export function uniquifySvgInstanceIds(body: string, uid: string): string {
  const ids = new Set<string>();
  for (const match of body.matchAll(/\bid="([^"]+)"/g)) ids.add(match[1]);
  if (ids.size === 0) return body;

  let out = body;
  ids.forEach((id) => {
    const next = `${id}_i${uid}`;
    out = out.split(`id="${id}"`).join(`id="${next}"`);
    out = out.split(`url(#${id})`).join(`url(#${next})`);
    out = out.split(`href="#${id}"`).join(`href="#${next}"`);
  });
  return out;
}
