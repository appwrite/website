<script lang="ts">
	import { setContext } from "svelte";

    setContext("no-paragraph", true);
</script>
<blockquote class="aw-blockquote">
	<p class="aw-description">
		<slot />
	</p>
</blockquote>
