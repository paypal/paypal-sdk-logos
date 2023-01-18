/* @flow */

import fs from "fs-extra";
import { html } from "@krakenjs/jsx-pragmatic";
import { $ } from "zx";

// eslint-disable-next-line import/no-namespace
import * as logos from "../src/logos";
import { LOGO_COLOR } from "../src/constants";

import { getPackage } from "./utils";

async function buildLogos() {
  const version = getPackage().version;

  if (!version) {
    throw new Error(`Package version required`);
  }

  const outdir = `cdn/${version}`;

  await $`mkdir -p ${outdir}`;

  const logoPromises = [];

  for (const [name, logo] of Object.entries(logos)) {
    const ignoreList = [
      "CreditLogo",
      "PayPalLogo",
      "PayPalMark",
      "PPLogo",
      "PPMonochrome",
    ];

    if (ignoreList.includes(name)) {
      continue;
    }

    for (const logoColor of Object.values(LOGO_COLOR)) {
      const filepath = `${outdir}/${name}-${logoColor}.svg`;
      const svg = logo({ logoColor }).props.render().render(html());

      logoPromises.push(fs.writeFile(filepath, svg));
    }
  }

  // eslint-disable-next-line no-restricted-globals,compat/compat,promise/no-native
  await Promise.all(logoPromises);
}

buildLogos();
