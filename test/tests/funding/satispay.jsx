/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { SatispayLogo } from "../../../src";
import { validateSVG } from "../common";

describe("satispay logo rendering happy cases", () => {
  it("should render the satispay logo", () => {
    const logo = <SatispayLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});
