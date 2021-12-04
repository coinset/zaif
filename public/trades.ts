import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";
import type { ZaifPair } from "./types.ts";

import { join } from "../deps.ts";

export const TRADES = "trades";

type TradesOptions = {
  pair: ZaifPair;
};

/**
 * cscmsxem_mosaic.cms returns [{}]
 */
type TradesResponse = {
  date: number;
  price: number;
  amount: number;
  tid: number;
  currency_pair: ZaifPair | (string & {});
  trade_type: "ask" | "bid";
}[];

/**
 * @throws `Error`
 *
 * @see https://zaif-api-document.readthedocs.io/ja/latest/PublicAPI.html#id28
 * @beta
 */
async function fetchTrades(
  { pair }: TradesOptions,
  init?: ResponseInit,
): Promise<TradesResponse> {
  const url = new URL(join(TRADES, pair), BASE_URL);

  const result = await jsonFetch<TradesResponse>(url, init);

  // pair of cscmsxem_mosaic.cms returns [{}]
  if (result.length === 1 && !("data" in result[0])) {
    return [];
  }

  return result;
}

export { fetchTrades };
export type { TradesOptions, TradesResponse };
