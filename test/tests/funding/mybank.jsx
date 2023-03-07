/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { MybankLogo, LOGO_COLOR, MybankLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("mybank logo rendering happy cases", () => {
  it("should render the mybank logo", () => {
    const logo = <MybankLogo logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("MybankLogoExternalImage rendering happy cases", () => {
  it("should render the mybank logo from CDN", () => {
    const logo = <MybankLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
