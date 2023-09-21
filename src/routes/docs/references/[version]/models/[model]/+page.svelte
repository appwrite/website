<script lang="ts">
	import type { AppwriteSchemaObject } from '$lib/utils/specs.js';
	import Article from '$markdoc/layouts/Article.svelte';
	import { Table, Thead, Tr, Th, Tbody, Td, Heading, Fence } from '$markdoc/nodes/_Module.svelte';

	export let data;

	const properties = data.schema.properties as Record<string, AppwriteSchemaObject>;
	const example = Object.entries(properties).reduce((acc, [name, property]) => {
        
		acc[name] = property['x-example'];
		return acc;
	}, {} as Record<string, unknown>);
    $: console.log(data.schema)
</script>

<Article title={data.schema.description ?? ''} description="">
	<article>
		<Heading id="properties" level={2}>Properties</Heading>
		<Table>
			<Thead>
				<Tr>
					<Th>
						<span class="aw-eyebrow">NAME</span>
					</Th>
					<Th>
						<span class="aw-eyebrow">TYPE</span>
					</Th>
					<Th>
						<span class="aw-eyebrow">DESCRIPTION</span>
					</Th>
				</Tr>
			</Thead>
			<Tbody>
				{#each Object.entries(properties) as [name, property]}
					<Tr>
						<Td>{name}</Td>
						<Td>{property.type}</Td>
						<Td>{property.description}</Td>
					</Tr>
				{/each}
			</Tbody>
		</Table>
		<Heading id="properties" level={2}>Example</Heading>
		<Fence content={JSON.stringify(example, null, 4)} language="json" process withLineNumbers />
	</article>
</Article>
