<script lang="ts">
    import { Tooltip } from '$lib/components';
    import { Button } from '$lib/components/ui';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import {
        SHOW_SCALE_PLAN,
        SHOW_STARTER_PLAN,
        PRICING_CALCULATOR_FORCED_PLAN
    } from '$lib/constants/feature-flags';

    type Plan = 'free' | 'starter' | 'pro' | 'scale';

    interface PlanLimits {
        basePrice: number;
        bandwidthGB: number;
        storageGB: number;
        executions: number;
        users: number;
        dbReads: number;
        dbWrites: number;
        gbHours: number;
        realtimeConnections: number;
    }

    const planLimits: Record<Plan, PlanLimits> = {
        free: {
            basePrice: 0,
            bandwidthGB: 5,
            storageGB: 2,
            executions: 750000,
            users: 75000,
            dbReads: 500000,
            dbWrites: 250000,
            gbHours: 100,
            realtimeConnections: 250
        },
        starter: {
            basePrice: 10,
            bandwidthGB: 100,
            storageGB: 20,
            executions: 1500000,
            users: 100000,
            dbReads: 1000000,
            dbWrites: 500000,
            gbHours: 500,
            realtimeConnections: 500
        },
        pro: {
            basePrice: 25,
            bandwidthGB: 2000,
            storageGB: 150,
            executions: 3500000,
            users: 200000,
            dbReads: 1750000,
            dbWrites: 750000,
            gbHours: 1000,
            realtimeConnections: 500
        },
        scale: {
            basePrice: 599,
            bandwidthGB: 2000,
            storageGB: 150,
            executions: 3500000,
            users: 200000,
            dbReads: 1750000,
            dbWrites: 750000,
            gbHours: 1000,
            realtimeConnections: 750
        }
    };

    // Pricing for additional usage
    const additionalPricing = {
        bandwidthPer100GB: 15,
        storagePer100GB: 2.8,
        usersPer1000: 3,
        dbReadsPer100k: 0.06,
        dbWritesPer100k: 0.1,
        gbHoursPerGB: 0.06,
        executionsPer1M: 2,
        realtimeConnectionsPer1000: 5,
        imageTransformationsPer1000: 5
    };

    const planOptions = [
        { label: 'Free', value: 'free' },
        ...(SHOW_STARTER_PLAN ? [{ label: 'Starter', value: 'starter' }] : []),
        { label: 'Pro', value: 'pro' },
        ...(SHOW_SCALE_PLAN ? [{ label: 'Scale', value: 'scale' }] : [])
    ];
    const availablePlans = planOptions.map((option) => option.value) as Plan[];
    const forcedPlan = (PRICING_CALCULATOR_FORCED_PLAN as Plan | null) ?? null;
    const fallbackPlan = availablePlans[0] ?? 'pro';
    let selectedPlan: Plan =
        forcedPlan && availablePlans.includes(forcedPlan) ? forcedPlan : fallbackPlan;
    let bandwidthGB = 0;
    let storageGB = 0;
    let executions = 0;
    let users = 0;
    let dbReads = 0;
    let dbWrites = 0;
    let gbHours = 0;
    let realtimeConnections = 0;
    let imageTransformations = 0;
    const isPlanSelectionLocked = Boolean(forcedPlan && availablePlans.includes(forcedPlan));

    $: if (isPlanSelectionLocked && forcedPlan && selectedPlan !== forcedPlan) {
        selectedPlan = forcedPlan;
    }

    $: limits = planLimits[selectedPlan];

    function calculateAdditionalCost(
        usage: number,
        included: number,
        pricePerUnit: number,
        unitSize: number = 1
    ): number {
        const excess = Math.max(0, usage - included);
        if (excess === 0) return 0;
        return Math.ceil(excess / unitSize) * pricePerUnit;
    }

    $: additionalCosts = {
        bandwidth: calculateAdditionalCost(
            bandwidthGB,
            limits.bandwidthGB,
            additionalPricing.bandwidthPer100GB,
            100
        ),
        storage: calculateAdditionalCost(
            storageGB,
            limits.storageGB,
            additionalPricing.storagePer100GB,
            100
        ),
        users: calculateAdditionalCost(
            users,
            limits.users,
            additionalPricing.usersPer1000,
            1000
        ),
        dbReads: calculateAdditionalCost(
            dbReads,
            limits.dbReads,
            additionalPricing.dbReadsPer100k,
            100000
        ),
        dbWrites: calculateAdditionalCost(
            dbWrites,
            limits.dbWrites,
            additionalPricing.dbWritesPer100k,
            100000
        ),
        gbHours: calculateAdditionalCost(
            gbHours,
            limits.gbHours,
            additionalPricing.gbHoursPerGB,
            1
        ),
        executions: calculateAdditionalCost(
            executions,
            limits.executions,
            additionalPricing.executionsPer1M,
            1000000
        ),
        realtimeConnections: calculateAdditionalCost(
            realtimeConnections,
            limits.realtimeConnections,
            additionalPricing.realtimeConnectionsPer1000,
            1000
        ),
        imageTransformations: calculateAdditionalCost(
            imageTransformations,
            0,
            additionalPricing.imageTransformationsPer1000,
            1000
        )
    };

    $: isStarterPlan = selectedPlan === 'starter';
    $: totalAdditionalCost = Object.values(additionalCosts).reduce((sum, cost) => sum + cost, 0);
    $: totalMonthlyCost = limits.basePrice + (isStarterPlan ? 0 : totalAdditionalCost);

    function formatNumber(num: number): string {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    function formatCurrency(amount: number): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }).format(amount);
    }

    function getPlanUrl(plan: Plan): string {
        switch (plan) {
            case 'free':
                return getAppwriteDashboardUrl('/register');
            case 'starter':
                return getAppwriteDashboardUrl('/console?type=create&plan=starter');
            case 'pro':
                return getAppwriteDashboardUrl('/console?type=create&plan=tier-1');
            case 'scale':
                return getAppwriteDashboardUrl('/console?type=create&plan=tier-2');
        }
    }
