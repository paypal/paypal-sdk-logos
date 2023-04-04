/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { VisaLogo, VisaLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("visa logo rendering happy cases", () => {
  it("should render the visa logo", () => {
    const logo = <VisaLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("VisaLogoExternalImage rendering happy cases", () => {
  it("should render the visa logo from CDN", () => {
    const logo = <VisaLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
