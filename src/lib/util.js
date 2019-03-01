/* @flow */

import { LOGO_COLOR } from '../constants';
import type { LogoColorMap, LogoColors } from '../types';

export function getLogoColors(name : string, logoColorMap : LogoColorMap, logoColor : ?$Values<typeof LOGO_COLOR>) : LogoColors {
    const colors = logoColor ? logoColorMap[logoColor] : logoColorMap[LOGO_COLOR.DEFAULT];
    if (!colors) {
        throw new Error(`No ${ logoColor || LOGO_COLOR.DEFAULT } logo available for ${ name }`);
    }
    return colors;
}
