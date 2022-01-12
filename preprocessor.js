function header(title, author, date, path) {

  return `
    <script context="module" lang="ts">
      import type { Entry } from '$lib/types/Entry';
      import { register } from '$lib/Registry';

      let entry: Entry = {
        title: ${JSON.stringify(title)},
        author: ${JSON.stringify(author)},
        date: ${JSON.stringify(date)},
        path: ${JSON.stringify(path)}
      };
      register(entry);
    </script>

    <script lang="ts">
      import Title from '$lib/components/Title.svelte';
    </script>
    path is ${JSON.stringify(path)}
    <Title {entry} />`;
}


export function wahoo(options={}) {
  return {
      markup(params) {
        if (!params.filename.endsWith('.wahoo')) {
          return { code: params.content }
        }
        const { content, filename } = params;
        const metaMatches = content.match(/^\-\-\-[\s\S]*\-\-\-/);

        if(metaMatches) {
          const meta = metaMatches[0];
          const title = (meta.match(/(?<=title:\s).*/) ?? [''])[0];
          const author = (meta.match(/(?<=author:\s).*/) ?? [''])[0];
          const date = (meta.match(/(?<=date:\s).*/) ?? [''])[0];
          const path = filename.replace(/\.wahoo$/, '').replace(/^.*routes/, '');
          return { code: header(title, author, date, path) + content.replace(/^\-\-\-[\s\S]*\-\-\-/, '')};
        }
        return { code: content }
      }
  };
}
