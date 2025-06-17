// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://thegates.dev",
  trailingSlash: "never",
  output: "static",
  root: ".",
  scopedStyleStrategy: "where",
  prefetch: {
    defaultStrategy: "tap",
    prefetchAll: true,
  },
  build: {
    concurrency: 2,
  },
});
