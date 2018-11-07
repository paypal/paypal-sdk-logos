/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { MastercardLogo } from '../../../src';
import { validateSVG, getNonce } from '../common';

describe('mastercard logo rendering happy cases', () => {

    it('should render the mastercard logo', () => {
        const logo = (
            <MastercardLogo nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
