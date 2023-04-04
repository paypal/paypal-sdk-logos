/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { SatispayLogo, SatispayLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("satispay logo rendering happy cases", () => {
  it("should render the satispay logo", () => {
    const logo = <SatispayLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("SatispayLogoExternalImage rendering happy cases", () => {
  it("should render the satispay logo from CDN", () => {
    const logo = <SatispayLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
