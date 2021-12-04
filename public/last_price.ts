import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";
import type { ZaifPair } from "./types.ts";

import { join } from "../deps.ts";

export const LAST_PRICE = "last_price";

type LastPriceOptions = {
  pair: ZaifPair;
};

type LastPriceResponse = {
  last_price: number | null;
};

/**
 * @throws `Error`
 *
 * @see https://zaif-api-document.readthedocs.io/ja/latest/PublicAPI.html#id17
 * @beta
 */
function fetchLastPrice(
  { pair }: LastPriceOptions,
  init?: ResponseInit,
): Promise<LastPriceResponse> {
  const url = new URL(join(LAST_PRICE, pair), BASE_URL);

  return jsonFetch(url, init);
}

export { fetchLastPrice };
export type { LastPriceOptions, LastPriceResponse };
