/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { P24Logo } from "../../../src";
import { validateSVG } from "../common";

describe("p24 logo rendering happy cases", () => {
  it("should render the p24 logo", () => {
    const logo = <P24Logo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});
