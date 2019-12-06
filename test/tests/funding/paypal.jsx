/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { PPLogo, PayPalLogo, LOGO_COLOR } from '../../../src';
import { validateSVG } from '../common';

describe('paypal logo rendering happy cases', () => {

    it('should render the pp logo in white', () => {
        const logo = (
            <PPLogo logoColor={ LOGO_COLOR.WHITE } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });

    it('should render the pp logo in blue', () => {
        const logo = (
            <PPLogo logoColor={ LOGO_COLOR.BLUE } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });

    it('should render the paypal logo in white', () => {
        const logo = (
            <PayPalLogo logoColor={ LOGO_COLOR.WHITE } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });

    it('should render the paypal logo in blue', () => {
        const logo = (
            <PayPalLogo logoColor={ LOGO_COLOR.BLUE } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });

    it('should render the paypal logo in blue with a custom prop', () => {
        const logo = (
            <PayPalLogo logoColor={ LOGO_COLOR.BLUE } importance={ 5 } />
        );

        const logoHTML = logo.render(html());

        if (logoHTML.indexOf('importance="5"') === -1) {
            throw new Error(`Expected paypal tag to contain importance="5", got ${ logoHTML }`);
        }

        validateSVG(logoHTML);
    });
});

describe('paypal logo rendering error cases', () => {

    it('should error while rendering the pp logo with an invalid color', () => {

        let error;

        try {
            (<PPLogo logoColor="turquoise" />).render(html());
        } catch (err) {
            error = err;
        }
        
        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });

    it('should error while rendering the paypal logo with an invalid color', () => {

        let error;

        try {
            (<PayPalLogo logoColor="turquoise" />).render(html());
        } catch (err) {
            error = err;
        }
        
        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });
});
