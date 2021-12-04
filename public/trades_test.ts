import { fetchTrades } from "./trades.ts";
import { ALL_ZAIF_PAIRS } from "./constants.ts";
import { anyArray, anyNumber, anyOf, expect, test } from "../dev_deps.ts";
import type { ZaifPair } from "./types.ts";

test("fetchTrades", async () => {
  const testCase = async (pair: ZaifPair) => {
    await expect(fetchTrades({ pair })).resolves.toEqual(anyArray({
      date: anyNumber(),
      price: anyNumber(),
      amount: anyNumber(),
      tid: anyNumber(),
      currency_pair: anyOf(ALL_ZAIF_PAIRS),
      trade_type: anyOf(["ask", "bid"]),
    }));
  };

  await Promise.all(
    ALL_ZAIF_PAIRS.map(testCase),
  );
});
