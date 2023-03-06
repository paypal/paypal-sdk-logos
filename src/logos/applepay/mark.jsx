/* @flow */
/** @jsx node */

import {
  node,
  type ElementNode,
  type ComponentNode,
} from "@krakenjs/jsx-pragmatic/src";

import { getLogoCDNUrl, SVGLogo, type SVGLogoProps } from "../../lib";
import { LOGO, MARK } from "../../constants";

export const getApplepayMarkSVG = (): ElementNode => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Artwork"
      x="0px"
      y="0px"
      width="165.52107px"
      height="105.9651px"
      viewBox="0 0 165.52107 105.9651"
      enable-background="new 0 0 165.52107 105.9651"
    >
      <g>
        <path
          id="XMLID_4_"
          d="M150.69807,0H14.82318c-0.5659,0-1.1328,0-1.69769,0.0033c-0.47751,0.0034-0.95391,0.0087-1.43031,0.0217   c-1.039,0.0281-2.0869,0.0894-3.1129,0.2738c-1.0424,0.1876-2.0124,0.4936-2.9587,0.9754   c-0.9303,0.4731-1.782,1.0919-2.52009,1.8303c-0.73841,0.7384-1.35721,1.5887-1.83021,2.52   c-0.4819,0.9463-0.7881,1.9166-0.9744,2.9598c-0.18539,1.0263-0.2471,2.074-0.2751,3.1119   c-0.0128,0.4764-0.01829,0.9528-0.0214,1.4291c-0.0033,0.5661-0.0022,1.1318-0.0022,1.6989V91.142   c0,0.5671-0.0011,1.13181,0.0022,1.69901c0.00311,0.4763,0.0086,0.9527,0.0214,1.4291   c0.028,1.03699,0.08971,2.08469,0.2751,3.11069c0.1863,1.0436,0.4925,2.0135,0.9744,2.9599   c0.473,0.9313,1.0918,1.7827,1.83021,2.52c0.73809,0.7396,1.58979,1.3583,2.52009,1.8302   c0.9463,0.4831,1.9163,0.7892,2.9587,0.9767c1.026,0.1832,2.0739,0.2456,3.1129,0.2737c0.4764,0.0108,0.9528,0.0172,1.43031,0.0194   c0.56489,0.0044,1.13179,0.0044,1.69769,0.0044h135.87489c0.5649,0,1.13181,0,1.69659-0.0044   c0.47641-0.0022,0.95282-0.0086,1.4314-0.0194c1.0368-0.0281,2.0845-0.0905,3.11301-0.2737   c1.041-0.1875,2.0112-0.4936,2.9576-0.9767c0.9313-0.4719,1.7805-1.0906,2.52011-1.8302c0.7372-0.7373,1.35599-1.5887,1.8302-2.52   c0.48299-0.9464,0.78889-1.9163,0.97429-2.9599c0.1855-1.026,0.2457-2.0737,0.2738-3.11069   c0.013-0.4764,0.01941-0.9528,0.02161-1.4291c0.00439-0.5672,0.00439-1.1319,0.00439-1.69901V14.8242   c0-0.5671,0-1.1328-0.00439-1.6989c-0.0022-0.4763-0.00861-0.9527-0.02161-1.4291c-0.02811-1.0379-0.0883-2.0856-0.2738-3.1119   c-0.18539-1.0432-0.4913-2.0135-0.97429-2.9598c-0.47421-0.9313-1.093-1.7816-1.8302-2.52   c-0.73961-0.7384-1.58881-1.3572-2.52011-1.8303c-0.9464-0.4818-1.9166-0.7878-2.9576-0.9754   c-1.0285-0.1844-2.0762-0.2457-3.11301-0.2738c-0.47858-0.013-0.95499-0.0183-1.4314-0.0217C151.82988,0,151.26297,0,150.69807,0   L150.69807,0z"
        />
        <path
          id="XMLID_3_"
          fill="#FFFFFF"
          d="M150.69807,3.532l1.67149,0.0032c0.4528,0.0032,0.90561,0.0081,1.36092,0.0205   c0.79201,0.0214,1.71849,0.0643,2.58209,0.2191c0.7507,0.1352,1.38029,0.3408,1.9845,0.6484   c0.5965,0.3031,1.14301,0.7003,1.62019,1.1768c0.479,0.4797,0.87671,1.0271,1.18381,1.6302   c0.30589,0.5995,0.51019,1.2261,0.64459,1.9823c0.1544,0.8542,0.1971,1.7832,0.21881,2.5801   c0.01219,0.4498,0.01819,0.8996,0.0204,1.3601c0.00429,0.5569,0.0042,1.1135,0.0042,1.6715V91.142   c0,0.558,0.00009,1.1136-0.0043,1.6824c-0.00211,0.4497-0.0081,0.8995-0.0204,1.3501c-0.02161,0.7957-0.0643,1.7242-0.2206,2.5885   c-0.13251,0.7458-0.3367,1.3725-0.64429,1.975c-0.30621,0.6016-0.70331,1.1484-1.18022,1.6251   c-0.47989,0.48-1.0246,0.876-1.62819,1.1819c-0.5997,0.3061-1.22821,0.51151-1.97151,0.6453   c-0.88109,0.157-1.84639,0.2002-2.57339,0.2199c-0.4574,0.0103-0.9126,0.01649-1.37889,0.0187   c-0.55571,0.0043-1.1134,0.0042-1.6692,0.0042H14.82318c-0.0074,0-0.0146,0-0.0221,0c-0.5494,0-1.0999,0-1.6593-0.0043   c-0.4561-0.00211-0.9112-0.0082-1.3512-0.0182c-0.7436-0.0201-1.7095-0.0632-2.5834-0.2193   c-0.74969-0.1348-1.3782-0.3402-1.9858-0.6503c-0.59789-0.3032-1.1422-0.6988-1.6223-1.1797   c-0.4764-0.4756-0.8723-1.0207-1.1784-1.6232c-0.3064-0.6019-0.5114-1.2305-0.64619-1.9852   c-0.15581-0.8626-0.19861-1.7874-0.22-2.5777c-0.01221-0.4525-0.01731-0.9049-0.02021-1.3547l-0.0022-1.3279l0.0001-0.3506V14.8242   l-0.0001-0.3506l0.0021-1.3251c0.003-0.4525,0.0081-0.9049,0.02031-1.357c0.02139-0.7911,0.06419-1.7163,0.22129-2.5861   c0.1336-0.7479,0.3385-1.3765,0.6465-1.9814c0.3037-0.5979,0.7003-1.1437,1.17921-1.6225   c0.477-0.4772,1.02309-0.8739,1.62479-1.1799c0.6011-0.3061,1.2308-0.5116,1.9805-0.6465c0.8638-0.1552,1.7909-0.198,2.5849-0.2195   c0.4526-0.0123,0.9052-0.0172,1.3544-0.0203l1.6771-0.0033H150.69807"
        />
        <g>
          <g>
            <path d="M45.1862,35.64053c1.41724-1.77266,2.37897-4.15282,2.12532-6.58506c-2.07464,0.10316-4.60634,1.36871-6.07207,3.14276     c-1.31607,1.5192-2.4809,3.99902-2.17723,6.3293C41.39111,38.72954,43.71785,37.36345,45.1862,35.64053" />
            <path d="M47.28506,38.98252c-3.38211-0.20146-6.25773,1.91951-7.87286,1.91951c-1.61602,0-4.08931-1.81799-6.76438-1.76899     c-3.48177,0.05114-6.71245,2.01976-8.4793,5.15079c-3.63411,6.2636-0.95904,15.55471,2.57494,20.65606     c1.71618,2.5238,3.78447,5.30269,6.50976,5.20287c2.57494-0.10104,3.58421-1.66732,6.71416-1.66732     c3.12765,0,4.03679,1.66732,6.76252,1.61681c2.82665-0.05054,4.59381-2.52506,6.30997-5.05132     c1.96878-2.877,2.77473-5.65498,2.82542-5.80748c-0.0507-0.05051-5.45058-2.12204-5.50065-8.33358     c-0.05098-5.20101,4.23951-7.6749,4.44144-7.82832C52.3832,39.4881,48.5975,39.08404,47.28506,38.98252" />
          </g>
          <g>
            <path d="M76.73385,31.94381c7.35096,0,12.4697,5.06708,12.4697,12.44437c0,7.40363-5.22407,12.49704-12.65403,12.49704h-8.13892     v12.94318h-5.88037v-37.8846H76.73385z M68.41059,51.9493h6.74732c5.11975,0,8.0336-2.75636,8.0336-7.53479     c0-4.77792-2.91385-7.50845-8.00727-7.50845h-6.77365V51.9493z" />
            <path d="M90.73997,61.97864c0-4.8311,3.70182-7.79761,10.26583-8.16526l7.56061-0.44614v-2.12639     c0-3.07185-2.07423-4.90959-5.53905-4.90959c-3.28251,0-5.33041,1.57492-5.82871,4.04313h-5.35574     c0.31499-4.98859,4.56777-8.66407,11.3941-8.66407c6.69466,0,10.97377,3.54432,10.97377,9.08388v19.03421h-5.43472v-4.54194     h-0.13065c-1.60125,3.07185-5.09341,5.01441-8.71623,5.01441C94.52078,70.30088,90.73997,66.94038,90.73997,61.97864z      M108.56641,59.4846v-2.17905l-6.8,0.41981c-3.38683,0.23649-5.30306,1.73291-5.30306,4.09579     c0,2.41504,1.99523,3.99046,5.04075,3.99046C105.46823,65.81161,108.56641,63.08108,108.56641,59.4846z" />
            <path d="M119.34167,79.9889v-4.5946c0.4193,0.10483,1.36425,0.10483,1.83723,0.10483c2.6252,0,4.04313-1.10245,4.90908-3.9378     c0-0.05267,0.49931-1.68025,0.49931-1.70658l-9.97616-27.64562h6.14268l6.98432,22.47371h0.10432l6.98433-22.47371h5.9857     l-10.34483,29.06304c-2.36186,6.69517-5.0924,8.84789-10.81577,8.84789C121.17891,80.12006,119.76098,80.06739,119.34167,79.9889     z" />
          </g>
        </g>
      </g>
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  );
};

export function ApplePayMarkExternalImage({
  ...props
}: {||}): ComponentNode<SVGLogoProps> {
  const cdnUrl = getLogoCDNUrl(MARK.APPLEPAY);

  return (
    <SVGLogo
      {...props}
      name={LOGO.APPLEPAY}
      alt="Apple Pay mark"
      aria-label="Apple Pay mark"
      cdnUrl={cdnUrl}
      render={() => {
        return <svg />;
      }}
    />
  );
}

export function ApplePayMarkInlineSVG({
  ...props
}: {||}): ComponentNode<SVGLogoProps> {
  const svg = getApplepayMarkSVG();

  return (
    <SVGLogo
      {...props}
      name={LOGO.APPLEPAY}
      alt="Apple Pay mark"
      aria-label="Apple Pay mark"
      render={() => {
        return svg;
      }}
    />
  );
}

export const ApplePayMark = ApplePayMarkInlineSVG;
