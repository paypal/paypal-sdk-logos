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
} from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
import type { LogoColors, LogoColorMap } from "../../types";

export const VENMO_REBRAND_LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#008CFF",
  },
  [LOGO_COLOR.BLUE]: {
    primary: "#008CFF",
  },
  [LOGO_COLOR.WHITE]: {
    primary: "#ffffff",
  },
};

export const getVenmoRebrandSVG = ({ primary }: LogoColors): ElementNode => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="67"
      height="23"
      viewBox="0 -5.3743 67 23"
      fill="none"
    >
      <g clip-path="url(#clip0_7373_2810)">
        <path
          d="M11.0756 0C11.5306 0.718479 11.7357 1.45852 11.7357 2.39333C11.7357 5.37492 9.07385 9.24822 6.91347 11.968H1.979L0 0.652807L4.32066 0.260566L5.36698 8.31205C6.34465 6.78907 7.55109 4.39577 7.55109 2.76402C7.55109 1.87086 7.39109 1.26251 7.14099 0.761591L11.0756 0Z"
          fill={primary}
        />
        <path
          d="M16.6297 4.93957C17.4248 4.93957 19.4264 4.59178 19.4264 3.50394C19.4264 2.98158 19.0402 2.72102 18.585 2.72102C17.7886 2.72102 16.7436 3.63417 16.6297 4.93957ZM16.5386 7.09402C16.5386 8.42231 17.311 8.94344 18.335 8.94344C19.4501 8.94344 20.5178 8.68286 21.9056 8.0085L21.3829 11.4024C20.4051 11.8592 18.8813 12.164 17.4022 12.164C13.6504 12.164 12.3076 9.98836 12.3076 7.26845C12.3076 3.74319 14.4918 0 18.9949 0C21.4742 0 22.8606 1.32818 22.8606 3.17759C22.8608 6.15908 18.8589 7.07245 16.5386 7.09402Z"
          fill={primary}
        />
        <path
          d="M35.5301 2.61202C35.5301 3.04714 35.4612 3.67827 35.3923 4.09074L34.096 11.9247H29.8888L31.0714 4.74344C31.0939 4.54867 31.1628 4.15654 31.1628 3.93897C31.1628 3.41659 30.8215 3.28627 30.4112 3.28627C29.8661 3.28627 29.3198 3.52537 28.956 3.69996L27.6146 11.9248H23.3838L25.3166 0.19601H28.9784L29.0248 1.13217C29.8887 0.588253 31.0262 3.58925e-08 32.6402 3.58925e-08C34.7786 -0.000223598 35.5301 1.04461 35.5301 2.61202Z"
          fill={primary}
        />
        <path
          d="M47.7803 1.28395C48.9853 0.457915 50.1231 0 51.6917 0C53.8519 0 54.6034 1.04483 54.6034 2.61224C54.6034 3.04739 54.5345 3.67852 54.4659 4.09099L53.1709 11.9249H48.9626L50.1679 4.5919C50.19 4.39587 50.2368 4.15676 50.2368 4.00509C50.2368 3.41693 49.8953 3.28649 49.485 3.28649C48.9626 3.28649 48.4401 3.50406 48.0522 3.70018L46.7111 11.925H42.504L43.7091 4.59199C43.7312 4.39599 43.7766 4.15689 43.7766 4.00521C43.7766 3.41706 43.4349 3.28661 43.0261 3.28661C42.48 3.28661 41.9348 3.52572 41.5709 3.70031L40.2285 11.9251H35.999L37.9318 0.196344H41.5488L41.6625 1.1755C42.504 0.588701 43.6405 0.00044634 45.1643 0.00044634C46.4836 -3.13732e-07 47.3472 0.544026 47.7803 1.28395Z"
          fill={primary}
        />
        <path
          d="M62.3525 4.70054C62.3525 3.74305 62.102 3.09025 61.3521 3.09025C59.6919 3.09025 59.3508 5.89703 59.3508 7.33288C59.3508 8.42216 59.6695 9.09631 60.4194 9.09631C61.9886 9.09631 62.3525 6.13626 62.3525 4.70054ZM55.0752 7.15955C55.0752 3.46081 57.1217 -0.00012207 61.83 -0.00012207C65.3779 -0.00012207 66.6748 2.00231 66.6748 4.76622C66.6748 8.42204 64.6504 12.208 59.8284 12.208C56.2578 12.208 55.0752 9.96646 55.0752 7.15955Z"
          fill={primary}
        />
      </g>
      <defs>
        <clipPath id="clip0_7373_2810">
          <rect width="67" height="12.2514" fill={primary} />
        </clipPath>
      </defs>
    </svg>
  );
};

export function VenmoRebrandLogoExternalImage({
  logoColor = LOGO_COLOR.DEFAULT,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const cdnUrl = getLogoCDNUrl(
    LOGO.VENMO_REBRAND,
    VENMO_REBRAND_LOGO_COLORS,
    logoColor
  );

  return (
    <SVGLogo
      {...props}
      name={LOGO.VENMO_REBRAND}
      logoColor={logoColor}
      cdnUrl={cdnUrl}
    />
  );
}

export function VenmoRebrandLogoInlineSVG({
  logoColor = LOGO_COLOR.DEFAULT,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const svg = getVenmoRebrandSVG(
    getLogoColors(LOGO.VENMO, VENMO_REBRAND_LOGO_COLORS, logoColor)
  );

  return (
    <SVGLogo
      {...props}
      name={LOGO.VENMO_REBRAND}
      logoColor={logoColor}
      render={() => {
        return svg;
      }}
    />
  );
}

export const VenmoRebrandLogo = VenmoRebrandLogoInlineSVG;
