<script lang="ts">
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import { trackEvent } from '$lib/actions/analytics';
    import {
        fetchAppwriteCloudAggregateState,
        type AppwriteCloudAggregateState
    } from '$lib/status/fetch-appwrite-cloud-aggregate-state';

    const STATUS_PAGE_URL = 'https://status.appwrite.online';
    const REFRESH_MS = 60_000;

    let aggregateState: AppwriteCloudAggregateState = 'operational';

    function labelFor(state: AppwriteCloudAggregateState): string {
        switch (state) {
            case 'maintenance':
                return 'Maintenance in progress';
            case 'downtime':
                return 'Major service disruption';
            case 'degraded':
                return 'Some services affected';
            default:
                return 'All systems normal';
        }
    }

    onMount(() => {
        if (!browser) {
            return;
        }

        let cancelled = false;

        const refresh = () => {
            void fetchAppwriteCloudAggregateState().then((next) => {
                if (!cancelled) {
                    aggregateState = next;
                }
            });
        };

        /** Defer first fetch until idle (or short deadline) so it never competes with first paint. */
        let idleId: number | undefined;
        let fallbackId: ReturnType<typeof setTimeout> | undefined;
        if (typeof requestIdleCallback !== 'undefined') {
            idleId = requestIdleCallback(() => refresh(), { timeout: 2000 });
        } else {
            fallbackId = setTimeout(() => refresh(), 0);
        }

        const interval = window.setInterval(refresh, REFRESH_MS);

        return () => {
            cancelled = true;
            window.clearInterval(interval);
            if (idleId !== undefined && typeof cancelIdleCallback !== 'undefined') {
                cancelIdleCallback(idleId);
            }
            if (fallbackId !== undefined) {
                clearTimeout(fallbackId);
            }
        };
    });
</script>

<a
    class="web-footer-cloud-status web-icon-button is-more-content"
    href={STATUS_PAGE_URL}
    target="_blank"
    rel="noopener noreferrer"
    data-state={aggregateState}
    aria-label="{labelFor(aggregateState)}. Opens the public status page in a new tab."
    onclick={() => trackEvent('footer-cloud-status-badge-click')}
>
    <span class="web-footer-cloud-status__mark" aria-hidden="true">
        {#if aggregateState === 'operational'}
            <span class="web-icon-check web-footer-cloud-status__glyph"></span>
        {:else if aggregateState === 'maintenance'}
            <svg
                class="web-footer-cloud-status__svg"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                    fill="currentColor"
                />
            </svg>
        {:else}
            <svg class="web-footer-cloud-status__svg" viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M12 3 2 20h20L12 3zm0 3.5L17.5 18h-11L12 6.5zM11 10h2v5h-2v-5zm0 6h2v2h-2v-2z"
                />
            </svg>
        {/if}
    </span>
    <span class="web-footer-cloud-status__label">{labelFor(aggregateState)}</span>
</a>

<style lang="scss">
    @use '$scss/abstract' as *;

    /* Same chrome as `.web-icon-button.is-more-content`, extended for label + status tint */
    .web-footer-cloud-status.web-icon-button.is-more-content {
        position: relative;
        display: inline-flex;
        max-inline-size: 100%;
        align-items: center;
        gap: pxToRem(6);
        min-block-size: pxToRem(26);
        padding-block: pxToRem(1);
        padding-inline: pxToRem(5) pxToRem(7);
        text-decoration: none;
        inline-size: fit-content;
        /* Slightly smaller than footer link copy so the chip reads as secondary */
        font-size: calc(var(--web-footer-nav-link-font-size, var(--text-caption)) * 0.9);
        font-weight: var(--font-weight-regular);
        line-height: var(--web-footer-nav-link-line-height, var(--text-caption--line-height));
        letter-spacing: var(
            --web-footer-nav-link-letter-spacing,
            var(--text-caption--letter-spacing)
        );
        /*
         * `web-icon.css` matches `[class*=' web-icon-']` - that substring appears inside the
         * token `web-icon-button`, so the whole anchor wrongly gets `font-family: web-icon !important`.
         * Reset to body UI font; keep icon font only on the glyph span.
         */
        font-family: var(--web-font-family-inter), arial, sans-serif !important;

        .web-footer-cloud-status__label {
            white-space: nowrap;
        }

        .web-footer-cloud-status__mark {
            display: flex;
            width: pxToRem(16);
            height: pxToRem(16);
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            border-radius: pxToRem(6);
            background-color: hsl(var(--web-color-smooth));
            color: hsl(var(--web-color-secondary));
        }

        .web-footer-cloud-status__glyph {
            font-family: 'web-icon' !important;
            font-size: pxToRem(9);
            line-height: 1;
        }

        .web-footer-cloud-status__svg {
            width: pxToRem(10);
            height: pxToRem(10);
        }

        &[data-state='operational'] .web-footer-cloud-status__mark {
            background-color: hsl(var(--web-color-mint-500) / 0.14);
            color: hsl(var(--web-color-mint-500));
        }

        &[data-state='degraded'] .web-footer-cloud-status__mark {
            background-color: hsl(var(--web-color-yellow-500) / 0.14);
            color: hsl(var(--web-color-yellow-700));
        }

        &[data-state='downtime'] .web-footer-cloud-status__mark {
            background-color: hsl(var(--web-color-red-500) / 0.14);
            color: hsl(var(--web-color-red-700));
        }

        &[data-state='maintenance'] .web-footer-cloud-status__mark {
            background-color: hsl(var(--web-color-blue-500) / 0.14);
            color: hsl(var(--web-color-blue-700));
        }
    }
</style>
