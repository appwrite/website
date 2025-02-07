<script lang="ts">
    type $$Props = {
        href: string;
        title: string;
        image: string;
        icon: string;
    };

    let { image, href, title, icon } = $$props as $$Props;
</script>

<button
    class="flex aspect-video w-full max-w-[190px] flex-col items-center rounded-md outline-2 outline-offset-3 outline-[var(--color-offset)] outline-dashed"
>
    <div class="relative size-full rounded-lg bg-black">
        <button class="bg-offset absolute bottom-2 left-2 size-10 rounded-full backdrop-blur-lg" />
    </div>
    <!-- <a {href} target="_blank" rel="noopener noreferrer" class="flex flex-col items-center">
        <img src={image} alt={title} class="h-20 w-20 rounded-full" />
        <h3 class="mt-2 text-lg font-bold">{title}</h3>
    </a> -->
</button>
