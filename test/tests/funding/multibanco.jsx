/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import {
  MultibancoLogo,
  LOGO_COLOR,
  MultibancoLogoExternalImage,
} from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("mulitbanco logo rendering happy cases", () => {
  it("should render the multibanco logo", () => {
    const logo = <MultibancoLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render the multibanco white logo", () => {
    const logo = <MultibancoLogo logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("MultibancoLogoExternalImage rendering happy cases", () => {
  it("should render the multibanco logo from CDN", () => {
    const logo = <MultibancoLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
