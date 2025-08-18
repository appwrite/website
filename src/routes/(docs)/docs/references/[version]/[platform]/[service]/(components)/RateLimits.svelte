<script lang="ts">
    import type { SDKMethod } from '$lib/utils/specs';
    import { trackEvent } from '$lib/actions/analytics';

    export let method: SDKMethod;
    export let platformType: string;

    const rateKeys = method['rate-key'];
    const rateTime = method['rate-time'];
    const rateLimit = method['rate-limit'];

    const RateKeys = {
        ip: 'IP',
        userId: 'USER ID',
        url: 'URL',
        phone: 'PHONE',
        token: 'TOKEN',
        method: 'METHOD',
        email: 'EMAIL'
    } as const;

    function hasMultipleKeys(keys: string | string[]): keys is string[] {
        if (Array.isArray(keys)) {
            return true;
        } else return false;
    }

    function parseKeys(keys: string) {
        if (!keys) return '';
        const keyValuePairs = keys.split(',');

        return keyValuePairs
            .map((pair) => {
                const key = pair.split(':')[0] as keyof typeof RateKeys;
                return RateKeys[key];
            })
            .join(' + ');
    }
</script>

<div class="web-card is-normal p-4">
    <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
            {#if platformType === 'CLIENT'}
                <p class="text-sub-body">
                    This endpoint is rate limited. You can only make a limited number of request to
                    his endpoint within a specific time frame.
                </p>
            {:else}
                <p class="text-sub-body">
                    This endpoint is not limited when using Server SDKs with API keys. If you are
                    using SSR with <code>setSession</code>, these rate limits will still apply.
                    <a
                        href="/docs/products/auth/server-side-rendering#rate-limits"
                        class="u-link text-primary"
                    >
                        Learn more about SSR rate limits.
                    </a>
                </p>
            {/if}
            <p class="text-sub-body">The limit is applied for each unique limit key.</p>
        </div>
        <div class="web-table-wrapper">
            <div class="web-table-scroll is-remove-outer-styles">
                <table class="web-table">
                    <thead class="web-table-header">
                        <tr class="web-table-row">
                            <th class="web-table-head-col">
                                <div class="text-eyebrow font-aeonik-fono text-primary uppercase">
                                    Time frame
                                </div>
                            </th>
                            <th class="web-table-head-col">
                                <div class="text-eyebrow font-aeonik-fono text-primary uppercase">
                                    Attempts
                                </div>
                            </th>
                            <th class="web-table-head-col">
                                <div class="text-eyebrow font-aeonik-fono text-primary uppercase">
                                    Key
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="web-table-body">
                        {#if hasMultipleKeys(rateKeys)}
                            {#each rateKeys as key, i}
                                <tr class="web-table-row">
                                    <td class="web-table-col"
                                        >{Math.floor(rateTime / 60)} minutes</td
                                    >
                                    <td class="web-table-col">{rateLimit} requests</td>
                                    <td class="web-table-col">{parseKeys(key)}</td>
                                </tr>
                            {/each}
                        {:else if typeof rateKeys === 'string'}
                            <tr class="web-table-row">
                                <td class="web-table-col">{Math.floor(rateTime / 60)} minutes</td>
                                <td class="web-table-col">{rateLimit} requests</td>
                                <td class="web-table-col">{parseKeys(rateKeys)}</td>
                            </tr>
                        {/if}
                    </tbody>
                </table>
            </div>
        </div>
        <div class="">
            <a
                href="/docs/advanced/platform/rate-limits"
                class="u-link text-primary"
                onclick={() => trackEvent(`docs-rate_limits_learn_more-click`)}
            >
                <span>Learn more about rate limits</span>
                <span class="web-icon-arrow-right" aria-hidden="true"></span>
            </a>
        </div>
    </div>
</div>

<style>
    .web-card {
        margin-block-end: 2rem;
    }
</style>
