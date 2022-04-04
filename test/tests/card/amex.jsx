/* @flow */
/** @jsx node */

import { node, html } from '@krakenjs/jsx-pragmatic/src';

import { AmexLogo } from '../../../src';
import { validateSVG } from '../common';

describe('amex logo rendering happy cases', () => {

    it('should render the amex logo', () => {
        const logo = (
            <AmexLogo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
