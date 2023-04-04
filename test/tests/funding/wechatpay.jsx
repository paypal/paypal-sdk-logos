/* @flow */
/** @jsx node */

import { node, html } from "@krakenjs/jsx-pragmatic/src";

import { WechatpayLogo, WechatpayLogoExternalImage } from "../../../src";
import { validateExternalSVG, validateSVG } from "../common";

describe("wechatpay logo rendering happy cases", () => {
  it("should render the wechatpay logo", () => {
    const logo = <WechatpayLogo />;

    const logoHTML = logo.render(html());

    validateSVG(logoHTML);
  });
});

describe("WechatpayLogoExternalImage rendering happy cases", () => {
  it("should render the wechatpay logo from CDN", () => {
    const logo = <WechatpayLogoExternalImage />;

    const logoHTML = logo.render(html());

    validateExternalSVG(logoHTML);
  });
});
