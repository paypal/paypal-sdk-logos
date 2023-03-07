/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";
import { COUNTRY, LANG } from "@paypal/sdk-constants/src";

import {
  CreditLogo,
  CreditLogoExternalImage,
  CreditMarkExternalImage,
  LOGO_COLOR,
} from "../../../src";
import { validateSVG, getLocale, validateExternalSVG } from "../common";

describe("credit logo rendering happy cases", () => {
  it("should render the credit logo", () => {
    const logo = (
      <CreditLogo logoColor={LOGO_COLOR.WHITE} locale={getLocale()} />
    );

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render the credit logo differently for en_US vs de_DE", () => {
    const usLogoHTML = (
      <CreditLogo
        logoColor={LOGO_COLOR.WHITE}
        locale={getLocale(COUNTRY.US, LANG.EN)}
      />
    ).render(html());

    const deLogoHTML = (
      <CreditLogo
        logoColor={LOGO_COLOR.WHITE}
        locale={getLocale(COUNTRY.DE, LANG.DE)}
      />
    ).render(html());

    validateSVG(usLogoHTML);
    validateSVG(deLogoHTML);

    if (usLogoHTML === deLogoHTML) {
      throw new Error(
        `Expected credit logo to be different for US and DE locales`
      );
    }
  });
});

describe("CreditLogoExternalImage rendering happy cases", () => {
  it("should render the credit logo from CDN", () => {
    const logo = (
      <CreditLogoExternalImage locale={getLocale(COUNTRY.US, LANG.EN)} />
    );

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});

describe("CreditMarkExternalImage rendering happy cases", () => {
  it("should render the credit mark from CDN", () => {
    const mark = <CreditMarkExternalImage />;

    const markHTML = mark.render(html());

    validateExternalSVG(markHTML);
  });
});

describe("credit logo rendering error cases", () => {
  it("should error while rendering the credit logo with no locale passed", () => {
    let error;

    try {
      // $FlowFixMe
      (<CreditLogo logoColor={LOGO_COLOR.WHITE} />).render(html());
    } catch (err) {
      error = err;
    }

    if (!error) {
      throw new Error(`Expected error to be thrown`);
    }
  });
});
