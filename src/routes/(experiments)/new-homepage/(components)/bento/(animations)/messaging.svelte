<script lang="ts">
    import Phone from '$lib/animations/Phone.svelte';
</script>

<div
    class="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 md:col-span-7"
>
    <div class="space-y-3 pt-2 px-3 pb-4">
        <div class="flex items-center gap-2">
            <img
                src="/images/icons/illustrated/dark/messaging.png"
                alt="Messaging"
                class="size-7"
            />
            <h3 class="font-aeonik-pro text-label text-primary">Messaging</h3>
        </div>
        <p class="text-sub-body text-primary max-w-lg font-medium">
            Set up a full-functioning messaging service that covers <span class="text-secondary"
                >multiple channels under one unified platform.</span
            >
        </p>
    </div>
    <div
        class="relative flex h-[26.25rem] items-center justify-center overflow-clip rounded-xl bg-black/24 px-8"
    >
        <div
            class="light absolute top-14 z-10 flex h-16 w-[340px] items-center justify-between gap-3 rounded-[20px] bg-white/80 py-1 px-3 shadow-[-8px_4px_32px_rgba(0,0,0,0.24)] backdrop-blur-xl"
        >
            <div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-black">
                <div class="size-4 rounded-full bg-white" />
            </div>
            <div class="text-micro flex flex-col gap-1">
                <h2 class="text-primary font-medium">New security measures implemented</h2>
                <p class="text-secondary">
                    Check out our latest security updates to protect your account!
                </p>
            </div>
            <span class="text-micro block self-start">now</span>
        </div>
        <div
            class="light mask border-smooth mt-20 flex h-full w-[300px] flex-col rounded-t-[40px] border-t border-x bg-white/8 backdrop-blur-2xl"
            style:--mask-height="250px"
        >
            <div class="text-micro mx-2 mt-2 flex-1 rounded-t-4xl bg-white pt-4 px-5">
                <header class="mt-16 flex items-center justify-between">
                    <div class="flex items-center gap-1">
                        <h3 class="text-sm text-[#1C1B1F]">New security measures</h3>
                        <span class="rounded bg-[#eee] py-0.5 px-1 text-[#1C1B1F]">Inbox</span>
                    </div>
                    <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.5599 5.35747L9.63564 4.93284L7.71112 0.398926L5.7866 4.93969L0.862305 5.35747L4.60176 8.59696L3.47855 13.4117L7.71112 10.8571L11.9437 13.4117L10.8273 8.59696L14.5599 5.35747ZM7.71112 9.57634L5.13597 11.131L5.82085 8.19973L3.54704 6.22727L6.54682 5.96701L7.71112 3.20694L8.88227 5.97386L11.8821 6.23412L9.60824 8.20658L10.2931 11.1379L7.71112 9.57634Z"
                            fill="#49454F"
                        />
                    </svg>
                </header>

                <div class="mt-4 flex gap-2">
                    <div
                        class="flex size-5 shrink-0 items-center justify-center rounded-lg bg-black"
                    >
                        <div class="size-2 rounded-full bg-white" />
                    </div>
                    <div class="font-medium text-[#1C1B1F]">
                        Acme.Inc <span class="ml-1 font-normal text-[#686B70]">2 days ago</span>
                    </div>
                </div>
                <p class="mt-8 text-[#3f3f3f]">
                    Hey,
                    <br /><br />
                    We have recently implemented new security measures to strengthen the protection of
                    your account. These measures are designed to enhance the security of your personal
                    information and ensure a safer experience.<br /><br />Learn more about these
                    changes and how they may affect you in our
                    <span class="underline">documentation</span>. Best regards, Appwrite team
                </p>
            </div>
        </div>
        <div
            class="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"
        />
    </div>
</div>
