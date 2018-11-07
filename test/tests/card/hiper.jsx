/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { HiperLogo } from '../../../src';
import { validateSVG, getNonce } from '../common';

describe('hiper logo rendering happy cases', () => {

    it('should render the hiper logo', () => {
        const logo = (
            <HiperLogo nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
