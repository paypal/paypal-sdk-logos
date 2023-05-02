/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { MastercardLogo, MastercardLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("mastercard logo rendering happy cases", () => {
  it("should render the mastercard logo", () => {
    const logo = <MastercardLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("MastercardLogoExternalImage rendering happy cases", () => {
  it("should render the mastercard logo from CDN", () => {
    const logo = <MastercardLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
