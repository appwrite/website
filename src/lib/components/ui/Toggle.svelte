<script lang="ts">
    import { onMount } from 'svelte';

    type $$props = {
        options: Array<{label: string, key: string, isActive?: true}>
        onChange: (key: string) => void;
    }

    export let options : $$props['options'] = []
    export let onChange: $$props['onChange'];

    let width = 0;
    let backgroundOffset = 0;
    let activeIndex = options.findIndex(option => option.isActive === true);

    function handleClick(event: MouseEvent) {
        if(event.target){
            const button = event.target as HTMLButtonElement;
            handleButtonClick(button);
            const key = button.getAttribute('id')?.split('toggle-').pop();
            if(key){
                onChange(key);
            }

        }
    }

    function handleButtonClick(button: HTMLButtonElement){
        const buttonRect = button.getBoundingClientRect();
        const sectionRect = button.closest('section')?.getBoundingClientRect();

        // Calculate the offset from the left side of the section
        backgroundOffset = buttonRect.left - (sectionRect?.left ?? 0) - 4;
        width = buttonRect.width ;
    }

    onMount(() => {
        const activeOption = options.find(option => option.isActive === true);
        if(activeOption){
            const activeButton = document.getElementById(`toggle-${activeOption.key}`) as HTMLButtonElement;
            requestAnimationFrame(() => {
                handleButtonClick(activeButton)
            })
        }
    })

</script>

<section class="rounded-xl flex w-fit p-1 text-lg border border-[#FFFFFF29] bg-[linear-gradient(116deg,#FFFFFF1A_1%,#FFFFFF1A_49%,#FFFFFF14_92%,#FFFFFF00_120%)]">
    <div class="absolute h-11 bg-[#FFFFFF14] rounded-lg z-0" style="width: {width}px; transform: translate({backgroundOffset}px); transition: transform 0.2s ease-out, width 0.2s ease-out;"/>
    {#each options as option, index}
        <button class="p-2 z-1 cursor-pointer" id={`toggle-${option.key}`} class:text-[#FFFFFF]={index === activeIndex} on:click={(event) => {handleClick(event); activeIndex = index}}>{option.label}</button>
    {/each}
</section>