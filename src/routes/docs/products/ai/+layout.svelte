<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'AI'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/products/ai'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Computer Vision',
                    href: '/docs/products/ai/computer-vision'
                },
                {
                    label: 'Natural Language Processing',
                    href: '/docs/products/ai/natural-language'
                },
                {
                    label: 'Audio Processing',
                    href: '/docs/products/ai/audio-processing'
                }
            ]
        },
        {
            label: 'Computer Vision',
            items: [
                {
                    label: 'Image Classification',
                    href: '/docs/products/ai/tutorials/image-classification'
                },
                {
                    label: 'Object Detection',
                    href: '/docs/products/ai/tutorials/object-detection'
                }
            ]
        },
        {
            label: 'Integrations',
            items: [
              {
                label: 'Perplexity',
                href: '/docs/products/ai/integrations/perplexity'
              },
              {
                label: 'Replicate',
                href: '/docs/products/ai/integrations/replicate'
              },
              {
                label: 'OpenAI',
                href: '/docs/products/ai/integrations/openai'
              },
              {
                label: 'Pinecone',
                href: '/docs/products/ai/integrations/pinecone'
              },
              {
                label: 'Llama Index',
                href: '/docs/products/ai/integrations/llama-index'
              },
              {
                label: 'Langchain',
                href: '/docs/products/ai/integrations/langchain'
              }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
