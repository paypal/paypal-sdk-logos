/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { JcbLogo, JcbLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("jcb logo rendering happy cases", () => {
  it("should render the jcb logo", () => {
    const logo = <JcbLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("JcbLogoExternalImage rendering happy cases", () => {
  it("should render the jcb logo from CDN", () => {
    const logo = <JcbLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
