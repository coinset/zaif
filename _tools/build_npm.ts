import { build } from "https://deno.land/x/dnt@0.7.4/mod.ts";

import {
  dirname,
  fromFileUrl,
  resolve,
} from "https://deno.land/std@0.117.0/path/mod.ts";

const baseDir = resolve(dirname(fromFileUrl(import.meta.url)), "..");

await build({
  entryPoints: [resolve(baseDir, "mod.ts")],
  outDir: resolve(baseDir, "npm"),
  test: false,
  compilerOptions: {
    sourceMap: true,
  },
  package: {
    name: "@coinset/zaif",
    version: Deno.args[0]?.replace(/^v/, ""),
    description: "Universal Zaif API client",
    license: "MIT",
    sideEffects: false,
    "publishConfig": {
      "access": "public",
    },
    author: {
      name: "TomokiMiyauci",
      email: "contact@miyauchi.dev",
      url: "https://miyauchi.dev/",
    },
    repository: {
      type: "git",
      url: "https://github.com/coinset/zaif.git",
    },
    bugs: {
      url: "https://github.com/coinset/zaif/issues",
    },
    homepage: "https://github.com/coinset/zaif#readme",
    funding: {
      type: "patreon",
      url: "https://www.patreon.com/tomoki_miyauci",
    },
    keywords: [
      "zaif",
    ],
  },
});

Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
