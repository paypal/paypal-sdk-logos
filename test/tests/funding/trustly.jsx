/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { TrustlyLogo, LOGO_COLOR } from '../../../src';
import { validateSVG } from '../common';

describe('trustly logo rendering happy cases', () => {

    it('should render the trustly logo', () => {
        const logo = (
            <TrustlyLogo logoColor={ LOGO_COLOR.WHITE } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});

describe('trustly logo rendering error cases', () => {

    it('should error while rendering the p24 logo with an invalid color', () => {

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
