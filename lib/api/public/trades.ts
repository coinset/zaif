import { BASE_URL, TRADES } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { ZaifPair } from '@/shared/types/currency'

import { join } from 'path'

import type { PublicAPI } from '@/shared/types'

type TradesOptions = {
  pair: ZaifPair
}

type TradesResponse = {
  date: number
  price: number
  amount: number
  tid: number
  // eslint-disable-next-line @typescript-eslint/ban-types
  currency_pair: ZaifPair | (string & {})
  trade_type: 'ask' | 'bid'
}[]

/**
 * @throws `Error`
 *
 * @see https://zaif-api-document.readthedocs.io/ja/latest/PublicAPI.html#id28
 * @beta
 */
const fetchTrades: PublicAPI<TradesOptions, TradesResponse> = (
  { pair },
  init
) => {
  const url = new URL(join(TRADES, pair), BASE_URL)
  return jsonFetch(url, init)
}

export { fetchTrades }
export type { TradesOptions, TradesResponse }
