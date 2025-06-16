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

export const getVisaSVG = (): ElementNode => {
  return (
    <svg
      width="48"
      height="31"
      viewBox="0 0 48 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="30.2274" fill="#181E63" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.1725 12.535C24.155 14.0458 25.5047 14.8875 26.5219 15.3897C27.5668 15.9037 27.9174 16.2335 27.9134 16.6931C27.9056 17.3971 27.0795 17.7073 26.3072 17.7194C24.9584 17.7407 24.1754 17.3509 23.5515 17.0568L23.0657 19.3553C23.6921 19.6461 24.8495 19.8998 26.0495 19.9125C28.8686 19.9125 30.7119 18.5049 30.7209 16.3237C30.7327 13.5559 26.9356 13.4032 26.9617 12.1664C26.9703 11.7904 27.3243 11.3905 28.0997 11.2878C28.4839 11.2375 29.5442 11.1982 30.7451 11.7572L31.2165 9.53315C30.5705 9.29615 29.7403 9.06824 28.7062 9.06824C26.0543 9.06824 24.1875 10.4939 24.1725 12.535ZM35.7498 9.26C35.2345 9.26 34.8002 9.5628 34.6076 10.0293L30.5813 19.7484H33.3984L33.9582 18.1814H37.4002L37.7244 19.7484H40.206L38.0398 9.26H35.7498ZM36.1429 12.094L36.9558 16.0321H34.7304L36.1429 12.094ZM20.7589 9.26L18.5393 19.7484H21.2226L23.4414 9.26H20.7589ZM16.789 9.26L13.9962 16.3986L12.8666 10.3291C12.7343 9.65146 12.2106 9.26 11.6291 9.26H7.06326L7 9.5641C7.93703 9.77029 9.00211 10.1026 9.64715 10.4567C10.0421 10.6736 10.1546 10.8628 10.2845 11.378L12.4239 19.7484H15.2599L19.6072 9.26H16.789Z"
        fill="white"
      />
    </svg>
  );
};

export function VisaLogoExternalImage({
  ...props
}: {} = {}): ComponentNode<SVGCardLogoProps> {
  const cdnUrl = getLogoCDNUrl(CARD.VISA);

  return <SVGCardLogo {...props} name={CARD.VISA} cdnUrl={cdnUrl} />;
}

export function VisaLogoInlineSVG({
  ...props
}: {} = {}): ComponentNode<SVGCardLogoProps> {
  const svg = getVisaSVG();

  return (
    <SVGCardLogo
      {...props}
      name={CARD.VISA}
      render={() => {
        return svg;
      }}
    />
  );
}

export const VisaLogo = VisaLogoInlineSVG;
