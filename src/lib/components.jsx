/* @flow */
/** @jsx node */

import { svgToBase64, capitalizeFirstLetter } from "@krakenjs/belter/src";
import {
  node,
  html,
  type ElementNode,
  type ComponentNode,
} from "@krakenjs/jsx-pragmatic/src";

import { LOGO_CLASS, LOGO_COLOR } from "../constants";

type SVGProps = {|
  svg: ElementNode,
  cdnUrl?: string,
  loadFromCDN?: boolean,
  [key: string]: mixed,
|};

export function SVG(props: SVGProps): ElementNode {
  let { svg, cdnUrl, loadFromCDN, ...otherProps } = props;

  if (loadFromCDN && cdnUrl) {
    // $FlowFixMe
    const svgProps: SVGProps = { src: cdnUrl, ...otherProps };
    return <img {...svgProps} />;
  }

  if (!svg) {
    throw new TypeError(`Expected svg prop`);
  }

  svg = svg.render(html());

  if (typeof svg !== "string") {
    throw new TypeError(`Expected svg prop to be a string or jsx node`);
  }

  // $FlowFixMe
  const svgProps = {
    src: svgToBase64(svg),
    ...otherProps,
  };

  return <img {...svgProps} />;
}

export type SVGLogoProps = {
  render: () => ElementNode,
  name: string,
  logoColor?: $Values<typeof LOGO_COLOR>,
  cdnUrl?: string,
  loadFromCDN?: boolean,
};

export function SVGLogo({
  render,
  name,
  logoColor,
  ...props
}: SVGLogoProps): ComponentNode<SVGLogoProps> {
  return (
    <SVG
      {...props}
      svg={render()}
      alt=""
      class={`${LOGO_CLASS.LOGO} ${LOGO_CLASS.LOGO}-${name} ${
        logoColor ? `${LOGO_CLASS.LOGO_COLOR}-${logoColor}` : ""
      }`}
    />
  );
}

export type SVGCardLogoProps = {
  render: () => ElementNode,
  name: string,
};

export function SVGCardLogo({
  render,
  name,
  ...props
}: SVGCardLogoProps): ComponentNode<SVGCardLogoProps> {
  return (
    <SVG
      {...props}
      svg={render()}
      alt={capitalizeFirstLetter(name)}
      class={`${LOGO_CLASS.CARD} ${LOGO_CLASS.CARD}-${name}`}
    />
  );
}
