/* @flow */

import fs from "fs-extra";
import { $ } from "zx";
import { html } from "@krakenjs/jsx-pragmatic";

import { getSVGFilename } from "../src/lib";
import { LOGO } from "../src/constants";
import {
  APPLEPAY_LOGO_COLORS,
  BANCONTACT_LOGO_COLORS,
  BLIK_LOGO_COLORS,
  BOLETO_LOGO_COLORS,
  EPS_LOGO_COLORS,
  getApplepaySVG,
  getBancontactSVG,
  getBlikSVG,
  getBoletoSVG,
  getEpsSVG,
  getGiropaySVG,
  getIdealSVG,
  getItauSVG,
  getMaximaSVG,
  getMercadoPagoSVG,
  getMultibancoSVG,
  getMybankSVG,
  getOxxoSVG,
  getP24SVG,
  getPaidySVG,
  getPayuSVG,
  getSatispaySVG,
  getSepaSVG,
  getSofortSVG,
  getTrustlySVG,
  getVerkkopankkiSVG,
  getWechatpaySVG,
  getZimplerSVG,
  GIROPAY_LOGO_COLORS,
  IDEAL_LOGO_COLORS,
  ITAU_LOGO_COLORS,
  MAXIMA_LOGO_COLORS,
  MERCADOPAGO_LOGO_COLORS,
  MULTIBANCO_LOGO_COLORS,
  MYBANK_LOGO_COLORS,
  OXXO_LOGO_COLORS,
  P24_LOGO_COLORS,
  PAIDY_LOGO_COLORS,
  PAYU_LOGO_COLORS,
  SATISPAY_LOGO_COLORS,
  SEPA_LOGO_COLORS,
  SOFORT_LOGO_COLORS,
  TRUSTLY_LOGO_COLORS,
  VERKKOPANKKI_LOGO_COLORS,
  WECHATPAY_LOGO_COLORS,
  ZIMPLER_LOGO_COLORS,
} from "../src/logos";
import { version } from "../package.json";

import { getNodeOps, updateCDNUrl } from "./utils";

const LOGO_GETTERS = {
  [LOGO.APPLEPAY]: getApplepaySVG,
  [LOGO.BANCONTACT]: getBancontactSVG,
  [LOGO.BLIK]: getBlikSVG,
  [LOGO.BOLETO]: getBoletoSVG,
  [LOGO.EPS]: getEpsSVG,
  [LOGO.GIROPAY]: getGiropaySVG,
  [LOGO.IDEAL]: getIdealSVG,
  [LOGO.ITAU]: getItauSVG,
  [LOGO.MAXIMA]: getMaximaSVG,
  [LOGO.MERCADOPAGO]: getMercadoPagoSVG,
  [LOGO.MULTIBANCO]: getMultibancoSVG,
  [LOGO.MYBANK]: getMybankSVG,
  [LOGO.OXXO]: getOxxoSVG,
  [LOGO.P24]: getP24SVG,
  [LOGO.PAIDY]: getPaidySVG,
  [LOGO.PAYU]: getPayuSVG,
  [LOGO.SATISPAY]: getSatispaySVG,
  [LOGO.SEPA]: getSepaSVG,
  [LOGO.SOFORT]: getSofortSVG,
  [LOGO.TRUSTLY]: getTrustlySVG,
  [LOGO.VERKKOPANKKI]: getVerkkopankkiSVG,
  [LOGO.WECHATPAY]: getWechatpaySVG,
  [LOGO.ZIMPLER]: getZimplerSVG,
};

const LOGO_COLOR_MAPS = {
  [LOGO.APPLEPAY]: APPLEPAY_LOGO_COLORS,
  [LOGO.BANCONTACT]: BANCONTACT_LOGO_COLORS,
  [LOGO.BLIK]: BLIK_LOGO_COLORS,
  [LOGO.BOLETO]: BOLETO_LOGO_COLORS,
  [LOGO.EPS]: EPS_LOGO_COLORS,
  [LOGO.GIROPAY]: GIROPAY_LOGO_COLORS,
  [LOGO.IDEAL]: IDEAL_LOGO_COLORS,
  [LOGO.ITAU]: ITAU_LOGO_COLORS,
  [LOGO.MAXIMA]: MAXIMA_LOGO_COLORS,
  [LOGO.MERCADOPAGO]: MERCADOPAGO_LOGO_COLORS,
  [LOGO.MULTIBANCO]: MULTIBANCO_LOGO_COLORS,
  [LOGO.MYBANK]: MYBANK_LOGO_COLORS,
  [LOGO.OXXO]: OXXO_LOGO_COLORS,
  [LOGO.P24]: P24_LOGO_COLORS,
  [LOGO.PAIDY]: PAIDY_LOGO_COLORS,
  [LOGO.PAYU]: PAYU_LOGO_COLORS,
  [LOGO.SATISPAY]: SATISPAY_LOGO_COLORS,
  [LOGO.SEPA]: SEPA_LOGO_COLORS,
  [LOGO.SOFORT]: SOFORT_LOGO_COLORS,
  [LOGO.TRUSTLY]: TRUSTLY_LOGO_COLORS,
  [LOGO.VERKKOPANKKI]: VERKKOPANKKI_LOGO_COLORS,
  [LOGO.WECHATPAY]: WECHATPAY_LOGO_COLORS,
  [LOGO.ZIMPLER]: ZIMPLER_LOGO_COLORS,
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

  // updates CDN URL in src/constants.js with package version
  if (cdnNamespace !== "js-sdk-logos") {
    throw new Error("Expected cdnNamespace to be js-sdk-logos");
  }
  updateCDNUrl(version);

  const outdir = `cdn/${version}`;

  await $`mkdir -p ${outdir}`;

  const logoPromises = [];

  for (const logoName of Object.keys(LOGO_GETTERS)) {
    const logoGetter = LOGO_GETTERS[logoName];
    const logoColorMap = LOGO_COLOR_MAPS[logoName];

    for (const [colorName, logoColors] of Object.entries(logoColorMap)) {
      // $FlowFixMe
      const svg = logoGetter(logoColors);

      // $FlowFixMe
      const filename = getSVGFilename(logoName, colorName);
      const filepath = `${outdir}/${filename}`;

      // $FlowFixMe
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
