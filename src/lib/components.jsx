/* @flow */
/** @jsx node */

import { svgToBase64, capitalizeFirstLetter } from 'belter/src';
import { node, html, type ElementNode, type ComponentNode } from 'jsx-pragmatic/src';

import { LOGO_CLASS, LOGO_COLOR } from '../constants';

type SVGProps = {|
    svg : ElementNode,
    [ string ] : string
|};

export function SVG(props : SVGProps) : ElementNode {
    let { svg, ...otherProps } = props;

    if (!svg) {
        throw new TypeError(`Expected svg prop`);
    }
    
    svg = svg.render(html());

    if (typeof svg !== 'string') {
        throw new TypeError(`Expected svg prop to be a string or jsx node`);
    }

    return (
        <img src={ svgToBase64(svg) } { ...otherProps } />
    );
}

export type SVGLogoProps = {|
    render : () => ElementNode,
    name : string,
    alt? : string,
    logoColor? : $Values<typeof LOGO_COLOR>
|};

export function SVGLogo({ render, name, alt, logoColor, ...props } : SVGLogoProps) : ComponentNode<SVGLogoProps> {
    return (
        <SVG
            { ...props }
            svg={ render() }
            alt={ alt || capitalizeFirstLetter(name) }
            class={ `${ LOGO_CLASS.LOGO } ${ LOGO_CLASS.LOGO }-${ name } ${ logoColor ? `${ LOGO_CLASS.LOGO_COLOR }-${ logoColor }` : '' }` }
        />
    );
}

export type SVGCardLogoProps = {|
    render : () => ElementNode,
    name : string
|};

export function SVGCardLogo({ render, name, ...props } : SVGCardLogoProps) : ComponentNode<SVGCardLogoProps> {
    return (
        <SVG
            { ...props }
            svg={ render() }
            alt={ capitalizeFirstLetter(name) }
            class={ `${ LOGO_CLASS.CARD } ${ LOGO_CLASS.CARD }-${ name }` }
        />
    );
}
