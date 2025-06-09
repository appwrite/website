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
                    label: 'Computer vision',
                    href: '/docs/products/ai/computer-vision'
                },
                {
                    label: 'Natural language processing',
                    href: '/docs/products/ai/natural-language'
                },
                {
                    label: 'Audio processing',
                    href: '/docs/products/ai/audio-processing'
                }
            ]
        },
        {
            label: 'Computer vision',
            items: [
                {
                    label: 'Image classification',
                    href: '/docs/products/ai/tutorials/image-classification'
                },
                {
                    label: 'Object detection',
                    href: '/docs/products/ai/tutorials/object-detection'
                }
            ]
        },
        {
            label: 'Natural language processing',
            items: [
                {
                    label: 'Text generation',
                    href: '/docs/products/ai/tutorials/text-generation'
                },
                {
                    label: 'Language translation',
                    href: '/docs/products/ai/tutorials/language-translation'
                }
            ]
        },
        {
            label: 'Audio processing',
            items: [
                {
                    label: 'Speech recognition',
                    href: '/docs/products/ai/tutorials/speech-recognition'
                },
                {
                    label: 'Text to speech',
                    href: '/docs/products/ai/tutorials/text-to-speech'
                },
                {
                    label: 'Music generation',
                    href: '/docs/products/ai/tutorials/music-generation'
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
                    label: 'ElevenLabs',
                    href: '/docs/products/ai/integrations/elevenlabs'
                },
                {
                    label: 'LangChain',
                    href: '/docs/products/ai/integrations/langchain'
                },
                {
                    label: 'Anyscale',
                    href: '/docs/products/ai/integrations/anyscale'
                },
                {
                    label: 'LMNT',
                    href: '/docs/products/ai/integrations/lmnt'
                },
                {
                    label: 'Together AI',
                    href: '/docs/products/ai/integrations/togetherai'
                },
                {
                    label: 'fal.ai',
                    href: '/docs/products/ai/integrations/fal-ai'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
