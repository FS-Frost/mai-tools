<script lang="ts">
    import { Moon, Sun } from "@lucide/svelte";
    import { generateBranchLink } from "$lib/buildInfo";
    import { appState } from "$lib/state.svelte.ts";
    import { themeState, toggleTheme } from "$lib/theme.svelte.ts";
    import text from "$lib/text";

    const githubLink = $derived(
        appState.buildInfo.sha != ""
            ? generateBranchLink(appState.buildInfo.actor, appState.buildInfo.repo, appState.buildInfo.ref)
            : "https://github.com/FS-Frost/mai-tools",
    );

    function goHome(): void {
        appState.activePage = "home";
    }
</script>

<header
    class="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/80"
>
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
            href="?page=home"
            onclick={goHome}
            class="flex items-center text-sm font-bold tracking-tight text-slate-900 transition-colors hover:text-brand-600 dark:text-white dark:hover:text-brand-400"
        >
            MAI TOOLS
        </a>

        <div class="flex items-center gap-1">
            <button
                type="button"
                onclick={toggleTheme}
                aria-label="Toggle theme"
                title="Toggle theme"
                class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
                {#if themeState.current === "dark"}
                    <Sun class="h-5 w-5" />
                {:else}
                    <Moon class="h-5 w-5" />
                {/if}
            </button>

            <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                title={text.checkOnGitHub}
                class="flex h-9 items-center gap-2 rounded-lg px-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path
                        d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.92 1.23 3.23 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"
                    />
                </svg>
                <span class="hidden sm:inline">GitHub</span>
            </a>
        </div>
    </nav>
</header>
