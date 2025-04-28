/* @flow */

import fs from "fs-extra";
import { $ } from "zx";
import { html } from "@krakenjs/jsx-pragmatic";
import { CARD } from "@paypal/sdk-constants/src";

import { getSVGFilename } from "../src/lib";
import { LOGO, MARK } from "../src/constants";
import type { LogoColors } from "../src/types";
import {
  APPLEPAY_LOGO_COLORS,
  BANCONTACT_LOGO_COLORS,
  BLIK_LOGO_COLORS,
  BOLETO_LOGO_COLORS,
  CREDIT_LOGO_COLORS,
  EPS_LOGO_COLORS,
  getAmexSVG,
  getApplepayMarkSVG,
  getApplepaySVG,
  getBancontactSVG,
  getBlikSVG,
  getBoletoSVG,
  getCreditMarkSVG,
  getCreditSVG,
  getDiscoverSVG,
  getEloSVG,
  getEpsSVG,
  getGiropaySVG,
  getGlyphBankSVG,
  getGlyphCardSVG,
  getGlyphCardRebrandSVG,
  getHiperSVG,
  getIdealSVG,
  getItauSVG,
  getJcbSVG,
  getMastercardSVG,
  getMercadoPagoSVG,
  getMultibancoSVG,
  getMybankSVG,
  getOxxoSVG,
  getP24SVG,
  getPaidySVG,
  getPayPalMarkSVG,
  getPayPalSVG,
  getPayuSVG,
  getPPMonochromeSVG,
  getPPSVG,
  getPPRebrandSVG,
  getSatispaySVG,
  getSepaSVG,
  getSofortSVG,
  getTrustlySVG,
  getVenmoSVG,
  getVenmoRebrandSVG,
  getVisaSVG,
  getWechatpaySVG,
  getPayPalRebrandSVG,
  GIROPAY_LOGO_COLORS,
  GLYPH_BANK_LOGO_COLORS,
  GLYPH_CARD_LOGO_COLORS,
  IDEAL_LOGO_COLORS,
  ITAU_LOGO_COLORS,
  MERCADOPAGO_LOGO_COLORS,
  MULTIBANCO_LOGO_COLORS,
  MYBANK_LOGO_COLORS,
  OXXO_LOGO_COLORS,
  P24_LOGO_COLORS,
  PAIDY_LOGO_COLORS,
  PAYPAL_LOGO_COLORS,
  PAYU_LOGO_COLORS,
  PPMONOCHROME_LOGO_COLORS,
  PP_LOGO_COLORS,
  SATISPAY_LOGO_COLORS,
  SEPA_LOGO_COLORS,
  SOFORT_LOGO_COLORS,
  TRUSTLY_LOGO_COLORS,
  VENMO_LOGO_COLORS,
  WECHATPAY_LOGO_COLORS,
  PAYPAL_REBRAND_LOGO_COLORS,
  VENMO_REBRAND_LOGO_COLORS,
  PP_REBRAND_LOGO_COLORS,
  GLYPH_CARD_REBRAND_LOGO_COLORS,
} from "../src/logos";
import { version } from "../package.json";

import { getNodeOps, updateCDNUrl } from "./utils";

const LOGO_GETTERS = {
  [LOGO.APPLEPAY]: getApplepaySVG,
  [LOGO.BANCONTACT]: getBancontactSVG,
  [LOGO.BANK]: getGlyphBankSVG,
  [LOGO.BLIK]: getBlikSVG,
  [LOGO.BOLETO]: getBoletoSVG,
  [LOGO.CARD]: getGlyphCardSVG,
  [LOGO.CARD_REBRAND]: getGlyphCardRebrandSVG,
  [LOGO.CREDIT]: getCreditSVG,
  // Germany-specific credit glyphs
  [`${LOGO.CREDIT}-DE`]: (logoColors: LogoColors) =>
    getCreditSVG({ ...logoColors, country: "DE" }),
  [LOGO.EPS]: getEpsSVG,
  [LOGO.GIROPAY]: getGiropaySVG,
  [LOGO.IDEAL]: getIdealSVG,
  [LOGO.ITAU]: getItauSVG,
  [LOGO.MERCADOPAGO]: getMercadoPagoSVG,
  [LOGO.MULTIBANCO]: getMultibancoSVG,
  [LOGO.MYBANK]: getMybankSVG,
  [LOGO.OXXO]: getOxxoSVG,
  [LOGO.P24]: getP24SVG,
  [LOGO.PAIDY]: getPaidySVG,
  [LOGO.PAYPAL]: getPayPalSVG,
  [LOGO.PAYPAL_REBRAND]: getPayPalRebrandSVG,
  [LOGO.PAYU]: getPayuSVG,
  [LOGO.PP]: getPPSVG,
  [LOGO.PP_REBRAND]: getPPRebrandSVG,
  [LOGO.PPMONOCHROME]: getPPMonochromeSVG,
  [LOGO.SATISPAY]: getSatispaySVG,
  [LOGO.SEPA]: getSepaSVG,
  [LOGO.SOFORT]: getSofortSVG,
  [LOGO.TRUSTLY]: getTrustlySVG,
  [LOGO.VENMO]: getVenmoSVG,
  [LOGO.VENMO_REBRAND]: getVenmoRebrandSVG,
  [LOGO.WECHATPAY]: getWechatpaySVG,
  [CARD.AMEX]: getAmexSVG,
  [CARD.DISCOVER]: getDiscoverSVG,
  [CARD.ELO]: getEloSVG,
  [CARD.HIPER]: getHiperSVG,
  [CARD.JCB]: getJcbSVG,
  [CARD.MASTERCARD]: getMastercardSVG,
  [CARD.VISA]: getVisaSVG,
  [MARK.APPLEPAY]: getApplepayMarkSVG,
  [MARK.CREDIT]: getCreditMarkSVG,
  [MARK.PAYPAL]: getPayPalMarkSVG,
};

