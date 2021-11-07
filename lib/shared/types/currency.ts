import type {
  jpy,
  MOSAIC_CMS,
  ERC20_CMS,
  btc,
  ETH,
  XYM,
  BCH,
  Pair,
  xym,
  cicc,
  ncxc,
  eth,
  erc20_cms,
  mona,
  bch,
  xem,
  fscc,
  xcp,
  mosaic_cms,
  jpyz,
  zaif
} from 'cryptocurrency-types'

type ZaifSymbol =
  | jpy
  | MOSAIC_CMS
  | ERC20_CMS
  | btc
  | ETH
  | xem
  | mona
  | XYM
  | BCH

type ZaifPair =
  | Pair<
      | xym
      | cicc
      | ncxc
      | eth
      | erc20_cms
      | mona
      | bch
      | xem
      | fscc
      | xcp
      | btc
      | mosaic_cms
      | jpyz
      | zaif,
      jpy
    >
  | Pair<
      | eth
      | cicc
      | xcp
      | mosaic_cms
      | fscc
      | ncxc
      | xem
      | mona
      | zaif
      | xym
      | bch
      | erc20_cms,
      btc
    >
  | Pair<'csbtc', btc>
  | Pair<'cscmsxem', mosaic_cms>
  | Pair<'cszaif', zaif>
  | Pair<'csxem', xem>
  | Pair<'cseth', eth>
  | Pair<'cscmseth', erc20_cms>

export type { ZaifSymbol, ZaifPair }
