/* @flow */
/** @jsx node */

import { node, type ComponentNode } from "@krakenjs/jsx-pragmatic/src";

import { SVGLogo, getLogoColors, type SVGLogoProps } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
import { type LogoColorMap } from "../../types";

const LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#A6009C",
    secondary: "#FF009C",
    tertiary: "#1C1C1C",
  },
  [LOGO_COLOR.WHITE]: {
    primary: "#FFFFFF",
    secondary: "#FFFFFF",
    tertiary: "#FFFFFF",
  },
  [LOGO_COLOR.BLACK]: {
    primary: "#A6009C",
    secondary: "#FF009C",
    tertiary: "#1C1C1C",
  },
};

export function PaidyLogo({
  logoColor = LOGO_COLOR.DEFAULT,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const { primary, secondary, tertiary } = getLogoColors(
    LOGO.PAIDY,
    LOGO_COLORS,
    logoColor
  );

  return (
    <SVGLogo
      {...props}
      name={LOGO.PAIDY}
      logoColor={logoColor}
      render={() => {
        return (
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 72 34"
            style="enable-background:new 0 0 72 34;"
          >
            <g>
              <linearGradient
                id="SVGID_1_"
                gradientUnits="userSpaceOnUse"
                x1="1.6828"
                y1="422.7157"
                x2="18.8046"
                y2="406.9695"
                gradientTransform="matrix(1 0 0 1 0 -398)"
              >
                <stop offset="0" stop-color={primary} />
                <stop offset="1" stop-color={secondary} />
              </linearGradient>
              <path
                class="st0"
                d="M9.1,15.2C9,15.1,8,14,8,14v7.3c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1l0-4.8C9.9,16.2,9.6,15.8,9.1,15.2z"
                fill="url(#SVGID_1_)"
              />

              <linearGradient
                id="SVGID_2_"
                gradientUnits="userSpaceOnUse"
                x1="1.7723"
                y1="428.4604"
                x2="13.4465"
                y2="408.238"
                gradientTransform="matrix(1 0 0 1 0 -398)"
              >
                <stop offset="9.012310e-03" stop-color={primary} />
                <stop offset="1" stop-color={secondary} />
              </linearGradient>
              <path
                class="st1"
                d="M19,19.5c-0.4,0-0.7-0.1-1-0.2
  c0,0.2,0.1,1-1.1,1.8c-0.1,0.1-4.7,3-5.6,3.4c-1.2,0.6-2.6,0.4-3.4,0c-0.3-0.1-4.3-2.5-4.5-2.6c-0.3-0.2-0.8-0.6-1-1.2
  c-0.1-0.5-0.1-1.2-0.1-1.2v-6.1c0-0.9,0.3-2.6,2-3.4C6,9.5,7,10.5,8,11.7c0.1,0.1,1.9,2.6,2.8,3.3c1.1,0.9,2.1,1.4,3.4,1.4
  c3.5,0,4.8-2.7,4.8-4.8c0-2.6-2.2-4.8-4.8-4.8c-1.6,0-3.1,0.8-4,2.2c0.2,0.2,0.6,0.7,0.6,0.8c0,0,0.7,0.9,0.7,1
  c0.1-0.1,1.1-1.7,2.6-1.7c1.6,0,2.6,1.2,2.6,2.6c0,1.4-1.2,2.6-2.5,2.6c-0.8,0-1.4-0.3-2-0.9c-0.7-0.6-2.3-2.8-2.3-2.8
  C9.7,10.4,8.6,9,7.8,8.5C6.8,7.8,5.4,7.4,3.5,8S0,10.7,0,13.5l0,6.1c0,0.2,0,1,0.2,1.7c0.3,1.2,0.9,1.8,2,2.6
  c0.6,0.3,3.8,2.2,4.3,2.5c0.9,0.5,1.9,0.7,3.1,0.7c1,0,1.9-0.2,2.7-0.6c1.3-0.7,5.4-3.3,5.7-3.5c1.2-0.8,2.2-2.1,2.1-3.7
  C19.8,19.4,19.4,19.5,19,19.5z"
                fill="url(#SVGID_2_)"
              />

              <linearGradient
                id="SVGID_3_"
                gradientUnits="userSpaceOnUse"
                x1="5.5794"
                y1="427.417"
                x2="23.3642"
                y2="411.0611"
                gradientTransform="matrix(1 0 0 1 0 -398)"
              >
                <stop offset="0" stop-color={primary} />
                <stop offset="1" stop-color={secondary} />
              </linearGradient>
              <path
                class="st2"
                d="M19,18.4c0.7,0,1.3-0.6,1.3-1.3
  c0-0.7-0.6-1.3-1.3-1.3c-0.7,0-1.3,0.6-1.3,1.3C17.7,17.8,18.3,18.4,19,18.4z"
                fill="url(#SVGID_3_)"
              />
              <path
                class="st3"
                d="M27.7,26.3c-0.7,0-1.2-0.6-1.2-1.2v-8.8c0-1.7,1.2-4.3,4.6-4.3c0.6,0,4.3,0,4.3,4.9c0,4.7-2.7,5-3.8,5
  c-1.5,0-2.4-0.9-2.7-1.4v4.7C28.9,25.8,28.4,26.3,27.7,26.3z M32.9,16.9c0-0.9-0.2-1.6-0.5-2.2S31.5,14,30.9,14
  c-0.6,0-1.2,0.2-1.5,0.8c-0.3,0.4-0.5,1.2-0.5,2.2c0,0.9,0.2,1.6,0.5,2c0.4,0.5,0.9,0.8,1.5,0.8c0.6,0,1.1-0.2,1.5-0.8
  C32.8,18.5,32.9,17.8,32.9,16.9z"
                fill={tertiary}
              />
              <path
                class="st3"
                d="M49.3,21.7c-0.7,0-1.3-0.6-1.3-1.2v-7c0-0.7,0.6-1.2,1.3-1.2c0.7,0,1.3,0.6,1.3,1.2v7
  C50.6,21.1,50,21.7,49.3,21.7z"
                fill={tertiary}
              />
              <path
                class="st3"
                d="M49.3,7.9c-0.7,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4s1.4-0.6,1.4-1.4C50.6,8.6,50,7.9,49.3,7.9z"
                fill={tertiary}
              />
              <path
                class="st3"
                d="M60.4,7.6c-0.7,0-1.2,0.6-1.2,1.2v4.7c-0.3-0.4-0.7-0.8-1.2-1.1c-0.4-0.2-1-0.4-1.6-0.4c-1.1,0-2,0.5-2.8,1.4
  c-0.7,0.9-1,2.1-1,3.6c0,1.5,0.4,2.7,1,3.6c0.4,0.4,0.8,0.8,1.4,1c0.6,0.2,1.2,0.3,1.8,0.3c1.2,0,2.2-0.3,3.2-0.9
  c1-0.6,1.5-1.8,1.5-3.4V8.8C61.7,8.1,61.1,7.6,60.4,7.6z M58.7,19c-0.4,0.5-0.8,0.8-1.5,0.8c-0.7,0-1.2-0.2-1.5-0.8
  c-0.4-0.5-0.5-1.2-0.5-2.2c0-0.8,0.2-1.5,0.5-2c0.4-0.5,0.8-0.8,1.5-0.8s1.2,0.2,1.5,0.7c0.4,0.5,0.5,1.2,0.5,2
  C59.2,17.8,59.1,18.6,58.7,19z"
                fill={tertiary}
              />
              <path
                class="st3"
                d="M44.6,21.7c0.7,0,1.2-0.6,1.2-1.2v-4.3c0-1.7-1.2-4.3-4.6-4.3c-0.6,0-4.3,0-4.3,4.9c0,4.7,2.7,5,3.8,5
  c1.5,0,2.4-0.9,2.7-1.4v0.2C43.4,21.1,43.9,21.7,44.6,21.7z M39.3,16.8c0-0.9,0.2-1.6,0.5-2.2c0.4-0.5,0.9-0.8,1.5-0.8
  s1.2,0.2,1.5,0.8c0.3,0.4,0.5,1.2,0.5,2.2c0,0.9-0.2,1.6-0.5,2c-0.4,0.5-0.9,0.8-1.5,0.8c-0.6,0-1.1-0.2-1.5-0.8
  C39.5,18.4,39.3,17.7,39.3,16.8z"
                fill={tertiary}
              />
              <path
                class="st3"
                d="M64.6,25.6c0,0.4,0.3,0.6,0.6,0.7c0.7,0.1,1.9,0.1,2.5-0.4c0.4-0.4,0.8-0.9,1.1-1.7l3.1-10.4
  c0.3-0.8-0.3-1.6-1.2-1.6c-0.6,0-1,0.4-1.2,0.9L68,18.9l-1.7-5.8c-0.2-0.6-0.6-0.9-1.2-0.9c-0.9,0-1.5,0.9-1.2,1.7l2.7,9
  c0.2,0.5,0.1,0.9-0.2,1.1c-0.3,0.2-0.6,0.4-1.1,0.4c-0.4,0-0.7,0.3-0.7,0.7L64.6,25.6L64.6,25.6z"
                fill={tertiary}
              />
            </g>
          </svg>
        );
      }}
    />
  );
}
