# Astro Starter Kit

```
npm create astro@latest -- --template detikstatic-ui/astro-template
```

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deploy to Github Page
docs : https://docs.astro.build/en/guides/deploy/github/

1. Set the site and, if needed, base options in astro.config.mjs.
```js
export default defineConfig({
  site: 'https://astronaut.github.io',
  base: '/my-repo',
})
```