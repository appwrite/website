<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    import SessionManagement from './animations/SessionManagement.svelte';
    import MultiFactor from './animations/MultiFactor.svelte';
    import SecurePasswords from './animations/SecurePasswords.svelte';
    import AdvancedSecurity from './animations/AdvancedSecurity.svelte';
    import SessionLimit from './animations/SessionLimit.svelte';
    import PasswordDictionary from './animations/PasswordDictionary.svelte';
</script>

<div class={classNames('py-40 relative')}>
    <div class="container">
        <div class="flex flex-col gap-4 text-center max-w-[325px] mx-auto">
            <h2 class="text-4xl font-aeonik-pro text-primary text-pretty">
                Built-in<br /> advanced security
            </h2>
            <p>
                Provide top security and protection with built-in security and compliance features.
            </p>
        </div>

        <div class="grid grid-cols-3 grid-rows-12 min-h-[900px] gap-4 mt-10">
            <SessionManagement />
            <MultiFactor />
            <SecurePasswords />
            <AdvancedSecurity />
            <SessionLimit />
            <PasswordDictionary />
        </div>
    </div>
</div>
