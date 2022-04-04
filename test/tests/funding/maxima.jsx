/* @flow */
/** @jsx node */

import { node, html } from '@krakenjs/jsx-pragmatic/src';

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
