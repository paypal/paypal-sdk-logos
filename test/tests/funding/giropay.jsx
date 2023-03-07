/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import {
  GiropayLogo,
  GiropayLogoExternalImage,
  LOGO_COLOR,
} from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("giropay logo rendering happy cases", () => {
  it("should render the giropay logo", () => {
    const logo = <GiropayLogo logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("GiropayLogoExternalImage rendering happy cases", () => {
  it("should render the giropay logo from CDN", () => {
    const logo = <GiropayLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
