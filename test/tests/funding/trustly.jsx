/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { TrustlyLogo } from "../../../src";
import { validateSVG } from "../common";

describe("blik logo rendering happy cases", () => {
  it("should render the payu logo", () => {
    const logo = <TrustlyLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});
