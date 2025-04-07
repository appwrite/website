<script lang="ts">
    const events = [
        {
            timestamp: '2024-07-17 10:05:23',
            name: 'SendEmail',
            status: 'Success'
        },
        {
            timestamp: '2024-07-17 10:10:45',
            name: 'UpdateProfile',
            status: 'Failed'
        },
        {
            timestamp: '2024-07-17 10:15:00',
            name: 'GenerateReport',
            status: 'Success'
        },
        {
            timestamp: '2024-07-17 10:20:12',
            name: 'DeleteAccount',
            status: 'Success'
        },
        {
            timestamp: '2024-07-17 10:25:30',
            name: 'CreateInvoice',
            status: 'Failed'
        },
        {
            timestamp: '2024-07-17 10:30:45',
            name: 'SyncData',
            status: 'Failed'
        }
    ];
</script>

<div class="bg-greyscale-850/90 flex flex-col rounded-2xl p-2">
    <div
        class="relative flex h-[250px] flex-col items-center justify-center overflow-hidden rounded-lg bg-white/[0.02]"
    >
        <div
            class="mx-auto my-6 w-full max-w-[95%] rounded-lg bg-white/10 px-2 pb-2 md:max-w-[70%]"
        >
            <div class="flex gap-0.5 py-2 pl-1">
                {#each Array.from({ length: 3 }) as _}
                    <div class="size-1 rounded-full bg-white"></div>
                {/each}
            </div>
            <div class="bg-greyscale-850 rounded-md p-4">
                <table class="w-full">
                    <thead class="text-secondary mt-4 text-left font-mono text-[0.5rem]">
                        <tr>
                            {#each ['Timestamp', 'Function', 'Status'] as th}
                                <th class="pb-2">{th}</th>
                            {/each}
                        </tr>
                    </thead>

                    <tbody>
                        {#each events as event}
                            <tr class="text-primary font-mono text-[0.5rem]">
                                <td class="py-1">{event.timestamp}</td>
                                <td class="py-1">{event.name}</td>
                                <td class="py-1">{event.status}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="p-4">
        <span class="text-primary">Logging</span>
        <p class="text-secondary">
            Monitor function execution with detailed logging from Appwrite.
        </p>
    </div>
</div>
