import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { markdown, html } from './preprocessor.js';


/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;'
      }
    }),
    markdown(),
    html()
  ],

  extensions: [".svelte", ".md"],

  kit: {
    adapter: adapter(),

    prerender: {
      enabled: true,
      crawl: false,
      entries: ['*']
    },
    router: !!process.env.DEV,
    hydrate: !!process.env.DEV,

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "src/variables.scss" as *;'
          }
        }
      }
    }
  }
};

export default config;
