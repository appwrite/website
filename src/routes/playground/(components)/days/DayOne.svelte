<script>
    import Globe from '../../(assets)/globe.svg';
    import { Grid } from '../grid';
    import KeyIllustration from './KeyIllustration.svelte';
</script>

<div class="scroll-mt-10 space-y-4 py-20" id="sites">
    <KeyIllustration
        title="Sites"
        description="The new Appwrite CLI allows you to test your functions locally, easily migrate databases and more."
        url="/"
        index={0}
        illustration={Globe}
        release={new Date()}
    />

    <Grid.Root columns={2}>
        <Grid.Cell>
            <a
                href="/blog"
                target="_blank"
                rel="noopener noreferrer"
                class="retro flex flex-col gap-4 bg-[#2D2D31] py-4 px-5"
            >
                <span class="text-body font-medium text-white md:max-w-[16rem]">Day title</span>
                <span class="flex items-center gap-2"
                    >Article <span class="web-icon-arrow-right" />
                </span>
            </a>
        </Grid.Cell>
        <Grid.Cell>
            <a
                href="/blog"
                target="_blank"
                rel="noopener noreferrer"
                class="retro flex flex-col gap-4 bg-[#2D2D31] py-4 px-5"
            >
                <span class="text-body font-medium text-white md:max-w-[16rem]">Day title</span>
                <span class="flex items-center gap-2"
                    >Article <span class="web-icon-arrow-right" />
                </span>
            </a>
        </Grid.Cell>
    </Grid.Root>

    <Grid.Root columns={3}>
        <Grid.Cell>
            <a
                href="/blog"
                target="_blank"
                rel="noopener noreferrer"
                class="retro flex flex-col gap-4 bg-[#2D2D31] py-4 px-5"
            >
                <span class="text-body font-medium text-white md:max-w-[16rem]">Day title</span>
                <span class="flex items-center gap-2"
                    >Article <span class="web-icon-arrow-right" />
                </span>
            </a>
        </Grid.Cell>
        <Grid.Cell>
            <a
                href="/blog"
                target="_blank"
                rel="noopener noreferrer"
                class="retro flex flex-col gap-4 bg-[#2D2D31] py-4 px-5"
            >
                <span class="text-body font-medium text-white md:max-w-[16rem]">Day title</span>
                <span class="flex items-center gap-2"
                    >Article <span class="web-icon-arrow-right" />
                </span>
            </a>
        </Grid.Cell>
        <Grid.Cell>
            <a
                href="/blog"
                target="_blank"
                rel="noopener noreferrer"
                class="retro flex flex-col gap-4 bg-[#2D2D31] py-4 px-5"
            >
                <span class="text-body font-medium text-white md:max-w-[16rem]">Day title</span>
                <span class="flex items-center gap-2"
                    >Article <span class="web-icon-arrow-right" />
                </span>
            </a>
        </Grid.Cell>
    </Grid.Root>
</div>
