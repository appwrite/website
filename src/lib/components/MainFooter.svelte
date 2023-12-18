<script lang="ts">
    import { socials } from '$lib/constants';
    import ThemeSelect from './ThemeSelect.svelte';

    export let variant: 'homepage' | 'docs' = 'homepage';
</script>

{#if variant === 'homepage'}
    <footer class="aw-main-footer u-position-relative u-margin-block-start-48">
        <ul class="u-flex u-gap-8">
            {#each socials as social}
                <li>
                    <a
                        href={social.link}
                        class="aw-icon-button"
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span class={social.icon} aria-hidden="true" />
                    </a>
                </li>
            {/each}
        </ul>
        <div>Copyright © 2023 Appwrite</div>
    </footer>
{:else if variant === 'docs'}
    <footer
        class="aw-main-footer is-with-bg-color u-margin-block-start-32 u-small u-position-relative"
    >
        <div class="aw-main-footer-grid-1">
            <ul class="aw-main-footer-grid-1-column-1 u-flex u-gap-8">
                {#each socials as social}
                    <li>
                        <a
                            href={social.link}
                            class="aw-icon-button"
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span class={social.icon} aria-hidden="true" />
                        </a>
                    </li>
                {/each}
            </ul>
            <div class="aw-main-footer-grid-1-column-2">
                <ThemeSelect />
            </div>
            <ul class="aw-main-footer-grid-1-column-3 aw-main-footer-links">
                <li>
                    <a href="/discord" target="_blank" rel="noopener noreferrer">Support</a>
                </li>
                <li>
                    <a href="https://appwrite.online" target="_blank" rel="noopener noreferrer"
                        >Status</a
                    >
                </li>
                <!-- <li>
					<a href="https://github.com/appwrite/appwrite/releases" target="_blank" rel="noopener noreferrer">Changelog</a>
				</li> -->
            </ul>
            <div class="aw-main-footer-grid-1-column-4 aw-main-footer-copyright">
                Copyright © 2023 Appwrite
            </div>
        </div>
    </footer>
{/if}
