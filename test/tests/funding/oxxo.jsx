/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { OxxoLogo } from '../../../src';
import { validateSVG } from '../common';

describe('oxxo logo rendering happy cases', () => {

    it('should render the oxxo logo', () => {
        const logo = (
            <OxxoLogo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});

describe('oxxo logo rendering error cases', () => {

    it('should error while rendering the oxxo logo with an invalid color', () => {

        let error;

        try {
            (<OxxoLogo logoColor="turquoise" />).render(html());
        } catch (err) {
            error = err;
        }

        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });
});
