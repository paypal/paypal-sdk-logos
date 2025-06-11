import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { node } from "@krakenjs/jsx-pragmatic/src";
import { CARD } from "@paypal/sdk-constants/src";
import { getLogoCDNUrl, SVGCardLogo } from "../../../lib";
export var getDinersSVG = function getDinersSVG() {
  return node("svg", {
    width: "48",
    height: "31",
    viewBox: "0 0 48 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, node("mask", {
    id: "mask0_11874_358219",
    style: "mask-type:alpha",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "48",
    height: "31"
  }, node("rect", {
    width: "48",
    height: "30.2274",
    rx: "2",
    fill: "#0C0C0D"
  })), node("g", {
    mask: "url(#mask0_11874_358219)"
  }, node("mask", {
    id: "mask1_11874_358219",
    style: "mask-type:alpha",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "48",
    height: "31"
  }, node("rect", {
    width: "48",
    height: "30.2274",
    rx: "4",
    fill: "#0C0C0D"
  })), node("g", {
    mask: "url(#mask1_11874_358219)"
  }, node("rect", {
    width: "48",
    height: "30.2274",
    fill: "white"
  }), node("rect", {
    width: "48",
    height: "30.2274",
    fill: "url(#paint0_linear_11874_358219)"
  }), node("rect", {
    width: "48",
    height: "30.2274",
    fill: "url(#paint1_radial_11874_358219)"
  }), node("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M26.06 25.2513C31.2567 25.2764 36 20.9703 36 15.7317C36 10.0032 31.2567 6.04358 26.06 6.04548H21.5875C16.3287 6.04358 12 10.0045 12 15.7317C12 20.9714 16.3287 25.2764 21.5875 25.2513H26.06Z",
    fill: "#0B69AA"
  }), node("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M23.6667 21.0389V10.6366C25.7363 11.4387 27.2058 13.4633 27.2095 15.8375C27.2058 18.2123 25.7363 20.2353 23.6667 21.0389ZM16.1779 15.8375C16.1823 13.4645 17.6495 11.4411 19.7184 10.637V21.0366C17.6495 20.233 16.1821 18.2106 16.1779 15.8375ZM21.6929 7.04553C16.8875 7.0468 12.9932 10.9814 12.9922 15.8375C12.9932 20.6924 16.8875 24.6268 21.6929 24.6281C26.4995 24.6268 30.3944 20.6924 30.395 15.8375C30.3944 10.9814 26.4995 7.0468 21.6929 7.04553Z",
    fill: "#FFFFFE"
  }))), node("defs", null, node("linearGradient", {
    id: "paint0_linear_11874_358219",
    x1: "-1.00191e-07",
    y1: "0.699709",
    x2: "47.3003",
    y2: "30.2274",
    gradientUnits: "userSpaceOnUse"
  }, node("stop", {
    offset: "0.273366",
    "stop-color": "white"
  }), node("stop", {
    offset: "0.777565",
    "stop-color": "#F0F0F0"
  }), node("stop", {
    offset: "1",
    "stop-color": "#DFDFDF"
  })), node("radialGradient", {
    id: "paint1_radial_11874_358219",
    cx: "0",
    cy: "0",
    r: "1",
    gradientUnits: "userSpaceOnUse",
    gradientTransform: "translate(23 14.1061) rotate(87.0864) scale(19.6732 31.2398)"
  }, node("stop", {
    "stop-color": "white"
  }), node("stop", {
    offset: "1",
    "stop-color": "#E9E9E9"
  }))));
};
export function DinersLogoExternalImage(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  var cdnUrl = getLogoCDNUrl(CARD.DINERS);
  return node(SVGCardLogo, _extends({}, props, {
    name: CARD.DINERS,
    cdnUrl: cdnUrl
  }));
}
export function DinersLogoInlineSVG(_temp2) {
  var _ref2 = _temp2 === void 0 ? {} : _temp2,
    props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var svg = getDinersSVG();
  return node(SVGCardLogo, _extends({}, props, {
    name: CARD.DINERS,
    render: function render() {
      return svg;
    }
  }));
}
export var DinersLogo = DinersLogoInlineSVG;