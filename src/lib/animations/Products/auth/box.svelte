<script lang="ts">
	import { getInitials } from '$lib/animations';
	import { fly } from 'svelte/transition';
	import { authController } from '.';
	import { flip } from '$lib/utils/flip';

	const { state } = authController;

	type AuthEntry = {
		avatar: string;
		name: string;
		email: string;
		id: number;
	};
	$: authData = [
		$state.submitted
			? {
					avatar: getInitials($state.name),
					name: $state.name,
					email: $state.email,
					id: 0
			  }
			: undefined,
		{
			avatar: 'BD',
			name: 'Benjamin Davis',
			email: 'benjamin.davis@example.com',
			id: 1
		},
		{
			avatar: 'OS',
			name: 'Olivia Smith',
			email: 'olivia.smith@example.com',
			id: 2
		},
		{
			avatar: 'EW',
			name: 'Ethan Wilson',
			email: 'ethan.wilson@example.com',
			id: 3
		}
	].filter(Boolean) as AuthEntry[];
</script>

<div class="pseudo-table">
	<div class="header">
		<span class="aw-eyebrow">Name</span>
		<span class="aw-eyebrow">Identifier</span>
	</div>
	{#each authData as user (user.id)}
		<div
			class="row"
			in:fly={{ duration: 100, x: -16, delay: 100 }}
			out:fly={{ duration: 100, x: -16 }}
			animate:flip={{ duration: 150 }}
		>
			<div class="u-flex u-cross-center u-gap-12">
				<div class="avatar is-size-small">{user.avatar}</div>
				<span class="truncated">{user.name}</span>
			</div>
			<span class="truncated">{user.email}</span>
		</div>
	{/each}
</div>
