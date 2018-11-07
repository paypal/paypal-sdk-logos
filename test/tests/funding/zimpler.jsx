/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';
import { noop } from 'belter/src';

import { ZimplerLogo, LOGO_COLOR } from '../../../src';
import { validateSVG, getNonce } from '../common';

describe('zimpler logo rendering happy cases', () => {

    it('should render the zimpler logo', () => {
        const logo = (
            <ZimplerLogo logoColor={ LOGO_COLOR.BLACK } nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});

describe('zimpler logo rendering error cases', () => {

    it('should error while rendering the zimpler logo with an invalid color', () => {

        let error;

        try {
            noop(<ZimplerLogo logoColor="turquoise" nonce={ getNonce() } />);
        } catch (err) {
            error = err;
        }

        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });
});
