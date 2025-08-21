<script lang="ts">
    import { FooterNav, MainFooter } from '$lib/components';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { Main } from '$lib/layouts';
    import { TITLE_SUFFIX } from '$routes/titles';
    import type { HeroCardProps } from './HeroCard.svelte';
    import HeroCard from './HeroCard.svelte';
    import FloatingHead from '$lib/components/FloatingHead.svelte';
    import { Button } from '$lib/components/ui';

    const title = 'Heroes' + TITLE_SUFFIX;
    const description =
        "If you're passionate about helping developers build great products with Appwrite - join our Heroes program and get access to a number of exclusive perks.";
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
            role: 'Community Evangelist',
            bio: 'Jason Torres a former film-maker turned developer who is currently exploring Developer Advocacy and Community Management freelance, and hosting The Tech Commute, a series of Twitter Spaces catered towards developers.',
            github: 'https://github.com/jasonetorres',
            twitter: 'https://twitter.com/tasonjorres',
            linkedin: 'https://www.linkedin.com/in/thejasontorres',
            avatar: 'images/heroes/avatars/jason.png'
        },
        {
            name: 'Vincent Ge',
            role: 'DevRel Engineer',
            bio: 'Vincent Ge is a DevRel Engineer who has actively been supporting open-source developers and communities for the last few years. He is a former member of the Appwrite DevRel team and a forever beloved part of our community.',
            github: 'https://github.com/gewenyu99/',
            twitter: 'https://x.com/WenYuGe1',
            linkedin: 'https://www.linkedin.com/in/wen-yu-ge/',
            avatar: 'images/heroes/avatars/vincent.png'
        },
        {
            name: 'Taylor Desseyn',
            role: 'VP of Global Community',
            bio: 'Taylor Desseyn is a skilled people connector and has helped 600+ individuals find their perfect career fit in tech. His knack for creating community shines through his use of social media and content creation',
            github: 'https://github.com/tdesseyn',
            twitter: 'https://x.com/tdesseyn',
            linkedin: 'https://www.linkedin.com/in/taylordesseyn/',
            avatar: 'images/heroes/avatars/taylor.png'
        },
        {
            name: 'Demola Malomo',
            role: 'Software Engineer & Technical Writer',
            bio: 'Demola Malomo is a software engineer and technical writer from Lagos, Nigeria. He primarily codes in JavaScript and TypeScript and has been learning Rust and Go.',
            github: 'https://github.com/Mr-Malomz',
            twitter: 'https://x.com/malomz',
            linkedin: 'https://www.linkedin.com/in/malomoademola/',
            avatar: 'images/heroes/avatars/demola.png'
        },
        {
            name: 'Danny Thompson',
            role: 'Director of Technology',
            bio: 'Danny Thompson is the Director of Technology at This Dot Labs, a software development consultancy specializing in digital innovation and modernization. In addition to his leadership role, he co-hosts "The Programming Podcast" alongside Leon Noel, where they discuss technical challenges, industry insights, and career advice.  Danny is also active in organizing tech conferences, such as Commit Your Code, and engages with the tech community through various platforms.',
            github: 'https://github.com/TheDThompsonDev',
            twitter: 'https://x.com/DThompsonDev',
            linkedin: 'https://www.linkedin.com/in/dthompsondev',
            avatar: 'images/heroes/avatars/danny.png'
        },
        {
            name: 'Christina Petit',
            role: 'Freelance Developer',
            bio: 'Christina Petit is a freelance web developer from France who has been quite active in the Appwrite Discord server and community initiatives like Init and Office Hours. She also actively creates technical content on YouTube with Astro.',
            github: 'http://github.com/petipois',
            twitter: 'http://x.com/petitpois28',
            linkedin: 'https://www.linkedin.com/in/christina-petitpois',
            avatar: 'images/heroes/avatars/christina.png'
        },
        {
            name: 'Nick Gatzoulis',
            role: 'Managing Director',
            bio: 'Nick Gatzoulis is a tech lead and SaaS founder from the UK who actively manages a Backend-as-a-Service community on X (Twitter) and creates technical content on YouTube, where has published numerous Appwrite tutorials.',
            github: 'https://github.com/nickgatzoulis',
            twitter: 'https://x.com/nickgatzoulis',
            linkedin: 'https://www.linkedin.com/in/nickgatzoulis',
            avatar: 'images/heroes/avatars/nick.png'
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
    <!-- Description -->
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
    <div class="web-big-padding-section max-w-screen overflow-hidden">
        <div class="py-10">
            <div class="web-big-padding-section-level-2">
                <section class="hero web-u-padding-block-end-0 container">
                    <div>
                        <h1 class="text-display font-aeonik-pro text-primary">Appwrite Heroes</h1>
                        <p class="text-main-body mt-5 font-medium">
                            If you love building, writing, speaking, and helping other developers
                            build with Appwrite, help us support you by joining the Appwrite Heroes
                            program and becoming a leader in our developer community.
                        </p>
                        <Button
                            variant="secondary"
                            href="https://7nxwryuitoy.typeform.com/heroes-apply"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="mt-8"
                        >
                            <span class="text">Become a Hero</span>
                        </Button>
                    </div>
                    <div>
                        <img src="/images/heroes/bg.png" width="" alt="" />
                    </div>
                </section>
            </div>
        </div>
        <div class="py-10">
            <div class="web-big-padding-section-level-2">
                <section class="container">
                    <div class="web-hero web-u-max-width-800 about">
                        <h2 class="text-title font-aeonik-pro text-primary">
                            About Appwrite Heroes
                        </h2>
                        <div>
                            <p class="text-sub-body font-medium">
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

        <div class="web-white-section light relative py-10">
            <div class="web-big-padding-section-level-2">
                <div class="container">
                    <div class="web-hero">
                        <div class="text-display font-aeonik-pro web-u-clr-primary">
                            Meet our Heroes
                        </div>
                    </div>
                    <ul class="web-multi-columns-1 mt-20">
                        {#each heroCards as heroCardProps}
                            <HeroCard {...heroCardProps} />
                        {/each}
                    </ul>
                </div>
            </div>
            <div class="web-big-padding-section-level-2 web-u-overflow-hidden">
                <div class="scroll-carousel" use:infiniteScroll>
                    <ul class="inner">
                        <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
                        {#each { length: 5 } as _, i}
                            <li>
                                <div
                                    class="web-card is-white carousel-img"
                                    style="--p-card-padding:0.5rem; --card-border-radius:1.25rem"
                                >
                                    <img
                                        class="rounded-xl"
                                        src="/images/heroes/photos/{i + 1}.png"
                                        loading="lazy"
                                        alt=""
                                    />
                                </div>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
            <div class="web-big-padding-section-level-2">
                <div class="container">
                    <section class="web-hero is-align-start">
                        <h2 class="text-display font-aeonik-pro text-primary max-w-[700px]">
                            How Appwrite Heroes can benefit you
                        </h2>
                    </section>
                    <div class="mt-20 overflow-hidden">
                        <ul class="web-info-boxes text-sub-body font-medium">
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/discussion.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title">Channel access</h3>
                                <p class="web-info-boxes-content">
                                    Access to internal channel with Appwrite’s Engineering and
                                    DevRel teams.
                                </p>
                            </li>
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/community.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title">In-person gatherings</h3>
                                <p class="web-info-boxes-content">
                                    Top contributors get invited to an in-person gathering with the
                                    Appwrite team.
                                </p>
                            </li>
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/verified.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title">Digital badge</h3>
                                <p class="web-info-boxes-content">
                                    Exclusive digital badge to share on Discord and LinkedIn.
                                </p>
                            </li>
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/travel.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title">Travel</h3>
                                <p class="web-info-boxes-content">
                                    Travel paid for top contributors (case-by-case) to attend dev
                                    conferences.
                                </p>
                            </li>
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/labs.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title">
                                    <span>Beta-test</span>
                                </h3>
                                <p class="web-info-boxes-content">
                                    Opportunity to beta-test Appwrite releases.
                                </p>
                            </li>
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/unlock.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title">
                                    <span>Roadmap access</span>
                                </h3>
                                <p class="web-info-boxes-content">
                                    Special access to a more in-depth roadmap.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-wrapper relative pt-10">
            <enhanced:img src="./bg-pre.png" alt="" class="absolute" style:inset-block-start="0" />
            <div class="web-big-padding-section-level-2 relative">
                <div class="container">
                    <div class="web-hero web-u-max-width-800">
                        <h5 class="text-display font-aeonik-pro text-primary">Become a Hero</h5>
                        <p class="text-description text-primary" style="opacity:0.64">
                            Have you been actively providing value for the Appwrite community? Apply
                            now to join our hero program! Applications open every three months.
                        </p>
                        <Button
                            variant="transparent"
                            href="https://7nxwryuitoy.typeform.com/heroes-apply"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="is-full-width-mobile mt-6 self-center"
                        >
                            Become a Hero
                        </Button>
                    </div>
                </div>
                <div class="web-big-padding-section-level-2 relative">
                    <div class="relative container">
                        <FooterNav noBorder />
                        <MainFooter />
                    </div>
                </div>
            </div>
        </div>
    </div>
</Main>

<style lang="scss">
    @use '$scss/abstract/functions' as f;
    @use '$scss/abstract/mixins/border-gradient' as gradients;

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
            gap: f.pxToRem(32);
            flex-shrink: 0;

            > * {
                flex-shrink: 0;
                scroll-snap-align: start;
            } /* items */

            .carousel-img {
                @include gradients.border-gradient;
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
            .web-hero {
                padding-block-start: 5rem;
            }
        }

        @media (min-width: 1024px) {
            .web-big-padding-section-level-2 {
                margin-block-end: 0;
            }
        }

        .web-hero {
            gap: 0;

            .text-description {
                margin-block-start: 1.25rem;
            }
        }
    }
</style>
