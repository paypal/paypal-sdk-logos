/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { BlikLogo, BlikLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("blik logo rendering happy cases", () => {
  it("should render the payu logo", () => {
    const logo = <BlikLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("BlikLogoExternalImage rendering happy cases", () => {
  it("should render the blik logo from CDN", () => {
    const logo = <BlikLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
