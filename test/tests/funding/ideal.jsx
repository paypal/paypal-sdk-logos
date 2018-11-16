/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { IdealLogo, LOGO_COLOR } from '../../../src';
import { validateSVG } from '../common';

describe('ideal logo rendering happy cases', () => {

    it('should render the ideal logo', () => {
        const logo = (
            <IdealLogo logoColor={ LOGO_COLOR.WHITE } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
