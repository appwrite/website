<script lang="ts">
    import { socials } from '$lib/constants';
    import { classNames } from '$lib/utils/classnames';
    import ThemeSelect from '../ThemeSelect.svelte';

    export let variant: 'homepage' | 'docs' = 'homepage';

    let className: string = '';
    export { className as class };

    const year = new Date().getFullYear();
</script>

<div class="container">
    {#if variant === 'homepage'}
        <footer
            class={classNames(
                'text-secondary text-micro border-smooth relative mt-12 flex items-center justify-between gap-4 border-t py-6',
                className
            )}
        >
            <ul class="flex gap-2">
                {#each socials as social}
                    <li>
                        <a
                            href={social.link}
                            class="web-icon-button"
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span class={social.icon} aria-hidden="true" />
                        </a>
                    </li>
                {/each}
            </ul>
            <div class="flex items-center gap-4">
                <div>Copyright © {year} Appwrite</div>

                <iframe
                    class="status mt-4 w-full md:w-fit md:max-w-[230px]"
                    title="Appwrite Status"
                    src="https://status.appwrite.online/badge?theme=dark"
                    height="35"
                    frameborder="0"
                    scrolling="no"
                    style:color-scheme="none"
                    style:margin-top="-4px"
                />

                <ul class="flex gap-4">
                    <li><a class="web-link" href="/terms">Terms</a></li>
                    <li><a class="web-link" href="/privacy">Privacy</a></li>
                    <li><a class="web-link" href="/cookies">Cookies</a></li>
                </ul>
            </div>
        </footer>
    {:else if variant === 'docs'}
        <footer
            class={classNames(
                'text-secondary bg-primary-bg border-smooth relative mt-8 flex justify-between gap-4 border-t py-6 text-sm',
                className
            )}
        >
            <div class="web-main-footer-grid-1">
                <ul class="web-main-footer-grid-1-column-1 flex gap-2">
                    {#each socials as social}
                        <li>
                            <a
                                href={social.link}
                                class="web-icon-button"
                                aria-label={social.label}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span class={social.icon} aria-hidden="true" />
                            </a>
                        </li>
                    {/each}
                </ul>
                <div class="web-main-footer-grid-1-column-2">
                    <ThemeSelect />
                </div>
                <ul class="web-main-footer-grid-1-column-3 web-main-footer-links items-start">
                    <li>
                        <a href="/discord" target="_blank" rel="noopener noreferrer">Support</a>
                    </li>
                    <li>
                        <a href="https://appwrite.online" target="_blank" rel="noopener noreferrer"
                            >Status</a
                        >
                    </li>
                </ul>
                <div class="web-main-footer-grid-1-column-4 web-main-footer-copyright">
                    Copyright © {year} Appwrite
                </div>
            </div>
        </footer>
    {/if}
</div>

<style lang="scss">
    @use '$scss/abstract/variables/devices';
    .web-icon-button {
        display: grid;
    }

    @media #{devices.$break1} {
        .status {
            height: 35px;
        }
    }

    .e-main-footer {
        display: flex;
        @media #{devices.$break1} {
            flex-direction: column;
            > * {
                padding-block: 1rem;
                &:not(:first-child) {
                    border-block-start: solid 0.0625rem hsl(var(--web-color-border));
                }
            }
        }
        @media #{devices.$break2open} {
            display: flex;
            gap: 2rem;
        }
    }
</style>
