import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["logoColor"];

var _LOGO_COLORS;

/** @jsx node */
import { node } from 'jsx-pragmatic/src';
import { SVGLogo, getLogoColors } from '../../lib';
import { LOGO_COLOR, LOGO } from '../../constants';
var LOGO_COLORS = (_LOGO_COLORS = {}, _LOGO_COLORS[LOGO_COLOR.DEFAULT] = {
  primary: '#4D4D4F',
  secondary: '#000000',
  tertiary: '#FF0000',
  quaternary: '#E83E49',
  quinary: '#FF00FF',
  senary: '#FFFFFF'
}, _LOGO_COLORS[LOGO_COLOR.WHITE] = {
  primary: '#FFFFFF',
  secondary: '#FFFFFF',
  tertiary: '#000000',
  quaternary: '#000000',
  quinary: '#000000',
  senary: '#000000'
}, _LOGO_COLORS[LOGO_COLOR.BLACK] = {
  primary: '#4D4D4F',
  secondary: '#000000',
  tertiary: '#FF0000',
  quaternary: '#E83E49',
  quinary: '#FF00FF',
  senary: '#FFFFFF'
}, _LOGO_COLORS); // eslint-disable-next-line flowtype/require-exact-type

export function BlikLogo(_ref) {
  var _ref$logoColor = _ref.logoColor,
      logoColor = _ref$logoColor === void 0 ? LOGO_COLOR.DEFAULT : _ref$logoColor,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _getLogoColors = getLogoColors(LOGO.BLIK, LOGO_COLORS, logoColor),
      primary = _getLogoColors.primary,
      secondary = _getLogoColors.secondary,
      tertiary = _getLogoColors.tertiary,
      quaternary = _getLogoColors.quaternary,
      quinary = _getLogoColors.quinary,
      senary = _getLogoColors.senary;

  return node(SVGLogo, _extends({}, props, {
    name: LOGO.BLIK,
    render: function render() {
      return node("svg", {
        width: "58px",
        height: "30px",
        viewBox: "0 0 58 30",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, node("defs", null, node("path", {
        d: "M4.81760131,0 C2.15699346,0 0,2.12049689 0,4.73608696 L0,4.73608696 L0,25.263913 C0,27.8795031 2.15699346,30 4.81760131,30 L4.81760131,30 L53.1823987,30 C55.8430065,30 58,27.8795031 58,25.263913 L58,25.263913 L58,4.73608696 C58,2.12049689 55.8430065,0 53.1823987,0 L53.1823987,0 L4.81760131,0 Z",
        id: "path-1"
      }), node("linearGradient", {
        x1: "50%",
        y1: "100%",
        x2: "50%",
        y2: "0%",
        id: "linearGradient-3"
      }, node("stop", {
        "stop-color": primary,
        offset: "0%"
      }), node("stop", {
        "stop-color": secondary,
        offset: "100%"
      })), node("radialGradient", {
        cx: "20.3705659%",
        cy: "18.0870534%",
        fx: "20.3705659%",
        fy: "18.0870534%",
        r: "117.639519%",
        gradientTransform: "translate(0.203706,0.180871),scale(0.983106,1.000000),rotate(54.479781),translate(-0.203706,-0.180871)",
        id: "radialGradient-4"
      }, node("stop", {
        "stop-color": tertiary,
        offset: "0%"
      }), node("stop", {
        "stop-color": quaternary,
        offset: "55.9042441%"
      }), node("stop", {
        "stop-color": quinary,
        offset: "100%"
      })), node("path", {
        d: "M3.67238562,6.95664596 C5.60913072,6.95664596 7.17892157,5.41322981 7.17892157,3.50925466 C7.17892157,1.60546584 5.60913072,0.0620496894 3.67238562,0.0620496894 C1.73564052,0.0620496894 0.165849673,1.60546584 0.165849673,3.50925466 C0.165849673,5.41322981 1.73564052,6.95664596 3.67238562,6.95664596 Z",
        id: "path-5"
      })), node("g", {
        stroke: "none",
        "stroke-width": "1",
        fill: "none",
        "fill-rule": "evenodd"
      }, node("g", {
        transform: "translate(-100.000000, -159.000000)"
      }, node("g", {
        transform: "translate(100.000000, 159.000000)"
      }, node("g", null, node("mask", {
        id: "mask-2",
        fill: "white"
      }, node("use", {
        href: "#path-1"
      })), node("g", {
        id: "Clip-2"
      }), node("path", {
        d: "M4.81760131,0 C2.15699346,0 0,2.12049689 0,4.73608696 L0,4.73608696 L0,25.263913 C0,27.8795031 2.15699346,30 4.81760131,30 L4.81760131,30 L53.1823987,30 C55.8430065,30 58,27.8795031 58,25.263913 L58,25.263913 L58,4.73608696 C58,2.12049689 55.8430065,0 53.1823987,0 L53.1823987,0 L4.81760131,0 Z",
        fill: "url(#linearGradient-3)",
        mask: "url(#mask-2)"
      })), node("g", {
        transform: "translate(6.254902, 4.472050)",
        fill: senary
      }, node("polygon", {
        points: "17.627451 21.6769565 21.5604575 21.6769565 21.5604575 0.0154658385 17.627451 0.0154658385"
      }), node("polygon", {
        points: "24.9248366 21.6769565 28.8578431 21.6769565 28.8578431 7.32913043 24.9248366 7.32913043"
      }), node("polygon", {
        points: "46.4852941 21.6770124 40.5751699 14.0838447 46.0114379 7.32918634 41.3676471 7.32918634 36.1552288 13.8822298 36.1552288 0.0155217391 32.2222222 0.0155217391 32.2222222 21.6770124 36.1552288 21.6770124 36.1552288 14.3106149 41.3676471 21.6770124"
      }), node("path", {
        d: "M7.60539216,17.9735963 C5.65575817,17.9735963 4.0751634,16.4197453 4.0751634,14.5030994 C4.0751634,12.5864534 5.65575817,11.0326025 7.60539216,11.0326025 C9.55502614,11.0326025 11.1356209,12.5864534 11.1356209,14.5030994 C11.1356209,16.4197453 9.55502614,17.9735963 7.60539216,17.9735963 M7.60539216,7.16614286 C6.3282549,7.16614286 5.12636601,7.4821677 4.0751634,8.03800621 L4.0751634,0.0155217391 L0.142156863,0.0155217391 L0.142156863,14.5030994 C0.142156863,18.5551491 3.48360131,21.8400559 7.60539216,21.8400559 C11.727183,21.8400559 15.0686275,18.5551491 15.0686275,14.5030994 C15.0686275,10.4510497 11.727183,7.16614286 7.60539216,7.16614286"
      })), node("g", {
        transform: "translate(14.026144, 3.354037)"
      }, node("mask", {
        id: "mask-6",
        fill: "white"
      }, node("use", {
        href: "#path-5"
      })), node("use", {
        fill: "url(#radialGradient-4)",
        href: "#path-5"
      }), node("path", {
        d: "M3.67238562,6.95664596 C5.60913072,6.95664596 7.17892157,5.41322981 7.17892157,3.50925466 C7.17892157,1.60546584 5.60913072,0.0620496894 3.67238562,0.0620496894 C1.73564052,0.0620496894 0.165849673,1.60546584 0.165849673,3.50925466 C0.165849673,5.41322981 1.73564052,6.95664596 3.67238562,6.95664596 Z",
        mask: "url(#mask-6)"
      }))))));
    }
  }));
}