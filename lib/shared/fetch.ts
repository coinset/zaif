import fetch from 'node-fetch'

import type { Reviver } from '@/shared/types'
import type { RequestInfo, RequestInit } from 'node-fetch'

const jsonFetch = async <T>(
  url: RequestInfo,
  init?: RequestInit,
  options?: { parseJson: Reviver }
): Promise<T> => {
  const res = await fetch(url, init)

  console.log(res)

  if (!res.ok) {
    throw Error(res.statusText)
  }

  const text = await res.text()
  console.log(text)

  return JSON.parse(text, options?.parseJson)
}

export { jsonFetch }
