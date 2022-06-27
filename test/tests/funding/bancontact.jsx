/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { BancontactLogo, LOGO_COLOR } from "../../../src";
import { validateSVG } from "../common";

describe("bancontact logo rendering happy cases", () => {
  it("should render the bancontact logo", () => {
    const logo = <BancontactLogo logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});
