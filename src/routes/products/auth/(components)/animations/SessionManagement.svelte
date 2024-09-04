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

<div class="row-span-7 p-2 flex flex-col gap-4 rounded-2xl bg-greyscale-850/90">
    <div class="p-6">
        <span class="text-primary">Session management</span>
        <p class="text-secondary">
            Manage user sessions with timeouts and auto-renewal to prevent logouts.
        </p>
    </div>
    <div class="bg-white/[0.02] rounded-lg flex-1 flex flex-col justify-center pl-6 pt-6">
        <div
            class="bg-gradient-to-br flex flex-col flex-1 border-l border-t border-white/[0.16] from-white/[0.1] via-[61%] via-white/[0.04] to-white/[0.1] to-transparent rounded-tl-2xl w-[95%] h-[90%] mb-0 mt-auto mr-0 ml-auto"
        >
            <div class="ml-2 mt-2 flex flex-col flex-1">
                <header
                    class="p-4 rounded-tl-2xl bg-greyscale-850/60 flex gap-2 flex-col border-b border-white/20"
                >
                    <div class="flex gap-3 items-center">
                        <span class="text-[18px] font-light font-aeonik-pro text-white"
                            >Walter O'Brien</span
                        >
                        <span class="font-mono text-xs py-1 px-2 bg-greyscale-700/60 rounded-full"
                            >637a40ba7</span
                        >
                    </div>
                    <nav class="flex mt-4 pl-1 -mb-[17px] gap-4 items-center text-xs relative z-10">
                        {#each ['Overview', 'Memberships', 'Sessions', 'Activity'] as heading, i}
                            <button
                                class={classNames('border-b border-transparent pb-2', {
                                    ' border-white/40': i === 2
                                })}>{heading}</button
                            >
                        {/each}
                    </nav>
                </header>
                <div class="pl-4 pt-4 bg-greyscale-850 flex-1 flex flex-col">
                    <div class="bg-greyscale-800 flex-1 rounded-tl-2xl flex flex-col">
                        <div
                            class="px-6 py-4 gap-8 border-b border-y-greyscale-600/40 flex justify-between"
                        >
                            {#each ['Client', 'Location'] as heading}
                                <span class="text-xs basis-1/2 font-mono uppercase">{heading}</span>
                            {/each}
                        </div>
                        <div class="flex flex-col flex-1 divide-y divide-greyscale-600/40">
                            {#each sessionData as data}
                                <div
                                    class="px-6 flex justify-between text-xs items-center flex-1 py-2"
                                >
                                    <div class="flex basis-2/3 text-left gap-2 items-center h-8">
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
