<script lang="ts">
	export let expandable = false;

	const handleMenuClick = () => {
		const gridHugeNavs = document.querySelector('.aw-grid-huge-navs');
		const referencesMenu = document.querySelector('.aw-references-menu');

		gridHugeNavs?.classList.toggle('is-open');
		referencesMenu?.classList.remove('is-open');
	};
</script>

<nav class="aw-side-nav" class:is-transparent={!expandable}>
	<div class="aw-side-nav-wrapper">
		<button class="aw-input-text aw-is-not-desktop">
			<span class="icon-search" />
			<span class="text">Search in docs</span>
		</button>
		<div class="aw-side-nav-scroll">
			<section>
				<ul>
					<li>
						<a class="aw-side-nav-button is-selected" href="/docs/quick-start">
							<span class="icon-play" aria-hidden="true" />
							<span class="aw-caption-400">Quick Start</span>
						</a>
					</li>
					<li>
						<a class="aw-side-nav-button" href="/docs/tutorials">
							<span class="icon-book-open" aria-hidden="true" />
							<span class="aw-caption-400">Tutorials</span>
						</a>
					</li>
					<li>
						<a class="aw-side-nav-button" href=".">
							<span class="icon-cog" aria-hidden="true" />
							<span class="aw-caption-400">SDKs</span>
						</a>
					</li>
					<li>
						<button class="aw-side-nav-button">
							<span class="icon-terminal" aria-hidden="true" />
							<span class="aw-caption-400">Command Line</span>
						</button>
					</li>
					<li>
						<a class="aw-side-nav-button" href="/docs/reference">
							<span class="icon-document" aria-hidden="true" />
							<span class="aw-caption-400">References</span>
						</a>
					</li>
				</ul>
			</section>
			<section>
				<h4 class="aw-side-nav-header aw-eyebrow">Products</h4>
				<ul>
					<li>
						<button class="aw-side-nav-button is-selected">
							<span class="icon-user-group" aria-hidden="true" />
							<span class="aw-caption-400">Auth</span>
							<span class="icon-cheveron-down u-margin-inline-start-auto" aria-hidden="true" />
						</button>
					</li>
					<li>
						<button class="aw-side-nav-button">
							<span class="icon-database" aria-hidden="true" />
							<span class="aw-caption-400">Databases</span>
							<span class="icon-cheveron-down u-margin-inline-start-auto" aria-hidden="true" />
						</button>
					</li>
					<li>
						<button class="aw-side-nav-button">
							<span class="icon-lightning-bolt" aria-hidden="true" />
							<span class="aw-caption-400">Functions</span>
							<span class="icon-cheveron-down u-margin-inline-start-auto" aria-hidden="true" />
						</button>
					</li>
					<li>
						<button class="aw-side-nav-button">
							<span class="icon-folder" aria-hidden="true" />
							<span class="aw-caption-400">Storage</span>
							<span class="icon-cheveron-down u-margin-inline-start-auto" aria-hidden="true" />
						</button>
					</li>
				</ul>
			</section>
			<section>
				<h4 class="aw-side-nav-header aw-eyebrow">APIS</h4>
				<ul>
					<li>
						<a class="aw-side-nav-button" href=".">
							<span class="icon-clock" aria-hidden="true" />
							<span class="aw-caption-400">Realtime</span>
						</a>
					</li>
					<li>
						<a class="aw-side-nav-button" href=".">
							<span class="icon-play" aria-hidden="true" />
							<span class="aw-caption-400">REST</span>
						</a>
					</li>
					<li>
						<a class="aw-side-nav-button" href=".">
							<span class="icon-play" aria-hidden="true" />
							<span class="aw-caption-400">GraphQL</span>
						</a>
					</li>
				</ul>
			</section>
			<section>
				<h4 class="aw-side-nav-header aw-eyebrow">Advanced</h4>
				<ul>
					<li>
						<button class="aw-side-nav-button">
							<span class="icon-puzzle" aria-hidden="true" />
							<span class="aw-caption-400">Integration</span>
							<span class="icon-cheveron-down u-margin-inline-start-auto" aria-hidden="true" />
						</button>
					</li>
					<li>
						<button class="aw-side-nav-button">
							<span class="icon-play" aria-hidden="true" />
							<span class="aw-caption-400">Platform</span>
							<span class="icon-cheveron-down u-margin-inline-start-auto" aria-hidden="true" />
						</button>
					</li>
					<li>
						<button class="aw-side-nav-button">
							<span class="icon-refresh" aria-hidden="true" />
							<span class="aw-caption-400">Migrations</span>
							<span class="icon-cheveron-down u-margin-inline-start-auto" aria-hidden="true" />
						</button>
					</li>
				</ul>
			</section>
		</div>
		{#if expandable}
			<button
				on:click={handleMenuClick}
				class="aw-icon-button u-margin-inline-start-auto"
				aria-label="toggle nav"
			>
				<span class="icon-cheveron-right" aria-hidden="true" />
			</button>
		{/if}
		<div class="aw-side-nav-mobile-footer-buttons">
			<button class="aw-button u-width-full-line">
				<span class="text">Go to console</span>
			</button>
			<!-- todo: replace SVG with font-icon -->
			<button class="aw-button is-text u-width-full-line">
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none"><path d="M8.55214 0.894436C8.73682 0.525615 9.26319 0.525617 9.44786 0.894438L11.3548 4.70276C11.4282 4.84944 11.5688 4.95086 11.7312 4.97425L15.9844 5.5871C16.3973 5.64659 16.5607 6.15521 16.2598 6.44413L13.1922 9.38955C13.0721 9.50495 13.0171 9.67255 13.0457 9.83669L13.7708 14.0043C13.8418 14.4126 13.4147 14.7256 13.0468 14.5349L9.23053 12.5564C9.08598 12.4815 8.91402 12.4815 8.76948 12.5564L4.95321 14.5349C4.58534 14.7256 4.1582 14.4126 4.22923 14.0044L4.95432 9.83669C4.98288 9.67255 4.92794 9.50495 4.80776 9.38955L1.74017 6.44413C1.43926 6.15521 1.60274 5.64659 2.01564 5.5871L6.26881 4.97425C6.43118 4.95086 6.5718 4.84944 6.64524 4.70276L8.55214 0.894436Z" stroke="white" stroke-opacity="0.48" stroke-width="1.20208" stroke-linecap="round" stroke-linejoin="round"></path></svg>
				<span class="text">Star on GitHub</span>
				<span class="aw-inline-tag aw-sub-body-400">99.9k</span>
			</button>
		</div>
	</div>
</nav>
