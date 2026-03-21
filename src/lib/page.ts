import z from 'zod';

const PAGES = [
    "home",
    "text.removeBreakLines",
    "text.removeDuplicates",
] as const;

export const Page = z.enum(PAGES);

export type Page = z.infer<typeof Page>;
