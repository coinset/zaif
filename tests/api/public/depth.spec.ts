import { fetchDepth } from '@/api/public/depth'

describe('fetchDepth', () => {
  it('should return currency pairs info', async () => {
    const { asks, bids } = await fetchDepth({ pair: 'btc_jpy' })

    const expectPriceArray = (value: [number, number][]) => {
      expect(value).toBeArray()

      value.forEach((v) => {
        expect(v).toBeArray()
        expect(v).toHaveLength(2)
        const [price, amount] = v
        expect(price).toBeNumber()
        expect(amount).toBeNumber()
      })
    }
    expectPriceArray(asks)
    expectPriceArray(bids)
  })
})
