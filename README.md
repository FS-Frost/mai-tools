<div align="center">

# Mai Tools

**A curated collection of minimalist web utilities.**

[![Deploy](https://github.com/FS-Frost/mai-tools/actions/workflows/main.yml/badge.svg)](https://github.com/FS-Frost/mai-tools/actions/workflows/main.yml)
[![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=flat&logo=svelte&logoColor=white)](https://svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=flat&logo=bun&logoColor=white)](https://bun.com/)

[![Open mai-tools](https://img.shields.io/badge/Open-mai--tools-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)](https://fs-frost.github.io/mai-tools/)

</div>

Gallery of every tool I've built: in-browser utilities, CLIs and libraries, searchable and filterable by category, in English and Spanish. Some small tools (plain text helpers) run directly inside mai-tools; the rest link to their own site or repository.

## Adding a tool

Every tool is one entry in [`static/tools.json`](static/tools.json), validated with Zod in [`src/lib/tools.ts`](src/lib/tools.ts):

```json
{
    "id": "qr-detector",
    "name": { "en": "QR Detector", "es": "Detector de QR" },
    "description": {
        "en": "Detect and decode QR codes from images or your camera.",
        "es": "Detecta y decodifica códigos QR desde imágenes o tu cámara."
    },
    "category": "Images",
    "href": "https://fs-frost.github.io/qr-detector",
    "external": true,
    "stack": ["Svelte"]
}
```

- `name` and `description` are either `{ "en", "es" }` or a plain string when it reads the same in both languages (proper names like `"Gocker"`).
- `category` and `stack` must be values from the `Category` and `Stack` enums in `tools.ts`. A new stack also needs a color in `stackColors` ([`Home.svelte`](src/lib/gui/pages/Home.svelte)).
- Internal tools use `href: "?page=<id>"`, `external: false`, and need a route in [`src/routes/Router.svelte`](src/routes/Router.svelte).
- `tools.json` is the **single source of truth** for my [GitHub profile](https://github.com/FS-Frost) too: it is published at `https://fs-frost.github.io/mai-tools/tools.json` and the profile regenerates its project tables from it every day.

## Languages

UI strings live in [`src/lib/text.ts`](src/lib/text.ts) (`t().someKey`), one dictionary per locale. English is the default on a first visit; the `EN | ES` toggle in the navbar saves the choice in `localStorage`.

## Development

```sh
bun install   # install dependencies
bun dev       # start dev server
bun check     # type-check
bun run build # static build into build/
```

Every push to `main` deploys to GitHub Pages via [`.github/workflows/main.yml`](.github/workflows/main.yml).

## More

See all my projects on my [GitHub profile](https://github.com/FS-Frost).
