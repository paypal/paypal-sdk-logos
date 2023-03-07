/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { ItauLogo, ItauLogoExternalImage, LOGO_COLOR } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("itau logo rendering happy cases", () => {
  it("should render the itau logo", () => {
    const logo = <ItauLogo logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("ItauLogoExternalImage rendering happy cases", () => {
  it("should render the itau logo from CDN", () => {
    const logo = <ItauLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
