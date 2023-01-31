/* @flow */

// eslint-disable-next-line import/no-nodejs-modules
import fs from "fs";

export function updateCDNUrl(packageVersion: string) {
  const filepath = "src/constants.js";

  let constantsFile = fs.readFileSync(filepath, "utf-8");

  constantsFile = constantsFile.replace(
    /const PACKAGE_VERSION = ".*";/,
    `const PACKAGE_VERSION = "${packageVersion}";`
  );

  fs.writeFileSync(filepath, constantsFile);
}
