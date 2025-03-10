<script lang="ts">
    const collection = [
        {
            category: '',
            department: '',
            barcode: '',
            id: 0
        }
    ];

    const products = [
        {
            id: 3397,
            name: 'Turtlenecks',
            barcode: 'TRTL'
        },
        {
            id: 2224,
            name: 'Pullovers',
            barcode: 'PLOV'
        },
        {
            id: 5689,
            name: 'Zip-up',
            barcode: 'ZPUP'
        }
    ];
</script>

<div
    class="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 md:col-span-6"
>
    <div class="space-y-3 pt-2 px-3 pb-4">
        <div class="flex items-center gap-2">
            <img
                src="/images/icons/illustrated/dark/databases.png"
                alt="Databases"
                class="size-7"
            />
            <h3 class="font-aeonik-pro text-label text-primary">Databases</h3>
        </div>
        <p class="text-sub-body text-primary max-w-lg font-medium">
            Scalable and robust databases <span class="text-secondary"
                >backed by your favorite technologies.</span
            >
        </p>
    </div>
    <div
        class="flex h-[26.25rem] items-center justify-between overflow-clip rounded-xl bg-black/24 px-8"
    >
        <div
            class="border-smooth flex h-[190px] w-[260px] flex-col rounded-2xl border bg-[#232325]/90 backdrop-blur-md"
        >
            <h3 class="text-caption text-primary p-3">Sweaters</h3>
            <table class="bg-greyscale-900 mx-1 mt-auto mb-1 table flex-1 rounded-xl p-2">
                <thead>
                    <tr class="text-primary text-micro w-full font-normal">
                        <th class="pl-2 text-left">ID</th>
                        <th class="pl-2 text-left">name</th>
                        <th class="pl-2 text-left">barcode</th>
                    </tr>
                </thead>
                <tbody class="text-micro">
                    {#each products as product}<tr>
                            <td class="text-primary pl-2 text-left">{product.id}</td>
                            <td class="text-primary pl-2 text-left">{product.name}</td>
                            <td class="text-primary pl-2 text-left">{product.barcode}</td>
                        </tr>
                    {/each}</tbody
                >
            </table>
        </div>
    </div>
</div>
