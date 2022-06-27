/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { ZimplerLogo } from "../../../src";
import { validateSVG } from "../common";

describe("zimpler logo rendering happy cases", () => {
  it("should render the zimpler logo", () => {
    const logo = <ZimplerLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});
