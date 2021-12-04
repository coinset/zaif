import { fetchDepth } from "./depth.ts";
import { ALL_ZAIF_PAIRS } from "./constants.ts";
import { anyArray, anyNumber, expect, test } from "../dev_deps.ts";

test("fetchDepth", async () => {
  await Promise.all(ALL_ZAIF_PAIRS.map(async (pair) => {
    await expect(fetchDepth({ pair })).resolves.toEqual({
      asks: anyArray([anyNumber(), anyNumber()]),
      bids: anyArray([anyNumber(), anyNumber()]),
    });
  }));
});
