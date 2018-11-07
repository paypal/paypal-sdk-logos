/* @flow */

import { LOGO_COLOR } from './constants';

export type LogoColorMap = {
    [ $Values<typeof LOGO_COLOR> ] : {
        [string] : string
    }
};
