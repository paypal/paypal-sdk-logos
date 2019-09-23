/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { MaximaLogo } from '../../../src';
import { validateSVG } from '../common';

describe('maxima logo rendering happy cases', () => {

    it('should render the maxima logo', () => {
        const logo = (
            <MaximaLogo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});

describe('maxima logo rendering error cases', () => {

    it('should error while rendering the maxima logo with an invalid color', () => {

        let error;

        try {
            (<MaximaLogo logoColor="turquoise" />).render(html());
        } catch (err) {
            error = err;
        }

        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });
});
