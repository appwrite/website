<script lang="ts">
	import type { HTMLThAttributes } from 'svelte/elements';

	export let align: HTMLThAttributes['align'] = undefined;
</script>

<th class="aw-table-head-col" {align}>
	<span class="aw-eyebrow">
		<slot />
	</span>
</th>
