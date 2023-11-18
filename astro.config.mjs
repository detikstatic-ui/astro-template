import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://astronaut.github.io", //  Change to your site URL  
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  base: '/my-repo', // Change to your base path
  build: {
    format: "file",
    assets: "_starter-project",// Change to your project name
    inlineStylesheets: "never",
  },
  compressHTML: false,
  output: "static",  
})
