/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { BlikLogo } from '../../../src';
import { validateSVG } from '../common';

describe('blik logo rendering happy cases', () => {

    it('should render the payu logo', () => {
        const logo = (
            <BlikLogo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});

describe('blik logo rendering error cases', () => {

    it('should error while rendering the blik logo with an invalid color', () => {

        let error;

        try {
            (<BlikLogo logoColor="turquoise" />).render(html());
        } catch (err) {
            error = err;
        }
        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });
});
