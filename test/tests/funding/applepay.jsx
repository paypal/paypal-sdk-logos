/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import {
  ApplePayLogo,
  ApplePayLogoExternalImage,
  ApplePayMark,
  ApplePayMarkExternalImage,
  LOGO_COLOR,
} from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("Apple Pay logo rendering happy cases", () => {
  it("should render the Apple Pay logo", () => {
    const logo = <ApplePayLogo logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
  it("should render the Apple Pay mark", () => {
    const mark = <ApplePayMark />;

    const markHTML = mark.render(html());

    validateSVG(markHTML);
  });
});

describe("ApplePayLogoExternalImage rendering happy cases", () => {
  it("should render the applepay logo from CDN", () => {
    const logo = <ApplePayLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});

describe("ApplePayMarkExternalImage rendering happy cases", () => {
  it("should render the applepay mark from CDN", () => {
    const mark = <ApplePayMarkExternalImage />;

    const markHTML = mark.render(html());

    validateExternalSVG(markHTML);
  });
});
