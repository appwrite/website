<script lang="ts">
    export let heading: string = 'Start building with Appwrite today';
    export let url: string = 'https://cloud.appwrite.io';
    export let label: string = 'Get started';
</script>

<div class="call-to-action">
    <div class="details">
        <h2 class="web-label">{heading}</h2>
        <a href={url} class="web-button">{label}</a>
    </div>
</div>

<style lang="scss">
    .call-to-action {
        border-top: 1px solid hsl(var(--web-color-subtle));
        padding: 48px 0;
        min-height: 180px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

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
