import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

/** @jsx node */
import { svgToBase64 } from 'belter/src';
import { node, html, ElementNode } from 'jsx-pragmatic/src';
import { LOGO_CLASS, LOGO_COLOR } from '../constants';
export function SVG(props) {
  var svg = props.svg,
      otherProps = _objectWithoutPropertiesLoose(props, ["svg"]);

  if (!svg) {
    throw new TypeError("Expected svg prop");
  }

  if (svg instanceof ElementNode) {
    svg = svg.render(html());
  }

  if (typeof svg !== 'string') {
    throw new TypeError("Expected svg prop to be a string or jsx node");
  }

  return node("img", _extends({
    src: svgToBase64(svg)
  }, otherProps));
}
export function SVGLogo(_ref) {
  var render = _ref.render,
      name = _ref.name,
      logoColor = _ref.logoColor;
  return node(SVG, {
    svg: render(),
    alt: name,
    class: LOGO_CLASS.LOGO + " " + LOGO_CLASS.LOGO + "-" + name + " " + (logoColor ? LOGO_CLASS.LOGO_COLOR + "-" + logoColor : '')
  });
}
export function SVGCardLogo(_ref2) {
  var render = _ref2.render,
      name = _ref2.name;
  return node(SVG, {
    svg: render(),
    alt: name,
    class: LOGO_CLASS.CARD + " " + LOGO_CLASS.CARD + "-" + name
  });
}