/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { VisaLogo } from '../../../src';
import { validateSVG, getNonce } from '../common';

describe('visa logo rendering happy cases', () => {

    it('should render the visa logo', () => {
        const logo = (
            <VisaLogo nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
