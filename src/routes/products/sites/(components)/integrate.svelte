<script lang="ts">
</script>

<div class="my-40 flex flex-col gap-16 bg-center px-16">
    <div class="relative grid grid-cols-12 place-items-center">
        <div class="col-span-3">Left</div>
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
                                <div class="size-2 flex-1 shrink rounded-full bg-white" />
                            {/each}
                        </div>
                        <div class="flex-1 rounded-2xl bg-[#19191C]" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-3">Right</div>

        <div
            class="absolute inset-0 -z-1 [background:_radial-gradient(50%_50%_at_50%_50%,_rgba(253,_54,_110,_0.1)_0%,_rgba(253,_54,_110,_0)_100%)]"
        />
    </div>
    <div class="mx-auto flex flex-col gap-2 text-center">
        <h2 class="text-primary text-title font-aeonik-pro">Integrate your backend</h2>
        <p class="text-secondary mx-auto">
            Integrate your frontend easily with our backend products:<br /> Auth, Databases, Functions,
            Messaging, Storage and Realtime.
        </p>
    </div>
</div>
