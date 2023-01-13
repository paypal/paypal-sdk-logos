/* @flow */

import fs from "fs-extra";
import { html } from "@krakenjs/jsx-pragmatic";

// eslint-disable-next-line import/no-namespace
import * as logos from "../src/logos";
import { LOGO_COLOR } from "../src/constants";

async function buildLogos() {
  const outdir = process.argv.pop();
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
      logoPromises.push(
        fs.writeFile(
          `${outdir}/${name}-${logoColor}.svg`,
          logo({ logoColor }).props.render().render(html())
        )
      );
    }
  }

  // eslint-disable-next-line no-restricted-globals,compat/compat,promise/no-native
  await Promise.all(logoPromises);
}

buildLogos();
