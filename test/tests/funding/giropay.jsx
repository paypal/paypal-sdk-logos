/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { GiropayLogo, LOGO_COLOR } from '../../../src';
import { validateSVG, getNonce } from '../common';

describe('giropay logo rendering happy cases', () => {

    it('should render the giropay logo', () => {
        const logo = (
            <GiropayLogo logoColor={ LOGO_COLOR.WHITE } nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
