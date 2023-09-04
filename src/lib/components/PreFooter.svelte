<script lang="ts">
	import { Tabs } from '$lib/UI';
</script>

<img src="/images/bgs/pre-footer.svg" alt="" class="pre-footer-bg" />

<div class="aw-grid-1-1 u-gap-32 aw-u-row-gap-80 u-position-relative">
	<section class="aw-hero u-flex aw-u-row-gap-32 u-main-center u-cross-center">
		<h2 class="aw-display u-max-width-600 aw-u-text-align-center aw-u-color-text-primary">
			Start building with Appwrite today
		</h2>
		<button class="aw-button is-transparent aw-u-cross-child-center">
			<span class="text">Get Started</span>
		</button>
	</section>
	<section
		class="aw-card is-transparent has-border-gradient aw-u-max-inline-width-584-mobile aw-u-margin-inline-auto-mobile aw-u-inline-width-100-percent-mobile"
	>
		<Tabs let:TabsList let:TabContent tabs={['Cloud', 'Self-Hosted']}>
			<header class="aw-strip-plans-header">
				<div class="aw-strip-plans-header-wrapper aw-u-row-gap-24">
					<h3 class="aw-title aw-u-color-text-primary">Our Plans</h3>
					<TabsList />
				</div>
			</header>
			<TabContent tab="Cloud">
				<ul class="aw-strip-plans">
					<li class="aw-strip-plans-item aw-strip-plans-container-query">
						<div class="aw-strip-plans-item-wrapper">
							<div class="aw-strip-plans-plan">
								<h4 class="title aw-description">Free</h4>
								<div class="aw-title aw-u-color-text-primary">$0</div>
								<div class="info aw-caption-500" />
							</div>
							<p class="aw-strip-plans-info aw-caption-500">
								For personal, passion projects and non-commercial use.
							</p>
							<button class="aw-button is-full-width-mobile aw-u-cross-child-end"
								><span class="text">Get Started</span></button
							>
						</div>
					</li>
					<li class="aw-strip-plans-item aw-strip-plans-container-query">
						<div class="aw-strip-plans-item-wrapper">
							<div class="aw-strip-plans-plan">
								<h4 class="title aw-description">Pro</h4>
								<div class="aw-title aw-u-color-text-primary">$15</div>
								<div class="info aw-caption-500">per user/month</div>
							</div>
							<p class="aw-strip-plans-info aw-caption-500">
								For pro developers and production projects that need the ability to scale.
							</p>
							<button class="aw-button is-full-width-mobile is-secondary aw-u-cross-child-end"
								><span class="text">Learn More</span></button
							>
						</div>
					</li>
					<li class="aw-strip-plans-item aw-strip-plans-container-query">
						<div class="aw-strip-plans-item-wrapper">
							<div class="aw-strip-plans-plan">
								<h4 class="title aw-description">Scale</h4>
								<div class="aw-title aw-u-color-text-primary">$685</div>
								<div class="info aw-caption-500">per org/month</div>
							</div>
							<p class="aw-strip-plans-info aw-caption-500">
								For pro developers and production projects that need the ability to scale.
							</p>
							<button class="aw-button is-full-width-mobile is-secondary aw-u-cross-child-end"
								><span class="text">Learn More</span></button
							>
						</div>
					</li>
				</ul>
			</TabContent>
			<TabContent tab="Self-Hosted">
				<ul class="aw-strip-plans">
					<li class="aw-strip-plans-item aw-strip-plans-container-query">
						<div class="aw-strip-plans-item-wrapper">
							<div class="aw-strip-plans-plan">
								<h4 class="title aw-description">Free</h4>
								<div class="aw-title aw-u-color-text-primary">$0</div>
								<div class="info aw-caption-500" />
							</div>
							<p class="aw-strip-plans-info aw-caption-500">
								For personal, passion projects and non-commercial use.
							</p>
							<button class="aw-button is-full-width-mobile aw-u-cross-child-end"
								><span class="text">Get Started</span></button
							>
						</div>
					</li>
					<li class="aw-strip-plans-item aw-strip-plans-container-query">
						<div class="aw-strip-plans-item-wrapper">
							<div class="aw-strip-plans-plan">
								<h4 class="title aw-description">Free</h4>
								<div class="aw-title aw-u-color-text-primary">$0</div>
								<div class="info aw-caption-500" />
							</div>
							<p class="aw-strip-plans-info aw-caption-500">
								For personal, passion projects and non-commercial use.
							</p>
							<button class="aw-button is-full-width-mobile aw-u-cross-child-end"
								><span class="text">Get Started</span></button
							>
						</div>
					</li>
					<li class="aw-strip-plans-item aw-strip-plans-container-query">
						<div class="aw-strip-plans-item-wrapper">
							<div class="aw-strip-plans-plan">
								<h4 class="title aw-description">Free</h4>
								<div class="aw-title aw-u-color-text-primary">$0</div>
								<div class="info aw-caption-500" />
							</div>
							<p class="aw-strip-plans-info aw-caption-500">
								For personal, passion projects and non-commercial use.
							</p>
							<button class="aw-button is-full-width-mobile aw-u-cross-child-end"
								><span class="text">Get Started</span></button
							>
						</div>
					</li>
				</ul>
			</TabContent>
		</Tabs>
	</section>
</div>

<style lang="scss">
	.pre-footer-bg {
		position: absolute;
		top: clamp(300px, 50vw, 50%);
		left: clamp(300px, 50vw, 50%);
		transform: translate(-50%, -70%);
		width: clamp(1200px, 200vw, 3000px);
		height: auto;
		max-inline-size: unset;
		max-block-size: unset;
	}
</style>
