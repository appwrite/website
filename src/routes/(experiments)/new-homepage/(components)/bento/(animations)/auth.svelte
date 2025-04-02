<script lang="ts">
    import { animate, hover, inView, motionValue, type AnimationSequence } from 'motion';

    import Github from '../../../(assets)/logos/github.svg';
    import Google from '../../../(assets)/logos/google.svg';
    import Apple from '../../../(assets)/logos/apple.svg';
    import Microsoft from '../../../(assets)/logos/microsoft.svg';
    import Switch from '$lib/components/Switch.svelte';
    import { onMount } from 'svelte';
    import { isMobile } from '$lib/utils/is-mobile';
    import { classNames } from '$lib/utils/classnames';

    $: platforms = [
        {
            label: 'GitHub',
            icon: Github,
            enabled: false
        },
        {
            label: 'Google',
            icon: Google,
            enabled: false
        },
        {
            label: 'Apple',
            icon: Apple,
            enabled: false
        },
        {
            label: 'Microsoft',
            icon: Microsoft,
            enabled: false
        }
    ];

    let enabled = motionValue(0);
    let name = "Walter O'Brian";

    const inputs = [
        {
            label: 'Your name',
            name: 'name',
            value: name
        },
        {
            label: 'Email',
            name: 'email',
            placeholder: 'Enter Email'
        },
        {
            label: 'Create Password',
            name: 'password',
            placeholder: 'Enter Password'
        }
    ];

    let container: HTMLElement;

    onMount(() => {
        const from: AnimationSequence = [[enabled, 0, {}]];

        const to: AnimationSequence = [
            [name, 'Actually Walter', { duration: 0.2 }],
            [enabled, 1, { duration: 0.25 }]
        ];

        enabled.on('change', () => {
            platforms[1].enabled = !!enabled.get();
        });

        inView(
            container,
            () => {
                if (!isMobile()) return;
                animate(to);

                return () => {
                    animate(from);
                };
            },
            { amount: 'all' }
        );

        hover(container, () => {
            if (isMobile()) return;
            animate(to);

            return () => {
                animate(from);
            };
        });
    });
</script>

<div
    class="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 md:col-span-6"
    bind:this={container}
>
    <div class="space-y-3 pt-2 px-3 pb-4">
        <div class="flex items-center gap-2">
            <img src="/images/icons/illustrated/dark/auth.png" alt="Auth" class="size-7" />
            <h3 class="focontainerElement: container-pro text-label text-primary">Auth</h3>
        </div>
        <p class="text-sub-body text-primary max-w-lg font-medium">
            <span class="text-secondary"
                >Authenticate users securely with multiple login methods like</span
            > Email/Password, SMS, OAuth, Anonymous, and Magic URLs.
        </p>
    </div>
    <div
        class="relative flex h-[26.25rem] items-center justify-between overflow-clip rounded-xl bg-black/24 px-8"
    >
        <div class="grid h-full w-full grid-cols-2 place-items-center">
            <div
                class="divide-smooth border-smooth flex aspect-square w-[200px] flex-col justify-center divide-y rounded-2xl border bg-[#232325]/90 p-2"
            >
                {#each platforms as platform}
                    <div class="flex items-center justify-between p-2">
                        <button class="text-caption flex items-center gap-3 text-white">
                            <img src={platform.icon} alt={platform.label} class="size-7" />
                            <span class="text-micro">{platform.label}</span>
                        </button>

                        <Switch checked={platform.enabled} />
                    </div>
                {/each}
            </div>
            <div
                class="mask border-smooth mt-20 flex h-full w-full flex-col rounded-t-[40px] border-t border-x bg-[#232325]/90"
                style:--mask-height="350px"
            >
                <div class="relative mx-2 mt-2 flex-1 rounded-t-4xl bg-[#19191C] pt-4 px-3">
                    <form class="mt-8 flex flex-col gap-3">
                        {#each inputs as input}
                            <div class="flex flex-col gap-1">
                                <label for={input.name} class="text-x-micro text-secondary"
                                    >{input.label}</label
                                >
                                <input
                                    type="text"
                                    name={input.name}
                                    class="border-smooth text-micro w-full rounded-lg bg-[#19191C] py-2 px-3 text-white"
                                    placeholder={input.placeholder}
                                    value={input.value ?? null}
                                />
                            </div>
                        {/each}
                        <button
                            class="text-micro w-full rounded-lg bg-[#7C67FE] py-2 font-medium text-white"
                            >Sign up</button
                        >
                    </form>

                    {#each platforms as platform}
                        <div class="absolute inset-x-3">
                            <span class="text-x-micro text-secondary my-3 block text-center"
                                >or sign up with</span
                            >
                            <button
                                class={classNames(
                                    'text-micro border-smooth flex w-full items-center justify-center gap-3 rounded-lg border py-2 font-medium text-white transition',
                                    platform.enabled
                                        ? 'translate-none opacity-100'
                                        : 'translate-y-2 opacity-0'
                                )}
                            >
                                <img
                                    src={platform.icon}
                                    alt="{platform.label} Icon"
                                    class="size-4"
                                />

                                {platform.label}</button
                            >
                        </div>
                    {/each}
                </div>
            </div>
        </div>
        <div
            class="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"
        />
    </div>
</div>
