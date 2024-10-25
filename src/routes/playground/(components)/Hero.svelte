<script lang="ts">
    import Background from './Background.svelte';
    import Checkerboard from './Checkerboard.svelte';
    import Lockup from './Lockup.svelte';
</script>

<div class="bg-white">
    <div class="light flex min-h-[60vh] flex-col items-center justify-center bg-white">
        <div class="relative w-full max-w-2xl overflow-hidden">
            <div class="relative w-full">
                <Checkerboard>
                    <Lockup />
                </Checkerboard>
            </div>
        </div>
    </div>
</div>

<style>
    /* 
    .load {
        animation: load var(--duration) steps(var(--steps)) forwards;
    } */
</style>
