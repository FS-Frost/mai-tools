# mai-tools

Static SvelteKit 2 + Svelte 5 (runes) + Tailwind 4 site, built with Bun and deployed to GitHub Pages at https://fs-frost.github.io/mai-tools/. Gallery of all FS-Frost tools, bilingual (English default, Spanish).

## Commands

```sh
bun install
bun dev
bun check       # svelte-check; must report 0 errors / 0 warnings
bun run build   # static output in build/ (prerendered)
```

Push to `main` deploys via `.github/workflows/main.yml` (rewrites `<base href>` to `/mai-tools/`). After deploying, it waits until Pages serves the new `tools.json` and triggers `readme.yml` in `FS-Frost/fs-frost`, so the profile updates within minutes. That step needs the `PROFILE_DISPATCH_TOKEN` secret (fine-grained PAT, only `FS-Frost/fs-frost`, Actions: read and write) and is skipped when the secret is missing.

## Architecture

- **No SvelteKit routes per tool.** `src/routes/Router.svelte` switches on `appState.activePage` (`$lib/state.svelte.ts`), driven by the `?page=` query param. Valid pages are in `$lib/page.ts`.
- **Tool catalog:** `static/tools.json` is the data; `$lib/tools.ts` validates it with Zod (`Tool`, `Category`, `Stack`) and exposes `tools`, `categories`, `findTool(id)`.
- **i18n:** `$lib/locale.svelte.ts` holds `localeState`, `localize(LocalizedText)`, `loadLocale()` and `toggleLocale()`. `$lib/text.ts` has the `en`/`es` dictionaries; read with `t().key` in markup so it stays reactive.
- **Theme:** `$lib/theme.svelte.ts` + anti-FOUC script in `src/app.html`.
- `ToolLayout.svelte` takes a `toolId` and renders the tool's localized name/description from the catalog.

## Rules

- `static/tools.json` is the **single source of truth** shared with the GitHub profile (`FS-Frost/fs-frost`, `scripts/generate-readme.ts`). Keep its shape stable: `id`, `name`, `description`, `category`, `href`, `external`, `stack`, plus optional `repo` (GitHub repo name) and `topics`. Changing field names breaks the profile scripts.
- `repo` + `topics` + the English `description` are pushed to each GitHub repo by `fs-frost/scripts/sync-repos.ts` (run manually). Topics must be lowercase, digits and hyphens, max 50 chars (validated in `tools.ts`).
- Every user-visible string goes through `t()` or `localize()`; never hardcode English in components. Add keys to both `en` and `es` (the `Text` type enforces it).
- Locale always starts as `"en"` and the saved choice is applied in `onMount` (`+layout.svelte`). Do not read `localStorage` during init: the HTML is prerendered and hydration would mismatch.
- Stack chip colors in `Home.svelte` (`stackColors`) must match the shields.io badge colors in the profile generator.
- The profile generator also copies the Spanish category labels from `text.ts`. Adding or renaming a category means updating its `readmes[].categories` map too.
- Internal tools: `href: "?page=<id>"`, `external: false`, add the id to `$lib/page.ts` and a branch in `Router.svelte`, and wrap the page in `<ToolLayout toolId="...">`.
