<div
    class="bg-greyscale-850/90 flex flex-col gap-4 rounded-2xl p-2 lg:row-span-5"
    role="presentation"
>
    <div class="flex flex-1 flex-col items-center justify-center rounded-lg bg-white/[0.02] p-6">
        <div class="flex gap-1">
            {#each [5, 1, 8] as number}
                <div
                    class="text-primary bg-greyscale-850 pointer-events-none relative flex size-10 items-center justify-center space-x-4 rounded-lg border border-white/10 text-center text-lg shadow-lg shadow-black/5 transition-all duration-500 outline-none"
                >
                    <span class="font-aeonik-pro text-label font-medium transition-opacity"
                        >{number}</span
                    >
                </div>
            {/each}
            <div
                class="text-primary bg-greyscale-850 border-primary pointer-events-none relative flex size-10 items-center justify-center space-x-4 rounded-lg border text-center text-lg shadow-lg shadow-black/5 transition-all duration-500 outline-none"
            >
                <span class="h-[20px] w-px bg-white"></span>
            </div>
            <div
                class="text-primary bg-greyscale-850 border-primary pointer-events-none relative flex size-10 items-center justify-center space-x-4 rounded-lg border border-white/10 text-center text-lg shadow-lg shadow-black/5 transition-all duration-500 outline-none"
           ></div>
            <div
                class="text-primary bg-greyscale-850 border-primary pointer-events-none relative flex size-10 items-center justify-center space-x-4 rounded-lg border border-white/10 text-center text-lg shadow-lg shadow-black/5 transition-all duration-500 outline-none"
           ></div>
        </div>
    </div>
    <div class="text-sub-body p-3 font-medium">
        <span class="text-primary">Multi-factor authentication</span>
        <p class="text-secondary">
            Requiring users to verify their identity using a second authentication factor.
        </p>
    </div>
</div>
