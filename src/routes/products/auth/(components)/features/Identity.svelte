<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import fingerprint from '../../(assets)/identity-bg.png';

    const columns = 40;
    const rows = 40;

    let animate = false;

    const getRandomIndexes = (arrayLength: number, count = 40) => {
        const indexes: Array<number> = [];
        while (indexes.length < count) {
            const randomIndex = Math.floor(Math.random() * arrayLength);
            if (!indexes.includes(randomIndex)) {
                indexes.push(randomIndex);
            }
        }
        return indexes;
    };

    const getRandomNumber = (first: number, second: number) => {
        return Math.floor(Math.random() * (second - first + 1) + first);
    };

    const transitionDuration = 500;
    const indices = getRandomIndexes(columns * rows);

    const states = ['off', 'medium', 'high'] as const;

    const action = (node: HTMLDivElement) => {
        if (!animate) return;
        const timeoutIds: Array<ReturnType<typeof setTimeout>> = [];

        const interval = setInterval(() => {
            indices.forEach((index) => {
                const light = node.querySelector(`[data-index="${index}"]`) as HTMLElement;

                if (!light) {
                    return;
                }

                const nextState = states[Math.floor(Math.random() * states.length)];
                const currentState = light.dataset.state;

                const pulse =
                    Math.random() > 0.2 &&
                    ((currentState === 'off' && nextState === 'high') ||
                        (currentState === 'off' && nextState === 'medium') ||
                        (currentState === 'medium' && nextState === 'high'));

                if (pulse) {
                    const delay = getRandomNumber(100, 500);

                    timeoutIds.push(
                        setTimeout(() => {
                            light.style.transform = 'scale(1.1)';
                        }, delay)
                    );

                    timeoutIds.push(
                        setTimeout(() => {
                            light.style.transform = 'scale(1)';
                        }, transitionDuration + delay)
                    );
                }

                if (currentState === 'high' && nextState === 'medium' && pulse) {
                    light.dataset.state = 'off';
                } else {
                    light.dataset.state = nextState;
                }
            });
        }, 1000);

        return {
            destroy() {
                clearInterval(interval);
                timeoutIds.forEach((id) => clearTimeout(id));
            }
        };
    };
</script>

<div class="right-0 flex w-[120px] flex-col gap-4">
    <div
        class="gradient relative z-20 flex size-20 items-center justify-center overflow-hidden rounded-2xl backdrop-blur-2xl"
    >
        <svg
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
            class="shadow-4xl absolute opacity-40 shadow-black"
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

        {#if animate}
            <div
                class="relative flex h-full w-full flex-wrap place-items-center items-center justify-center gap-[1px] overflow-hidden rounded-2xl shadow-[inset_0px_0px_7px_7px_rgba(0,_0,_0,_0.2)]"
                use:action
            >
                {#each Array.from({ length: columns * rows }) as _, i}
                    <div
                        data-state="off"
                        data-index={i}
                        class={classNames(
                            'relative size-[1.5px] rounded-[0.5px] transition-all',
                            'data-[state=high]:bg-white/30 data-[state=medium]:bg-white/20 data-[state=off]:bg-white/10'
                        )}
                        style:transition-duration={`${transitionDuration}ms`}
                    ></div>
                {/each}
            </div>
        {:else}
            <img src={fingerprint} alt="" class="absolute inset-0 object-cover" />
        {/if}
    </div>

    <div
        class="gradient z-0 flex size-12 items-center justify-center self-end overflow-hidden rounded-2xl backdrop-blur-[32px]"
        style="--m-border-radius: 0.75rem"
    >
        <div class="relative grid h-full w-full place-items-center overflow-hidden rounded-2xl">
            <div class="absolute">
                <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.2102 5.4937L25.6836 14.6599C25.7443 14.885 25.8819 15.0818 26.0724 15.2163L28.7408 17.0999C29.4619 17.609 29.21 18.6777 28.3313 18.7618C24.4318 19.1353 18.2509 19.322 15.9998 19.322C13.7488 19.322 7.56778 19.1353 3.66832 18.7618C2.78965 18.6777 2.53769 17.609 3.25883 17.0999L5.92726 15.2163C6.11777 15.0818 6.25529 14.885 6.31604 14.6599L8.78945 5.4937C8.91923 5.01278 9.38316 4.70069 9.87752 4.76176L15.8772 5.5029C15.9586 5.51296 16.041 5.51296 16.1224 5.5029L22.1221 4.76176C22.6165 4.70069 23.0804 5.01278 23.2102 5.4937ZM9.99956 28.6553C12.2087 28.6553 13.9996 26.8644 13.9996 24.6553H17.9996C17.9996 26.8644 19.7904 28.6553 21.9996 28.6553C24.2087 28.6553 25.9996 26.8644 25.9996 24.6553C25.9996 22.4462 24.2087 20.6553 21.9996 20.6553C20.2447 20.6553 18.7538 21.7854 18.2148 23.3575C18.1473 23.3345 18.0749 23.322 17.9996 23.322H13.9996C13.9242 23.322 13.8518 23.3345 13.7843 23.3575C13.2453 21.7854 11.7544 20.6553 9.99956 20.6553C7.79042 20.6553 5.99956 22.4462 5.99956 24.6553C5.99956 26.8644 7.79042 28.6553 9.99956 28.6553Z"
                        fill="#E4E4E7"
                    />
                </svg>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .gradient {
        @include gradients.border-gradient;

        --m-border-radius: var(--radius-2xl, 0.75rem);
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0) 125.11%
        );
        background: linear-gradient(
            138.4deg,
            rgba(255, 255, 255, 0.064) 9.61%,
            rgba(255, 255, 255, 0) 105.41%
        );
    }
</style>
