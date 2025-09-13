// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';
import mdx from '@astrojs/mdx';
import astroMermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
  site: 'https://keel-inc.github.io',
  integrations: [mdx(), astroMermaid({
    mermaidConfig: {
      look: 'handDrawn',
      theme: 'base',
      themeVariables: {
        primaryColor: '#1e40af',           // Navy blue
        primaryTextColor: '#1e40af',       // Navy text
        primaryBorderColor: '#1e3a8a',     // Darker navy for borders
        lineColor: '#1e40af',              // Navy lines
        secondaryColor: '#fffbeb',         // Cream secondary
        tertiaryColor: '#ceddd0ff',        // Pale green tertiary
        background: '#fffbeb',             // Cream background
        mainBkg: '#fffbeb',                // Cream main background
        secondBkg: '#f3f4f6',              // Light gray secondary background
        tertiaryTextColor: '#1e40af',      // Navy tertiary text
        edgeLabelBackground: '#fffbeb',    // Cream edge label background
        nodeTextColor: '#1e40af',          // Navy node text
        fontFamily: 'system-ui, sans-serif',
        fontSize: '16px',
        // Flowchart specific
        cScale0: '#1e40af',                // Navy
        cScale1: '#d4d4aa',                // Pale olive-green
        cScale2: '#3b82f6',                // Lighter blue
        // Class diagram colors
        classText: '#1e40af',
        // Git diagram colors
        git0: '#1e40af',
        git1: '#d4d4aa',
        git2: '#3b82f6',
        git3: '#d97706',
        // Pie chart colors
        pie1: '#1e40af',
        pie2: '#d4d4aa',
        pie3: '#3b82f6',
        pie4: '#d97706',
        pie5: '#fffbeb',
      }
    }
  })],
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    remarkPlugins: [
      remarkGfm,
    ]
  }
});