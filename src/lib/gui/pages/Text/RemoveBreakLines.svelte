<script lang="ts">
    import text from "$lib/text";

    let input = $state<string>("1\n2\n3");

    let output = $derived.by<string>(() => process(input));

    function process(input: string): string {
        return input.replaceAll("\n", " ");
    }
</script>

<section>
    <h1>{text.removeBreakLines}</h1>

    <div class="field">
        <label class="label" for="">Input</label>

        <div class="control">
            <textarea bind:value={input} class="textarea" placeholder="Input"></textarea>
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
