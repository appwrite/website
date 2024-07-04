<script lang="ts">
	export let name: string;
	export let tag: string;
	export let icon: 'x' | 'linkedin' | 'discord' | 'product-hunt';
	export let avatarSrc: string;
</script>

<div class="web-card is-white">
	<div class="web-social-item u-flex-vertical u-gap-24">
		<div class="u-flex u-gap-16 u-main-space-between">
			<div class="web-user-box">
				<img class="web-user-box-image" src={avatarSrc} alt="Avatar of {name}" />
				<div class="web-user-box-name web-sub-body-500">{name}</div>
				<div class="web-user-box-username web-sub-body-400">{tag}</div>
			</div>
			<span class="web-social-item-icon web-icon-{icon}" aria-label={icon} aria-hidden="true" />
		</div>
		<p class="web-sub-body-500 web-u-text-color-neutral-700">
			<slot />
		</p>
	</div>
</div>
