// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import rehypeMermaid from 'rehype-mermaid';
import addMermaidClass from './src/plugins/add-mermaid-classname';
import remarkGfm from 'remark-gfm';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://keel-inc.github.io',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    remarkPlugins: [
      remarkGfm,
    ],
    rehypePlugins: [
      addMermaidClass,
      rehypeMermaid,
    ]
  }
});