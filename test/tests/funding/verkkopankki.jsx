/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { VerkkopankkiLogo, VerkkopankkiLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("payu logo rendering happy cases", () => {
  it("should render the payu logo", () => {
    const logo = <VerkkopankkiLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("VerkkopankkiLogoExternalImage rendering happy cases", () => {
  it("should render the verkkopankki logo from CDN", () => {
    const logo = <VerkkopankkiLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
