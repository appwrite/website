<script lang="ts">
    import Tbody from '$markdoc/nodes/Tbody.svelte';
    import Td from '$markdoc/nodes/Td.svelte';
    import Th from '$markdoc/nodes/Th.svelte';
    import Thead from '$markdoc/nodes/Thead.svelte';
    import Tr from '$markdoc/nodes/Tr.svelte';
    import { Table } from '$markdoc/nodes/_Module.svelte';

    export let columns: string[] = [];
    export let data: string[][] = [];
</script>

<Table>
    <Thead>
        <Tr>
            {#each columns as column}
                <Th>
                    <span class="aw-eyebrow">{column}</span>
                </Th>
            {/each}
        </Tr>
    </Thead>
    <Tbody>
        {#each data as row}
            <Tr>
                {#each row as cell}
                    <Td>{cell}</Td>
                {/each}
            </Tr>
        {/each}
    </Tbody>
</Table>