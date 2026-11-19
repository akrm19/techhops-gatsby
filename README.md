# TechHops

Source for [techhops.com](https://techhops.com), my personal portfolio site. It is a single-page Gatsby 5 / React 18 site, originally built from the [gatsby-absurd](https://github.com/ajayns/gatsby-absurd) starter (illustrations from [absurd.design](https://absurd.design/)).

## Requirements

- **Node 22**, managed with [nvm](https://github.com/nvm-sh/nvm) (`nvm install 22 && nvm alias default 22`). Netlify builds with the same version (set in `netlify.toml`).
- **Yarn** (the repo has a `yarn.lock`; don't mix in npm or a `package-lock.json`).
- Optional, for deploy testing: **netlify-cli** (`npm install -g netlify-cli`, then `netlify login`).

## Local development

```sh
yarn install   # install dependencies
yarn dev       # dev server at http://localhost:8000
yarn build     # production build to ./public
yarn clean     # delete .cache and public; fixes most odd build/dev errors
yarn format    # Prettier on src/**/*.js
```

## Editing content

Everything is on one page (`src/pages/index.js`), and content lives inside the section components in `src/components/sections/`:

| Section  | File          | What to edit |
| -------- | ------------- | ------------ |
| Header   | `Header.js`   | Intro text and illustration |
| About    | `About.js`    | Bio text; photos come from `src/images/photos` |
| Projects | `Projects.js` | The `Portfolio` array; images in `src/images/projects` or imported GIFs/PNGs |
| Tech     | `Tech.js`     | Tech logos (SVG imports) |
| Contact  | `Contact.js`  | Contact links |
| Footer   | `Footer.js`   | Social links, copyright year |

Other places:

- **Nav items** are in `NAV_ITEMS` in `src/components/common/Navbar`. Each item lowercased must match a section's `<Section id="...">`, so rename both together.
- **SEO / meta tags**: `SEO_DATA` in `src/components/common/SEO.js` (rendered via Gatsby's Head API; every page exports `Head = () => <SEO />`).
- **Favicon, manifest, Google Fonts**: `gatsby-config.js`.
- **Theme colors, fonts, breakpoints**: `src/styles/theme.js`.

See [CLAUDE.md](CLAUDE.md) for more on the code structure (import aliases, the SVG webpack rule, image handling).

## Deployment

The site is hosted on **Netlify** (site name `techhops`, free plan), connected to this GitHub repo.

| Trigger | Result |
| ------- | ------ |
| Push or merge to `master` | Production deploy to techhops.com (about a minute) |
| Pull request | Deploy preview at `https://deploy-preview-<PR#>--techhops.netlify.app`, linked from the PR checks |
| Push to any other branch | Nothing (branch deploys are off) |

Build settings are in `netlify.toml` (`yarn build`, publish `public`, Node 22) and override the Netlify dashboard. There are no environment variables, functions, or forms.

### Normal workflow

1. Branch off `master`, make changes, check with `yarn dev` / `yarn build`.
2. Push the branch and open a PR. Check the Netlify deploy preview.
3. Merge. Netlify deploys production automatically.

### Testing a deploy without a PR

With netlify-cli installed and logged in:

```sh
netlify link                    # once per clone; pick the "techhops" site (.netlify/ is gitignored)
netlify build                   # runs the build exactly as Netlify would
netlify deploy --dir=public     # draft deploy to a unique preview URL; does not touch production
```

Avoid `netlify deploy --prod` unless you deliberately want to bypass git.

### Rolling back

In the Netlify dashboard: **Deploys**, pick an earlier deploy, **Publish deploy**. Or revert the commit on `master`.

## Dependency security

Gatsby 5 is barely maintained, and its packages pin some old transitive dependencies. The `resolutions` field in `package.json` forces patched versions of those (sharp, webpack, webpack-dev-middleware, lodash, and others). After changing dependencies, run both `yarn build` and `yarn dev` to make sure the overrides still work.

Five Dependabot alerts are left open on purpose, because they can't be fixed without breaking Gatsby:
- `decode-uri-component` (×2) and `file-type`: the patched versions are ESM-only, and Gatsby loads them with `require`.
- `@graphql-tools/utils`: the fix is four major versions ahead of what Gatsby's GraphQL codegen expects.
- `@parcel/reporter-dev-server`: Parcel needs all its packages on one version, and Gatsby pins 2.8.3. Gatsby only uses Parcel to compile its config files and never runs Parcel's dev server.

All five affect build-time or dev-server code that only processes this repo's own files. None of it ships to visitors.
