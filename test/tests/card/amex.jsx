/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { AmexLogo } from '../../../src';
import { validateSVG, getNonce } from '../common';

describe('amex logo rendering happy cases', () => {

    it('should render the amex logo', () => {
        const logo = (
            <AmexLogo nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
