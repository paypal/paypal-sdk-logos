import { LOGO, LOGO_COLOR } from "../constants";
export function getLogoColors(name, logoColorMap, logoColor) {
  var colors;
  if (logoColor) {
    colors = logoColorMap[logoColor];
  }
  if (!colors) {
    colors = logoColorMap[LOGO_COLOR.DEFAULT];
  }
  if (!colors) {
    throw new Error("No " + (logoColor || LOGO_COLOR.DEFAULT) + " logo available for " + name);
  }
  return colors;
}
export function getSVGs(logoName, svgGetter, logoColorMap) {
  var svgs = {};
  for (var _i2 = 0, _Object$keys2 = Object.keys(logoColorMap); _i2 < _Object$keys2.length; _i2++) {
    var logoColor = _Object$keys2[_i2];
    var logoColors = getLogoColors(logoName, logoColorMap, logoColor);
    svgs[logoColor] = svgGetter(logoColors);
  }
  return svgs;
}