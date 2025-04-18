<script lang="ts">
    import { Button } from '../ui';
    import HamburgerMenu from './navigation/hamburger-menu.svelte';
    import PrimaryNav from './navigation/primary-nav.svelte';
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

        <PrimaryNav class="hidden md:block" />
        <Button class="hidden! md:flex!">Start building for free</Button>

        <HamburgerMenu class="block md:hidden" />
    </div>
</header>
