## PayPal SDK Logos

[![build status][build-badge]][build]
[![code coverage][coverage-badge]][coverage]
[![npm version][version-badge]][package]
[![apache license][license-badge]][license]

[build-badge]: https://img.shields.io/github/workflow/status/paypal/paypal-sdk-logos/build?logo=github&style=flat-square
[build]: https://github.com/paypal/paypal-sdk-logos/actions?query=workflow%3Abuild
[coverage-badge]: https://img.shields.io/codecov/c/github/paypal/paypal-sdk-logos.svg?style=flat-square
[coverage]: https://codecov.io/github/paypal/paypal-sdk-logos/
[version-badge]: https://img.shields.io/npm/v/@paypal/sdk-logos.svg?style=flat-square
[package]: https://www.npmjs.com/package/@paypal/sdk-logos
[license-badge]: https://img.shields.io/npm/l/@paypal/sdk-logos.svg?style=flat-square
[license]: https://github.com/paypal/paypal-sdk-logos/blob/main/LICENSE

Logos for PayPal SDKs.

### Render using JSX with HTML

```javascript
/** @jsx node */

import { PayPalLogo, LOGO_COLOR } from "paypal-sdk-logos";
import { node, html } from "@krakenjs/jsx-pragmatic/src";

function render() {
	return (<PayPalLogo logoColor={LOGO_COLOR.WHITE} />).render(html());
}
```

### Render using JSX with React

```javascript
/** @jsx node */

import React from "react";
import { PayPalLogo, LOGO_COLOR } from "paypal-sdk-logos";
import { node, react } from "@krakenjs/jsx-pragmatic/src";

function render() {
	return (<PayPalLogo logoColor={LOGO_COLOR.WHITE} />).render(react({ React }));
}
```

### Render using vanilla JavaScript and HTML

```javascript
import { PayPalLogo, LOGO_COLOR } from 'paypal-sdk-logos';
import { html } from '@krakenjs/jsx-pragmatic/src';

function render() {
    return PayPalLogo({ logoColor: LOGO_COLOR.WHITE });
        .render(html());
}
```

## Quick Start

#### Getting Started

- Fork the module
- Run setup: `npm run setup`
- Start editing code in `./src` and writing tests in `./tests`
- `npm run build`

#### Building

```bash
npm run build
```

#### Tests

- Edit tests in `./test/tests`
- Run the tests:

  ```bash
  npm run test
  ```

#### Testing with different/multiple browsers

```bash
npm run karma -- --browser=PhantomJS
npm run karma -- --browser=Chrome
npm run karma -- --browser=Safari
npm run karma -- --browser=Firefox
npm run karma -- --browser=PhantomJS,Chrome,Safari,Firefox
```

#### Keeping the browser open after tests

```bash
npm run karma -- --browser=Chrome --keep-open
```

#### Publishing

##### Before you publish for the first time:

- Delete the example code in `./src`, `./test/tests` and `./demo`
- Edit the module name in `package.json`
- Edit `README.md` and `CONTRIBUTING.md`

##### Then:

- Publish your code: `npm run release` to add a patch
  - Or `npm run release:path`, `npm run release:minor`, `npm run release:major`
