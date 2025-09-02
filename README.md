## PayPal SDK Logos

[![build status][build-badge]][build]
[![code coverage][coverage-badge]][coverage]
[![npm version][version-badge]][package]
[![apache license][license-badge]][license]

[build-badge]: https://img.shields.io/github/actions/workflow/status/paypal/paypal-sdk-logos/main.yml?branch=main&logo=github&style=flat-square
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

#### Publishing & Deploying to CDN

For detailed instructions on publishing the package and deploying the logos to the CDN, refer to the [Contributing Guide](./CONTRIBUTING.md).

- **Publishing**: Learn how to publish the package, including alpha and main branch releases, in the [Publishing section](./CONTRIBUTING.md#publishing).
- **Deploying to CDN**: Follow the steps to deploy the `cdn` folder using the PayPal Web CLI or the UI in the [Deploying Logos to the CDN section](./CONTRIBUTING.md#deploying-logos-to-the-cdn).
