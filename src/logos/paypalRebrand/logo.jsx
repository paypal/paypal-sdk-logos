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

export const PAYPAL_REBRAND_LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#000000",
  },
  [LOGO_COLOR.BLACK]: {
    primary: "#000000",
  },
  [LOGO_COLOR.WHITE]: {
    primary: "#FFFFFF",
  },
  [LOGO_COLOR.BLUE]: {
    primary: "#60CDFF",
  },
};

export const getPayPalRebrandSVG = ({ primary }: LogoColors): ElementNode => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="108"
      height="45"
      viewBox="0 0 108 45"
      fill="none"
    >
      <path
        d="M104.656 7.89856V33.5476H98.8477V7.89856H104.656Z"
        fill={primary}
      />
      <path
        d="M96.7049 16.5479V33.5835H91.5403V32.1174C90.8889 32.7549 90.1426 33.2409 89.3134 33.5835C88.4803 33.9461 87.5801 34.1293 86.6127 34.1293C85.3966 34.1293 84.2713 33.9022 83.2368 33.4481C82.2023 32.97 81.3021 32.3246 80.5361 31.5079C79.7701 30.6911 79.162 29.735 78.7119 28.6473C78.2855 27.5358 78.0723 26.3406 78.0723 25.0697C78.0723 23.7988 78.2855 22.6156 78.7119 21.5279C79.162 20.4164 79.7701 19.4483 80.5361 18.6316C81.3021 17.8148 82.2023 17.1774 83.2368 16.7232C84.2713 16.2451 85.3966 16.0061 86.6127 16.0061C87.5801 16.0061 88.4803 16.1894 89.3134 16.5519C90.1465 16.8945 90.8889 17.3806 91.5403 18.018V16.5519H96.7049V16.5479ZM87.5524 28.9501C88.6106 28.9501 89.4753 28.5876 90.1505 27.8585C90.8494 27.1334 91.1968 26.2012 91.1968 25.0657C91.1968 23.9303 90.8494 22.998 90.1505 22.2729C89.4753 21.5479 88.6067 21.1813 87.5524 21.1813C86.4982 21.1813 85.6177 21.5439 84.9188 22.2729C84.2437 22.998 83.9041 23.9303 83.9041 25.0657C83.9041 26.2012 84.2437 27.1334 84.9188 27.8585C85.6177 28.5836 86.4943 28.9501 87.5524 28.9501Z"
        fill={primary}
      />
      <path
        d="M69.7903 7.89478C71.3223 7.89478 72.6253 8.10991 73.7072 8.54018C74.789 8.97046 75.7011 9.57204 76.4434 10.3449C77.2094 11.1417 77.8056 12.0501 78.2321 13.07C78.6585 14.0939 78.8717 15.1935 78.8717 16.3767C78.8717 17.56 78.6585 18.6596 78.2321 19.6834C77.8056 20.7073 77.2094 21.6157 76.4434 22.4085C75.7011 23.1814 74.789 23.783 73.7072 24.2133C72.6253 24.6435 71.3223 24.8587 69.7903 24.8587H66.987V33.5796H61.0762V7.89478H69.7864H69.7903ZM68.9454 19.5799C69.7351 19.5799 70.3392 19.5002 70.7696 19.3408C71.2197 19.1576 71.5908 18.9305 71.883 18.6596C72.4911 18.0898 72.7951 17.3289 72.7951 16.3767C72.7951 15.4245 72.4911 14.6636 71.883 14.0939C71.5908 13.823 71.2197 13.6039 70.7696 13.4485C70.3431 13.2652 69.7351 13.1776 68.9454 13.1776H66.987V19.5838H68.9454V19.5799Z"
        fill={primary}
      />
      <path
        d="M39.3086 16.5476H45.7248L50.0799 24.7228H50.1471L54.0284 16.5476H59.9707L47.241 42.2365H41.3302L47.1384 30.4837L39.3047 16.5476H39.3086Z"
        fill={primary}
      />
      <path
        d="M38.158 16.5479V33.5835H32.9935V32.1174C32.342 32.7549 31.5957 33.2409 30.7666 33.5835C29.9334 33.9461 29.0332 34.1293 28.0658 34.1293C26.8497 34.1293 25.7244 33.9022 24.6899 33.4481C23.6554 32.97 22.7552 32.3246 21.9892 31.5079C21.2232 30.6911 20.6152 29.735 20.165 28.6473C19.7386 27.5358 19.5254 26.3406 19.5254 25.0697C19.5254 23.7988 19.7386 22.6156 20.165 21.5279C20.6152 20.4164 21.2232 19.4483 21.9892 18.6316C22.7552 17.8148 23.6554 17.1774 24.6899 16.7232C25.7244 16.2451 26.8497 16.0061 28.0658 16.0061C29.0332 16.0061 29.9334 16.1894 30.7666 16.5519C31.5997 16.8945 32.342 17.3806 32.9935 18.018V16.5519H38.158V16.5479ZM29.0056 28.9501C30.0637 28.9501 30.9284 28.5876 31.6076 27.8585C32.3064 27.1334 32.6539 26.2012 32.6539 25.0657C32.6539 23.9303 32.3064 22.998 31.6076 22.2729C30.9324 21.5479 30.0637 21.1813 29.0056 21.1813C27.9474 21.1813 27.0708 21.5439 26.372 22.2729C25.6968 22.998 25.3572 23.9303 25.3572 25.0657C25.3572 26.2012 25.6968 27.1334 26.372 27.8585C27.0708 28.5836 27.9474 28.9501 29.0056 28.9501Z"
        fill={primary}
      />
      <path
        d="M11.4846 7.89478C13.0166 7.89478 14.3196 8.10991 15.4015 8.54018C16.4833 8.97046 17.3954 9.57204 18.1377 10.3449C18.9037 11.1417 19.4999 12.0501 19.9264 13.07C20.3528 14.0939 20.566 15.1935 20.566 16.3767C20.566 17.56 20.3528 18.6596 19.9264 19.6834C19.4999 20.7073 18.9037 21.6157 18.1377 22.4085C17.3954 23.1814 16.4833 23.783 15.4015 24.2133C14.3196 24.6435 13.0166 24.8587 11.4846 24.8587H8.68126V33.5796H2.77441V7.89478H11.4846ZM10.6436 19.5799C11.4333 19.5799 12.0374 19.5002 12.4678 19.3408C12.9179 19.1576 13.2891 18.9305 13.5812 18.6596C14.1893 18.0898 14.4933 17.3289 14.4933 16.3767C14.4933 15.4245 14.1893 14.6636 13.5812 14.0939C13.2891 13.823 12.9179 13.6039 12.4678 13.4485C12.0414 13.2652 11.4333 13.1776 10.6436 13.1776H8.6852V19.5838H10.6436V19.5799Z"
        fill={primary}
      />
    </svg>
  );
};

