/* @flow */
/** @jsx node */

import { node, html } from '@krakenjs/jsx-pragmatic/src';

import { PPLogo, PPMonochrome, PayPalLogo, LOGO_COLOR } from '../../../src';
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

    it('should render the pp monochrome logo', () => {
        const logo = (
            <PPMonochrome logoColor={ LOGO_COLOR.MONOCHROME } />
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
