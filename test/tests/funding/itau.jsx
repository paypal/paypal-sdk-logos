/* @flow */
/** @jsx node */

import { node, html } from '@krakenjs/jsx-pragmatic/src';

import { ItauLogo, LOGO_COLOR } from '../../../src';
import { validateSVG } from '../common';

describe('itau logo rendering happy cases', () => {

    it('should render the itau logo', () => {
        const logo = (
            <ItauLogo logoColor={ LOGO_COLOR.WHITE } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
