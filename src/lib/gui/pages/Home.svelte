<script lang="ts">
    const tools = [
        "Browser Local AI Chat",
        "English Dictionary",
        "Asu: Tools for subtitle automation",
        "QR Detector",
        "HUI: Reactive HTML UI framework",
        "Gocker: Docker commands",
        "Asu: Regex Parser",
        "Remove Break Lines",
        "Remove Duplicates",
        "Excel ↔ JSON",
        "JSON → OpenAPI",
        "SQL Playground",
        "Snake",
        "Palindrome Detector",
        "Random Facts"
    ];

    const row1 = [...tools];
    const row2 = [...tools].reverse();
    const row3 = [...tools].sort(() => Math.random() - 0.5);
</script>

<svelte:head>
    <title>Mai Tools</title>
</svelte:head>

<main class="home-container">
    <div class="hero">
        <h1 class="main-title">MAI TOOLS</h1>
        <p class="subtitle">A curated collection of minimalist web utilities by <a href="https://github.com/FS-Frost" target="_blank">Eduardo Hinojosa (Frost)</a>.</p>
    </div>

    <div class="marquee-container">
        <!-- Row 1: Right to Left -->
        <div class="marquee">
            <div class="marquee-inner left">
                {#each row1 as tool}
                    <span class="tool-tag">{tool}</span>
                {/each}
                {#each row1 as tool}
                    <span class="tool-tag">{tool}</span>
                {/each}
            </div>
        </div>

        <!-- Row 2: Left to Right -->
        <div class="marquee alternate">
            <div class="marquee-inner right">
                {#each row2 as tool}
                    <span class="tool-tag">{tool}</span>
                {/each}
                {#each row2 as tool}
                    <span class="tool-tag">{tool}</span>
                {/each}
            </div>
        </div>

        <!-- Row 3: Right to Left (Faster) -->
        <div class="marquee fast">
            <div class="marquee-inner left">
                {#each row3 as tool}
                    <span class="tool-tag">{tool}</span>
                {/each}
                {#each row3 as tool}
                    <span class="tool-tag">{tool}</span>
                {/each}
            </div>
        </div>
    </div>
</main>

<style>
    .home-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background: #000;
        color: #fff;
        font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            sans-serif;
    }

    .hero {
        text-align: center;
        margin-bottom: 2rem;
        z-index: 10;
    }

    .main-title {
        font-size: 5rem;
        font-weight: 900;
        letter-spacing: -3px;
        background: linear-gradient(180deg, #fff 0%, #777 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0;
        filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.2));
    }

    .subtitle {
        color: #888;
        font-size: 1.2rem;
        margin-top: 0.5rem;
    }

    .subtitle a {
        color: #fff;
        text-decoration: underline;
        text-decoration-color: rgba(255, 255, 255, 0.3);
        transition: text-decoration-color 0.3s ease;
    }

    .subtitle a:hover {
        text-decoration-color: rgba(255, 255, 255, 0.8);
    }

    .marquee-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        opacity: 0.4;
        filter: blur(1px);
        transform: rotate(-12deg) scale(1.4);
        pointer-events: none;
    }

    .marquee {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
    }

    .marquee-inner {
        display: inline-flex;
        gap: 3rem;
        padding-right: 3rem;
    }

    .left {
        animation: scrollLeft 60s linear infinite;
    }

    .right {
        animation: scrollRight 70s linear infinite;
    }

    .fast .left {
        animation-duration: 45s;
    }

    .tool-tag {
        font-size: 1.5rem;
        font-weight: 600;
        padding: 0.8rem 1.5rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 50px;
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(5px);
        transition: transform 0.3s ease;
    }

    @keyframes scrollLeft {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-50%);
        }
    }

    @keyframes scrollRight {
        from {
            transform: translateX(-50%);
        }
        to {
            transform: translateX(0);
        }
    }
</style>
