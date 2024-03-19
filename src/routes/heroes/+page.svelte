<script lang="ts">
    import { FooterNav, MainFooter } from '$lib/components';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { Main } from '$lib/layouts';
    import { TITLE_SUFFIX } from '$routes/titles';
    import type { HeroCardProps } from './HeroCard.svelte';
    import HeroCard from './HeroCard.svelte';
    import FloatingHead from '$lib/components/FloatingHead.svelte';

    const title = 'Heroes' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    const heroCards: HeroCardProps[] = [
        {
            name: 'Diana Pham',
            role: 'Developer Advocate',
            bio: "Diana discovered Appwrite and its wonderful team while completing her master's in computer science.\
						Now, as a developer advocate at Vonage, she is excited to build projects using both backend servicing and telecommunications APIs.",
            github: 'https://github.com/dianapham',
            twitter: 'https://twitter.com/dianasoyster',
            linkedin: 'https://www.linkedin.com/in/dianasoyster',
            avatar: 'images/heroes/avatars/diana.png'
        },
        {
            name: 'Lucas Audart',
            role: 'Web Consultant',
            bio: 'Lucas is a web consultant at Zenika who specializes in front-end technologies and has spoken about\
						Appwrite and other technologies at various development conferences in France.',
            github: 'https://github.com/Slocaly',
            twitter: 'https://twitter.com/Slocalyy',
            linkedin: 'https://www.linkedin.com/in/lucas-audart',
            avatar: 'images/heroes/avatars/lucas.png'
        },
        {
            name: 'Tanmoy Karmakar',
            role: 'Software Engineer',
            bio: 'Tanmoy Karmakar is a co-organizer at Flutter Kolkata and SDE-II [Flutter] at SaaS Labs.\
						He loves to create content related to Flutter and organize events and meet-ups.\
						Learning new ways to complement Flutter development always amuses him.',
            github: 'https://github.com/tanmoy27112000',
            twitter: 'https://twitter.com/tanmoykar27',
            linkedin: 'https://www.linkedin.com/in/tanmoykarmakar2711',
            avatar: 'images/heroes/avatars/tanmoy.png'
        },
        {
            name: 'Bishwajeet Parhi',
            role: 'Flutter Developer',
            bio: "Bishwajeet Parhi is a Flutter developer and active open-source contributor.\
						He's currently a junior pursuing a Computer Science and Engineering degree and also an organizer of the Hack This Fall hackathon.",
            github: 'https://github.com/2002Bishwajeet',
            twitter: 'https://twitter.com/biswa_20p',
            linkedin: 'https://www.linkedin.com/in/2002bishwajeet',
            avatar: 'images/heroes/avatars/bishwajeet.png'
        },
        {
            name: 'Mickaël Alves',
            role: 'Front-end Consultant',
            bio: 'Mickaël is a front-end developer working as a web consultant in Lyon at Zenika. He co-organizes meetups with LyonJS and speaks at conferences about Appwrite, Flutter, and Remotion.',
            github: 'https://github.com/CruuzAzul',
            twitter: 'https://twitter.com/CruuzAzul',
            linkedin: 'https://www.linkedin.com/in/mickaelalves',
            avatar: 'images/heroes/avatars/mickael.png'
        },
        {
            name: 'Jason Torres',
            role: 'Freelance Community Manager',
            bio: "Jason Torres a former film-maker turned developer who is currently exploring Developer Advocacy and Community Management freelance, and hosting The Tech Commute, a series of Twitter Spaces catered towards developers.",
            github: 'https://github.com/jasonetorres',
            twitter: 'https://twitter.com/tasonjorres',
            linkedin: 'https://www.linkedin.com/in/thejasontorres',
            avatar: 'images/heroes/avatars/jason.png'
        },
        {
            name: 'Nishant Jain',
            role: 'Frontend Developer',
            bio: "Nishant Jain is a frontend developer and community builder from Indore, India. He has been actively contributing to the Appwrite community as a Discord moderator.",
            github: 'https://github.com/Nishantjain10',
            twitter: 'https://twitter.com/devnishant10',
            linkedin: 'https://www.linkedin.com/in/nishantj2002/',
            avatar: 'images/heroes/avatars/nishant.png'
        }
    ];

    const infiniteScroll = (node: HTMLElement) => {
        if (window.matchMedia('prefers-reduced-motion').matches) return;
        const content = node.querySelector('.inner') as HTMLElement;
        content.innerHTML += content?.innerHTML;
        node.dataset.animated = 'true';
    };
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

