import { BASE_URL, DEPTH } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { ZaifPair } from '@/shared/types/currency'

import { join } from 'path'

import type { PublicAPI } from '@/shared/types'

const ALL_Depth_PAIRS: ZaifPair[] = ['btc_jpy']

type DepthOptions = {
  pair: ZaifPair
}

/**
 * Set of price and amount
 *
 * @remarks First is price, second is amount
 */
type PriceAmountSet = [number, number]

type DepthResponse = {
  asks: PriceAmountSet[]
  bids: PriceAmountSet[]
}

/**
 * @throws `Error`
 *
 * @see https://zaif-api-document.readthedocs.io/ja/latest/PublicAPI.html#id34
 * @beta
 */
const fetchDepth: PublicAPI<DepthOptions, DepthResponse> = ({ pair }, init) => {
  const url = new URL(join(DEPTH, pair), BASE_URL)
  return jsonFetch(url, init)
}

export { fetchDepth, ALL_Depth_PAIRS }
export type { DepthResponse }
