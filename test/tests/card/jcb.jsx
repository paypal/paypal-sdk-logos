/* @flow */
/** @jsx node */

import { node, html } from '@krakenjs/jsx-pragmatic/src';

import { JcbLogo } from '../../../src';
import { validateSVG } from '../common';

describe('jcb logo rendering happy cases', () => {

    it('should render the jcb logo', () => {
        const logo = (
            <JcbLogo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
