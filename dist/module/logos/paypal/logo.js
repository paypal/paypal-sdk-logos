import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _PAYPAL_LOGO_COLORS, _PP_LOGO_COLORS;

/** @jsx node */
import { node } from 'jsx-pragmatic/src';
import { LOGO, LOGO_COLOR } from '../../constants';
import { SVGLogo, getLogoColors } from '../../lib';
var PAYPAL_LOGO_COLORS = (_PAYPAL_LOGO_COLORS = {}, _PAYPAL_LOGO_COLORS[LOGO_COLOR.DEFAULT] = {
  primary: '#003087',
  secondary: '#009cde'
}, _PAYPAL_LOGO_COLORS[LOGO_COLOR.BLUE] = {
  primary: '#003087',
  secondary: '#009cde'
}, _PAYPAL_LOGO_COLORS[LOGO_COLOR.WHITE] = {
  primary: '#ffffff',
  secondary: '#ffffff'
}, _PAYPAL_LOGO_COLORS[LOGO_COLOR.BLACK] = {
  primary: '#333030',
  secondary: '#636363'
}, _PAYPAL_LOGO_COLORS); // eslint-disable-next-line flowtype/require-exact-type

export function PayPalLogo(_ref) {
  var _ref$logoColor = _ref.logoColor,
      logoColor = _ref$logoColor === void 0 ? LOGO_COLOR.DEFAULT : _ref$logoColor,
      props = _objectWithoutPropertiesLoose(_ref, ["logoColor"]);

  var _getLogoColors = getLogoColors(LOGO.PAYPAL, PAYPAL_LOGO_COLORS, logoColor),
      primary = _getLogoColors.primary,
      secondary = _getLogoColors.secondary;

  return node(SVGLogo, _extends({}, props, props, {
    name: LOGO.PAYPAL,
    alt: "PayPal",
    logoColor: logoColor,
    render: function render() {
      return node("svg", {
        width: "100",
        height: "32",
        viewBox: "0 0 100 32",
        preserveAspectRatio: "xMinYMin meet",
        xmlns: "http://www.w3.org/2000/svg"
      }, node("path", {
        fill: primary,
        d: "M 12.237 2.444 L 4.437 2.444 C 3.937 2.444 3.437 2.844 3.337 3.344 L 0.237 23.344 C 0.137 23.744 0.437 24.044 0.837 24.044 L 4.537 24.044 C 5.037 24.044 5.537 23.644 5.637 23.144 L 6.437 17.744 C 6.537 17.244 6.937 16.844 7.537 16.844 L 10.037 16.844 C 15.137 16.844 18.137 14.344 18.937 9.444 C 19.237 7.344 18.937 5.644 17.937 4.444 C 16.837 3.144 14.837 2.444 12.237 2.444 Z M 13.137 9.744 C 12.737 12.544 10.537 12.544 8.537 12.544 L 7.337 12.544 L 8.137 7.344 C 8.137 7.044 8.437 6.844 8.737 6.844 L 9.237 6.844 C 10.637 6.844 11.937 6.844 12.637 7.644 C 13.137 8.044 13.337 8.744 13.137 9.744 Z"
      }), node("path", {
        fill: primary,
        d: "M 35.437 9.644 L 31.737 9.644 C 31.437 9.644 31.137 9.844 31.137 10.144 L 30.937 11.144 L 30.637 10.744 C 29.837 9.544 28.037 9.144 26.237 9.144 C 22.137 9.144 18.637 12.244 17.937 16.644 C 17.537 18.844 18.037 20.944 19.337 22.344 C 20.437 23.644 22.137 24.244 24.037 24.244 C 27.337 24.244 29.237 22.144 29.237 22.144 L 29.037 23.144 C 28.937 23.544 29.237 23.944 29.637 23.944 L 33.037 23.944 C 33.537 23.944 34.037 23.544 34.137 23.044 L 36.137 10.244 C 36.237 10.044 35.837 9.644 35.437 9.644 Z M 30.337 16.844 C 29.937 18.944 28.337 20.444 26.137 20.444 C 25.037 20.444 24.237 20.144 23.637 19.444 C 23.037 18.744 22.837 17.844 23.037 16.844 C 23.337 14.744 25.137 13.244 27.237 13.244 C 28.337 13.244 29.137 13.644 29.737 14.244 C 30.237 14.944 30.437 15.844 30.337 16.844 Z"
      }), node("path", {
        fill: primary,
        d: "M 55.337 9.644 L 51.637 9.644 C 51.237 9.644 50.937 9.844 50.737 10.144 L 45.537 17.744 L 43.337 10.444 C 43.237 9.944 42.737 9.644 42.337 9.644 L 38.637 9.644 C 38.237 9.644 37.837 10.044 38.037 10.544 L 42.137 22.644 L 38.237 28.044 C 37.937 28.444 38.237 29.044 38.737 29.044 L 42.437 29.044 C 42.837 29.044 43.137 28.844 43.337 28.544 L 55.837 10.544 C 56.137 10.244 55.837 9.644 55.337 9.644 Z"
      }), node("path", {
        fill: secondary,
        d: "M 67.737 2.444 L 59.937 2.444 C 59.437 2.444 58.937 2.844 58.837 3.344 L 55.737 23.244 C 55.637 23.644 55.937 23.944 56.337 23.944 L 60.337 23.944 C 60.737 23.944 61.037 23.644 61.037 23.344 L 61.937 17.644 C 62.037 17.144 62.437 16.744 63.037 16.744 L 65.537 16.744 C 70.637 16.744 73.637 14.244 74.437 9.344 C 74.737 7.244 74.437 5.544 73.437 4.344 C 72.237 3.144 70.337 2.444 67.737 2.444 Z M 68.637 9.744 C 68.237 12.544 66.037 12.544 64.037 12.544 L 62.837 12.544 L 63.637 7.344 C 63.637 7.044 63.937 6.844 64.237 6.844 L 64.737 6.844 C 66.137 6.844 67.437 6.844 68.137 7.644 C 68.637 8.044 68.737 8.744 68.637 9.744 Z"
      }), node("path", {
        fill: secondary,
        d: "M 90.937 9.644 L 87.237 9.644 C 86.937 9.644 86.637 9.844 86.637 10.144 L 86.437 11.144 L 86.137 10.744 C 85.337 9.544 83.537 9.144 81.737 9.144 C 77.637 9.144 74.137 12.244 73.437 16.644 C 73.037 18.844 73.537 20.944 74.837 22.344 C 75.937 23.644 77.637 24.244 79.537 24.244 C 82.837 24.244 84.737 22.144 84.737 22.144 L 84.537 23.144 C 84.437 23.544 84.737 23.944 85.137 23.944 L 88.537 23.944 C 89.037 23.944 89.537 23.544 89.637 23.044 L 91.637 10.244 C 91.637 10.044 91.337 9.644 90.937 9.644 Z M 85.737 16.844 C 85.337 18.944 83.737 20.444 81.537 20.444 C 80.437 20.444 79.637 20.144 79.037 19.444 C 78.437 18.744 78.237 17.844 78.437 16.844 C 78.737 14.744 80.537 13.244 82.637 13.244 C 83.737 13.244 84.537 13.644 85.137 14.244 C 85.737 14.944 85.937 15.844 85.737 16.844 Z"
      }), node("path", {
        fill: secondary,
        d: "M 95.337 2.944 L 92.137 23.244 C 92.037 23.644 92.337 23.944 92.737 23.944 L 95.937 23.944 C 96.437 23.944 96.937 23.544 97.037 23.044 L 100.237 3.144 C 100.337 2.744 100.037 2.444 99.637 2.444 L 96.037 2.444 C 95.637 2.444 95.437 2.644 95.337 2.944 Z"
      }));
    }
  }));
}
var DEFAULT_OPACITY = '1';
var PP_LOGO_COLORS = (_PP_LOGO_COLORS = {}, _PP_LOGO_COLORS[LOGO_COLOR.DEFAULT] = {
  primary: '#009cde',
  secondary: '#012169',
  tertiary: '#003087'
}, _PP_LOGO_COLORS[LOGO_COLOR.BLUE] = {
  primary: '#009cde',
  secondary: '#012169',
  tertiary: '#003087'
}, _PP_LOGO_COLORS[LOGO_COLOR.WHITE] = {
  primary: '#ffffff',
  primaryOpacity: '0.7',
  secondary: '#ffffff',
  secondaryOpacity: '0.7',
  tertiary: '#ffffff'
}, _PP_LOGO_COLORS); // eslint-disable-next-line flowtype/require-exact-type

