import { BASE_URL } from './constants'
import join from 'url-join'
import fetch from 'node-fetch'
import { ZaifPair } from './types/pair'

type GetResponse = {
  last_price: number
}

export const getLastPrice = async (pair: ZaifPair): Promise<GetResponse> => {
  const url = join(BASE_URL, 'last_price', pair)
  const response = await fetch(url)
  const json = (await response.json()) as GetResponse

  return json
}

getLastPrice('btc_jpy').then((e) => {
  console.log(e)
})
