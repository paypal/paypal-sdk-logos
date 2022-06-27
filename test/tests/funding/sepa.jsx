/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { SepaLogo, LOGO_COLOR } from "../../../src";
import { validateSVG } from "../common";

describe("sepa logo rendering happy cases", () => {
  it("should render the sepa logo", () => {
    const logo = <SepaLogo logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});
