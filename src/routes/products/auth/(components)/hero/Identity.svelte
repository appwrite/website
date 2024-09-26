<script lang="ts">
    const columns = 20;
    const rows = 20;
</script>

<div
    class="flex size-20 items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-2xl"
>
    <div
        class="relative grid h-full w-full place-items-center overflow-hidden rounded-2xl shadow-[inset_0px_0px_7px_7px_rgba(0,_0,_0,_0.2)]"
        style:grid-template-columns="repeat({columns}, minmax(0, 1fr))"
    >
        <div class="absolute">
            <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                class="shadow-4xl opacity-40 shadow-black"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M20 42.8418C16.5 40.1751 10.5 32.3418 16.4996 23.8424C18.4988 21.3418 24.9988 18.5424 30.9988 23.3424C32 24.1433 34 26.7418 34 30.3418"
                    stroke="#E4E4E7"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M12 8.84189C16.1667 6.67523 26.9 3.64189 36.5 8.84189"
                    stroke="#E4E4E7"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M6.5 20.3418C8 17.1751 12.5 10.3409 24 10.3418C35.2071 10.3427 40.6667 16.8418 41.5 20.3418"
                    stroke="#E4E4E7"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M29.9964 43.3418C26.663 42.5085 20.9964 39.3418 19.4967 34.8424C17.5734 29.0717 20.4967 25.3424 24.4967 25.3424C27.6967 25.3424 29.1628 29.3424 29.4958 31.3424C30.1625 33.3424 32.4958 36.7424 36.4958 34.3424C40.4958 31.9424 38.4964 24.8418 36.4958 21.8424C33.9958 18.6757 26.8958 13.2424 18.4958 16.8424C7.99582 21.3424 9 34.8418 10.5 37.3418"
                    stroke="#E4E4E7"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M24 29.3418C24.1667 33.3418 26.9 40.4418 36.5 38.8418"
                    stroke="#E4E4E7"
                    stroke-width="2"
                    stroke-linecap="round"
                />
            </svg>
        </div>
        {#each Array.from({ length: columns * rows }) as _, i}
            <div class="size-[1.5px] bg-white/10" data-index={i} />
        {/each}
    </div>
</div>
