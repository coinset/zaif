import { BASE_URL, LAST_PRICE } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { ZaifPair } from '@/shared/types/currency'
import type { PublicAPI } from '@/shared/types/fetch'

import { join } from 'path'

type LastPriceOptions = {
  pair: ZaifPair
}

type LastPriceResponse = {
  last_price: number
}

/**
 * @throws `Error`
 *
 * @see https://zaif-api-document.readthedocs.io/ja/latest/PublicAPI.html#id17
 * @beta
 */
const fetchLastPrice: PublicAPI<LastPriceOptions, LastPriceResponse> = (
  { pair },
  init
) => {
  const url = new URL(join(LAST_PRICE, pair), BASE_URL)

  return jsonFetch(url, init)
}

export { fetchLastPrice }
export type { LastPriceOptions, LastPriceResponse }
