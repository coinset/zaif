import { BASE_URL } from './constants'
import join from 'url-join'
import fetch from 'node-fetch'
import { ZaifPair } from './types/pair'

type PriceAmount = [number, number]

type GetResponse = {
  asks: PriceAmount[][]
  bids: PriceAmount[][]
}

export const getDepth = async (pair: ZaifPair): Promise<GetResponse> => {
  const url = join(BASE_URL, 'depth', pair)
  const response = await fetch(url)
  const json = (await response.json()) as GetResponse

  return json
}