const LOGO_COLOR_MAPS = {
  [LOGO.APPLEPAY]: APPLEPAY_LOGO_COLORS,
  [LOGO.BANCONTACT]: BANCONTACT_LOGO_COLORS,
  [LOGO.BANK]: GLYPH_BANK_LOGO_COLORS,
  [LOGO.BLIK]: BLIK_LOGO_COLORS,
  [LOGO.BOLETO]: BOLETO_LOGO_COLORS,
  [LOGO.CARD]: GLYPH_CARD_LOGO_COLORS,
  [LOGO.CARD_REBRAND]: GLYPH_CARD_REBRAND_LOGO_COLORS,
  [LOGO.CREDIT]: CREDIT_LOGO_COLORS,
  [`${LOGO.CREDIT}-DE`]: GLYPH_CARD_LOGO_COLORS,
  [LOGO.EPS]: EPS_LOGO_COLORS,
  [LOGO.GIROPAY]: GIROPAY_LOGO_COLORS,
  [LOGO.IDEAL]: IDEAL_LOGO_COLORS,
  [LOGO.ITAU]: ITAU_LOGO_COLORS,
  [LOGO.MERCADOPAGO]: MERCADOPAGO_LOGO_COLORS,
  [LOGO.MULTIBANCO]: MULTIBANCO_LOGO_COLORS,
  [LOGO.MYBANK]: MYBANK_LOGO_COLORS,
  [LOGO.OXXO]: OXXO_LOGO_COLORS,
  [LOGO.P24]: P24_LOGO_COLORS,
  [LOGO.PAIDY]: PAIDY_LOGO_COLORS,
  [LOGO.PAYPAL]: PAYPAL_LOGO_COLORS,
  [LOGO.PAYPAL_REBRAND]: PAYPAL_REBRAND_LOGO_COLORS,
  [LOGO.PAYU]: PAYU_LOGO_COLORS,
  [LOGO.PP]: PP_LOGO_COLORS,
  [LOGO.PP_REBRAND]: PP_REBRAND_LOGO_COLORS,
  [LOGO.PPMONOCHROME]: PPMONOCHROME_LOGO_COLORS,
  [LOGO.SATISPAY]: SATISPAY_LOGO_COLORS,
  [LOGO.SEPA]: SEPA_LOGO_COLORS,
  [LOGO.SOFORT]: SOFORT_LOGO_COLORS,
  [LOGO.TRUSTLY]: TRUSTLY_LOGO_COLORS,
  [LOGO.VENMO]: VENMO_LOGO_COLORS,
  [LOGO.VENMO_REBRAND]: VENMO_REBRAND_LOGO_COLORS,
  [LOGO.WECHATPAY]: WECHATPAY_LOGO_COLORS,
};

async function buildLogos() {
  let shouldCommit = false;

  if (process.argv.includes("--commit")) {
    shouldCommit = true;
  }

  if (!version) {
    throw new Error(`Package version required`);
  }

  const cdnNamespace = getNodeOps().web.staticNamespace;

  if (!cdnNamespace) {
    throw new Error(`CDN namespace required`);
  }

  if (cdnNamespace !== "js-sdk-logos") {
    throw new Error("Expected cdnNamespace to be js-sdk-logos");
  }

  // updates CDN URL in src/constants.js with package version
  updateCDNUrl(version);

  const outdir = `cdn/${version}`;

  await $`mkdir -p ${outdir}`;

  const logoPromises = [];

  for (const logoName of Object.keys(LOGO_GETTERS)) {
    const logoGetter = LOGO_GETTERS[logoName];
    // $FlowFixMe
    const logoColorMap = LOGO_COLOR_MAPS[logoName];

    if (logoColorMap) {
      for (const [colorName, logoColors] of Object.entries(logoColorMap)) {
        // $FlowFixMe
        const svg = logoGetter(logoColors);

        // $FlowFixMe
        const filename = getSVGFilename(logoName, colorName);
        const filepath = `${outdir}/${filename}`;

        logoPromises.push(fs.writeFile(filepath, svg.render(html())));
      }
    } else {
      // $FlowFixMe
      const svg = logoGetter();

      const filename = getSVGFilename(logoName);
      const filepath = `${outdir}/${filename}`;

      logoPromises.push(fs.writeFile(filepath, svg.render(html())));
    }
  }

  // eslint-disable-next-line no-restricted-globals,compat/compat,promise/no-native
  await Promise.all(logoPromises);

  if (shouldCommit) {
    await $`git add cdn src/constants.js`;
    await $`git commit -m "chore: generate CDN packages"`;
    await $`git push`;
  }
}

buildLogos();
