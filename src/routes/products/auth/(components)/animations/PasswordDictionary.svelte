<script lang="ts">
    import Input from '$lib/components/ui/input.svelte';
    import { classNames } from '$lib/utils/classnames';

    const options = [
        '123456',
        'password',
        '12345678',
        'qwerty',
        '123456789',
        '12345',
        '1234',
        '111111',
        '1234567',
        'dragon',
        '123123',
        'baseball',
        'abc123',
        'football',
        'monkey',
        'letmein',
        '696969',
        'shadow',
        'master',
        '666666',
        'qwertyuiop',
        '123321',
        'mustang',
        '1234567890',
        'michael',
        '654321',
        'superman',
        '1qaz2wsx',
        '7777777',
        '121212',
        '000000',
        'qazwsx',
        '1111',
        'zxcvbn',
        '555555',
        '11111111',
        '131313',
        'freedom',
        '777777',
        'pass',
        'maggie',
        '159753',
        'aaaaaa',
        'ginger',
        'princess',
        'joshua',
        'cheese',
        'amanda',
        'summer',
        'love',
        'ashley',
        '6969',
        'nicole',
        'chelsea',
        'biteme',
        'matthew',
        'access',
        'yankees',
        '987654321',
        'dallas',
        'austin',
        'thunder',
        'taylor',
        'matrix',
        'love',
        'ashley',
        '6969',
        'nicole',
        'chelsea',
        'biteme',
        'matthew',
        'access',
        'yankees',
        '987654321',
        'dallas',
        'austin',
        'thunder',
        'taylor',
        'matrix'
    ];
</script>

<div class="bg-greyscale-850/90 flex flex-col gap-4 rounded-2xl p-2 lg:row-span-5">
    <div class="text-sub-body p-3 font-medium">
        <span class="text-primary">Password dictionary</span>
        <p class="text-secondary">
            Check if the user's password matches any of the top 10K commonly used passwords.
        </p>
    </div>
    <div
        class="relative flex min-h-60 flex-1 flex-col items-center justify-center overflow-hidden rounded-lg bg-white/[0.02]"
    >
        <div class="pointer-events-none absolute mx-auto flex w-[105%] flex-wrap gap-x-2 text-sm">
            {#each options as option}
                {#if option === '654321'}
                    <div
                        class={classNames(
                            'from-greyscale-800 to-greyscale-900 relative z-50 flex items-center gap-2 bg-gradient-to-r px-1 font-mono text-white shadow-lg shadow-black/30'
                        )}
                    >
                        <span>6543</span>
                        <span
                            class="animate-scale-in h-[150%] w-px bg-gradient-to-b from-transparent via-white to-transparent"
                        ></span>
                        <span class="text-white/50">21</span>
                    </div>
                {:else}
                    <span class={classNames('font-mono text-white/20 transition-all duration-1000')}
                        >{option}</span
                    >{/if}
            {/each}
            <div class="mask absolute inset-0 z-0 backdrop-blur-md"></div>
        </div>

        <div class="gradient absolute inset-0 z-10 flex items-center justify-center">
            <div class="w-3/4">
                <Input type="password" disabled label="Password" value="magicpassword" />
            </div>
        </div>
    </div>
</div>

<style>
    .mask {
        mask-composite: intersect;
        mask-image: radial-gradient(ellipse, transparent, rgba(0, 0, 0, 1) 70%);
    }

    .gradient {
        background: radial-gradient(
            circle,
            var(--color-greyscale-900),
            transparent 100%,
            transparent
        );
    }
</style>
