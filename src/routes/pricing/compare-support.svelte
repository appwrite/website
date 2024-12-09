<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { Select } from '$lib/components';
    import {
        supportOptions,
        type SupportFeature,
        type SupportFeatureKeys,
        supportFeatureKeyValues
    } from '$routes/pricing/index';

    let selectedOptionKey = 'basic';

    $: selectedOption = supportOptions.find((option) => option.key === selectedOptionKey);

    function getFeatureValue(features: SupportFeature, key: string) {
        return features[key as SupportFeatureKeys];
    }

    const supportOptionsSelect = supportOptions.map((option) => {
        return {
            value: option.key,
            label: `${option.header.title} - ${option.header.price}`
        };
    });
</script>

<div class="dark bg-[linear-gradient(180deg,_#232325E6_0%,#19191C_100%)] py-10">
    <div class="web-big-padding-section-level-2 container">
        <div class="relative">
            <article>
                <div class="container">
                    <header class="text-center">
                        <h3 class="text-title font-aeonik-pro text-primary">Support</h3>
                        <p class="text-body mt-4 font-medium">
                            We offer different support tiers for self-hosted projects who need
                            premium support.
                        </p>
                    </header>
                </div>
                <section class="flex justify-center lg:hidden">
                    <div class="mt-4 w-52">
                        <Select
                            id="platform"
                            bind:value={selectedOptionKey}
                            options={supportOptionsSelect}
                            nativeMobile
                        />
                    </div>
                </section>
                {#if selectedOption}
                    <div class="flex justify-center lg:hidden">
                        <a
                            href={selectedOption.header.href}
                            class="web-button mt-8"
                            class:is-secondary={selectedOption.header.button === 'secondary'}
                        >
                            <span class="text-sub-body font-medium">Contact us</span>
                        </a>
                    </div>
                    <section class="mt-16 grid grid-cols-2 lg:hidden">
                        {#each supportFeatureKeyValues as supportFeatureKeyValue}
                            <div class="border-t border-[#FFFFFF0F] py-4">
                                {supportFeatureKeyValue.label}
                            </div>
                            <div class="border-t border-[#FFFFFF0F] py-4 text-center">
                                {getFeatureValue(
                                    selectedOption.features,
                                    supportFeatureKeyValue.key
                                )}
                            </div>
                        {/each}
                    </section>
                {/if}
                <section class="mt-16 hidden grid-cols-[200px_repeat(3,_1fr)] lg:grid">
                    <div></div>
                    {#each supportOptions as supportOption}
                        <div
                            class="mx-4 mb-8 flex flex-col items-center gap-3 rounded-2xl border border-[#FFFFFF0F] bg-[#232325E6] p-2.5"
                        >
                            <div class="flex gap-2">
                                <span class="text-[#FFFFFF]">{supportOption.header.title}</span
                                ><span>{supportOption.header.price}</span>
                            </div>
                            <a
                                href={supportOption.header.href}
                                class="web-button"
                                class:is-secondary={supportOption.header.button === 'secondary'}
                            >
                                <span class="text-sub-body font-medium">Contact us</span>
                            </a>
                        </div>
                    {/each}
                    {#each supportFeatureKeyValues as supportFeatureKeyValue}
                        <div class="border-t border-[#FFFFFF0F] py-4">
                            {supportFeatureKeyValue.label}
                        </div>
                        <div class="border-t border-[#FFFFFF0F] py-4 text-center">
                            {getFeatureValue(
                                supportOptions[0].features,
                                supportFeatureKeyValue.key
                            )}
                        </div>
                        <div class="border-t border-[#FFFFFF0F] py-4 text-center">
                            {getFeatureValue(
                                supportOptions[1].features,
                                supportFeatureKeyValue.key
                            )}
                        </div>
                        <div class="border-t border-[#FFFFFF0F] py-4 text-center">
                            {getFeatureValue(
                                supportOptions[2].features,
                                supportFeatureKeyValue.key
                            )}
                        </div>
                    {/each}
                </section>
            </article>
        </div>
    </div>
</div>
