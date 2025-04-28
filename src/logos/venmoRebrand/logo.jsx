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
      width="79"
      height="34"
      viewBox="0 0 79 34"
      fill="none"
    >
      <g clip-path="url(#clip0_2070_7432)">
        <path
          d="M13.8751 10C14.395 10.821 14.6294 11.6667 14.6294 12.7349C14.6294 16.142 11.5877 20.5682 9.11893 23.6761H3.4802L1.21875 10.746L6.15607 10.2978L7.35172 19.4984C8.46893 17.758 9.84756 15.0231 9.84756 13.1585C9.84756 12.1379 9.66473 11.4427 9.37893 10.8703L13.8751 10Z"
          fill={primary}
        />
        <path
          d="M20.2212 15.6446C21.1297 15.6446 23.4171 15.2471 23.4171 14.004C23.4171 13.4071 22.9757 13.1094 22.4555 13.1094C21.5455 13.1094 20.3513 14.1528 20.2212 15.6446ZM20.1171 18.1065C20.1171 19.6244 20.9997 20.2199 22.1699 20.2199C23.4442 20.2199 24.6642 19.9221 26.25 19.1515L25.6527 23.0298C24.5354 23.5518 22.7941 23.9001 21.104 23.9001C16.8166 23.9001 15.2822 21.4139 15.2822 18.3058C15.2822 14.2774 17.7782 10 22.924 10C25.7571 10 27.3413 11.5177 27.3413 13.6311C27.3416 17.0381 22.7685 18.0819 20.1171 18.1065Z"
          fill={primary}
        />
        <path
          d="M41.8203 12.9848C41.8203 13.482 41.7416 14.2032 41.6629 14.6746L40.1815 23.6266H35.3738L36.7253 15.4204C36.7509 15.1979 36.8297 14.7498 36.8297 14.5012C36.8297 13.9042 36.4397 13.7553 35.9708 13.7553C35.348 13.7553 34.7237 14.0285 34.308 14.228L32.7751 23.6267H27.9404L30.1492 10.224H34.3336L34.3865 11.2938C35.3737 10.6722 36.6736 10 38.5179 10C40.9615 9.99974 41.8203 11.1937 41.8203 12.9848Z"
          fill={primary}
        />
        <path
          d="M55.8182 11.4672C57.1952 10.5233 58.4954 10 60.2878 10C62.7564 10 63.6151 11.194 63.6151 12.9851C63.6151 13.4823 63.5364 14.2035 63.4581 14.6749L61.9782 23.6269H57.1692L58.5466 15.2473C58.5719 15.0233 58.6253 14.75 58.6253 14.5767C58.6253 13.9046 58.2351 13.7556 57.7662 13.7556C57.1692 13.7556 56.5722 14.0042 56.129 14.2283L54.5964 23.627H49.7889L51.1659 15.2474C51.1912 15.0234 51.2431 14.7502 51.2431 14.5769C51.2431 13.9048 50.8526 13.7557 50.3855 13.7557C49.7614 13.7557 49.1384 14.0289 48.7226 14.2284L47.1886 23.6271H42.3555L44.5641 10.2244H48.6974L48.8273 11.3433C49.7889 10.6727 51.0876 10.0005 52.8288 10.0005C54.3365 10 55.3233 10.6217 55.8182 11.4672Z"
          fill={primary}
        />
        <path
          d="M72.4702 15.3714C72.4702 14.2773 72.184 13.5313 71.3271 13.5313C69.4299 13.5313 69.0401 16.7387 69.0401 18.3795C69.0401 19.6242 69.4043 20.3946 70.2612 20.3946C72.0544 20.3946 72.4702 17.0121 72.4702 15.3714ZM64.1543 18.1814C64.1543 13.9548 66.4929 9.99988 71.8732 9.99988C75.9274 9.99988 77.4095 12.2881 77.4095 15.4465C77.4095 19.6241 75.0961 23.9504 69.5859 23.9504C65.5057 23.9504 64.1543 21.3889 64.1543 18.1814Z"
          fill={primary}
        />
      </g>
      <defs>
        <clipPath id="clip0_2070_7432">
          <rect
            width="76.5625"
            height="14"
            fill="white"
            transform="translate(1.21875 10)"
          />
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
    LOGO.VENMO,
    VENMO_REBRAND_LOGO_COLORS,
    logoColor
  );

  return (
    <SVGLogo
      {...props}
      name={LOGO.VENMO}
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
      name={LOGO.VENMO}
      logoColor={logoColor}
      render={() => {
        return svg;
      }}
    />
  );
}

export const VenmoRebrandLogo = VenmoRebrandLogoInlineSVG;
