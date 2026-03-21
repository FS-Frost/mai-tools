<script lang="ts">
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
</script>

<section>
    <h1>{text.removeDuplicates}</h1>

    <div class="field">
        <label class="label" for="">List</label>

        <div class="control">
            <textarea bind:value={input} class="textarea" placeholder="1, 2, 3"></textarea>
        </div>
    </div>

    <div class="field">
        <label class="label" for="">Output</label>

        <div class="control">
            <textarea bind:value={output} class="textarea" placeholder="Output"></textarea>
        </div>
    </div>
</section>

<style>
    section {
        width: 100%;
    }
</style>
