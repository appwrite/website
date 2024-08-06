<script lang="ts">
    import { page } from '$app/stores';

    function isDateSameOrAfter(date: Date) {
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        date.setHours(0, 0, 0, 0);

        return date >= currentDate;
    }
</script>

<div
    class="banner"
    class:hidden={$page.url.pathname.includes('init') || isDateSameOrAfter(new Date('2024-08-07'))}
>
    <div class="content web-u-color-text-primary">
        <div class="headings">
            <span style:font-weight="500"
                >init<span class="web-u-color-text-accent">_</span> is coming
            </span>
            <span class="web-u-color-text-secondary">The start of something new</span>
        </div>
        <a href="/init/tickets" rel="noopener noreferrer">
            <span class="web-caption-500">Register now</span>
            <span class="web-icon-arrow-right" aria-hidden="true" />
        </a>
    </div>
    <div class="shine" />
    <div class="border" />
</div>

<style lang="scss">
    .banner {
        --shine: rgba(255, 255, 255, 0.04);
        position: relative;
        min-height: 80px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid hsl(var(--web-color-border));

        &.hidden {
            display: none;
        }

        .content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            position: relative;
            z-index: 10;
            padding-inline: clamp(1.25rem, 4vw, 120rem);

            .headings {
                display: flex;
                flex-direction: column;
            }
        }

        .shine {
            position: absolute;
            inset: 0;
            background: hsl(var(--web-color-background))
                linear-gradient(
                    -24deg,
                    rgba(255, 255, 255, 0) 0,
                    var(--shine) 20%,
                    rgba(255, 255, 255, 0) 40%,
                    var(--shine) 50%,
                    rgba(255, 255, 255, 0) 60%,
                    var(--shine) 80%,
                    rgba(255, 255, 255, 0) 100%
                );
        }
        .border {
            position: absolute;
            left: 0;
            right: 0;
            height: 1px;
            background-color: hsl(var(--web-color-border));
            bottom: 0;
        }
    }
</style>
