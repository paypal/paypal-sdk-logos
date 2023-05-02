/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { DiscoverLogo, DiscoverLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("discover logo rendering happy cases", () => {
  it("should render the discover logo", () => {
    const logo = <DiscoverLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("DiscoverLogoExternalImage rendering happy cases", () => {
  it("should render the discover logo from CDN", () => {
    const logo = <DiscoverLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
