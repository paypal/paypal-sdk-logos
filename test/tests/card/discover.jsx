/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { DiscoverLogo } from '../../../src';
import { validateSVG, getNonce } from '../common';

describe('discover logo rendering happy cases', () => {

    it('should render the discover logo', () => {
        const logo = (
            <DiscoverLogo nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
