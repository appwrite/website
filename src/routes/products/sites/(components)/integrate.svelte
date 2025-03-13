<script lang="ts">
    import Auth from '../(assets)/icons/auth.svg';
    import Databases from '../(assets)/icons/databases.svg';
    import Functions from '../(assets)/icons/functions.svg';
    import Storage from '../(assets)/icons/storage.svg';
    import Realtime from '../(assets)/icons/realtime.svg';
    import Messaging from '../(assets)/icons/messaging.svg';

    const products = [
        {
            label: 'Auth',
            icon: Auth
        },
        {
            label: 'Databases',
            icon: Databases
        },
        {
            label: 'Functions',
            icon: Functions
        },
        {
            label: 'Storage',
            icon: Storage
        },
        {
            label: 'Realtime',
            icon: Realtime
        },
        {
            label: 'Messaging',
            icon: Messaging
        }
    ];
</script>

<div class="my-40 flex flex-col gap-16 bg-center px-16">
    <div
        class="relative grid grid-cols-12 place-items-center [background:_radial-gradient(50%_50%_at_50%_50%,_rgba(253,_54,_110,_0.1)_0%,_rgba(253,_54,_110,_0)_100%)]"
    >
        <div class="col-span-3 w-full">
            <div class="text-body flex flex-col items-end gap-8 font-medium text-white">
                {#each products.slice(0, 3) as product, i}
                    <div class="pointer-events-none relative mr-auto ml-0 flex w-full items-center">
                        <div
                            class="bg-card border-smooth mr-0 ml-auto flex items-center gap-2 rounded-xl border py-2 pr-4 pl-2"
                        >
                            <img src={product.icon} alt={product.label} class="h-6 w-6" />
                            {product.label}
                            <div class="absolute right-0">
                                {#if i === 1}
                                    <svg
                                        width="98"
                                        height="2"
                                        viewBox="0 0 98 2"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 1L98 1.00001"
                                            stroke="white"
                                            stroke-opacity="0.1"
                                            stroke-dasharray="4 4"
                                        />
                                    </svg>
                                {:else}
                                    <svg
                                        width="98"
                                        height="75"
                                        viewBox="0 0 98 75"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class:-scale-x-100={i === 2}
                                    >
                                        <path
                                            d="M0 74H35.3623C41.9897 74 47.3623 68.6274 47.3623 62V13C47.3623 6.37258 52.7349 0.999998 59.3623 0.999998H98"
                                            stroke="white"
                                            stroke-opacity="0.1"
                                            stroke-dasharray="4 4"
                                        />
                                    </svg>
                                {/if}
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        <div
            class="window col-span-6 flex aspect-[6.5/4.25] w-full items-center justify-center rounded-[48px] border border-dashed border-transparent p-3"
            style:animation-delay="0.6s"
        >
            <div
                class="window flex h-full flex-1 rounded-[40px] border border-dashed border-transparent p-3"
                style:animation-delay="0.4s"
            >
                <div
                    class="window flex h-full flex-1 rounded-[28px] border border-dashed border-transparent p-3"
                    style:animation-delay="0.2s"
                >
                    <div
                        class="bg-greyscale-850 border-smooth flex flex-1 flex-col rounded-[20px] border px-2 pb-2"
                    >
                        <div class="flex h-8 w-fit items-center justify-start gap-1.5 pl-2">
                            {#each Array.from({ length: 3 }) as _}
                                <div
                                    class="size-2 flex-1 shrink cursor-pointer rounded-full bg-[#D9D9D9] transition hover:opacity-75"
                                />
                            {/each}
                        </div>
                        <div class="flex-1 rounded-2xl bg-[#19191C]" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-3 w-full">
            <div class="text-body flex flex-col gap-8 font-medium text-white">
                {#each products.slice(3) as product, i}
                    <div class="pointer-events-none relative flex w-full items-center">
                        <div
                            class="bg-card border-smooth mr-auto ml-0 flex items-center gap-2 rounded-xl border py-2 pr-4 pl-2"
                        >
                            <img src={product.icon} alt={product.label} class="h-6 w-6" />
                            {product.label}
                            <div class="absolute left-0">
                                {#if i === 1}
                                    <svg
                                        width="98"
                                        height="2"
                                        viewBox="0 0 98 2"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 1L98 1.00001"
                                            stroke="white"
                                            stroke-opacity="0.1"
                                            stroke-dasharray="4 4"
                                        />
                                    </svg>
                                {:else}
                                    <svg
                                        width="98"
                                        height="75"
                                        viewBox="0 0 98 75"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class:-scale-x-100={i === 2}
                                    >
                                        <path
                                            d="M0 74H35.3623C41.9897 74 47.3623 68.6274 47.3623 62V13C47.3623 6.37258 52.7349 0.999998 59.3623 0.999998H98"
                                            stroke="white"
                                            stroke-opacity="0.1"
                                            stroke-dasharray="4 4"
                                        />
                                    </svg>
                                {/if}
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
    <div class="mx-auto flex flex-col gap-2 text-center">
        <h2 class="text-primary text-title font-aeonik-pro">Integrate your backend</h2>
        <p class="text-secondary mx-auto">
            Integrate your frontend easily with our backend products:<br /> Auth, Databases, Functions,
            Messaging, Storage and Realtime.
        </p>
    </div>
</div>

<style>
    .window {
        --border-color: var(--color-pink-hue), 65%, 48%;
        animation: border-pulse 2.5s infinite ease-in-out;
    }

    @keyframes border-pulse {
        0% {
            border-color: hsla(var(--border-color), 1);
        }
        25% {
            border-color: hsla(var(--border-color), 0.5);
        }
        50% {
            border-color: hsla(var(--border-color), 0);
        }
        75% {
            border-color: hsla(var(--border-color), 0.5);
        }
        100% {
            border-color: hsla(var(--border-color), 1);
        }
    }
</style>
