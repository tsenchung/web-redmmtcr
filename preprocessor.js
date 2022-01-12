import MarkdownIt from "markdown-it";
import FootnotePlugin from "markdown-it-footnote";
import YAML from 'yaml';

function header(metadata) {
  return `
    <script context="module" lang="ts">
      import type { Entry } from '$lib/types/Entry';
      import { register } from '$lib/Registry';
      let entry: Entry = ${JSON.stringify(metadata)};
      register(entry);
    </script>
    <script lang="ts">
      import Title from '$lib/components/Title.svelte';
    </script>
    <Title {entry} />`;
}

export function markdown() {
  return {
      markup(params) {
        if (!params.filename.endsWith('.md')) {
          return { code: params.content }
        }
        const md = MarkdownIt('commonmark').use(FootnotePlugin);
        const content = md.render(
          params.content.replace(/^\-\-\-[\s\S]*?\-\-\-/, '')
        );
        const { filename } = params;
        const metaMatches = params.content.match(/^\-\-\-[\s\S]*?\-\-\-/);

        if(metaMatches) {
          const meta = metaMatches[0];
          let metaObj = YAML.parse(meta.replace(/^\-\-\-/, '').replace(/\-\-\-\s*$/, ''));
          const path = filename.replace(/\.md$/, '').replace(/^.*routes/, '');
          metaObj['path'] = path;
          return { code: header(metaObj) + content };
        }
        return { code: content }
      }
  };
}
