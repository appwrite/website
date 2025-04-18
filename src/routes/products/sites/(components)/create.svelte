<script lang="ts">
    import Dashboard from '../(assets)/dashboards/create-dashboard.svg';
</script>

<div class="flex w-full flex-col gap-8 md:px-8">
    <span class="text-primary text-micro font-aeonik-fono uppercase"
        >Create<span class="text-accent">_</span></span
    >

    <div
        class="mask border-smooth flex aspect-video w-full flex-col rounded-t-3xl border bg-gradient-to-br from-white/10 via-white/5 to-white/10 px-2 pt-2 backdrop-blur-xl"
        style:--mask-height="450px"
    >
        <img src={Dashboard} alt="Create a site dashboard" class="h-full w-full rounded-t-2xl" />
    </div>

    <div class="relative z-10 mx-auto -mt-24 flex max-w-2xl flex-col gap-4 pl-12 text-center">
        <h2 class="text-title text-primary font-aeonik-pro">
            Clone a template or import a repository
        </h2>
        <p class="text-secondary text-description">
            See a preview of your crafted messages on the Console before sending them.
        </p>
    </div>
</div>
