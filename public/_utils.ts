type Reviver = Parameters<typeof JSON.parse>[1];

async function jsonFetch<T>(
  url: URL | string | Request,
  init?: RequestInit,
  options?: { parseJson: Reviver },
): Promise<T> {
  const res = await fetch(url.toString(), init);

  if (!res.ok) {
    throw Error(res.statusText);
  }

  const text = await res.text();

  const parsed = JSON.parse(text, options?.parseJson);

  if ("error" in parsed) {
    throw TypeError((parsed as { error: string }).error);
  }

  return parsed;
}

export { jsonFetch };
export type { Reviver };
