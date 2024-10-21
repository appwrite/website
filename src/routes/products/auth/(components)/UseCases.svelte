<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import Android from '../(assets)/platforms/android.svg';
    import Apple from '../(assets)/platforms/apple.svg';
    import Flutter from '../(assets)/platforms/flutter.svg';
    import JavaScript from '../(assets)/platforms/javascript.svg';
    import React from '../(assets)/platforms/react.svg';
    import NotSupabase from '../(assets)/platforms/not-supabase.png';
    import Supabase from '../(assets)/platforms/supabase.png';
    import Firebase from '../(assets)/platforms/firebase.png';

    const platforms = [
        { icon: Android, size: 24 },
        { icon: Apple, size: 28 },
        { icon: JavaScript, size: 32 },
        { icon: Flutter, size: 28 },
        { icon: React, size: 24 }
    ];

    const migrations = [{ icon: NotSupabase }, { icon: Supabase }, { icon: Firebase }];
</script>

<section class="light bg-greyscale-50 py-4 md:py-20">
    <div class="container grid gap-y-8 md:grid-cols-2">
        <div
            class="mx-auto mb-20 flex flex max-w-[25rem] flex-col items-center justify-center gap-y-6 text-center"
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
                Integrate seamlessly into your projects with your favorite technology.
            </p>
            <a href={PUBLIC_APPWRITE_DASHBOARD} class="web-button is-secondary mt-2">Learn more</a>
        </div>
        <div
            class="mx-auto mb-20 flex flex max-w-[25rem] flex-col items-center justify-center gap-y-6 text-center"
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
                Seamless migration process that allows you to transfer your existing users.
            </p>
            <a href={PUBLIC_APPWRITE_DASHBOARD} class="web-button is-secondary mt-2">Learn more</a>
        </div>
    </div>
</section>
