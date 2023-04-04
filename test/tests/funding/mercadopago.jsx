/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import {
  MercadoPagoLogo,
  LOGO_COLOR,
  MercadoPagoLogoExternalImage,
} from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

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

describe("MercadoPagoLogoExternalImage rendering happy cases", () => {
  it("should render the mercadopago logo from CDN", () => {
    const logo = <MercadoPagoLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
