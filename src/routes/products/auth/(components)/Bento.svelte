<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    import SessionManagement from './animations/SessionManagement.svelte';
    import MultiFactor from './animations/MultiFactor.svelte';
    import SecurePasswords from './animations/SecurePasswords.svelte';
    import AdvancedSecurity from './animations/AdvancedSecurity.svelte';
    import SessionLimit from './animations/SessionLimit.svelte';
    import PasswordDictionary from './animations/PasswordDictionary.svelte';
</script>

<section class="relative py-20" style="background-image: url(../(assets)/bg-pattern.png)">
    <div class="container">
        <div class="mx-auto flex max-w-[325px] flex-col gap-4 text-center">
            <h2 class="font-aeonik-pro text-primary text-pretty text-4xl">
                Built-in<br /> advanced security
            </h2>
            <p>
                Provide top security and protection with built-in security and compliance features.
            </p>
        </div>

        <div class="mt-10 grid min-h-[900px] grid-rows-12 gap-4 md:grid-cols-3">
            <SessionManagement />
            <MultiFactor />
            <SecurePasswords />
            <AdvancedSecurity />
            <SessionLimit />
            <PasswordDictionary />
        </div>
    </div>
</section>
