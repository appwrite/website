<script lang="ts">
    import { page } from '$app/state';
    import Cell from './grid-system/cell.svelte';
    import { Button } from '$lib/components/ui';
    import Grid from './grid-system/grid.svelte';
    import { trackEvent } from '$lib/actions/analytics';
    import { DEFAULT_HERO_CTA } from '$lib/statsig/constants';
    import { heroCtaIfShortStartBuilding } from '$lib/statsig/hero-query-overrides';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';

    const navCtaLabel = $derived(
        (page.data as { heroCta?: string | null }).heroCta ?? DEFAULT_HERO_CTA
    );
</script>

<div class="mx-auto -mb-[97px] flex max-w-6xl items-start justify-between">
    <Grid bottomBorder solidBorder rows={1}>
        <Cell column={4} class="py-12 md:py-30">
            <div class="flex flex-col items-center justify-between gap-8 px-4 md:flex-row">
                <h2 class="font-aeonik-pro text-primary text-title max-w-sm self-start">
                    Build like a team of hundreds<span class="text-accent">_</span>
                </h2>

                <div
                    class="flex w-full flex-col items-center gap-2 md:w-fit md:flex-row md:gap-4 lg:-mr-4"
                >
                    <Button
                        href={getAppwriteDashboardUrl()}
                        class="w-full! lg:w-fit!"
                        onclick={() => {
                            trackEvent(`pricing-get-started-click`);
                        }}>{heroCtaIfShortStartBuilding('Start building', navCtaLabel)}</Button
                    >
                    <Button
                        onclick={() => {
                            trackEvent(`pricing-view-plans-click`);
                        }}
                        href="/pricing"
                        class="w-full! lg:w-fit!"
                        variant="secondary">View plans</Button
                    >
                </div>
            </div>
        </Cell>
    </Grid>
</div>
