// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import rehypeMermaid from 'rehype-mermaid';
import addMermaidClass from './src/plugins/add-mermaid-classname';

// https://astro.build/config
export default defineConfig({
  site: 'https://keel-inc.github.io',
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    rehypePlugins: [
      addMermaidClass,
      rehypeMermaid,
    ]
  }
});