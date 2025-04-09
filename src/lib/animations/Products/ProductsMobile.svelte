<script>
    import { objectKeys } from '$lib/utils/object';
    import { infos } from './Products.svelte';
</script>

<div class="outside">
    <div class="wrapper">
        <span class="web-badges text-micro !text-white uppercase">Products_</span>

        <h2 class="text-display font-aeonik-pro text-primary mt-4">
            Your backend, minus the hassle
        </h2>

        <p class="text-description mt-4">
            Build secure and scalable applications with less code. Add authentication, databases,
            storage, and more using Appwrite's development platform.
        </p>

        <div class="infos">
            {#each objectKeys(infos) as prod, i}
                {@const info = infos[prod]}
                {@const isLast = i === objectKeys(infos).length - 1}

                {#if info}
                    <div class="info">
                        <h3>
                            <img src={info.icon.active} alt="" />
                            <span class="text-label text-primary">{info.title}</span>
                        </h3>

                        <h4 class="text-title font-aeonik-pro">{info.subtitle}</h4>
                        <p>
                            {info.description}
                        </p>
                        <ul class="features">
                            {#each info.features as feature}
                                <li>{feature}</li>
                            {/each}
                        </ul>

                        {#if info.shot}
                            <enhanced:img class="img" src={info.shot} alt="" />
                        {/if}
                    </div>

                    {#if !isLast}
                        <hr />
                    {/if}
                {/if}
            {/each}
        </div>

        <div class="post-wrapper">
            <img src="/images/products/post.png" alt="" />

            <h2>See your products grow</h2>
            <p>
                Keep track of your projects progress on the Appwrite Console and see them grow into
                products users love and use every day.
            </p>
        </div>
    </div>
    <div class="img-overlay"></div>
</div>

<style lang="scss">
    .outside {
        position: relative;
        overflow: hidden;
        display: none;

        .img-overlay {
            content: '';
            background: linear-gradient(to bottom, transparent 0%, black 40%);
            position: absolute;
            bottom: 0;
            width: 100vw;
            height: 30rem;
            z-index: 10;
        }
    }

    @media (max-width: 1399px) {
        .outside {
            display: block;
        }
    }

    .wrapper {
        --padding-inline: 1.25rem;

        padding-block-start: 5rem;
        padding-inline: var(--padding-inline);

        max-width: 600px;
        margin-inline: auto;
    }

    .infos {
        margin-block-start: 3rem;

        display: flex;
        flex-direction: column;
        gap: 3rem;

        .info {
            h3 {
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }

            h4 {
                color: hsl(var(--web-color-primary));
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

            .img {
                inline-size: 100%;
                block-size: auto;
                margin-block-start: 2.5rem;
            }
        }

        hr {
            border: 1px solid hsl(var(--web-color-smooth));
            margin-inline: calc(var(--padding-inline) * -1);
        }
    }

    .post-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: visible;

        position: relative;
        width: 100%;
        /* overflow: hidden; */

        padding-block-start: 35rem;
        padding-block-end: 5rem;

        img {
            display: block;
            max-block-size: unset;
            max-inline-size: unset;
            top: 5rem;
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
