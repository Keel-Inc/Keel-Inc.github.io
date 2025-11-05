# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based static site for Keel Inc., focused on publishing technical articles about embedded development for regulated medical devices. The site is deployed to GitHub Pages at https://keel-inc.com.

## Development Commands

See README.md for all available commands (install, dev, build, preview, linting, astro CLI).

## Architecture

### Content System

The site uses Astro's content collections for managing articles:

- **Content location**: `src/content/articles/` contains MDX files
- **Schema definition**: `src/content/config.ts` defines the article schema with required fields:
  - `title`: Article title (appears in frontmatter, not as H1 in content)
  - `series`: Article series name
  - `description`: Short description
  - `tags`: Optional array (must exist in `src/content/tags.yml`)
  - `publishedDate`: Publication date
  - `modifiedDate`: Last modified date
- **Tag management**: All tags must be defined in `src/content/tags.yml` to prevent proliferation

### Routing

- **Home page**: `src/pages/index.astro` - Lists articles from content collection, sorted by publication date
- **Article pages**: `src/pages/guides/[...slug].astro` - Dynamic routes generated from content collection
- **Bio**: `src/content/bio.md` - Author bio displayed on home page

### Styling

- Uses Tailwind CSS 4.x via Vite plugin
- Custom font classes defined for semantic typography:
  - `font-heading-1`, `font-heading-3` - Headings
  - `font-subtitle` - Subtitles
  - `font-caption` - Captions
- Google Fonts: EB Garamond and Libre Baskerville

### Image Handling

- **Custom component**: `src/components/Image.astro` wraps Astro's Image component
- **Storage**: Images in `src/assets/images/`
- **Import pattern**: Import images at top of MDX files, pass to component
- **Props**: `src={imported}`, `alt="required"`, `title="optional"` (defaults to alt)
- Never use markdown image syntax - always use the Image component

### Mermaid Diagrams

- Integrated via `astro-mermaid` package
- Custom theme configured in `astro.config.mjs` with brand colors:
  - Navy blue (`#1e40af`) primary
  - Cream (`#fffbeb`) background
  - Pale green (`#ceddd0ff`) tertiary
  - Handdrawn look
- Remark plugin at `src/plugins/add-mermaid-classname.ts` adds CSS classes

## Content Style Guidelines

These rules must be followed for all article writing:

### Voice and Structure

- Mix first person (I/we) and second person (you) naturally
- No H1s in articles (title comes from frontmatter)
- Use "click" for UI elements, "press" for keyboard keys

### Link Density

- Target 2-5 high-quality links per 1000 words
- Links must be relevant and valuable to readers
- Check with: `(grep '\[.*?\]\(.*?\)' <article>).Count` for links, `wc -w <article>` for words

### Tags

- Must be defined in `src/content/tags.yml`
- Use lower-kebab-case
- Avoid single-use tags and stop-words
- Keep under 30 characters

### Images

- Must have alt-text
- For UI screenshots, alt-text must match button label exactly
- Editorial notes: `$RK (...)` should not appear in final drafts

### Formatting Conventions

- **H2/H3**: Use for sections, not bold/italics
- **Bold**: Active UI elements (buttons)
- **Emphasis**: Passive UI elements (labels)
- **Code**: Inline code, CLI flags, filenames, line numbers
- **Fenced blocks**: Multi-line commands or source code. These must have language identifiers
- **`<kbd>` tags**: Keyboard sequences
- **Bold with chevrons**: Navigation paths (e.g., **File > Open > Recent**)

### Footnotes

- Format: `[^N]` in text, `[^N]:` for definition
- Must be numbered and placed at end of article

## Markdown Linting

Configuration in `.markdownlint-cli2.jsonc`:

- No H1 required (title in frontmatter)
- HTML `<kbd>` tags allowed
- ATX headings required (##)
- Alt-text required on images
- Underscore emphasis, asterisk bold
- No bare URLs
