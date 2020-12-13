import { BASE_URL } from './constants'
import fetch from 'node-fetch'
import join from 'url-join'

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
  currency_pair: string
  aux_unit_step: number
  aux_unit_min: number
  item_japanese: string
  item_unit_min: number
}[]

type CurrencyPair = 'btc_jpy' | 'all'

export const getCurrencyPairs = async (pair: CurrencyPair) => {
  const url = join(BASE_URL, 'currency_pairs', pair)
  const response = await fetch(url)
  const json = (await response.json()) as GetResponse
  console.log(json)
  return json
}

getCurrencyPairs('all')
