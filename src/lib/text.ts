import { localeState, type Locale } from "$lib/locale.svelte.ts";
import type { Category } from "$lib/tools";

type Text = {
    home: string;
    checkOnGitHub: string;
    toggleTheme: string;
    switchLanguage: string;
    tagline: string;
    searchPlaceholder: string;
    all: string;
    noResults: string;
    toolsCraftedBy: (count: number) => string;
    viewCommit: string;
    backToTools: string;
    input: string;
    output: string;
    list: string;
    copy: string;
    copied: string;
    copyResult: string;
    categories: Record<Category, string>;
};

const dictionary: Record<Locale, Text> = {
    en: {
        home: "Home",
        checkOnGitHub: "Check on GitHub",
        toggleTheme: "Toggle theme",
        switchLanguage: "Cambiar a español",
        tagline: "A curated collection of minimalist web utilities by",
        searchPlaceholder: "Search tools...",
        all: "All",
        noResults: "No tools match your search.",
        toolsCraftedBy: (count) => `${count} tools crafted by`,
        viewCommit: "View this build's commit",
        backToTools: "Back to tools",
        input: "Input",
        output: "Output",
        list: "List",
        copy: "Copy",
        copied: "Copied!",
        copyResult: "Copy result",
        categories: {
            AI: "AI",
            Coding: "Coding",
            Converters: "Converters",
            Images: "Images",
            Learning: "Learning",
            "Plain text": "Plain text",
            SQL: "SQL",
            Translation: "Translation",
            Fun: "Fun",
        },
    },
    es: {
        home: "Inicio",
        checkOnGitHub: "Ver en GitHub",
        toggleTheme: "Cambiar tema",
        switchLanguage: "Switch to English",
        tagline: "Una colección curada de utilidades web minimalistas por",
        searchPlaceholder: "Buscar herramientas...",
        all: "Todas",
        noResults: "Ninguna herramienta coincide con tu búsqueda.",
        toolsCraftedBy: (count) => `${count} herramientas creadas por`,
        viewCommit: "Ver el commit de esta versión",
        backToTools: "Volver a las herramientas",
        input: "Entrada",
        output: "Salida",
        list: "Lista",
        copy: "Copiar",
        copied: "¡Copiado!",
        copyResult: "Copiar resultado",
        categories: {
            AI: "IA",
            Coding: "Programación",
            Converters: "Conversores",
            Images: "Imágenes",
            Learning: "Aprendizaje",
            "Plain text": "Texto plano",
            SQL: "SQL",
            Translation: "Traducción",
            Fun: "Diversión",
        },
    },
};

/** UI strings for the active locale. Reactive when read inside markup or $derived. */
export function t(): Text {
    return dictionary[localeState.current];
}
