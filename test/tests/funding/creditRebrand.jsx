/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import {
  CreditMarkRebrand,
  CreditMarkRebrandExternalImage,
  CreditMarkRebrandInlineSVG,
} from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("credit mark rebrand rendering happy cases", () => {
  it("should render the credit mark rebrand", () => {
    const logo = <CreditMarkRebrand />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render credit mark rebrand external image", () => {
    const logo = <CreditMarkRebrandExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });

  it("should render credit mark rebrand inline SVG", () => {
    const logo = <CreditMarkRebrandInlineSVG />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});
