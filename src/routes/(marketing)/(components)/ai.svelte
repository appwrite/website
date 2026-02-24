<script lang="ts">
    let active = $state(0);

    const categories = [
        {
            label: 'Agents',
            features: [
                {
                    title: 'MCP',
                    description:
                        'Let AI agents interact directly with your Appwrite backend via MCP.'
                },
                {
                    title: 'Agent Skills',
                    description: 'Provide AI agents ready-to-use tools for faster workflows.'
                },
                {
                    title: 'Agent Rules',
                    description: 'Define guardrails and policies that every agent must follow.'
                }
            ]
        },
        {
            label: 'Data & Intelligence',
            features: [
                {
                    title: 'Vector Store',
                    description: 'Store embeddings and enable fast AI-powered semantic search.'
                },
                {
                    title: 'Database Suggestions',
                    description: 'Let AI suggest columns and indexes for your database tables.'
                }
            ]
        },
        {
            label: 'Developer Tools',
            features: [
                {
                    title: 'Supported IDEs',
                    description: 'Use AI agents directly in VS Code, Cursor, and more.'
                },
                {
                    title: 'AI Function Templates',
                    description: 'Deploy AI-powered functions instantly using prebuilt templates.'
                }
            ]
        }
    ];
</script>

<div class="border-smooth border-t border-dashed">
    <div class="container py-16">
        <div class="mb-6 flex flex-col gap-8 lg:max-w-[calc((100%-2rem)/3)]">
            <h2 class="font-aeonik-pro text-description text-pretty">
                <span class="text-primary">Scale with AI.</span>
                <span class="text-secondary"> Boost workflows and agent capabilities</span>
            </h2>

            <div
                class="min-[512px]:bg-card min-[512px]:border-smooth grid max-w-[512px] grid-cols-1 gap-2 min-[512px]:inline-flex min-[512px]:h-10 min-[512px]:max-w-none min-[512px]:items-center min-[512px]:gap-3 min-[512px]:self-start min-[512px]:rounded-full min-[512px]:border min-[512px]:border-dashed min-[512px]:p-1"
            >
                {#each categories as category, i}
                    <button
                        class="text-caption h-[30px] w-full rounded-full px-3 font-medium whitespace-nowrap transition-colors min-[512px]:w-auto {active ===
                        i
                            ? 'bg-greyscale-800 text-primary'
                            : 'text-secondary hover:text-primary bg-white/2 min-[512px]:bg-transparent'}"
                        onclick={() => (active = i)}
                    >
                        {category.label}
                    </button>
                {/each}
            </div>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {#each categories[active].features as feature}
                <div
                    class="border-smooth flex flex-col gap-1.5 rounded-2xl border bg-white/2 px-6 py-4"
                >
                    <h3 class="font-aeonik-pro text-label text-primary">{feature.title}</h3>
                    <p class="text-sub-body text-secondary font-medium">{feature.description}</p>
                </div>
            {/each}
        </div>
    </div>
</div>
