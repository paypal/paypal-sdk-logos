/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { DinersLogo, DinersLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("diners logo rendering happy cases", () => {
  it("should render the diners logo", () => {
    const logo = <DinersLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("DinersLogoExternalImage rendering happy cases", () => {
  it("should render the diners logo from CDN", () => {
    const logo = <DinersLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
