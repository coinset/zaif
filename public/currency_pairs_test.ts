import { fetchCurrencyPairs } from "./currency_pairs.ts";
import {
  anyArray,
  anyBoolean,
  anyNumber,
  anyOf,
  anyString,
  expect,
  test,
} from "../dev_deps.ts";
import { ALL_ZAIF_PAIRS } from "./constants.ts";

test("fetchCurrencyPairs", async () => {
  await expect(fetchCurrencyPairs({ pair: "all" })).resolves.toEqual(
    anyArray({
      name: anyString(),
      is_token: anyBoolean(),
      id: anyNumber(),
      item_japanese: anyString(),
      currency_pair: anyOf(ALL_ZAIF_PAIRS),
      seq: anyNumber(),
      title: anyString(),
      aux_unit_point: anyNumber(),
      event_number: anyNumber(),
      item_unit_step: anyNumber(),
      aux_unit_min: anyNumber(),
      aux_unit_step: anyNumber(),
      aux_japanese: anyString(),
      description: anyString(),
      item_unit_min: anyNumber(),
    }),
  );
});
