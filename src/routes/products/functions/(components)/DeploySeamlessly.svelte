<script lang="ts">
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
        }
    ] as Array<{
        name: string;
        href: string;
        image: string;
    }>;
</script>

<section class="py-4 md:py-20">
    <div
        class="container grid grid-cols-1 items-center justify-between gap-12 md:grid-cols-12 md:flex-row"
    >
        <div class="col-span-4 mb-10 flex flex-col">
            <h2 class="text-title text-primary font-aeonik-pro my-4 text-pretty">
                Develop your functions locally
            </h2>
            <p class="text-body text-secondary text-pretty font-medium">
                Code and test your functions locally with Appwrite Functions, ensuring full control
                over your development.
            </p>

            <a href="/docs/sdks#server" class="web-button is-secondary mt-8">Learn more</a>
        </div>

        <div
            class="window col-span-7 col-start-6 h-[420px] w-full bg-[#232325]/94 backdrop-blur-lg"
        >
            <header class="grid h-12 w-full grid-cols-12 items-center px-4">
                <div class="col-span-2 flex gap-1">
                    <button class="size-2 rounded-full bg-[#EC6A5E]" />
                    <button class="size-2 rounded-full bg-[#F5BF4F]" />
                    <button class="size-2 rounded-full bg-[#6d9e66]" />
                </div>
                <div
                    class="col-span-6 col-start-4 flex h-6 w-full items-center rounded-full bg-[#1B1B1C]/94 px-2 backdrop-blur-lg"
                >
                    <span
                        class="text-secondary flex items-center gap-2 text-[0.625rem] -tracking-[.045%]"
                        ><svg
                            width="11"
                            height="12"
                            viewBox="0 0 11 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5.50038 1.07788C8.21908 1.07788 10.4229 3.33727 10.4229 6.12488C10.4229 8.35428 9.01406 10.2455 7.05934 10.9135C6.80977 10.9632 6.72116 10.8056 6.72116 10.6712C6.72116 10.5048 6.72707 9.96141 6.72707 9.28604C6.72707 8.81545 6.56955 8.50832 6.39283 8.35178C7.48907 8.22675 8.64093 7.79993 8.64093 5.86145C8.64093 5.31013 8.44994 4.86024 8.13392 4.5068C8.18511 4.37931 8.35395 3.86596 8.08568 3.1709C8.08568 3.1709 7.67317 3.03567 6.73347 3.68839C6.34016 3.57665 5.91879 3.52043 5.50038 3.51846C5.08197 3.52043 4.6611 3.57665 4.26828 3.68839C3.32759 3.03567 2.9141 3.1709 2.9141 3.1709C2.64681 3.86596 2.81565 4.37931 2.86635 4.5068C2.5518 4.86024 2.35934 5.31013 2.35934 5.86145C2.35934 7.79501 3.50874 8.22837 4.60203 8.35587C4.46124 8.48188 4.33375 8.70418 4.28945 9.03055C4.00886 9.15952 3.29608 9.38272 2.857 8.61136C2.857 8.61136 2.5966 8.12644 2.10238 8.09099C2.10238 8.09099 1.62244 8.08462 2.06891 8.39769C2.06891 8.39769 2.39133 8.55275 2.6153 9.13606C2.6153 9.13606 2.90426 10.0369 4.2737 9.73166C4.27616 10.1535 4.28059 10.5511 4.28059 10.6712C4.28059 10.8046 4.19001 10.9607 3.94438 10.914C1.98818 10.247 0.577881 8.35477 0.577881 6.12488C0.577881 3.33727 2.78218 1.07788 5.50038 1.07788Z"
                                fill="#ADADB0"
                            />
                        </svg>
                        <span>
                            Current repository:<span class="text-white">&nbsp;my-repo</span></span
                        ></span
                    >
                </div>
            </header>
        </div>
    </div>
</section>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .window {
        @include gradients.border-gradient;
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.16) 0%,
            rgba(255, 255, 255, 0) 100%
        );
        --m-border-radius: 1.5rem;
    }
</style>
