import { LOGO_COLOR } from '../constants';
export function getLogoColors(name, logoColorMap, logoColor) {
  var colors = logoColor ? logoColorMap[logoColor] : logoColorMap[LOGO_COLOR.DEFAULT];

  if (!colors) {
    throw new Error("No " + (logoColor || LOGO_COLOR.DEFAULT) + " logo available for " + name);
  }

  return colors;
}