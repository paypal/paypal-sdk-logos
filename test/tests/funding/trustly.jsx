/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { TrustlyLogo, TrustlyLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("blik logo rendering happy cases", () => {
  it("should render the payu logo", () => {
    const logo = <TrustlyLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("TrustlyLogoExternalImage rendering happy cases", () => {
  it("should render the trustly logo from CDN", () => {
    const logo = <TrustlyLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
