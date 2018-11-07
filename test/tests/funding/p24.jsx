/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';
import { noop } from 'belter/src';

import { P24Logo, LOGO_COLOR } from '../../../src';
import { validateSVG, getNonce } from '../common';

describe('p24 logo rendering happy cases', () => {

    it('should render the p24 logo', () => {
        const logo = (
            <P24Logo logoColor={ LOGO_COLOR.BLACK } nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});

describe('p24 logo rendering error cases', () => {

    it('should error while rendering the p24 logo with an invalid color', () => {

        let error;

        try {
            noop(<P24Logo logoColor="turquoise" nonce={ getNonce() } />);
        } catch (err) {
            error = err;
        }

        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });
});
