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

export const WECHATPAY_LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#1AAD19",
    secondary: "#FFFFFF",
  },
  [LOGO_COLOR.WHITE]: {
    primary: "#FFFFFF",
    secondary: "#FFFFFF",
  },
  [LOGO_COLOR.BLACK]: {
    primary: "#1AAD19",
    secondary: "#4D4D4D",
  },
};

export const getWechatpaySVG = ({
  primary,
  secondary,
}: LogoColors): ElementNode => {
  return (
    <svg
      width="106"
      height="20"
      viewBox="0 0 106 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M104.669 7.03906L102.609 12.6109C102.419 13.1141 102.258 13.6046 102.115 14.0378C102.081 14.1417 102.048 14.242 102.016 14.3378C101.847 13.783 101.641 13.1689 101.451 12.663L99.2509 7.08464L99.2329 7.03906H98.1884L101.335 15.0446C101.418 15.2538 101.435 15.3482 101.435 15.3905C101.435 15.4686 101.4 15.5722 101.336 15.7355C100.91 16.7646 100.35 17.4597 99.9556 17.8607C99.4107 18.3951 98.8182 18.6702 98.5134 18.7866L98.4554 18.8086L98.9065 19.6037C99.1298 19.5174 99.6888 19.2679 100.314 18.7318C101.403 17.7646 102.1 16.2735 103.161 13.4991L105.715 7.03906H104.669Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M96.353 12.9034C96.353 13.0306 96.3389 13.2185 96.2696 13.3952C96.0015 14.1959 95.2276 15.0513 93.8583 15.0513C93.1183 15.0513 92.2538 14.6051 92.2538 13.3474C92.2538 12.811 92.4285 12.3664 92.7726 12.026C93.3673 11.4378 94.4634 11.1405 96.0344 11.1405C96.1385 11.1405 96.2448 11.1418 96.353 11.1444V12.9034ZM97.4552 15.6277C97.3489 14.9582 97.3341 14.2641 97.3341 13.6139V10.2742C97.3341 8.02998 96.3073 6.84375 94.3645 6.84375C93.5297 6.84375 92.6427 7.09785 91.9626 7.52375L92.3608 8.22539C92.895 7.88703 93.5668 7.70014 94.2781 7.70014C94.2885 7.70014 94.2981 7.69982 94.3081 7.69982C94.9283 7.69982 95.4142 7.87293 95.7528 8.21424C96.1568 8.62178 96.353 9.24932 96.353 10.1323V10.2897C94.3068 10.2726 92.8412 10.7001 92.0038 11.5441C91.4954 12.0559 91.238 12.7103 91.238 13.4897C91.238 14.6542 92.0306 15.9077 93.771 15.9077C95.0379 15.9077 95.9616 15.2392 96.4384 14.5729L96.5518 15.7119H97.4688L97.4552 15.6277Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M90.1324 7.02325C90.1324 8.83997 88.9306 9.88161 86.8348 9.88161C86.3914 9.88161 85.8337 9.86325 85.4049 9.72423V4.4885C85.6092 4.44718 86.1398 4.3603 86.9917 4.3603C88.9876 4.3603 90.1324 5.33079 90.1324 7.02325ZM87.0268 3.50391C86.1807 3.50391 85.3247 3.58194 84.4828 3.73604L84.4238 3.74686V15.7121H85.4049V10.6183C85.7883 10.717 86.2146 10.7377 86.7648 10.7377C88.2737 10.7377 89.5205 10.2557 90.2741 9.38161C90.8389 8.75145 91.1131 7.95079 91.1131 6.9344C91.1131 5.94718 90.7916 5.118 90.1839 4.53735C89.5015 3.86128 88.4096 3.50391 87.0268 3.50391Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M79.9278 14.965C79.756 15.0021 79.516 15.0329 79.1867 15.0329C78.4016 15.0329 78.0362 14.4971 78.0362 13.347V7.87715H80.4278V7.03846H78.0362V5.12305H77.0548V7.03846H75.6411V7.87715H77.0548V13.1873C77.0548 14.1729 77.232 14.8568 77.5942 15.2752C77.9122 15.6886 78.4264 15.907 79.0817 15.907C79.5498 15.907 79.9529 15.8332 80.2802 15.6876L80.326 15.667L79.9278 14.965Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M73.8402 12.9034C73.8402 13.0306 73.8257 13.2188 73.7564 13.3952C73.4887 14.1959 72.7148 15.0513 71.3451 15.0513C70.6054 15.0513 69.741 14.6051 69.741 13.3474C69.741 12.811 69.9156 12.3664 70.2597 12.026C70.8544 11.4378 71.9505 11.1405 73.5215 11.1405C73.6256 11.1405 73.7319 11.1418 73.8402 11.1444V12.9034ZM74.9424 15.6277C74.8357 14.9585 74.8209 14.2644 74.8209 13.6139V10.2742C74.8209 8.02998 73.7941 6.84375 71.8516 6.84375C70.9769 6.84375 70.0419 7.12047 69.3511 7.58408L69.3472 7.5867L69.7471 8.29096C70.2964 7.91064 71.0088 7.70014 71.7649 7.70014C71.7749 7.70014 71.7849 7.69982 71.7949 7.69982C72.4154 7.69982 72.9013 7.87293 73.2399 8.21457C73.6436 8.62178 73.8402 9.24932 73.8402 10.1323V10.2897C71.7856 10.2726 70.3283 10.7001 69.4909 11.5441C68.9825 12.0559 68.7251 12.7103 68.7251 13.4897C68.7251 14.6542 69.5177 15.9077 71.2581 15.9077C72.525 15.9077 73.4487 15.2388 73.9255 14.5729L74.039 15.7119H74.9559L74.9424 15.6277Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M64.326 6.84402C63.7022 6.84402 63.1033 7.01976 62.5971 7.3509C62.1802 7.59353 61.8013 7.97844 61.5345 8.425V3.39746H60.5535V15.7122H61.5345V10.4342C61.5345 10.0889 61.5503 9.86566 61.6351 9.60599C62.0204 8.50467 63.0334 7.73582 64.0992 7.73582C66.0416 7.73582 66.3319 9.52664 66.3319 10.5942V15.7122H67.313V10.5053C67.313 7.02074 64.8247 6.84402 64.326 6.84402"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M56.0156 15.0158C52.9451 15.0158 51.1119 13.044 51.1119 9.7414C51.1119 6.31648 52.9973 4.27156 56.1554 4.27156C57.0314 4.27156 57.8543 4.43943 58.4884 4.74271L58.9327 3.95976L58.8956 3.9391C58.6685 3.81189 57.7976 3.39746 56.138 3.39746C52.524 3.39746 50.096 5.93976 50.096 9.72369C50.096 14.2748 53.1346 15.8899 55.7362 15.8899C57.2161 15.8899 58.3643 15.5739 58.9456 15.2781L58.9897 15.2555L58.5641 14.5053C57.8823 14.825 56.939 15.0158 56.0156 15.0158"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M45.3159 7.69982C46.0093 7.69982 46.5693 7.91523 46.9804 8.34014C47.6502 9.03162 47.7391 10.0598 47.7411 10.5385H42.587C42.7706 9.21031 43.5871 7.69982 45.3159 7.69982ZM47.8725 14.5831C47.385 14.8126 46.7668 15.0156 45.6652 15.0156C43.7008 15.0156 42.5657 13.6841 42.5425 11.3595H48.7079L48.7202 11.3024C48.7569 11.1346 48.7569 11.0057 48.7569 10.7713C48.7569 10.4493 48.7124 9.32309 48.1422 8.34703C47.5593 7.34932 46.6437 6.84375 45.4206 6.84375C43.1225 6.84375 41.5786 8.729 41.5786 11.5356C41.5786 14.1398 43.1785 15.8897 45.5602 15.8897C47.0777 15.8897 47.9334 15.4978 48.2311 15.3297L48.2804 15.3018L47.8725 14.5831Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M38.6457 10.3793C38.5651 10.6731 38.4859 10.9587 38.4085 11.237C38.107 12.3216 37.8431 13.2711 37.6379 14.2256C37.4365 13.0806 37.0908 11.7357 36.7238 10.3446L34.964 3.59277H34.0519L32.1172 10.3951C31.6748 11.8626 31.2891 13.1741 31.0823 14.2361C30.8861 13.3118 30.6067 12.1911 30.3126 11.0105L28.4355 3.59277H27.4316L30.5768 15.7121H31.4709L33.4936 8.76753C33.9765 7.14556 34.289 6.0272 34.4846 5.02523C34.6554 6.09835 34.9353 7.2331 35.3461 8.7649L37.123 15.7121H38.0348L41.604 3.59277H40.5988L38.6457 10.3793Z"
        fill={secondary}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.04253 12.559C7.94265 12.6102 7.83021 12.64 7.71068 12.64C7.43456 12.64 7.19421 12.4849 7.06791 12.2561L7.01958 12.1485L5.00687 7.65377C4.98496 7.60459 4.97143 7.54951 4.97143 7.49574C4.97143 7.28852 5.13639 7.12066 5.34001 7.12066C5.42281 7.12066 5.49917 7.1482 5.56071 7.19508L7.93588 8.91607C8.10954 9.03148 8.31671 9.09934 8.53967 9.09934C8.67273 9.09934 8.79967 9.0741 8.91759 9.03016L20.0885 3.97082C18.0861 1.56918 14.7885 0 11.0566 0C4.95016 0 6.10352e-05 4.1977 6.10352e-05 9.37639C6.10352e-05 12.202 1.48954 14.7449 3.82025 16.4639C4.00744 16.5997 4.12987 16.823 4.12987 17.0748C4.12987 17.158 4.11247 17.2344 4.09089 17.3138C3.90498 18.0207 3.60664 19.1525 3.59278 19.2052C3.56959 19.2941 3.5335 19.3866 3.5335 19.4793C3.5335 19.6866 3.69846 19.8544 3.90209 19.8544C3.98199 19.8544 4.04739 19.8243 4.11505 19.7846L6.53565 18.3626C6.71769 18.2554 6.91036 18.1895 7.12268 18.1895C7.23577 18.1895 7.34467 18.2069 7.44777 18.239C8.57704 18.5695 9.79523 18.7534 11.0566 18.7534C17.163 18.7534 22.1135 14.5551 22.1135 9.37639C22.1135 7.80787 21.6569 6.33082 20.854 5.03148L8.1234 12.5115L8.04253 12.559Z"
        fill={primary}
      />
    </svg>
  );
};

export function WechatpayLogoExternalImage({
  logoColor = LOGO_COLOR.BLACK,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const cdnUrl = getLogoCDNUrl(
    LOGO.WECHATPAY,
    WECHATPAY_LOGO_COLORS,
    logoColor
  );

  return (
    <SVGLogo
      {...props}
      name={LOGO.WECHATPAY}
      logoColor={logoColor}
      cdnUrl={cdnUrl}
      render={() => {
        return <svg />;
      }}
    />
  );
}

export function WechatpayLogoInlineSVG({
  logoColor = LOGO_COLOR.BLACK,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const svg = getWechatpaySVG(
    getLogoColors(LOGO.WECHATPAY, WECHATPAY_LOGO_COLORS, logoColor)
  );

  return (
    <SVGLogo
      {...props}
      name={LOGO.WECHATPAY}
      logoColor={logoColor}
      render={() => {
        return svg;
      }}
    />
  );
}

export const WechatpayLogo = WechatpayLogoInlineSVG;
