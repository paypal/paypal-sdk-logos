/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { VerkkopankkiLogo } from "../../../src";
import { validateSVG } from "../common";

describe("payu logo rendering happy cases", () => {
  it("should render the payu logo", () => {
    const logo = <VerkkopankkiLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});
