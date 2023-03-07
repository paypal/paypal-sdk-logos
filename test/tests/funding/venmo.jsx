/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { VenmoLogo, LOGO_COLOR, VenmoLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("venmo logo rendering happy cases", () => {
  it("should render the venmo logo", () => {
    const logo = <VenmoLogo logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("VenmoLogoExternalImage rendering happy cases", () => {
  it("should render the venmo logo from CDN", () => {
    const logo = <VenmoLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
