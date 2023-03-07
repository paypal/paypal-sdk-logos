/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { HiperLogo, HiperLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("hiper logo rendering happy cases", () => {
  it("should render the hiper logo", () => {
    const logo = <HiperLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("HiperLogoExternalImage rendering happy cases", () => {
  it("should render the hiper logo from CDN", () => {
    const logo = <HiperLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
