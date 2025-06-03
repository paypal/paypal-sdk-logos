/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { MaestroLogo, MaestroLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("maestro logo rendering happy cases", () => {
  it("should render the maestro logo", () => {
    const logo = <MaestroLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("MaestroLogoExternalImage rendering happy cases", () => {
  it("should render the maestro logo from CDN", () => {
    const logo = <MaestroLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
