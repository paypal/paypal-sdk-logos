/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import {
  CreditMarkRebrand,
  CreditMarkRebrandExternalImage,
  CreditMarkRebrandInlineSVG,
  CreditRebrandBadge,
  CreditRebrandBadgeExternalImage,
  CreditRebrandBadgeInlineSVG,
  CreditRebrandPPBadge,
  CreditRebrandPPBadgeExternalImage,
  CreditRebrandPPBadgeInlineSVG,
  PayPalCreditRebrandLogo,
  PayPalCreditRebrandLogoExternalImage,
  PayPalCreditRebrandLogoInlineSVG,
  LOGO_COLOR,
} from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("credit mark rebrand rendering happy cases", () => {
  it("should render the credit mark rebrand", () => {
    const logo = <CreditMarkRebrand />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render credit mark rebrand external image", () => {
    const logo = <CreditMarkRebrandExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });

  it("should render credit mark rebrand inline SVG", () => {
    const logo = <CreditMarkRebrandInlineSVG />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("credit rebrand badge rendering happy cases", () => {
  it("should render the credit rebrand badge in black", () => {
    const logo = <CreditRebrandBadge logoColor={LOGO_COLOR.BLACK} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render the credit rebrand badge in blue", () => {
    const logo = <CreditRebrandBadge logoColor={LOGO_COLOR.BLUE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render the credit rebrand badge in white", () => {
    const logo = <CreditRebrandBadge logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render credit rebrand badge external image", () => {
    const logo = <CreditRebrandBadgeExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });

  it("should render credit rebrand badge inline SVG", () => {
    const logo = <CreditRebrandBadgeInlineSVG />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("credit rebrand PP badge rendering happy cases", () => {
  it("should render the credit rebrand PP badge in black", () => {
    const logo = <CreditRebrandPPBadge logoColor={LOGO_COLOR.BLACK} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render the credit rebrand PP badge in blue", () => {
    const logo = <CreditRebrandPPBadge logoColor={LOGO_COLOR.BLUE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render the credit rebrand PP badge in white", () => {
    const logo = <CreditRebrandPPBadge logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render credit rebrand PP badge external image", () => {
    const logo = <CreditRebrandPPBadgeExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });

  it("should render credit rebrand PP badge inline SVG", () => {
    const logo = <CreditRebrandPPBadgeInlineSVG />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("PayPal Credit rebrand logo rendering happy cases", () => {
  it("should render the PayPal Credit rebrand logo in black", () => {
    const logo = <PayPalCreditRebrandLogo logoColor={LOGO_COLOR.BLACK} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render the PayPal Credit rebrand logo in white", () => {
    const logo = <PayPalCreditRebrandLogo logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render PayPal Credit rebrand logo external image", () => {
    const logo = <PayPalCreditRebrandLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });

  it("should render PayPal Credit rebrand logo inline SVG", () => {
    const logo = <PayPalCreditRebrandLogoInlineSVG />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});
