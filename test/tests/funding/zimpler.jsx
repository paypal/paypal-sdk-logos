/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { ZimplerLogo } from '../../../src';
import { validateSVG } from '../common';

describe('zimpler logo rendering happy cases', () => {

    it('should render the zimpler logo', () => {
        const logo = (
            <ZimplerLogo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});

describe('zimpler logo rendering error cases', () => {

    it('should error while rendering the zimpler logo with an invalid color', () => {

        let error;

        try {
            (<ZimplerLogo logoColor="turquoise" />).render(html());
        } catch (err) {
            error = err;
        }

        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });
});
