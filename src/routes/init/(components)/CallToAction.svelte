<script lang="ts">
    import ConsoleImage from '../(assets)/console.png';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';

    export let title: string = 'Start building with Appwrite today';
    export let description: string =
        "Appwrite's open-source platform lets you add Auth, DBs, Functions and Storage to your product and build any application at any scale, own your data, and use your preferred coding languages and tools.";
</script>

<div class="call-to-action">
    <div class="container">
        <div class="text">
            <h2 class="text-title font-aeonik-pro text-primary">{title}</h2>
            <p class="text-body font-medium">
                {description}
            </p>
            <a href={getAppwriteDashboardUrl()} class="web-button">Get started</a>
        </div>

        <img class="console" src={ConsoleImage} alt="" />
    </div>
</div>

<style lang="scss">
    .call-to-action {
        padding-block-start: 0rem;
        padding-block-end: 0;
        overflow: hidden;
        margin-bottom: -125px;
        border-top: 1px solid hsl(var(--web-color-offset));

        .container {
            position: relative;
            height: 43.75rem;

            @media screen and (max-width: 1023px) {
                height: 38rem;
            }

            .text {
                position: relative;
                inset-block-start: 10rem;
                max-inline-size: 25rem;

                @media screen and (max-width: 1023px) {
                    inset-block-start: 3rem;
                }

                p {
                    margin-block-start: 0.75rem;
                }

                a {
                    margin-block-start: 2rem;
                }
            }

            .console {
                position: absolute;
                inset-inline-end: -50%;
                inset-block-end: -10rem;
                margin-top: 48px;

                @media screen and (max-width: 1023px) {
                    inset-inline-start: 1.5rem;
                    inset-block-end: 0rem;

                    max-block-size: unset;
                    block-size: 275px;
                    max-inline-size: unset;
                    inline-size: auto;
                }
            }
        }
    }
</style>