export function PPLogo(_ref2) {
  var _ref2$logoColor = _ref2.logoColor,
      logoColor = _ref2$logoColor === void 0 ? LOGO_COLOR.DEFAULT : _ref2$logoColor,
      props = _objectWithoutPropertiesLoose(_ref2, ["logoColor"]);

  var _getLogoColors2 = getLogoColors(LOGO.PP, PP_LOGO_COLORS, logoColor),
      primary = _getLogoColors2.primary,
      secondary = _getLogoColors2.secondary,
      tertiary = _getLogoColors2.tertiary,
      _getLogoColors2$prima = _getLogoColors2.primaryOpacity,
      primaryOpacity = _getLogoColors2$prima === void 0 ? DEFAULT_OPACITY : _getLogoColors2$prima,
      _getLogoColors2$secon = _getLogoColors2.secondaryOpacity,
      secondaryOpacity = _getLogoColors2$secon === void 0 ? DEFAULT_OPACITY : _getLogoColors2$secon,
      _getLogoColors2$terti = _getLogoColors2.tertiaryOpacity,
      tertiaryOpacity = _getLogoColors2$terti === void 0 ? DEFAULT_OPACITY : _getLogoColors2$terti;

  return node(SVGLogo, _extends({}, props, props, {
    name: LOGO.PP,
    alt: "PP",
    logoColor: logoColor,
    render: function render() {
      return node("svg", {
        width: "24",
        height: "32",
        viewBox: "0 0 24 32",
        preserveAspectRatio: "xMinYMin meet",
        xmlns: "http://www.w3.org/2000/svg"
      }, node("path", {
        fill: primary,
        opacity: primaryOpacity,
        d: "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 6.694 26.557 C 6.6 26.957 6.881 27.257 7.255 27.257 L 11.375 27.257 C 11.844 27.257 12.311 26.957 12.405 26.457 L 12.405 26.157 L 13.247 20.957 L 13.247 20.757 C 13.341 20.257 13.809 19.857 14.277 19.857 L 14.84 19.857 C 18.864 19.857 21.954 18.157 22.89 13.157 C 23.358 11.057 23.172 9.357 22.048 8.157 C 21.767 7.757 21.298 7.457 20.924 7.157 L 20.924 7.157"
      }), node("path", {
        fill: secondary,
        opacity: secondaryOpacity,
        d: "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 8.192 16.357 C 8.286 15.757 8.754 15.357 9.315 15.357 L 11.655 15.357 C 16.243 15.357 19.801 13.357 20.924 7.757 C 20.831 7.457 20.924 7.357 20.924 7.157"
      }), node("path", {
        fill: tertiary,
        opacity: tertiaryOpacity,
        d: "M 9.504 7.157 C 9.596 6.857 9.784 6.557 10.065 6.357 C 10.251 6.357 10.345 6.257 10.532 6.257 L 16.711 6.257 C 17.461 6.257 18.208 6.357 18.772 6.457 C 18.958 6.457 19.146 6.457 19.333 6.557 C 19.52 6.657 19.707 6.657 19.801 6.757 C 19.894 6.757 19.987 6.757 20.082 6.757 C 20.362 6.857 20.643 7.057 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.257 C 18.677 0.857 16.525 0.257 13.809 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.657 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 9.504 7.157 Z"
      }));
    }
  }));
}