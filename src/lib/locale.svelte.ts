import { browser } from "$app/environment";
import z from "zod";

export const Locale = z.enum(["en", "es"]);

export type Locale = z.infer<typeof Locale>;

/** A plain string (same in every locale, e.g. a proper name) or one string per locale. */
export const LocalizedText = z.union([
    z.string(),
    z.object({ en: z.string(), es: z.string() }),
]);

export type LocalizedText = z.infer<typeof LocalizedText>;

const storageKey = "locale";

// Always starts in English so the prerendered HTML hydrates cleanly;
// the saved choice is restored by loadLocale() after mount.
export const localeState = $state<{ current: Locale }>({
    current: "en",
});

export function localize(value: LocalizedText): string {
    return typeof value === "string" ? value : value[localeState.current];
}

function apply(locale: Locale): void {
    localeState.current = locale;

    if (!browser) {
        return;
    }

    document.documentElement.lang = locale;
    localStorage.setItem(storageKey, locale);
}

/** Restores the saved locale. A first visit stays in English. */
export function loadLocale(): void {
    if (!browser) {
        return;
    }

    const parsed = Locale.safeParse(localStorage.getItem(storageKey));
    if (parsed.success) {
        apply(parsed.data);
    }
}

export function toggleLocale(): void {
    apply(localeState.current === "en" ? "es" : "en");
}
