/* @flow */
/** @jsx node */

import { node, html } from '@krakenjs/jsx-pragmatic/src';

import { VisaLogo } from '../../../src';
import { validateSVG } from '../common';

describe('visa logo rendering happy cases', () => {

    it('should render the visa logo', () => {
        const logo = (
            <VisaLogo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
