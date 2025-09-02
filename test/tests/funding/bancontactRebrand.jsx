/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import {
  BancontactMarkRebrand,
  BancontactMarkRebrandExternalImage,
  BancontactMarkRebrandInlineSVG,
} from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("bancontact mark rebrand rendering happy cases", () => {
  it("should render the bancontact mark rebrand", () => {
    const logo = <BancontactMarkRebrand />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render bancontact mark rebrand external image", () => {
    const logo = <BancontactMarkRebrandExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });

  it("should render bancontact mark rebrand inline SVG", () => {
    const logo = <BancontactMarkRebrandInlineSVG />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});
