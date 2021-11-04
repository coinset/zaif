import { BASE_URL, TICKER } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { ZaifPair } from '@/shared/types/currency'

import { join } from 'path'

import type { PublicAPI } from '@/shared/types'

type TickerOptions = {
  pair: ZaifPair
}

type TickerResponse = {
  last: number
  bid: number
  ask: number
  high: number
  low: number
  vwap: number
  volume: number
}

/**
 * @throws `Error`
 *
 * @see https://zaif-api-document.readthedocs.io/ja/latest/PublicAPI.html#id22
 * @beta
 */
const fetchTicker: PublicAPI<TickerOptions, TickerResponse> = (
  { pair },
  init
) => {
  const url = new URL(join(TICKER, pair), BASE_URL)
  return jsonFetch(url, init)
}

export { fetchTicker }
export type { TickerResponse }
