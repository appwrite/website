<script lang="ts">
    import { afterNavigate, goto } from '$app/navigation';
    import { layoutState } from '$lib/layouts/Docs.svelte';
    import { isMac } from '$lib/utils/platform';
    import { Command } from 'bits-ui';

    import { createCombobox, melt } from '@melt-ui/svelte';

    import { type Hit, type Hits, MeiliSearch } from 'meilisearch';

    const client = new MeiliSearch({
        host: 'https://ms-4f2b8bcd5490-29219.fra.meilisearch.io',
        apiKey: 'b347cbb673ff7c143dfb2dca1dda55c2e849e585'
    });

    // const client = new MeiliSearch({
    //     host: 'https://search.appwrite.org',
    //     apiKey: '10a5fea149bfaff21ef4d7cbe7f8a09d4fab404d6c3510279a365e065f8955a7'
    // });

    const index = client.index<Props>('website');

    type Props = {
        url: string;
        title?: string;
        uid?: string;
        meta?: Record<string, string>;
        page_block?: number;
        urls_tags?: Array<string>;
        h1?: string;
        h2?: string;
        h3?: string;
        h4?: string;
        h5?: string;
        h6?: string;
        p?: string;
        anchor?: string;
    };

    let results: Hits<Props> = [];

    async function search(value: string) {
        return index.search(value, {
            limit: 20
        });
    }

    async function handleInput(value: string) {
        if (!value) {
            results = [];
        } else {
            const response = await search(value);
            results = response.hits;
        }
    }

    function createHref(hit: Hit<Props>): string {
        const anchor = hit.anchor === '#' ? '' : (hit.anchor ?? '');
        const target = hit.url + anchor;

        return target.toString();
    }

    const recommended: Hits<Props> = [
        {
            uid: 'recommended-references-account',
            url: '/docs/references/cloud/client-web/account',
            h1: 'API reference',
            h2: 'Account'
        },
        {
            uid: 'recommended-references-teams',
            url: '/docs/references/cloud/client-web/teams',
            h1: 'API reference',
            h2: 'Teams'
        },
        {
            uid: 'recommended-references-databases',
            url: '/docs/references/cloud/client-web/databases',
            h1: 'API reference',
            h2: 'Databases'
        },
        {
            uid: 'recommended-references-storage',
            url: '/docs/references/cloud/client-web/storage',
            h1: 'API reference',
            h2: 'Storage'
        }
    ];

    let inputEl: HTMLInputElement;

    function handleKeypress(event: KeyboardEvent) {
        const cmdPressed = isMac() ? event.metaKey : event.ctrlKey;
        if (cmdPressed && event.key.toLowerCase() === 'k') {
            event.preventDefault();
            $layoutState.showSearch = true;
        } else if (event.key.toLowerCase() === 'escape' || event.key.toLowerCase() === 'esc') {
            event.preventDefault();
            $layoutState.showSearch = false;
        }
    }

    function getSubtitleContent(hit: Hit): { header?: string; subtitle?: string } {
        return {
            header: hit.h1,
            subtitle: hit.h2 ?? hit.h3 ?? hit.h4 ?? hit.h5 ?? hit.h6
        };
    }
</script>

<svelte:window on:keydown={handleKeypress} />

<Command.Root>
    <Command.Input placeholder="Search for something..." />
</Command.Root>
