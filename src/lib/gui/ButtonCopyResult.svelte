<script lang="ts">
    import { Check, Copy } from "@lucide/svelte";

    type Props = {
        rawResultLines: string;
    };

    let { rawResultLines }: Props = $props();

    let copied = $state(false);
    let timeout: ReturnType<typeof setTimeout> | undefined;

    async function copyResult(): Promise<void> {
        await navigator.clipboard.writeText(rawResultLines);
        copied = true;
        clearTimeout(timeout);
        timeout = setTimeout(() => (copied = false), 1500);
    }
</script>

<button
    type="button"
    onclick={copyResult}
    title="Copy result"
    class="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
>
    {#if copied}
        <Check class="h-4 w-4 text-emerald-500" />
        <span>Copied!</span>
    {:else}
        <Copy class="h-4 w-4" />
        <span>Copy</span>
    {/if}
</button>
