import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["logoColor"];
var _LOGO_COLORS;
/** @jsx node */

import { node } from "@krakenjs/jsx-pragmatic/src";
import { SVGLogo, getLogoColors } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
var LOGO_COLORS = (_LOGO_COLORS = {}, _LOGO_COLORS[LOGO_COLOR.DEFAULT] = {
  primary: "#FFFFFF",
  secondary: "#003A7D",
  tertiary: "#ED1C24",
  quaternary: "#FFFFFF",
  quinary: "#FFFFFF"
}, _LOGO_COLORS[LOGO_COLOR.WHITE] = {
  primary: "#000000",
  secondary: "#FFFFFF",
  tertiary: "#FFFFFF",
  quaternary: "#000000",
  quinary: "#FFFFFF"
}, _LOGO_COLORS[LOGO_COLOR.BLACK] = {
  primary: "#FFFFFF",
  secondary: "#003A7D",
  tertiary: "#ED1C24",
  quaternary: "#FFFFFF",
  quinary: "#003A7D"
}, _LOGO_COLORS);
export function GiropayLogo(_ref) {
  var _ref$logoColor = _ref.logoColor,
    logoColor = _ref$logoColor === void 0 ? LOGO_COLOR.BLACK : _ref$logoColor,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _getLogoColors = getLogoColors(LOGO.GIROPAY, LOGO_COLORS, logoColor),
    primary = _getLogoColors.primary,
    secondary = _getLogoColors.secondary,
    tertiary = _getLogoColors.tertiary,
    quaternary = _getLogoColors.quaternary,
    quinary = _getLogoColors.quinary;
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.GIROPAY,
    logoColor: logoColor,
    render: function render() {
      return node("svg", {
        width: "89",
        height: "40",
        viewBox: "0 0 89 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, node("g", {
        id: "LOGO_GIROPAY_1"
      }, node("path", {
        id: "background_pill",
        d: "M7.7451 0.5C3.7386 0.5 0.5 3.78098 0.5 7.81718V32.1828C0.5 36.219 3.73861 39.5 7.7451 39.5H81.2546C85.2611 39.5 88.5 36.219 88.5 32.1828V7.81718C88.5 3.78095 85.2611 0.5 81.2546 0.5H7.7451Z",
        fill: secondary,
        stroke: quinary
      }), node("path", {
        id: "background_giro",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M4 8.20515V31.7948C4 34.1173 5.89961 36 8.24276 36H47V4H8.24276C5.89961 4 4 5.88273 4 8.20515",
        fill: primary
      }), node("path", {
        id: "pay_y",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M71.6843 28.7738C72.3682 28.9244 73.0521 29 73.7546 29C76.805 29 77.5261 26.607 78.469 24.1387L82 15H78.6724L76.6944 21.4064H76.6573L74.5866 15H71L74.9009 25.043C74.6605 25.9099 74.0322 26.3997 73.2187 26.3997C72.7564 26.3997 72.3497 26.343 71.9062 26.1924L71.6843 28.7738Z",
        fill: quaternary
      }), node("path", {
        id: "pay_a",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M64.164 21.7522C64.164 20.8348 65.0678 20.486 66.2166 20.486C66.725 20.486 67.2149 20.5228 67.6478 20.5412C67.6478 21.6605 66.8381 22.7982 65.5574 22.7982C64.7665 22.7982 64.164 22.4127 64.164 21.7522ZM71 24.7798C70.8492 24.0273 70.8117 23.2752 70.8117 22.5228V18.9631C70.8117 16.0457 68.6461 15 66.1414 15C64.6913 15 63.4295 15.2018 62.2243 15.6788L62.2807 17.9174C63.2223 17.4036 64.3144 17.2018 65.4069 17.2018C66.6309 17.2018 67.6292 17.5502 67.6478 18.8529C67.2149 18.7796 66.612 18.7247 66.0658 18.7247C64.2581 18.7247 61 19.0732 61 21.9909C61 24.0641 62.7328 25 64.6724 25C66.0658 25 67.0074 24.4678 67.7797 23.2752H67.8175C67.8175 23.7706 67.8738 24.266 67.8927 24.7798H71Z",
        fill: quaternary
      }), node("path", {
        id: "pay_p",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M56.5026 20.0311C56.5026 21.5951 55.7318 22.6692 54.453 22.6692C53.3248 22.6692 52.3846 21.5951 52.3846 20.1631C52.3846 18.6933 53.212 17.6003 54.453 17.6003C55.7692 17.6003 56.5026 18.7308 56.5026 20.0311ZM49 29H52.3846V23.6677H52.422C53.0614 24.8361 54.3402 25.2692 55.5246 25.2692C58.4393 25.2692 60 22.8576 60 19.9555C60 17.5817 58.5147 15 55.8069 15C54.265 15 52.8357 15.6218 52.1589 16.9974H52.1212V15.2262H49V29Z",
        fill: quaternary
      }), node("path", {
        id: "giro_o",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M38.5 22.6881C36.9934 22.6881 36.3762 21.4222 36.3762 20.009C36.3762 18.5781 36.9934 17.3119 38.5 17.3119C40.0066 17.3119 40.6238 18.5781 40.6238 20.009C40.6238 21.4222 40.0066 22.6881 38.5 22.6881ZM38.5 25C41.6222 25 44 23.1651 44 20.009C44 16.8349 41.6222 15 38.5 15C35.3778 15 33 16.8349 33 20.009C33 23.1651 35.3778 25 38.5 25Z",
        fill: tertiary
      }), node("path", {
        id: "giro_r",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M33 15.1126C32.6692 15.0565 32.265 15 31.8793 15C30.4461 15 29.6193 15.7882 29.0499 17.0265H29.0133V15.2252H26V25H29.3073V20.8724C29.3073 18.9589 30.1706 17.8144 31.714 17.8144C32.0998 17.8144 32.4671 17.8144 32.8348 17.927L33 15.1126Z",
        fill: tertiary
      }), node("path", {
        id: "giro_i",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M21.0003 14.3252H24V12H21.0003V14.3252ZM21 25H23.9997V15.8226H21V25Z",
        fill: tertiary
      }), node("path", {
        id: "giro_g",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M12.2235 19.9694C12.2235 18.6529 12.8302 17.559 13.9915 17.559C15.3952 17.559 15.9842 18.7642 15.9842 19.8395C15.9842 21.3231 15.1005 22.3244 13.9915 22.3244C13.0553 22.3244 12.2235 21.4713 12.2235 19.9694ZM19 15.2226H16.1748V16.9653H16.1404C15.4818 15.7787 14.4072 15 13.0727 15C10.265 15 9 17.151 9 20.0249C9 22.8808 10.5422 24.8834 13.0209 24.8834C14.2687 24.8834 15.3086 24.3641 16.0537 23.233H16.0882V23.7522C16.0882 25.6438 15.1179 26.5523 13.3155 26.5523C12.0155 26.5523 11.2182 26.2557 10.265 25.755L10.1091 28.3881C10.8369 28.6661 12.0677 29 13.558 29C17.1976 29 19 27.7204 19 23.7522V15.2226Z",
        fill: tertiary
      })));
    }
  }));
}