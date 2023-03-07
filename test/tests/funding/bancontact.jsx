/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import {
  BancontactLogo,
  BancontactLogoExternalImage,
  LOGO_COLOR,
} from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("bancontact logo rendering happy cases", () => {
  it("should render the bancontact logo", () => {
    const logo = <BancontactLogo logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("BancontactLogoExternalImage rendering happy cases", () => {
  it("should render the bancontact logo from CDN", () => {
    const logo = <BancontactLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
