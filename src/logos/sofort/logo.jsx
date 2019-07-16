/* @flow */
/** @jsx node */

import { node, type ComponentNode } from 'jsx-pragmatic/src';

import { SVGLogo, getLogoColors, type SVGLogoProps } from '../../lib';
import { LOGO_COLOR, LOGO } from '../../constants';
import { type LogoColorMap } from '../../types';

const LOGO_COLORS : LogoColorMap = {
    [ LOGO_COLOR.DEFAULT ]: {
        primary:   '#FFFFFF',
        secondary: '#EB6F93'
    },
    [ LOGO_COLOR.WHITE ]: {
        primary:   '#ffffff',
        secondary: '#ffffff'
    },
    [ LOGO_COLOR.BLACK ]: {
        primary:   '#333030',
        secondary: '#333030'
    }
};

export function SofortLogo({ logoColor = LOGO_COLOR.DEFAULT, ...props } : { logoColor? : $Values<typeof LOGO_COLOR> }) : ComponentNode<SVGLogoProps> {

    const { primary, secondary } = getLogoColors(LOGO.SOFORT, LOGO_COLORS, logoColor);

    return (
        <SVGLogo

            { ...props }
            name={ LOGO.SOFORT }
            logoColor={ logoColor }
            render={ () => {
                return (
                    <svg width="138px" height="32px" viewBox="0 0 138 44" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-24.000000, -436.000000)">
                                <g transform="translate(24.000000, 436.000000)">
                                    <g stroke-width="1">
                                        <g mask="url(#mask-2)" fill-rule="evenodd" fill={ secondary }>
                                            <rect x="0" y="0" width="138" height="44" />
                                        </g>
                                        <g transform="translate(16.000000, 5.000000)" fill-rule="nonzero" fill={ primary }>
                                            <path d="M8.55107133,24.0386247 C9.22879411,24.6861671 9.24327745,25.7425763 8.58354713,26.4073957 L8.45110904,26.5423627 C7.79086355,27.1983175 6.69897696,27.2144066 6.01224032,26.5722566 L2.17289107,22.8768054 C1.11590922,21.8458618 0.96410333,20.5754632 1.63678914,19.9042365 L1.77159366,19.7668966 C2.32598975,19.2126062 3.22970309,19.1541252 3.86016464,19.6360673 C4.15990129,19.8651943 4.59424066,19.8150784 4.83028878,19.5241303 C5.0663369,19.2331822 5.01470714,18.8115781 4.7149705,18.5824512 C3.5284497,17.675442 1.82767241,17.7855026 0.775688111,18.8373698 L0.64137931,18.9742146 C-0.604692328,20.2175294 -0.354282964,22.3130983 1.19683948,23.8259789 L5.04656839,27.5313427 C6.28726435,28.6915831 8.24857838,28.6626828 9.44549924,27.4733999 L9.58132339,27.3350447 C10.7636633,26.1435999 10.7376475,24.2460125 9.52028002,23.0828568 C9.24837962,22.8230647 8.81099605,22.8264175 8.54335646,23.0903455 C8.27571687,23.3542735 8.27917094,23.7788325 8.55107133,24.0386247 Z" />
                                            <path d="M6.25316137,4.00463901 L7.82450265,16.5582851 C7.87051944,16.9259191 8.21485204,17.1877352 8.59359104,17.1430676 C8.97233003,17.0984001 9.24205468,16.7641637 9.19603789,16.3965297 L7.61982167,3.8039371 L7.60423898,3.7221812 C7.33535457,2.67817937 8.00377183,1.50751858 8.89431251,1.32322405 C9.39350944,1.21977105 9.9143927,1.3151232 10.3403167,1.58785163 C10.7662406,1.86058007 11.0615522,2.28785533 11.1600097,2.7738347 L13.8959914,14.1304918 C13.9828807,14.4910975 14.3544774,14.7150537 14.7259757,14.6307121 C15.097474,14.5463704 15.3281952,14.1856693 15.2413059,13.8250637 L12.5104951,2.49173037 C12.3457557,1.67638792 11.8361294,0.939028727 11.1011021,0.468374716 C10.3660749,-0.00227929421 9.46717414,-0.16683078 8.60603358,0.0116310396 C6.93120471,0.358231477 5.83076908,2.26447015 6.25316137,4.00463901 Z" />
                                            <path d="M20.6946385,18.7562157 L23.8016655,3.70806757 C24.1627527,2.08823591 23.171098,0.461930237 21.5243733,-0.0131380565 C19.6806639,-0.465927398 17.8331452,0.588982967 17.3518411,2.34622562 L13.9119445,13.7963592 C13.8051409,14.1518899 14.01548,14.5241472 14.3817501,14.6278193 C14.7480201,14.7314913 15.1315221,14.5273196 15.2383257,14.1717889 L18.6826501,2.70623335 C18.9740354,1.64312835 20.0755418,1.01418179 21.1583367,1.27975309 C22.0849843,1.54768368 22.6596154,2.49007404 22.4491321,3.43451398 L19.3399561,18.4926732 C19.2649826,18.8557898 19.5074605,19.20915 19.8815457,19.2819253 C20.2556309,19.3547006 20.6196649,19.1193324 20.6946385,18.7562157 Z" />
                                            <path d="M12.8691892,33.2538889 C7.94394615,33.2538889 3.83027027,29.7443025 3.83027027,24.757037 C3.83027027,24.3866994 3.52098374,24.0864815 3.13945946,24.0864815 C2.75793518,24.0864815 2.44864865,24.3866994 2.44864865,24.757037 C2.44864865,30.5262551 7.21772847,34.595 12.8691892,34.595 C13.2507135,34.595 13.56,34.2947821 13.56,33.9244444 C13.56,33.5541068 13.2507135,33.2538889 12.8691892,33.2538889 Z" />
                                            <path d="M10.432735,21.523985 C10.32527,21.8997898 10.0848456,22.2268322 9.75367873,22.4476857 L9.6059963,22.5431752 C8.81135162,23.0620226 7.73737824,22.860771 7.20041193,22.0943828 L4.18000129,17.7280455 C3.35596459,16.5133712 3.46371228,15.2353866 4.25688098,14.7069262 L4.40481451,14.6112693 C5.42222949,14.0388226 6.28666557,14.4731364 7.17531296,15.7298428 L9.70102318,19.3822431 C9.91366027,19.6897297 10.3428334,19.7716746 10.6596081,19.5652723 C10.9763829,19.3588699 11.0608031,18.9422806 10.848166,18.634794 L8.31843628,14.9766458 C7.06906995,13.2097547 5.52101546,12.4319743 3.67452351,13.4735669 L3.48275305,13.5961381 C1.99799965,14.5853027 1.82065576,16.6887608 3.02954142,18.4706511 L6.05567438,22.8452879 C7.02249844,24.2252138 8.95163568,24.5867144 10.3747579,23.6575027 L10.5280578,23.5583063 C11.1349164,23.1536749 11.5696876,22.5622681 11.7640218,21.8826817 C11.8660652,21.5258361 11.650769,21.1562586 11.2831443,21.0572072 C10.9155196,20.9581559 10.5347784,21.1671394 10.432735,21.523985 Z" />
                                            <path d="M15.0071132,23.7451482 C13.5716937,24.5235597 12.6792061,25.9892512 12.5683793,28.2063913 C12.5498892,28.5762937 12.8438232,28.8907086 13.2248991,28.9086565 C13.6059751,28.9266044 13.9298874,28.6412889 13.9483774,28.2713865 C14.048744,26.2635083 14.8525076,25.179561 16.152515,24.704555 C16.8482268,24.4503509 17.6046979,24.3996276 18.2711038,24.4684707 C18.3606758,24.477724 18.4201821,24.4863334 18.4442402,24.4906858 C19.3337661,24.6516105 19.6045203,23.3685934 18.7214531,23.1770635 L13.4090206,22.0248413 C10.9225036,21.3638621 10.5472361,20.4704561 11.0076227,18.9808309 C11.2064187,18.3317669 11.6147718,17.9986147 12.2306776,17.865687 C12.6373189,17.7779238 13.0941226,17.7888366 13.5282841,17.8626882 C13.6538003,17.8840387 13.7420731,17.9043308 13.7811352,17.9152244 L21.8451208,19.7433694 C21.8985237,19.7533496 21.9361525,19.763479 22.0020154,19.7924494 C22.1354002,19.8511201 22.2742678,19.9453829 22.4097247,20.0858789 C22.9502905,20.6465543 23.2485509,21.7041959 23.09758,23.4414127 C22.571614,29.5314735 19.6483005,33.3130406 12.7195863,33.2539148 C12.3380768,33.2506592 12.0260833,33.5482264 12.0227294,33.9185497 C12.0193755,34.288873 12.3259312,34.5917185 12.7074407,34.5949741 C20.4944029,34.6614237 23.8949457,30.262518 24.474342,23.5537955 C24.6558214,21.4655214 24.2521788,20.0341915 23.4184922,19.1694909 C22.9588119,18.69271 22.4737204,18.4793376 22.1015974,18.4267977 L14.1289333,16.6177417 C14.0788208,16.6028791 13.9434651,16.5717637 13.7667652,16.5417067 C13.169132,16.4400483 12.5401983,16.4250234 11.9308051,16.5565455 C10.8493625,16.7899475 10.0333579,17.4556796 9.68377867,18.5970598 C9.0191343,20.7475737 9.72889785,22.4373206 13.0761134,23.3260543 L15.0071132,23.7451482 Z" />
                                        </g>
                                    </g>
                                    <path d="M60.72,30.286 C63.712,30.286 66,28.284 66,25.336 C66,22.608 64.064,21.42 61.688,20.716 C60.17,20.276 59.224,19.946 59.224,18.868 C59.224,17.966 59.884,17.262 60.918,17.262 C61.798,17.262 62.458,17.768 62.92,18.538 L65.406,16.976 C64.636,15.26 62.898,14.38 61.006,14.38 C58.014,14.38 56.122,16.536 56.122,19.022 C56.122,21.002 57.31,22.542 60.258,23.4 C61.864,23.862 62.876,24.17 62.876,25.446 C62.876,26.634 62.018,27.382 60.764,27.382 C59.422,27.382 58.41,26.524 57.794,25.732 L55.726,27.822 C56.826,29.318 58.63,30.286 60.72,30.286 Z M73.546,30.286 C70.378,30.286 67.804,27.756 67.804,24.676 C67.804,21.596 70.378,19.066 73.546,19.066 C76.714,19.066 79.288,21.596 79.288,24.676 C79.288,27.756 76.714,30.286 73.546,30.286 Z M73.546,27.47 C75.086,27.47 76.296,26.26 76.296,24.676 C76.296,23.092 75.086,21.882 73.546,21.882 C72.006,21.882 70.796,23.092 70.796,24.676 C70.796,26.26 72.006,27.47 73.546,27.47 Z M87.428,17.416 L87.428,14.6 L86.988,14.6 C83.336,14.6 81.554,17.02 81.554,19.88 L81.554,30 L84.546,30 L84.546,25.556 C84.546,24.082 85.69,23.026 87.34,22.982 L87.34,20.122 C86.152,20.122 85.206,20.474 84.546,21.178 L84.546,20.034 C84.546,18.186 85.756,17.35 87.428,17.416 Z M95.018,30.286 C91.85,30.286 89.276,27.756 89.276,24.676 C89.276,21.596 91.85,19.066 95.018,19.066 C98.186,19.066 100.76,21.596 100.76,24.676 C100.76,27.756 98.186,30.286 95.018,30.286 Z M95.018,27.47 C96.558,27.47 97.768,26.26 97.768,24.676 C97.768,23.092 96.558,21.882 95.018,21.882 C93.478,21.882 92.268,23.092 92.268,24.676 C92.268,26.26 93.478,27.47 95.018,27.47 Z M106.018,20.562 L106.018,19.352 L103.114,19.352 L103.114,30 L106.106,30 L106.106,25.138 C106.106,23.378 107.14,22.388 108.944,22.388 L108.944,19.176 C107.58,19.132 106.612,19.594 106.018,20.562 Z M114.378,24.566 L114.378,21.97 C115.038,22.674 115.984,23.026 117.172,23.026 L117.172,20.166 C115.544,20.122 114.378,19.044 114.378,17.592 L114.378,15.92 L111.386,15.92 L111.386,24.72 C111.386,27.58 113.168,30 116.82,30 L117.26,30 L117.26,27.184 C115.588,27.25 114.378,26.414 114.378,24.566 Z M121.572,30.176 C122.672,30.176 123.574,29.274 123.574,28.174 C123.574,27.074 122.672,26.172 121.572,26.172 C120.472,26.172 119.57,27.074 119.57,28.174 C119.57,29.274 120.472,30.176 121.572,30.176 Z" fill={ primary } />
                                </g>
                            </g>
                        </g>
                    </svg>
                );
            } }
        />
    );
}
