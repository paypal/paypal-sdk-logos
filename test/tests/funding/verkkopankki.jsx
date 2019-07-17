/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { VerkkopankkiLogo } from '../../../src';
import { validateSVG } from '../common';

describe('payu logo rendering happy cases', () => {

    it('should render the payu logo', () => {
        const logo = (
            <VerkkopankkiLogo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});

describe('payu logo rendering error cases', () => {

    it('should error while rendering the payu logo with an invalid color', () => {

        let error;

        try {
            (<VerkkopankkiLogo logoColor="turquoise" />).render(html());
        } catch (err) {
            error = err;
        }

        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });
});
