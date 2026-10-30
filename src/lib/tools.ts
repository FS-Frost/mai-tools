import z from "zod";
import { LocalizedText } from "$lib/locale.svelte.ts";
// Single source of truth: also published at https://fs-frost.github.io/mai-tools/tools.json
// and read by the FS-Frost/fs-frost profile README generator.
import toolsData from "../../static/tools.json";

export const Category = z.enum([
    "AI",
    "Coding",
    "Converters",
    "Images",
    "Learning",
    "Plain text",
    "SQL",
    "Translation",
    "Fun",
]);

export type Category = z.infer<typeof Category>;

export const Stack = z.enum([
    "Svelte",
    "React",
    "TypeScript",
    "JavaScript",
    "Go",
    "Docker",
    "Bun",
    "Gemini",
    "Claude",
]);

export type Stack = z.infer<typeof Stack>;

export const Tool = z.object({
    id: z.string(),
    name: LocalizedText,
    description: LocalizedText,
    category: Category,
    /** Internal route (e.g. "?page=text.removeBreakLines") or external URL. */
    href: z.string(),
    external: z.boolean(),
    stack: z.array(Stack),
});

export type Tool = z.infer<typeof Tool>;

export const tools: Tool[] = z.array(Tool).parse(toolsData);

export const categories: Category[] = Category.options;

export function findTool(id: string): Tool {
    const tool = tools.find((tool) => tool.id === id);
    if (tool === undefined) {
        throw new Error(`Unknown tool: ${id}`);
    }

    return tool;
}
