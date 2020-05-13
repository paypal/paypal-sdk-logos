/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { MercadoPagoLogo, LOGO_COLOR } from '../../../src';
import { validateSVG } from '../common';

describe('mercado pago logo rendering happy cases', () => {

    it('should render the mercado pago logo', () => {
        const logo = (
            <MercadoPagoLogo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });

    it('should render the mercado pago white logo', () => {
        const logo = (
            <MercadoPagoLogo logoColor={ LOGO_COLOR.WHITE } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});

describe('mercado pago logo rendering error cases', () => {

    it('should error while rendering the mercado pago logo with an invalid color', () => {

        let error;

        try {
            (<MercadoPagoLogo logoColor="turquoise" />).render(html());
        } catch (err) {
            error = err;
        }

        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });
});
