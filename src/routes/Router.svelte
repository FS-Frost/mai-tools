<script lang="ts">
    import { onMount } from "svelte";
    import Home from "$lib/gui/pages/Home.svelte";
    import { appState } from "$lib/state.svelte.ts";
    import { Page } from "$lib/page";
    import RemoveBreakLines from "$lib/gui/pages/Text/RemoveBreakLines.svelte";
    import RemoveDuplicates from "$lib/gui/pages/Text/RemoveDuplicates.svelte";

    onMount(() => {
        const urlParams = new URLSearchParams(location.search);
        const rawUrlPage = urlParams.get("page") ?? "";
        const parseResult = Page.safeParse(rawUrlPage);
        if (parseResult.success) {
            appState.activePage = parseResult.data;
        }
    });
</script>

{#if appState.activePage == "home"}
    <Home />
{:else if appState.activePage == "text.removeBreakLines"}
    <RemoveBreakLines />
{:else if appState.activePage == "text.removeDuplicates"}
    <RemoveDuplicates />
{/if}
