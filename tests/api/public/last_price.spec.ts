import { fetchLastPrice } from '@/api/public/last_price'

describe('fetchLastPrice', () => {
  it('should return currency pairs info', async () => {
    const { last_price } = await fetchLastPrice({ pair: 'btc_jpy' })

    expect(last_price).toBeNumber()
  })
})
