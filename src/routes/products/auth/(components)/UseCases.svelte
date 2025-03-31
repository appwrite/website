<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { classNames } from '$lib/utils/classnames';
    import Android from '../(assets)/platforms/android.svg';
    import Apple from '../(assets)/platforms/apple.svg';
    import Firebase from '../(assets)/platforms/firebase.svg';
    import Flutter from '../(assets)/platforms/flutter.svg';
    import JavaScript from '../(assets)/platforms/javascript.svg';
    import NHost from '../(assets)/platforms/nhost.svg';
    import React from '../(assets)/platforms/react.svg';
    import Supabase from '../(assets)/platforms/supabase.svg';

    const platforms = [
        { icon: Android, size: 24 },
        { icon: Apple, size: 28 },
        { icon: JavaScript, size: 32 },
        { icon: Flutter, size: 28 },
        { icon: React, size: 24 }
    ];

    const migrations = [{ icon: NHost }, { icon: Supabase }, { icon: Firebase }];
</script>

<section class="light bg-greyscale-50 py-20">
    <div
        class="container grid items-stretch gap-y-8 divide-[#19191C]/4 [grid-gap:initial] md:divide-x lg:grid-cols-2"
    >
        <div
            class="relative mx-auto mb-20 flex flex flex-col items-center justify-center gap-y-6 text-center md:px-20
               "
        >
            <div class="flex items-center gap-2">
                {#each platforms as platform}
                    {@const size = (platform.size / 6) * 10}
                    <div
                        class="flex items-center justify-center rounded-lg bg-white"
                        style:height="{size}px"
                        style:width="{size}px"
                    >
                        <img
                            src={platform.icon}
                            height={platform.size}
                            width={platform.size}
                            alt="icon"
                        />
                    </div>
                {/each}
            </div>
            <h2 class="text-title text-primary font-aeonik-pro">
                Integrate with easy-to-use APIs and SDKs
            </h2>
            <p class="text-body text-secondary font-medium">
                Integrate Auth seamlessly into your projects with your favorite technology.
            </p>
            <a href="/docs/sdks" class="web-button is-secondary mt-2 !w-full md:!w-fit"
                >Learn more</a
            >
        </div>
        <div
            class="mx-auto mb-20 flex flex flex-col items-center justify-center gap-y-6 text-center md:px-20"
        >
            <div class="flex items-center gap-2">
                {#each migrations as migration}
                    <div class="flex size-10 items-center justify-center rounded-lg bg-white">
                        <img src={migration.icon} alt="icon" class="size-6" />
                    </div>
                {/each}

                <div class="-mr-2 h-px w-24 flex-1 bg-gradient-to-r from-white to-[#FD366E]" />

                <div
                    class="flex size-14 items-center justify-center rounded-lg border border-[#FD366E] bg-white shadow-[0px_0px_8px_rgba(253,_54,_110,_0.24),_0px_5.35209px_10.7042px_rgba(0,_0,_0,_0.02)]"
                >
                    <img src="/images/logos/logo.svg" alt="icon" class="size-6" />
                </div>
            </div>
            <h2 class="text-title text-primary font-aeonik-pro">
                Migrate your users to Appwrite effortlessly
            </h2>
            <p class="text-body text-secondary font-medium">
                Use Appwrite's migration process to transfer your existing users with a few clicks.
            </p>
            <a
                href="/docs/advanced/migrations"
                class="web-button is-secondary mt-2 !w-full md:!w-fit">Learn more</a
            >
        </div>
    </div>
</section>
