/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { MybankLogo, LOGO_COLOR } from '../../../src';
import { validateSVG } from '../common';

describe('mybank logo rendering happy cases', () => {

    it('should render the mybank logo', () => {
        const logo = (
            <MybankLogo logoColor={ LOGO_COLOR.WHITE } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
