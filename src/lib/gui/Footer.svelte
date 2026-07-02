<script lang="ts">
    import { GitCommitHorizontal } from "@lucide/svelte";
    import {
        generateCommitLink,
        generateShortSha,
    } from "$lib/buildInfo";
    import { appState } from "$lib/state.svelte.ts";
    import { tools } from "$lib/tools";

    const build = $derived(appState.buildInfo);
</script>

<footer class="border-t border-slate-200/70 dark:border-slate-800/70">
    <div
        class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:px-6"
    >
        <p>
            {tools.length} tools crafted by
            <a
                href="https://github.com/FS-Frost"
                target="_blank"
                rel="noopener noreferrer"
                class="font-medium text-slate-700 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
            >
                Eduardo Hinojosa (Frost)
            </a>
        </p>

        {#if build.sha != ""}
            <a
                href={generateCommitLink(build.actor, build.repo, build.sha)}
                target="_blank"
                rel="noopener noreferrer"
                title="View this build's commit"
                class="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
            >
                <GitCommitHorizontal class="h-4 w-4" />
                {generateShortSha(build.sha)}
            </a>
        {/if}
    </div>
</footer>
