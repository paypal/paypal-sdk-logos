import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["logoColor"];
var _PAYU_LOGO_COLORS;
import { node } from "@krakenjs/jsx-pragmatic/src";
import { getLogoCDNUrl, getLogoColors, SVGLogo } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
export var PAYU_LOGO_COLORS = (_PAYU_LOGO_COLORS = {}, _PAYU_LOGO_COLORS[LOGO_COLOR.DEFAULT] = {
  primary: "#A6C307"
}, _PAYU_LOGO_COLORS[LOGO_COLOR.WHITE] = {
  primary: "#FFFFFF"
}, _PAYU_LOGO_COLORS[LOGO_COLOR.BLACK] = {
  primary: "#2C2E2F"
}, _PAYU_LOGO_COLORS);
export var getPayuSVG = function getPayuSVG(_ref) {
  var primary = _ref.primary;
  return node("svg", {
    width: "45",
    height: "22",
    viewBox: "0 0 45 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, node("g", {
    "clip-path": "url(#clip0_381_8857)"
  }, node("path", {
    d: "M41.1719 4.60855L38.525 4.60764C38.2363 4.60764 38.0023 4.83982 38.0021 5.12627L38.002 5.49261H38.1856C39.3807 5.49261 39.8252 5.6882 39.8252 6.76831V8.30378L41.1705 8.30424C41.4592 8.30439 41.6932 8.07236 41.6934 7.78591L41.6943 5.12734C41.6943 4.84089 41.4604 4.60871 41.1719 4.60855M26.7262 8.73613C26.604 8.58398 26.3731 8.56294 26.1415 8.56294H25.9679C25.3909 8.56294 25.1646 8.73948 25.0369 9.28876L23.4337 15.9005C23.2336 16.7131 22.9524 16.8615 22.4713 16.8615C21.8822 16.8615 21.6464 16.722 21.4116 15.8973L19.5957 9.28556C19.4454 8.73186 19.2237 8.56294 18.6466 8.56294H18.492C18.259 8.56294 18.027 8.58429 17.9079 8.73841C17.7887 8.89269 17.829 9.12304 17.8904 9.34943L19.7255 16.0185C20.0697 17.2948 20.4789 18.3513 22.0077 18.3513C22.2931 18.3513 22.5571 18.3119 22.7766 18.2385C22.3129 19.6854 21.8412 20.3235 20.4501 20.4653C20.1679 20.4886 19.9844 20.5287 19.8822 20.6647C19.7761 20.8057 19.8002 21.0077 19.8381 21.1881L19.8764 21.3591C19.9594 21.7546 20.1009 21.9997 20.5483 21.9997C20.5953 21.9997 20.6459 21.9973 20.7001 21.9927C22.7773 21.8578 23.8902 20.7482 24.5414 18.1631L26.7635 9.34471C26.8162 9.11847 26.848 8.88812 26.7262 8.73613M15.549 13.8159V15.1506C15.549 16.2386 15.1425 16.8686 13.0641 16.8686C11.6911 16.8686 11.0236 16.3755 11.0236 15.3614C11.0236 14.2493 11.6932 13.8159 13.4118 13.8159H15.549ZM13.0641 8.28228C11.9311 8.28228 11.221 8.4233 10.9517 8.47681C10.4749 8.57956 10.2754 8.70945 10.2754 9.24744V9.40081C10.2754 9.61164 10.3069 9.75769 10.3744 9.86044C10.4529 9.98012 10.5795 10.0408 10.7507 10.0408C10.8341 10.0408 10.9309 10.0269 11.0463 9.99826C11.3188 9.93072 12.1892 9.79108 13.1414 9.79108C14.8516 9.79108 15.549 10.2611 15.549 11.4131V12.4413H13.3925C10.6202 12.4413 9.32893 13.3691 9.32893 15.3614C9.32893 17.2939 10.6623 18.3581 13.0835 18.3581C15.9607 18.3581 17.2437 17.3867 17.2437 15.2081V11.4131C17.2437 9.30644 15.8766 8.28228 13.0641 8.28228M7.62936 9.56042C7.62936 11.147 7.2211 12.0068 5.06717 12.0068H1.75161V7.91214C1.75161 7.34442 1.96442 7.13327 2.53663 7.13327H5.06717C6.68991 7.13327 7.62936 7.53055 7.62936 9.56042V9.56042ZM5.06717 5.49032H2.20811C0.680326 5.49032 -0.000976562 6.16628 -0.000976562 7.68224V17.4184C-0.000976562 18.004 0.188477 18.192 0.778818 18.192H0.971965C1.56215 18.192 1.75161 18.004 1.75161 17.4184V13.6305H5.06717C8.01088 13.6305 9.38195 12.3371 9.38195 9.56042C9.38195 6.78355 8.01088 5.49032 5.06717 5.49032M41.4295 1.86477L40.0944 1.86431C39.9488 1.86415 39.8308 1.74708 39.8308 1.60255L39.8312 0.261455C39.8314 0.116933 39.9495 0 40.0951 0L41.4302 0.000460587C41.5758 0.000460587 41.6938 0.117695 41.6938 0.262065L41.6934 1.60316C41.6932 1.74769 41.5752 1.86477 41.4295 1.86477M44.049 4.61023L42.0832 4.60947C41.8688 4.60947 41.6951 4.4369 41.6952 4.22423L41.6958 2.2497C41.696 2.03688 41.8699 1.86446 42.0843 1.86446L44.05 1.86522C44.2645 1.86522 44.4383 2.0378 44.4383 2.25046L44.4375 4.22514C44.4375 4.43781 44.2635 4.61023 44.049 4.61023M38.5236 8.30347C38.2349 8.30347 38.001 8.07129 38.0012 7.78484L38.002 5.49261H37.8093C36.6142 5.49261 36.1696 5.68835 36.1696 6.76846V9.29592C36.1695 9.30126 36.1689 9.30659 36.1689 9.31193V9.86593C36.1686 9.88514 36.1673 9.90298 36.1673 9.92279V13.4543C36.1673 13.8856 36.0836 14.229 35.9107 14.4958C35.5848 14.994 34.9396 15.2204 33.9074 15.2218C32.8756 15.2204 32.2305 14.9942 31.9046 14.4964C31.7313 14.2295 31.6474 13.8859 31.6474 13.4543V9.92279C31.6474 9.90298 31.6464 9.88514 31.646 9.86593V9.31193C31.646 9.30659 31.6454 9.30126 31.6453 9.29592V6.76846C31.6453 5.68835 31.2007 5.49261 30.0056 5.49261H29.6293C28.434 5.49261 27.9897 5.68835 27.9897 6.76846V13.4543C27.9897 14.5298 28.2341 15.4404 28.7065 16.1744C29.6187 17.5968 31.3859 18.3543 33.8982 18.3543C33.9012 18.3543 33.9043 18.3542 33.9074 18.3542C33.9106 18.3542 33.9135 18.3543 33.9168 18.3543C36.429 18.3543 38.1962 17.5968 39.1084 16.1744C39.5808 15.4404 39.8252 14.5298 39.8252 13.4543V8.30393L38.5236 8.30347",
    fill: primary
  })), node("defs", null, node("clipPath", {
    id: "clip0_381_8857"
  }, node("rect", {
    width: "44.44",
    height: "22",
    fill: "white"
  }))));
};
export function PayuLogo(_ref2) {
  var _ref2$logoColor = _ref2.logoColor,
    logoColor = _ref2$logoColor === void 0 ? LOGO_COLOR.BLACK : _ref2$logoColor,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded);
  var svg = getPayuSVG(getLogoColors(LOGO.PAYU, PAYU_LOGO_COLORS, logoColor));
  var cdnUrl = getLogoCDNUrl(LOGO.PAYU, PAYU_LOGO_COLORS, logoColor);
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.PAYU,
    logoColor: logoColor,
    cdnUrl: cdnUrl,
    render: function render() {
      return svg;
    }
  }));
}