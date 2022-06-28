/* @flow */
/* eslint import/no-nodejs-modules: off, import/no-default-export: off */

import { getWebpackConfig } from "@krakenjs/grumbler-scripts/config/webpack.config";

const FILE_NAME = "paypal-sdk-logos";
const MODULE_NAME = "paypalLogos";

export const WEBPACK_CONFIG: mixed = getWebpackConfig({
  filename: `${FILE_NAME}.js`,
  modulename: MODULE_NAME,
});

export const WEBPACK_CONFIG_MIN: mixed = getWebpackConfig({
  filename: `${FILE_NAME}.min.js`,
  modulename: MODULE_NAME,
  minify: true,
  vars: {
    __MIN__: true,
  },
});

export const WEBPACK_CONFIG_TEST: mixed = getWebpackConfig({
  modulename: MODULE_NAME,
  options: {
    devtool: "inline-source-map",
  },
  vars: {
    __TEST__: true,
  },
});

export default [WEBPACK_CONFIG, WEBPACK_CONFIG_MIN];
