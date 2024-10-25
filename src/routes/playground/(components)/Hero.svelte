<script lang="ts">
    import Checkerboard from './Checkerboard.svelte';
    import Lockup from './Lockup.svelte';
</script>

<div class="bg-white">
    <div class="light flex min-h-[60vh] flex-col items-center justify-center bg-white">
        <div class="relative w-full max-w-2xl overflow-hidden">
            <div class="relative w-full">
                <Checkerboard cols={20} rows={10}>
                    <Lockup />
                </Checkerboard>
            </div>
        </div>
    </div>
</div>
