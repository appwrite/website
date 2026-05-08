<script lang="ts">
    const KICKSTART_SRC = '/images/education/kickstart.avif';
    const KICKSTART_W = 584;
    const KICKSTART_H = 450;
</script>

<div
    class="container grid min-h-80 place-content-center items-center gap-8 py-20 md:grid-cols-2 md:py-40"
>
    <div class="text-secondary space-y-8 md:max-w-[75%]">
        <h2 class="text-primary font-aeonik-pro text-subtitle">
            Kickstart your developer journey with Appwrite
        </h2>
        <p class="font-medium">
            Earn free access through GitHub Education to build your next project on Appwrite Cloud.
            Sign up for the GitHub Student Developer Pack to receive Appwrite Cloud for the duration
            of your studies.
        </p>

        <p class="font-medium">
            This credit is available only for users who are verified through the GitHub program as
            students. The plan is valid until you graduate from GitHub Education.
        </p>
    </div>
    <img
        src={KICKSTART_SRC}
        width={KICKSTART_W}
        height={KICKSTART_H}
        alt="Kickstart"
        class="mx-auto h-auto max-w-full"
        decoding="async"
    />
</div>
