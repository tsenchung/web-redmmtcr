import MarkdownIt from "markdown-it";
import FootnotePlugin from "markdown-it-footnote";
import YAML from 'yaml';
import readingTime from "reading-time";

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

export function html() {
  return {
    markup({ content, filename }) {
      if (!filename.endsWith('.svelte')) {
        return { code: content }
      }
      const metaMatches = content.match(/^\-\-\-[\s\S]*?\-\-\-/);
      if (!metaMatches) {
        return { code: content };
      }
      const meta = metaMatches[0];
      let metaObj = YAML.parse(meta.replace(/^\-\-\-/, '').replace(/\-\-\-\s*$/, ''));
      const path = filename.replace(/\.svelte$/, '/').replace(/^.*routes/, '');
      metaObj['path'] = path;
      const contentWithoutFrontMatter = content.replace(/^\-\-\-[\s\S]*?\-\-\-/, '');
      metaObj['readingTime'] = readingTime(contentWithoutFrontMatter).minutes;
      const c = header(metaObj) + contentWithoutFrontMatter;
      return { code: c };
    }
  }
}

export function markdown() {
  return {
    markup(params) {
      if (!params.filename.endsWith('.md')) {
        return { code: params.content }
      }
      const md = MarkdownIt().use(FootnotePlugin);
      const content = md.render(
        params.content.replace(/^\-\-\-[\s\S]*?\-\-\-/, '')
      );
      const { filename } = params;
      const metaMatches = params.content.match(/^\-\-\-[\s\S]*?\-\-\-/);

      if (metaMatches) {
        const meta = metaMatches[0];
        let metaObj = YAML.parse(meta.replace(/^\-\-\-/, '').replace(/\-\-\-\s*$/, ''));
        const path = filename.replace(/\.md$/, '/').replace(/^.*routes/, '');
        metaObj['path'] = path;
        metaObj['readingTime'] = readingTime(content).minutes;
        return { code: header(metaObj) + content };
      }
      return { code: content }
    }
  };
}
