<script>
    import MainNavigation from './main-navigation.svelte';
</script>

<header
    class="border-smooth sticky top-0 z-1000 flex h-[4.5rem] items-center border-b backdrop-blur-md"
>
    <div class="container flex flex-1 items-center justify-between">
        <a href="/">
            <img
                class="hidden dark:block"
                src="/images/logos/appwrite.svg"
                alt="appwrite"
                height="24"
                width="130"
            /></a
        >
        <MainNavigation />

        <button class="web-button">Start building for free</button>
    </div>
</header>
