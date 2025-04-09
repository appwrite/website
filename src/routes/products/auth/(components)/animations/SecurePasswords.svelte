<script lang="ts">
    import Input from '$lib/components/ui/input.svelte';

    const conditions = [
        'Minimum 8 characters',
        'Numbers',
        'Special characters',
        'Uppercase & lowercase letters',
        'No common words',
        'No personal data'
    ];
</script>

<div
    class="bg-greyscale-850/90 flex flex-col gap-4 rounded-2xl p-2 lg:row-span-7"
    role="presentation"
>
    <div class="text-sub-body p-3 font-medium">
        <span class="text-primary">Secure passwords</span>
        <p class="text-secondary">
            Secure passwords by avoiding common words, hashing, and checking personal data.
        </p>
    </div>
    <div class="flex flex-1 flex-col justify-center rounded-lg bg-white/[0.02] p-6">
        <Input
            label="Password"
            type="password"
            disabled
            value="appwriter"
            class="text-primary text-[20px] tracking-tighter"
        />
        <div class="flex flex-wrap gap-2 py-2">
            {#each conditions as condition, i}
                <span
                    class="text-secondary flex items-center gap-0.5 rounded-full bg-white/[0.08] px-2 py-0.5 pl-1 text-xs"
                >
                    <span class="web-icon-check text-sm duration-500"></span>
                    {condition}</span
                >
            {/each}
        </div>
    </div>
</div>
