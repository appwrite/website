<script lang="ts">
    import Icon from '$lib/components/ui/icon';
    import Badge from './badge.svelte';
    import { format } from 'date-fns';

    // const startDate = new Date('2025-10-02');
    // const endDate = new Date('2025-11-01');

    const hackathonDates = `OCT 1 - OCT 31`;
</script>

<a href="https://apwr.dev/hf2025-hackathon" target="_blank" rel="noopener noreferrer">
    <div
        class="group mx-auto flex w-full items-center bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIyIiBoZWlnaHQ9IjY4IiB2aWV3Qm94PSIwIDAgMTIyIDY4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB5PSIyIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjI0Ii8+CjxyZWN0IHg9IjYwIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4yNCIvPgo8L3N2Zz4K)] py-4 md:h-[76px]"
    >
        <div class="mx-auto flex w-full gap-[1rem] [max-inline-size:108rem]">
            <div class="md:basis-1/2">
                <Badge class="ml-0"
                    >Hacktoberfest Hackathon is live <span class="text-accent">/</span>
                    {hackathonDates}</Badge
                >
            </div>

            <div class="mr-0 ml-auto text-right">
                <p class="text-primary group mr-0 ml-auto flex items-center gap-2 text-right">
                    Go to hackathon <Icon
                        class="transition group-hover:-translate-x-0.5"
                        name="arrow-right"
                    />
                </p>
            </div>
        </div>
    </div>
</a>
