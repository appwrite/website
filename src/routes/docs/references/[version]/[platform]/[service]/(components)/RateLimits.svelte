<script lang="ts">
    import type { SDKMethod } from '$lib/utils/specs';

    export let method: SDKMethod;
    export let platformType: string;

    const rateKeys = method['rate-key'];
    const rateTime = method['rate-time'];
    const rateLimit = method['rate-limit'];

    enum RateKeys {
        'ip' = 'IP',
        'userId' = 'USER ID',
        'url' = 'URL',
        'phone' = 'PHONE',
        'token' = 'TOKEN',
        'method' = 'METHOD',
        'email' = 'EMAIL'
    }

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

<div class="web-card is-normal u-padding-16">
    <div class="u-flex-vertical u-gap-24">
        <div class="u-flex-vertical u-gap-16">
            {#if platformType === 'CLIENT'}
                <p class="web-sub-body-400">
                    This endpoint is rate limited. You can only make a limited number of request to his
                    endpoint within a specific time frame.
                </p>
            {:else }
                <p class="web-sub-body-400">
                    This endpoint is not limited when using Server SDKs with API keys. If you are using SSR 
                    with <code>setSession</code>, these rate limits will still apply.
                    <a href="/docs/products/auth/server-side-rendering#rate-limits" class="u-link web-u-color-text-primary">
                        Learn more about SSR rate limits.
                    </a>
                </p>
            {/if}
            <p class="web-sub-body-400">The limit is applied for each unique limit key.</p>
        </div>
        <div class="web-table-wrapper">
            <div class="web-table-scroll is-remove-outer-styles">
                <table class="web-table">
                    <thead class="web-table-header">
                        <tr class="web-table-row">
                            <th class="web-table-head-col">
                                <div class="web-eyebrow web-u-color-text-primary">Time frame</div>
                            </th>
                            <th class="web-table-head-col">
                                <div class="web-eyebrow web-u-color-text-primary">Attempts</div>
                            </th>
                            <th class="web-table-head-col">
                                <div class="web-eyebrow web-u-color-text-primary">Key</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="web-table-body">
                        {#if hasMultipleKeys(rateKeys)}
                            {#each rateKeys as key, i}
                                <tr class="web-table-row">
                                    <td class="web-table-col">{Math.floor(rateTime / 60)} minutes</td
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
            <a href="/docs/advanced/platform/rate-limits" class="u-link web-u-color-text-primary">
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
