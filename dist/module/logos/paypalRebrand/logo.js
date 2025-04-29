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
    width: "99",
    height: "38",
    viewBox: "0 0 99 38",
    preserveAspectRatio: "xMinYMin meet",
    xmlns: "http://www.w3.org/2000/svg"
  }, node("path", {
    fill: primary,
    d: "M98.3435 5.00391V29.6505H92.7371V5.00391H98.3435Z"
  }), node("path", {
    fill: primary,
    d: "M90.6684 13.3151V29.6849H85.6832V28.2761C85.0543 28.8886 84.334 29.3557 83.5336 29.6849C82.7294 30.0333 81.8605 30.2094 80.9267 30.2094C79.7528 30.2094 78.6666 29.9912 77.668 29.5548C76.6695 29.0954 75.8005 28.4752 75.0611 27.6904C74.3217 26.9056 73.7348 25.9868 73.3003 24.9417C72.8887 23.8736 72.6829 22.7251 72.6829 21.5038C72.6829 20.2826 72.8887 19.1456 73.3003 18.1005C73.7348 17.0324 74.3217 16.1021 75.0611 15.3173C75.8005 14.5325 76.6695 13.92 77.668 13.4835C78.6666 13.0241 79.7528 12.7944 80.9267 12.7944C81.8605 12.7944 82.7294 12.9705 83.5336 13.3189C84.3378 13.6481 85.0543 14.1152 85.6832 14.7277V13.3189H90.6684V13.3151ZM81.8338 25.2326C82.8552 25.2326 83.6899 24.8842 84.3416 24.1836C85.0162 23.4869 85.3516 22.5911 85.3516 21.5C85.3516 20.4089 85.0162 19.5131 84.3416 18.8164C83.6899 18.1196 82.8514 17.7674 81.8338 17.7674C80.8162 17.7674 79.9663 18.1158 79.2917 18.8164C78.6399 19.5131 78.3121 20.4089 78.3121 21.5C78.3121 22.5911 78.6399 23.4869 79.2917 24.1836C79.9663 24.8804 80.8124 25.2326 81.8338 25.2326Z"
  }), node("path", {
    fill: primary,
    d: "M64.6887 5C66.1675 5 67.4252 5.20673 68.4695 5.62019C69.5138 6.03364 70.3942 6.61172 71.1107 7.35441C71.8501 8.12007 72.4256 8.99292 72.8372 9.97297C73.2489 10.9568 73.4547 12.0135 73.4547 13.1505C73.4547 14.2875 73.2489 15.3441 72.8372 16.328C72.4256 17.3118 71.8501 18.1847 71.1107 18.9465C70.3942 19.6892 69.5138 20.2673 68.4695 20.6807C67.4252 21.0942 66.1675 21.3009 64.6887 21.3009H61.9827V29.6811H56.2772V5H64.6849H64.6887ZM63.8731 16.2284C64.6353 16.2284 65.2185 16.1519 65.6339 15.9987C66.0684 15.8226 66.4266 15.6044 66.7087 15.3441C67.2956 14.7966 67.5891 14.0654 67.5891 13.1505C67.5891 12.2355 67.2956 11.5043 66.7087 10.9568C66.4266 10.6965 66.0684 10.486 65.6339 10.3367C65.2223 10.1606 64.6353 10.0763 63.8731 10.0763H61.9827V16.2323H63.8731V16.2284Z"
  }), node("path", {
    fill: primary,
    d: "M35.2645 13.3149H41.4579L45.6617 21.1706H45.7265L49.473 13.3149H55.209L42.9214 37.9999H37.2159L42.8223 26.7064L35.2607 13.3149H35.2645Z"
  }), node("path", {
    fill: primary,
    d: "M34.1543 13.3151V29.6849H29.1691V28.2761C28.5402 28.8886 27.8199 29.3557 27.0195 29.6849C26.2153 30.0333 25.3464 30.2094 24.4126 30.2094C23.2387 30.2094 22.1525 29.9912 21.1539 29.5548C20.1554 29.0954 19.2864 28.4752 18.547 27.6904C17.8076 26.9056 17.2207 25.9868 16.7862 24.9417C16.3746 23.8736 16.1688 22.7251 16.1688 21.5038C16.1688 20.2826 16.3746 19.1456 16.7862 18.1005C17.2207 17.0324 17.8076 16.1021 18.547 15.3173C19.2864 14.5325 20.1554 13.92 21.1539 13.4835C22.1525 13.0241 23.2387 12.7944 24.4126 12.7944C25.3464 12.7944 26.2153 12.9705 27.0195 13.3189C27.8237 13.6481 28.5402 14.1152 29.1691 14.7277V13.3189H34.1543V13.3151ZM25.3197 25.2326C26.3411 25.2326 27.1758 24.8842 27.8313 24.1836C28.5059 23.4869 28.8413 22.5911 28.8413 21.5C28.8413 20.4089 28.5059 19.5131 27.8313 18.8164C27.1796 18.1196 26.3411 17.7674 25.3197 17.7674C24.2983 17.7674 23.4521 18.1158 22.7775 18.8164C22.1258 19.5131 21.798 20.4089 21.798 21.5C21.798 22.5911 22.1258 23.4869 22.7775 24.1836C23.4521 24.8804 24.2983 25.2326 25.3197 25.2326Z"
  }), node("path", {
    fill: primary,
    d: "M8.40772 5C9.8865 5 11.1442 5.20673 12.1885 5.62019C13.2328 6.03364 14.1132 6.61172 14.8298 7.35441C15.5691 8.12007 16.1447 8.99292 16.5563 9.97297C16.9679 10.9568 17.1737 12.0135 17.1737 13.1505C17.1737 14.2875 16.9679 15.3441 16.5563 16.328C16.1447 17.3118 15.5691 18.1847 14.8298 18.9465C14.1132 19.6892 13.2328 20.2673 12.1885 20.6807C11.1442 21.0942 9.8865 21.3009 8.40772 21.3009H5.7017V29.6811H0V5H8.40772ZM7.59591 16.2284C8.35817 16.2284 8.9413 16.1519 9.35673 15.9987C9.79122 15.8226 10.1495 15.6044 10.4315 15.3441C11.0185 14.7966 11.3119 14.0654 11.3119 13.1505C11.3119 12.2355 11.0185 11.5043 10.4315 10.9568C10.1495 10.6965 9.79122 10.486 9.35673 10.3367C8.94511 10.1606 8.35817 10.0763 7.59591 10.0763H5.70551V16.2323H7.59591V16.2284Z"
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
    name: LOGO.PP,
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
  var svg = getPPRebrandSVG(getLogoColors(LOGO.PP, PP_REBRAND_LOGO_COLORS, logoColor));
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.PP,
    alt: "PP",
    role: "presentation",
    logoColor: logoColor,
    render: function render() {
      return svg;
    }
  }));
}
export var PPRebrandLogo = PPRebrandLogoInlineSVG;