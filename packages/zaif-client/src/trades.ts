import { BASE_URL } from './constants'
import join from 'url-join'
import fetch from 'node-fetch'
import { ZaifPair } from './types/pair'

type BaseResponse = {
  price: number
  amount: number
  tid: number
  currency_pair: ZaifPair
  trade_type: 'ask' | 'bid'
}

type GetResponse = ({
  date: Date
} & BaseResponse)[]

type ApiResponse = ({
  date: number
} & BaseResponse)[]

export const getTrades = async (pair: ZaifPair): Promise<GetResponse> => {
  const url = join(BASE_URL, 'trades', pair)
  const response = await fetch(url)
  const json = (await response.json()) as ApiResponse

  const getResponse: GetResponse = json.map(({ date, ...rest }) => {
    const parsedDate = new Date(date * 1000)
    return {
      date: parsedDate,
      ...rest
    }
  })

  return getResponse
}
