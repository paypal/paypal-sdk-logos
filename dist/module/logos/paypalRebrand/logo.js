import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["logoColor"],
  _excluded2 = ["logoColor"],
  _excluded3 = ["logoColor"],
  _excluded4 = ["logoColor"];
var _PAYPAL_REBRAND_LOGO_, _PP_REBRAND_LOGO_COLO;
import { node } from "@krakenjs/jsx-pragmatic/src";
import { getLogoCDNUrl, getLogoColors, SVGLogo } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
export var PAYPAL_REBRAND_LOGO_COLORS = (_PAYPAL_REBRAND_LOGO_ = {}, _PAYPAL_REBRAND_LOGO_[LOGO_COLOR.DEFAULT] = {
  primary: "#000000"
}, _PAYPAL_REBRAND_LOGO_[LOGO_COLOR.BLACK] = {
  primary: "#000000"
}, _PAYPAL_REBRAND_LOGO_[LOGO_COLOR.WHITE] = {
  primary: "#FFFFFF"
}, _PAYPAL_REBRAND_LOGO_[LOGO_COLOR.BLUE] = {
  primary: "#60CDFF"
}, _PAYPAL_REBRAND_LOGO_);
export var getPayPalRebrandSVG = function getPayPalRebrandSVG(_ref) {
  var primary = _ref.primary;
  return node("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "67",
    height: "23",
    viewBox: "0 0 67 23",
    fill: "none"
  }, node("path", {
    d: "M66.7497 0.00256348V16.8071H62.9443V0.00256348H66.7497Z",
    fill: primary
  }), node("path", {
    d: "M61.5406 5.66932V16.8306H58.1569V15.87C57.7301 16.2876 57.2412 16.6061 56.6979 16.8306C56.1521 17.0681 55.5623 17.1882 54.9285 17.1882C54.1317 17.1882 53.3944 17.0394 52.7167 16.7418C52.0389 16.4286 51.4491 16.0057 50.9472 15.4707C50.4454 14.9356 50.047 14.3091 49.7521 13.5965C49.4727 12.8683 49.333 12.0852 49.333 11.2526C49.333 10.4199 49.4727 9.64467 49.7521 8.93208C50.047 8.20383 50.4454 7.56955 50.9472 7.03446C51.4491 6.49937 52.0389 6.08173 52.7167 5.78417C53.3944 5.47094 54.1317 5.31433 54.9285 5.31433C55.5623 5.31433 56.1521 5.4344 56.6979 5.67193C57.2437 5.89641 57.7301 6.21485 58.1569 6.63249V5.67193H61.5406V5.66932ZM55.5442 13.7949C56.2374 13.7949 56.804 13.5574 57.2463 13.0797C57.7042 12.6046 57.9319 11.9939 57.9319 11.2499C57.9319 10.506 57.7042 9.89525 57.2463 9.42019C56.804 8.94513 56.2349 8.70499 55.5442 8.70499C54.8535 8.70499 54.2766 8.94252 53.8187 9.42019C53.3763 9.89525 53.1539 10.506 53.1539 11.2499C53.1539 11.9939 53.3763 12.6046 53.8187 13.0797C54.2766 13.5548 54.8509 13.7949 55.5442 13.7949Z",
    fill: primary
  }), node("path", {
    d: "M43.9075 0C44.9112 0 45.7649 0.140951 46.4737 0.422854C47.1825 0.704756 47.7801 1.0989 48.2664 1.60528C48.7683 2.12732 49.1589 2.72245 49.4383 3.39066C49.7177 4.06149 49.8574 4.7819 49.8574 5.55714C49.8574 6.33237 49.7177 7.05278 49.4383 7.72361C49.1589 8.39443 48.7683 8.98956 48.2664 9.50899C47.7801 10.0154 47.1825 10.4095 46.4737 10.6914C45.7649 10.9733 44.9112 11.1143 43.9075 11.1143H42.0708V16.828H38.1982V0H43.9049H43.9075ZM43.3539 7.65574C43.8713 7.65574 44.2671 7.60354 44.5491 7.49913C44.844 7.37906 45.0872 7.23028 45.2786 7.05278C45.677 6.67952 45.8762 6.18097 45.8762 5.55714C45.8762 4.9333 45.677 4.43475 45.2786 4.06149C45.0872 3.88399 44.844 3.74043 44.5491 3.63863C44.2697 3.51856 43.8713 3.46114 43.3539 3.46114H42.0708V7.65835H43.3539V7.65574Z",
    fill: primary
  }), node("path", {
    d: "M23.9352 5.66943H28.1389L30.9923 11.0256H31.0362L33.5792 5.66943H37.4724L29.1323 22.5001H25.2597L29.065 14.7999L23.9326 5.66943H23.9352Z",
    fill: primary
  }), node("path", {
    d: "M23.1822 5.66932V16.8306H19.7985V15.87C19.3717 16.2876 18.8828 16.6061 18.3395 16.8306C17.7937 17.0681 17.2039 17.1882 16.5701 17.1882C15.7733 17.1882 15.036 17.0394 14.3583 16.7418C13.6805 16.4286 13.0907 16.0057 12.5888 15.4707C12.087 14.9356 11.6886 14.3091 11.3937 13.5965C11.1143 12.8683 10.9746 12.0852 10.9746 11.2526C10.9746 10.4199 11.1143 9.64467 11.3937 8.93208C11.6886 8.20383 12.087 7.56955 12.5888 7.03446C13.0907 6.49937 13.6805 6.08173 14.3583 5.78417C15.036 5.47094 15.7733 5.31433 16.5701 5.31433C17.2039 5.31433 17.7937 5.4344 18.3395 5.67193C18.8853 5.89641 19.3717 6.21485 19.7985 6.63249V5.67193H23.1822V5.66932ZM17.1858 13.7949C17.879 13.7949 18.4456 13.5574 18.8905 13.0797C19.3484 12.6046 19.576 11.9939 19.576 11.2499C19.576 10.506 19.3484 9.89525 18.8905 9.42019C18.4482 8.94513 17.879 8.70499 17.1858 8.70499C16.4925 8.70499 15.9182 8.94252 15.4603 9.42019C15.0179 9.89525 14.7955 10.506 14.7955 11.2499C14.7955 11.9939 15.0179 12.6046 15.4603 13.0797C15.9182 13.5548 16.4925 13.7949 17.1858 13.7949Z",
    fill: primary
  }), node("path", {
    d: "M5.7067 0C6.71041 0 7.56409 0.140951 8.2729 0.422854C8.98171 0.704756 9.57928 1.0989 10.0656 1.60528C10.5675 2.12732 10.9581 2.72245 11.2375 3.39066C11.5169 4.06149 11.6566 4.7819 11.6566 5.55714C11.6566 6.33237 11.5169 7.05278 11.2375 7.72361C10.9581 8.39443 10.5675 8.98956 10.0656 9.50899C9.57928 10.0154 8.98171 10.4095 8.2729 10.6914C7.56409 10.9733 6.71041 11.1143 5.7067 11.1143H3.87V16.828H0V0H5.7067ZM5.15569 7.65574C5.67307 7.65574 6.06886 7.60354 6.35083 7.49913C6.64574 7.37906 6.88891 7.23028 7.08034 7.05278C7.47872 6.67952 7.67791 6.18097 7.67791 5.55714C7.67791 4.9333 7.47872 4.43475 7.08034 4.06149C6.88891 3.88399 6.64574 3.74043 6.35083 3.63863C6.07145 3.51856 5.67307 3.46114 5.15569 3.46114H3.87259V7.65835H5.15569V7.65574Z",
    fill: primary
  }));
};
export function PayPalRebrandLogoExternalImage(_ref2) {
  var _ref2$logoColor = _ref2.logoColor,
    logoColor = _ref2$logoColor === void 0 ? LOGO_COLOR.DEFAULT : _ref2$logoColor,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded);
  var cdnUrl = getLogoCDNUrl(LOGO.PAYPAL_REBRAND, PAYPAL_REBRAND_LOGO_COLORS, logoColor);
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.PAYPAL_REBRAND,
    alt: "PayPal",
    role: "presentation",
    logoColor: logoColor,
    cdnUrl: cdnUrl
  }));
}
export function PayPalRebrandLogoInlineSVG(_ref3) {
  var _ref3$logoColor = _ref3.logoColor,
    logoColor = _ref3$logoColor === void 0 ? LOGO_COLOR.DEFAULT : _ref3$logoColor,
    props = _objectWithoutPropertiesLoose(_ref3, _excluded2);
  var svg = getPayPalRebrandSVG(getLogoColors(LOGO.PAYPAL_REBRAND, PAYPAL_REBRAND_LOGO_COLORS, logoColor));
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.PAYPAL_REBRAND,
    alt: "PayPal",
    role: "presentation",
    logoColor: logoColor,
    render: function render() {
      return svg;
    }
  }));
}
export var PayPalRebrandLogo = PayPalRebrandLogoInlineSVG;
export var PP_REBRAND_LOGO_COLORS = (_PP_REBRAND_LOGO_COLO = {}, _PP_REBRAND_LOGO_COLO[LOGO_COLOR.DEFAULT] = {
  primary: "#002991",
  secondary: "#60CDFF",
  tertiary: "#008CFF"
}, _PP_REBRAND_LOGO_COLO[LOGO_COLOR.BLUE] = {
  primary: "#002991",
  secondary: "#60CDFF",
  tertiary: "#008CFF"
}, _PP_REBRAND_LOGO_COLO[LOGO_COLOR.WHITE] = {
  primary: "#F3F3F3",
  secondary: "#898989",
  tertiary: "#B8B8B8"
}, _PP_REBRAND_LOGO_COLO[LOGO_COLOR.BLACK] = {
  primary: "#0D0D0D",
  secondary: "#808080",
  tertiary: "#4D4D4D"
}, _PP_REBRAND_LOGO_COLO);
export var getPPRebrandSVG = function getPPRebrandSVG(_ref4) {
  var primary = _ref4.primary,
    secondary = _ref4.secondary,
    tertiary = _ref4.tertiary;
  return node("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "34",
    viewBox: "0 0 20 34",
    fill: "none"
  }, node("g", {
    "clip-path": "url(#clip0_4189_85875)"
  }, node("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M16.3532 12.06C15.5794 11.65 14.643 11.4 13.6227 11.4H7.5307L6.51043 18H6.51041L6.33297 19.135L5.49014 24.6H1L3.70099 7H10.9759C13.4255 7 15.3527 8.385 16.0624 10.31C16.2645 10.855 16.3631 11.445 16.3532 12.06Z",
    fill: primary
  }), node("path", {
    d: "M18.9408 17.1201C18.443 20.1701 15.8553 22.4001 12.7946 22.4001H10.2858L9.24089 29.0001H4.77539L5.49007 24.6001L6.33289 19.1351L6.51033 18.0001H10.1231C13.869 18.0001 16.3532 14.7851 16.3532 12.0601C18.1965 13.0251 19.271 14.9751 18.9408 17.1201Z",
    fill: secondary
  }), node("path", {
    d: "M16.3536 12.06C15.5797 11.65 14.6433 11.4 13.623 11.4H7.531L6.51074 18H10.1236C13.8694 18 16.3536 14.785 16.3536 12.06Z",
    fill: tertiary
  })));
};
export function PPRebrandLogoExternalImage(_ref5) {
  var _ref5$logoColor = _ref5.logoColor,
    logoColor = _ref5$logoColor === void 0 ? LOGO_COLOR.DEFAULT : _ref5$logoColor,
    props = _objectWithoutPropertiesLoose(_ref5, _excluded3);
  var cdnUrl = getLogoCDNUrl(LOGO.PP_REBRAND, PP_REBRAND_LOGO_COLORS, logoColor);
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.PP_REBRAND,
    alt: "PP",
    role: "presentation",
    logoColor: logoColor,
    cdnUrl: cdnUrl
  }));
}
export function PPRebrandLogoInlineSVG(_ref6) {
  var _ref6$logoColor = _ref6.logoColor,
    logoColor = _ref6$logoColor === void 0 ? LOGO_COLOR.DEFAULT : _ref6$logoColor,
    props = _objectWithoutPropertiesLoose(_ref6, _excluded4);
  var svg = getPPRebrandSVG(getLogoColors(LOGO.PP_REBRAND, PP_REBRAND_LOGO_COLORS, logoColor));
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.PP_REBRAND,
    alt: "PP",
    role: "presentation",
    logoColor: logoColor,
    render: function render() {
      return svg;
    }
  }));
}
export var PPRebrandLogo = PPRebrandLogoInlineSVG;