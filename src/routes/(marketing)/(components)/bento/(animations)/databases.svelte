<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { isMobile } from '$lib/utils/is-mobile';
    import GridPaper from '../../grid-paper.svelte';
    import { animate, hover, inView, stagger, transform } from 'motion';

    const collections = [
        {
            Category: 'Sweaters',
            Department: 'Sweaters',
            barcode: 'Sweaters',
            ID: '3397fecdedb1'
        },
        {
            Category: 'Pants',
            Department: 'Pants',
            barcode: 'Pants',
            ID: '2224gabjger4'
        },
        {
            Category: 'T-shirts',
            Department: 'T-shirts',
            barcode: 'T-shirts',
            ID: '5689fdoerre2'
        },
        {
            Category: 'Shoes',
            Department: 'Shoes',
            barcode: 'Shoes',
            ID: '5689fdoerre2'
        },
        {
            Category: 'Accessories',
            Department: 'Accessories',
            barcode: 'Accessories',
            ID: '5689fdoerre2'
        }
    ];

    const [collectionKeys] = collections.map((collection) => Object.keys(collection));

    const productSets = {
        Sweaters: [
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
        ],
        Pants: [
            {
                ID: 3397,
                name: 'Shorts',
                barcode: 'SHRT'
            },
            {
                ID: 2224,
                name: 'Chinos',
                barcode: 'CHNO'
            },
            {
                ID: 5689,
                name: 'Jeans',
                barcode: 'JEAN'
            }
        ],
        Shoes: [
            {
                ID: 3397,
                name: 'Sambas',
                barcode: 'SMBA'
            },
            {
                ID: 2224,
                name: 'Chuck 70s',
                barcode: 'CHKS'
            },
            {
                ID: 5689,
                name: 'Loafers',
                barcode: 'LFRS'
            }
        ]
    };

    const products = Object.values(productSets).flat();

    let container: HTMLElement;

    $effect(() => {
        hover(container, () => {
            if (isMobile()) return;

            animate(
                '.product-table',
                {
                    y: ['var(--y)', 'calc(var(--y) - var(--y-offset))'],
                    x: ['var(--x)', 'calc(var(--x) - var(--x-offset))']
                },
                {
                    type: 'spring',
                    duration: 0.5,
                    delay: stagger(0.02)
                }
            );

            return () => {
                animate(
                    '.product-table',
                    { y: 'var(--y)', x: 'var(--x)' },
                    { type: 'spring', duration: 0.5 }
                );
            };
        });

        inView(
            container,
            () => {
                if (!isMobile()) return;
                animate(
                    '.product-table',
                    {
                        y: ['var(--y)', 'calc(var(--y) - var(--y-offset))'],
                        x: ['var(--x)', 'calc(var(--x) - var(--x-offset))']
                    },
                    {
                        type: 'spring',
                        duration: 0.5,
                        delay: stagger(0.02)
                    }
                );

                return () => {
                    animate(
                        '.product-table',
                        { y: 'var(--y)', x: 'var(--x)' },
                        { type: 'spring', duration: 0.5 }
                    );
                };
            },
            { amount: 'all' }
        );
    });
</script>

<div
    class="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 md:col-span-6"
    bind:this={container}
