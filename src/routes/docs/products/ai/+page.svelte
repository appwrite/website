<script lang="ts">
    import { Carousel } from '$lib/components';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import CodeCard, { type CodeCardProps } from '../../CodeCard.svelte';
    import Article from '$markdoc/layouts/Article.svelte';
    const title = 'Docs' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/docs.png';

    enum Field {
        ComputerVision = 'Computer Vision',
        NaturalLanguage = 'Natural Language',
        AudioProcessing = 'Audio Processing'
    }

    type Card = {
        title: string;
        description: string;
        href: string;
        covers?: {
            dark: string;
            light: string;
        };
    };

    type Tutorial = Card & {field: Field}

    const fields: Card[] = [
        {
            title: 'Computer Vision',
            description: 'Label and understand the contents of images',
            href: '/docs/products/ai/computer-vision',
            covers: {
                dark: '/images/icons/illustrated/dark/auth.png',
                light: '/images/icons/illustrated/light/auth.png'
            }
        },
        {
            href: '/docs/products/ai/natural-language',
            title: 'Natural Language',
            description: 'Understand and generate human language',
            covers: {
                dark: '/images/icons/illustrated/dark/auth.png',
                light: '/images/icons/illustrated/light/auth.png'
            }
        },
        {
            href: '/docs/products/ai/audio-processing',
            title: 'Audio Processing',
            description: 'Analyze and generate audio',
            covers: {
                dark: '/images/icons/illustrated/dark/auth.png',
                light: '/images/icons/illustrated/light/auth.png'
            }
        }
    ];

    const tutorials: Tutorial[] = [
        {
            title: 'Image Classification',
            description: 'Understand and label the contents of images',
            href: '/docs/products/ai/tutorials/image-classification',
            field: Field.ComputerVision
        },
        {
            title: 'Object Detection',
            description: 'Detect and label objects in images',
            href: '/docs/products/ai/tutorials/object-detection',
            field: Field.ComputerVision
        },
        {
            title: 'Image Segmentation',
            description: 'Split up objects in images into individual layers',
            href: '/docs/products/ai/tutorials/image-segmentation',
            field: Field.ComputerVision
        },
        {
            title: 'Text Generation',
            description: 'Generate human-like text',
            href: '/docs/products/ai/tutorials/text-generation',
            field: Field.NaturalLanguage
        },
        {
            title: 'Language Translation',
            description: 'Translate text between languages',
            href: '/docs/products/ai/tutorials/language-translation',
            field: Field.NaturalLanguage
        },
        {
            title: 'Speech To Text',
            description: 'Speech Recognition',
            href: '/docs/products/ai/tutorials/speech-recognition',
            field: Field.AudioProcessing
        },
        {
            title: 'Text To Speech',
            description: 'Convert text to speech',
            href: '/docs/products/ai/tutorials/text-to-speech',
            field: Field.AudioProcessing
        },
        {
            title: 'Music Generation',
            description: 'Generate music from text',
            href: '/docs/products/ai/tutorials/music-generation',
            field: Field.AudioProcessing
        }
    ];
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Desscription -->
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <!-- Image -->
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Article
    title="Artifical Inteligence"
    description="Learn how to implement machine learning models in your applications"
>
    <p>
        Appwrite allows you to build powerful AI powered applications with ease, Leverage Appwrite's
        powerful functions architecture and start building the future.
    </p>
    <section class="is-align-start">
        <h3 class="web-title web-u-color-text-primary u-max-width-600">Explore capabilities</h3>
        <p class="web-description">
            Detailed explanations and deep dives into how you can implement different machine
            learning techiques
        </p>
        <ul class="web-grid-row-2 web-grid-row-4-m-1">
            {#each fields as field}
                <li style:scroll-snap-align="start">
                    <a href={field.href} class="web-card is-normal">
                        <img
                            src={field.covers?.dark}
                            alt=""
                            class="u-only-dark"
                            width="48"
                            height="48"
                        />
                        <img
                            src={field.covers?.light}
                            alt=""
                            class="u-only-light"
                            width="48"
                            height="48"
                        />
                        <h4
                            class="web-sub-body-500 web-u-color-text-primary u-margin-block-start-8"
                        >
                            {field.title}
                        </h4>
                        <p class="web-sub-body-400 u-margin-block-start-4">
                            {field.description}
                        </p>
                    </a>
                </li>
            {/each}
        </ul>
    </section>
    <section class="web-hero is-align-start">
        <h2 class="web-title web-u-color-text-primary u-max-width-600">Show me some code</h2>
        <p class="web-description u-max-width-600 u-margin-block-start-16">
            If you learn best from code examples, follow one of our tutorials.
        </p>
        <div class="u-margin-block-start-24">
            {#each Object.values(Field) as field}
                <h3 class="web-label web-u-color-text-primary web-snap-location">{field}</h3>
                <ul class="web-grid-row-2 web-grid-row-2-m-1">
                    {#each tutorials as tutorial}
                        {#if tutorial.field === field}
                            <li>
                                <a href={tutorial.href} class="web-card is-normal">
                                    <h4
                                        class="web-sub-body-500 web-u-color-text-primary u-margin-block-start-8"
                                    >
                                        {tutorial.title}
                                    </h4>
                                    <p class="web-sub-body-400 u-margin-block-start-4">
                                        {tutorial.description}
                                    </p>
                                </a>
                            </li>
                        {/if}
                    {/each}
                </ul>
            {/each}
        </div>
    </section>
</Article>
