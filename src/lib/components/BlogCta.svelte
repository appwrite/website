<script lang="ts">
    export let heading: string = 'Start building with Appwrite today';
    export let url: string = 'https://cloud.appwrite.io';
    export let label: string = 'Get started';
</script>

<div class="call-to-action">
    <div class="details">
        <h2 class="text-label">{heading}</h2>
        <a href={url} class="web-button">{label}</a>
    </div>
</div>

<style lang="scss">
    .call-to-action {
        border-top: 1px solid hsl(var(--web-color-subtle));
        padding: 48px 0;
        min-height: 180px;
        margin-top: 48px;
        display: flex;
        margin-bottom: -184px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;

        &::before {
            content: '';
            position: absolute;
            inset: 0;
            height: 170%;
            z-index: -1;
            background-image: radial-gradient(
                ellipse at center,
                rgba(253, 54, 110, 0.09),
                transparent 85%
            );
            //filter: blur(10px);
        }

        .details {
            gap: 20px;
            max-width: 250px;
            color: #fff;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h2 {
                margin: 0;
            }
        }
    }
</style>
