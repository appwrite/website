<script lang="ts" context="module">
    export const extractHeadings = () => {
        let headings: Array<string> = [];
        headings.push('Accessibility in design systems');
        headings.push('Use high color contrast');
        headings.push('Not relying on color');
        return headings;
    };
</script>

<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    let activeIndex: number = 0;

    const headings = extractHeadings();
</script>

<nav class="border-smooth col-span-3 ml-4 hidden border-l lg:block">
    <span class="text-micro tracking-loose text-primary pl-8 uppercase">Table of Contents</span>
    <div class="relative">
        <ul class="border-smooth mt-11 ml-7 flex flex-col gap-7 border-b pb-11">
            {#each headings as heading, i}
                {@const isActive = i === 0}
                <li class={classNames(isActive ? 'text-primary' : 'text-secondary', 'relative')}>
                    {heading}
                </li>
            {/each}
        </ul>
        <div
            class="bg-primary absolute top-0 -left-px h-6 w-px rounded-full transition duration-500 ease-in-out"
            style:transform={`translateY(${activeIndex * 52}px)`}
        />
    </div>

    <button
        class="text-primary group mt-8 flex cursor-pointer items-center gap-2 pl-7 transition-all active:scale-95"
        on:click={backToTop}
    >
        <span class="web-icon-arrow-up transition group-hover:-translate-y-0.5" />
        Back to Top
    </button>
</nav>
