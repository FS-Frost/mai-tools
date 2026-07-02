import z from "zod";

export const Category = z.enum([
    "AI",
    "Coding",
    "Converters",
    "Images",
    "Plain text",
    "SQL",
    "Translation",
    "Video games",
]);

export type Category = z.infer<typeof Category>;

export const Tool = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    category: Category,
    /** Internal route (e.g. "?page=text.removeBreakLines") or external URL. */
    href: z.string(),
    external: z.boolean(),
});

export type Tool = z.infer<typeof Tool>;

export const tools: Tool[] = z.array(Tool).parse([
    {
        id: "mai-chat",
        name: "Browser Local AI Chat",
        description: "Chat with AI models running fully in your browser, no server required.",
        category: "AI",
        href: "https://fs-frost.github.io/mai-chat",
        external: true,
    },
    {
        id: "asu-regex-js",
        name: "Asu Regex",
        description: "TypeScript parser to work with SubStation Alpha (.ass) subtitles.",
        category: "Coding",
        href: "https://github.com/FS-Frost/asu-regex-js",
        external: true,
    },
    {
        id: "gocker",
        name: "Gocker",
        description: "Docker commands, but easy — a friendlier CLI for everyday Docker.",
        category: "Coding",
        href: "https://github.com/FS-Frost/gocker",
        external: true,
    },
    {
        id: "hui",
        name: "HUI",
        description: "A reactive HTML UI framework for building interfaces fast.",
        category: "Coding",
        href: "https://fs-frost.github.io/hui",
        external: true,
    },
    {
        id: "excel2json",
        name: "Excel ↔ JSON",
        description: "Convert spreadsheets to JSON and back, right in the browser.",
        category: "Converters",
        href: "https://fs-frost.github.io/excel2json",
        external: true,
    },
    {
        id: "json2openapi",
        name: "JSON → OpenAPI",
        description: "Generate OpenAPI schemas from raw JSON payloads instantly.",
        category: "Converters",
        href: "https://fs-frost.github.io/json2openapi",
        external: true,
    },
    {
        id: "qr-detector",
        name: "QR Detector",
        description: "Detect and decode QR codes from images or your camera.",
        category: "Images",
        href: "https://fs-frost.github.io/qr-detector",
        external: true,
    },
    {
        id: "text.removeBreakLines",
        name: "Remove Break Lines",
        description: "Collapse line breaks into spaces to flatten any text block.",
        category: "Plain text",
        href: "?page=text.removeBreakLines",
        external: false,
    },
    {
        id: "text.removeDuplicates",
        name: "Remove Duplicates",
        description: "Strip duplicate entries from a comma-separated list.",
        category: "Plain text",
        href: "?page=text.removeDuplicates",
        external: false,
    },
    {
        id: "sql-playground",
        name: "SQL Playground",
        description: "Run SQL queries against an in-browser database sandbox.",
        category: "SQL",
        href: "https://fs-frost.github.io/sql-playground",
        external: true,
    },
    {
        id: "asu-web",
        name: "Asu Web",
        description: "Tools for subtitle automation and batch processing.",
        category: "Translation",
        href: "https://fs-frost.github.io/asu-web",
        external: true,
    },
    {
        id: "dictionary",
        name: "English Dictionary",
        description: "Look up English word definitions quickly and cleanly.",
        category: "Translation",
        href: "https://fs-frost.github.io/dictionary",
        external: true,
    },
    {
        id: "palindrome-gui",
        name: "Palindrome Detector",
        description: "Check whether a word or phrase reads the same both ways.",
        category: "Video games",
        href: "https://fs-frost.github.io/palindrome-gui",
        external: true,
    },
    {
        id: "facts",
        name: "Random Facts",
        description: "Discover a surprising fact with every click.",
        category: "Video games",
        href: "https://fs-frost.github.io/facts",
        external: true,
    },
    {
        id: "snake",
        name: "Snake",
        description: "The classic Snake game, playable in your browser.",
        category: "Video games",
        href: "https://fs-frost.github.io/snake",
        external: true,
    },
]);

export const categories: Category[] = Category.options;
