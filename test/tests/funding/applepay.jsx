/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { ApplePayLogo, ApplePayMark, LOGO_COLOR } from '../../../src';
import { validateSVG } from '../common';

describe('Apple Pay logo rendering happy cases', () => {

    it('should render the Apple Pay logo', () => {
        const logo = (
            <ApplePayLogo logoColor={ LOGO_COLOR.WHITE } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
    it('should render the Apple Pay mark', () => {
        const mark = (
            <ApplePayMark />
        );

        const markHTML = mark.render(html());

        validateSVG(markHTML);
    });
});
