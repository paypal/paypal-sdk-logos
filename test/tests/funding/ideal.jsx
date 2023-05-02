/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { IdealLogo, IdealLogoExternalImage, LOGO_COLOR } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("ideal logo rendering happy cases", () => {
  it("should render the ideal logo", () => {
    const logo = <IdealLogo logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("IdealLogoExternalImage rendering happy cases", () => {
  it("should render the ideal logo from CDN", () => {
    const logo = <IdealLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
