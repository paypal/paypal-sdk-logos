/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { BlikLogo } from "../../../src";
import { validateSVG } from "../common";

describe("blik logo rendering happy cases", () => {
  it("should render the payu logo", () => {
    const logo = <BlikLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});
