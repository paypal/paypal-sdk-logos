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

export const PAYPAL_LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#003087",
    secondary: "#009cde",
  },
  [LOGO_COLOR.BLUE]: {
    primary: "#003087",
    secondary: "#009cde",
  },
  [LOGO_COLOR.WHITE]: {
    primary: "#ffffff",
    secondary: "#ffffff",
  },
  [LOGO_COLOR.BLACK]: {
    primary: "#333030",
    secondary: "#636363",
  },
  [LOGO_COLOR.MONOCHROME]: {
    primary: "#000000",
    secondary: "#000000",
  },
};

export const getPayPalSVG = ({
  primary,
  secondary,
}: LogoColors): ElementNode => {
  return (
    <svg
      width="101px"
      height="32"
      viewBox="0 0 101 32"
      preserveAspectRatio="xMinYMin meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={primary}
        d="M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z"
      />
      <path
        fill={primary}
        d="M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z"
      />
      <path
        fill={primary}
        d="M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z"
      />
      <path
        fill={secondary}
        d="M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z"
      />
      <path
        fill={secondary}
        d="M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z"
      />
      <path
        fill={secondary}
        d="M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z"
      />
    </svg>
  );
};

export function PayPalLogo({
  logoColor = LOGO_COLOR.DEFAULT,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const svg = getPayPalSVG(
    getLogoColors(LOGO.PAYPAL, PAYPAL_LOGO_COLORS, logoColor)
  );
  const cdnUrl = getLogoCDNUrl(LOGO.PAYPAL, PAYPAL_LOGO_COLORS, logoColor);

  return (
    <SVGLogo
      {...props}
      name={LOGO.PAYPAL}
      alt="PayPal"
      role="presentation"
      logoColor={logoColor}
      cdnUrl={cdnUrl}
      render={() => {
        return svg;
      }}
    />
  );
}

const DEFAULT_OPACITY = "1";

export const PP_LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#009cde",
    secondary: "#012169",
    tertiary: "#003087",
  },
  [LOGO_COLOR.BLUE]: {
    primary: "#009cde",
    secondary: "#012169",
    tertiary: "#003087",
  },
  [LOGO_COLOR.WHITE]: {
    primary: "#ffffff",
    primaryOpacity: "0.7",
    secondary: "#ffffff",
    secondaryOpacity: "0.7",
    tertiary: "#ffffff",
  },
  [LOGO_COLOR.BLACK]: {
    primary: "#808080",
    secondary: "#000000",
    tertiary: "#1a1a1a",
  },
};

export const getPPSVG = ({
  primary,
  secondary,
  tertiary,
  primaryOpacity = DEFAULT_OPACITY,
  secondaryOpacity = DEFAULT_OPACITY,
  tertiaryOpacity = DEFAULT_OPACITY,
}: LogoColors): ElementNode => {
  return (
    <svg
      width="24"
      height="32"
      viewBox="0 0 24 32"
      preserveAspectRatio="xMinYMin meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={primary}
        opacity={primaryOpacity}
        d="M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 6.694 26.557 C 6.6 26.957 6.881 27.257 7.255 27.257 L 11.375 27.257 C 11.844 27.257 12.311 26.957 12.405 26.457 L 12.405 26.157 L 13.247 20.957 L 13.247 20.757 C 13.341 20.257 13.809 19.857 14.277 19.857 L 14.84 19.857 C 18.864 19.857 21.954 18.157 22.89 13.157 C 23.358 11.057 23.172 9.357 22.048 8.157 C 21.767 7.757 21.298 7.457 20.924 7.157 L 20.924 7.157"
      />
      <path
        fill={secondary}
        opacity={secondaryOpacity}
        d="M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 8.192 16.357 C 8.286 15.757 8.754 15.357 9.315 15.357 L 11.655 15.357 C 16.243 15.357 19.801 13.357 20.924 7.757 C 20.831 7.457 20.924 7.357 20.924 7.157"
      />
      <path
        fill={tertiary}
        opacity={tertiaryOpacity}
        d="M 9.504 7.157 C 9.596 6.857 9.784 6.557 10.065 6.357 C 10.251 6.357 10.345 6.257 10.532 6.257 L 16.711 6.257 C 17.461 6.257 18.208 6.357 18.772 6.457 C 18.958 6.457 19.146 6.457 19.333 6.557 C 19.52 6.657 19.707 6.657 19.801 6.757 C 19.894 6.757 19.987 6.757 20.082 6.757 C 20.362 6.857 20.643 7.057 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.257 C 18.677 0.857 16.525 0.257 13.809 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.657 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 9.504 7.157 Z"
      />
    </svg>
  );
};

