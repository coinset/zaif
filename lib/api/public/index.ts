export { fetchTicker } from '@/api/public/ticker'
export { TickerOptions, TickerResponse } from '@/api/public/ticker'

export { fetchCurrencies } from '@/api/public/currencies'
export type {
  CurrenciesOptions,
  CurrenciesResponse
} from '@/api/public/currencies'

export { fetchTrades } from '@/api/public/trades'
export type { TradesOptions, TradesResponse } from '@/api/public/trades'

export { fetchCurrencyPairs } from '@/api/public/currency_pairs'
export type {
  CurrencyPairsOptions,
  CurrencyPairsResponse
} from '@/api/public/currency_pairs'

export { fetchDepth } from '@/api/public/depth'
export type { DepthOptions, DepthResponse } from '@/api/public/depth'

export { fetchLastPrice } from '@/api/public/last_price'
export type {
  LastPriceOptions,
  LastPriceResponse
} from '@/api/public/last_price'
