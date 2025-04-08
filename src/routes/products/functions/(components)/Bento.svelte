<script lang="ts">
    import CustomDomains from './animations/CustomDomains.svelte';
    import ScheduledFunctions from './animations/ScheduledFunctions.svelte';
    import HttpRequests from './animations/HttpRequests.svelte';
    import Events from './animations/Events.svelte';
    import DelayedExecutions from './animations/DelayedExecutions.svelte';
    import Logging from './animations/Logging.svelte';
</script>

<section class="relative pt-24 pb-20 md:pb-40">
    <div class="container">
        <div
            class="mx-auto flex max-w-[350px] flex-col justify-center gap-4 md:items-center md:text-center"
        >
            <h2 class="font-aeonik-pro text-primary text-4xl text-pretty">
                Execute functions<br /> with ease
            </h2>
            <p>Execute your functions effortlessly through the Appwrite console, SDKs, or API.</p>

            <a
                href="/docs/products/functions/executions"
                class="web-button is-secondary mt-4 !w-full md:!w-fit">Learn more</a
            >
        </div>

        <div class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ScheduledFunctions />
            <Events />
            <CustomDomains />
            <HttpRequests />
            <DelayedExecutions />
            <Logging />
        </div>
    </div>
</section>
