<script lang="ts">
    import Button from './ui/Button.svelte';
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';

    export let classes = '';
</script>

<Button class={classes} href={PUBLIC_APPWRITE_DASHBOARD}>
    <span class="hidden group-[&[data-logged-in]]/body:block">Go to Console</span>
    <span class="block group-[&[data-logged-in]]/body:hidden">Get started</span>
</Button>
