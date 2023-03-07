/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { ZimplerLogo, ZimplerLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("zimpler logo rendering happy cases", () => {
  it("should render the zimpler logo", () => {
    const logo = <ZimplerLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("ZimplerLogoExternalImage rendering happy cases", () => {
  it("should render the zimpler logo from CDN", () => {
    const logo = <ZimplerLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
