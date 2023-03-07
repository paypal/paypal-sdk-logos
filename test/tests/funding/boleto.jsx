/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { BoletoLogo, BoletoLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("boleto logo rendering happy cases", () => {
  it("should render the boleto logo", () => {
    const logo = <BoletoLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("BoletoLogoExternalImage rendering happy cases", () => {
  it("should render the boleto logo from CDN", () => {
    const logo = <BoletoLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
