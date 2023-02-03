import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["logoColor"];
var _GLYPH_CARD_LOGO_COLO;
import { node } from "@krakenjs/jsx-pragmatic/src";
import { getLogoCDNUrl, SVGCardLogo, getLogoColors } from "../../../lib";
import { LOGO_COLOR, LOGO } from "../../../constants";
export var GLYPH_CARD_LOGO_COLORS = (_GLYPH_CARD_LOGO_COLO = {}, _GLYPH_CARD_LOGO_COLO[LOGO_COLOR.DEFAULT] = {
  primary: "#333030"
}, _GLYPH_CARD_LOGO_COLO[LOGO_COLOR.WHITE] = {
  primary: "#ffffff"
}, _GLYPH_CARD_LOGO_COLO[LOGO_COLOR.BLACK] = {
  primary: "#333030"
}, _GLYPH_CARD_LOGO_COLO);
export var getGlyphCardSVG = function getGlyphCardSVG(_ref) {
  var primary = _ref.primary;
  return node("svg", {
    width: "24px",
    height: "18px",
    viewBox: "0 0 24 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, node("g", {
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  }, node("g", {
    transform: "translate(-3.000000, -6.000000)",
    fill: primary,
    "fill-rule": "nonzero"
  }, node("path", {
    d: "M8.27521338,12.5122653 C7.93003542,12.5122653 7.65021338,12.2324432 7.65021338,11.8872653 C7.65021338,11.5420873 7.93003542,11.2622653 8.27521338,11.2622653 L24.7879042,11.2622653 C25.5955939,11.2622653 26.25,11.9175905 26.25,12.7255368 L26.25,22.2867284 C26.25,23.0946748 25.5955939,23.75 24.7879042,23.75 L5.21231302,23.75 C4.40462325,23.75 3.75,23.0946748 3.75,22.2867397 L3.75,7.71327152 C3.75,6.90532518 4.40440608,6.25 5.21227212,6.25 L24.7880664,6.25552163 C25.5956079,6.25573147 26.25,6.91099507 26.25,7.71870362 L26.25,9.23577161 C26.25,9.58094958 25.9702675,9.86081168 25.6250895,9.86086112 C25.2799115,9.86091055 25.0000494,9.5811286 25,9.23595063 L24.9997827,7.71879313 C24.9997827,7.60083189 24.9046611,7.50555197 24.7877278,7.50552158 L5.21209583,7.49999998 C5.09515506,7.49999998 5,7.59528868 5,7.71326028 L5.00021718,22.2867284 C5.00021718,22.4047113 5.09537223,22.5 5.21231302,22.5 L24.7879042,22.5 C24.904845,22.5 25,22.4047113 25,22.2867284 L25,12.7255368 C25,12.607554 24.9048449,12.5122653 24.7879042,12.5122653 L8.27521338,12.5122653 Z",
    id: "Stroke-1"
  }))));
};
export function GlyphCard(_temp) {
  var _ref2 = _temp === void 0 ? {} : _temp,
    logoColor = _ref2.logoColor,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded);
  var svg = getGlyphCardSVG(getLogoColors(LOGO.CARD, GLYPH_CARD_LOGO_COLORS, logoColor));
  var cdnUrl = getLogoCDNUrl(LOGO.CARD, GLYPH_CARD_LOGO_COLORS, logoColor);
  return node(SVGCardLogo, _extends({}, props, {
    name: "",
    cdnUrl: cdnUrl,
    render: function render() {
      return svg;
    }
  }));
}