>
    <div class="space-y-3 px-3 pt-2 pb-4">
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
        class="relative flex min-h-[425px] flex-1 flex-col overflow-hidden rounded-xl bg-black/24 px-8"
    >
        <div
            class="border-smooth -z-3 mt-6 flex aspect-[4/2] w-full min-w-[450px] flex-col overflow-clip rounded-2xl border bg-[#232325]/90 mask-b-from-60% mask-b-to-100% shadow-[4px_8px_20px_rgba(0,0,0,0.2)] backdrop-blur-md md:mt-12"
        >
            <h3 class="text-caption text-primary px-3 py-2">Products</h3>
            <div class="border-smooth mx-1 mt-auto mb-1 flex-1 rounded-xl border">
                <table class="table w-full p-2.5">
                    <thead>
                        <tr
                            class="bg-greyscale-900 border-smooth text-primary text-micro w-full border-b font-normal"
                        >
                            {#each collectionKeys as heading}
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
                        {#each collections as collection, c}
                            <tr class="bg-[#1D1D21]">
                                {#each Object.values(collection) as item, i}
                                    {@const isLastProduct = c === products.length - 1}
                                    {@const isLastItem = i === Object.values(collection).length - 1}
                                    <td
                                        class={classNames('text-primary p-2.5 text-left', {
                                            'rounded-bl-xl': isLastProduct && i === 0,
                                            'rounded-br-xl': isLastProduct && isLastItem
                                        })}
                                    >
                                        {#if isLastItem}
                                            <span
                                                class="text-secondary border-smooth bg-greyscale-900 rounded-md border p-1.5"
                                            >
                                                <svg
                                                    width="17"
                                                    height="17"
                                                    viewBox="0 0 17 17"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="inline"
                                                >
                                                    <path
                                                        d="M5.84978 7.6999C5.84978 6.81625 6.56613 6.0999 7.44978 6.0999H12.2498C13.1334 6.0999 13.8498 6.81625 13.8498 7.6999V12.4999C13.8498 13.3836 13.1334 14.0999 12.2498 14.0999H7.44978C6.56613 14.0999 5.84978 13.3836 5.84978 12.4999V7.6999Z"
                                                        fill="#C3C3C6"
                                                    />
                                                    <path
                                                        d="M4.24978 2.8999C3.36612 2.8999 2.64978 3.61625 2.64978 4.4999V9.2999C2.64978 10.1836 3.36612 10.8999 4.24978 10.8999L4.24978 4.4999H10.6498C10.6498 3.61625 9.93344 2.8999 9.04978 2.8999H4.24978Z"
                                                        fill="#C3C3C6"
                                                    />
                                                </svg>

                                                ...{item}</span
                                            >
                                        {:else}
                                            {item}
                                        {/if}</td
                                    >
                                {/each}
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
        <div class="mt-0 mb-auto flex h-full w-full flex-col gap-8">
            {#each Object.entries(productSets).reverse() as [key, products], i}
                {@const keys = Object.keys(products[0])}

                <div
                    class="border-smooth product-table absolute right-8 bottom-8 flex aspect-[4/2] flex-col rounded-2xl border bg-[#232325]/90 shadow-[4px_8px_20px_rgba(0,0,0,0.2)] backdrop-blur-md md:min-w-[275px]"
                    style:opacity={1 - i * 0.01}
                    style:z-index={i}
                    style:--y="{-i * 15}px"
                    style:--x="{-i * 25}px"
                    style:--y-offset="{i * 10}px"
                    style:--x-offset="{i * 25}px"
                    style:transform="translateY(var(--y)) translateX(var(--x))"
                >
                    <h3 class="text-caption text-primary px-3 py-2">{key}</h3>
                    <div class="border-smooth mx-1 mt-auto mb-1 flex-1 rounded-xl border">
                        <table class="table w-full p-2.5">
                            <thead>
                                <tr
                                    class="bg-greyscale-900 border-smooth text-primary text-micro w-full border-b font-normal"
                                >
                                    {#each keys as key}
                                        <th
                                            class="p-2 text-left first-of-type:rounded-tl-xl last-of-type:rounded-tr-xl"
                                        >
                                            <span class="inline">{key}</span>
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
                                            {@const isLastProduct = p === products.length - 1}
                                            {@const isLastItem =
                                                i === Object.values(product).length - 1}
                                            <td
                                                class={classNames('text-primary p-2.5 text-left', {
                                                    'rounded-bl-xl': isLastProduct && i === 0,
                                                    'rounded-br-xl': isLastProduct && isLastItem
                                                })}>{item}</td
                                            >
                                        {/each}
                                    </tr>
                                {/each}
                            </tbody>
                        </table>
                    </div>
                </div>
            {/each}
        </div>

        <GridPaper class="absolute inset-0 -z-10 bg-size-[calc(100%/11)]" />
    </div>
</div>
