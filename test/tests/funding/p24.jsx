/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { P24Logo, P24LogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("p24 logo rendering happy cases", () => {
  it("should render the p24 logo", () => {
    const logo = <P24Logo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("P24LogoExternalImage rendering happy cases", () => {
  it("should render the p24 logo from CDN", () => {
    const logo = <P24LogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
