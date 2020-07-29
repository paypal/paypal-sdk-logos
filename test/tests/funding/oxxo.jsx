/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { OxxoLogo } from '../../../src';
import { validateSVG } from '../common';

describe('oxxo logo rendering happy cases', () => {

    it('should render the oxxo logo', () => {
        const logo = (
            <OxxoLogo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
