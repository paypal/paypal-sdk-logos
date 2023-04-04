/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { EloLogo, EloLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("elo logo rendering happy cases", () => {
  it("should render the elo logo", () => {
    const logo = <EloLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("EloLogoExternalImage rendering happy cases", () => {
  it("should render the elo logo from CDN", () => {
    const logo = <EloLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
