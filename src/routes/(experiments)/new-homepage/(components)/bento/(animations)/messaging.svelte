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
            class="light absolute top-16 z-10 flex h-20 w-[340px] items-center justify-between gap-3 rounded-[20px] bg-white/80 py-1 px-3 shadow-[-8px_4px_32px_rgba(0,0,0,0.24)] backdrop-blur-xl"
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
            <div class="text-micro mx-2 mt-2 flex-1 rounded-t-4xl bg-white pt-4 px-3">
                <p class="text-secondary mt-20 px-2">
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
