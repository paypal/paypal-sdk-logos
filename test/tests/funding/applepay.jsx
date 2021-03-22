/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { ApplePayLogo, LOGO_COLOR } from '../../../src';
import { validateSVG } from '../common';

describe('venmo logo rendering happy cases', () => {

    it('should render the venmo logo', () => {
        const logo = (
            <ApplePayLogo logoColor={ LOGO_COLOR.WHITE } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
