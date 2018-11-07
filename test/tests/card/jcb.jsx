/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { JcbLogo } from '../../../src';
import { validateSVG, getNonce } from '../common';

describe('jcb logo rendering happy cases', () => {

    it('should render the jcb logo', () => {
        const logo = (
            <JcbLogo nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
