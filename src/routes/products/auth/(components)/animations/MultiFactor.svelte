<script lang="ts">
</script>

<div class="row-span-5 rounded-2xl flex flex-col p-2 bg-greyscale-850/90">
    <div class="bg-white/[0.02] rounded-lg flex-1 flex flex-col justify-center p-12">
        <div class="flex gap-2">
            {#each Array.from({ length: 5 }) as _, i}
                <input
                    type="text"
                    class="flex outline-none pointer-events-none focus:border-white text-center text-primary text-lg space-x-4 size-12 bg-greyscale-850 rounded-lg border border-white/10"
                    value={i}
                />
            {/each}
        </div>
    </div>
    <div class="p-4">
        <span class="text-primary">Multi-factor authentication</span>
        <p class="text-secondary">
            Requiring users to verify their identity using a second authentication factor.
        </p>
    </div>
</div>
