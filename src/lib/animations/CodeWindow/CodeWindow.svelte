<script>
    import AutoBox from '../AutoBox.svelte';
    import Code from './Code.svelte';
</script>

<div class="code-console">
    <div class="header">
        <div class="ellipse"></div>
        <div class="ellipse-2"></div>
        <div class="ellipse-3"></div>
    </div>
    <div class="block">
        <AutoBox>
            <slot {Code} />
        </AutoBox>
    </div>
    <div id="code-bottom"></div>
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .code-console {
        @include gradients.border-gradient;
        --p-radius: 16px;

        display: flex;
        flex-direction: column;

        background-color: hsl(var(--web-color-card));
        border-radius: var(--p-radius);
        --m-border-radius: var(--p-radius);
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0) 125.11%
        );
        backdrop-filter: blur(8px);

        min-width: 330px;
        width: fit-content;
        padding: 0 0.25rem 0.25rem;
    }

    .block {
        width: 100%;
        flex-grow: 1;
        text-align: left;

        border-radius: 12px;
        background: linear-gradient(129deg, rgba(0, 0, 0, 0.48) 22.38%, rgba(0, 0, 0, 0) 136.5%);
        padding: 20px;

        position: relative;
    }

    .header {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.375rem;
        padding: 0.75rem;

        .ellipse {
            background-color: #ec6a5e;

            width: 8px;
            height: 8px;
            top: 12px;
            border-radius: 4px;
        }

        .ellipse-2 {
            background-color: #f5bf4f;

            width: 8px;
            height: 8px;
            top: 12px;
            border-radius: 4px;
        }

        .ellipse-3 {
            background-color: #61c554;

            width: 8px;
            height: 8px;
            top: 12px;
            border-radius: 4px;
        }
    }

    .code-console :global(code) {
        white-space: pre;
        tab-size: 4;
    }
</style>
