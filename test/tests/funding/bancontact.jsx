/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { BancontactLogo, LOGO_COLOR } from '../../../src';
import { validateSVG, getNonce } from '../common';

describe('bancontact logo rendering happy cases', () => {

    it('should render the bancontact logo', () => {
        const logo = (
            <BancontactLogo logoColor={ LOGO_COLOR.WHITE } nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
