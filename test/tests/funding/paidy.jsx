/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { PaidyLogo, LOGO_COLOR, PaidyLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("paidy logo rendering happy cases", () => {
  it("should render the paidy logo", () => {
    const logo = <PaidyLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render the paidy white logo", () => {
    const logo = <PaidyLogo logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("PaidyLogoExternalImage rendering happy cases", () => {
  it("should render the paidy logo from CDN", () => {
    const logo = <PaidyLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
