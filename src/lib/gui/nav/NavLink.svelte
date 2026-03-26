<script lang="ts">
    type Props = {
        text: string;
        href: string;
    };

    let { text, href }: Props = $props();
</script>

<a
    class="navbar-item"
    target="_blank"
    {href}
    title={text}
>
    {text}
</a>
