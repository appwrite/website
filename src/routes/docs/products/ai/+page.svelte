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

    type Tutorial = {
        title: string;
        field: Field;
        description: string;
        href: string;
        covers: {
            dark: string;
            light: string;
        };
    };

    const fields: CodeCardProps[] = [
        {
            href: '/docs/products/ai/computer-vision',
            cover: '/images/tutorials/react.png',
            title: 'Computer Vision',
            description: 'Label and understand the contents of images'
        },
        {
            href: '/docs/products/ai/natural-language',
            cover: '/images/tutorials/svelte.png',
            title: 'Natural Language',
            description: 'Understand and generate human language'
        },
        {
            href: '/docs/products/ai/audio-processing',
            cover: '/images/tutorials/vue.png',
            title: 'Audio Processing',
            description: 'Analyze and generate audio'
        }
    ];

    const tutorials: Tutorial[] = [
        {
            title: 'Image Classification',
            description: 'Understand and label the contents of images',
            href: '/docs/products/ai/tutorials/image-classification',
            field: Field.ComputerVision,
            covers: {
                dark: '/images/icons/illustrated/dark/auth.png',
                light: '/images/icons/illustrated/light/auth.png'
            }
        },
        {
            title: 'Object Detection',
            description: 'Detect and label objects in images',
            href: '/docs/products/ai/tutorials/object-detection',
            field: Field.ComputerVision,
            covers: {
                dark: '/images/icons/illustrated/dark/auth.png',
                light: '/images/icons/illustrated/light/auth.png'
            }
        },
        {
            title: 'Image Segmentation',
            description: 'Split up objects in images into individual layers',
            href: '/docs/products/ai/tutorials/image-segmentation',
            field: Field.ComputerVision,
            covers: {
                dark: '/images/icons/illustrated/dark/auth.png',
                light: '/images/icons/illustrated/light/auth.png'
            }
        },
        {
            title: 'Text Generation',
            description: 'Generate human-like text',
            href: '/docs/products/ai/tutorials/text-generation',
            field: Field.NaturalLanguage,
            covers: {
                dark: '/images/icons/illustrated/dark/auth.png',
                light: '/images/icons/illustrated/light/auth.png'
            }
        },
        {
            title: 'Language Translation',
            description: 'Translate text between languages',
            href: '/docs/products/ai/tutorials/language-translation',
            field: Field.NaturalLanguage,
            covers: {
                dark: '/images/icons/illustrated/dark/auth.png',
                light: '/images/icons/illustrated/light/auth.png'
            }
        },
        {
            title: 'Speech To Text',
            description: 'Speech Recognition',
            href: '/docs/products/ai/tutorials/speech-recognition',
            field: Field.AudioProcessing,
            covers: {
                dark: '/images/icons/illustrated/dark/auth.png',
                light: '/images/icons/illustrated/light/auth.png'
            }
        },
        {
            title: 'Text To Speech',
            description: 'Convert text to speech',
            href: '/docs/products/ai/tutorials/text-to-speech',
            field: Field.AudioProcessing,
            covers: {
                dark: '/images/icons/illustrated/dark/auth.png',
                light: '/images/icons/illustrated/light/auth.png'
            }
        },
        {
            title: 'Music Generation',
            description: 'Generate music from text',
            href: '/docs/products/ai/tutorials/music-generation',
            field: Field.AudioProcessing,
            covers: {
                dark: '/images/icons/illustrated/dark/auth.png',
                light: '/images/icons/illustrated/light/auth.png'
            }
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
    <section class="aw-hero is-align-start">
        <h2 class="aw-title aw-u-color-text-primary u-max-width-600">Explore capabilities</h2>
        <p class="aw-description u-max-width-600">
            Detailed explanations and deep dives into how you can implement different machine
            learning techiques
        </p>
        <Carousel size="medium">
            {#each fields as field}
                <li style:scroll-snap-align="start">
                    <CodeCard {...field} />
                </li>
            {/each}
        </Carousel>
    </section>
    <section class="aw-hero is-align-start">
        <h2 class="aw-title aw-u-color-text-primary u-max-width-600">Show me some code</h2>
        <p class="aw-description u-max-width-600 u-margin-block-start-16">
            If you learn best from code examples, follow one of our tutorials.
        </p>
        <div class="u-margin-block-start-24">
            {#each Object.values(Field) as field}
                <h3 class="aw-label aw-u-color-text-primary web-snap-location">{field}</h3>
                <ul class="aw-grid-row-4 aw-grid-row-4-m-1">
                    {#each tutorials as tutorial}
                        {#if tutorial.field === field}
                            <li>
                                <a href={tutorial.href} class="aw-card is-normal">
                                    <img
                                        src={tutorial.covers.dark}
                                        alt=""
                                        class="u-only-dark"
                                        width="48"
                                        height="48"
                                    />
                                    <img
                                        src={tutorial.covers.light}
                                        alt=""
                                        class="u-only-light"
                                        width="48"
                                        height="48"
                                    />
                                    <h4
                                        class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8"
                                    >
                                        {tutorial.title}
                                    </h4>
                                    <p class="aw-sub-body-400 u-margin-block-start-4">
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

<style lang="scss">
    .e-hero-docs {
        @media (min-width: 1280px) {
            margin-block-start: 5rem;
        }
    }
    .aw-main-section {
        max-inline-size: unset;
        margin-inline: unset;
        @media (min-width: 1280px) {
            padding-inline-start: 3rem; // 48px
        }
    }

    .bg-blur {
        inset-inline-end: -300px;
        inset-block-start: -100px;
    }

    .tech-hero {
        @include border-block-gradient;

        --m-border-size: 1px;
        --m-border-gradient-before: linear-gradient(
            to right,
            hsl(var(--aw-color-smooth)) 0%,
            hsl(var(--aw-color-smooth)) 90%,
            transparent
        );

        max-inline-size: unset;
        margin-block-start: 2rem;
        margin-inline-start: -3rem;
        padding-block: 5rem;
        padding-inline-start: 3rem;

        position: relative;
        z-index: 10;

        .spline-wrapper {
            --p-size: 700px;
            inline-size: var(--p-size);
            block-size: var(--p-size);
            inset-block-start: -3rem;
            z-index: -1;
            left: calc(50% - 384px + 600px);
        }

        .bg-overlay {
            position: absolute;

            background: linear-gradient(to right, #ffffff00 0%, #ffffff00 10%, #ffffff);

            top: 0;
            right: 10rem;
            translate: 100%;
            width: 25rem;
            height: 100%;
            content: '';
            z-index: 9999;
        }
    }

    :global(.theme-dark) .tech-hero {
        background: linear-gradient(to right, #19191c80, #19191c00);
        backdrop-filter: blur(1rem);
        -webkit-backdrop-filter: blur(1rem);
    }

    :global(.theme-dark) .bg-overlay {
        background: linear-gradient(to right, #19191c00 0%, #19191c00 10%, #19191c);
    }
</style>
