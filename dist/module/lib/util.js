import { CARD } from "@paypal/sdk-constants/src";
import { CDN_BASE_URL, LOGO, LOGO_COLOR, MARK } from "../constants";
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
export function getSVGFilename(logoName, logoColor) {
  if (logoColor) {
    return logoName + "-" + logoColor + ".svg";
  }
  return logoName + ".svg";
}
export function getLogoCDNUrl(logoName, logoColorMap, logoColor) {
  if (logoColor && logoColorMap && !logoColorMap[logoColor]) {
    logoColor = LOGO_COLOR.DEFAULT;
  }
  var svgFilename = getSVGFilename(logoName, logoColor);
  return CDN_BASE_URL + "/" + svgFilename;
}