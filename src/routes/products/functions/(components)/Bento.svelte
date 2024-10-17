<script lang="ts">
    import SessionManagement from './animations/SessionManagement.svelte';
    import MultiFactor from './animations/MultiFactor.svelte';
    import SecurePasswords from './animations/SecurePasswords.svelte';
    import Events from './animations/Events.svelte';
    import SessionLimit from './animations/SessionLimit.svelte';
    import PasswordDictionary from './animations/PasswordDictionary.svelte';
</script>

<section
    class="relative [background-size:350%] bg-center bg-top bg-no-repeat py-10 md:bg-contain md:py-20"
>
    <div class="container">
        <div class="mx-auto flex max-w-[325px] flex-col gap-4 text-center">
            <h2 class="font-aeonik-pro text-primary text-pretty text-4xl">
                Built-in<br /> advanced security
            </h2>
            <p>
                Provide top security and protection with built-in security and compliance features.
            </p>
        </div>

        <div class="mt-10 grid min-h-[900px] gap-4 md:grid-cols-3">
            <SessionManagement />
            <MultiFactor />
            <SecurePasswords />
            <Events />
            <SessionLimit />
            <PasswordDictionary />
        </div>
    </div>
</section>
