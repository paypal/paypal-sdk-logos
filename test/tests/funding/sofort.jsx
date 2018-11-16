/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { SofortLogo, LOGO_COLOR } from '../../../src';
import { validateSVG } from '../common';

describe('sofort logo rendering happy cases', () => {

    it('should render the sofort logo', () => {
        const logo = (
            <SofortLogo logoColor={ LOGO_COLOR.WHITE } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
