<script>
    import { objectKeys } from '$lib/utils/object';
    import { infos } from './Products.svelte';
</script>

<div class="wrapper">
    <span class="aw-badges aw-eyebrow">Products_</span>

    <h2 class="aw-display aw-u-color-text-primary u-margin-block-start-16">
        Your backend, minus the hassle
    </h2>

    <p class="aw-description u-margin-block-start-16">
        Build secure and scalable applications with less code. Add authentication, databases,
        storage, and more using Appwrite's development platform.
    </p>

    <div class="infos">
        {#each objectKeys(infos) as prod}
            {@const info = infos[prod]}

            {#if info}
                <div class="info">
                    <h3>
                        <img src={info.icon.active} alt="" />
                        <span class="aw-label aw-u-color-text-primary">{info.title}</span>
                    </h3>

                    <h4 class="aw-title">{info.subtitle}</h4>
                    <p>
                        {info.description}
                    </p>
                    <ul class="features">
                        {#each info.features as feature}
                            <li>{feature}</li>
                        {/each}
                    </ul>

                    {#if info.shot}
                        <img src={info.shot} alt="" />
                    {/if}
                </div>
            {/if}
        {/each}
    </div>

    <div class="post-wrapper">
        <img src="/images/products/post.png" alt="" />
        <div class="img-overlay" />

        <h2>See your products grow</h2>
        <p>
            Keep track of your projects progress on the Appwrite Console and see them grow into
            products users love and use every day.
        </p>
    </div>
</div>

<style lang="scss">
    .wrapper {
        display: none;
        padding-block-start: 5rem;
        padding-inline: 1.25rem;

        max-width: 800px;
        margin-inline: auto;
        overflow: visible;
    }

    @media (max-width: 1399px) {
        .wrapper {
            display: block;
        }
    }

    .infos {
        margin-block-start: 3rem;

        display: flex;
        flex-direction: column;
        gap: 6rem;

        .info {
            h3 {
                display: flex;
                align-items: center;
                gap: 0.75rem;

                .aw-label {
                    margin-block-start: 0.25rem;
                }
            }

            h4 {
                color: hsl(var(--aw-color-primary));
                margin-block-start: 0.75rem;
            }

            p {
                margin-block-start: 1rem;
            }

            .features {
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
                margin-block-start: 2rem;

                li {
                    --marker-size: 1.25rem;
                    --margin-left: calc(var(--marker-size) + 0.75rem);
                    position: relative;
                    margin-inline-start: var(--margin-left);

                    &::before {
                        content: '';
                        position: absolute;

                        left: calc(var(--margin-left) * -1);
                        top: 50%;
                        width: var(--marker-size);
                        height: var(--marker-size);

                        transform: translateY(-50%);

                        background: url('/images/icons/colored/check.svg') no-repeat;
                    }
                }
            }

            > img {
                width: 100%;
                margin-block-start: 2.5rem;
            }
        }
    }

    .post-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: visible;

        position: relative;
        width: 100%;

        padding-block-start: 35rem;
        padding-block-end: 5rem;

        .img-overlay {
            content: '';
            background: linear-gradient(to top, black, transparent);
            position: absolute;
            bottom: 0;
            width: 100vw;
            height: 30rem;
            z-index: 10;
        }

        img {
            display: block;
            max-block-size: unset;
            max-inline-size: 100%;
            top: 0rem;
            left: 50%;
            transform: translateX(-50%);
            width: 37.5rem;

            position: absolute;
        }

        h2 {
            color: var(--greyscale-50, #ededf0);
            text-align: center;

            /* Responsive/Display */
            font-family: Aeonik Pro;
            font-size: 48px;
            font-style: normal;
            font-weight: 400;
            line-height: 50px; /* 104.167% */
            letter-spacing: -0.48px;
            max-width: 20rem;
            position: relative;
            z-index: 100;
        }

        p {
            color: var(--greyscale-400, #97979b);
            text-align: center;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 22px; /* 137.5% */
            letter-spacing: -0.072px;
            margin-block-start: 1rem;
            max-width: 20rem;
            z-index: 100;
        }
    }
</style>
