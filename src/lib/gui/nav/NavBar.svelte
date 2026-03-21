<script lang="ts">
    import NavItem from "./NavItem.svelte";
    import { generateBranchLink } from "$lib/buildInfo";
    import text from "$lib/text";
    import { appState } from "$lib/state.svelte";

    let navMenu = $state<HTMLElement>();
    let navToggle = $state<HTMLElement>();

    function closeMenu(): void {
        if (navToggle) {
            navToggle.classList.remove("is-active");
        }

        if (navMenu) {
            navMenu.classList.remove("is-active");
        }
    }

    function toggleMenu(): void {
        if (navToggle) {
            navToggle.classList.toggle("is-active");
        }

        if (navMenu) {
            navMenu.classList.toggle("is-active");
        }
    }

    $effect(() => {
        appState.activePage && closeMenu();
    });
</script>

<nav class="navbar">
    <a
        bind:this={navToggle}
        onclick={() => toggleMenu()}
        role="button"
        tabindex="0"
        class="navbar-burger"
        data-target="navMenu"
        aria-label="menu"
        aria-expanded="false"
        onkeydown={() => {}}
        href={`javascript:;`}
    >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
    </a>

    <div bind:this={navMenu} class="navbar-menu" id="navMenu">
        <div class="navbar-start">
            <NavItem text={text.home} page="home" />

            <div class="navbar-item has-dropdown is-hoverable">
                <div class="navbar-link">{text.sectionText}</div>

                <div class="navbar-dropdown">
                    <NavItem text={text.removeBreakLines} page="text.removeBreakLines" />

                    <NavItem text={text.removeDuplicates} page="text.removeDuplicates" />
                </div>
            </div>
        </div>

        {#if appState.buildInfo.sha != ""}
            <div class="navbar-end">
                <a class="navbar-item" title={text.checkOnGitHub} href={generateBranchLink(appState.buildInfo.actor, appState.buildInfo.repo, appState.buildInfo.ref)} target="_blank">
                    {text.checkOnGitHub}
                </a>
            </div>
        {/if}
    </div>
</nav>
