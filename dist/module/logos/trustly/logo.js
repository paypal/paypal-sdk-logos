import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["logoColor"];
var _LOGO_COLORS;
/** @jsx node */

import { node } from "@krakenjs/jsx-pragmatic/src";
import { SVGLogo, getLogoColors } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
var LOGO_COLORS = (_LOGO_COLORS = {}, _LOGO_COLORS[LOGO_COLOR.DEFAULT] = {
  primary: "#0EE06E"
}, _LOGO_COLORS[LOGO_COLOR.WHITE] = {
  primary: "#FFFFFF"
}, _LOGO_COLORS[LOGO_COLOR.BLACK] = {
  primary: "#000000"
}, _LOGO_COLORS);
export function TrustlyLogo(_ref) {
  var _ref$logoColor = _ref.logoColor,
    logoColor = _ref$logoColor === void 0 ? LOGO_COLOR.BLACK : _ref$logoColor,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _getLogoColors = getLogoColors(LOGO.TRUSTLY, LOGO_COLORS, logoColor),
    primary = _getLogoColors.primary;
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.TRUSTLY,
    render: function render() {
      return node("svg", {
        width: "95",
        height: "20",
        viewBox: "0 0 95 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M31.6556 15.8697V3.04368H27.0469V0.000183105H39.5686V3.04368H34.96V15.8697H31.6556Z",
        fill: primary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M39.0437 15.8696V4.34796H42.0871V6.17398C42.8045 4.63059 43.7393 4.34796 44.7393 4.34796H45.9133V7.43485H44.9133C43.4786 7.43485 42.1959 8.26099 42.1959 10.7827V15.8696H39.0437Z",
        fill: primary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M47.3506 11.6522V4.34796H50.5027V10.9349C50.5027 12.2827 51.1548 13.2827 52.5026 13.2827C53.807 13.2827 54.633 12.2827 54.633 10.9566V4.34796H57.7852V15.8696H54.7853V14.4131C54.0245 15.5653 52.894 16.1305 51.4591 16.1305C48.9374 16.1305 47.3506 14.3914 47.3506 11.6522Z",
        fill: primary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M59.1326 12.6306L61.8716 12.0002C62.002 12.8915 62.7195 13.5654 64.0889 13.5654C65.1542 13.5654 65.7412 13.1306 65.7412 12.5871C65.7412 12.1524 65.5021 11.8263 64.415 11.5871L62.6107 11.1959C60.3065 10.6959 59.3282 9.63068 59.3282 7.69586C59.3282 5.71765 60.9587 4.13068 64.0237 4.13068C67.2846 4.13068 68.5891 6.08724 68.7195 7.36975L65.9586 7.97848C65.8281 7.30452 65.3281 6.56544 63.9585 6.56544C63.0891 6.56544 62.4369 6.95677 62.4369 7.52193C62.4369 8.00023 62.763 8.26111 63.3281 8.39156L65.9586 9.0002C67.9586 9.45666 68.8933 10.6524 68.8933 12.3481C68.8933 14.1741 67.4368 16.0872 64.1107 16.0872C60.4586 16.0872 59.263 13.8915 59.1326 12.6306Z",
        fill: primary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M74.9588 15.8697C72.9153 15.8697 71.5458 14.7393 71.5458 12.5001V7.1089H69.6111V4.34803H71.5458V1.78282L74.6979 0.869812V4.34803H77.024V7.1089H74.6979V11.9349C74.6979 12.7828 75.1326 13.1088 75.9804 13.1088H77.1978V15.8697H74.9588Z",
        fill: primary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M78.9148 15.8697H82.0669V0.000183105H78.9148V15.8697Z",
        fill: primary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M91.5675 4.34796H94.9369L90.133 20H86.7628L88.089 15.8696H86.3498L83.176 4.34796H86.5453L88.915 13.261L91.5675 4.34796Z",
        fill: primary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M0 6.94855H7.39894V1.0464L13.3011 6.94855L7.39894 12.8498V15.8698H14.5633V6.94855H21.1448V0H0V6.94855Z",
        fill: primary
      }));
    }
  }));
}