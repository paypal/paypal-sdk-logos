/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { OxxoLogo, OxxoLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("oxxo logo rendering happy cases", () => {
  it("should render the oxxo logo", () => {
    const logo = <OxxoLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("OxxoLogoExternalImage rendering happy cases", () => {
  it("should render the oxxo logo from CDN", () => {
    const logo = <OxxoLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
