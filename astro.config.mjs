// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

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
  integrations: [icon(), mdx()],
});
