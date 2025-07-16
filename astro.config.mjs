// @ts-check

import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://thegates.dev",
  trailingSlash: "never",
  output: "static",
  root: ".",
  scopedStyleStrategy: "attribute",
  prefetch: {
    prefetchAll: true,
  },
  build: {
    concurrency: 2,
  },
  integrations: [mdx()],
});
