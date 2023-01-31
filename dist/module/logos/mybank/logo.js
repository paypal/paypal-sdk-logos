import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["logoColor"];
var _MYBANK_LOGO_COLORS;
import { node } from "@krakenjs/jsx-pragmatic/src";
import { getLogoCDNUrl, getLogoColors, SVGLogo } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
export var MYBANK_LOGO_COLORS = (_MYBANK_LOGO_COLORS = {}, _MYBANK_LOGO_COLORS[LOGO_COLOR.DEFAULT] = {
  primary: "#00C0EE",
  secondary: "#FFFFFF"
}, _MYBANK_LOGO_COLORS[LOGO_COLOR.WHITE] = {
  primary: "#FFFFFF",
  secondary: "#FFFFFF"
}, _MYBANK_LOGO_COLORS[LOGO_COLOR.BLACK] = {
  primary: "#00C0EE",
  secondary: "#1A4B67"
}, _MYBANK_LOGO_COLORS);
export var getMybankSVG = function getMybankSVG(_ref) {
  var primary = _ref.primary,
    secondary = _ref.secondary;
  return node("svg", {
    width: "78",
    height: "45",
    viewBox: "0 0 78 45",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, node("g", {
    id: "LOGO_MYBANK_1"
  }, node("path", {
    id: "logo_mark",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M77.9294 34.2781H53.9832L36.4006 34.2753L36.4127 34.2947C32.9375 38.3649 27.7757 40.9535 22.002 40.9535C11.534 40.9535 3.04804 32.4713 3.04804 22.0089C3.04804 11.5464 11.534 3.06497 22.002 3.06497C27.8005 3.06497 32.9869 5.66831 36.4629 9.76832H40.2687C36.3193 3.89172 29.6174 0.0175781 22.002 0.0175781C9.85098 0.0175781 6.10352e-05 9.86354 6.10352e-05 22.0089C6.10352e-05 34.1542 9.85098 44 22.002 44C28.3766 44 34.1051 41.2802 38.1211 36.9494L76.1258 36.9116L77.9294 34.2781Z",
    fill: primary
  }), node("path", {
    id: "bank_k",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M77.5656 27.341L74.547 22.7822L76.7655 20.6773C76.7655 20.6773 77.7895 19.7262 76.9488 18.7836C76.0171 17.7395 74.9066 18.7701 74.9066 18.7701L72.1188 21.3687V16.1528C72.1188 15.4054 71.5153 14.8 70.7707 14.8C70.0255 14.8 69.422 15.4054 69.422 16.1528V28.4261C69.422 29.1732 70.0255 29.7788 70.7707 29.7788C71.5153 29.7788 72.1188 29.1732 72.1188 28.4261V25.1585L72.6287 24.6474L75.3597 28.942C75.3597 28.942 76.2498 30.4331 77.5607 29.484C78.5463 28.7708 77.5656 27.341 77.5656 27.341",
    fill: secondary
  }), node("path", {
    id: "bank_n",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M67.8222 22.1688C67.8222 17.7396 64.1785 17.1155 61.7006 18.5206C61.6987 18.5222 61.6965 18.527 61.6953 18.5284C61.5089 17.9897 61.0078 17.6001 60.4121 17.6001C59.6592 17.6001 59.0486 18.2192 59.0486 18.9827V28.2175C59.0486 28.9812 59.6592 29.6001 60.4121 29.6001C61.1655 29.6001 61.7764 28.9812 61.7764 28.2175L61.7575 21.9872C61.7575 21.9872 62.0883 21.588 62.6194 21.2062C63.8951 20.2899 65.1114 20.602 65.1114 22.1683L65.1427 28.24C65.1427 28.9917 65.7432 29.6001 66.4846 29.6001C67.2255 29.6001 67.8261 28.9917 67.8261 28.24L67.8222 22.1688Z",
    fill: secondary
  }), node("path", {
    id: "bank_a",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M53.049 26.8045C53.049 26.8045 51.1059 27.2048 51.1263 25.8091C51.1469 24.4135 54.6659 24.4969 55.0265 24.61C55.0265 24.61 55.1372 26.1937 53.049 26.8045ZM53.6338 18.0003C50.6127 17.9722 49.2003 19.7155 49.2003 19.7155C48.283 20.6919 48.8712 22.014 49.7709 22.1095C51.0638 22.2467 51.0503 21.1592 53.0348 20.6772C54.7757 20.2543 54.8511 21.8727 54.8511 21.8727C47.4263 21.6874 47.7808 27.9399 50.3084 29.2678C52.7321 30.541 54.9976 28.9347 54.9976 28.9347C54.9976 28.9347 55.0828 29.8 56.2819 29.8C57.6542 29.8 57.6522 28.4257 57.6522 28.4257L57.6466 22.3399C57.5564 17.8873 53.6338 18.0003 53.6338 18.0003Z",
    fill: secondary
  }), node("path", {
    id: "bank_b",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M43.0907 26.9395H39.2737V23.2893H43.0907C44.0139 23.337 44.9102 23.8083 44.9102 25.1146C44.9102 26.4562 44.0951 26.9395 43.0907 26.9395ZM39.2737 17.5738H42.8315C43.5441 17.5922 44.2922 17.9736 44.2922 19.0396C44.2922 20.1504 43.6381 20.5052 42.8315 20.5052H39.2737V17.5738ZM46.0977 21.6111C46.1704 21.511 47.0834 20.7688 47.0113 18.7956C46.8659 14.8004 43.4076 14.846 42.6421 14.8227C41.409 14.7855 40.6668 14.8004 38.4035 14.8227C36.4924 14.8417 36.5064 16.5843 36.5064 16.5843V29.6H42.9481C46.3954 29.6 47.6778 27.6961 47.6778 25.0341C47.6778 22.3558 46.0977 21.6111 46.0977 21.6111Z",
    fill: secondary
  }), node("path", {
    id: "my_y",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M28.4561 29.8583C28.7702 29.3283 28.8249 28.955 28.8249 28.955L25.7282 20.7808C25.7282 20.7808 25.1663 19.199 26.4045 18.7306C27.7163 18.2337 28.1899 19.499 28.2884 19.7644C28.387 20.0297 30.2449 25.0259 30.2449 25.0259L32.0337 19.7759C32.0337 19.7759 32.5462 18.1435 33.979 18.7255C35.1631 19.207 34.5548 20.8081 34.5548 20.8081C34.5548 20.8081 32.7241 26.2783 31.1896 30.2471C30.273 32.6182 29.4902 32.8518 28.5957 33.0741C27.3987 33.3719 25.1356 33.2244 25.1356 31.7213C25.1356 30.5358 26.3375 30.4618 26.8797 30.4795C26.9087 30.48 28.0294 30.5781 28.4561 29.8583",
    fill: primary
  }), node("path", {
    id: "my_m",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M21.1518 16.2381L18.3115 24.125L15.215 16.2861C15.215 16.2861 14.7562 14.8 13.4651 14.8C11.9692 14.8 12.0179 15.9925 11.9842 16.2861C11.9507 16.5798 11.9842 28.5441 11.9842 28.5441C11.9842 28.5441 11.9692 29.8 13.3416 29.8C14.744 29.8 14.6768 28.5328 14.6878 28.5328C14.699 28.5328 14.6878 22.2168 14.6878 22.2168L16.9653 28.5328C16.9653 28.5328 17.3017 29.7747 18.3563 29.7521C19.4108 29.7297 19.7137 28.5328 19.7137 28.5328L21.621 22.2282V28.5328C21.621 28.5328 21.621 29.8 23.0009 29.8C24.3358 29.8 24.3358 28.5328 24.3358 28.5328L24.3376 16.2974C24.3376 16.2974 24.3376 14.8 22.8885 14.8072C21.6869 14.8129 21.2304 15.9722 21.1518 16.2381C21.1427 16.2691 21.1386 16.2861 21.1386 16.2861",
    fill: primary
  })));
};
export function MybankLogo(_ref2) {
  var _ref2$logoColor = _ref2.logoColor,
    logoColor = _ref2$logoColor === void 0 ? LOGO_COLOR.BLACK : _ref2$logoColor,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded);
  var svg = getMybankSVG(getLogoColors(LOGO.MYBANK, MYBANK_LOGO_COLORS, logoColor));
  var cdnUrl = getLogoCDNUrl(LOGO.MYBANK, MYBANK_LOGO_COLORS, logoColor);
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.MYBANK,
    logoColor: logoColor,
    cdnUrl: cdnUrl,
    render: function render() {
      return svg;
    }
  }));
}