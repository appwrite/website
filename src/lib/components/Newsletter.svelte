<script lang="ts">
	import { Tabs } from '$lib/UI';
</script>

<img src="/images/bgs/pre-footer.svg" alt="" class="pre-footer-bg" />

<div class="aw-u-row-gap-80 u-position-relative">
	<div class="aw-container">
		<div class="aw-hero aw-u-max-width-800">
			<h5 class="aw-display aw-u-color-text-primary">Subscribe to our newsletter</h5>
			<p class="aw-description aw-u-color-text-primary" style="opacity:0.64">
				Sign up to our company blog and get the latest insights from Appwrite. Learn more about
				engineering, product design, building community, and tips & tricks for using Appwrite.
			</p>
			<div
				class="aw-subscribe-input aw-input-text is-reset-input-inside u-width-full-line aw-u-max-width-380 u-margin-inline-auto u-margin-block-start-32"
			>
				<input type="email" placeholder="Enter your email" />
				<button class="aw-button">Sign up</button>
			</div>
		</div>
	</div>
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
