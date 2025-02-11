/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import {
  PayPalRebrandLogo,
  LOGO_COLOR,
  PayPalRebrandLogoExternalImage,
  PayPalRebrandLogoInlineSVG,
} from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("paypal logo rendering happy cases", () => {
  it("should render the paypal logo in blue", () => {
    const logo = <PayPalRebrandLogo logoColor={LOGO_COLOR.BLUE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render the paypal logo in black", () => {
    const logo = <PayPalRebrandLogo logoColor={LOGO_COLOR.BLACK} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render paypal rebrand logo external image", () => {
    const logo = <PayPalRebrandLogoExternalImage />;

    const logoRebrandHTML = logo.render(html());

    validateExternalSVG(logoRebrandHTML);
  });

  it("should render paypal rebrand logo in line SVG", () => {
    const logo = <PayPalRebrandLogoInlineSVG />;

    const logoRebrandHTML = logo.render(html());

    validateSVG(logoRebrandHTML);
  });
});
