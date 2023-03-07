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

export const GLYPH_BANK_LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#142C8E",
  },
};

export const getGlyphBankSVG = ({ primary }: LogoColors): ElementNode => {
  return (
    <svg
      width="32"
      height="21"
      viewBox="0 0 32 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3480_40125)">
        <rect width="31.4286" height="20.1533" fill="#F7F5F0" />
        <path
          d="M20.442 14.4427H10.9873C10.7057 14.4427 10.4766 14.678 10.4766 14.9671V15.5922C10.4766 15.888 10.7057 16.1233 10.9873 16.1233H20.4355C20.717 16.1233 20.9462 15.888 20.9462 15.5989V14.9738C20.9528 14.678 20.7236 14.4427 20.442 14.4427Z"
          fill={primary}
        />
        <path
          d="M15.7758 4.03867C15.7356 4.02878 15.6937 4.02878 15.6535 4.03867L10.6773 5.26477C10.5596 5.29379 10.4766 5.4019 10.4766 5.52623V6.75275C10.4766 6.90125 10.5938 7.02164 10.7385 7.02164H20.6908C20.8355 7.02164 20.9528 6.90125 20.9528 6.75275V5.52623C20.9528 5.4019 20.8697 5.29379 20.752 5.26477L15.7758 4.03867Z"
          fill={primary}
        />
        <path
          d="M11.9956 12.4261C11.7075 12.4261 11.4718 12.6681 11.4718 12.9639V13.3C11.4718 13.3739 11.5307 13.4344 11.6028 13.4344H19.8528C19.9248 13.4344 19.9837 13.3739 19.9837 13.3V12.9639C19.9837 12.6681 19.748 12.4261 19.4599 12.4261H19.1849V9.03824H19.4664C19.7545 9.03824 19.9903 8.79625 19.9903 8.50048V8.16438C19.9903 8.09044 19.9313 8.02994 19.8593 8.02994H16.2188C16.1468 8.02994 16.0879 8.09044 16.0879 8.16438V8.50048C16.0879 8.79625 16.3236 9.03824 16.6117 9.03824H16.8932V12.4261H14.5688V9.03824H14.8504C15.1385 9.03824 15.3742 8.79625 15.3742 8.50048V8.16438C15.3742 8.09044 15.3153 8.02994 15.2432 8.02994H11.6093C11.5373 8.02994 11.4783 8.09044 11.4783 8.16438V8.50048C11.4783 8.79625 11.7141 9.03824 12.0022 9.03824H12.2837V12.4261H11.9956Z"
          fill={primary}
        />
      </g>
      <defs>
        <clipPath id="clip0_3480_40125">
          <rect width="31.4286" height="20.1533" rx="4" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export function GlyphBankExternalImage({
  logoColor,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
} = {}): ComponentNode<SVGLogoProps> {
  const cdnUrl = getLogoCDNUrl(LOGO.BANK, GLYPH_BANK_LOGO_COLORS, logoColor);

  return <SVGLogo {...props} name={LOGO.BANK} cdnUrl={cdnUrl} />;
}

export function GlyphBankInlineSVG({
  logoColor,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
} = {}): ComponentNode<SVGLogoProps> {
  const svg = getGlyphBankSVG(
    getLogoColors(LOGO.BANK, GLYPH_BANK_LOGO_COLORS, logoColor)
  );

  return (
    <SVGLogo
      {...props}
      name={LOGO.BANK}
      render={() => {
        return svg;
      }}
    />
  );
}

export const GlyphBank = GlyphBankInlineSVG;
