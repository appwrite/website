<script lang="ts">
    import { animate, hover, inView, motionValue, type AnimationSequence } from 'motion';

    import Google from '../../../(assets)/logos/google.svg';

    import { isMobile } from '$lib/utils/is-mobile';
    import { classNames } from '$lib/utils/classnames';
    import GridPaper from '../../grid-paper.svelte';
    import { unwrite, write } from '$lib/animations';

    let container: HTMLElement;

    let password = $state('');
    let button: HTMLButtonElement;

    $effect(() => {
        inView(
            container,
            () => {
                if (!isMobile()) return;

                write('•••••••••••••', (v) => (password = v), 1000).then(() => {
                    animate(button, { scale: [1, 0.95, 1] }, { duration: 0.25 });
                });
                return () => {
                    unwrite('•••••••••••••', (v) => (password = v));
                };
            },
            { amount: 'all' }
        );

        hover(container, () => {
            if (isMobile()) return;

            write('•••••••••••••', (v) => (password = v), 1000).then(() => {
                animate(button, { scale: [1, 0.95, 1] }, { duration: 0.25 });
            });
            return () => {
                unwrite('•••••••••••••', (v) => (password = v));
            };
        });
    });
</script>

<a
    href="/products/auth"
    class="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 transition-shadow duration-300 hover:shadow-[0px_0px_0px_4px_var(--color-offset)] focus:shadow-[0px_0px_0px_4px_var(--color-offset)] md:col-span-6"
    bind:this={container}
>
    <div class="space-y-3 px-3 pt-2 pb-4">
        <div class="flex items-center gap-2">
            <img
                loading="lazy"
                src="/images/icons/illustrated/dark/auth.png"
                alt="Auth icon"
                class="size-7"
            />
            <h3 class="font-aeonik-pro text-label text-primary">Auth</h3>
        </div>
        <p class="text-sub-body text-primary max-w-lg font-medium">
            <span class="text-secondary"
                >Authenticate users securely with multiple login methods like</span
            > Email/Password, SMS, OAuth, Anonymous, and Magic URLs.
        </p>
    </div>
    <div
        class="relative flex h-85 items-center justify-between overflow-clip rounded-xl bg-black/24 px-8"
    >
        <div class="flex h-full w-full items-center justify-center">
            <div
                class="border-smooth flex w-[264px] flex-col rounded-[40px] border bg-[#232325]/90"
            >
                <div class="pointer-events-none relative m-2 flex-1 rounded-4xl bg-[#19191C] p-4">
                    <div class="flex flex-col gap-3">
                        <div class="flex flex-col gap-1">
                            <label for="email" class="text-x-micro text-secondary">Email</label>
                            <input
                                type="text"
                                name="email"
                                class="border-smooth text-micro w-full rounded-lg border bg-[#19191C] px-3 py-2 text-white"
                                value="walter@acme.dev"
                                disabled
                            />
                        </div>
                        <div class="flex flex-col gap-1">
                            <label for="password" class="text-x-micro text-secondary"
                                >Create Password</label
                            >
                            <input
                                type="text"
                                name="password"
                                class={classNames(
                                    'text-micro w-full rounded-lg border border-white/24 bg-[#19191C] px-3 py-2 text-white'
                                )}
                                placeholder="Your Password"
                                value={password}
                                disabled
                            />
                        </div>

                        <button
                            class="text-micro w-full rounded-lg bg-white py-2 font-medium text-[#19191C]"
                            disabled
                            bind:this={button}>Sign up</button
                        >
                    </div>

                    <span
                        class={classNames(
                            'text-x-micro text-secondary relative my-3 flex items-center justify-center gap-3 text-center'
                        )}
                    >
                        <span class="bg-smooth h-px flex-1"></span>
                        or sign up with
                        <span class="bg-smooth h-px flex-1"></span>
                    </span>

                    <button
                        class={classNames(
                            'text-micro border-smooth flex w-full items-center justify-center gap-3 rounded-lg border py-2 font-medium text-white transition'
                        )}
                        disabled
                    >
                        <img loading="lazy" src={Google} alt="Google Icon" class="size-4" />

                        Google</button
                    >

                    <div class="absolute inset-x-3 flex flex-col gap-3"></div>
                </div>
            </div>
        </div>
        <GridPaper class="absolute inset-0 -z-10 bg-size-[calc(100%/11)]" />
    </div>
</a>
