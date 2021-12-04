import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";
import type { ZaifPair } from "./types.ts";

import { join } from "../deps.ts";

export const DEPTH = "depth";

type DepthOptions = {
  pair: ZaifPair;
};

type DepthResponse = {
  /** price/amount */
  asks: [number, number][];

  /** price/amount */
  bids: [number, number][];
};

/**
 * @throws `Error`
 *
 * @see https://zaif-api-document.readthedocs.io/ja/latest/PublicAPI.html#id34
 * @beta
 */
function fetchDepth(
  { pair }: DepthOptions,
  init?: ResponseInit,
): Promise<DepthResponse> {
  const url = new URL(join(DEPTH, pair), BASE_URL);
  return jsonFetch(url, init);
}

export { fetchDepth };
export type { DepthOptions, DepthResponse };
