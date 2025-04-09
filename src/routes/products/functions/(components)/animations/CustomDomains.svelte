<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    import Chrome from '../../(assets)/chrome.svg';

    const sessionData = [
        {
            status: 'Verified',
            domain: 'appwrite.io'
        }
    ];
</script>

<div class="bg-greyscale-850/90 flex flex-col rounded-2xl p-2">
    <div
        class="flex h-[250px] flex-col justify-center overflow-hidden rounded-lg bg-white/[0.02] pt-6 pl-6"
    >
        <div
            class="mt-auto mr-0 mb-0 ml-auto flex h-[90%] w-[95%] flex-1 flex-col overflow-hidden rounded-tl-2xl border-t border-l border-white/[0.16] bg-gradient-to-br from-white/[0.1] via-white/[0.04] via-[61%] to-white/[0.1]"
        >
            <div class="mt-2 ml-2 flex flex-1 flex-col">
                <header
                    class="bg-greyscale-850/60 flex flex-col gap-2 rounded-tl-2xl border-b border-white/20 p-4"
                >
                    <div class="flex items-center gap-3">
                        <span class="font-aeonik-pro text-[18px] text-white">Function</span>
                        <span class="bg-greyscale-700/60 rounded-full px-2 py-1 font-mono text-xs"
                            >637a40ba7</span
                        >
                    </div>
                    <nav
                        class="relative z-10 mt-4 -mb-[17px] flex items-center gap-4 pl-1 text-[0.625rem]"
                    >
                        {#each ['Deployments', 'Executions', 'Domains', 'Usage', 'Settings'] as heading, i}
                            <button
                                class={classNames('border-b border-transparent pb-2', {
                                    ' border-white/40': i === 2
                                })}>{heading}</button
                            >
                        {/each}
                    </nav>
                </header>
                <div class="bg-greyscale-850 flex flex-1 flex-col pt-4 pl-4">
                    <div class="bg-greyscale-800 flex flex-1 flex-col rounded-tl-2xl">
                        <div
                            class="border-y-greyscale-600/40 flex justify-between gap-8 border-b px-6 py-4"
                        >
                            {#each ['Name', 'Verification Status'] as heading}
                                <span class="basis-1/2 font-mono text-[0.5625rem] uppercase"
                                    >{heading}</span
                                >
                            {/each}
                        </div>
                        <div class="divide-greyscale-600/40 flex flex-1 flex-col divide-y">
                            {#each sessionData as data}
                                <div
                                    class="-mb-2 flex items-center justify-between px-6 py-2 text-xs"
                                >
                                    <div class="flex h-8 basis-2/3 items-center gap-2 text-left">
                                        <span class="font-sans">{data.domain}</span>
                                    </div>
                                    <div class="flex basis-1/2 items-center gap-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            width="16"
                                            class="size-3"
                                        >
                                            <path
                                                fill="#fff"
                                                fill-rule="evenodd"
                                                d="M8 14.4A6.4 6.4 0 1 0 8 1.6a6.4 6.4 0 0 0 0 12.8Zm2.966-7.435a.8.8 0 0 0-1.131-1.131L7.2 8.468 6.166 7.434a.8.8 0 1 0-1.131 1.131l1.6 1.6a.8.8 0 0 0 1.13 0l3.2-3.2Z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>{data.status}
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="p-4">
        <span class="text-primary">Custom domains</span>
        <p class="text-secondary">
            Set up custom domains to integrate Appwrite functions with your infrastructure.
        </p>
    </div>
</div>
