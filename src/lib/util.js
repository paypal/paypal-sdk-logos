/* @flow */

import { CDN_BASE_URL, LOGO, LOGO_COLOR } from "../constants";
import type { LogoColorMap, LogoColors } from "../types";

export function getLogoColors(
  name: string,
  logoColorMap: LogoColorMap,
  logoColor?: ?$Values<typeof LOGO_COLOR>
): LogoColors {
  let colors;

  if (logoColor) {
    colors = logoColorMap[logoColor];
  }

  if (!colors) {
    colors = logoColorMap[LOGO_COLOR.DEFAULT];
  }

  if (!colors) {
    throw new Error(
      `No ${logoColor || LOGO_COLOR.DEFAULT} logo available for ${name}`
    );
  }

  return colors;
}

export function getSVGFilename(
  logoName: $Values<typeof LOGO>,
  logoColor: $Values<typeof LOGO_COLOR>
): string {
  return `${logoName}-${logoColor}.svg`;
}

export function getLogoCDNUrl(
  logoName: $Values<typeof LOGO>,
  logoColorMap: LogoColorMap,
  logoColor: $Values<typeof LOGO_COLOR>
): string {
  if (!logoColorMap[logoColor]) {
    logoColor = LOGO_COLOR.DEFAULT;
  }

  const svgFilename = getSVGFilename(logoName, logoColor);

  return `${CDN_BASE_URL}/${svgFilename}`;
}
