<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import Hat from '../(assets)/hat.png';
    import Shirt from '../(assets)/shirt.png';
    import Window from '../(assets)/checkout-window.png';
    import { Button } from '$lib/components/ui';

    const products = [
        {
            name: 'Corduroy hat',
            price: '23.50',
            image: Hat
        },
        {
            name: 'Unisex garment-dyed heavyweight t-shirt',
            price: '17.50',
            image: Shirt
        }
    ];
</script>

<section class="pt-12 pb-20">
    <div class="container grid grid-cols-1 items-center justify-between gap-12 md:grid-cols-12">
        <img
            src={Window}
            alt="Checkout window"
            class="order-2 block md:col-span-7 md:col-start-6 md:hidden"
        />
        <div
            class="window hidden aspect-[6.87/4.2] flex-col bg-[#232325]/94 px-3 pb-3 backdrop-blur-lg md:col-span-7 md:flex md:scale-100"
        >
            <header class="grid h-12 w-full grid-cols-12 items-center pl-2">
                <div class="col-span-2 flex gap-1">
                    <button class="size-2 rounded-full bg-[#EC6A5E]" aria-label="Close window"
                    ></button>
                    <button class="size-2 rounded-full bg-[#F5BF4F]" aria-label="Minimize window"
                    ></button>
                    <button class="size-2 rounded-full bg-[#6d9e66]" aria-label="Enter full screen"
                    ></button>
                </div>
                <div
                    class="bg-offset col-span-6 col-start-4 flex h-6 w-full flex-1 items-center justify-center rounded-full backdrop-blur-lg"
                >
                    <span class="text-x-micro -tracking-[.045%] text-white">localhost:3000</span>
                </div>
            </header>

            <div class="grid size-full grid-cols-2 place-items-center gap-3 rounded-xl">
                <div
                    class="grid size-full min-h-0 flex-1 grid-cols-1 grid-rows-12 gap-2 overflow-hidden rounded-xl"
                >
                    <div class="bg-offset row-span-8 p-1">
                        <span class="bg-badge-bg-dark ml-1 rounded-full px-2 py-0.5 text-[.5265rem]"
                            >main.ts</span
                        >

                        <ul
                            class={classNames(
                                'text-greyscale-600 font-fira-code relative mt-2 px-2',
                                'after:to-offset after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-transparent'
                            )}
                        >
                            {#each Array.from({ length: 15 }) as _, i}
                                {@const lineNumber = i + 25}
                                <li class="md:text-x-micro pointer-events-none pl-2 text-[6px]">
                                    {lineNumber}
                                </li>
                            {/each}
                        </ul>
                    </div>
                    <div class="bg-offset row-span-4">
                        <span class="bg-badge-bg-dark ml-1 rounded-full px-2 py-0.5 text-[.5265rem]"
                            >Terminal</span
                        >
                    </div>
                </div>
                <div class="light size-full flex-1 rounded-xl bg-white p-4">
                    <h2 class="text-primary text-[.8125rem] font-semibold tracking-tighter">
                        Checkout
                    </h2>

                    <div class="mt-4 flex w-full flex-col gap-2 divide-y divide-black/8">
                        {#each products as product}
                            <div class="flex items-center justify-between pb-2">
                                <div class="flex w-3/4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        class="size-12 rounded-md"
                                    />
                                    <div class="ml-4 flex flex-col pt-0.5">
                                        <span class="text-x-micro font-medium text-black"
                                            >{product.name}</span
                                        >
                                        <span class="text-secondary text-[9px]"
                                            >${product.price}</span
                                        >
                                    </div>
                                </div>
                                <div
                                    class="text-primary text-micro grid grid-cols-3 place-items-center items-center divide-x divide-black/8 rounded-md border border-black/8 bg-[#19191C]/4 text-center"
                                >
                                    <button class="web-icon-minus size-6" aria-label="Remove item"
                                    ></button>
                                    <span class="flex size-6 items-center justify-center">1</span>
                                    <button class="web-icon-plus size-6" aria-label="Add item"
                                    ></button>
                                </div>
                            </div>
                        {/each}
                        <div
                            class="text-primary text-x-micro flex w-full items-center justify-between rounded-lg border border-black/8 bg-[#19191C]/4 px-2 py-1.5 font-medium"
                        >
                            <span>Coupon code</span>
                            <span class="text-[#7C67FE]">Apply</span>
                        </div>
                        <div
                            class="-mt-1 flex w-fit items-center gap-1 rounded-[0.1875rem] bg-[#10B981]/32 px-1 py-0.5 text-[0.5rem] text-green-700 uppercase"
                        >
                            GET30OFF
                            <span class=""
                                ><svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.75 2.75L7.25 7.25"
                                        stroke="#0A714F"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M2.75 7.25L7.25 2.75"
                                        stroke="#0A714F"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </span>
                        </div>

                        <div class="space-y-1.5 px-1">
                            <div class="flex justify-between">
                                <span class="text-secondary text-x-micro">Subtotal</span>
                                <span class="text-primary text-x-micro">$41.00</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-secondary text-x-micro">Delivery</span>
                                <span class="text-primary text-x-micro">$5.90</span>
                            </div>
                            <div class="flex justify-between border-b border-black/8 pb-2">
                                <span class="text-secondary text-x-micro">Discount</span>
                                <span class="text-primary text-x-micro">-$14.07</span>
                            </div>

                            <div class="flex justify-between font-semibold">
                                <span class="text-secondary text-micro">Total</span>
                                <span class="text-primary text-micro">$32.83</span>
                            </div>

                            <button
                                class="text-micro mt-2 w-full rounded-lg bg-[#7C67FE] py-1.5 font-medium text-white"
                                >Place order</button
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-1 mb-10 flex flex-col md:order-2 md:col-span-4 md:col-start-9">
            <h2 class="text-title text-primary font-aeonik-pro my-4 text-pretty">
                Develop your functions locally
            </h2>
            <p class="text-body text-secondary font-medium text-pretty">
                Code and test your functions locally with Appwrite Functions, ensuring full control
                over your development.
            </p>

            <Button
                variant="secondary"
                href="/docs/products/functions/develop-locally"
                class="mt-8 !w-full md:!w-fit">Learn more</Button
            >
        </div>
    </div>
</section>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .window {
        @include gradients.border-gradient;
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.16) 0%,
            rgba(255, 255, 255, 0) 100%
        );
        --m-border-radius: 1.5rem;
    }
</style>
