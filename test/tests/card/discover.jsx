/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { DiscoverLogo } from "../../../src";
import { validateSVG } from "../common";

describe("discover logo rendering happy cases", () => {
  it("should render the discover logo", () => {
    const logo = <DiscoverLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});
