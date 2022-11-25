import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
/** @jsx node */

import { node } from "@krakenjs/jsx-pragmatic/src";
import { SVGLogo } from "../../lib";
import { LOGO } from "../../constants";
export function PayPalMark(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.PP,
    render: function render() {
      return node("svg", {
        width: "40px",
        height: "25px",
        viewBox: "0 0 40 25",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, node("title", null, "Group 53"), node("defs", null, node("radialGradient", {
        cx: "21.8145957%",
        cy: "17.9147256%",
        fx: "21.8145957%",
        fy: "17.9147256%",
        r: "154.485751%",
        gradientTransform: "translate(0.218146,0.179147),scale(0.625000,1.000000),rotate(49.902048),scale(1.000000,1.092475),translate(-0.218146,-0.179147)",
        id: "radialGradient-1"
      }, node("stop", {
        "stop-color": "#FFFFFF",
        offset: "0%"
      }), node("stop", {
        "stop-color": "#EFF0F4",
        offset: "100%"
      }))), node("g", {
        id: "Page-1",
        stroke: "none",
        "stroke-width": "1",
        fill: "none",
        "fill-rule": "evenodd"
      }, node("g", {
        id: "Group-53",
        transform: "translate(0.410281, 0.000000)"
      }, node("rect", {
        id: "Rectangle",
        stroke: "#EAECED",
        fill: "url(#radialGradient-1)",
        x: "0.5",
        y: "0.5",
        width: "38",
        height: "23.375",
        rx: "2"
      }), node("g", {
        id: "Group",
        transform: "translate(10.968750, 4.875000)"
      }, node("g", {
        id: "paypal-mark-color",
        transform: "translate(1.650391, 0.660156)"
      }, node("path", {
        d: "M11.1896484,3.696875 C11.3876953,2.57460938 11.1896484,1.78242188 10.5625,1.08925781 C9.93535156,0.330078125 8.7140625,0 7.1296875,0 L2.67363281,0 C2.34355469,0 2.07949219,0.231054687 2.01347656,0.561132813 L0.13203125,12.4769531 C0.0990234375,12.7080078 0.2640625,12.9060547 0.495117187,12.9060547 L3.26777344,12.9060547 L3.06972656,14.1273438 C3.03671875,14.3583984 3.20175781,14.5234375 3.39980469,14.5234375 L5.74335937,14.5234375 C6.04042969,14.5234375 6.27148437,14.2923828 6.30449219,14.0613281 L6.3375,13.9623047 L6.76660156,11.1896484 L6.79960938,11.0576172 C6.83261719,10.7935547 7.09667969,10.5955078 7.36074219,10.5955078 L7.72382813,10.5955078 C10.0013672,10.5955078 11.7837891,9.67128906 12.3119141,6.99765625 C12.5429687,5.90839844 12.4109375,4.95117188 11.8498047,4.29101563 C11.6847656,3.99394531 11.4537109,3.82890625 11.1896484,3.696875",
        id: "Fill-8",
        fill: "#009CDE"
      }), node("path", {
        d: "M11.1896484,3.696875 C11.3876953,2.57460937 11.1896484,1.78242188 10.5625,1.08925781 C9.93535156,0.330078125 8.7140625,0 7.1296875,0 L2.67363281,0 C2.34355469,0 2.07949219,0.231054688 2.01347656,0.561132813 L0.13203125,12.4769531 C0.0990234375,12.7080078 0.2640625,12.9060547 0.495117187,12.9060547 L3.26777344,12.9060547 L3.9609375,8.48300781 L3.92792969,8.61503906 C3.99394531,8.28496094 4.29101562,8.05390625 4.58808594,8.05390625 L5.90839844,8.05390625 C8.51601562,8.05390625 10.5294922,6.99765625 11.1566406,3.9609375 C11.1566406,3.86191406 11.1896484,3.76289063 11.1896484,3.696875",
        id: "Fill-9",
        fill: "#012169"
      }), node("path", {
        d: "M4.753125,3.696875 C4.78613281,3.49882813 4.88515625,3.36679688 5.08320312,3.26777344 C5.14921875,3.23476563 5.21523438,3.20175781 5.34726562,3.20175781 L8.87910156,3.20175781 C9.27519531,3.23476563 9.67128906,3.26777344 10.0673828,3.30078125 C10.1664062,3.30078125 10.2654297,3.33378906 10.3644531,3.36679688 C10.4634766,3.39980469 10.5625,3.39980469 10.6615234,3.4328125 C10.6945312,3.4328125 10.7275391,3.46582031 10.7935547,3.46582031 C10.9916016,3.53183594 11.1236328,3.56484375 11.2556641,3.696875 C11.4537109,2.57460937 11.2556641,1.78242187 10.6285156,1.08925781 C9.96835937,0.330078125 8.74707031,0 7.16269531,0 L2.67363281,0 C2.34355469,0 2.07949219,0.231054688 2.01347656,0.561132813 L0.13203125,12.4769531 C0.0990234375,12.7080078 0.2640625,12.9060547 0.495117187,12.9060547 L3.26777344,12.9060547 L4.753125,3.696875",
        id: "Fill-10",
        fill: "#003087"
      }))))));
    }
  }));
}