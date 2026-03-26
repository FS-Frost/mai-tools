<script lang="ts">
    import NavItem from "./NavItem.svelte";
    import NavLink from "./NavLink.svelte";
    import { generateBranchLink } from "$lib/buildInfo";
    import text from "$lib/text";
    import { appState } from "$lib/state.svelte.ts";

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
                <div class="navbar-link">{text.sectionAI}</div>

                <div class="navbar-dropdown">
                    <NavLink text="Browser Local AI Chat" href="https://fs-frost.github.io/mai-chat" />
                </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
                <div class="navbar-link">{text.sectionCoding}</div>

                <div class="navbar-dropdown">
                    <NavLink text="Asu: Parser to work with SubStation Alpha Subtitles in TypeScript" href="https://github.com/FS-Frost/asu-regex-js" />

                    <NavLink text="Gocker: Docker commands, but easy" href="https://github.com/FS-Frost/gocker" />

                    <NavLink text="HUI: Reactive HTML UI framework" href="https://fs-frost.github.io/hui" />
                </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
                <div class="navbar-link">{text.sectionConverters}</div>

                <div class="navbar-dropdown">
                    <NavLink text="Excel ↔ JSON" href="https://fs-frost.github.io/excel2json" />

                    <NavLink text="JSON → OpenAPI" href="https://fs-frost.github.io/json2openapi" />
                </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
                <div class="navbar-link">{text.sectionImages}</div>

                <div class="navbar-dropdown">
                    <NavLink text="QR Detector" href="https://fs-frost.github.io/qr-detector" />
                </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
                <div class="navbar-link">{text.sectionText}</div>

                <div class="navbar-dropdown">
                    <NavItem text={text.removeBreakLines} page="text.removeBreakLines" />

                    <NavItem text={text.removeDuplicates} page="text.removeDuplicates" />
                </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
                <div class="navbar-link">{text.sectionSQL}</div>

                <div class="navbar-dropdown">
                    <NavLink text="SQL Playground" href="https://fs-frost.github.io/sql-playground" />
                </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
                <div class="navbar-link">{text.sectionTranslation}</div>

                <div class="navbar-dropdown">
                    <NavLink text="Asu: Tools for subtitle automation" href="https://fs-frost.github.io/asu-web" />

                    <NavLink text="English Dictionary" href="https://fs-frost.github.io/dictionary" />
                </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
                <div class="navbar-link">{text.sectionVideogames}</div>

                <div class="navbar-dropdown">
                    <NavLink text="Palindrome Detector" href="https://fs-frost.github.io/palindrome-gui" />

                    <NavLink text="Random Facts" href="https://fs-frost.github.io/facts" />

                    <NavLink text="Snake" href="https://fs-frost.github.io/snake" />
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
