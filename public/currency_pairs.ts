import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";
import type { ZaifPair } from "./types.ts";
import { join } from "../deps.ts";

export const CURRENCY_PAIRS = "currency_pairs";

type CurrencyPairsOptions = {
  pair: ZaifPair | "all";
};

type CurrencyPairsResponse = CurrencyPairInfo[];

type CurrencyPairInfo = {
  id: number;
  name: string;
  title: string;
  currency_pair: ZaifPair | (string & {});
  description: string;
  is_token: boolean;
  event_number: number;
  item_unit_min: number;
  item_unit_step: number;
  aux_unit_min: number;
  aux_unit_step: number;
  seq: number;
  aux_japanese: string;
  item_japanese: string;
  aux_unit_point: number;
};

/**
 * @throws `Error`
 *
 * @see https://zaif-api-document.readthedocs.io/ja/latest/PublicAPI.html#id12
 * @beta
 */
function fetchCurrencyPairs(
  { pair }: CurrencyPairsOptions,
  init?: ResponseInit,
): Promise<CurrencyPairsResponse> {
  const url = new URL(join(CURRENCY_PAIRS, pair), BASE_URL);

  return jsonFetch(url, init);
}

export { fetchCurrencyPairs };
export type { CurrencyPairsOptions, CurrencyPairsResponse };
