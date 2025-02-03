import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["logoColor"],
  _excluded2 = ["logoColor"],
  _excluded3 = ["logoColor"],
  _excluded4 = ["logoColor"],
  _excluded5 = ["logoColor"];
var _PAYPAL_LOGO_COLORS, _PP_LOGO_COLORS, _PPMONOCHROME_LOGO_CO;
import { node } from "@krakenjs/jsx-pragmatic/src";
import { getLogoCDNUrl, getLogoColors, SVGLogo } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
export var PAYPAL_LOGO_COLORS = (_PAYPAL_LOGO_COLORS = {}, _PAYPAL_LOGO_COLORS[LOGO_COLOR.DEFAULT] = {
  primary: "#003087",
  secondary: "#009cde"
}, _PAYPAL_LOGO_COLORS[LOGO_COLOR.DARK_BLUE] = {
  primary: "#60CDFF",
  secondary: "#002991"
}, _PAYPAL_LOGO_COLORS[LOGO_COLOR.BLUE] = {
  primary: "#003087",
  secondary: "#009cde"
}, _PAYPAL_LOGO_COLORS[LOGO_COLOR.WHITE] = {
  primary: "#ffffff",
  secondary: "#ffffff"
}, _PAYPAL_LOGO_COLORS[LOGO_COLOR.BLACK] = {
  primary: "#333030",
  secondary: "#636363"
}, _PAYPAL_LOGO_COLORS[LOGO_COLOR.MONOCHROME] = {
  primary: "#000000",
  secondary: "#000000"
}, _PAYPAL_LOGO_COLORS);
export var getRebrandPayPalSVG = function getRebrandPayPalSVG(_ref) {
  var primary = _ref.primary;
  return node("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "798",
    height: "282",
    viewBox: "0 0 798 282",
    fill: "none"
  }, node("path", {
    d: "M792.154 19.48V215.571H747.549V19.48H792.154Z",
    fill: primary
  }), node("path", {
    d: "M731.09 85.6013V215.842H691.428V204.633C686.424 209.506 680.693 213.222 674.326 215.842C667.927 218.613 661.014 220.014 653.585 220.014C644.245 220.014 635.603 218.278 627.658 214.806C619.714 211.151 612.8 206.217 606.917 199.973C601.035 193.729 596.365 186.419 592.908 178.104C589.633 169.606 587.996 160.468 587.996 150.752C587.996 141.036 589.633 131.99 592.908 123.674C596.365 115.176 601.035 107.775 606.917 101.531C612.8 95.2871 619.714 90.4138 627.658 86.9415C635.603 83.2865 644.245 81.459 653.585 81.459C661.014 81.459 667.927 82.8601 674.326 85.6318C680.724 88.2512 686.424 91.9671 691.428 96.8405V85.6318H731.09V85.6013ZM660.801 180.418C668.928 180.418 675.569 177.647 680.754 172.073C686.121 166.529 688.79 159.402 688.79 150.721C688.79 142.041 686.121 134.914 680.754 129.37C675.569 123.827 668.898 121.024 660.801 121.024C652.705 121.024 645.943 123.796 640.576 129.37C635.391 134.914 632.783 142.041 632.783 150.721C632.783 159.402 635.391 166.529 640.576 172.073C645.943 177.616 652.675 180.418 660.801 180.418Z",
    fill: primary
  }), node("path", {
    d: "M524.398 19.4473C536.164 19.4473 546.17 21.092 554.479 24.3815C562.787 27.671 569.792 32.2703 575.493 38.1792C581.375 44.2709 585.954 51.2154 589.229 59.0128C592.504 66.8406 594.141 75.2471 594.141 84.2933C594.141 93.3395 592.504 101.746 589.229 109.574C585.954 117.402 581.375 124.346 575.493 130.407C569.792 136.316 562.787 140.916 554.479 144.205C546.17 147.495 536.164 149.139 524.398 149.139H502.869V215.813H457.475V19.4473H524.368H524.398ZM517.909 108.782C523.974 108.782 528.613 108.173 531.918 106.954C535.375 105.553 538.226 103.817 540.469 101.746C545.139 97.3904 547.474 91.5729 547.474 84.2933C547.474 77.0137 545.139 71.1962 540.469 66.8406C538.226 64.7694 535.375 63.0942 531.918 61.9063C528.643 60.5052 523.974 59.8352 517.909 59.8352H502.869V108.812H517.909V108.782Z",
    fill: primary
  }), node("path", {
    d: "M290.294 85.6011H339.569L373.015 148.102H373.53L403.338 85.6011H448.974L351.213 281.997H305.819L350.424 192.145L290.263 85.6011H290.294Z",
    fill: primary
  }), node("path", {
    d: "M281.46 85.6013V215.842H241.798V204.633C236.795 209.506 231.063 213.222 224.696 215.842C218.297 218.613 211.384 220.014 203.955 220.014C194.615 220.014 185.973 218.278 178.028 214.806C170.084 211.151 163.17 206.217 157.287 199.973C151.405 193.729 146.735 186.419 143.278 178.104C140.003 169.606 138.366 160.468 138.366 150.752C138.366 141.036 140.003 131.99 143.278 123.674C146.735 115.176 151.405 107.775 157.287 101.531C163.17 95.2871 170.084 90.4138 178.028 86.9415C185.973 83.2865 194.615 81.459 203.955 81.459C211.384 81.459 218.297 82.8601 224.696 85.6318C231.094 88.2512 236.795 91.9671 241.798 96.8405V85.6318H281.46V85.6013ZM211.172 180.418C219.298 180.418 225.939 177.647 231.154 172.073C236.522 166.529 239.19 159.402 239.19 150.721C239.19 142.041 236.522 134.914 231.154 129.37C225.969 123.827 219.298 121.024 211.172 121.024C203.045 121.024 196.313 123.796 190.946 129.37C185.761 134.914 183.153 142.041 183.153 150.721C183.153 159.402 185.761 166.529 190.946 172.073C196.313 177.616 203.045 180.418 211.172 180.418Z",
    fill: primary
  }), node("path", {
    d: "M76.6179 19.4473C88.3832 19.4473 98.3899 21.092 106.698 24.3815C115.007 27.671 122.012 32.2703 127.712 38.1792C133.595 44.2709 138.174 51.2154 141.449 59.0128C144.724 66.8406 146.361 75.2471 146.361 84.2933C146.361 93.3395 144.724 101.746 141.449 109.574C138.174 117.402 133.595 124.346 127.712 130.407C122.012 136.316 115.007 140.916 106.698 144.205C98.3899 147.495 88.3832 149.139 76.6179 149.139H55.0885V215.813H9.7251V19.4473H76.6179ZM70.1591 108.782C76.2237 108.782 80.8631 108.173 84.1683 106.954C87.6252 105.553 90.4755 103.817 92.7195 101.746C97.3892 97.3904 99.7241 91.5729 99.7241 84.2933C99.7241 77.0137 97.3892 71.1962 92.7195 66.8406C90.4755 64.7694 87.6252 63.0942 84.1683 61.9063C80.8934 60.5052 76.2237 59.8352 70.1591 59.8352H55.1188V108.812H70.1591V108.782Z",
    fill: primary
  }));
};
export var getPayPalSVG = function getPayPalSVG(_ref2) {
  var primary = _ref2.primary,
    secondary = _ref2.secondary;
  return node("svg", {
    width: "101px",
    height: "32",
    viewBox: "0 0 101 32",
    preserveAspectRatio: "xMinYMin meet",
    xmlns: "http://www.w3.org/2000/svg"
  }, node("path", {
    fill: primary,
    d: "M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z"
  }), node("path", {
    fill: primary,
    d: "M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z"
  }), node("path", {
    fill: primary,
    d: "M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z"
  }), node("path", {
    fill: secondary,
    d: "M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z"
  }), node("path", {
    fill: secondary,
    d: "M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z"
  }), node("path", {
    fill: secondary,
    d: "M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z"
  }));
};
export function PayPalLogoExternalImage(_ref3) {
  var _ref3$logoColor = _ref3.logoColor,
    logoColor = _ref3$logoColor === void 0 ? LOGO_COLOR.DEFAULT : _ref3$logoColor,
    props = _objectWithoutPropertiesLoose(_ref3, _excluded);
  var cdnUrl = getLogoCDNUrl(LOGO.PAYPAL, PAYPAL_LOGO_COLORS, logoColor);
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.PAYPAL,
    alt: "PayPal",
    role: "presentation",
    logoColor: logoColor,
    cdnUrl: cdnUrl
  }));
}
export function PayPalLogoInlineSVG(_ref4) {
  var _ref4$logoColor = _ref4.logoColor,
    logoColor = _ref4$logoColor === void 0 ? LOGO_COLOR.DEFAULT : _ref4$logoColor,
    props = _objectWithoutPropertiesLoose(_ref4, _excluded2);
  var svg = getPayPalSVG(getLogoColors(LOGO.PAYPAL, PAYPAL_LOGO_COLORS, logoColor));
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.PAYPAL,
    alt: "PayPal",
    role: "presentation",
    logoColor: logoColor,
    render: function render() {
      return svg;
    }
  }));
}
export function PayPalRebrandLogoInlineSVG(_ref5) {
  var _ref5$logoColor = _ref5.logoColor,
    logoColor = _ref5$logoColor === void 0 ? LOGO_COLOR.DEFAULT : _ref5$logoColor,
    props = _objectWithoutPropertiesLoose(_ref5, _excluded3);
  var svg = getRebrandPayPalSVG(getLogoColors(LOGO.PAYPAL, PAYPAL_LOGO_COLORS, logoColor));
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.PAYPAL,
    alt: "PayPal",
    role: "presentation",
    logoColor: logoColor,
    render: function render() {
      return svg;
    }
  }));
}
export var PayPalLogo = PayPalLogoInlineSVG;
var DEFAULT_OPACITY = "1";
export var PP_LOGO_COLORS = (_PP_LOGO_COLORS = {}, _PP_LOGO_COLORS[LOGO_COLOR.DEFAULT] = {
  primary: "#009cde",
  secondary: "#012169",
  tertiary: "#003087"
}, _PP_LOGO_COLORS[LOGO_COLOR.BLUE] = {
  primary: "#009cde",
  secondary: "#012169",
  tertiary: "#003087"
}, _PP_LOGO_COLORS[LOGO_COLOR.WHITE] = {
  primary: "#ffffff",
  primaryOpacity: "0.7",
  secondary: "#ffffff",
  secondaryOpacity: "0.7",
  tertiary: "#ffffff"
}, _PP_LOGO_COLORS[LOGO_COLOR.BLACK] = {
  primary: "#808080",
  secondary: "#000000",
  tertiary: "#1a1a1a"
}, _PP_LOGO_COLORS);
export var getPPSVG = function getPPSVG(_ref6) {
  var primary = _ref6.primary,
    secondary = _ref6.secondary,
    tertiary = _ref6.tertiary,
    _ref6$primaryOpacity = _ref6.primaryOpacity,
    primaryOpacity = _ref6$primaryOpacity === void 0 ? DEFAULT_OPACITY : _ref6$primaryOpacity,
    _ref6$secondaryOpacit = _ref6.secondaryOpacity,
    secondaryOpacity = _ref6$secondaryOpacit === void 0 ? DEFAULT_OPACITY : _ref6$secondaryOpacit,
    _ref6$tertiaryOpacity = _ref6.tertiaryOpacity,
    tertiaryOpacity = _ref6$tertiaryOpacity === void 0 ? DEFAULT_OPACITY : _ref6$tertiaryOpacity;
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
};
export function PPLogoExternalImage(_ref7) {
  var _ref7$logoColor = _ref7.logoColor,
    logoColor = _ref7$logoColor === void 0 ? LOGO_COLOR.DEFAULT : _ref7$logoColor,
    props = _objectWithoutPropertiesLoose(_ref7, _excluded4);
  var cdnUrl = getLogoCDNUrl(LOGO.PP, PP_LOGO_COLORS, logoColor);
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.PP,
    alt: "PP",
    role: "presentation",
    logoColor: logoColor,
    cdnUrl: cdnUrl
  }));
}
export function PPLogoInlineSVG(_ref8) {
  var _ref8$logoColor = _ref8.logoColor,
    logoColor = _ref8$logoColor === void 0 ? LOGO_COLOR.DEFAULT : _ref8$logoColor,
    props = _objectWithoutPropertiesLoose(_ref8, _excluded5);
  var svg = getPPSVG(getLogoColors(LOGO.PP, PP_LOGO_COLORS, logoColor));
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
export var PPLogo = PPLogoInlineSVG;
export var PPMONOCHROME_LOGO_COLORS = (_PPMONOCHROME_LOGO_CO = {}, _PPMONOCHROME_LOGO_CO[LOGO_COLOR.MONOCHROME] = {
  primary: "#000000",
  secondary: "#000000",
  tertiary: "#000000"
}, _PPMONOCHROME_LOGO_CO);
export var getPPMonochromeSVG = function getPPMonochromeSVG(_ref9) {
  var primary = _ref9.primary,
    secondary = _ref9.secondary,
    tertiary = _ref9.tertiary;
  return node("svg", {
    x: "0px",
    y: "0px",
    viewBox: "0 0 155.21 183.56",
    style: "enable-background:new 0 0 155.21 183.56;",
    xmlns: "http://www.w3.org/2000/svg"
  }, node("path", {
    fill: primary,
    d: "M60.82,38.11c1.48-0.71,3.06-1.07,4.71-1.07h44.72c5.57,0,10.73,0.38,15.35,1.12c1.36,0.22,2.69,0.47,3.98,0.76 c1.3,0.29,2.57,0.61,3.79,0.97c0.61,0.18,1.22,0.37,1.82,0.57c0.6,0.2,1.16,0.43,1.73,0.65c0.91-12.22-2.51-20.75-8.41-27.27 C119.88,4.28,104.66,0,85,0H31.88c-4.02,0-7.44,2.92-8.06,6.89L0.06,157.54c-0.47,2.97,1.83,5.66,4.84,5.66h31.29L54.76,46.24 C55.32,42.7,57.58,39.66,60.82,38.11z "
  }), node("path", {
    fill: secondary,
    d: "M132.83,47.59c-0.51-0.17-1.03-0.33-1.56-0.48c-1.07-0.32-2.18-0.6-3.31-0.85c-1.15-0.26-2.34-0.48-3.55-0.68 c-4.23-0.68-8.99-1.03-14.16-1.03H68.72c-1.1,0-2.15,0.25-3.08,0.7c-2.06,0.99-3.59,2.94-3.97,5.33l-7.5,47.68 c0.8-0.14,1.64-0.24,2.56-0.24c10.04,0,16.74,0,16.74,0c8.88,0,16.81-1,23.82-3.01c17.72-5.09,29.64-16.63,35.61-34.96 c1.32-4.06,2.29-7.81,2.97-11.32C134.9,48.33,133.88,47.94,132.83,47.59z "
  }), node("path", {
    fill: tertiary,
    d: "M148.21,56.27c-1.44-1.64-3.19-3.02-5.07-4.29c-4.63,22.39-18.44,53.91-70.2,53.91c-0.11,0-12.83-0.04-12.83-0.04 c-4.02,0-7.41,2.92-8.03,6.89c0,0-9.97,62.79-10.46,66.09c-0.39,2.61,1.87,4.73,4.25,4.73h25.76c3.51,0,6.51-2.56,7.05-6.03 l6.24-38.93c0.55-3.47,3.54-6.03,7.05-6.03h4.44c28.76,0,51.28-11.69,57.86-45.48c0.2-1,0.37-2.01,0.52-3.03 C156.14,72.74,154.31,63.23,148.21,56.27z"
  }));
};
export function PPMonochromeExternalImage(_ref10) {
  var _ref10$logoColor = _ref10.logoColor,
    logoColor = _ref10$logoColor === void 0 ? LOGO_COLOR.MONOCHROME : _ref10$logoColor;
  var cdnUrl = getLogoCDNUrl(LOGO.PPMONOCHROME, PPMONOCHROME_LOGO_COLORS, logoColor);
  return node(SVGLogo, {
    name: LOGO.PP,
    alt: "PP",
    logoColor: logoColor,
    cdnUrl: cdnUrl
  });
}
export function PPMonochromeInlineSVG(_ref11) {
  var _ref11$logoColor = _ref11.logoColor,
    logoColor = _ref11$logoColor === void 0 ? LOGO_COLOR.MONOCHROME : _ref11$logoColor;
  var svg = getPPMonochromeSVG(getLogoColors(LOGO.PPMONOCHROME, PPMONOCHROME_LOGO_COLORS, logoColor));
  return node(SVGLogo, {
    name: LOGO.PP,
    alt: "PP",
    logoColor: logoColor,
    render: function render() {
      return svg;
    }
  });
}
export var PPMonochrome = PPMonochromeInlineSVG;