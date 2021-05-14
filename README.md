PayPal SDK Logos
----------------

[![npm version](https://img.shields.io/npm/v/@paypal/sdk-logos.svg?style=flat-square)](https://www.npmjs.com/package/@paypal/sdk-logos) [![build status](https://img.shields.io/travis/paypal/paypal-sdk-logos/master.svg?style=flat-square)](https://travis-ci.org/paypal/paypal-sdk-logos)[![code coverage](https://img.shields.io/codecov/c/github/paypal/paypal-sdk-logos.svg?style=flat-square)](https://codecov.io/github/paypal/paypal-sdk-logos/)

[![dependencies Status](https://david-dm.org/paypal/paypal-sdk-logos/status.svg)](https://david-dm.org/paypal/paypal-sdk-logos) [![devDependencies Status](https://david-dm.org/paypal/paypal-sdk-logos/dev-status.svg)](https://david-dm.org/paypal/paypal-sdk-logos?type=dev)

Logos for PayPal SDKs. 

### Render using JSX with HTML

```javascript
/** @jsx node */

import { PayPalLogo, LOGO_COLOR } from 'paypal-sdk-logos';
import { node, html } from 'jsx-pragmatic';

function render() {
    return (
        <PayPalLogo logoColor={ LOGO_COLOR.WHITE } />
    ).render(html());
}
```

### Render using JSX with React

```javascript
/** @jsx node */

import React from 'react';
import { PayPalLogo, LOGO_COLOR } from 'paypal-sdk-logos';
import { node, react } from 'jsx-pragmatic';

function render() {
    return (
        <PayPalLogo logoColor={ LOGO_COLOR.WHITE } />
    ).render(react({ React }));
}
```

### Render using vanilla JavaScript and HTML

```javascript
import { PayPalLogo, LOGO_COLOR } from 'paypal-sdk-logos';
import { html } from 'jsx-pragmatic';

function render() {
    return PayPalLogo({ logoColor: LOGO_COLOR.WHITE });
        .render(html());
}
```

Quick Start
-----------

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
