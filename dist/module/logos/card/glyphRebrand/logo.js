import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["logoColor"],
  _excluded2 = ["logoColor"];
var _GLYPH_CARD_REBRAND_L;
import { node } from "@krakenjs/jsx-pragmatic/src";
import { getLogoCDNUrl, getLogoColors, SVGLogo } from "../../../lib";
import { LOGO_COLOR, LOGO } from "../../../constants";
export var GLYPH_CARD_REBRAND_LOGO_COLORS = (_GLYPH_CARD_REBRAND_L = {}, _GLYPH_CARD_REBRAND_L[LOGO_COLOR.DEFAULT] = {
  primary: "#FFFFFF"
}, _GLYPH_CARD_REBRAND_L[LOGO_COLOR.WHITE] = {
  primary: "#FFFFFF"
}, _GLYPH_CARD_REBRAND_L[LOGO_COLOR.BLACK] = {
  primary: "#000000"
}, _GLYPH_CARD_REBRAND_L);
export var getGlyphCardRebrandSVG = function getGlyphCardRebrandSVG(_ref) {
  var primary = _ref.primary;
  return node("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "34",
    height: "34",
    viewBox: "0 0 34 34",
    fill: "none"
  }, node("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M30.0667 8.24H3.93333C2.98291 8.24 2.21244 9.02798 2.21244 10V24C2.21244 24.972 2.98291 25.76 3.93333 25.76H30.0667C31.0171 25.76 31.7876 24.972 31.7876 24V10C31.7876 9.02798 31.0171 8.24 30.0667 8.24ZM3.93333 7C2.3133 7 1 8.34315 1 10V24C1 25.6569 2.3133 27 3.93333 27H30.0667C31.6867 27 33 25.6569 33 24V10C33 8.34315 31.6867 7 30.0667 7H3.93333Z",
    fill: primary
  }), node("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M32.9745 13.0606H1V11.8206H32.9745V13.0606Z",
    fill: primary
  }));
};
export function GlyphCardRebrandExternalImage(_temp) {
  var _ref2 = _temp === void 0 ? {} : _temp,
    logoColor = _ref2.logoColor,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded);
  var cdnUrl = getLogoCDNUrl(LOGO.CARD_REBRAND, GLYPH_CARD_REBRAND_LOGO_COLORS, logoColor);
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.CARD,
    cdnUrl: cdnUrl
  }));
}
export function GlyphCardRebrandInlineSVG(_temp2) {
  var _ref3 = _temp2 === void 0 ? {} : _temp2,
    logoColor = _ref3.logoColor,
    props = _objectWithoutPropertiesLoose(_ref3, _excluded2);
  var svg = getGlyphCardRebrandSVG(getLogoColors(LOGO.CARD_REBRAND, GLYPH_CARD_REBRAND_LOGO_COLORS, logoColor));
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.CARD_REBRAND,
    render: function render() {
      return svg;
    }
  }));
}
export var GlyphCardRebrand = GlyphCardRebrandInlineSVG;