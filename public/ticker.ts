import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";
import type { ZaifPair } from "./types.ts";

import { join } from "../deps.ts";

export const TICKER = "ticker";

export type TickerOptions = {
  pair: ZaifPair;
};

export type TickerResponse = {
  last: number | null;
  bid: number | null;
  ask: number | null;
  high: number | null;
  low: number | null;
  vwap: number | null;
  volume: number | null;
};

/**
 * @throws `Error`
 *
 * @see https://zaif-api-document.readthedocs.io/ja/latest/PublicAPI.html#id22
 * @beta
 */
export function fetchTicker(
  { pair }: TickerOptions,
  init?: ResponseInit,
): Promise<TickerResponse> {
  const url = new URL(join(TICKER, pair), BASE_URL);
  return jsonFetch(url, init);
}
