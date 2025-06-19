// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: "https://thegates.dev",
  trailingSlash: "never",
  output: "static",
  root: ".",
  scopedStyleStrategy: "attribute",
  prefetch: {
    defaultStrategy: "tap",
    prefetchAll: true,
  },
  build: {
    concurrency: 2,
  },
  integrations: [icon()],
});
