/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import {
  PayPalRebrandLogo,
  LOGO_COLOR,
  PayPalRebrandLogoExternalImage,
  PayPalRebrandLogoInlineSVG,
  PPRebrandLogo,
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

describe("PP monogram logo rendering happy cases", () => {
  it("should render the pp monogram logo in white", () => {
    const logo = <PPRebrandLogo logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render the pp monogram logo in blue", () => {
    const logo = <PPRebrandLogo logoColor={LOGO_COLOR.BLUE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render the paypal monogram logo in black", () => {
    const logo = <PPRebrandLogo logoColor={LOGO_COLOR.BLACK} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});
