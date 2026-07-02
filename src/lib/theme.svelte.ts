import { browser } from "$app/environment";

export type Theme = "light" | "dark";

function initialTheme(): Theme {
    if (!browser) {
        return "light";
    }

    // Kept in sync with the anti-FOUC script in app.html.
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export const themeState = $state<{ current: Theme }>({
    current: initialTheme(),
});

function apply(theme: Theme): void {
    themeState.current = theme;

    if (!browser) {
        return;
    }

    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
}

export function toggleTheme(): void {
    apply(themeState.current === "dark" ? "light" : "dark");
}
