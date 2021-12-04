import { fetchLastPrice } from "./last_price.ts";
import { anyNumber, anyOf, expect, test } from "../dev_deps.ts";
import { ALL_ZAIF_PAIRS } from "./constants.ts";

test("fetchLastPrice", async () => {
  await Promise.all(ALL_ZAIF_PAIRS.map(async (pair) => {
    await expect(fetchLastPrice({ pair })).resolves.toEqual({
      last_price: anyOf([anyNumber(), null]),
    });
  }));
});
