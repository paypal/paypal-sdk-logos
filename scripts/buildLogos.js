/* @flow */

import fs from "fs-extra";
import { $ } from "zx";
import { html } from "@krakenjs/jsx-pragmatic";

// eslint-disable-next-line import/no-namespace
import * as logos from "../src/logos";

import { getPackage, getSVGFilename } from "./utils";

async function buildLogos() {
  const version = getPackage().version;

  if (!version) {
    throw new Error(`Package version required`);
  }

  const outdir = `cdn/${version}`;

  await $`mkdir -p ${outdir}`;

  const logoPromises = [];

  for (const [name, value] of Object.entries(logos)) {
    if (!name.includes("SVGs")) {
      continue;
    }

    // $FlowFixMe
    for (const [logoColor, svg] of Object.entries(value())) {
      // $FlowFixMe
      const filename = getSVGFilename(name, logoColor);
      const filepath = `${outdir}/${filename}`;

      // $FlowFixMe
      logoPromises.push(fs.writeFile(filepath, svg.render(html())));
    }
  }

  // eslint-disable-next-line no-restricted-globals,compat/compat,promise/no-native
  await Promise.all(logoPromises);
}

buildLogos();
