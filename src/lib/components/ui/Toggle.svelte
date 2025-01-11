<script lang="ts">
    type $$props = {
        options: Array<{ label: string; key: string }>;
        onChange: (key: string) => void;
    };

    export let options: $$props['options'] = [];
    export let activeToggle: string;

    let width = 0;
    let backgroundOffset = 0;
    let activeIndex = 0;

    function handleClick(event: MouseEvent) {
        if (event.target) {
            const button = event.target as HTMLButtonElement;
            handleButtonClick(button);
            const key = button.getAttribute('id')?.split('toggle-').pop();
            if (key) {
                activeToggle = key;
            }
        }
    }

    function handleButtonClick(button: HTMLButtonElement) {
        const buttonRect = button.getBoundingClientRect();
        const sectionRect = button.closest('section')?.getBoundingClientRect();

        // Calculate the offset from the left side of the section
        backgroundOffset = buttonRect.left - (sectionRect?.left ?? 0) - 4;
        width = buttonRect.width;
    }

    $: if (activeToggle && typeof window !== 'undefined') {
        const activeOption = options.find((option) => option.key === activeToggle);
        if (activeOption) {
            activeIndex = options.findIndex((option) => option.key === activeToggle);
            const activeButton = document.getElementById(
                `toggle-${activeOption.key}`
            ) as HTMLButtonElement;
            requestAnimationFrame(() => {
                handleButtonClick(activeButton);
            });
        }
    }
</script>

<section
    class="flex w-fit rounded-xl border border-[#FFFFFF29] bg-[linear-gradient(116deg,#FFFFFF1A_1%,#FFFFFF1A_49%,#FFFFFF14_92%,#FFFFFF00_120%)] p-1 text-lg"
>
    <div
        class="absolute z-0 h-11 rounded-lg bg-[#FFFFFF14]"
        style="width: {width}px; transform: translate({backgroundOffset}px); transition: transform 0.2s ease-out, width 0.2s ease-out;"
    />
    {#each options as option, index}
        <button
            class="z-1 cursor-pointer p-2"
            id={`toggle-${option.key}`}
            class:text-[#FFFFFF]={index === activeIndex}
            on:click={(event) => {
                handleClick(event);
                activeIndex = index;
            }}>{option.label}</button
        >
    {/each}
</section>
