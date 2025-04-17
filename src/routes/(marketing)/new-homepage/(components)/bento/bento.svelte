<script>
    import Auth from './(animations)/auth.svelte';
    import Databases from './(animations)/databases.svelte';
    import Functions from './(animations)/functions.svelte';
    import Messaging from './(animations)/messaging.svelte';
    import Realtime from './(animations)/realtime.svelte';
    import Storage from './(animations)/storage.svelte';
</script>

<div class="container grid grid-cols-12 gap-4 py-20">
    <Auth />
    <Databases />
    <Storage />
    <Functions />
    <Messaging />
    <Realtime />
</div>
