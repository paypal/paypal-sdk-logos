import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["logoColor"];
var _SATISPAY_LOGO_COLORS;
import { node } from "@krakenjs/jsx-pragmatic/src";
import { getLogoCDNUrl, getLogoColors, SVGLogo } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
export var SATISPAY_LOGO_COLORS = (_SATISPAY_LOGO_COLORS = {}, _SATISPAY_LOGO_COLORS[LOGO_COLOR.DEFAULT] = {
  primary: "#FFFFFF"
}, _SATISPAY_LOGO_COLORS[LOGO_COLOR.WHITE] = {
  primary: "#FFFFFF"
}, _SATISPAY_LOGO_COLORS[LOGO_COLOR.BLACK] = {
  primary: "#2C2E2F"
}, _SATISPAY_LOGO_COLORS);
export var getSatispaySVG = function getSatispaySVG(_ref) {
  var primary = _ref.primary;
  return node("svg", {
    width: "94",
    height: "22",
    viewBox: "0 0 94 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, node("g", {
    "clip-path": "url(#clip0_412_10190)"
  }, node("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M18.5709 7.3559L21.9942 10.763C22.1295 10.8977 22.1295 11.1154 21.9942 11.2495L18.5709 14.6571L14.7157 18.4935L11.2934 21.8996C11.2288 21.9639 11.1408 22.0004 11.0492 22.0004H11.0467H4.69082C4.38308 22.0004 4.22895 21.6298 4.44666 21.4131L7.38016 18.4935L11.0477 14.8429L14.6587 11.2495L14.9029 11.0065L14.6587 10.763L11.0477 7.16959L7.38016 3.51898L4.43445 0.587257C4.21674 0.370579 4.37087 0 4.67862 0H11.0365C11.0386 0 11.0405 0.000540354 11.0424 0.00106265C11.0442 0.00155118 11.0459 0.00202391 11.0477 0.00202391C11.1352 0.00506145 11.2191 0.0389804 11.2811 0.100744L14.7157 3.51898L18.5709 7.3559ZM17.6612 0.587306C17.8789 0.370629 17.7248 4.96218e-05 17.4165 4.96218e-05H12.2876L15.2699 2.96721L17.6612 0.587306ZM54.6292 2.74786L53.1963 3.05364V3.67734V4.77946L53.2024 4.78655H53.4074L54.8342 4.48229V3.9978V2.74786H54.6292ZM51.1905 15.7936C50.6172 15.9976 49.962 16.1601 49.1431 16.1601C48.1395 16.1601 46.5636 15.9359 46.5636 13.6334V7.76491H45.2935V6.33878H46.5636V4.05658L48.0169 3.75081H48.1807V6.33878H51.3344V7.76491H48.1807V13.5929C48.1807 14.6318 49.0612 14.7138 49.4701 14.7138C49.8801 14.7138 50.5348 14.571 51.047 14.408L51.1905 15.7936ZM27.708 14.347H27.8723C28.8342 14.5506 29.6944 14.6933 30.5337 14.6933C31.8033 14.6933 32.7245 14.3875 32.7245 13.3077C32.7245 12.4342 31.7722 12.0948 30.7009 11.7131C29.3235 11.2222 27.7492 10.6613 27.7492 8.80455C27.7492 7.0114 29.4278 6.05356 31.5368 6.05356C32.3766 6.05356 33.2159 6.17557 33.9936 6.42009V7.92772H33.8298C32.9493 7.6432 32.1919 7.52069 31.5164 7.52069C30.5133 7.52069 29.469 7.74496 29.469 8.80455C29.469 9.62839 30.4099 9.9514 31.4732 10.3165C32.8551 10.7909 34.4438 11.3363 34.4438 13.1442C34.4438 15.4679 32.5607 16.1605 30.4721 16.1605C29.4482 16.1605 28.4247 16.0177 27.708 15.8542V14.347ZM57.3513 14.347H57.1875V15.8542C57.9042 16.0177 58.9277 16.1605 59.9516 16.1605C62.0402 16.1605 63.9233 15.4679 63.9233 13.1442C63.9233 11.3363 62.3344 10.7909 60.9524 10.3165C59.8889 9.9514 58.948 9.62839 58.948 8.80455C58.948 7.74496 59.9928 7.52069 60.9959 7.52069C61.6709 7.52069 62.4288 7.6432 63.3093 7.92772H63.4731V6.42009C62.6954 6.17557 61.8556 6.05356 61.0163 6.05356C58.9073 6.05356 57.2287 7.0114 57.2287 8.80455C57.2287 10.6613 58.803 11.2222 60.1804 11.7131C61.2517 12.0948 62.204 12.4342 62.204 13.3077C62.204 14.3875 61.2828 14.6933 60.0132 14.6933C59.1739 14.6933 58.3137 14.5506 57.3513 14.347ZM67.7307 14.4894C68.366 14.5912 69.041 14.6934 69.9012 14.6934C71.9074 14.6934 73.177 13.4298 73.177 10.9639C73.177 8.68165 72.4191 7.52081 70.7817 7.52081C69.8188 7.52081 68.7541 7.92784 67.7307 8.82492V10.3868V14.4894ZM66.0928 10.3868V20.969H66.2978L67.7307 20.6632V15.9155C68.4062 16.0583 69.041 16.1601 69.8396 16.1601C73.2589 16.1601 74.8963 13.8374 74.8963 10.7198C74.8963 7.54106 73.2589 6.05317 71.15 6.05317C69.7374 6.05317 68.6931 6.58322 67.7307 7.29654V6.05317H67.5257L66.0928 6.35895V10.3868ZM85.168 6.33864L88.4692 15.7727L88.6122 16.16C87.9367 17.8104 87.4865 18.5237 85.7051 19.7868L86.6263 20.9689C88.3868 19.8688 89.452 18.6867 90.3121 16.2415L93.9232 6.33864H92.0599L89.513 13.7558H89.3701L87.0511 6.33864H85.168ZM82.102 11.4531L79.461 11.8404C78.7652 11.9422 77.9864 12.2277 77.9864 13.3273C77.9864 14.1226 78.5403 14.6729 79.3791 14.6729C80.28 14.6729 81.3039 14.1019 82.102 13.5318V11.4531ZM83.74 15.8545L82.4093 16.1198H82.1839V14.7747H82.1427C81.2831 15.4267 80.2388 16.0996 78.8262 16.0996C77.5774 16.0996 76.2671 15.2025 76.2671 13.4498C76.2671 11.0871 78.3964 10.7606 79.5429 10.5971L82.102 10.2508V9.59923C82.102 7.96858 81.3243 7.52054 79.9117 7.52054C79.3791 7.52054 78.0485 7.68356 76.9635 8.1726L76.7788 6.66497C77.6802 6.31818 79.0928 6.05341 80.2189 6.05341C82.245 6.05341 83.74 6.88873 83.74 9.59923V15.8545ZM39.0495 14.6729C39.9504 14.6729 40.9743 14.1018 41.7725 13.5318V11.4531L39.1314 11.8404C38.4356 11.9421 37.6568 12.2276 37.6568 13.3277C37.6568 14.1231 38.2102 14.6729 39.0495 14.6729ZM39.8888 6.05335C41.9154 6.05335 43.4104 6.88867 43.4104 9.59917V15.8545L42.0797 16.1197H41.8543V14.7746H41.8131C40.9535 15.4267 39.9092 16.0995 38.4966 16.0995C37.2478 16.0995 35.9375 15.2024 35.9375 13.4497C35.9375 11.0871 38.0668 10.7605 39.2133 10.5975L41.7725 10.2512V9.59917C41.7725 7.96902 40.9947 7.52048 39.5821 7.52048C39.0495 7.52048 37.7189 7.6835 36.6339 8.17254L36.4492 6.66491C37.3501 6.31863 38.7632 6.05335 39.8888 6.05335ZM53.1958 16.1196H53.2026L53.1958 16.1123V16.1196ZM53.1963 6.35903L54.6292 6.05325H54.8342V15.3309V15.8154L53.4074 16.1191H53.2024L53.1963 16.1126V15.0104V6.35903ZM6.82559 4.07028L10.4936 7.72089L7.43701 10.763L7.19234 11.0065L7.43701 11.2495L10.4936 14.2916L6.82559 17.9422L3.52483 14.6571L0.10148 11.2495C-0.0338265 11.1153 -0.0338265 10.8971 0.10148 10.763L3.52483 7.35588L6.82559 4.07028ZM15.2694 19.0448L12.2998 22.0004H17.4043C17.7121 22.0004 17.8667 21.6298 17.649 21.4131L15.2694 19.0448Z",
    fill: primary
  })), node("defs", null, node("clipPath", {
    id: "clip0_412_10190"
  }, node("rect", {
    width: "93.9231",
    height: "22",
    fill: "white"
  }))));
};
export function SatispayLogo(_ref2) {
  var _ref2$logoColor = _ref2.logoColor,
    logoColor = _ref2$logoColor === void 0 ? LOGO_COLOR.BLACK : _ref2$logoColor,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded);
  var svg = getSatispaySVG(getLogoColors(LOGO.SATISPAY, SATISPAY_LOGO_COLORS, logoColor));
  var cdnUrl = getLogoCDNUrl(LOGO.SATISPAY, SATISPAY_LOGO_COLORS, logoColor);
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.SATISPAY,
    logoColor: logoColor,
    cdnUrl: cdnUrl,
    render: function render() {
      return svg;
    }
  }));
}