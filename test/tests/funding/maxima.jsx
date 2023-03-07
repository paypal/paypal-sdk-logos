/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { MaximaLogo, MaximaLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("maxima logo rendering happy cases", () => {
  it("should render the maxima logo", () => {
    const logo = <MaximaLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("MaximaLogoExternalImage rendering happy cases", () => {
  it("should render the maxima logo from CDN", () => {
    const logo = <MaximaLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
