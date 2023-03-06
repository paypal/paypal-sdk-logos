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

export const BANCONTACT_LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#FFFFFF",
    secondary: "#FFFFFF",
    tertiary: "#FFFFFF",
    quaternary: "#FFFFFF",
  },
  [LOGO_COLOR.WHITE]: {
    primary: "#FFFFFF",
    secondary: "#FFFFFF",
    tertiary: "#FFFFFF",
    quaternary: "#FFFFFF",
  },
  [LOGO_COLOR.BLACK]: {
    primary: "#1E3764",
    secondary: "#005AB9",
    tertiary: "#FBA900",
    quaternary: "#FFD800",
  },
};

export const getBancontactSVG = ({
  primary,
  secondary,
  tertiary,
  quaternary,
}: LogoColors): ElementNode => {
  return (
    <svg
      width="155"
      height="17"
      viewBox="0 0 155 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49.3635 15.782V0.594238H54.0604C57.4744 0.594238 59.6706 1.87434 59.6706 4.52136C59.6706 6.01845 58.9748 7.0599 57.9962 7.66738C59.4096 8.31822 60.2359 9.57664 60.2359 11.2907C60.2359 14.35 57.9962 15.782 54.5171 15.782L49.3635 15.782ZM52.3861 6.90794H54.6258C55.9957 6.90794 56.5828 6.23532 56.5828 4.99868C56.5828 3.67511 55.5173 3.24126 54.0821 3.24126H52.3861V6.90794ZM52.3861 13.1349H54.2561C56.0827 13.1349 57.1482 12.6793 57.1482 11.2474C57.1482 9.83709 56.2349 9.25127 54.5171 9.25127H52.3861V13.1349ZM66.0974 16.0423C63.1183 16.0423 61.6179 14.5887 61.6179 12.6359C61.6179 10.4879 63.3793 9.22949 65.9887 9.20782C66.6371 9.21963 67.2838 9.27766 67.9239 9.38144V8.86067C67.9239 7.53721 67.1629 6.90794 65.706 6.90794C64.7245 6.89568 63.7499 7.0725 62.8356 7.42872L62.292 5.08549C63.227 4.69488 64.7274 4.43455 66.0539 4.43455C69.2504 4.43455 70.8377 6.12694 70.8377 9.05597V15.0877C69.9462 15.5433 68.2718 16.0423 66.0974 16.0423V16.0423ZM67.9239 13.5906V11.269C67.417 11.1566 66.8994 11.0983 66.3801 11.0954C65.3798 11.0954 64.597 11.486 64.597 12.5058C64.597 13.4171 65.2493 13.8944 66.4018 13.8944C66.9259 13.9114 67.4468 13.8075 67.9239 13.5906V13.5906ZM72.9504 15.782V5.38918C74.513 4.76291 76.1808 4.43894 77.8647 4.43455C81.0394 4.43455 82.866 5.99667 82.866 8.88235V15.782H79.8652V9.09933C79.8652 7.60224 79.1694 6.90794 77.843 6.90794C77.1843 6.89873 76.5315 7.03199 75.9294 7.29855V15.782H72.9504ZM93.3527 5.08551L92.7873 7.4504C92.0106 7.11456 91.1765 6.93042 90.3302 6.90794C88.5689 6.90794 87.6121 8.1447 87.6121 10.1842C87.6121 12.419 88.6123 13.5689 90.4824 13.5689C91.317 13.5461 92.1382 13.3542 92.8961 13.0048L93.3744 15.4131C92.3898 15.8503 91.3206 16.0652 90.2432 16.0423C86.6336 16.0423 84.5461 13.8076 84.5461 10.2709C84.5461 6.7561 86.6118 4.43455 90.0693 4.43455C91.1965 4.42902 92.3132 4.65042 93.3527 5.0855L93.3527 5.08551ZM99.8354 16.0423C96.4867 16.0423 94.3992 13.7208 94.3992 10.2276C94.3992 6.75611 96.4867 4.43456 99.8354 4.43456C103.206 4.43456 105.25 6.75611 105.25 10.2276C105.25 13.7207 103.206 16.0423 99.8354 16.0423L99.8354 16.0423ZM99.8354 13.5689C101.379 13.5689 102.184 12.2888 102.184 10.2276C102.184 8.18806 101.379 6.90795 99.8354 6.90795C98.3133 6.90795 97.4652 8.18806 97.4652 10.2276C97.4652 12.2888 98.3132 13.5689 99.8354 13.5689L99.8354 13.5689ZM106.986 15.782V5.38918C108.549 4.76291 110.217 4.43894 111.901 4.43455C115.075 4.43455 116.902 5.99667 116.902 8.88235V15.782H113.901V9.09933C113.901 7.60224 113.205 6.90794 111.879 6.90794C111.22 6.89873 110.567 7.03199 109.965 7.29855V15.782H106.986ZM123.669 16.0423C121.082 16.0423 119.755 14.632 119.755 11.768V7.08157H118.277V4.69489H119.755V2.28652L122.756 2.13468V4.69489H125.17V7.08157H122.756V11.7247C122.756 12.9831 123.278 13.5689 124.257 13.5689C124.644 13.5679 125.031 13.5243 125.409 13.4387L125.561 15.8471C124.94 15.9843 124.305 16.0498 123.669 16.0423V16.0423ZM131.244 16.0423C128.265 16.0423 126.764 14.5887 126.764 12.636C126.764 10.4879 128.526 9.2295 131.135 9.20783C131.783 9.21965 132.43 9.27767 133.07 9.38146V8.86068C133.07 7.53722 132.309 6.90795 130.852 6.90795C129.871 6.89569 128.896 7.07252 127.982 7.42873L127.438 5.08551C128.373 4.6949 129.874 4.43456 131.2 4.43456C134.397 4.43456 135.984 6.12695 135.984 9.05598V15.0877C135.092 15.5433 133.418 16.0423 131.244 16.0423V16.0423ZM133.07 13.5906V11.269C132.563 11.1565 132.046 11.0983 131.526 11.0954C130.526 11.0954 129.743 11.486 129.743 12.5058C129.743 13.4171 130.396 13.8944 131.548 13.8944C132.072 13.9114 132.593 13.8075 133.07 13.5906V13.5906ZM146.251 5.08551L145.685 7.45041C144.909 7.11458 144.074 6.93043 143.228 6.90795C141.467 6.90795 140.51 8.14471 140.51 10.1842C140.51 12.419 141.51 13.5689 143.38 13.5689C144.215 13.5461 145.036 13.3542 145.794 13.0048L146.272 15.4132C145.288 15.8503 144.219 16.0652 143.141 16.0423C139.532 16.0423 137.444 13.8076 137.444 10.271C137.444 6.75611 139.51 4.43456 142.967 4.43456C144.094 4.42902 145.211 4.65041 146.251 5.0855V5.08551ZM152.848 16.0423C150.261 16.0423 148.934 14.632 148.934 11.768V7.08157H147.456V4.69489H148.934V2.28652L151.935 2.13468V4.69489H154.349V7.08157H151.935V11.7247C151.935 12.9831 152.457 13.5689 153.435 13.5689C153.823 13.5679 154.21 13.5243 154.588 13.4387L154.74 15.8471C154.119 15.9843 153.484 16.0498 152.848 16.0423V16.0423Z"
        fill={primary}
      />
      <path
        d="M8.13508 15.7818C13.8431 15.7818 16.6971 11.9849 19.551 8.18799H0.61084V15.7818H8.13508Z"
        fill="url(#paint0_linear_25_23)"
      />
      <path
        d="M30.9667 0.594238C25.2588 0.594238 22.4048 4.39117 19.5508 8.18809H38.491V0.594238H30.9667Z"
        fill="url(#paint1_linear_25_23)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_25_23"
          x1="4.44184"
          y1="12.3355"
          x2="18.29"
          y2="7.18051"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={secondary} />
          <stop offset="1" stop-color={primary} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_25_23"
          x1="20.6976"
          y1="8.84673"
          x2="35.4025"
          y2="3.81864"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={tertiary} />
          <stop offset="1" stop-color={quaternary} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export function BancontactLogoExternalImage({
  logoColor = LOGO_COLOR.BLACK,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const cdnUrl = getLogoCDNUrl(
    LOGO.BANCONTACT,
    BANCONTACT_LOGO_COLORS,
    logoColor
  );

  return (
    <SVGLogo
      {...props}
      name={LOGO.BANCONTACT}
      logoColor={logoColor}
      cdnUrl={cdnUrl}
      render={() => {
        return <svg />;
      }}
    />
  );
}

export function BancontactLogoInlineSVG({
  logoColor = LOGO_COLOR.BLACK,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const svg = getBancontactSVG(
    getLogoColors(LOGO.BANCONTACT, BANCONTACT_LOGO_COLORS, logoColor)
  );

  return (
    <SVGLogo
      {...props}
      name={LOGO.BANCONTACT}
      logoColor={logoColor}
      render={() => {
        return svg;
      }}
    />
  );
}

export const BancontactLogo = BancontactLogoInlineSVG;
