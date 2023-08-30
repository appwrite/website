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
	</div>
</nav>
