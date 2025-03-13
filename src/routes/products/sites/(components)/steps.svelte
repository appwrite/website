<div class="relative flex gap-3">
    <div class="bg-accent sticky inset-y-0 top-20 left-0 flex h-full w-px justify-center">
        <div
            class="absolute z-10 flex size-4 items-center justify-center rounded-full border border-white/16 bg-gradient-to-tl from-transparent to-white/32"
        >
            <div class="size-1 rounded-full bg-white" />
        </div>
    </div>
    <div class="min-h-[100vh]">
        <slot />
    </div>
</div>
