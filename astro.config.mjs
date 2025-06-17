// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://thegates.dev",
  trailingSlash: "never",
  output: "static",
  root: ".",
  scopedStyleStrategy: "where",
  build: {
    concurrency: 2,
  },
});
