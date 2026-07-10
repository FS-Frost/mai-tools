<script lang="ts">
    import {
        ArrowLeftRight,
        ArrowUpRight,
        Code,
        Database,
        Gamepad2,
        Image,
        Languages,
        Search,
        Sparkles,
        Type,
        type LucideIcon,
    } from "@lucide/svelte";
    import { appState } from "$lib/state.svelte.ts";
    import { Page } from "$lib/page";
    import { categories, tools, type Category, type Tool } from "$lib/tools";

    const categoryIcons: Record<Category, LucideIcon> = {
        AI: Sparkles,
        Coding: Code,
        Converters: ArrowLeftRight,
        Images: Image,
        "Plain text": Type,
        SQL: Database,
        Translation: Languages,
        "Video games": Gamepad2,
    };

    let activeCategory = $state<Category | "All">("All");
    let query = $state("");

    const filtered = $derived.by<Tool[]>(() => {
        const q = query.trim().toLowerCase();
        return tools.filter((tool) => {
            const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
            const matchesQuery =
                q === "" ||
                tool.name.toLowerCase().includes(q) ||
                tool.description.toLowerCase().includes(q) ||
                tool.category.toLowerCase().includes(q);
            return matchesCategory && matchesQuery;
        });
    });

    function openInternal(tool: Tool): void {
        const parsed = Page.safeParse(tool.id);
        if (parsed.success) {
            appState.activePage = parsed.data;
        }
    }
</script>

<svelte:head>
    <title>Mai Tools</title>
</svelte:head>

<div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
    <!-- Hero -->
    <section class="mx-auto max-w-2xl text-center">
        <h1
            class="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl"
        >
            MAI TOOLS
        </h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            A curated collection of minimalist web utilities by
            <a
                href="https://github.com/FS-Frost"
                target="_blank"
                rel="noopener noreferrer"
                class="font-medium text-brand-600 underline-offset-4 hover:underline dark:text-brand-400"
            >
                Eduardo Hinojosa (Frost)
            </a>.
        </p>
    </section>

    <!-- Controls -->
    <div class="mt-12 flex flex-col gap-4">
        <div class="relative mx-auto w-full max-w-md">
            <Search
                class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            />
            <input
                type="search"
                bind:value={query}
                placeholder="Search tools..."
                class="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:border-brand-500 dark:focus:ring-brand-500"
            />
        </div>

        <div class="flex flex-wrap justify-center gap-1.5">
            <button
                type="button"
                onclick={() => (activeCategory = "All")}
                class={[
                    "rounded-md px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors",
                    activeCategory === "All"
                        ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700",
                ]}
            >
                All
            </button>
            {#each categories as category}
                <button
                    type="button"
                    onclick={() => (activeCategory = category)}
                    class={[
                        "rounded-md px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors",
                        activeCategory === category
                            ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700",
                    ]}
                >
                    {category}
                </button>
            {/each}
        </div>
    </div>

    <!-- Gallery -->
    {#if filtered.length === 0}
        <p class="mt-16 text-center text-sm text-slate-500 dark:text-slate-400">
            No tools match your search.
        </p>
    {:else}
        <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {#each filtered as tool (tool.id)}
                {@const CategoryIcon = categoryIcons[tool.category]}
                <a
                    href={tool.href}
                    target={tool.external ? "_blank" : undefined}
                    rel={tool.external ? "noopener noreferrer" : undefined}
                    onclick={tool.external ? undefined : () => openInternal(tool)}
                    class="group relative flex flex-col gap-3 rounded-lg border border-slate-300 bg-white p-5 transition-colors hover:border-slate-400 hover:bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/30 dark:hover:border-slate-700 dark:hover:bg-slate-900/80"
                >
                    <div class="flex items-center justify-between">
                        <span
                            class="flex h-8 w-8 items-center justify-center rounded bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                            <CategoryIcon class="h-4 w-4" />
                        </span>
                        {#if tool.external}
                            <ArrowUpRight
                                class="h-4 w-4 text-slate-400 transition-colors group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300"
                            />
                        {/if}
                    </div>

                    <div>
                        <h3 class="font-bold text-slate-900 dark:text-white">
                            {tool.name}
                        </h3>
                        <p class="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                            {tool.description}
                        </p>
                    </div>

                    <span
                        class="mt-auto text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500"
                    >
                        {tool.category}
                    </span>
                </a>
            {/each}
        </div>
    {/if}
</div>
