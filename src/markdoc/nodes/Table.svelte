<script lang="ts">
	import { setContext } from "svelte";

    setContext("in-table", true);
</script>

<div class="aw-table-wrapper">
	<div class="aw-table-scroll">
		<table class="aw-table">
			<slot />
		</table>
	</div>
</div>
