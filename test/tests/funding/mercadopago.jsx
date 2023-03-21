/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { MercadoPagoLogo, LOGO_COLOR } from "../../../src";
import { validateSVG } from "../common";

describe("mercado pago logo rendering happy cases", () => {
  it("should render the mercado pago logo", () => {
    const logo = <MercadoPagoLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });

  it("should render the mercado pago white logo", () => {
    const logo = <MercadoPagoLogo logoColor={LOGO_COLOR.WHITE} />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});
