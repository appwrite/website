<script>
	let qs = [
		'android',
		'angular',
		'apple',
		'astro',
		'flutter',
		'nextjs',
		'nuxt',
		'qwik',
		'react',
		'sveltekit',
		'vuejs',
		'node'
	];
</script>

<ul class="aw-list">
	{#each qs as q}
		<li>
			<a class="aw-link" href={`/docs/quick-starts/${q}`}>{q}</a>
		</li>
	{/each}
</ul>
