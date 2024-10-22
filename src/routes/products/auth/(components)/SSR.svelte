<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { trackEvent } from '$lib/actions/analytics';
    import { Tooltip } from '$lib/components';
    import { Framework, Platform } from '$lib/utils/references';
    import MultiFrameworkCode from './MultiFrameworkCode.svelte';

    const codeSnippets = [
        {
            language: Platform.ClientWeb,
            platform: Framework.NextJs,
            content: `import { Client, Account } from 'node-appwrite'
import { cookies } from 'next/headers'

async function getLoggedInUser() {
  const session = cookies().get("custom-session-cookie");  
  if (!session) return

    const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)

    client.setSession(session.value)
    const account = new Account(client);

    return await account.get()
}
  `
        },
        {
            language: Platform.ClientWeb,
            platform: Framework.SvelteKit,
            content: `import { Client, Account } from 'node-appwrite'

async function getLoggedInUser() {
  const session = cookies().get("custom-session-cookie");  
  if (!session) return

  const client = new Client()
    .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT)    
    .setProject(process.env.PUBLIC_APPWRITE_PROJECT_ID)

      client.setSession(session.value)
      const account = new Account(client);

    return await account.get()
  }
`
        },
        {
            language: Platform.ClientWeb,
            platform: Framework.Astro,
            content: `import { Client, Account } from 'node-appwrite'

async function getLoggedInUser(context) {
  const session = cookies().get("custom-session-cookie");  
  if (!session) return

  const client = new Client()
    .setEndpoint(import.meta.env.PUBLIC_APPWRITE_ENDPOINT)    
    .setProject(import.meta.env.PUBLIC_APPWRITE_PROJECT_ID)

      client.setSession(session.value)
      const account = new Account(client);

    return await account.get()
  }
`
        },
        {
            language: Platform.ClientWeb,
            platform: Framework.Nuxt3,
            content: `import { Client, Account } from 'node-appwrite'
import { H3Event, getCookie } from 'h3'

async function getLoggedInUser(event) {
  const session = getCookie(event, "custom-session-cookie");  
  if (!session) return

  const client = new Client()
    .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT)    
    .setProject(process.env.PUBLIC_APPWRITE_PROJECT_ID)

      client.setSession(session.value)
      const account = new Account(client);

    return await account.get()
  }`
        },
        {
            language: Platform.ClientWeb,
            platform: Framework.Remix,
            content: `import { Client, Account } from 'node-appwrite'
import { createCookie } from '@remix-run/node'

export const customSessionCookie = createCookie("custom-session-cookie", {
  maxAge: 604800,
})

async function getLoggedInUser(request) {
  const cookies = request.headers.get("Cookie")  
  const session = await customSessionCookie.parse(cookies)  
  if (!session) return

  const client = new Client()
    .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT)    
    .setProject(process.env.PUBLIC_APPWRITE_PROJECT_ID)

      client.setSession(session.value)
      const account = new Account(client);

    return await account.get()
  }`
        }
    ];

    const bullets = [
        'Accelerates loading times and overall performance',
        'Improves search engine optimization',
        'Simplifies development processes'
    ];

    const platforms = [
        {
            name: 'Next',
            href: '/docs/quick-starts/nextjs',
            image: `/images/platforms/light/nextjs.svg`
        },
        {
            name: 'Svelte',
            href: '/docs/quick-starts/sveltekit',
            image: `/images/platforms/light/svelte.svg`
        },
        {
            name: 'Nuxt',
            href: '/docs/quick-starts/nuxt',
            image: `/images/platforms/light/nuxt.svg`
        },
        {
            name: 'Gatsby',
            href: '/docs/quick-starts/gatsby',
            image: `/images/platforms/light/gatsby.svg`
        },
        {
            name: 'Remix',
            href: '/docs/quick-starts/remix',
            image: `/images/platforms/light/remix.svg`
        }
    ] as Array<{
        name: string;
        href: string;
        image: string;
    }>;
</script>

<section class="light bg-greyscale-50 py-4 md:py-20">
    <div class="container grid gap-6 md:grid-cols-2">
        <div class="mb-10 flex max-w-lg flex-col gap-y-9">
            <span class="web-badges text-micro font-aeonik-fono mr-auto ml-0 uppercase !text-white"
                >SSR_</span
            >
            <h2 class="text-title text-primary font-aeonik-pro">
                Server-side rendering made simple
            </h2>
            <p class="text-body text-secondary font-medium">
                Streamline your development process and enhance performance without sacrificing
                functionality.
            </p>

            <ul class="space-y-4">
                {#each bullets as bullet}
                    <li class="text-body text-secondary flex items-center gap-2 font-medium">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="10"
                                cy="10"
                                r="8"
                                fill="#FD366E"
                                fill-opacity="0.08"
                                stroke="#FD366E"
                                stroke-opacity="0.32"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M6.25 11.5L8.75 13.5L13.75 7"
                                stroke="#FD366E"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        {bullet}
                    </li>
                {/each}
            </ul>

            <ul class="flex gap-4">
                {#each platforms as platform}
                    <Tooltip>
                        <li>
                            <a
                                href={platform.href}
                                class="platform flex size-14 items-center justify-center rounded-lg bg-white p-2"
                                on:click={() => trackEvent(`${platform.name} clicked`)}
                            >
                                <img
                                    src={platform.image}
                                    alt="{platform.name} quick start"
                                    width="32"
                                    height="32"
                                />
                            </a>
                        </li>
                        <svelte:fragment slot="tooltip">{platform.name}</svelte:fragment>
                    </Tooltip>
                {/each}
            </ul>
            <a href={PUBLIC_APPWRITE_DASHBOARD} class="web-button is-secondary mt-2">Learn more</a>
        </div>

        <MultiFrameworkCode data={codeSnippets} selected={Framework.NextJs} />
    </div>
</section>

<style>
    .platform {
        box-shadow: 0px 5.35209px 10.7042px rgba(0, 0, 0, 0.02);
        backdrop-filter: blur(16.7253px);
    }
</style>
