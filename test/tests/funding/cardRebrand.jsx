/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import {
  GlyphCardRebrand,
  LOGO_COLOR,
  GlyphCardRebrandExternalImage,
  GlyphCardRebrandInlineSVG,
} from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("card glyph logo rendering happy cases", () => {
  it("should render the card glyph logo in white", () => {
    const logo = <GlyphCardRebrand logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render the card glyph logo in black", () => {
    const logo = <GlyphCardRebrand logoColor={LOGO_COLOR.BLACK} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("GlyphCardRebrandExternalImage rendering happy cases", () => {
  it("should render the card glyph logo from CDN", () => {
    const logo = <GlyphCardRebrandExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});

describe("GlyphCardRebrandInlineSVG rendering happy cases", () => {
  it("should render an inline svg of the card glyph logo", () => {
    const logo = <GlyphCardRebrandInlineSVG />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
