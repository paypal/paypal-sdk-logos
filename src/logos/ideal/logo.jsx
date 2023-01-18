/* @flow */
/** @jsx node */

import { node, type ComponentNode } from "@krakenjs/jsx-pragmatic/src";

import { SVGLogo, type SVGLogoProps } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";

import { getIdealSVG } from "./svg";

export function IdealLogo({
  logoColor = LOGO_COLOR.BLACK,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const svg = getIdealSVG(logoColor);

  const CDN_URL =
    "https://www.paypalobjects.com/images/checkout/latinum/Altpay_logo_iDEAL.svg";

  return (
    <SVGLogo
      {...props}
      name={LOGO.IDEAL}
      cdnUrl={CDN_URL}
      render={() => {
        return svg;
      }}
    />
  );
}
