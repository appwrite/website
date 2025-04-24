<script>
    import Auth from './(animations)/auth.svelte';
    import Databases from './(animations)/databases.svelte';
    import Functions from './(animations)/functions.svelte';
    import Messaging from './(animations)/messaging.svelte';
    import Realtime from './(animations)/realtime.svelte';
    import Sites from './(animations)/sites.svelte';
    import Storage from './(animations)/storage.svelte';
</script>

<div class="container py-20">
    <h2 class="text-primary font-aeonik-pro mx-auto mb-16 max-w-sm text-center text-5xl">
        Backend APIs, frontend hosting
    </h2>
    <div class="grid grid-cols-12 gap-4">
        <Auth />
        <Databases />
        <Storage />
        <Functions />
        <Messaging />
        <Realtime />
        <Sites />
    </div>
</div>
