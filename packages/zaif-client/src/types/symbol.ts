const BTC = 'btc'
const BCH = 'BCH'
const MOSAIC_CMS = 'MOSAIC.CMS'
const MONA = 'mona'
const ERC20_CMS = 'ERC20.CMS'
const ETH = 'ETH'
const JPY = 'jpy'
const XEM = 'xem'

export const symbols = [
  BTC,
  BCH,
  MOSAIC_CMS,
  MONA,
  ERC20_CMS,
  ETH,
  JPY,
  XEM
] as const

export type Symbols = typeof symbols[number]
