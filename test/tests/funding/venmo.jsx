/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';
import { noop } from 'belter/src';

import { VenmoLogo, LOGO_COLOR } from '../../../src';
import { validateSVG, getNonce } from '../common';

describe('venmo logo rendering happy cases', () => {

    it('should render the venmo logo', () => {
        const logo = (
            <VenmoLogo logoColor={ LOGO_COLOR.WHITE } nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});

describe('venmo logo rendering error cases', () => {

    it('should error while rendering the venmo logo with an invalid color', () => {

        let error;

        try {
            noop(<VenmoLogo logoColor="turquoise" nonce={ getNonce() } />);
        } catch (err) {
            error = err;
        }
        
        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });
});
