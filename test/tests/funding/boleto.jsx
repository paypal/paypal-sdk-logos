/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

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

describe('boleto logo rendering error cases', () => {

    it('should error while rendering the boleto logo with an invalid color', () => {

        let error;

        try {
            (<BoletoLogo logoColor="turquoise" />).render(html());
        } catch (err) {
            error = err;
        }

        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });
});
