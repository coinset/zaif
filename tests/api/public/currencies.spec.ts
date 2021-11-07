import { fetchCurrencies } from '@/api/public/currencies'

describe('fetchCurrencies', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchCurrencies({ symbol: 'all' })

    expect(result).toBeArray()

    result.forEach(({ name, token_id, is_token, id }) => {
      expect(name).toBeString()
      expect(id).toBeNumber()
      expect(is_token).toBeBoolean()
      expect(token_id).toBeNumberOrNull()
    })
  })
})
