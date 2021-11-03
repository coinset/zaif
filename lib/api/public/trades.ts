import { BASE_URL, TRADES } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { ZaifPair } from '@/shared/types/currency'

import { join } from 'path'

import type { PublicAPI, AskBid } from '@/shared/types'

type TradesOptions = {
  pair: ZaifPair
}

type TradesResponse = {
  date: number
  price: number
  amount: number
  tid: number
  currency_pair: string
  trade_type: AskBid
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
