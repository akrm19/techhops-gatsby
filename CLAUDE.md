# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

TechHops personal portfolio site: a single-page Gatsby 5 / React 18 site built from the `gatsby-absurd` starter. There is no test suite and no linter; Prettier is the only code-quality tool.

## Commands

The project uses Yarn (`yarn.lock`) and Node 22 (pinned for Netlify in `netlify.toml`).

- `yarn install`: install dependencies
- `yarn dev` (or `yarn start`): start the dev server with `gatsby develop`
- `yarn build`: production build to `/public`
- `yarn clean`: delete `.cache` and `public`. This often fixes odd build or dev-server errors, so run it before `yarn dev` when something looks wrong.
- `yarn format`: run Prettier on `src/**/*.js` (`.prettierrc`: semicolons, single quotes, `trailingComma: es5`)

## Architecture

- **Single page**: `src/pages/index.js` puts `Navbar` and the section components (`Header`, `About`, `Projects`, `Tech`, `Contact`, `Footer`) inside `Layout`. `404.js` and `page-2.js` are leftovers from the starter.
- **Navigation is coupled to section ids**: `Navbar` has a `NAV_ITEMS` array (`['About', 'Projects', 'Tech', 'Contact']`). It lowercases each item and uses the result both as the anchor href and as the `react-scrollspy` id. Each section needs a `<Section id="...">` that matches, so adding or renaming a section means changing both places.
- **Content lives in the components**: section data is hardcoded as arrays or objects next to the JSX. For example, the `Portfolio` array in `src/components/sections/Projects.js` holds the project entries, and the tech logos in `Tech.js` are SVG imports.
- **Images**: two ways of loading images exist side by side:
  - `gatsby-source-filesystem` registers `src/images/photos` (as `photos`) and `src/images/projects` (as `projects`). Sections query them with `StaticQuery` and `allFile(filter: { sourceInstanceName: ... })`, then render them with `gatsby-plugin-image` (`gatsbyImageData` queries, `GatsbyImage` + `getImage`).
  - The project GIFs/PNGs in `Projects.js` are imported directly as files. When an entry has a `gif`, the imported file is used and the GraphQL lookup is skipped.
  - SVGs are handled by a custom webpack rule in `gatsby-node.js` (`@svgr/webpack` + url-loader, `removeViewBox` disabled), so an SVG import gives both a URL default export and a named `ReactComponent`: `import url, { ReactComponent as Icon } from './icon.svg'`. Gatsby's built-in asset rules are made to skip `.svg`.
- **Styling**: styled-components wrapped in a `ThemeProvider` inside `Layout`. `src/styles/theme.js` holds the theme tokens (colors, fonts, `screen` breakpoints) and `src/styles/GlobalStyles.js` holds the reset and base element styles. The shared `Container` and `Section` primitives are in `src/components/global.js`. `Section` takes an `accent` prop.
- **SEO and manifest**: edit `SEO_DATA` in `src/components/common/SEO.js` for meta tags. It is rendered through Gatsby's Head API: each page exports `Head = () => <SEO />`, so a new page needs that export too. The app manifest, favicon, and Google Fonts (`average`, `prata`) are configured in `gatsby-config.js`.
- **Import aliases** (from `gatsby-plugin-alias-imports` in `gatsby-config.js`): `@components`, `@common`, `@sections`, `@images`, `@styles`, `@static`. Use these instead of long relative paths.

## Deployment

Netlify site `techhops` (https://techhops.com) builds from the GitHub repo on pushes to `master` only; build settings live in `netlify.toml`. Other branches are not built, so test with `netlify build` and a draft `netlify deploy --dir=public` (needs `netlify link`; `.netlify/` is gitignored).
