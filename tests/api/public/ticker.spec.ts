import { fetchTicker } from '@/api/public/ticker'

describe('fetchTicker', () => {
  it('should return currency pairs info', async () => {
    const { last, bid, ask, high, low, vwap, volume } = await fetchTicker({
      pair: 'btc_jpy'
    })

    expect(last).toBeNumber()
    expect(bid).toBeNumber()
    expect(ask).toBeNumber()
    expect(high).toBeNumber()
    expect(low).toBeNumber()
    expect(vwap).toBeNumber()
    expect(volume).toBeNumber()
  })
})
