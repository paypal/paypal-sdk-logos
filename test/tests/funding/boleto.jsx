/* @flow */
/** @jsx node */

import { node, html } from '@krakenjs/jsx-pragmatic/src';

import { BoletoLogo } from '../../../src';
import { validateSVG } from '../common';

describe('boleto logo rendering happy cases', () => {

    it('should render the boleto logo', () => {
        const logo = (
            <BoletoLogo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
