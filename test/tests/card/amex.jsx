/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { AmexLogo, AmexLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("amex logo rendering happy cases", () => {
  it("should render the amex logo", () => {
    const logo = <AmexLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("AmexLogoExternalImage rendering happy cases", () => {
  it("should render the amex logo from CDN", () => {
    const logo = <AmexLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
