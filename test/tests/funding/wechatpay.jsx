/* @flow */
/** @jsx node */

import { node, html } from '@krakenjs/jsx-pragmatic/src';

import { WechatpayLogo } from '../../../src';
import { validateSVG } from '../common';

describe('wechatpay logo rendering happy cases', () => {

    it('should render the wechatpay logo', () => {
        const logo = (
            <WechatpayLogo />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});
