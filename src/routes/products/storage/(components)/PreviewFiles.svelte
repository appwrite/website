<script lang="ts">
    import MultiCodeContextless from '$lib/components/MultiCodeContextless.svelte';

    import ProductPreview from '../(assets)/product-preview.png';
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

<div class="relative bg-right-top bg-no-repeat pt-20 pb-12 md:py-40">
    <section
        class="container relative grid grid-cols-1 items-center justify-between gap-x-16 gap-y-12 md:grid-cols-2"
    >
        <div class="max-w-md">
            <h2 class="text-title font-aeonik-pro text-primary">
                Preview media files however you want
            </h2>
            <p class="text-body mt-4 font-medium">
                Appwrite Storage's preview endpoint lets you manipulate image previews while also
                managing different formats and compression algorithms.
            </p>
            <div class="mt-8 flex gap-2">
                <a
                    href="/docs/products/storage/upload-download#get-file-preview"
                    class="web-button is-secondary !w-full md:!w-fit"
                >
                    <span class="text">Learn more</span>
                </a>
            </div>
        </div>
        <div class="relative">
            <img src={ProductPreview} alt="Preview Files" />
        </div>
    </section>
</div>