</script>

<div class="web-white-section light py-10">
    <div class="web-big-padding-section-level-2">
        <div class="container">
            <header class="text-center mb-8">
                <h3 class="text-title font-aeonik-pro text-primary">Additional usage calculator</h3>
                <p class="text-main-body mt-4 font-medium text-primary opacity-90">
                    Estimate your monthly costs based on your expected usage.
                </p>
            </header>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Input Section -->
                <div class="lg:col-span-2 space-y-4">
                    <div class="web-card is-transparent has-border-gradient p-5 calculator-form-card">
                        {#if !isPlanSelectionLocked}
                            <div class="mb-4">
                                <label
                                    class="text-main-body text-primary font-medium block mb-2"
                                    for="plan-select"
                                >
                                    Select Plan
                                </label>
                                <div class="relative">
                                    <select
                                        bind:value={selectedPlan}
                                        id="plan-select"
                                        class="web-input-text w-full appearance-none"
                                    >
                                        {#each planOptions as option}
                                            <option value={option.value}>{option.label}</option>
                                        {/each}
                                    </select>
                                    <span
                                        class="icon-cheveron-down web-u-pointer-events-none absolute top-[11px] right-2"
                                        aria-hidden="true"
                                    ></span>
                                </div>
                            </div>
                        {:else}
                            <div class="mb-4 flex items-center justify-between">
                                <span class="text-main-body text-primary font-medium">Plan</span>
                                <span class="text-main-body text-primary font-medium capitalize">
                                    {selectedPlan}
                                </span>
                            </div>
                        {/if}

                        <div class="space-y-4">
                            <div>
                                <label
                                    class="text-main-body text-primary font-medium block mb-1"
                                    for="bandwidth-input"
                                >
                                    API Bandwidth (GB/month)
                                </label>
                                <input
                                    type="number"
                                    bind:value={bandwidthGB}
                                    min="0"
                                    step="1"
                                    class="web-input-text w-full"
                                    id="bandwidth-input"
                                    placeholder="0"
                                />
                                <p class="text-caption text-primary opacity-80 mt-1">
                                    Included: {formatNumber(limits.bandwidthGB)} GB
                                </p>
                            </div>

                            <div>
                                <label
                                    class="text-main-body text-primary font-medium block mb-1"
                                    for="storage-input"
                                >
                                    Storage (GB)
                                </label>
                                <input
                                    type="number"
                                    bind:value={storageGB}
                                    min="0"
                                    step="1"
                                    class="web-input-text w-full"
                                    id="storage-input"
                                    placeholder="0"
                                />
                                <p class="text-caption text-primary opacity-80 mt-1">
                                    Included: {formatNumber(limits.storageGB)} GB
                                </p>
                            </div>

                            <div>
                                <label
                                    class="text-main-body text-primary font-medium block mb-1"
                                    for="users-input"
                                >
                                    Monthly Active Users
                                </label>
                                <input
                                    type="number"
                                    bind:value={users}
                                    min="0"
                                    step="1000"
                                    class="web-input-text w-full"
                                    id="users-input"
                                    placeholder="0"
                                />
                                <p class="text-caption text-primary opacity-80 mt-1">
                                    Included: {formatNumber(limits.users)}
                                </p>
                            </div>

                            <div>
                                <label
                                    class="text-main-body text-primary font-medium block mb-1"
                                    for="executions-input"
                                >
                                    Function Executions (per month)
                                </label>
                                <input
                                    type="number"
                                    bind:value={executions}
                                    min="0"
                                    step="10000"
                                    class="web-input-text w-full"
                                    id="executions-input"
                                    placeholder="0"
                                />
                                <p class="text-caption text-primary opacity-80 mt-1">
                                    Included: {formatNumber(limits.executions)}
                                </p>
                            </div>

                            <div>
                                <label
                                    class="text-main-body text-primary font-medium block mb-1"
                                    for="dbreads-input"
                                >
                                    Database Reads (per month)
                                </label>
                                <input
                                    type="number"
                                    bind:value={dbReads}
                                    min="0"
                                    step="10000"
                                    class="web-input-text w-full"
                                    id="dbreads-input"
                                    placeholder="0"
                                />
                                <p class="text-caption text-primary opacity-80 mt-1">
                                    Included: {formatNumber(limits.dbReads)}
                                </p>
                            </div>

                            <div>
                                <label
                                    class="text-main-body text-primary font-medium block mb-1"
                                    for="dbwrites-input"
                                >
                                    Database Writes (per month)
                                </label>
                                <input
                                    type="number"
                                    bind:value={dbWrites}
                                    min="0"
                                    step="10000"
                                    class="web-input-text w-full"
                                    id="dbwrites-input"
                                    placeholder="0"
                                />
                                <p class="text-caption text-primary opacity-80 mt-1">
                                    Included: {formatNumber(limits.dbWrites)}
                                </p>
                            </div>

                            <div>
                                <label
                                    class="text-main-body text-primary font-medium block mb-1"
                                    for="gbhours-input"
                                >
                                    GB-Hours (per month)
                                </label>
                                <input
                                    type="number"
                                    bind:value={gbHours}
                                    min="0"
                                    step="10"
                                    class="web-input-text w-full"
                                    id="gbhours-input"
                                    placeholder="0"
                                />
                                <p class="text-caption text-primary opacity-80 mt-1">
                                    Included: {formatNumber(limits.gbHours)} GB-hours
                                </p>
                            </div>

                            <div>
                                <label
                                    class="text-main-body text-primary font-medium block mb-1"
                                    for="realtime-input"
                                >
                                    Realtime Connections
                                </label>
                                <input
                                    type="number"
                                    bind:value={realtimeConnections}
                                    min="0"
                                    step="100"
                                    class="web-input-text w-full"
                                    id="realtime-input"
                                    placeholder="0"
                                />
                                <p class="text-caption text-primary opacity-80 mt-1">
                                    Included: {formatNumber(limits.realtimeConnections)}
                                </p>
                            </div>

                            <div>
                                <label
                                    class="text-main-body text-primary font-medium block mb-1"
                                    for="images-input"
                                >
                                    Image Transformations (per month)
                                </label>
                                <input
                                    type="number"
                                    bind:value={imageTransformations}
                                    min="0"
                                    step="100"
                                    class="web-input-text w-full"
                                    id="images-input"
                                    placeholder="0"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Summary Section -->
                <div class="lg:col-span-1">
                    <div
                        class="web-card is-transparent has-border-gradient p-5 sticky top-24 calculator-summary-card"
                    >
                        <h4 class="text-main-body text-primary font-medium mb-4">
                            Estimated Monthly Cost
                        </h4>

                        <div class="space-y-3 mb-4">
                            <div class="flex justify-between items-center">
                                <span class="text-sub-body text-primary">Base Plan</span>
                                <span class="text-sub-body text-primary font-medium">
                                    {formatCurrency(limits.basePrice)}
                                </span>
                            </div>

                            {#if !isStarterPlan && totalAdditionalCost > 0}
                                <div class="pt-3 border-t border-gray-600 opacity-30">
                                    <p class="text-caption text-primary mb-3">Additional Usage:</p>
                                    {#if additionalCosts.bandwidth > 0}
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-caption text-primary">Bandwidth</span>
                                            <span class="text-caption text-primary font-medium">
                                                {formatCurrency(additionalCosts.bandwidth)}
                                            </span>
                                        </div>
                                    {/if}
                                    {#if additionalCosts.storage > 0}
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-caption text-primary">Storage</span>
                                            <span class="text-caption text-primary font-medium">
                                                {formatCurrency(additionalCosts.storage)}
                                            </span>
                                        </div>
                                    {/if}
                                    {#if additionalCosts.users > 0}
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-caption text-primary">Users</span>
                                            <span class="text-caption text-primary font-medium">
                                                {formatCurrency(additionalCosts.users)}
                                            </span>
                                        </div>
                                    {/if}
                                    {#if additionalCosts.executions > 0}
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-caption text-primary">Executions</span>
                                            <span class="text-caption text-primary font-medium">
                                                {formatCurrency(additionalCosts.executions)}
                                            </span>
                                        </div>
                                    {/if}
                                    {#if additionalCosts.dbReads > 0}
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-caption text-primary">DB Reads</span>
                                            <span class="text-caption text-primary font-medium">
                                                {formatCurrency(additionalCosts.dbReads)}
                                            </span>
                                        </div>
                                    {/if}
                                    {#if additionalCosts.dbWrites > 0}
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-caption text-primary">DB Writes</span>
                                            <span class="text-caption text-primary font-medium">
                                                {formatCurrency(additionalCosts.dbWrites)}
                                            </span>
                                        </div>
                                    {/if}
                                    {#if additionalCosts.gbHours > 0}
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-caption text-primary">GB-Hours</span>
                                            <span class="text-caption text-primary font-medium">
                                                {formatCurrency(additionalCosts.gbHours)}
                                            </span>
                                        </div>
                                    {/if}
                                    {#if additionalCosts.realtimeConnections > 0}
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-caption text-primary">Realtime</span>
                                            <span class="text-caption text-primary font-medium">
                                                {formatCurrency(additionalCosts.realtimeConnections)}
                                            </span>
                                        </div>
                                    {/if}
                                    {#if additionalCosts.imageTransformations > 0}
                                        <div class="flex justify-between items-center mb-2">
                                            <span class="text-caption text-primary">Images</span>
                                            <span class="text-caption text-primary font-medium">
                                                {formatCurrency(additionalCosts.imageTransformations)}
                                            </span>
                                        </div>
                                    {/if}
                                </div>
                            {:else if isStarterPlan}
                                <div class="pt-3 border-t border-gray-600 opacity-30">
                                    <div class="flex justify-between items-center">
                                        <div class="flex items-center gap-2">
                                            <span class="text-caption text-primary">Additional Usage</span>
                                            <Tooltip placement="top">
                                                <button class="icon-info text-primary" aria-label="Additional usage info"></button>
                                                {#snippet tooltip()}
                                                    Pay-as-you-go billing is available on Pro and Enterprise plans.
                                                {/snippet}
                                            </Tooltip>
                                        </div>
                                        <span class="text-caption text-primary font-medium">N/A</span>
                                    </div>
                                </div>
                            {/if}

                            <div class="pt-3 border-t border-gray-600 opacity-30">
                                <div class="flex items-end justify-between gap-4">
                                    <div class="flex flex-col leading-tight">
                                        <span class="text-main-body font-medium calculator-total-label">Total</span>
                                        <span class="text-caption calculator-total-note mt-1">per month</span>
                                    </div>
                                    <span class="text-title font-aeonik-pro calculator-total">
                                        {formatCurrency(totalMonthlyCost)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <Button
                            href={getPlanUrl(selectedPlan)}
                            class="w-full"
                            target={selectedPlan !== 'free' ? '_blank' : undefined}
                            rel={selectedPlan !== 'free' ? 'noopener noreferrer' : undefined}
                        >
                            <span class="text-sub-body font-medium">
                                {selectedPlan === 'free' ? 'Start building' : 'Get started'}
                            </span>
                        </Button>

                        <p class="text-caption text-primary mt-4 text-center">
                            Estimates are approximate. Final pricing may vary based on actual usage.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .web-card {
        @include gradients.border-gradient;
        --web-color-border: 240, 4%, 18%;
        --p-card-padding: 1.25rem;
    }

    // Remove background effects from calculator cards
    .calculator-form-card,
    .calculator-summary-card {
        background: transparent !important;
        -webkit-backdrop-filter: none !important;
        backdrop-filter: none !important;
    }

.calculator-form-card .web-input-text {
    padding-block: 0.6rem;
}

.calculator-form-card .text-caption {
    margin-top: 0.25rem !important;
}


.calculator-total-label,
.calculator-total-note,
.calculator-total {
    color: hsl(var(--web-color-primary)) !important;
    opacity: 1 !important;
}
</style>

