PayPal SDK Logos
----------------

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
