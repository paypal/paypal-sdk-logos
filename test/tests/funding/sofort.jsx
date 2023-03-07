/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { SofortLogo, LOGO_COLOR, SofortLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("sofort logo rendering happy cases", () => {
  it("should render the sofort logo", () => {
    const logo = <SofortLogo logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("SofortLogoExternalImage rendering happy cases", () => {
  it("should render the sofort logo from CDN", () => {
    const logo = <SofortLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
