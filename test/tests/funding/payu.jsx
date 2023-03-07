/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { PayuLogo, PayuLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("payu logo rendering happy cases", () => {
  it("should render the payu logo", () => {
    const logo = <PayuLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("PayuLogoExternalImage rendering happy cases", () => {
  it("should render the payu logo from CDN", () => {
    const logo = <PayuLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
