<script lang="ts">
    import SessionManagement from './animations/SessionManagement.svelte';
    import MultiFactor from './animations/MultiFactor.svelte';
    import SecurePasswords from './animations/SecurePasswords.svelte';
    import AdvancedSecurity from './animations/AdvancedSecurity.svelte';
    import SessionLimit from './animations/SessionLimit.svelte';
    import PasswordDictionary from './animations/PasswordDictionary.svelte';
</script>

<section
    class="relative bg-[url(/images/bgs/checker-bg.png)] [background-size:350%] bg-center bg-top bg-no-repeat pt-32 pb-40 md:bg-contain"
>
    <div class="container">
        <div class="mx-auto flex max-w-[325px] flex-col gap-4 text-center">
            <h2 class="font-aeonik-pro text-primary text-4xl text-pretty">
                Built-in<br /> advanced security
            </h2>
            <p>
                Provide top security and protection with built-in security and compliance features.
            </p>
        </div>

        <div
            class="mt-10 grid min-h-[900px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-12"
        >
            <SessionManagement />
            <MultiFactor />
            <SecurePasswords />
            <AdvancedSecurity />
            <SessionLimit />
            <PasswordDictionary />
        </div>
    </div>
</section>
