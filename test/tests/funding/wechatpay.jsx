/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';

import { WechatpayLogo, LOGO_COLOR } from '../../../src';
import { validateSVG } from '../common';

describe('wechatpay logo rendering happy cases', () => {

    it('should render the wechatpay logo', () => {
        const logo = (
            <WechatpayLogo logoColor={ LOGO_COLOR.BLACK } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});

describe('wechatpay logo rendering error cases', () => {

    it('should error while rendering the wechatpay logo with an invalid color', () => {

        let error;

        try {
            (<WechatpayLogo logoColor="turquoise" />).render(html());
        } catch (err) {
            error = err;
        }

        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });
});
