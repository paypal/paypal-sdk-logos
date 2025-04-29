/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import {
  VenmoRebrandLogo,
  LOGO_COLOR,
  VenmoRebrandLogoExternalImage,
} from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("venmo logo rendering happy cases", () => {
  it("should render the venmo logo", () => {
    const logo = <VenmoRebrandLogo logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("VenmoLogoExternalImage rendering happy cases", () => {
  it("should render the venmo logo from CDN", () => {
    const logo = <VenmoRebrandLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
