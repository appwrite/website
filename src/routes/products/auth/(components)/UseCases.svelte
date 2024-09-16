<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
</script>

<section class="light bg-white py-40">
    <div class="container grid gap-8 overflow-x-hidden md:grid-cols-2">
        <div
            class="mx-auto mb-20 flex flex max-w-[25rem] flex-col items-center justify-center gap-y-6 text-center"
        >
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
