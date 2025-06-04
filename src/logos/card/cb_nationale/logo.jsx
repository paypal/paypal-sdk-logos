/* @flow */
/** @jsx node */

import {
  node,
  type ElementNode,
  type ComponentNode,
} from "@krakenjs/jsx-pragmatic/src";
import { CARD } from "@paypal/sdk-constants/src";

import {
  getLogoCDNUrl,
  SVGCardLogo,
  type SVGCardLogoProps,
} from "../../../lib";

export const getCBNationaleSVG = (): ElementNode => {
  return (
    <svg
      width="48"
      height="31"
      viewBox="0 0 48 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_11874_358413"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="31"
      >
        <rect width="48" height="30.2274" rx="2" fill="#0C0C0D" />
      </mask>
      <g mask="url(#mask0_11874_358413)">
        <mask
          id="mask1_11874_358413"
          style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="48"
          height="31"
        >
          <rect width="48" height="30.2274" rx="4" fill="#0C0C0D" />
        </mask>
        <g mask="url(#mask1_11874_358413)">
          <rect width="48" height="30.2274" fill="white" />
          <rect
            width="48"
            height="30.2274"
            fill="url(#paint0_linear_11874_358413)"
          />
          <rect
            width="48"
            height="30.2274"
            fill="url(#paint1_radial_11874_358413)"
          />
          <g clip-path="url(#clip0_11874_358413)">
            <path
              d="M37 5.0379H10V25.1895H37V5.0379Z"
              fill="url(#paint2_linear_11874_358413)"
            />
            <path
              d="M18.291 14.6649H24.0768C24.0261 13.5109 23.7376 12.3158 22.8518 11.5465C21.7989 10.6336 19.9513 10.2848 18.3214 10.2848C16.6915 10.2848 14.7072 10.6541 13.6442 11.6388C12.7179 12.4902 12.5205 13.875 12.5205 15.0701C12.5205 16.2651 12.9052 17.8397 13.8973 18.6963C14.8895 19.5528 16.6561 19.8503 18.3062 19.8503C19.9564 19.8503 21.6369 19.5784 22.6797 18.7116C23.7224 17.8448 24.0869 16.3882 24.0869 15.0701H18.291V14.6649Z"
              fill="white"
            />
            <path
              d="M24.4668 15.0651V19.6349H32.5202C33.0905 19.606 33.6281 19.3562 34.0219 18.9372C34.4156 18.5182 34.6355 17.9619 34.6361 17.3833C34.6376 16.7981 34.4202 16.234 34.0275 15.8047C33.6349 15.3755 33.0963 15.113 32.5202 15.0702H24.4668V15.0651Z"
              fill="white"
            />
            <path
              d="M34.4893 12.5722C34.4941 12.2968 34.4441 12.0231 34.3423 11.7677C34.2404 11.5122 34.0888 11.2802 33.8966 11.0853C33.7043 10.8905 33.4753 10.7369 33.2232 10.6338C32.971 10.5306 32.701 10.4799 32.4291 10.4848C32.3448 10.4797 32.2603 10.4797 32.176 10.4848H24.4668V14.67H32.5658C33.0886 14.6311 33.5775 14.3932 33.9344 14.0041C34.2912 13.615 34.4894 13.1034 34.4893 12.5722Z"
              fill="white"
            />
          </g>
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_11874_358413"
          x1="-1.00191e-07"
          y1="0.699709"
          x2="47.3003"
          y2="30.2274"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.273366" stop-color="white" />
          <stop offset="0.777565" stop-color="#F0F0F0" />
          <stop offset="1" stop-color="#DFDFDF" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_11874_358413"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23 14.1061) rotate(87.0864) scale(19.6732 31.2398)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#E9E9E9" />
        </radialGradient>
        <linearGradient
          id="paint2_linear_11874_358413"
          x1="23.2302"
          y1="4.72504"
          x2="23.2302"
          y2="24.9433"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1B1F46" />
          <stop offset="0.35" stop-color="#1B1F46" />
          <stop offset="0.47" stop-color="#2C4B84" />
          <stop offset="0.55" stop-color="#3665A9" />
          <stop offset="0.61" stop-color="#3565A5" />
          <stop offset="0.66" stop-color="#33659A" />
          <stop offset="0.71" stop-color="#306487" />
          <stop offset="0.77" stop-color="#2B636C" />
          <stop offset="0.82" stop-color="#256349" />
          <stop offset="0.85" stop-color="#216230" />
          <stop offset="1" stop-color="#216230" />
        </linearGradient>
        <clipPath id="clip0_11874_358413">
          <rect
            width="27"
            height="20.1516"
            fill="white"
            transform="translate(10 5.0379)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export function CBNationaleLogoExternalImage({
  ...props
}: {} = {}): ComponentNode<SVGCardLogoProps> {
  const cdnUrl = getLogoCDNUrl(CARD.CB_NATIONALE);

  return <SVGCardLogo {...props} name={CARD.CB_NATIONALE} cdnUrl={cdnUrl} />;
}

export function CBNationaleLogoInlineSVG({
  ...props
}: {} = {}): ComponentNode<SVGCardLogoProps> {
  const svg = getCBNationaleSVG();

  return (
    <SVGCardLogo
      {...props}
      name={CARD.CB_NATIONALE}
      render={() => {
        return svg;
      }}
    />
  );
}

export const CBNationaleLogo = CBNationaleLogoInlineSVG;
