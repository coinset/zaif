import { BASE_URL, DEPTH } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { ZaifPair } from '@/shared/types/currency'
import type { PublicAPI } from '@/shared/types/fetch'

import { join } from 'path'

type DepthOptions = {
  pair: ZaifPair
}

type Price = number
type Amount = number

type DepthResponse = {
  asks: [Price, Amount][]
  bids: [Price, Amount][]
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

export { fetchDepth }
export type { DepthOptions, DepthResponse }
