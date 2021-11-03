import { fetchCurrencyPairs } from '@/api/public/currency_pairs'

describe('fetchCurrencyPairs', () => {
  it('should support 32 currency pairs', () => {
    expect(fetchCurrencyPairs({ pair: 'all' })).resolves.toHaveLength(32)
  })

  it('should return currency pairs info', async () => {
    const result = await fetchCurrencyPairs({ pair: 'btc_jpy' })
    const info = result[0]
    const keys = Object.keys(info)

    const fields = [
      'name',
      'is_token',
      'id',
      'item_japanese',
      'currency_pair',
      'seq',
      'title',
      'aux_unit_point',
      'event_number',
      'item_unit_step',
      'aux_unit_min',
      'aux_unit_step',
      'aux_japanese',
      'description',
      'item_unit_min'
    ]

    fields.forEach((field) => {
      expect(keys).toContain(field)
    })

    expect(keys).toHaveLength(fields.length)

    const {
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
    } = info

    expect(name).toEqual(expect.any(String))
    expect(is_token).toEqual(expect.any(Boolean))
    expect(id).toEqual(expect.any(Number))
    expect(item_japanese).toEqual(expect.any(String))
    expect(currency_pair).toEqual(expect.any(String))
    expect(seq).toEqual(expect.any(Number))
    expect(title).toEqual(expect.any(String))
    expect(aux_unit_point).toEqual(expect.any(Number))
    expect(event_number).toEqual(expect.any(Number))
    expect(item_unit_step).toEqual(expect.any(Number))
    expect(aux_unit_min).toEqual(expect.any(Number))
    expect(aux_unit_step).toEqual(expect.any(Number))
    expect(aux_japanese).toEqual(expect.any(String))
    expect(description).toEqual(expect.any(String))
    expect(item_unit_min).toEqual(expect.any(Number))
  })
})
