/* @flow */

// eslint-disable-next-line import/no-nodejs-modules
import fs from "fs";

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

export function updateCDNUrl(packageVersion: string) {
  const filepath = "src/constants.js";

  let constantsFile = fs.readFileSync(filepath, "utf-8");

  constantsFile = constantsFile.replace(
    /const PACKAGE_VERSION = ".*";/,
    `const PACKAGE_VERSION = "${packageVersion}";`
  );

  fs.writeFileSync(filepath, constantsFile);
}
