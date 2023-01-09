/* @flow */

import fs from "fs-extra";
import { html } from "@krakenjs/jsx-pragmatic/src";

// eslint-disable-next-line import/no-namespace
import * as logos from "../src/logos";
import { LOGO_COLOR } from "../src/constants";
import { ApplePayLogo } from "../src/logos";

// console.log(ApplePayLogo({ logoColor: "black" }).props.render().render(html()));

async function buildLogos() {
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
          `./svg/${name}_${logoColor}.svg`,
          logo({ logoColor }).props.render().render(html())
        )
      );
    }
  }

  // eslint-disable-next-line no-restricted-globals,compat/compat,promise/no-native
  await Promise.all(logoPromises);
}

buildLogos();
