<script lang="ts">
</script>

<div class="grid">
    <div class="main">
        <slot name="main" />
    </div>
    <div class="sidebar">
        <slot name="sidebar" />
    </div>
    <div class="footer">
        <slot name="footer" />
    </div>
</div>

<style lang="scss">
    @use '$scss/abstract' as *;

    .grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: pxToRem(32);

        .main {
            grid-column: 1 / 8;
        }

        .sidebar {
            grid-column: 8 / 13;
        }

        .footer {
            display: grid;
            grid-template-columns: repeat(12, 1fr);

            &:first-child {
                grid-column: 1 / 5;
            }

            &:nth-child(2) {
                grid-column: 5 / 9;
            }

            &:last-child {
                grid-column: 5 / 9;
            }
        }
    }
</style>
