<script lang="ts">
    import { page } from '$app/stores';
    import Article from '$markdoc/layouts/Article.svelte';
    import { Table, Thead, Tr, Th, Tbody, Td, Heading, Fence } from '$markdoc/nodes/_Module.svelte';
    import { parse } from '$lib/utils/markdown';

    export let data;
</script>

<svelte:head>
  {#if $page.params.version !== 'cloud'}
      <link rel="canonical" href={`https://appwrite.io/docs/references/cloud/models/${$page.params.model}`} />
  {/if}
</svelte:head>

<Article title={data.model.title} description="">
    <article>
        <Heading id="properties" level={2}>Properties</Heading>
        <Table>
            <Thead>
                <Tr>
                    <Th>
                        <span class="web-eyebrow">NAME</span>
                    </Th>
                    <Th>
                        <span class="web-eyebrow">TYPE</span>
                    </Th>
                    <Th>
                        <span class="web-eyebrow">DESCRIPTION</span>
                    </Th>
                </Tr>
            </Thead>
            <Tbody>
                {#each data.model.properties as property}
                    <Tr>
                        <Td>{property.name}</Td>
                        <Td>{property.type}</Td>
                        <Td>
                            {property.description} 
                            {#if property.relatedModels}
                                Can be one of: {@html parse(property.relatedModels)}
                            {/if}
                        </Td>                   
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
