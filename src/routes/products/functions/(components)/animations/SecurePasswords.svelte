<script lang="ts">
    import { sleep, write } from '$lib/animations';
    import Input from '$lib/components/ui/Input.svelte';
    import { classNames } from '$lib/utils/classnames';
    import { writable } from 'svelte/store';

    const state = writable<{
        password: string;
        animationComplete: boolean;
    }>({
        password: '',
        animationComplete: false
    });

    const conditions = [
        'Minimum 8 characters',
        'Numbers',
        'Special characters',
        'Uppercase & lowercase letters',
        'No common words',
        'No personal data'
    ];

    const animation = async () => {
        await write('themagicword', (v) => state.set({ ...$state, password: v }), 500);
        await sleep(800);
        state.set({ ...$state, animationComplete: true });
    };
</script>

<div class="bg-greyscale-850/90 flex flex-col gap-4 rounded-2xl p-2" role="presentation">
    <div class="p-4">
        <span class="text-primary">Secure passwords</span>
        <p class="text-secondary">
            Secure passwords by avoiding common words, hashing, and checking personal data.
        </p>
    </div>
    <div class="flex flex-1 flex-col justify-center rounded-lg bg-white/[0.02] p-6">
        <Input
            label="Password"
            type="password"
            disabled={true}
            value={$state.password}
            class={classNames({
                'border-white': !$state.animationComplete
            })}
        />
        <div class="flex flex-wrap gap-2 py-2">
            {#each conditions as condition, i}
                <span
                    class="text-secondary flex items-center gap-0.5 rounded-full bg-white/[0.08] py-0.5 px-2 pl-1 text-xs"
                >
                    <span
                        style:transition-delay={`${i * 200}ms`}
                        class={classNames('web-icon-check text-sm transition-colors duration-500', {
                            'text-[#00FF00]': $state.animationComplete
                        })}
                    />
                    {condition}</span
                >
            {/each}
        </div>
    </div>
</div>
