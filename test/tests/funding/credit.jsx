/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';
import { noop } from 'belter/src';
import { COUNTRY, LANG } from 'paypal-sdk-constants/src';

import { CreditLogo, LOGO_COLOR } from '../../../src';
import { validateSVG, getLocale, getNonce } from '../common';

describe('credit logo rendering happy cases', () => {

    it('should render the credit logo', () => {
        const logo = (
            <CreditLogo logoColor={ LOGO_COLOR.WHITE } locale={ getLocale() } nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });


    it('should render the credit logo differently for en_US vs de_DE', () => {
        
        const usLogoHTML = (
            <CreditLogo logoColor={ LOGO_COLOR.WHITE } locale={ getLocale(COUNTRY.US, LANG.EN) } nonce={ getNonce() } />
        ).render(html());

        const deLogoHTML = (
            <CreditLogo logoColor={ LOGO_COLOR.WHITE } locale={ getLocale(COUNTRY.DE, LANG.DE) } nonce={ getNonce() } />
        ).render(html());

        validateSVG(usLogoHTML);
        validateSVG(deLogoHTML);

        if (usLogoHTML === deLogoHTML) {
            throw new Error(`Expected credit logo to be different for US and DE locales`);
        }
    });
});

describe('credit logo rendering error cases', () => {

    it('should error while rendering the credit logo with an invalid color', () => {

        let error;

        try {
            noop(<CreditLogo logoColor="turquoise" locale={ getLocale() } nonce={ getNonce() } />);
        } catch (err) {
            error = err;
        }
        
        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });

    it('should error while rendering the credit logo with no locale passed', () => {

        let error;

        try {
            noop(<CreditLogo logoColor={ LOGO_COLOR.WHITE } nonce={ getNonce() } />);
        } catch (err) {
            error = err;
        }

        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });
});
