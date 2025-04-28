<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    import Chrome from '../../(assets)/chrome.svg';
    import Safari from '../../(assets)/safari.svg';
    import Firefox from '../../(assets)/firefox.svg';

    const sessionData = [
        {
            icon: Chrome,
            location: 'New York, NY',
            device: 'Macbook Pro'
        },
        {
            icon: Safari,
            location: 'London, UK',
            device: 'iPhone 12'
        },
        {
            icon: Firefox,
            location: 'Sydney, Australia',
            device: 'iPad Air'
        }
    ];
</script>

<div class="bg-greyscale-850/90 flex flex-col gap-4 rounded-2xl p-2 lg:row-span-7">
    <div class="text-sub-body p-3 font-medium">
        <span class="text-primary">Session management</span>
        <p class="text-secondary">
            Manage user sessions with timeouts and auto-renewal to prevent logouts.
        </p>
    </div>
    <div class="flex flex-1 flex-col justify-center rounded-lg bg-white/[0.02] pt-6 pl-6">
        <div
            class="mt-auto mb-0 ml-auto flex h-[90%] w-[95%] flex-1 flex-col overflow-hidden rounded-tl-2xl border-t border-l border-white/[0.16] bg-gradient-to-br from-white/[0.1] via-white/[0.04] via-[61%] to-transparent to-white/[0.1]"
        >
            <div class="mt-2 ml-2 flex flex-1 flex-col">
                <header
                    class="bg-greyscale-850/60 flex flex-col gap-2 rounded-tl-xl border-b border-white/20 p-4"
                >
                    <div class="flex items-center gap-3">
                        <span class="font-aeonik-pro text-[18px] font-light text-white"
                            >Walter O'Brien</span
                        >
                        <span class="bg-greyscale-700/60 rounded-full px-2 py-1 font-mono text-xs"
                            >637a40ba7</span
                        >
                    </div>
                    <nav class="relative z-10 mt-4 -mb-[17px] flex items-center gap-4 pl-1 text-xs">
                        {#each ['Overview', 'Memberships', 'Sessions', 'Activity'] as heading, i}
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
                            {#each ['Client', 'Location'] as heading}
                                <span class="basis-1/2 font-mono text-xs uppercase">{heading}</span>
                            {/each}
                        </div>
                        <div class="divide-greyscale-600/40 flex flex-1 flex-col divide-y">
                            {#each sessionData as data}
                                <div
                                    class="flex flex-1 items-center justify-between px-6 py-2 text-xs"
                                >
                                    <div class="flex h-8 basis-2/3 items-center gap-2 text-left">
                                        <img src={data.icon} alt={data.device} class="size-8" />
                                        <span class="font-sans">{data.device}</span>
                                    </div>
                                    <div class="basis-1/2">
                                        {data.location}
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