export function PayPalRebrandLogoExternalImage({
  logoColor = LOGO_COLOR.DEFAULT,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const cdnUrl = getLogoCDNUrl(
    LOGO.PAYPAL_REBRAND,
    PAYPAL_REBRAND_LOGO_COLORS,
    logoColor
  );

  return (
    <SVGLogo
      {...props}
      name={LOGO.PAYPAL_REBRAND}
      alt="PayPal"
      role="presentation"
      logoColor={logoColor}
      cdnUrl={cdnUrl}
    />
  );
}

export function PayPalRebrandLogoInlineSVG({
  logoColor = LOGO_COLOR.DEFAULT,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const svg = getPayPalRebrandSVG(
    getLogoColors(LOGO.PAYPAL_REBRAND, PAYPAL_REBRAND_LOGO_COLORS, logoColor)
  );

  return (
    <SVGLogo
      {...props}
      name={LOGO.PAYPAL_REBRAND}
      alt="PayPal"
      role="presentation"
      logoColor={logoColor}
      render={() => {
        return svg;
      }}
    />
  );
}

export const PayPalRebrandLogo = PayPalRebrandLogoInlineSVG;

// PayPal Monogram Logo

export const PP_REBRAND_LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#002991",
    secondary: "#60CDFF",
    tertiary: "#008CFF",
  },
  [LOGO_COLOR.BLUE]: {
    primary: "#002991",
    secondary: "#60CDFF",
    tertiary: "#008CFF",
  },
  [LOGO_COLOR.WHITE]: {
    primary: "#F3F3F3",
    secondary: "#898989",
    tertiary: "#B8B8B8",
  },
  [LOGO_COLOR.BLACK]: {
    primary: "#0D0D0D",
    secondary: "#808080",
    tertiary: "#4D4D4D",
  },
};

export const getPPRebrandSVG = ({
  primary,
  secondary,
  tertiary,
}: LogoColors): ElementNode => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="34"
      viewBox="0 0 20 34"
      fill="none"
    >
      <g clip-path="url(#clip0_4189_85875)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.3532 12.06C15.5794 11.65 14.643 11.4 13.6227 11.4H7.5307L6.51043 18H6.51041L6.33297 19.135L5.49014 24.6H1L3.70099 7H10.9759C13.4255 7 15.3527 8.385 16.0624 10.31C16.2645 10.855 16.3631 11.445 16.3532 12.06Z"
          fill={primary}
        />
        <path
          d="M18.9408 17.1201C18.443 20.1701 15.8553 22.4001 12.7946 22.4001H10.2858L9.24089 29.0001H4.77539L5.49007 24.6001L6.33289 19.1351L6.51033 18.0001H10.1231C13.869 18.0001 16.3532 14.7851 16.3532 12.0601C18.1965 13.0251 19.271 14.9751 18.9408 17.1201Z"
          fill={secondary}
        />
        <path
          d="M16.3536 12.06C15.5797 11.65 14.6433 11.4 13.623 11.4H7.531L6.51074 18H10.1236C13.8694 18 16.3536 14.785 16.3536 12.06Z"
          fill={tertiary}
        />
      </g>
    </svg>
  );
};

export function PPRebrandLogoExternalImage({
  logoColor = LOGO_COLOR.DEFAULT,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const cdnUrl = getLogoCDNUrl(
    LOGO.PP_REBRAND,
    PP_REBRAND_LOGO_COLORS,
    logoColor
  );

  return (
    <SVGLogo
      {...props}
      name={LOGO.PP}
      alt="PP"
      role="presentation"
      logoColor={logoColor}
      cdnUrl={cdnUrl}
    />
  );
}

export function PPRebrandLogoInlineSVG({
  logoColor = LOGO_COLOR.DEFAULT,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const svg = getPPRebrandSVG(
    getLogoColors(LOGO.PP, PP_REBRAND_LOGO_COLORS, logoColor)
  );

  return (
    <SVGLogo
      {...props}
      name={LOGO.PP}
      alt="PP"
      role="presentation"
      logoColor={logoColor}
      render={() => {
        return svg;
      }}
    />
  );
}

export const PPRebrandLogo = PPRebrandLogoInlineSVG;
