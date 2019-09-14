/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { TrustlyLogo } from '../../../src';
import { validateSVG } from '../common';

describe('blik logo rendering happy cases', () => {

    it('should render the payu logo', () => {
        const logo = (
            <TrustlyLogo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});

describe('blik logo rendering error cases', () => {

    it('should error while rendering the blik logo with an invalid color', () => {

        let error;

        try {
            (<TrustlyLogo logoColor="turquoise" />).render(html());
        } catch (err) {
            error = err;
        }

        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });
});
