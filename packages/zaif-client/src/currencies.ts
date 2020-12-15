import { BASE_URL } from './constants'
import join from 'url-join'
import fetch from 'node-fetch'
import { Symbols } from './types/symbol'

type GetResponse = {
  id: number
  token_id: number | null
  is_token: boolean
  name: Symbols
}[]

export const getCurrencies = async (
  symbol: Symbols | 'all'
): Promise<GetResponse> => {
  const url = join(BASE_URL, 'currencies', symbol)
  const response = await fetch(url)
  const json = (await response.json()) as GetResponse

  return json
}
