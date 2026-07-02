<script lang="ts">
    import ButtonCopyResult from "$lib/gui/ButtonCopyResult.svelte";
    import ToolLayout from "$lib/gui/ToolLayout.svelte";
    import text from "$lib/text";

    let input = $state<string>("1, 2, 3, 2");

    let output = $derived.by<string>(() => process(input));

    function process(input: string): string {
        const parts: string[] = input.replaceAll("\n", "").replaceAll(" ", "").split(",");

        const uniqueParts: string[] = [];

        for (const part of parts) {
            if (uniqueParts.includes(part)) {
                continue;
            }

            uniqueParts.push(part);
        }

        return uniqueParts.join(", ");
    }

    const fieldClass =
        "w-full resize-y rounded-xl border border-slate-200 bg-white p-3 font-mono text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200";
    const labelClass = "mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300";
</script>

<ToolLayout title={text.removeDuplicates} description="Strip duplicate entries from a comma-separated list.">
    <div>
        <label class={labelClass} for="input">List</label>
        <textarea id="input" bind:value={input} rows="6" class={fieldClass} placeholder="1, 2, 3"></textarea>
    </div>

    <div>
        <div class="mb-1.5 flex items-center justify-between">
            <label class={labelClass + " mb-0"} for="output">Output</label>
            <ButtonCopyResult rawResultLines={output} />
        </div>
        <textarea id="output" value={output} readonly rows="6" class={fieldClass} placeholder="Output"></textarea>
    </div>
</ToolLayout>
