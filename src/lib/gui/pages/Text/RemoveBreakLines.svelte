<script lang="ts">
    import ButtonCopyResult from "$lib/gui/ButtonCopyResult.svelte";
    import ToolLayout from "$lib/gui/ToolLayout.svelte";
    import text from "$lib/text";

    let input = $state<string>("1\n2\n3");

    let output = $derived.by<string>(() => process(input));

    function process(input: string): string {
        return input.replaceAll("\n", " ");
    }

    const fieldClass =
        "w-full resize-y rounded-xl border border-slate-200 bg-white p-3 font-mono text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200";
    const labelClass = "mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300";
</script>

<ToolLayout title={text.removeBreakLines} description="Collapse line breaks into spaces to flatten any text block.">
    <div>
        <label class={labelClass} for="input">Input</label>
        <textarea id="input" bind:value={input} rows="6" class={fieldClass} placeholder="Input"></textarea>
    </div>

    <div>
        <div class="mb-1.5 flex items-center justify-between">
            <label class={labelClass + " mb-0"} for="output">Output</label>
            <ButtonCopyResult rawResultLines={output} />
        </div>
        <textarea id="output" value={output} readonly rows="6" class={fieldClass} placeholder="Output"></textarea>
    </div>
</ToolLayout>
