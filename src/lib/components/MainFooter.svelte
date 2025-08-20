<script lang="ts">
    import { socials } from '$lib/constants';
    import ThemeSelect from './ThemeSelect.svelte';
    import { trackEvent } from '$lib/actions/analytics';

    export let variant: 'homepage' | 'docs' = 'homepage';

    const year = new Date().getFullYear();
</script>

{#if variant === 'homepage'}
    <footer class="web-main-footer relative mt-12 flex flex-col justify-between gap-10 lg:flex-row">
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
        <div class="mt-1 grid grid-cols-2 gap-y-4 md:grid-cols-3">
            <div>Copyright © {year} Appwrite</div>

            <!-- <iframe
                class="w-full md:w-fit md:max-w-[230px]"
                title="Appwrite Status"
                src="https://status.appwrite.online/badge?theme=dark"
                height="35"
                frameborder="0"
                scrolling="no"
                style:color-scheme="none"
                style:margin-top="-4px"
            ></iframe> -->

            <ul class="flex gap-4 text-right md:justify-end">
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
    @use '$scss/abstract/variables/devices';
    .web-icon-button {
        display: grid;
    }

    @media #{devices.$break1} {
        .status {
            height: 55px;
            margin-bottom: 6px; /* balancing due to style:margin-top="-4px" & the `iframe` has some spacings too I think */
        }
    }
</style>
