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
      width="27"
      height="21"
      viewBox="0 0 27 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_31637_7538)">
        <path
          d="M27 0.0379028H0V20.1895H27V0.0379028Z"
          fill="url(#paint0_linear_31637_7538)"
        />
        <path
          d="M8.29104 9.66491H14.0768C14.0261 8.51089 13.7376 7.31585 12.8518 6.54651C11.7989 5.63356 9.95133 5.28479 8.32141 5.28479C6.69149 5.28479 4.70723 5.65407 3.64424 6.63883C2.71792 7.49023 2.52051 8.87505 2.52051 10.0701C2.52051 11.2651 2.90521 12.8397 3.89734 13.6963C4.88946 14.5528 6.65605 14.8503 8.30622 14.8503C9.95639 14.8503 11.6369 14.5784 12.6797 13.7116C13.7224 12.8448 14.0869 11.3882 14.0869 10.0701H8.29104V9.66491Z"
          fill="white"
        />
        <path
          d="M14.4668 10.0651V14.6349H22.5202C23.0905 14.606 23.6281 14.3562 24.0219 13.9372C24.4156 13.5182 24.6355 12.9619 24.6361 12.3833C24.6376 11.7981 24.4202 11.234 24.0275 10.8047C23.6349 10.3755 23.0963 10.113 22.5202 10.0702H14.4668V10.0651Z"
          fill="white"
        />
        <path
          d="M24.4893 7.57225C24.4941 7.29677 24.4441 7.02315 24.3423 6.76768C24.2404 6.51222 24.0888 6.28016 23.8966 6.08534C23.7043 5.89052 23.4753 5.73694 23.2232 5.63376C22.971 5.53057 22.701 5.4799 22.4291 5.48477C22.3448 5.47969 22.2603 5.47969 22.176 5.48477H14.4668V9.66998H22.5658C23.0886 9.63112 23.5775 9.39322 23.9344 9.00408C24.2912 8.61495 24.4894 8.10341 24.4893 7.57225Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_31637_7538"
          x1="13.2302"
          y1="-0.274962"
          x2="13.2302"
          y2="19.9433"
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
        <clipPath id="clip0_31637_7538">
          <rect
            width="27"
            height="20.1516"
            fill="white"
            transform="translate(0 0.0379028)"
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
