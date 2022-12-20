/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { PayuponinvoiceLogo } from "../../../src";
import { validateSVG } from "../common";

describe("payuponinvoice logo rendering happy cases", () => {
  it("should render the payuponinvoice logo", () => {
    const logo = <PayuponinvoiceLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});
