<script lang="ts">
    import { ArrowLeft } from "@lucide/svelte";
    import { appState } from "$lib/state.svelte.ts";
    import type { Snippet } from "svelte";

    type Props = {
        title: string;
        description?: string;
        children: Snippet;
    };

    let { title, description, children }: Props = $props();

    function goHome(): void {
        appState.activePage = "home";
    }
</script>

<div class="mx-auto max-w-2xl px-4 py-12 sm:px-6">
    <a
        href="?page=home"
        onclick={goHome}
        class="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
    >
        <ArrowLeft class="h-4 w-4" />
        Back to tools
    </a>

    <h1 class="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
    </h1>
    {#if description}
        <p class="mt-2 text-slate-500 dark:text-slate-400">{description}</p>
    {/if}

    <div class="mt-8 flex flex-col gap-6">
        {@render children()}
    </div>
</div>
