<script lang="ts">
</script>

<div class="mt-80 flex flex-col gap-8 px-16">
    <div class="grid grid-cols-2 items-center">
        <div class="border-smooth relative h-80 w-full rounded-sm border-y border-l border-dashed">
            <div class="grid h-full grid-cols-12 grid-rows-12">
                <div class="border-smooth col-span-12 row-span-2 border-b border-dashed"></div>
                <div class="col-span-12 row-span-8"></div>
                <div class="border-smooth col-span-12 row-span-2 border-t border-dashed"></div>
            </div>
            <div class="absolute inset-0 top-0 grid h-full grid-cols-12">
                <div class="border-smooth relative col-span-7 border-r border-dashed">
                    <div class="absolute inset-0 top-0 flex items-center">
                        {#each Array.from({ length: 7 }) as _, i}
                            <div
                                class="border-smooth hover:bg-accent/8 hover:border-accent/40 absolute h-[calc(100%-32px)] w-48 cursor-pointer rounded-sm border bg-white/2 backdrop-blur-2xl transition duration-300 ease-in-out hover:-translate-y-10"
                                style:transform="translateX({i * 70}px) perspective(400px)
                                rotateY(25deg)"
                            ></div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
        <div class="aspect-[1.25/1] rounded-4xl bg-white/90"></div>
    </div>

    <div class="mx-auto flex flex-col gap-2 text-center">
        <h2 class="text-primary text-title font-aeonik-pro">Integrate your backend</h2>
        <p class="text-secondary mx-auto">
            Integrate your frontend easily with our backend products:<br /> Auth, Databases, Functions,
            Messaging, Storage and Realtime.
        </p>
    </div>
</div>
