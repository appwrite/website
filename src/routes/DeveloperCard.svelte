<script lang="ts">
	export let name: string;
	export let tag: string;
	export let icon: 'x' | 'linkedin' | 'discord' | 'product-hunt';
	export let avatarSrc: string;
	export let profileURL: string;
</script>

<style>
	.aw-social-item-icon:hover {
		transform: scale(1.12); 
		transition: transform 0.3s ease; 
		color: #FD356E;
	}
	.aw-card:hover {
		transform: scale(1.03); 
		transition: transform 0.3s ease;
	}
</style>

<div class="aw-card is-white">
	<div class="aw-social-item u-flex-vertical u-gap-24">
		<div class="u-flex u-gap-16 u-main-space-between">
			<div class="aw-user-box">
				<img class="aw-user-box-image" src={avatarSrc} alt="Avatar of {name}" />
				<div class="aw-user-box-name aw-sub-body-500">{name}</div>
				<a href={profileURL} target="_blank" rel="noopener noreferrer">
				<div class="aw-user-box-username aw-sub-body-400">{tag}</div>
			</a>
			</div>
			<span class="aw-social-item-icon aw-icon-{icon}" aria-label={icon} aria-hidden="true" />
		</div>
		<p class="aw-sub-body-500 aw-u-text-color-neutral-700">
			<slot />
		</p>
	</div>
</div>
