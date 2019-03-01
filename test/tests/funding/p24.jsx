/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { P24Logo } from '../../../src';
import { validateSVG } from '../common';

describe('p24 logo rendering happy cases', () => {

    it('should render the p24 logo', () => {
        const logo = (
            <P24Logo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});

describe('p24 logo rendering error cases', () => {

    it('should error while rendering the p24 logo with an invalid color', () => {

        let error;

        try {
            (<P24Logo logoColor="turquoise" />).render(html());
        } catch (err) {
            error = err;
        }

        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });
});
