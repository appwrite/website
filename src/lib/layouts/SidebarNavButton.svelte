<script lang="ts">
	import { page } from '$app/stores';
	import type { NavLink } from './Sidebar.svelte';

	export let groupItem: NavLink;
</script>

<a
	class="aw-side-nav-button"
	class:is-selected={$page.url?.pathname === groupItem.href}
	href={groupItem.href}
>
	{#if groupItem.icon}
		<span class={groupItem.icon} aria-hidden="true" />
	{/if}
	<span class="aw-caption-400">{groupItem.label}</span>
</a>
