import { BASE_URL, CURRENCY_PAIRS } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { ZaifPair } from '@/shared/types/currency'

import { join } from 'path'

import type { PublicAPI } from '@/shared/types'

type CurrencyPairsOptions = {
  pair: ZaifPair | 'all'
}

type CurrencyPairsResponse = CurrencyPairInfo[]

type CurrencyPairInfo = {
  name: string
  title: string
  currency_pair: string
  description: string
  is_token: boolean
  event_number: number
  item_unit_min: number
  item_unit_step: number
  aux_unit_min: number
  aux_unit_step: number
  seq: number
  aux_japanese: string
  item_japanese: string
  aux_unit_point: number
}

/**
 * @throws `Error`
 *
 * @see https://zaif-api-document.readthedocs.io/ja/latest/PublicAPI.html#id12
 * @beta
 */
const fetchCurrencyPairs: PublicAPI<
  CurrencyPairsOptions,
  CurrencyPairsResponse
> = ({ pair }, init) => {
  const url = new URL(join(CURRENCY_PAIRS, pair), BASE_URL)

  return jsonFetch(url, init)
}

export { fetchCurrencyPairs }
export type { CurrencyPairsOptions, CurrencyPairsResponse }
