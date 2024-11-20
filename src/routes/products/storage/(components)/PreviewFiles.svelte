<script lang="ts">
    import MultiCodeContextless from '$lib/components/MultiCodeContextless.svelte';

    import { classNames } from '$lib/utils/classnames';
    import { Platform } from '$lib/utils/references';

    const snippet = [
        {
            content: `const result = storage.getFilePreview(
	 'photos',           // bucket ID
	 'sunset.heic',      // file ID
	 1800,               // width
	 0,                  // height
	 '90',               // slight compression
	 'CDCA30',           // border color
	 15,                 // border radius
	 'heic'              // output heic format
);`,
            platform: 'Node.js',
            language: 'server-nodejs'
        }
    ];
</script>

<div class="relative bg-right bg-no-repeat pt-32 pb-40 md:bg-[url(/images/bgs/files-bg.png)]">
    <section class="container relative flex flex-col items-center justify-between md:flex-row">
        <div class="max-w-md">
            <h2 class="text-title font-aeonik-pro text-primary">
                Preview media files however you want
            </h2>
            <p class="text-body mt-4 font-medium">
                Appwrite Storage's preview endpoint lets you manipulate image previews while also
                managing different formats and compression algorithms.
            </p>
            <div class="mt-8 flex gap-2">
                <a href="/" class="web-button is-secondary !w-full md:!w-fit">
                    <span class="text">Learn more</span>
                </a>
            </div>
        </div>
        <div class="relative">
            <section
                class="web-media-container l-media-2-1 relative -left-5 z-0 hidden max-h-[328px] w-full max-w-[550px] overflow-hidden md:block"
            >
                <img
                    src="/images/pages/storage/exploring-the-world.png"
                    alt=""
                    width="326"
                    height="300"
                    loading="lazy"
                />
            </section>
            <div class="l-box-image-1 l-media-2-2 relative z-1 border border-[#85dbd8] p-2">
                <img
                    src="/images/pages/storage/corner-circle.svg"
                    width="12"
                    height="12"
                    class="absolute -top-1.5 -left-1.5"
                    alt=""
                />
                <img
                    src="/images/pages/storage/corner-circle.svg"
                    width="12"
                    height="12"
                    class="absolute -top-1.5 -right-1.5"
                    alt=""
                />
                <img
                    src="/images/pages/storage/corner-circle.svg"
                    width="12"
                    height="12"
                    class="absolute -bottom-1.5 -left-1.5"
                    alt=""
                />
                <img
                    src="/images/pages/storage/corner-circle.svg"
                    width="12"
                    height="12"
                    class="absolute -right-1.5 -bottom-1.5"
                    alt=""
                />

                <img
                    src="/images/pages/storage/mountain.avif"
                    class="block rounded-xl"
                    alt=""
                    width="409"
                    height="294"
                    style="filter: drop-shadow(-4px 4px 42px rgba(0, 0, 0, 0.16)) drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.32));"
                />
            </div>

            <div class="relative -top-32 z-10 mx-auto max-w-[95%] px-8 md:-left-16 md:max-w-none">
                <MultiCodeContextless selected={Platform.ServerNodeJs} data={snippet} />
            </div>
        </div>
    </section>
</div>

<style lang="scss">
    .l-box-image-1 {
        inline-size: 427px;
    }

    .l-media-2 {
        @media (max-width: 1023px) {
            &-2 {
                position: relative;
                margin-inline: auto;
                inline-size: 342px;
            }
        }
        @media (min-width: 1024px) {
            &-2 {
                position: absolute;
                inset-inline-end: 0;
                inset-block-start: -2.5rem;
            }
        }
    }
</style>
