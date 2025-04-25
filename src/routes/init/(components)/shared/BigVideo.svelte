<script lang="ts">
    import Video from './Video.svelte';

    type $$Props = {
        url?: string;
        title: string;
        label?: string;
        thumbnail: string;
        src: string;
    };

    export let title: $$Props['title'];
    export let label: $$Props['label'] = 'View';
    export let thumbnail: $$Props['thumbnail'];
    export let src: $$Props['src'];
</script>

<div class="web-card is-normal has-border-gradient overflow-hidden" style="padding: 0.5rem;">
    <Video {thumbnail} {src}>
        <div class="details">
            <h3 class="text-label text-primary">
                {title}
            </h3>
            <div class="web-card-link flex items-center">
                <span class="text">{label}</span>
                <span class="web-icon-arrow-right"></span>
            </div>
        </div>
    </Video>
</div>

<style lang="scss">
    .web-card {
        background-color: hsl(var(--web-color-subtle));
        display: flex;
        justify-content: space-between;
        height: 100%;
        gap: 16px;

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }

        .details {
            position: absolute;
            bottom: 16px;
            left: 16px;
        }
    }
</style>
