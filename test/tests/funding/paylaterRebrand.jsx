/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import {
  PaylaterMarkRebrand,
  PaylaterMarkRebrandExternalImage,
  PaylaterMarkRebrandInlineSVG,
} from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("paylater mark rebrand rendering happy cases", () => {
  it("should render the paylater mark rebrand", () => {
    const logo = <PaylaterMarkRebrand />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render paylater mark rebrand external image", () => {
    const logo = <PaylaterMarkRebrandExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });

  it("should render paylater mark rebrand inline SVG", () => {
    const logo = <PaylaterMarkRebrandInlineSVG />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});
