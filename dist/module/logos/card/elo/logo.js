import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { node } from "@krakenjs/jsx-pragmatic/src";
import { CARD } from "@paypal/sdk-constants/src";
import { getLogoCDNUrl, SVGCardLogo } from "../../../lib";
export var getEloSVG = function getEloSVG() {
  return node("svg", {
    width: "40",
    height: "24",
    viewBox: "0 0 40 24",
    preserveAspectRatio: "xMinYMin meet",
    xmlns: "http://www.w3.org/2000/svg"
  }, node("path", {
    d: "M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z",
    fill: "rgb(21, 21, 21)"
  }), node("path", {
    class: "st0",
    d: "M 9.229 8.55 C 9.592 8.431 9.977 8.365 10.382 8.365 C 12.14 8.365 13.602 9.613 13.939 11.268 L 16.427 10.762 C 15.855 7.946 13.365 5.824 10.379 5.824 C 9.693 5.824 9.037 5.935 8.42 6.142 L 9.229 8.55 Z",
    fill: "rgb(255, 205, 5)"
  }), node("path", {
    class: "st1",
    d: "M 6.292 16.616 L 7.973 14.716 C 7.221 14.052 6.749 13.08 6.749 11.999 C 6.749 10.917 7.221 9.945 7.973 9.279 L 6.292 7.38 C 5.015 8.51 4.209 10.16 4.209 11.999 C 4.209 13.836 5.019 15.488 6.292 16.616",
    fill: "rgb(0, 164, 224)"
  }), node("path", {
    class: "st2",
    d: "M 13.939 12.723 C 13.602 14.379 12.136 15.626 10.382 15.626 C 9.977 15.626 9.592 15.562 9.229 15.442 L 8.422 17.849 C 9.039 18.055 9.698 18.167 10.382 18.167 C 13.365 18.167 15.855 16.05 16.427 13.235 L 13.939 12.723 Z",
    fill: "rgb(239, 66, 35)"
  }), node("path", {
    d: "M 18.603 14.794 C 18.521 14.663 18.412 14.453 18.343 14.296 C 17.948 13.381 17.932 12.434 18.264 11.526 C 18.631 10.527 19.33 9.765 20.233 9.378 C 21.366 8.889 22.626 8.986 23.713 9.632 C 24.406 10.028 24.897 10.641 25.269 11.506 C 25.319 11.615 25.358 11.737 25.398 11.835 L 18.603 14.794 Z M 20.87 10.845 C 20.066 11.194 19.65 11.949 19.734 12.834 L 23.151 11.363 C 22.565 10.675 21.802 10.444 20.87 10.845 Z M 23.578 14.044 C 23.578 14.044 23.578 14.044 23.578 14.044 L 23.508 13.998 C 23.302 14.331 22.985 14.595 22.584 14.768 C 21.82 15.1 21.113 15.014 20.602 14.569 L 20.559 14.643 C 20.559 14.643 20.559 14.643 20.559 14.643 L 19.688 15.936 C 19.905 16.088 20.134 16.213 20.376 16.315 C 21.333 16.712 22.311 16.693 23.279 16.273 C 23.978 15.971 24.527 15.509 24.9 14.924 L 23.578 14.044 Z",
    fill: "rgb(255, 255, 255)"
  }), node("path", {
    d: "M 27.77 7.466 L 27.77 14.673 L 28.891 15.13 L 28.254 16.614 L 27.018 16.1 C 26.742 15.979 26.552 15.797 26.409 15.588 C 26.272 15.377 26.171 15.085 26.171 14.698 L 26.171 7.466 L 27.77 7.466 Z",
    fill: "rgb(255, 255, 255)"
  }), node("g", {
    transform: "matrix(0.037801, 0, 0, 0.037801, 1.0913, 0.089785)"
  }, node("path", {
    d: "M782.7,337.2c0-16.2,7.2-30.8,18.5-40.7l-30.4-33.9c-20.6,18.2-33.6,44.9-33.6,74.6c0,29.7,12.9,56.4,33.6,74.7l30.4-34 C789.8,367.9,782.6,353.4,782.7,337.2z",
    fill: "rgb(255, 255, 255)"
  }), node("path", {
    d: "M836.7,391.4c-6,0-11.8-1-17.1-2.8L805,431.7c9.9,3.3,20.6,5.1,31.6,5.2c48.2,0,88.4-34.1,97.7-79.6l-44.7-9.1 C884.6,372.9,862.8,391.4,836.7,391.4z",
    fill: "rgb(255, 255, 255)"
  }), node("path", {
    d: "M836.8,237.6c-11,0-21.7,1.8-31.6,5.1l14.4,43.2c5.4-1.8,11.2-2.8,17.1-2.8c26.2,0,48,18.6,53,43.3l44.7-9.1 C925.2,272,885,237.7,836.8,237.6z",
    fill: "rgb(255, 255, 255)"
  })));
};
export function EloLogoExternalImage(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  var cdnUrl = getLogoCDNUrl(CARD.ELO);
  return node(SVGCardLogo, _extends({}, props, {
    name: CARD.ELO,
    cdnUrl: cdnUrl
  }));
}
export function EloLogoInlineSVG(_temp2) {
  var _ref2 = _temp2 === void 0 ? {} : _temp2,
    props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var svg = getEloSVG();
  return node(SVGCardLogo, _extends({}, props, {
    name: CARD.ELO,
    render: function render() {
      return svg;
    }
  }));
}
export var EloLogo = EloLogoInlineSVG;