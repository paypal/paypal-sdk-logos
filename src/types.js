/* @flow */

import { LOGO_COLOR } from "./constants";

export type LogoColors = {
  [string]: string,
};

export type LogoColorMap = {
  [$Values<typeof LOGO_COLOR>]: LogoColors,
};
