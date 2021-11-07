import { BASE_URL, CURRENCIES } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { ZaifSymbol } from '@/shared/types/currency'
import type { PublicAPI } from '@/shared/types/fetch'

import { join } from 'path'

type CurrenciesOptions = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  symbol: ZaifSymbol | 'all' | (string & {})
}

type CurrenciesResponse = {
  id: number
  token_id: number | null
  is_token: boolean
  name: string
}[]

/**
 * @throws `Error`
 *
 * @see https://zaif-api-document.readthedocs.io/ja/latest/PublicAPI.html#id7
 * @beta
 */
const fetchCurrencies: PublicAPI<CurrenciesOptions, CurrenciesResponse> = (
  { symbol },
  init
) => {
  const url = new URL(join(CURRENCIES, symbol), BASE_URL)

  return jsonFetch(url, init)
}

export { fetchCurrencies }
export type { CurrenciesOptions, CurrenciesResponse }
