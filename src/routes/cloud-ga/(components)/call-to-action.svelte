<script lang="ts">
    import Cell from './grid-system/cell.svelte';
    import { Button } from '$lib/components/ui';
    import Grid from './grid-system/grid.svelte';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import { trackEvent } from '$lib/actions/analytics';
</script>

<div class="mx-auto -mb-[97px] flex max-w-6xl items-start justify-between">
    <Grid bottomBorder solidBorder rows={1}>
        <Cell column={4}>
            <div class="flex flex-col items-center justify-between gap-12 px-4 py-20 md:flex-row">
                <h3 class="font-aeonik-pro text-primary text-title max-w-xs self-start">
                    Build like a team of hundreds <span class="text-accent">_</span>
                </h3>

                <div class="flex w-full flex-col items-center gap-4 md:w-fit md:flex-row lg:-mr-4">
                    <Button
                        href={getAppwriteDashboardUrl()}
                        class="w-full! lg:w-fit!"
                        onclick={() => {
                            trackEvent(`pricing-get-started-click`);
                        }}>Start building</Button
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
