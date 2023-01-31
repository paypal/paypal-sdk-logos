/* @flow */

// eslint-disable-next-line import/no-nodejs-modules
import fs from "fs";

type NodeOps = {|
  web: {|
    staticNamespace: string,
  |},
|};

export function getNodeOps(): NodeOps {
  if (!fs.existsSync("./.nodeops")) {
    throw new Error(`Node Ops file not found`);
  }
  return JSON.parse(fs.readFileSync("./.nodeops", "utf-8"));
}

export function updateCDNUrl(packageVersion: string, cdnNamespace: string) {
  const filepath = "src/constants.js";

  let constantsFile = fs.readFileSync(filepath, "utf-8");

  constantsFile = constantsFile.replace(
    /const PACKAGE_VERSION = ".*";/,
    `const PACKAGE_VERSION = "${packageVersion}";`
  );
  constantsFile = constantsFile.replace(
    /const CDN_NAMESPACE = ".*";/,
    `const CDN_NAMESPACE = "${cdnNamespace}";`
  );

  fs.writeFileSync(filepath, constantsFile);
}
