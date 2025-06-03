/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { CUPLogo, CUPLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("cup logo rendering happy cases", () => {
  it("should render the cup logo", () => {
    const logo = <CUPLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("CUPLogoExternalImage rendering happy cases", () => {
  it("should render the cup logo from CDN", () => {
    const logo = <CUPLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
