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
  svg: ElementNode | null,
  cdnUrl?: string,
  [key: string]: mixed,
|};

export function SVG(props: SVGProps): ElementNode {
  let { svg, cdnUrl, ...otherProps } = props;

  if (cdnUrl) {
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
  name: string,
  render?: () => ElementNode,
  logoColor?: $Values<typeof LOGO_COLOR>,
  cdnUrl?: string,
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
      svg={render ? render() : null}
      alt=""
      class={`${LOGO_CLASS.LOGO} ${LOGO_CLASS.LOGO}-${name} ${
        logoColor ? `${LOGO_CLASS.LOGO_COLOR}-${logoColor}` : ""
      }`}
    />
  );
}

export type SVGCardLogoProps = {
  name: string,
  render?: () => ElementNode,
  cdnUrl?: string,
};

export function SVGCardLogo({
  render,
  name,
  ...props
}: SVGCardLogoProps): ComponentNode<SVGCardLogoProps> {
  return (
    <SVG
      {...props}
      svg={render ? render() : null}
      alt={capitalizeFirstLetter(name)}
      class={`${LOGO_CLASS.CARD} ${LOGO_CLASS.CARD}-${name}`}
    />
  );
}
