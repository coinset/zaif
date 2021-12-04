import { fetchTicker } from "./ticker.ts";
import { anyNumber, anyOf, expect, test } from "../dev_deps.ts";
import { ALL_ZAIF_PAIRS } from "./constants.ts";
import type { ZaifPair } from "./types.ts";

test("fetchTicker", async () => {
  const anyNumberOrNull = anyOf([anyNumber(), null]);
  const testCase = async (pair: ZaifPair) => {
    await expect(fetchTicker({
      pair,
    })).resolves.toEqual({
      last: anyNumberOrNull,
      bid: anyNumberOrNull,
      ask: anyNumberOrNull,
      high: anyNumberOrNull,
      low: anyNumberOrNull,
      vwap: anyNumberOrNull,
      volume: anyNumberOrNull,
    });
  };

  await Promise.all(ALL_ZAIF_PAIRS.map(testCase));
});
