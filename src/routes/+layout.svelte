<script>
    import NavBar from "$lib/gui/nav/NavBar.svelte";
    import Footer from "$lib/gui/Footer.svelte";
    import { onMount } from "svelte";
    import "./styles.css";
    import { appState } from "$lib/state.svelte";
    import { getBuildInfo } from "$lib/buildInfo";

    onMount(async () => {
        appState.buildInfo = await getBuildInfo();
    });
</script>

<div class="flex min-h-screen flex-col">
    <NavBar />

    <main class="flex-1">
        <slot />
    </main>

    <Footer />
</div>
