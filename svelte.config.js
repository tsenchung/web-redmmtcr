import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { markdown } from './preprocessor.js';


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
    markdown()
  ],

  extensions: [".svelte", ".md"],

  kit: {
    adapter: adapter(),

    prerender: {
      enabled: true,
      crawl: true,
      entries: ['*']
    },

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
