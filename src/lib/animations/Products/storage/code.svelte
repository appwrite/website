<script lang="ts">
    import Code from '$lib/animations/CodeWindow/Code.svelte';

    let content = `
const result = storage.createFile(
	'my-bucket',
	ID.unique(),
	document.getElementById("uploader").files[0]
);`.trim();
</script>

<Code {content} />
