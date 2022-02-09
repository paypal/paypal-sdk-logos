/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { MultibancoLogo, LOGO_COLOR } from '../../../src';
import { validateSVG } from '../common';

describe('mulitblanco logo rendering happy cases', () => {

    it('should render the multibanco logo', () => {
        const logo = (
            <MultibancoLogo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });

    it('should render the multibanco white logo', () => {
        const logo = (
            <MultibancoLogo logoColor={ LOGO_COLOR.WHITE } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
