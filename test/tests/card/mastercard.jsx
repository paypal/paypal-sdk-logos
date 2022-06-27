/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { MastercardLogo } from "../../../src";
import { validateSVG } from "../common";

describe("mastercard logo rendering happy cases", () => {
  it("should render the mastercard logo", () => {
    const logo = <MastercardLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});
