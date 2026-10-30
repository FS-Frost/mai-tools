<script lang="ts">
    import ButtonCopyResult from "$lib/gui/ButtonCopyResult.svelte";
    import ToolLayout from "$lib/gui/ToolLayout.svelte";
    import { t } from "$lib/text";

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
        "w-full resize-y rounded-lg border border-slate-300 bg-white p-3 font-mono text-sm text-slate-800 placeholder:text-slate-400 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:focus:border-slate-100 dark:focus:ring-slate-100";
    const labelClass = "mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300";
</script>

<ToolLayout toolId="text.removeDuplicates">
    <div>
        <label class={labelClass} for="input">{t().list}</label>
        <textarea id="input" bind:value={input} rows="6" class={fieldClass} placeholder="1, 2, 3"></textarea>
    </div>

    <div>
        <div class="mb-1.5 flex items-center justify-between">
            <label class={labelClass + " mb-0"} for="output">{t().output}</label>
            <ButtonCopyResult rawResultLines={output} />
        </div>
        <textarea id="output" value={output} readonly rows="6" class={fieldClass} placeholder={t().output}></textarea>
    </div>
</ToolLayout>
