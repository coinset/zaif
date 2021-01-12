import { BASE_URL } from './constants'
import join from 'url-join'
import fetch from 'node-fetch'
import { ZaifPair } from './types/pair'

type GetResponse = {
  last: number
  high: number
  low: number
  vwap: number
  volume: number
  bid: number
  ask: number
}

export const getTicker = async (pair: ZaifPair): Promise<GetResponse> => {
  const url = join(BASE_URL, 'ticker', pair)
  const response = await fetch(url)
  const json = (await response.json()) as GetResponse

  return json
}
