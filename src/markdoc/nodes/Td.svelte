<script lang="ts">
	import type { HTMLTdAttributes } from "svelte/elements";

	export let align: HTMLTdAttributes['align'];
</script>

<td class="aw-table-col" {align}>
	<slot />
</td>
