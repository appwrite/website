<script lang="ts">
    import Background from './Background.svelte';
    import Lockup from './Lockup.svelte';
</script>

<div class="relative bg-white">
    <div
        class="light load relative z-10 flex min-h-[60vh] flex-col items-center justify-center"
        style="--steps:8;--duration:1.25s;"
    >
        <div class="relative w-full max-w-2xl overflow-hidden">
            <div class="load w-full" style="--steps:5;--duration:2s;">
                <Lockup />
            </div>
        </div>
    </div>
    <div class="load absolute top-0 z-0 flex" style="--steps:12;--duration:1.25s;">
        <Background />
        <div class="relative top-10">
            <Background />
        </div>
        <div class="relative top-20">
            <Background />
        </div>
    </div>
</div>

<style>
    @keyframes load {
        0% {
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        }
        100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
    }

    .load {
        animation: load var(--duration) steps(var(--steps)) forwards;
    }
</style>
