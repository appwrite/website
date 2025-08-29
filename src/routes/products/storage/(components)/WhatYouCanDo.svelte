<script lang="ts">
    import Tabs from './multicode-tabs/Tabs.svelte';
    import TabsItem from './multicode-tabs/TabsItem.svelte';

    import { Platform } from '$lib/utils/references';
    import MultiCodeContextless from '$lib/components/MultiCodeContextless.svelte';

    const tabs = [
        {
            label: 'List files',
            content: [
                {
                    language: Platform.ServerNodeJs,
                    content: `// List files inside a specific bucket
                    const files = await storage.listFiles({
                        bucketId: '<BUCKET_ID>'
                    });`
                }
            ]
        },
        {
            label: 'Create file',
            content: [
                {
                    language: Platform.ServerNodeJs,
                    content: `// Create files inside a specific bucket
                    const files = await storage.createFile({
                        bucketId: '[BUCKET_ID]',
                        fileId: '<FILE_ID>',
                        file: inputFile
                    });`
                }
            ]
        },
        {
            label: 'Get file',
            content: [
                {
                    language: Platform.ServerNodeJs,
                    content: `// Get file inside a specific bucket
                    const files = await storage.getFile({
                        bucketId: '<BUCKET_ID>',
                        fileId: '<FILE_ID>'
                    });`
                }
            ]
        },
        {
            label: 'Delete file',
            content: [
                {
                    language: Platform.ServerNodeJs,
                    content: `// List files inside a specific bucket
                    const files = await storage.deleteFiles({
                        bucketId: '<BUCKET_ID>'
                    });`
                }
            ]
        }
    ];
</script>

<div class="web-u-gap-20 u-min-width-0 u-max-width-100-percent flex flex-col">
    <Tabs>
        {#each tabs as tab}
            <TabsItem id={tab.label.toLowerCase()} title={tab.label}>
                <MultiCodeContextless selected={Platform.ServerNodeJs} data={tab.content} />
            </TabsItem>
        {/each}
    </Tabs>
</div>
