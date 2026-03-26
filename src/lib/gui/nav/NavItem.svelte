<script lang="ts">
    import type { Page } from "$lib/page";
    import { appState } from "$lib/state.svelte.ts";

    type Props = {
        text: string;
        page: Page;
    };

    let { text, page }: Props = $props();

    function generateLink(page: Page): string {
        return `?page=${page}`;
    }
</script>

<a
    class="navbar-item {page === appState.activePage ? 'is-active' : ''}"
    href={generateLink(page)}
    onclick={() => (appState.activePage = page)}
    title={text}
>
    {text}
</a>
