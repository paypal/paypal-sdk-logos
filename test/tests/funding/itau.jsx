/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { ItauLogo, LOGO_COLOR } from '../../../src';
import { validateSVG } from '../common';

describe('itau logo rendering happy cases', () => {

    it('should render the itau logo', () => {
        const logo = (
            <ItauLogo logoColor={ LOGO_COLOR.WHITE } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});

describe('itau logo rendering error cases', () => {

    it('should error while rendering the itau logo with an invalid color', () => {

        let error;

        try {
            (<ItauLogo logoColor="turquoise" />).render(html());
        } catch (err) {
            error = err;
        }

        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });
});
