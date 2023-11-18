import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({  
  vite: {
    build: {
      cssCodeSplit: false
    }
  },
  integrations: [sitemap(), tailwind({
    applyBaseStyles: false
  })],  
  build: {
    format: "file",
    assets: "_starter-project", // Change to your project name
    inlineStylesheets: "never"
  },
  compressHTML: false,
  output: "server",
  adapter: vercel()
});