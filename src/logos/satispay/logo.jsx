/* @flow */
/** @jsx node */

import { node, type ComponentNode } from "@krakenjs/jsx-pragmatic/src";

import { SVGLogo, getLogoColors, type SVGLogoProps } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
import { type LogoColorMap } from "../../types";

const LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#2C2E2F",
  },
  [LOGO_COLOR.WHITE]: {
    primary: "#FFFFFF",
  },
  [LOGO_COLOR.BLACK]: {
    primary: "#2C2E2F",
  },
};

export function SatispayLogo({
  logoColor = LOGO_COLOR.BLACK,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const { primary } = getLogoColors(LOGO.SATISPAY, LOGO_COLORS, logoColor);

  return (
    <SVGLogo
      {...props}
      name={LOGO.SATISPAY}
      logoColor={logoColor}
      render={() => {
        return (
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6606 0.587416C17.8783 0.370742 17.7242 0.0001688 17.4159 0.0001688H12.2871L15.2694 2.96729L17.6606 0.587416Z"
              fill={primary}
            />
            <path
              d="M10.4934 7.72076L6.82547 4.07021L3.52477 7.35575L0.101478 10.7628C-0.033826 10.897 -0.033826 11.1151 0.101478 11.2493L3.52477 14.6569L6.82547 17.9419L10.4934 14.2913L7.43689 11.2493L7.19222 11.0063L7.43689 10.7628L10.4934 7.72076Z"
              fill={primary}
            />
            <path
              d="M15.2694 19.0445L12.2998 22H17.4042C17.712 22 17.8666 21.6294 17.6489 21.4128L15.2694 19.0445Z"
              fill={primary}
            />
            <path
              d="M21.9935 10.7628L18.5702 7.35578L14.715 3.51893L11.2805 0.100742C11.2185 0.0389805 11.1346 0.0050621 11.0471 0.0020256C11.0435 0.0020256 11.04 1.90735e-06 11.0359 1.90735e-06H4.67812C4.37038 1.90735e-06 4.21626 0.370575 4.43396 0.587248L7.37962 3.51893L11.0471 7.16948L14.6581 10.7628L14.9022 11.0063L14.6581 11.2493L11.0471 14.8427L7.37962 18.4932L4.44617 21.4128C4.22846 21.6294 4.38259 22 4.69033 22H11.0461H11.0486C11.1402 22 11.2282 21.9635 11.2928 21.8993L14.715 18.4932L18.5702 14.6569L21.9935 11.2493C22.1288 11.1152 22.1288 10.8975 21.9935 10.7628Z"
              fill={primary}
            />
          </svg>
        );
      }}
    />
  );
}
