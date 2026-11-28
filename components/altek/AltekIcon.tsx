"use client";

import { useId } from "react";
import { getAltekIcon, uniquifySvgInstanceIds } from "@/lib/altekIcons";

interface AltekIconProps {
  name: string;
  variant?: "mini" | "icon";
  className?: string;
}

/**
 * Merender ikon SVG modular ALTEK dari data/altekIcons.json dengan ID unik per instance.
 */
export function AltekIcon({
  name,
  variant = "icon",
  className = "",
}: AltekIconProps) {
  const reactId = useId();
  const uid = reactId.replace(/[^a-zA-Z0-9_]/g, "");
  const { resolved, spec } = getAltekIcon(name);
  const safeBody = uniquifySvgInstanceIds(spec.b, uid);
  const svgClass = `${spec.c} altek-v110-icon`;

  if (variant === "mini") {
    return (
      <span
        className={`altek-mini ${className}`.trim()}
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={spec.v}
          className={svgClass}
          data-icon={resolved}
          data-motion={spec.m}
          aria-hidden="true"
          focusable="false"
          dangerouslySetInnerHTML={{ __html: safeBody }}
        />
      </span>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={spec.v}
      className={`${svgClass} ${className}`.trim()}
      data-icon={resolved}
      data-motion={spec.m}
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: safeBody }}
    />
  );
}
