<script lang="ts">
    import Lines from './Lines.svelte';
    import Lockup from './Lockup.svelte';
</script>

<div class="hero">
    <div class="container">
        <Lockup />
        <Lines />
    </div>
</div>

<style lang="scss">
    .hero {
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .container {
            --background: hsl(240 5.7% 10.4%);

            position: relative;
            overflow-y: hidden;

            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 50px;
                top: 0;
                background: linear-gradient(to bottom, var(--background), rgba(0, 0, 0, 0));
                z-index: -1;
            }

            &::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 50px;
                bottom: 0;
                background: linear-gradient(to top, var(--background), rgba(0, 0, 0, 0));
                z-index: -1;
            }
        }
    }
</style>
