/* @flow */
/** @jsx node */

import { svgToBase64 } from 'belter/src';
import { node, html, ElementNode } from 'jsx-pragmatic/src';

import { LOGO_CLASS, LOGO_COLOR } from '../constants';

export function SVG(props : { [string] : mixed }) : ElementNode {
    let { svg, ...otherProps } = props;

    if (!svg) {
        throw new TypeError(`Expected svg prop`);
    }
    
    if (svg instanceof ElementNode) {
        svg = svg.render(html());
    }

    if (typeof svg !== 'string') {
        throw new TypeError(`Expected svg prop to be a string or jsx node`);
    }

    return (
        <img src={ svgToBase64(svg) } { ...otherProps } />
    );
}

export function SVGLogo({ render, name, logoColor, nonce } : { render : () => ElementNode, name : string, logoColor? : $Values<typeof LOGO_COLOR>, nonce : string }) : ElementNode {
    return (
        <SVG
            svg={ render() }
            alt={ name }
            nonce={ nonce }
            class={ `${ LOGO_CLASS.LOGO } ${ LOGO_CLASS.LOGO }-${ name } ${ logoColor ? `${ LOGO_CLASS.LOGO_COLOR }-${ logoColor }` : '' }` }
        />
    );
}

export function SVGCardLogo({ render, name, nonce } : { render : () => ElementNode, name : string, nonce : string }) : ElementNode {
    return (
        <SVG
            nonce={ nonce }
            svg={ render() }
            alt={ name }
            class={ `${ LOGO_CLASS.CARD } ${ LOGO_CLASS.CARD }-${ name }` }
        />
    );
}
