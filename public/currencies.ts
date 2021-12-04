import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";
import type { ZaifSymbol } from "./types.ts";
import { join } from "../deps.ts";

export const CURRENCIES = "currencies";

export type CurrenciesOptions = {
  symbol: ZaifSymbol | "all" | (string & {});
};

export type CurrenciesResponse = {
  id: number;
  token_id: number | null;
  is_token: boolean;
  name: string;
}[];

/**
 * @throws `Error`
 *
 * @see https://zaif-api-document.readthedocs.io/ja/latest/PublicAPI.html#id7
 * @beta
 */
export function fetchCurrencies(
  { symbol }: CurrenciesOptions,
  init?: ResponseInit,
): Promise<CurrenciesResponse> {
  const url = new URL(join(CURRENCIES, symbol), BASE_URL);

  return jsonFetch<CurrenciesResponse>(url, init);
}
