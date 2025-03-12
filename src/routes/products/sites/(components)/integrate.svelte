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
        <div class="col-span-3">
            <div class="text-body flex flex-col items-end gap-8 font-medium text-white">
                {#each products.slice(0, 3) as product}
                    <div
                        class="bg-card border-smooth pointer-events-none flex items-center gap-2 rounded-xl border py-2 pr-4 pl-2"
                    >
                        <img src={product.icon} alt={product.label} class="h-6 w-6" />
                        {product.label}
                    </div>
                {/each}
            </div>
        </div>
        <div
            class="border-accent/25 col-span-6 flex aspect-[6.5/4.25] w-full items-center justify-center rounded-[48px] border border-dashed p-3"
        >
            <div
                class="border-accent/50 flex h-full flex-1 rounded-[40px] border border-dashed p-3"
            >
                <div
                    class="border-accent/75 flex h-full flex-1 rounded-[28px] border border-dashed p-3"
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
        <div class="col-span-3">
            <div class="text-body flex flex-col items-start gap-8 font-medium text-white">
                {#each products.slice(3) as product}
                    <div
                        class="bg-card border-smooth pointer-events-none flex items-center gap-2 rounded-xl border py-2 pr-4 pl-2"
                    >
                        <img src={product.icon} alt={product.label} class="h-6 w-6" />
                        {product.label}
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
