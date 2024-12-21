<script lang="ts">
    import { socials } from '$lib/constants';
    import ThemeSelect from '../ThemeSelect.svelte';

    const year = new Date().getFullYear();
</script>

<footer class="web-main-footer col-space-12 is-with-bg-color relative mt-8 text-sm">
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
            <!-- <li>
					<a href="https://github.com/appwrite/appwrite/releases" target="_blank" rel="noopener noreferrer">Changelog</a>
				</li> -->
        </ul>
        <div class="web-main-footer-grid-1-column-4 web-main-footer-copyright">
            Copyright © {year} Appwrite
        </div>
    </div>
</footer>
