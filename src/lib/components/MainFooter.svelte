<script lang="ts">
    import { socials } from '$lib/constants';
    import ThemeSelect from './ThemeSelect.svelte';
    import FooterCloudStatusBadge from './FooterCloudStatusBadge.svelte';
    import { trackEvent } from '$lib/actions/analytics';

    export let variant: 'homepage' | 'docs' = 'homepage';

    const year = new Date().getFullYear();
</script>

{#if variant === 'homepage'}
    <footer
        class="web-main-footer web-footer-legal-strip relative mt-12 flex w-full flex-col items-center gap-10 xl:flex-row xl:items-center xl:justify-between"
    >
        <div
            class="flex w-full min-w-0 shrink-0 flex-wrap items-center justify-center gap-2 sm:gap-3 xl:w-auto xl:justify-start"
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
                            <span class={social.icon} aria-hidden="true"></span>
                        </a>
                    </li>
                {/each}
            </ul>
            <FooterCloudStatusBadge />
        </div>
        <div
            class="web-main-footer__meta text-sub-body mt-1 flex w-full max-w-full min-w-0 flex-1 flex-col items-center gap-y-2 text-center md:mt-0 md:flex-row md:flex-nowrap md:items-center md:justify-center md:gap-x-4 md:gap-y-0 md:overflow-x-auto md:[scrollbar-width:thin] xl:mt-0 xl:max-w-none xl:justify-end xl:text-end"
        >
            <p class="text-secondary m-0 w-full shrink-0 md:w-auto md:whitespace-nowrap">
                Copyright © {year} Appwrite
            </p>
            <ul
                class="flex w-full shrink-0 flex-nowrap items-center justify-center gap-x-4 md:w-auto"
            >
                <li>
                    <a
                        class="web-link"
                        href="/terms"
                        onclick={() => trackEvent(`footer-terms-click`)}>Terms</a
                    >
                </li>
                <li>
                    <a
                        class="web-link"
                        href="/privacy"
                        onclick={() => trackEvent(`footer-privacy-click`)}>Privacy</a
                    >
                </li>
                <li>
                    <a
                        class="web-link"
                        href="/cookies"
                        onclick={() => trackEvent(`footer-cookies-click`)}>Cookies</a
                    >
                </li>
            </ul>
        </div>
    </footer>
{:else if variant === 'docs'}
    <footer class="web-main-footer is-with-bg-color relative mt-8 text-sm">
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
                            <span class={social.icon} aria-hidden="true"></span>
                        </a>
                    </li>
                {/each}
            </ul>
            <div class="web-main-footer-grid-1-column-2">
                <ThemeSelect />
            </div>
            <ul class="web-main-footer-grid-1-column-3 web-main-footer-links items-end text-right">
                <li>
                    <a
                        href="/discord"
                        target="_blank"
                        rel="noopener noreferrer"
                        onclick={() => trackEvent(`footer-support-click`)}>Support</a
                    >
                </li>
                <li>
                    <a
                        href="https://appwrite.online"
                        target="_blank"
                        rel="noopener noreferrer"
                        onclick={() => trackEvent(`footer-appwrite_status-click`)}>Status</a
                    >
                </li>
                <!-- <li>
					<a href="https://github.com/appwrite/appwrite/releases" target="_blank" rel="noopener noreferrer">Changelog</a>
				</li> -->
            </ul>
            <div class="web-main-footer-grid-1-column-4 web-main-footer-copyright">
                Copyright © {year} Appwrite
            </div>
        </div>
    </footer>
{/if}

<style lang="scss">
    .web-icon-button {
        display: grid;
    }
</style>
