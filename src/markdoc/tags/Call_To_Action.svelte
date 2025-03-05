<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { classNames } from '$lib/utils/classnames';
    export let heading: string = 'Start building with Appwrite today';
    export let copy: string = 'This is a small sentence further explaining the title above.';

    let benefits: Array<string> = [
        'Optimized content types',
        'Influencer marketing',
        'Posting volume',
        'Secure funding'
    ];
    export let url: string = PUBLIC_APPWRITE_DASHBOARD;
</script>

<div
    class={classNames(
        'border-smooth relative mb-8 flex flex-col justify-center gap-8 overflow-hidden rounded-xl border p-5 outline-3 [outline-offset:-3px] outline-white/5 md:p-12',
        'before:absolute before:inset-0 before:h-[170%] before:scale-x-125 before:bg-[radial-gradient(ellipse_at_center,_rgba(253,_54,_110,_0.2),_transparent_65%)] before:blur-lg'
    )}
>
    <div class="flex flex-col gap-2">
        <h2 class="text-label text-primary font-aeonik-pro text-pretty">{heading}</h2>
        <p class="text-body text-secondary text-pretty">{copy}</p>
    </div>

    <ul class="grid grid-cols-1 gap-3 md:grid-cols-2">
        {#each benefits as benefit}
            <li class="text-sub-body text-primary flex items-center gap-2 font-medium">
                <img
                    src="/images/icons/colored/check.svg"
                    width={20}
                    height={20}
                    alt="checkmark icon"
                />
                {benefit}
            </li>
        {/each}
    </ul>
    <div class="flex flex-col gap-2 md:flex-row">
        <a href={url} class="web-button max-sm:w-full!">Button</a>
        <a href={url} class="web-button is-secondary max-sm:w-full!">Button</a>
    </div>
</div>
