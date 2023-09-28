<script lang="ts">
	import ThemeSelect from './ThemeSelect.svelte';

	export let variant: 'homepage' | 'docs' = 'homepage';

	type Social = {
		icon: string;
		label?: string;
		link: string;
	};

	const socials: Array<Social> = [
		{
			icon: 'aw-icon-discord',
			link: 'https://appwrite.io/discord'
		},
		{
			icon: 'aw-icon-github',
			link: 'https://github.com/appwrite'
		},
		{
			icon: 'aw-icon-x',
			link: 'https://twitter.com/intent/follow?screen_name=appwrite'
		},
		{
			icon: 'aw-icon-linkedin',
			link: 'https://www.linkedin.com/company/appwrite'
		},
		{
			icon: 'aw-icon-youtube',
			label: 'YouTube',
			link: 'https://www.youtube.com/c/appwrite?sub_confirmation=1'
		}
	];

	function getSocialLabel(social: Social) {
		return social.label ?? social.icon;
	}
</script>

{#if variant === 'homepage'}
	<footer class="aw-main-footer u-position-relative u-margin-block-start-48">
		<ul class="u-flex u-gap-8">
			{#each socials as social}
				<li>
					<a
						href={social.link}
						class="aw-icon-button"
						aria-label="Appwrite on {getSocialLabel(social)}"
						target="_blank"
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
		class="aw-main-footer is-with-bg-color u-margin-block-start-48 u-small u-position-relative"
	>
		<div class="aw-main-footer-grid-1">
			<ul class="aw-main-footer-grid-1-column-1 u-flex u-gap-8">
				{#each socials as social}
					<li>
						<a
							href={social.link}
							class="aw-icon-button"
							aria-label="Appwrite on {getSocialLabel(social)}"
							target="_blank"
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
					<a href="/discord" target="_blank">Support</a>
				</li>
				<li>
					<a href="https://status.appwrite.io" target="_blank">Status</a>
				</li>
				<!-- <li>
					<a href="https://github.com/appwrite/appwrite/releases" target="_blank">Changelog</a>
				</li> -->
			</ul>
			<div class="aw-main-footer-grid-1-column-4 aw-main-footer-copyright">
				Copyright © 2023 Appwrite
			</div>
		</div>
	</footer>
{/if}
