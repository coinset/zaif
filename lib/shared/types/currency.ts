import type { StrictExtract } from '@/utils/types'
import type {
  jpy,
  MOSAIC_CMS,
  ERC20_CMS,
  btc,
  ETH,
  xem,
  mona,
  XYM,
  BCH,
  all_pairs
} from 'cryptocurrency-types'

type HandingSymbol =
  | jpy
  | MOSAIC_CMS
  | ERC20_CMS
  | btc
  | ETH
  | xem
  | mona
  | XYM
  | BCH

type ZaifSymbol = HandingSymbol

type ZaifPair = StrictExtract<
  all_pairs,
  | 'ncxc_btc'
  | 'cicc_jpy'
  | 'jpyz_jpy'
  | 'btc_jpy'
  | 'xcp_btc'
  | 'zaif_jpy'
  | 'erc20.cms_jpy'
  | 'xym_btc'
  | 'mona_btc'
  | 'zaif_btc'
  | 'bch_btc'
  | 'eth_jpy'
  | 'eth_btc'
  | 'bch_jpy'
  | 'mosaic.cms_btc'
  | 'xem_btc'
  | 'fscc_btc'
  | 'cicc_btc'
  | 'xcp_jpy'
  | 'xym_jpy'
  | 'mosaic.cms_jpy'
  | 'fscc_jpy'
  | 'xem_jpy'
  | 'erc20.cms_btc'
  | 'ncxc_jpy'
  | 'mona_jpy'
>

export type { ZaifSymbol, ZaifPair }
