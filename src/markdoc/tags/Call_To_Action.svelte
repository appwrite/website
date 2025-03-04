<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';

    export let label: string = 'Get started with Appwrite';
    export let url: string = PUBLIC_APPWRITE_DASHBOARD;
</script>

<div class="py-12">
    <a href={url} class="web-button">{label}</a>
</div>
