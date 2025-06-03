/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { CBNationaleLogo, CBNationaleLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("cb_nationale logo rendering happy cases", () => {
  it("should render the cb_nationale logo", () => {
    const logo = <CBNationaleLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("CBNationaleLogoExternalImage rendering happy cases", () => {
  it("should render the cb_nationale logo from CDN", () => {
    const logo = <CBNationaleLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
