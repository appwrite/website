<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { Button } from '$lib/components/ui';
    import { cn } from '$lib/utils/cn';

    interface Props {
        title?: string;
        description?: string;
        point1?: string;
        point2?: string;
        point3?: string;
        point4?: string;
        cta?: string;
        url?: string;
    }

    const {
        title = 'Start building with Appwrite today',
        description = 'Build with the frameworks and languages you want.',
        point1 = 'Built in security',
        point2 = 'Scalable infrastructure',
        point3 = 'No vendor lock in',
        point4 = 'Highly customizable backend',
        cta = 'Get started',
        url = PUBLIC_APPWRITE_DASHBOARD
    }: Props = $props();

    let benefits: Array<string> = [point1, point2, point3, point4];
</script>

<div
    class={cn(
        'border-smooth relative mb-8 flex flex-col justify-center gap-8 overflow-hidden rounded-xl border p-5 outline-3 [outline-offset:-3px] outline-white/5 md:p-12',
        'before:absolute before:inset-0 before:h-[170%] before:scale-x-125 before:bg-[radial-gradient(ellipse_at_center,_rgba(253,_54,_110,_0.2),_transparent_65%)] before:blur-lg'
    )}
>
    <div class="flex flex-col gap-2">
        <h2 class="text-label text-primary font-aeonik-pro text-pretty">{title}</h2>
        <p class="text-main-body text-secondary text-pretty">{description}</p>
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
    <div class="z-[1] flex flex-col gap-2 md:flex-row">
        <Button href={url} class="max-sm:w-full!">{cta}</Button>
    </div>
</div>
