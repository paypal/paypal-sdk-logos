import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["logoColor"];
var _LOGO_COLORS;
/** @jsx node */

import { node } from "@krakenjs/jsx-pragmatic/src";
import { SVGLogo, getLogoColors } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
var LOGO_COLORS = (_LOGO_COLORS = {}, _LOGO_COLORS[LOGO_COLOR.DEFAULT] = {
  primary: "#EDEDED",
  secondary: "#393A41"
}, _LOGO_COLORS[LOGO_COLOR.WHITE] = {
  primary: "#FFFFFF",
  secondary: "#000000"
}, _LOGO_COLORS[LOGO_COLOR.BLACK] = {
  primary: "#393A41",
  secondary: "#EDEDED"
}, _LOGO_COLORS);
export function SofortLogo(_ref) {
  var _ref$logoColor = _ref.logoColor,
    logoColor = _ref$logoColor === void 0 ? LOGO_COLOR.BLACK : _ref$logoColor,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _getLogoColors = getLogoColors(LOGO.SOFORT, LOGO_COLORS, logoColor),
    primary = _getLogoColors.primary,
    secondary = _getLogoColors.secondary;
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.SOFORT,
    logoColor: logoColor,
    render: function render() {
      return node("svg", {
        width: "240",
        height: "90",
        viewBox: "0 0 240 90",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, node("path", {
        d: "M225.023 90H0L14.9768 0H240L225.023 90Z",
        fill: primary
      }), node("path", {
        d: "M74.0341 30C63.9253 30 56.2511 37.4603 56.2511 46.3492C56.2511 54.3915 62.5493 60 71.1232 60C81.232 60 88.8533 52.328 88.8533 43.4392C88.9062 35.3439 82.6081 30 74.0341 30ZM71.7583 52.4339C67.8948 52.4339 65.1956 49.8942 65.1956 45.9788C65.1956 41.6402 68.5299 37.5132 73.3461 37.5132C77.2097 37.5132 79.9089 40.1587 79.9089 44.0741C79.9618 48.4656 76.5746 52.4339 71.7583 52.4339Z",
        fill: secondary
      }), node("path", {
        d: "M134.846 30C124.737 30 117.116 37.4603 117.116 46.3492C117.116 54.3915 123.414 60 131.988 60C142.096 60 149.718 52.328 149.718 43.4392C149.771 35.3439 143.473 30 134.846 30ZM132.623 52.4339C128.759 52.4339 126.06 49.8942 126.06 45.9788C126.06 41.6402 129.394 37.5132 134.211 37.5132C138.074 37.5132 140.773 40.1587 140.773 44.0741C140.773 48.4656 137.439 52.4339 132.623 52.4339Z",
        fill: secondary
      }), node("path", {
        d: "M179.462 39.4709C179.462 34.0741 175.281 30.6349 167.66 30.6349H156.969L152.258 59.3651H161.256L162.737 50.3175H163.161L167.924 59.3651H178.245L171.629 49.3122C176.551 47.619 179.462 43.9683 179.462 39.4709ZM165.066 44.2328H163.743L164.749 38.2011H165.966C168.771 38.2011 170.253 39.0476 170.253 40.8995C170.253 43.0688 168.136 44.2328 165.066 44.2328Z",
        fill: secondary
      }), node("path", {
        d: "M45.9306 42.1164C42.4904 40.3704 41.7495 39.9471 41.7495 38.9947C41.7495 37.8307 43.1256 37.2487 44.9779 37.2487C47.1479 37.2487 50.4293 37.5132 53.6577 40.582C54.4516 38.0952 55.7748 35.873 57.4684 33.9153C52.9168 31.3228 48.6827 30 44.8192 30C37.145 30 32.6992 34.127 32.6992 39.1005C32.6992 43.3862 35.9277 45.6085 39.7383 47.5661C43.1785 49.3122 44.0253 49.8942 44.0253 50.9524C44.0253 52.1164 42.5963 52.7513 40.691 52.7513C37.4096 52.7513 33.5989 50.6878 31.3231 48.5714L30 56.5608C32.3287 58.254 35.716 60 40.8498 60C48.7886 60 53.0756 55.9788 53.0756 50.8466C53.0756 46.6138 50.3234 44.3386 45.9306 42.1164Z",
        fill: secondary
      }), node("path", {
        d: "M112.617 43.2275H102.032L102.879 38.2011H114.205C115.687 35.1852 117.962 32.5926 120.767 30.6349H102.243C98.1153 30.6349 94.6222 33.4392 94.04 37.2487L90.441 59.418H99.4384L100.92 50.3704H111.611L112.405 45.4497C112.458 44.6561 112.511 43.9683 112.617 43.2275Z",
        fill: secondary
      }), node("path", {
        d: "M179.674 30.6349C182.108 32.4868 183.59 35.0794 183.908 38.2011H191.423L187.983 59.3651H196.98L200.42 38.2011H208.783L210 30.6349H179.674Z",
        fill: secondary
      }));
    }
  }));
}