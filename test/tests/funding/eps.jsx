/* @flow */
/** @jsx node */

import { node, html } from '@krakenjs/jsx-pragmatic/src';

import { EpsLogo, LOGO_COLOR } from '../../../src';
import { validateSVG } from '../common';

describe('eps logo rendering happy cases', () => {

    it('should render the eps logo', () => {
        const logo = (
            <EpsLogo logoColor={ LOGO_COLOR.WHITE } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
