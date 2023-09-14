<script lang="ts">
	import type { HTMLTdAttributes } from 'svelte/elements';

	export let align: HTMLTdAttributes['align'] = undefined;
	export let width: HTMLTdAttributes['width'] = undefined;
</script>

<td role="columnheader" class="aw-table-head-col" {align} {width}>
	<span class="aw-eyebrow">
		<slot />
	</span>
</td>
