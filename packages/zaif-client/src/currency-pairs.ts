import { BASE_URL } from './constants'
import fetch from 'node-fetch'
import join from 'url-join'
import { ZaifPair } from './types/pair'

type GetResponse = {
  item_unit_step: number
  aux_japanese: string
  event_number: number
  aux_unit_point: number
  is_token: boolean
  seq: number
  title: string
  description: string
  name: string
  id: number
  currency_pair: ZaifPair
  aux_unit_step: number
  aux_unit_min: number
  item_japanese: string
  item_unit_min: number
}[]

export const getCurrencyPairs = async (
  pair: ZaifPair | 'all'
): Promise<GetResponse> => {
  const url = join(BASE_URL, 'currency_pairs', pair)
  const response = await fetch(url)
  const json = (await response.json()) as GetResponse
  return json
}
