/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { MercadoPagoLogo, LOGO_COLOR } from '../../../src';
import { validateSVG } from '../common';

describe('Mercado Pago white logo rendering happy cases', () => {

    it('should render the Mercado Pago WHITE logo', () => {
        const logo = (
            <MercadoPagoLogo logoColor={ LOGO_COLOR.WHITE } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });

    it('should render the Mercado Pago BLACK logo', () => {
        const logo = (
            <MercadoPagoLogo logoColor={ LOGO_COLOR.BLACK } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });

    it('should render the Mercado Pago DEFAULT logo', () => {
        const logo = (
            <MercadoPagoLogo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});

describe('Mercado Pago logo rendering error cases', () => {

    it('should error while rendering the Mercado Pago logo with an invalid color', () => {

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
