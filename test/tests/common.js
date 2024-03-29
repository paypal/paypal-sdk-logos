/* @flow */

import { COUNTRY, LANG, type LocaleType } from "@paypal/sdk-constants/src";

export function validateSVG(htmlString: string) {
  if (htmlString.indexOf("<img") === -1) {
    throw new Error(`Expected image tag`);
  }

  if (htmlString.indexOf('src="') === -1) {
    throw new Error(`Expected src prop`);
  }
}

export function validateExternalSVG(htmlString: string) {
  validateSVG(htmlString);

  if (htmlString.indexOf("www.paypalobjects.com") === -1) {
    throw new Error(`Expected logo to render from CDN`);
  }
}

export function getLocale(
  country?: $Values<typeof COUNTRY> = COUNTRY.US,
  lang?: $Values<typeof LANG> = LANG.EN
): LocaleType {
  return { country, lang };
}
