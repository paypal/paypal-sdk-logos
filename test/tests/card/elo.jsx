/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { EloLogo } from '../../../src';
import { validateSVG } from '../common';

describe('elo logo rendering happy cases', () => {

    it('should render the elo logo', () => {
        const logo = (
            <EloLogo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
