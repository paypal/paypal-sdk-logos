/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { MultiblancoLogo, LOGO_COLOR } from '../../../src';
import { validateSVG } from '../common';

describe('mulitblanco logo rendering happy cases', () => {

    it('should render the multiblancoo logo', () => {
        const logo = (
            <MultiblancoLogo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });

    it('should render the multiblanco white logo', () => {
        const logo = (
            <MultiblancoLogo logoColor={ LOGO_COLOR.WHITE } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
