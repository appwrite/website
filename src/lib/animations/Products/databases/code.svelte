<script lang="ts">
    import Code from '$lib/animations/CodeWindow/Code.svelte';

    let content = `
const result = databases.createDocument(  
	'Your-tasks',  
	tasks,  
	ID.unique(),
	{
		'description': 'Research user needs',
		'tags': ['UX', 'design'],  
	}
);`.trim();
</script>

<Code {content} />
