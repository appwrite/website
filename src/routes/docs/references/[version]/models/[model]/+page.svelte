<script lang="ts">
    import { page } from '$app/stores';
    import Article from '$markdoc/layouts/Article.svelte';
    import { Table, Thead, Tr, Th, Tbody, Td, Heading, Fence } from '$markdoc/nodes/_Module.svelte';

    export let data;
</script>

<svelte:head>
  {#if $page.params.version !== 'cloud'}
    <link rel={`/docs/references/cloud/models/${$page.params.model}`} />
  {/if}
</svelte:head>

<Article title={data.model.title} description="">
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
                {#each data.model.properties as property}
                    <Tr>
                        <Td>{property.name}</Td>
                        <Td>{property.type}</Td>
                        <Td>{property.description}</Td>
                    </Tr>
                {/each}
            </Tbody>
        </Table>
        <Heading id="example" level={2}>Example</Heading>
        <Fence
            content={JSON.stringify(data.example, null, 4)}
            language="json"
            process
            withLineNumbers
        />
    </article>
</Article>