export function PPLogo({
  logoColor = LOGO_COLOR.DEFAULT,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const svg = getPPSVG(getLogoColors(LOGO.PP, PP_LOGO_COLORS, logoColor));
  const cdnUrl = getLogoCDNUrl(LOGO.PP, PP_LOGO_COLORS, logoColor);
  return (
    <SVGLogo
      {...props}
      name={LOGO.PP}
      alt="PayPal"
      role="presentation"
      logoColor={logoColor}
      cdnUrl={cdnUrl}
      render={() => {
        return svg;
      }}
    />
  );
}

export const PPMONOCHROME_LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.MONOCHROME]: {
    primary: "#000000",
    secondary: "#000000",
    tertiary: "#000000",
  },
};

export const getPPMonochromeSVG = ({
  primary,
  secondary,
  tertiary,
}: LogoColors): ElementNode => {
  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 155.21 183.56"
      style="enable-background:new 0 0 155.21 183.56;"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={primary}
        d="M60.82,38.11c1.48-0.71,3.06-1.07,4.71-1.07h44.72c5.57,0,10.73,0.38,15.35,1.12c1.36,0.22,2.69,0.47,3.98,0.76
          c1.3,0.29,2.57,0.61,3.79,0.97c0.61,0.18,1.22,0.37,1.82,0.57c0.6,0.2,1.16,0.43,1.73,0.65c0.91-12.22-2.51-20.75-8.41-27.27
          C119.88,4.28,104.66,0,85,0H31.88c-4.02,0-7.44,2.92-8.06,6.89L0.06,157.54c-0.47,2.97,1.83,5.66,4.84,5.66h31.29L54.76,46.24
          C55.32,42.7,57.58,39.66,60.82,38.11z "
      />
      <path
        fill={secondary}
        d="M132.83,47.59c-0.51-0.17-1.03-0.33-1.56-0.48c-1.07-0.32-2.18-0.6-3.31-0.85c-1.15-0.26-2.34-0.48-3.55-0.68
          c-4.23-0.68-8.99-1.03-14.16-1.03H68.72c-1.1,0-2.15,0.25-3.08,0.7c-2.06,0.99-3.59,2.94-3.97,5.33l-7.5,47.68
          c0.8-0.14,1.64-0.24,2.56-0.24c10.04,0,16.74,0,16.74,0c8.88,0,16.81-1,23.82-3.01c17.72-5.09,29.64-16.63,35.61-34.96
          c1.32-4.06,2.29-7.81,2.97-11.32C134.9,48.33,133.88,47.94,132.83,47.59z "
      />
      <path
        fill={tertiary}
        d="M148.21,56.27c-1.44-1.64-3.19-3.02-5.07-4.29c-4.63,22.39-18.44,53.91-70.2,53.91c-0.11,0-12.83-0.04-12.83-0.04
          c-4.02,0-7.41,2.92-8.03,6.89c0,0-9.97,62.79-10.46,66.09c-0.39,2.61,1.87,4.73,4.25,4.73h25.76c3.51,0,6.51-2.56,7.05-6.03
          l6.24-38.93c0.55-3.47,3.54-6.03,7.05-6.03h4.44c28.76,0,51.28-11.69,57.86-45.48c0.2-1,0.37-2.01,0.52-3.03
          C156.14,72.74,154.31,63.23,148.21,56.27z"
      />
    </svg>
  );
};

export function PPMonochrome({
  logoColor = LOGO_COLOR.MONOCHROME,
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const svg = getPPMonochromeSVG(
    getLogoColors(LOGO.PPMONOCHROME, PPMONOCHROME_LOGO_COLORS, logoColor)
  );
  const cdnUrl = getLogoCDNUrl(
    LOGO.PPMONOCHROME,
    PPMONOCHROME_LOGO_COLORS,
    logoColor
  );

  return (
    <SVGLogo
      name={LOGO.PP}
      alt="PayPal"
      logoColor={logoColor}
      cdnUrl={cdnUrl}
      render={() => {
        return svg;
      }}
    />
  );
}
