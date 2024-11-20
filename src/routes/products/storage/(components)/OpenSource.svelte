<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    const items = [
        {
            title: 'Join the community and share knowledge',
            content: 'Lorem ipsum dolor sit amet.',
            icon: '/images/icons/gradients/community.svg'
        },
        {
            title: 'Self-host or go Cloud',
            content: 'Lorem ipsum dolor sit amet consectetur. Nullam ligula blandit.',
            icon: '/images/icons/gradients/self-hosted.svg'
        },
        {
            title: 'No vendor lock-in',
            content: 'Lorem ipsum dolor sit amet consectetur. Nullam ligula blandit.',
            icon: '/images/icons/gradients/lock.svg'
        }
    ];
</script>

<div class="web-big-padding-section-level-2 light">
    <div class="container">
        <div class="web-hero is-center mx-auto">
            <h2 class="web-display web-u-color-text-primary">Powered by open source</h2>
            <p class="web-main-body-500 web-u-margin-block-start-0 web-u-max-width-580 mx-auto">
                Appwrite is a 100% open source project, giving you the flexibility and support you
                need to get your project started.
            </p>
            <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                class="web-button is-secondary is-full-width-mobile web-u-cross-child-center u-margin-block-start-16"
            >
                <span>Join the community</span>
            </a>
        </div>
    </div>
</div>
<div class="web-big-padding-section-level-2 light">
    <div class="container web-u-max-width-993">
        <div class="mt-20 overflow-hidden">
            <div
                class="text-sub-body grid place-items-center gap-8 divide-black/4 font-medium md:grid-cols-3 md:divide-x"
            >
                {#each items as { title, content, icon }, i}
                    <div
                        class={classNames(
                            'relative flex flex-col items-center justify-center text-center md:max-w-[290px]'
                        )}
                    >
                        <img src={icon} width="40" height="40" alt="" />
                        <h3 class="text-sub-body text-primary font-medium">
                            {title}
                        </h3>
                        <p class="text-sub-body">{content}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
