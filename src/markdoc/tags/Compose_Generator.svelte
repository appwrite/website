<script lang="ts">
    import { Tooltip } from '$lib/components';
    import {
        generateCompose,
        generateEnv,
        type Database
    } from '$lib/components/compose-generator/composeData';
    import { getCodeHtml } from '$lib/utils/code';
    import { copy } from '$lib/utils/copy';
    import '$scss/hljs.css';
    import { melt } from '@melt-ui/svelte';

    let db = $state<Database>('mongodb');
    let assistant = $state(true);
    let activeTab = $state<'compose' | 'env'>('compose');

    let composeContent = $derived(generateCompose(db, assistant));
    let envContent = $derived(generateEnv(db, assistant));

    let activeContent = $derived(activeTab === 'compose' ? composeContent : envContent);
    let activeFilename = $derived(activeTab === 'compose' ? 'docker-compose.yml' : '.env');
    let activeLanguage = $derived(activeTab === 'compose' ? ('yaml' as const) : ('sh' as const));

    let codeHtml = $derived(
        getCodeHtml({ content: activeContent, language: activeLanguage, withLineNumbers: true })
    );

    let copyText = $state('Copy');

    async function handleCopy() {
        await copy(activeContent);
        copyText = 'Copied!';
        setTimeout(() => {
            copyText = 'Copy';
        }, 1000);
    }

    function handleDownload() {
        const blob = new Blob([activeContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = activeFilename;
        a.click();
        URL.revokeObjectURL(url);
    }
</script>

<section class="not-prose mt-6 mb-8 flex flex-col gap-6">
    <div class="flex flex-col gap-4">
        <span class="text-sub-body text-primary font-medium">Database</span>
        <div class="grid grid-cols-2 gap-3">
            <button
                class="bg-card border-smooth flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 text-left transition-all {db ===
                'mongodb'
                    ? 'border-primary'
                    : 'hover:bg-smooth'}"
                onclick={() => (db = 'mongodb')}
            >
                <div
                    class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors {db ===
                    'mongodb'
                        ? 'border-primary'
                        : 'border-smooth'}"
                >
                    {#if db === 'mongodb'}
                        <div class="bg-primary h-2.5 w-2.5 rounded-full"></div>
                    {/if}
                </div>
                <div>
                    <div class="text-primary font-medium">MongoDB</div>
                    <div class="text-secondary text-sm">Document-based database</div>
                </div>
            </button>
            <button
                class="bg-card border-smooth flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 text-left transition-all {db ===
                'mariadb'
                    ? 'border-primary'
                    : 'hover:bg-smooth'}"
                onclick={() => (db = 'mariadb')}
            >
                <div
                    class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors {db ===
                    'mariadb'
                        ? 'border-primary'
                        : 'border-smooth'}"
                >
                    {#if db === 'mariadb'}
                        <div class="bg-primary h-2.5 w-2.5 rounded-full"></div>
                    {/if}
                </div>
                <div>
                    <div class="text-primary font-medium">MariaDB</div>
                    <div class="text-secondary text-sm">Relational SQL database</div>
                </div>
            </button>
        </div>
    </div>

    <div class="flex flex-col gap-4">
        <span class="text-sub-body text-primary font-medium">Appwrite Assistant</span>
        <div class="grid grid-cols-2 gap-3">
            <button
                class="bg-card border-smooth flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 text-left transition-all {assistant
                    ? 'border-primary'
                    : 'hover:bg-smooth'}"
                onclick={() => (assistant = true)}
            >
                <div
                    class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors {assistant
                        ? 'border-primary'
                        : 'border-smooth'}"
                >
                    {#if assistant}
                        <div class="bg-primary h-2.5 w-2.5 rounded-full"></div>
                    {/if}
                </div>
                <div>
                    <div class="text-primary font-medium">Enabled</div>
                    <div class="text-secondary text-sm">AI assistant powered by OpenAI</div>
                </div>
            </button>
            <button
                class="bg-card border-smooth flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 text-left transition-all {!assistant
                    ? 'border-primary'
                    : 'hover:bg-smooth'}"
                onclick={() => (assistant = false)}
            >
                <div
                    class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors {!assistant
                        ? 'border-primary'
                        : 'border-smooth'}"
                >
                    {#if !assistant}
                        <div class="bg-primary h-2.5 w-2.5 rounded-full"></div>
                    {/if}
                </div>
                <div>
                    <div class="text-primary font-medium">Disabled</div>
                    <div class="text-secondary text-sm">No AI assistant</div>
                </div>
            </button>
        </div>
    </div>

    <section class="dark web-code-snippet" aria-label="configuration file panel">
        <header class="web-code-snippet-header">
            <div class="web-code-snippet-header-start">
                <div class="flex gap-4">
                    <button
                        class="relative cursor-pointer px-1 py-1 text-sm {activeTab === 'compose'
                            ? 'after:bg-primary text-white after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px'
                            : 'text-white/60 hover:text-white/80'}"
                        onclick={() => (activeTab = 'compose')}
                    >
                        docker-compose.yml
                    </button>
                    <button
                        class="relative cursor-pointer px-1 py-1 text-sm {activeTab === 'env'
                            ? 'after:bg-primary text-white after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px'
                            : 'text-white/60 hover:text-white/80'}"
                        onclick={() => (activeTab = 'env')}
                    >
                        .env
                    </button>
                </div>
            </div>
            <div class="web-code-snippet-header-end">
                <ul class="buttons-list flex gap-2">
                    <li class="buttons-list-item">
                        <Tooltip>
                            {#snippet asChild({ trigger })}
                                <button
                                    use:melt={trigger}
                                    onclick={handleDownload}
                                    class="web-icon-button"
                                    aria-label="download file"
                                >
                                    <span class="icon-download" aria-hidden="true"></span>
                                </button>
                            {/snippet}
                            {#snippet tooltip()}
                                Download
                            {/snippet}
                        </Tooltip>
                    </li>
                    <li class="buttons-list-item">
                        <Tooltip>
                            {#snippet asChild({ trigger })}
                                <button
                                    use:melt={trigger}
                                    onclick={handleCopy}
                                    class="web-icon-button"
                                    aria-label="copy code"
                                >
                                    <span class="web-icon-copy" aria-hidden="true"></span>
                                </button>
                            {/snippet}
                            {#snippet tooltip()}
                                {copyText}
                            {/snippet}
                        </Tooltip>
                    </li>
                </ul>
            </div>
        </header>
        <div class="web-code-snippet-content max-h-128 overflow-y-auto">
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html codeHtml}
        </div>
    </section>
</section>
