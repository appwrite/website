<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

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
            ID: 3397,
            name: 'Turtlenecks',
            barcode: 'TRTL'
        },
        {
            ID: 2224,
            name: 'Pullovers',
            barcode: 'PLOV'
        },
        {
            ID: 5689,
            name: 'Zip-up',
            barcode: 'ZPUP'
        }
    ];

    const [productHeadings] = products.map((product) => Object.keys(product));

    //         style:transform={`translateY(-${i * 10}px) translateX(-${i * 10}px)`}
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
        <div class="relative">
            <div
                class="border-smooth absolute flex aspect-[3/2] min-w-[260px] flex-col rounded-2xl border bg-[#232325]/90 shadow-[4px_8px_20px_rgba(0,0,0,0.2)] backdrop-blur-md"
            >
                <h3 class="text-caption text-primary py-1 px-2.5">Sweaters</h3>
                <div class="border-smooth mx-1 mt-auto mb-1 flex-1 rounded-xl border">
                    <table class="table w-full p-2.5">
                        <thead>
                            <tr
                                class="bg-greyscale-900 border-smooth text-primary text-micro w-full border-b font-normal"
                            >
                                {#each productHeadings as heading}
                                    <th
                                        class="p-2 text-left first-of-type:rounded-tl-xl last-of-type:rounded-tr-xl"
                                    >
                                        <span class="inline">{heading}</span>
                                        <svg
                                            width="16"
                                            height="17"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="inline h-[1lh]"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M8.00005 2.8999C8.21222 2.8999 8.41571 2.98419 8.56573 3.13422L10.9657 5.53422C11.2782 5.84664 11.2782 6.35317 10.9657 6.66559C10.6533 6.97801 10.1468 6.97801 9.83436 6.66559L8.00005 4.83127L6.16573 6.66559C5.85331 6.97801 5.34678 6.97801 5.03436 6.66559C4.72194 6.35317 4.72194 5.84664 5.03436 5.53422L7.43436 3.13422C7.58439 2.98419 7.78788 2.8999 8.00005 2.8999ZM5.03436 10.3342C5.34678 10.0218 5.85331 10.0218 6.16573 10.3342L8.00005 12.1685L9.83436 10.3342C10.1468 10.0218 10.6533 10.0218 10.9657 10.3342C11.2782 10.6466 11.2782 11.1532 10.9657 11.4656L8.56573 13.8656C8.25331 14.178 7.74678 14.178 7.43436 13.8656L5.03436 11.4656C4.72194 11.1532 4.72194 10.6466 5.03436 10.3342Z"
                                                fill="#6C6C71"
                                            />
                                        </svg>
                                    </th>
                                {/each}
                            </tr>
                        </thead>
                        <tbody class="text-micro divide-smooth divide-y">
                            {#each products as product, p}
                                <tr class="bg-[#1D1D21]">
                                    {#each Object.values(product) as item, i}
                                        <td
                                            class={classNames('text-primary p-2.5 text-left', {
                                                'rounded-bl-xl':
                                                    p === products.length - 1 && i === 0,
                                                'rounded-br-xl':
                                                    p === products.length - 1 &&
                                                    i === Object.values(product).length - 1
                                            })}>{item}</td
                                        >
                                    {/each}
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
