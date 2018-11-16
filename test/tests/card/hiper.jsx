/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { HiperLogo } from '../../../src';
import { validateSVG } from '../common';

describe('hiper logo rendering happy cases', () => {

    it('should render the hiper logo', () => {
        const logo = (
            <HiperLogo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
