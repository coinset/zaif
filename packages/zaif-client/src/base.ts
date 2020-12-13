import { BASE_URL } from '@/constants/api'
import got, { OptionsOfTextResponseBody } from 'got'

const instance = got.extend({
  prefixUrl: BASE_URL
})

export const callApi = <T>(
  url: string,
  options?: OptionsOfTextResponseBody
): Promise<T> => {
  return instance.get(url, options).json<T>()
}
