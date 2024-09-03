<script lang="ts">
    import { sleep, unwrite, write } from '$lib/animations';
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

<div
    class="row-span-7 rounded-2xl flex flex-col gap-4 p-2 bg-greyscale-850/90"
    role="presentation"
    on:mouseover={async () => await animation()}
    on:focus={async () => await animation()}
>
    <div class="p-4">
        <span class="text-primary">Secure passwords</span>
        <p class="text-secondary">
            Secure passwords by avoiding common words, hashing, and checking personal data.
        </p>
    </div>
    <div class="bg-white/[0.02] rounded-lg flex-1 flex flex-col justify-center p-6">
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
                    class="text-secondary flex gap-0.5 items-center pl-1 px-2 rounded-full py-0.5 text-xs bg-white/[0.08]"
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
