<script lang="ts">
    import { Tabs } from '$lib/UI';

    const tabs = [
        {
            label: 'List files',
            code: `list files`
        },
        {
            label: 'Create file',
            code: `create file`
        },
        {
            label: 'Get file',
            code: `get file`
        },
        {
            label: 'Delete file',
            code: `delete file`
        }
    ];

    let tab = 'free';
</script>

<div class="web-u-gap-20 u-min-width-0 u-max-width-100-percent flex flex-col">
    <Tabs bind:tab tabs={tabs.map((t) => t.label)} let:TabsList>
        <TabsList class=" web-u-mobile-divider web-u-container-query-inline" stretch let:tab>
            <span class="text-body font-medium capitalize">{tab}</span>
        </TabsList>
    </Tabs>
    <section class="theme-dark web-code-snippet" aria-label="code-snippet panel">
        <header class="web-code-snippet-header">
            <div class="web-code-snippet-header-start">
                <div class="flex gap-4">
                    <div class="web-tag">
                        <span class="text">Node.js</span>
                    </div>
                </div>
            </div>
            <div class="web-code-snippet-header-end">
                <ul class="buttons-list flex gap-2">
                    <li class="buttons-list-item">
                        <!-- REPLACE with dynamic partial used in Header of docs -->
                        <button class="web-select is-colored">
                            <div class="physical-select">
                                <span>Web</span>
                            </div>
                            <span class="icon-cheveron-down" aria-hidden="true"></span>
                        </button>
                    </li>
                    <li class="buttons-list-item u-padding-inline-start-8">
                        <button
                            aria-describedby="SESItRlYoy"
                            id="zSXaeTV-HF"
                            data-state="closed"
                            data-melt-tooltip-trigger=""
                            class="web-icon-button"
                            aria-label="copy code from code-snippet"
                        >
                            <span class="web-icon-copy" aria-hidden="true"></span>
                        </button>
                    </li>
                </ul>
            </div>
        </header>
        <div class="web-code-snippet-content" style="block-size:13rem">
            <pre><code class="web-code language-text"><span class="line">[code]</span></code></pre>
        </div>
    </section>
</div>
