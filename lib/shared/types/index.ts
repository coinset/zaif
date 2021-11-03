import type { RequestInit } from 'node-fetch'

type PublicAPI<O, R> = (options: O, init?: RequestInit) => Promise<R>

type OrderType = 'sell' | 'buy'
type Order = 'asc' | 'desc'

type Ask = 'ask'
type Bid = 'bid'

type AskBid = Ask | Bid

type Reviver = Parameters<typeof JSON.parse>[1]

export type { PublicAPI, OrderType, Order, Reviver, AskBid }
