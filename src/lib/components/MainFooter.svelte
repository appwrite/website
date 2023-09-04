<script lang="ts">
	export let variant: 'homepage' | 'docs' = 'homepage';

	type Social = {
		icon: string;
		label?: string;
		link: string;
	};

	const socials: Array<Social> = [
		{
			icon: 'discord',
			link: 'https://appwrite.io/discord'
		},
		{
			icon: 'github',
			link: 'https://github.com/appwrite'
		},
		{
			icon: 'twitter',
			link: 'https://twitter.com/appwrite'
		},
		{
			icon: 'aw-linkedin',
			link: '.'
		},
		{
			icon: 'youtube',
			label: 'YouTube',
			link: '.'
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
					>
						<span class="icon-{social.icon}" aria-hidden="true" />
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
						>
							<span class="icon-{social.icon}" aria-hidden="true" />
						</a>
					</li>
				{/each}
			</ul>
			<div class="aw-main-footer-grid-1-column-2">
				<div class="aw-select is-colored">
					<button class="physical-select">
						<span class="icon-moon" aria-hidden="true" />
						<span>Dark</span>
					</button>
					<span class="icon-cheveron-down" aria-hidden="true" />
				</div>
			</div>
			<ul class="aw-main-footer-grid-1-column-3 aw-main-footer-links">
				<li>
					<a href=".">Support</a>
				</li>
				<li>
					<a href=".">Status</a>
				</li>
				<li>
					<a href=".">Changelog</a>
				</li>
			</ul>
			<div class="aw-main-footer-grid-1-column-4 aw-main-footer-copyright">
				Copyright © 2023 Appwrite
			</div>
		</div>
	</footer>
{/if}
