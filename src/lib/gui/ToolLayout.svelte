<script lang="ts">
    import { ArrowLeft } from "@lucide/svelte";
    import { appState } from "$lib/state.svelte.ts";
    import { localize } from "$lib/locale.svelte.ts";
    import { t } from "$lib/text";
    import { findTool } from "$lib/tools";
    import type { Snippet } from "svelte";

    type Props = {
        /** Entry in $lib/tools; its name and description become the page heading. */
        toolId: string;
        children: Snippet;
    };

    let { toolId, children }: Props = $props();

    const tool = $derived(findTool(toolId));

    function goHome(): void {
        appState.activePage = "home";
    }
</script>

<div class="mx-auto max-w-2xl px-4 py-12 sm:px-6">
    <a
        href="?page=home"
        onclick={goHome}
        class="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
    >
        <ArrowLeft class="h-4 w-4" />
        {t().backToTools}
    </a>

    <h1 class="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        {localize(tool.name)}
    </h1>
    <p class="mt-2 text-slate-500 dark:text-slate-400">{localize(tool.description)}</p>

    <div class="mt-8 flex flex-col gap-6">
        {@render children()}
    </div>
</div>
