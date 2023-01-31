import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["logoColor"];
var _OXXO_LOGO_COLORS;
import { node } from "@krakenjs/jsx-pragmatic/src";
import { getLogoCDNUrl, getLogoColors, SVGLogo } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
export var OXXO_LOGO_COLORS = (_OXXO_LOGO_COLORS = {}, _OXXO_LOGO_COLORS[LOGO_COLOR.DEFAULT] = {
  primary: "#FFFFFF",
  secondary: "#FFFFFF"
}, _OXXO_LOGO_COLORS[LOGO_COLOR.WHITE] = {
  primary: "#FFFFFF",
  secondary: "#FFFFFF"
}, _OXXO_LOGO_COLORS[LOGO_COLOR.BLACK] = {
  primary: "#E39E39",
  secondary: "#D8232A"
}, _OXXO_LOGO_COLORS);
export var getOxxoSVG = function getOxxoSVG(_ref) {
  var primary = _ref.primary,
    secondary = _ref.secondary;
  return node("svg", {
    width: "69",
    height: "32",
    viewBox: "0 0 69 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, node("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M0.200073 28.5063V29.4743C0.200073 30.6493 1.16007 31.6103 2.33607 31.6103H66.6491C67.8241 31.6103 68.7841 30.6493 68.7841 29.4743V28.5063H0.200073Z",
    fill: primary
  }), node("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M68.7846 3.10351V2.13551C68.7846 0.960512 67.8236 -0.000488281 66.6486 -0.000488281H2.33562C1.16062 -0.000488281 0.200623 0.960512 0.200623 2.13551V3.10351H68.7846Z",
    fill: primary
  }), node("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M58.3204 9.74854C55.1824 9.74854 52.6244 12.307 52.6244 15.4449C52.6244 18.5817 55.1824 21.1401 58.3204 21.1401C61.4576 21.1401 64.0156 18.5817 64.0156 15.4449C64.0156 12.307 61.4576 9.74854 58.3204 9.74854",
    fill: secondary
  }), node("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M11.3733 9.74854C8.23493 9.74854 5.67688 12.307 5.67688 15.4449C5.67688 18.5817 8.23493 21.1401 11.3733 21.1401C14.5101 21.1401 17.0685 18.5817 17.0685 15.4449C17.0685 12.307 14.5101 9.74854 11.3733 9.74854",
    fill: secondary
  }), node("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M57.8731 4.73559C52.6006 4.61422 50.1217 7.9953 46.5237 12.1654L43.1301 16.0987L48.5042 22.5323C49.7846 24.5092 47.3409 26.471 45.8248 24.6622L40.8562 18.7352L36.0144 24.3481C34.4726 26.1346 32.0566 24.1385 33.3643 22.1803L38.6205 16.0683L35.1769 11.9602L37.392 9.21676L40.894 13.4236L43.9129 9.91218C45.3939 8.19042 46.9046 5.90866 48.8624 4.73559H0.196655V26.9697H11.575C16.8484 26.9697 19.2421 23.8166 22.7422 19.5649L26.0452 15.5535L20.5229 9.24642C19.1984 7.29949 21.5957 5.28232 23.1531 7.05559L28.2568 12.8667L32.9693 7.1434C34.469 5.32096 36.9299 7.26164 35.6679 9.24954L30.5541 15.4821L34.0917 19.5094L31.8626 22.1491L28.3414 18.1775L25.4049 21.7569C23.9633 23.5126 22.5042 25.7514 20.5736 26.9697H68.7812V4.73559H57.8731ZM20.3711 15.4447C20.3711 20.4012 16.3297 24.4433 11.3732 24.4433C6.41558 24.4433 2.37383 20.4012 2.37383 15.4447C2.37383 10.487 6.41558 6.44564 11.3732 6.44564C16.3297 6.44564 20.3711 10.487 20.3711 15.4447ZM58.3204 24.4433C53.3635 24.4433 49.3209 20.4012 49.3209 15.4447C49.3209 10.487 53.3635 6.44564 58.3204 6.44564C63.2772 6.44564 67.3186 10.487 67.3186 15.4447C67.3186 20.4012 63.2772 24.4433 58.3204 24.4433V24.4433Z",
    fill: secondary
  }));
};
export function OxxoLogo(_ref2) {
  var _ref2$logoColor = _ref2.logoColor,
    logoColor = _ref2$logoColor === void 0 ? LOGO_COLOR.BLACK : _ref2$logoColor,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded);
  var svg = getOxxoSVG(getLogoColors(LOGO.OXXO, OXXO_LOGO_COLORS, logoColor));
  var cdnUrl = getLogoCDNUrl(LOGO.OXXO, OXXO_LOGO_COLORS, logoColor);
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.OXXO,
    logoColor: logoColor,
    cdnUrl: cdnUrl,
    render: function render() {
      return svg;
    }
  }));
}