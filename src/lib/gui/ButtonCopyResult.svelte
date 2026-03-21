<script lang="ts">
    type Props = {
        rawResultLines: string;
    };

    let { rawResultLines }: Props = $props();

    async function copyResult(): Promise<void> {
        await navigator.clipboard.writeText(rawResultLines);
        alert("Text copied!");
    }
</script>

<i class="fa-solid fa-copy clickable" role="button" tabindex="0" title="Copy text" onclick={() => copyResult()} onkeydown={() => {}}></i>
