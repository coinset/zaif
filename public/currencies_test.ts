import {
  any,
  anyNumber,
  anyString,
  arrayContaining,
  expect,
  test,
} from "../dev_deps.ts";
import { fetchCurrencies } from "./currencies.ts";

test("fetchCurrencies", async () => {
  await expect(fetchCurrencies({
    symbol: "all",
  })).resolves.toEqual(arrayContaining([
    {
      name: anyString(),
      id: anyNumber(),
      is_token: any(Boolean),
      token_id: anyNumber(),
    },
  ]));
});
