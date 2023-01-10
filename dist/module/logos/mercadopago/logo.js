import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["logoColor"];
var _LOGO_COLORS;
import { node } from "@krakenjs/jsx-pragmatic/src";
import { SVGLogo, getLogoColors } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
var LOGO_COLORS = (_LOGO_COLORS = {}, _LOGO_COLORS[LOGO_COLOR.DEFAULT] = {
  primary: "#009EE3",
  secondary: "#FFFFFF",
  tertiary: "#009EE3",
  quaternary: "#FFFFFF"
}, _LOGO_COLORS[LOGO_COLOR.WHITE] = {
  primary: "#000000",
  secondary: "#FFFFFF",
  tertiary: "#000000",
  quaternary: "#FFFFFF"
}, _LOGO_COLORS[LOGO_COLOR.BLACK] = {
  primary: "#FFFFFF",
  secondary: "#2D3277",
  tertiary: "#009EE3",
  quaternary: "#009EE3"
}, _LOGO_COLORS);
export function MercadoPagoLogo(_ref) {
  var _ref$logoColor = _ref.logoColor,
    logoColor = _ref$logoColor === void 0 ? LOGO_COLOR.BLACK : _ref$logoColor,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _getLogoColors = getLogoColors(LOGO.MERCADOPAGO, LOGO_COLORS, logoColor),
    primary = _getLogoColors.primary,
    secondary = _getLogoColors.secondary,
    tertiary = _getLogoColors.tertiary,
    quaternary = _getLogoColors.quaternary;
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.MERCADOPAGO,
    logoColor: logoColor,
    render: function render() {
      return node("svg", {
        width: "98",
        height: "26",
        viewBox: "0 0 98 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M35.6856 11.9268C35.6856 5.49758 27.6975 0.256836 17.8435 0.256836C7.98988 0.256836 0.0020562 5.49758 0.0020562 11.9268C0.0020562 12.0928 0 12.5519 0 12.61C0 19.4304 6.98183 24.9546 17.8411 24.9546C28.7678 24.9546 35.6856 19.4319 35.6856 12.6113V11.9268Z",
        fill: secondary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M35.0024 11.9215C35.0024 17.9827 27.3217 22.8962 17.8467 22.8962C8.37202 22.8962 0.691589 17.9827 0.691589 11.9215C0.691589 5.85984 8.37202 0.946289 17.8467 0.946289C27.3217 0.946289 35.0024 5.85984 35.0024 11.9215",
        fill: tertiary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M12.1505 8.45877C12.1415 8.47599 11.9703 8.65308 12.0811 8.79548C12.352 9.14117 13.1881 9.3396 14.0337 9.14991C14.5372 9.03682 15.1826 8.52354 15.8077 8.02748C16.4852 7.48927 17.1573 6.95029 17.833 6.73593C18.5486 6.50821 19.0069 6.60588 19.3096 6.69738C19.642 6.79659 20.0327 7.01532 20.6559 7.48285C21.8298 8.36547 26.5498 12.4853 27.3653 13.1978C28.0223 12.9009 30.9413 11.6443 34.9082 10.7699C34.5636 8.65514 33.2772 6.72025 31.3261 5.13595C28.607 6.27817 25.2839 6.87396 22.0344 5.28683C22.0179 5.28014 20.2591 4.44789 18.5244 4.48876C15.9462 4.54839 14.8292 5.66439 13.6471 6.84568L12.1505 8.45877Z",
        fill: primary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M27.1737 13.6457C27.1184 13.5966 21.6237 8.78868 20.3787 7.85286C19.6585 7.31259 19.2578 7.17482 18.8371 7.12111C18.6181 7.09283 18.3156 7.13344 18.104 7.19153C17.5249 7.34909 16.768 7.85543 16.0954 8.38824C15.3993 8.94264 14.7432 9.46466 14.1345 9.60114C13.3562 9.7754 12.4063 9.56978 11.9727 9.27652C11.7971 9.15854 11.6735 9.02206 11.6141 8.88327C11.454 8.51187 11.7493 8.215 11.7979 8.1654L13.3141 6.52532C13.4904 6.34926 13.668 6.17345 13.8495 5.99996C13.3604 6.0637 12.908 6.18862 12.4677 6.31122C11.9182 6.46569 11.39 6.61271 10.8554 6.61245C10.6323 6.61245 9.43636 6.41634 9.2094 6.35466C7.8374 5.97914 6.63299 5.6134 4.83407 4.77344C2.6784 6.3783 1.237 8.38464 0.820618 10.5948C1.13033 10.6765 1.62922 10.8251 1.83895 10.8716C6.71703 11.9563 8.23631 13.0736 8.5121 13.3069C8.8105 12.9749 9.24076 12.7646 9.7214 12.7646C10.2612 12.7654 10.7474 13.0365 11.043 13.4557C11.3224 13.235 11.7077 13.0466 12.2058 13.0468C12.432 13.0468 12.6667 13.0887 12.9034 13.1692C13.4539 13.3581 13.7379 13.7246 13.8852 14.0562C14.07 13.9726 14.2967 13.9112 14.564 13.912C14.8267 13.912 15.0999 13.9721 15.3754 14.0909C16.2748 14.4769 16.4148 15.3603 16.3331 16.0265C16.3971 16.0188 16.4616 16.016 16.5272 16.016C17.5936 16.0167 18.461 16.8834 18.4605 17.9503C18.4605 18.2804 18.376 18.5909 18.2292 18.8636C18.5194 19.0268 19.2591 19.3956 19.9083 19.3134C20.4273 19.2481 20.6244 19.0705 20.6948 18.971C20.7429 18.9021 20.7943 18.8222 20.7468 18.7646L19.3704 17.2356C19.3704 17.2356 19.1437 17.0212 19.2185 16.9387C19.2964 16.8536 19.4362 16.9755 19.5351 17.0582C20.2358 17.6435 21.0912 18.5261 21.0912 18.5261C21.1056 18.5356 21.1621 18.6477 21.4785 18.7045C21.7507 18.753 22.2324 18.7248 22.5662 18.4505C22.6505 18.3814 22.7346 18.295 22.805 18.2058C22.7994 18.2102 22.795 18.2161 22.7896 18.2182C23.1415 17.7679 22.7508 17.3122 22.7508 17.3122L21.1439 15.5076C21.1439 15.5076 20.9141 15.2953 20.992 15.2097C21.0621 15.1357 21.2099 15.2475 21.3104 15.3313C21.8193 15.7566 22.5382 16.4781 23.2273 17.1531C23.3617 17.2512 23.9673 17.626 24.7692 17.0993C25.2555 16.7801 25.3534 16.3881 25.3395 16.0923C25.3056 15.7006 25.0003 15.4217 25.0003 15.4217L22.805 13.2149C22.805 13.2149 22.5734 13.017 22.6552 12.9168C22.7222 12.8325 22.8729 12.954 22.9713 13.0365C23.6709 13.6215 25.5637 15.357 25.5637 15.357C25.5906 15.376 26.2448 15.8417 27.0529 15.3271C27.3418 15.1423 27.5266 14.8637 27.5425 14.5404C27.57 13.9791 27.1737 13.6457 27.1737 13.6457",
        fill: primary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M16.5269 16.4437C16.1866 16.4396 15.8145 16.6419 15.7656 16.6123C15.7389 16.5946 15.7864 16.4578 15.8183 16.3789C15.851 16.3005 16.2992 14.9519 15.2066 14.4836C14.3705 14.1243 13.8595 14.5286 13.6837 14.7111C13.6377 14.7586 13.6172 14.755 13.6118 14.6939C13.595 14.4512 13.4863 13.794 12.7646 13.574C11.7334 13.2581 11.0703 13.9781 10.9019 14.2379C10.8266 13.6501 10.3298 13.1936 9.72117 13.1934C9.05958 13.1926 8.52317 13.7285 8.5224 14.3896C8.52214 15.0506 9.0583 15.5868 9.71962 15.5868C10.0412 15.5875 10.3324 15.459 10.5472 15.2526C10.5542 15.2591 10.5568 15.2704 10.5534 15.293C10.503 15.5891 10.4102 16.665 11.537 17.103C11.9889 17.2785 12.3732 17.1479 12.6916 16.9246C12.7864 16.8575 12.8021 16.886 12.7885 16.975C12.7479 17.2518 12.7993 17.8442 13.63 18.1812C14.2618 18.438 14.636 18.175 14.8809 17.9486C14.9876 17.8514 15.0167 17.8671 15.0223 18.0175C15.0524 18.8181 15.7176 19.454 16.5251 19.4548C17.3574 19.4555 18.0318 18.7826 18.0321 17.9506C18.0328 17.1184 17.3589 16.4527 16.5269 16.4437",
        fill: primary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M16.5269 19.3475C15.7725 19.3467 15.1595 18.7607 15.1318 18.0138C15.1297 17.9498 15.1233 17.7794 14.9794 17.7794C14.92 17.7794 14.8686 17.8151 14.8092 17.8686C14.6437 18.0223 14.4324 18.1785 14.1237 18.1785C13.9839 18.1785 13.8323 18.1459 13.6721 18.0804C12.8756 17.7578 12.8646 17.2108 12.8969 16.9908C12.9057 16.9322 12.9088 16.8711 12.8684 16.8238L12.8193 16.7798H12.7697C12.7294 16.7798 12.6875 16.7963 12.6312 16.8361C12.4006 16.9978 12.1798 17.0764 11.9552 17.0764C11.8313 17.0764 11.7046 17.0515 11.5776 17.0027C10.529 16.5945 10.6117 15.6047 10.6631 15.3068C10.6706 15.2467 10.6557 15.1996 10.6174 15.1685L10.5434 15.1076L10.474 15.1739C10.2694 15.3708 10.0023 15.4788 9.72114 15.4788C9.12073 15.478 8.63187 14.9902 8.63238 14.3895C8.6329 13.7886 9.12202 13.301 9.72269 13.3018C10.2655 13.3018 10.7277 13.7097 10.7968 14.252L10.8343 14.5445L10.995 14.297C11.013 14.2679 11.453 13.6025 12.2618 13.6032C12.4158 13.6032 12.5746 13.6282 12.7345 13.6775C13.3796 13.8744 13.4889 14.4591 13.5056 14.7028C13.5171 14.8447 13.6182 14.8516 13.6379 14.8516C13.6937 14.8516 13.7346 14.8161 13.7636 14.7858C13.8855 14.6588 14.1505 14.4476 14.5653 14.4476C14.755 14.4481 14.9573 14.4931 15.1657 14.5828C16.1905 15.0225 15.7258 16.3249 15.7201 16.3385C15.6322 16.5544 15.6286 16.6498 15.7114 16.7048L15.7517 16.724H15.7818C15.8278 16.724 15.8854 16.704 15.9802 16.6719C16.1198 16.6235 16.3303 16.5511 16.5272 16.5516H16.5277C17.2993 16.5598 17.9267 17.188 17.9264 17.9506C17.9256 18.7211 17.298 19.3475 16.5269 19.3475M27.3862 13.0704C25.6937 11.5933 21.7818 8.19261 20.7223 7.39737C20.1173 6.94192 19.7043 6.7016 19.3419 6.59365C19.1792 6.5443 18.9537 6.48853 18.6636 6.48827C18.3945 6.48827 18.105 6.53685 17.8028 6.63298C17.1181 6.84965 16.4359 7.39172 15.7761 7.91605L15.7422 7.94303C15.1277 8.43138 14.4926 8.93695 14.0119 9.04439C13.8019 9.09168 13.5863 9.11584 13.3712 9.11584C12.8327 9.11507 12.349 8.95983 12.1678 8.72876C12.138 8.69046 12.157 8.62852 12.2271 8.53933L12.2364 8.52751L13.7253 6.9229C14.8915 5.75678 15.9931 4.65568 18.5286 4.59734C18.5703 4.59605 18.6132 4.59528 18.6551 4.59528C20.2335 4.59631 21.8114 5.30287 21.9882 5.38486C23.4681 6.10659 24.9954 6.47336 26.5311 6.47465C28.1313 6.47516 29.7825 6.07909 31.5184 5.27974C31.3246 5.11653 31.1229 4.95794 30.9152 4.80219C29.3903 5.46326 27.9373 5.79739 26.5352 5.79687C25.1036 5.79559 23.673 5.45195 22.284 4.77417C22.2108 4.73922 20.4687 3.91776 18.6559 3.91699C18.6086 3.91699 18.5602 3.91776 18.5129 3.91853C16.383 3.9684 15.1832 4.72457 14.3766 5.38743C13.5919 5.40645 12.9149 5.59562 12.3127 5.76372C11.7753 5.91305 11.3111 6.04259 10.8582 6.04233C10.6719 6.04233 10.3362 6.02537 10.3061 6.02434C9.7854 6.00866 7.16272 5.36533 5.07644 4.57523C4.86337 4.72611 4.65852 4.88186 4.45907 5.04045C6.63838 5.93387 9.29088 6.62527 10.128 6.67924C10.3609 6.69441 10.6092 6.72088 10.8572 6.72139C11.4111 6.72139 11.9637 6.56589 12.4986 6.41631C12.8144 6.32763 13.163 6.23125 13.5297 6.16082C13.4318 6.25695 13.3341 6.35436 13.2362 6.45255L11.7234 8.08902C11.6044 8.20931 11.3458 8.53008 11.5162 8.92513C11.5841 9.08448 11.7216 9.2369 11.9141 9.3667C12.2744 9.60933 12.9201 9.77357 13.5197 9.77408C13.7469 9.77434 13.9621 9.75146 14.1602 9.707C14.7943 9.56461 15.4595 9.03488 16.1643 8.47456C16.7256 8.02862 17.5234 7.46214 18.1341 7.29559C18.3048 7.24932 18.5142 7.22028 18.6828 7.22028C18.7332 7.22079 18.7808 7.22234 18.8247 7.22876C19.2285 7.27991 19.6184 7.41716 20.3149 7.93995C21.5566 8.87269 27.0521 13.6801 27.1058 13.7276C27.1097 13.7305 27.46 14.0327 27.4356 14.5352C27.4227 14.8154 27.267 15.0644 26.9966 15.2369C26.7622 15.3857 26.5201 15.4615 26.2754 15.4615C25.9081 15.4608 25.6552 15.2888 25.6387 15.277C25.6184 15.2605 23.7357 13.5341 23.0433 12.9543C22.9328 12.863 22.8256 12.7805 22.7171 12.7805C22.659 12.78 22.6079 12.8049 22.5732 12.8484C22.4642 12.9825 22.5863 13.1686 22.7302 13.2912L24.9293 15.5016C24.9324 15.5039 25.2036 15.7581 25.2331 16.0972C25.2503 16.4637 25.0753 16.7703 24.7111 17.0088C24.4515 17.1797 24.1888 17.2666 23.9316 17.2666C23.5938 17.2666 23.3566 17.1129 23.3042 17.0764L22.9888 16.7654C22.412 16.1982 21.8167 15.6116 21.3811 15.2479C21.2749 15.1595 21.1611 15.0781 21.0531 15.0781C20.9997 15.0781 20.9516 15.0978 20.9146 15.1367C20.865 15.1919 20.8303 15.2914 20.9542 15.4559C21.0053 15.5237 21.0652 15.5798 21.0652 15.5798L22.6701 17.3823C22.6834 17.3985 23.0009 17.7758 22.7063 18.1516L22.6495 18.2235C22.6017 18.2765 22.5498 18.3251 22.5004 18.3675C22.2267 18.5921 21.861 18.616 21.716 18.616C21.6389 18.616 21.5641 18.6093 21.4993 18.5975C21.3407 18.5692 21.2343 18.525 21.1829 18.4641L21.1636 18.4438C21.0757 18.3533 20.2669 17.5275 19.5973 16.9687C19.5094 16.8947 19.3994 16.8017 19.2853 16.8017C19.2293 16.8017 19.1792 16.8238 19.1406 16.8664C19.008 17.0114 19.2069 17.2283 19.2912 17.3077L20.6601 18.8173C20.6586 18.8306 20.6414 18.8617 20.6082 18.9095C20.5591 18.9774 20.3931 19.1434 19.8965 19.2056C19.8371 19.2136 19.7757 19.2167 19.7148 19.2167C19.2028 19.2167 18.6566 18.9681 18.3752 18.8188C18.5032 18.5484 18.5697 18.2503 18.5697 17.9513C18.5703 16.8248 17.6555 15.9082 16.529 15.9075C16.5048 15.9075 16.4791 15.9082 16.4552 15.909C16.492 15.3947 16.4192 14.4206 15.4194 13.9919C15.1318 13.8675 14.8447 13.804 14.5658 13.804C14.3476 13.804 14.1376 13.8412 13.9402 13.9171C13.733 13.5146 13.3891 13.2213 12.9404 13.0684C12.6926 12.9825 12.4459 12.9391 12.2073 12.9391C11.7915 12.9391 11.4083 13.0617 11.0664 13.3048C10.7387 12.8975 10.2442 12.6564 9.72294 12.6564C9.26724 12.6564 8.82875 12.8388 8.50362 13.1606C8.07772 12.8353 6.38753 11.7614 1.86388 10.7343C1.6449 10.685 1.14216 10.5405 0.833984 10.4506C0.783093 10.6955 0.744025 10.943 0.718323 11.1926C0.718323 11.1926 1.55263 11.3926 1.71687 11.4293C6.33792 12.4559 7.86491 13.5231 8.12296 13.7248C8.03557 13.9345 7.99008 14.1612 7.98956 14.3895C7.98905 15.3441 8.76552 16.1216 9.72114 16.1223C9.82807 16.1223 9.93422 16.1131 10.0386 16.0938C10.1822 16.7963 10.6421 17.3288 11.3448 17.6023C11.5501 17.6812 11.7578 17.7218 11.9616 17.7218C12.0937 17.7221 12.2264 17.7054 12.3559 17.6722C12.4854 18.002 12.7777 18.4127 13.4303 18.6779C13.6593 18.77 13.888 18.818 14.1106 18.818C14.2923 18.818 14.4699 18.7862 14.6393 18.724C14.9521 19.4858 15.6967 19.9906 16.5264 19.9906C17.0764 19.9913 17.6044 19.7672 17.9894 19.3709C18.3194 19.5541 19.0152 19.8857 19.7181 19.8867C19.8094 19.8867 19.8947 19.8801 19.98 19.87C20.6781 19.7816 21.0033 19.5087 21.1526 19.2964C21.1796 19.2593 21.2037 19.22 21.2243 19.1791C21.3893 19.2264 21.5705 19.2653 21.7782 19.2658C22.1596 19.2658 22.5256 19.1357 22.8955 18.8661C23.2589 18.6039 23.5172 18.2279 23.5545 17.9074C23.5553 17.9033 23.556 17.8984 23.5566 17.8938C23.6789 17.919 23.8046 17.9321 23.9303 17.9321C24.3227 17.9321 24.7091 17.8097 25.0781 17.5679C25.7898 17.1011 25.9137 16.4917 25.9019 16.0925C26.0263 16.1185 26.1535 16.1319 26.28 16.1319C26.6488 16.1319 27.0105 16.0211 27.3556 15.8011C27.797 15.5191 28.0625 15.0873 28.1026 14.5848C28.1303 14.2432 28.0455 13.8986 27.8653 13.6022C29.0582 13.0884 31.7839 12.094 34.9939 11.3707C34.9744 11.1217 34.9387 10.8759 34.8942 10.6313C31.0103 11.4931 28.1121 12.7473 27.3862 13.0704",
        fill: secondary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M82.526 20.2675C82.2142 20.6826 81.7665 20.89 81.1831 20.89C80.5994 20.89 80.1496 20.6826 79.8357 20.2675C79.5196 19.8537 79.3628 19.2638 79.3628 18.4997C79.3628 17.7358 79.5196 17.1472 79.8357 16.7355C80.1496 16.3222 80.5994 16.1171 81.1831 16.1171C81.7665 16.1171 82.2142 16.3222 82.526 16.7355C82.8393 17.1472 82.9948 17.7358 82.9948 18.4997C82.9948 19.2638 82.8393 19.8537 82.526 20.2675M84.1229 15.64C83.4778 14.8324 82.4998 14.4297 81.1882 14.4297C79.8789 14.4297 78.9007 14.8324 78.2566 15.64C77.612 16.4463 77.2902 17.3991 77.2902 18.4997C77.2902 19.619 77.612 20.5752 78.2566 21.3717C78.9007 22.1649 79.8789 22.5632 81.1882 22.5632C82.4998 22.5632 83.4778 22.1649 84.1229 21.3717C84.7665 20.5752 85.0873 19.619 85.0873 18.4997C85.0873 17.3991 84.7665 16.4463 84.1229 15.64",
        fill: quaternary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M71.2461 18.5584C71.2461 19.8972 71.6331 20.6393 72.4068 20.786C73.1789 20.9292 73.75 20.7498 74.1176 20.246C74.2918 20.034 74.4167 19.698 74.4941 19.2429C74.5709 18.7871 74.5769 18.3356 74.509 17.8894C74.4424 17.4419 74.2818 17.044 74.0302 16.6947C73.7796 16.3462 73.4118 16.1706 72.9283 16.1706C72.2706 16.1706 71.8269 16.4143 71.5943 16.8975C71.361 17.3838 71.2461 17.9367 71.2461 18.5584M74.5527 21.9054V21.4124C74.2049 21.9568 73.7351 22.294 73.1457 22.431C72.5554 22.5659 71.9709 22.5176 71.3921 22.2842C70.8114 22.0524 70.3128 21.6201 69.8967 20.9901C69.4821 20.3573 69.2742 19.5276 69.2742 18.499C69.2742 17.2972 69.5497 16.3207 70.1 15.5738C70.6516 14.8269 71.5368 14.4861 72.7545 14.4527C73.9549 14.4211 74.6527 14.6927 75.3359 15.2101C76.0828 15.7771 76.5246 16.6469 76.5246 18.0045V22.111C76.5277 23.4177 75.6165 25.8394 72.7545 25.634C70.9816 25.5055 69.9977 24.7781 69.4484 23.1301H71.5653C71.72 23.401 71.9565 23.6097 72.2773 23.7542C72.5944 23.9017 72.9152 23.9395 73.2321 23.8714C73.5508 23.8035 73.8415 23.6136 74.1039 23.3044C74.3635 22.9936 74.5131 22.5271 74.5527 21.9054",
        fill: quaternary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M66.5408 19.3679C66.5282 20.0379 66.3359 20.498 65.9678 20.7514C65.6 21.0038 65.1973 21.1303 64.7606 21.1303C64.484 21.1303 64.2501 21.0539 64.0579 20.9023C63.8651 20.7504 63.7687 20.5026 63.7687 20.1608C63.7687 19.7778 63.9263 19.4943 64.2417 19.3113C64.4293 19.2041 64.7346 19.1121 65.1618 19.0391L65.6175 18.9543C65.8455 18.9111 66.0241 18.8656 66.1532 18.816C66.2858 18.768 66.4133 18.7042 66.5408 18.6235V19.3679ZM67.5563 15.0064C66.9026 14.6761 66.1552 14.5088 65.3147 14.5088C64.0206 14.5088 63.109 14.846 62.5774 15.5192C62.2441 15.9502 62.0559 16.5002 62.0127 17.17H63.9453C63.9926 16.8744 64.0869 16.6406 64.2301 16.4678C64.4293 16.2339 64.7683 16.1167 65.2461 16.1167C65.6754 16.1167 65.9982 16.1756 66.219 16.2959C66.439 16.4154 66.5497 16.6316 66.5497 16.9454C66.5497 17.2029 66.4063 17.3924 66.1179 17.5144C65.9578 17.5846 65.6918 17.643 65.3178 17.69L64.6331 17.7735C63.8556 17.872 63.2647 18.0367 62.8656 18.266C62.1333 18.6872 61.7683 19.3679 61.7683 20.3086C61.7683 21.0336 61.9942 21.595 62.4499 21.9903C62.9028 22.3856 63.4801 22.5524 64.1769 22.5845C68.5443 22.7796 68.4954 20.2821 68.5353 19.7629V16.8886C68.5353 15.9666 68.2094 15.3398 67.5563 15.0064V15.0064Z",
        fill: quaternary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M59.2065 18.557C59.2065 17.7995 59.059 17.2174 58.7627 16.8087C58.4676 16.4023 58.0445 16.1965 57.4932 16.1965C56.9622 16.1965 56.5484 16.4023 56.2518 16.8087C55.9773 17.1783 55.84 17.7625 55.84 18.557C55.84 19.2975 55.9873 19.8485 56.2829 20.2181C56.5774 20.6268 57.0013 20.8304 57.5523 20.8304C58.0636 20.8304 58.4676 20.6268 58.7627 20.2181C59.059 19.8102 59.2065 19.2584 59.2065 18.557V18.557ZM55.84 23.992C55.84 24.264 55.7413 24.4974 55.5434 24.6912C55.3476 24.8857 55.1111 24.9829 54.8351 24.9829H53.8322V18.0028C53.8322 16.6455 54.2894 15.7953 55.0425 15.2208C55.5398 14.8409 56.2813 14.4785 57.6703 14.4785C58.6082 14.4785 59.7065 14.8425 60.2999 15.5657C60.9656 16.3792 61.2432 17.2857 61.2432 18.4696C61.2432 19.6943 60.9479 20.6823 60.3578 21.4418C59.7674 22.1808 59.0086 22.5486 58.0836 22.5486C57.5917 22.5486 57.1588 22.4609 56.7849 22.2875C56.3898 22.0926 56.0765 21.7919 55.84 21.3835V23.992Z",
        fill: quaternary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M94.8863 9.12035C94.5735 9.53519 94.1268 9.74261 93.5424 9.74261C92.9592 9.74261 92.5099 9.53519 92.195 9.12035C91.8799 8.70602 91.7226 8.11589 91.7226 7.35124C91.7226 6.58762 91.8799 5.99903 92.195 5.58677C92.5099 5.17424 92.9592 4.96811 93.5424 4.96811C94.1268 4.96811 94.5735 5.17424 94.8863 5.58677C95.1986 5.99903 95.3552 6.58762 95.3552 7.35124C95.3552 8.11589 95.1986 8.70602 94.8863 9.12035M96.4822 4.49158C95.8381 3.68452 94.8606 3.28125 93.5485 3.28125C92.2382 3.28125 91.2605 3.68452 90.6169 4.49158C89.9723 5.29813 89.65 6.25143 89.65 7.35124C89.65 8.47085 89.9723 9.42749 90.6169 10.224C91.2605 11.0177 92.2382 11.4161 93.5485 11.4161C94.8606 11.4161 95.8381 11.0177 96.4822 10.224C97.1268 9.42749 97.4481 8.47085 97.4481 7.35124C97.4481 6.25143 97.1268 5.29813 96.4822 4.49158",
        fill: secondary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M86.643 9.13648C86.3497 9.55698 85.9192 9.76671 85.3553 9.76671C84.7895 9.76671 84.3688 9.55492 84.0917 9.13288C83.8147 8.71008 83.6761 8.0945 83.6761 7.39025C83.6761 6.73664 83.8116 6.18943 84.0848 5.74838C84.3572 5.30784 84.7849 5.08654 85.3689 5.08654C85.7519 5.08654 86.0873 5.20811 86.3775 5.45048C86.8488 5.85221 87.0843 6.5724 87.0843 7.50514C87.0843 8.17264 86.9373 8.71625 86.643 9.13648V9.13648ZM89.0526 0.930439C89.0526 0.930439 87.029 0.714281 87.029 2.33971L87.0275 4.49152C86.8036 4.13195 86.5124 3.85076 86.1531 3.64822C85.7945 3.44543 85.384 3.34313 84.9206 3.34313C83.9172 3.34313 83.1173 3.71711 82.5169 4.46325C81.9165 5.21068 81.6179 6.2871 81.6179 7.58893C81.6179 8.7183 81.9222 9.64462 82.5311 10.3656C83.14 11.0858 84.3344 11.4019 85.3951 11.4019C89.0937 11.4019 89.051 8.23021 89.051 8.23021L89.0526 0.930439Z",
        fill: secondary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M79.009 8.17819C78.9954 8.84748 78.8037 9.30859 78.4354 9.5615C78.0668 9.81441 77.6643 9.94113 77.2278 9.94113C76.9513 9.94113 76.7174 9.86453 76.5246 9.71263C76.3324 9.56047 76.2365 9.31321 76.2365 8.97137C76.2365 8.58789 76.3935 8.3049 76.7084 8.1219C76.896 8.01472 77.2019 7.92245 77.6291 7.8492L78.0853 7.76464C78.3122 7.72146 78.4909 7.67545 78.6214 7.6261C78.7535 7.57804 78.881 7.51455 79.009 7.43385V8.17819ZM80.0235 3.81673C79.3704 3.48543 78.623 3.31836 77.7817 3.31836C76.4889 3.31836 75.5765 3.65609 75.0452 4.32924C74.7108 4.76078 74.5237 5.31056 74.48 5.97986H76.4118C76.4593 5.68453 76.5542 5.45064 76.6968 5.27766C76.896 5.04377 77.2345 4.92682 77.7134 4.92682C78.1416 4.92682 78.4649 4.98542 78.6862 5.10623C78.9062 5.22523 79.017 5.4419 79.017 5.75496C79.017 6.01301 78.8741 6.20192 78.5855 6.32427C78.4248 6.39469 78.1585 6.45304 77.7851 6.49982L77.1004 6.58412C76.3223 6.68205 75.732 6.84654 75.3318 7.07632C74.6005 7.49785 74.235 8.17819 74.235 9.11942C74.235 9.84423 74.4615 10.4056 74.9167 10.8011C75.3701 11.1967 75.9473 11.3627 76.6441 11.3951C81.0125 11.5899 80.9635 9.09294 81.0035 8.5735V5.69893C81.0035 4.77749 80.6761 4.14932 80.0235 3.81673V3.81673Z",
        fill: secondary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M70.0624 5.03086C70.5618 5.03086 70.9283 5.18508 71.1653 5.49325C71.3279 5.72149 71.4292 5.97877 71.4691 6.26381H73.6234C73.5055 5.1766 73.1251 4.4176 72.483 3.9876C71.8384 3.55939 71.0131 3.34375 70.004 3.34375C68.8173 3.34375 67.8851 3.70847 67.2119 4.43611C66.5367 5.16477 66.1995 6.18285 66.1995 7.49188C66.1995 8.65106 66.5046 9.59589 67.115 10.324C67.726 11.0517 68.6788 11.4161 69.9729 11.4161C71.2691 11.4161 72.2476 10.9797 72.9066 10.1066C73.3204 9.56582 73.5522 8.99136 73.6011 8.38427H71.4534C71.4097 8.78549 71.2843 9.11294 71.0763 9.36482C70.8692 9.61594 70.5201 9.74265 70.0261 9.74265C69.3303 9.74265 68.8572 9.42574 68.6055 8.78986C68.468 8.45084 68.3981 8.00182 68.3981 7.44304C68.3981 6.85677 68.468 6.38693 68.6055 6.03198C68.8672 5.36525 69.353 5.03086 70.0624 5.03086",
        fill: secondary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M65.6216 3.34375C61.1954 3.34375 61.457 7.26313 61.457 7.26313V11.2442H63.4659V7.51013C63.4659 6.89841 63.5433 6.44527 63.6965 6.15072C63.972 5.6287 64.5102 5.36654 65.3139 5.36654C65.3741 5.36654 65.454 5.36988 65.552 5.37425C65.6496 5.37913 65.7607 5.38787 65.8887 5.40278V3.35891C65.7992 3.35275 65.7416 3.35018 65.7164 3.34786C65.691 3.34581 65.6591 3.34375 65.6216 3.34375",
        fill: secondary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M55.5429 5.42365C55.8257 5.13347 56.2223 4.98799 56.7342 4.98799C57.2051 4.98799 57.5991 5.12447 57.9178 5.39923C58.2353 5.67322 58.4129 6.07572 58.4486 6.60442H55.0119C55.0836 6.10759 55.2612 5.7146 55.5429 5.42365V5.42365ZM58.2432 9.16388C58.1589 9.28417 58.068 9.38723 57.9682 9.46743C57.6845 9.70132 57.2989 9.77226 56.845 9.77226C56.4158 9.77226 56.0801 9.70723 55.7758 9.51549C55.2749 9.20757 54.9926 8.68607 54.9626 7.92091H60.5207C60.5282 7.26215 60.5071 6.75761 60.4539 6.40651C60.3616 5.80893 60.1583 5.28203 59.8466 4.82889C59.4998 4.31484 59.059 3.93856 58.5273 3.69927C57.9957 3.46229 57.3979 3.34277 56.7342 3.34277C55.6146 3.34277 54.7061 3.69567 54.0054 4.40043C53.3045 5.10674 52.9526 6.11916 52.9526 7.44104C52.9526 8.85211 53.3413 9.87044 54.1182 10.496C54.8939 11.1219 55.791 11.4355 56.806 11.4355C58.0358 11.4355 58.9932 11.0643 59.6764 10.322C60.045 9.93136 60.2758 9.54479 60.3732 9.16388H58.2432Z",
        fill: secondary
      }), node("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M52.1464 11.2428H50.3115V6.62252C50.3115 6.20049 50.1719 5.19655 48.9616 5.19655C48.1551 5.19655 47.5711 5.77845 47.5711 6.62252V11.2428H45.7344V6.62252C45.7344 6.20049 45.609 5.19655 44.3994 5.19655C43.5785 5.19655 43.0079 5.77845 43.0079 6.62252V11.2428H41.1719V6.66647C41.1719 4.75883 42.4375 3.31641 44.3994 3.31641C45.3733 3.31641 46.1654 3.72559 46.6808 4.38075C47.2228 3.72559 48.0294 3.31641 48.9616 3.31641C50.9646 3.31641 52.1464 4.70049 52.1464 6.66647V11.2428Z",
        fill: secondary
      }));
    }
  }));
}