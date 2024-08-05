<script lang="ts">
    import { BANNER_KEY } from '$lib/constants';

    const hideTopBanner = () => {
        document.body.dataset.bannerHidden = '';
        localStorage.setItem(BANNER_KEY, 'true');
    };
</script>

<div class="banner">
    <div class="content web-u-color-text-primary">
        <div class="headings">
            <span>init_ is coming </span>
            <span class="web-u-color-text-secondary">The start of something new</span>
        </div>
        <a href="/init/tickets" rel="noopener noreferrer">
            <span class="web-caption-500">Register now</span>
            <span class="web-icon-arrow-right" aria-hidden="true" />
        </a>
    </div>
</div>

<style lang="scss">
    .banner {
        min-height: 80px;
        display: flex;
        align-items: center;
        background: linear-gradient(
            to right,
            hsl(var(--web-color-background) / 100%) 0,
            hsl(var(--web-color-background) / 80%) 100%
        );

        .content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            .headings {
                display: flex;
                flex-direction: column;
            }
        }
    }
</style>
