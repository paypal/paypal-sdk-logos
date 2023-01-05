/* @flow */

import { ElementNode } from "@krakenjs/jsx-pragmatic/src";

import { LOGO_COLOR } from "./constants";

export type LogoColors = {
  [string]: string,
};

export type LogoColorMap = {
  [$Values<typeof LOGO_COLOR>]: LogoColors,
};

export type LogoColorSVGMap = {
  [$Values<typeof LOGO_COLOR>]: ElementNode,
};

export type SVGGetter = (LogoColors) => ElementNode;
