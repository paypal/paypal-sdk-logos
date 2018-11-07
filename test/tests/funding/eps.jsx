/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { EpsLogo, LOGO_COLOR } from '../../../src';
import { validateSVG, getNonce } from '../common';

describe('eps logo rendering happy cases', () => {

    it('should render the eps logo', () => {
        const logo = (
            <EpsLogo logoColor={ LOGO_COLOR.WHITE } nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
