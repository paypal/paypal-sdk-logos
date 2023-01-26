/* @flow */

import fs from "fs-extra";
import { LOGO_COLOR } from "../src/constants";

type Package = {|
  name: string,
  version: string,
|};

type NodeOps = {|
  web: {|
    staticNamespace: string,
  |},
|};

export function getPackage(): Package {
  if (!fs.existsSync("./package.json")) {
    throw new Error(`Package file not found`);
  }
  return JSON.parse(fs.readFileSync("./package.json", "utf-8"));
}

export function getNodeOps(): NodeOps {
  if (!fs.existsSync("./.nodeops")) {
    throw new Error(`Node Ops file not found`);
  }
  return JSON.parse(fs.readFileSync("./.nodeops", "utf-8"));
}

export function getSVGFilename(
  name: string,
  logoColor: $Values<typeof LOGO_COLOR>
): string {
  return `${name}-${logoColor}.svg`;
}