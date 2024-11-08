<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';

    import Templates from '../(assets)/templates.png';
</script>

<section class="light bg-greyscale-50 py-4 md:py-20">
    <div
        class="container grid grid-cols-1 gap-8 overflow-x-hidden pr-0 pl-5 md:grid-cols-12 md:px-5"
    >
        <div class="col-span-4 mb-10 flex flex-col">
            <span class="web-badges text-micro font-aeonik-fono mr-auto ml-0 uppercase !text-white"
                >Getting Started_</span
            >
            <h2 class="text-title text-primary font-aeonik-pro mt-8 mb-4 text-pretty">
                Add functionality within seconds
            </h2>
            <p class="text-body text-secondary text-pretty font-medium">
                Appwrite offers a wide variety of ready-to-use templates to speed up development.
            </p>
        </div>
        <div
            class="col-span-8 w-[150%] rounded-3xl bg-gradient-to-br from-black/6 via-black/4 via-[61%] to-black/6 p-3 md:w-full"
        >
            <img class="rounded-xl" src={Templates} alt="Templates console" />
        </div>
    </div>
</section>