<Main>
    <div class="aw-big-padding-section">
        <div class="aw-big-padding-section-level-1">
            <div class="aw-big-padding-section-level-2">
                <section class="aw-container hero aw-u-padding-block-end-0">
                    <div>
                        <h1 class="aw-display aw-u-color-text-primary">Appwrite Heroes</h1>
                        <p class="aw-main-body-500 u-margin-block-start-20">
                            If you love building, writing, speaking, and helping other developers
                            build with Appwrite, help us support you by joining the Appwrite Heroes
                            program and becoming a leader in our developer community.
                        </p>
                        <a
                            href="https://7nxwryuitoy.typeform.com/heroes-apply"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="aw-button is-secondary u-margin-block-start-32"
                        >
                            <span class="text">Become a Hero</span>
                        </a>
                    </div>
                    <div>
                        <img src="/images/heroes/bg.png" width="" alt="" />
                    </div>
                </section>
            </div>
        </div>
        <div class="aw-big-padding-section-level-1">
            <div class="aw-big-padding-section-level-2">
                <section class="aw-container">
                    <div class="aw-hero aw-u-max-width-800 about">
                        <h2 class="aw-title aw-u-color-text-primary">About Appwrite Heroes</h2>
                        <div>
                            <p class="aw-sub-body-500">
                                The Appwrite Heroes program is an exclusive group of developers who
                                are experts in Appwrite and dedicated to creating valuable content
                                to assist other developers in achieving success. Appwrite Heroes
                                excel in creating video tutorials, written guides, blog posts, or
                                providing support in our fast-growing Discord community.
                            </p>
                        </div>
                        <div class="avatar-1">
                            <FloatingHead src="/images/heroes/avatars/bishwajeet.png" size={64} />
                        </div>
                        <div class="avatar-2">
                            <FloatingHead src="/images/heroes/avatars/tanmoy.png" size={80} />
                        </div>
                        <div class="avatar-3">
                            <FloatingHead src="/images/heroes/avatars/emilia.png" size={64} />
                        </div>
                        <enhanced:img class="teal-blur" src="./teal-blur.png" alt="" />
                    </div>
                </section>
            </div>
        </div>

        <div
            class="aw-big-padding-section-level-1 u-position-relative aw-white-section theme-light"
        >
            <div class="aw-big-padding-section-level-2">
                <div class="aw-container">
                    <div class="aw-hero">
                        <div class="aw-display aw-u-clr-primary">Meet our Heroes</div>
                    </div>
                    <ul class="aw-multi-columns-1 aw-u-margin-block-start-80">
                        {#each heroCards as heroCardProps}
                            <HeroCard {...heroCardProps} />
                        {/each}
                    </ul>
                </div>
            </div>
            <div class="aw-big-padding-section-level-2 aw-u-overflow-hidden">
                <div class="scroll-carousel" use:infiniteScroll>
                    <ul class="inner">
                        <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
                        {#each { length: 5 } as _, i}
                            <li>
                                <div
                                    class="aw-card is-white carousel-img"
                                    style="--p-card-padding:0.5rem; --card-border-radius:1.25rem"
                                >
                                    <img
                                        class="u-block aw-u-border-radius-12"
                                        src="/images/heroes/photos/{i + 1}.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
            <div class="aw-big-padding-section-level-2">
                <div class="aw-container">
                    <section class="aw-hero is-align-start">
                        <h2 class="aw-display aw-u-color-text-primary u-max-width-700">
                            How Appwrite Heroes can benefit you
                        </h2>
                    </section>
                    <div class="u-overflow-hidden aw-u-margin-block-start-80">
                        <ul class="aw-info-boxes aw-sub-body-500">
                            <li class="aw-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/discussion.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="aw-info-boxes-title">Channel access</h3>
                                <p class="aw-info-boxes-content">
                                    Access to internal channel with Appwrite’s Engineering and
                                    DevRel teams.
                                </p>
                            </li>
                            <li class="aw-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/community.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="aw-info-boxes-title">In-person gatherings</h3>
                                <p class="aw-info-boxes-content">
                                    Top contributors get invited to an in-person gathering with the
                                    Appwrite team.
                                </p>
                            </li>
                            <li class="aw-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/verified.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="aw-info-boxes-title">Digital badge</h3>
                                <p class="aw-info-boxes-content">
                                    Exclusive digital badge to share on Discord and LinkedIn.
                                </p>
                            </li>
                            <li class="aw-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/travel.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="aw-info-boxes-title">Travel</h3>
                                <p class="aw-info-boxes-content">
                                    Travel paid for top contributors (case-by-case) to attend dev
                                    conferences.
                                </p>
                            </li>
                            <li class="aw-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/labs.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="aw-info-boxes-title">
                                    <span>Beta-test</span>
                                </h3>
                                <p class="aw-info-boxes-content">
                                    Opportunity to beta-test Appwrite releases.
                                </p>
                            </li>
                            <li class="aw-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/unlock.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="aw-info-boxes-title">
                                    <span>Roadmap access</span>
                                </h3>
                                <p class="aw-info-boxes-content">
                                    Special access to a more in-depth roadmap.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="aw-big-padding-section-level-1 u-position-relative footer-wrapper">
            <enhanced:img
                src="./bg-pre.png"
                alt=""
                class="u-position-absolute"
                style:inset-block-start="0"
            />
            <div class="aw-big-padding-section-level-2 u-position-relative">
                <div class="aw-container">
                    <div class="aw-hero aw-u-max-width-800">
                        <h5 class="aw-display aw-u-color-text-primary">Become a Hero</h5>
                        <p class="aw-description aw-u-color-text-primary" style="opacity:0.64">
                            Have you been actively providing value for the Appwrite community? Apply
                            now to join our hero program! Applications are open every three months.
                        </p>
                        <a
                            href="https://7nxwryuitoy.typeform.com/heroes-apply"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="aw-button is-transparent is-full-width-mobile aw-u-cross-child-center u-margin-block-start-20"
                        >
                            Become a Hero
                        </a>
                    </div>
                </div>
                <div class="aw-big-padding-section-level-2 u-position-relative">
                    <div class="aw-container u-position-relative">
                        <FooterNav noBorder />
                        <MainFooter />
                    </div>
                </div>
            </div>
        </div>
    </div>
</Main>

<style lang="scss">
    .hero {
        display: grid;
        grid-template-columns: 30.0625rem minmax(0, 1fr);
        gap: 5vw;
        justify-content: space-between;
        align-items: center;
        position: relative;

        > :nth-child(2) {
            transform-origin: left center;
            scale: 2;
            transform: translateY(2rem);
        }

        @media (max-width: 1023px) {
            display: block;

            overflow: hidden;
            gap: 2rem;

            > :first-child {
                max-width: 40rem;
                margin-inline: auto;
            }

            > :nth-child(2) {
                scale: 1;
                width: 100%;
                height: 24rem;
                position: relative;

                img {
                    position: absolute;
                    display: block;
                    width: 40rem;

                    left: 50%;
                    top: 50%;
                    transform: translate(-30%, -50%);

                    max-block-size: unset;
                    max-inline-size: unset;
                }
            }
        }
    }

    .about {
        position: relative;

        .avatar-1 {
            position: absolute;
            bottom: -5rem;
            right: -20rem;
        }
        .avatar-2 {
            position: absolute;
            top: -5rem;
            left: -7.5rem;
        }
        .avatar-3 {
            position: absolute;
            bottom: -7rem;
            left: -15rem;
        }
        .teal-blur {
            position: absolute;
            max-inline-size: none;
            max-block-size: none;
            left: -60rem;
            bottom: -45rem;
        }

        @media (max-width: 1023px) {
            [class*='avatar-'] {
                display: none;
            }

            .teal-blur {
                left: -45rem;
            }
        }
    }

    @keyframes scroll {
        to {
            transform: translate(calc(-50% - 1rem));
        }
    }

    .scroll-carousel {
        display: flex;
        width: 100%;
        overflow: auto;

        .inner {
            padding-inline: 4rem;

            display: flex;
            gap: pxToRem(32);
            flex-shrink: 0;

            > * {
                flex-shrink: 0;
                scroll-snap-align: start;
            } /* items */

            .carousel-img {
                @include border-gradient;
                --m-border-gradient-before: linear-gradient(
                    135.1deg,
                    #ffffff 10.1%,
                    rgba(255, 255, 255, 0.2) 52.69%,
                    rgba(255, 255, 255, 0.5) 120.69%
                );
                --m-border-radius: 1.25rem;
                background: linear-gradient(
                    155deg,
                    rgba(255, 255, 255, 0.35) 1.16%,
                    rgba(255, 255, 255, 0.35) 84.17%
                );
                backdrop-filter: blur(16px);
                -webkit-backdrop-filter: blur(16px);
            }
        }
    }

    :global([data-animated]).scroll-carousel {
        overflow: hidden;

        .inner {
            padding-inline: 0;
            animation: scroll 40s linear infinite;
        }
    }

    .footer-wrapper {
        overflow: hidden;

        @media (max-width: 1024px) {
            .aw-hero {
                padding-block-start: 5rem;
            }
        }

        .aw-hero {
            gap: 0;

            .aw-description {
                margin-block-start: 1.25rem;
            }

            .aw-button {
                margin-block-start: 1.5rem;
            }
        }
    }
</style>
