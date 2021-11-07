import { fetchTrades } from '@/api/public/trades'
import { ALL_ZAIF_PAIRS } from '@/constants/pair'

describe('fetchTrades', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTrades({
      pair: 'btc_jpy'
    })

    expect(result).toBeArray()

    result.forEach(
      ({ date, price, amount, tid, currency_pair, trade_type }) => {
        expect(date).toBeNumber()
        expect(price).toBeNumber()
        expect(amount).toBeNumber()
        expect(tid).toBeNumber()

        expect(currency_pair).toBeOneOf(ALL_ZAIF_PAIRS)
        expect(trade_type).toBeOneOf(['ask', 'bid'])
      }
    )
  })
})
