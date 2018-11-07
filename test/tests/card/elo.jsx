/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { EloLogo } from '../../../src';
import { validateSVG, getNonce } from '../common';

describe('elo logo rendering happy cases', () => {

    it('should render the elo logo', () => {
        const logo = (
            <EloLogo nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
