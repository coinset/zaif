import { fetchCurrencyPairs } from '@/api/public/currency_pairs'

describe('fetchCurrencyPairs', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchCurrencyPairs({ pair: 'all' })

    expect(result).toBeArray()

    result.forEach(
      ({
        name,
        is_token,
        id,
        item_japanese,
        currency_pair,
        seq,
        title,
        aux_unit_point,
        event_number,
        item_unit_step,
        aux_unit_min,
        aux_unit_step,
        aux_japanese,
        description,
        item_unit_min
      }) => {
        expect(name).toBeString()
        expect(is_token).toBeBoolean()
        expect(id).toBeNumber()
        expect(item_japanese).toBeString()
        expect(currency_pair).toBeString()
        expect(seq).toBeNumber()
        expect(title).toBeString()
        expect(aux_unit_point).toBeNumber()
        expect(event_number).toBeNumber()
        expect(item_unit_step).toBeNumber()
        expect(aux_unit_min).toBeNumber()
        expect(aux_unit_step).toBeNumber()
        expect(aux_japanese).toBeString()
        expect(description).toBeString()
        expect(item_unit_min).toBeNumber()
      }
    )
  })
})
