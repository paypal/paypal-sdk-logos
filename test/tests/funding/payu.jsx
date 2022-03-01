/* @flow */
/** @jsx node */

import { node, html } from '@krakenjs/jsx-pragmatic/src';

import { PayuLogo } from '../../../src';
import { validateSVG } from '../common';

describe('payu logo rendering happy cases', () => {

    it('should render the payu logo', () => {
        const logo = (
            <PayuLogo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
