/* @flow */
/** @jsx node */

import {
  node,
  type ElementNode,
  type ComponentNode,
} from "@krakenjs/jsx-pragmatic/src";

import {
  getLogoCDNUrl,
  getLogoColors,
  SVGLogo,
  type SVGLogoProps,
} from "../../../lib";
import { LOGO_COLOR, LOGO } from "../../../constants";
import type { LogoColors, LogoColorMap } from "../../../types";

export const GLYPH_CARD_REBRAND_LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#FFFFFF",
  },
  [LOGO_COLOR.WHITE]: {
    primary: "#FFFFFF",
  },
  [LOGO_COLOR.BLACK]: {
    primary: "#000000",
  },
};

export const getGlyphCardRebrandSVG = ({
  primary,
}: LogoColors): ElementNode => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.0667 8.24H3.93333C2.98291 8.24 2.21244 9.02798 2.21244 10V24C2.21244 24.972 2.98291 25.76 3.93333 25.76H30.0667C31.0171 25.76 31.7876 24.972 31.7876 24V10C31.7876 9.02798 31.0171 8.24 30.0667 8.24ZM3.93333 7C2.3133 7 1 8.34315 1 10V24C1 25.6569 2.3133 27 3.93333 27H30.0667C31.6867 27 33 25.6569 33 24V10C33 8.34315 31.6867 7 30.0667 7H3.93333Z"
        fill={primary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.9745 13.0606H1V11.8206H32.9745V13.0606Z"
        fill={primary}
      />
    </svg>
  );
};

export function GlyphCardRebrandExternalImage({
  logoColor,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
} = {}): ComponentNode<SVGLogoProps> {
  const cdnUrl = getLogoCDNUrl(
    LOGO.CARD_REBRAND,
    GLYPH_CARD_REBRAND_LOGO_COLORS,
    logoColor
  );

  return <SVGLogo {...props} name={LOGO.CARD} cdnUrl={cdnUrl} />;
}

export function GlyphCardRebrandInlineSVG({
  logoColor,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
} = {}): ComponentNode<SVGLogoProps> {
  const svg = getGlyphCardRebrandSVG(
    getLogoColors(LOGO.CARD_REBRAND, GLYPH_CARD_REBRAND_LOGO_COLORS, logoColor)
  );

  return (
    <SVGLogo
      {...props}
      name={LOGO.CARD_REBRAND}
      render={() => {
        return svg;
      }}
    />
  );
}

export const GlyphCardRebrand = GlyphCardRebrandInlineSVG;
