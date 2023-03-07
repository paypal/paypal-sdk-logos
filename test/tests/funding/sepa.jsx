/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { SepaLogo, LOGO_COLOR, SepaLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("sepa logo rendering happy cases", () => {
  it("should render the sepa logo", () => {
    const logo = <SepaLogo logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("SepaLogoExternalImage rendering happy cases", () => {
  it("should render the sepa logo from CDN", () => {
    const logo = <SepaLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
