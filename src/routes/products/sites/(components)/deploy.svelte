<script lang="ts">
    import { write } from '$lib/animations';
    import { inView } from 'motion';
    import Dashboard from '../(assets)/dashboards/deploy-dashboard.svg';

    const logs = [
        {
            time: '18:31:21.320',
            message: 'Cloning completed: 409.772ms'
        },
        {
            time: '18:31:21.344',
            message: 'Running build in Washington, D.C., USA (East) – iad1'
        },
        {
            time: '18:31:21.450',
            message:
                'Cloning github.com/chenparnasa/isr-blog-nextjs-wordpress (Branch: main, Commit: de72693)'
        },
        {
            time: '18:31:21.836',
            message: 'Previous build cache not available'
        },
        {
            time: '18:31:21.860',
            message: 'Cloning completed: 409.772ms'
        },
        {
            time: '18:31:22.123',
            message: 'Running "appwrite build"'
        },
        {
            time: '18:31:22.938',
            message: 'Appwrite CLI 37.6.1'
        },
        {
            time: '18:31:21.344',
            message: 'Appwrite network is enabled'
        }
    ];

    const details = [
        {
            eyebrow: 'Git repository',
            label: 'acmecorp/homepage',
            icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.87914 2.02002C4.69674 2.02002 2.11914 4.66282 2.11914 7.92571C2.11914 10.539 3.76794 12.7462 6.05754 13.5287C6.34554 13.5804 6.45354 13.4032 6.45354 13.2482C6.45354 13.108 6.44634 12.6429 6.44634 12.1483C4.99914 12.4214 4.62474 11.7866 4.50954 11.4544C4.44474 11.2846 4.16394 10.7604 3.91914 10.6202C3.71754 10.5095 3.42954 10.2363 3.91194 10.2289C4.36554 10.2215 4.68954 10.6571 4.79754 10.8343C5.31594 11.7275 6.14394 11.4765 6.47514 11.3215C6.52554 10.9376 6.67674 10.6792 6.84234 10.5316C5.56074 10.384 4.22154 9.87459 4.22154 7.61566C4.22154 6.97342 4.44474 6.44191 4.81194 6.02851C4.75434 5.88087 4.55274 5.27553 4.86954 4.4635C4.86954 4.4635 5.35194 4.30848 6.45354 5.06883C6.91434 4.93596 7.40394 4.86952 7.89354 4.86952C8.38314 4.86952 8.87274 4.93596 9.33354 5.06883C10.4351 4.30109 10.9175 4.4635 10.9175 4.4635C11.2343 5.27553 11.0327 5.88087 10.9751 6.02851C11.3423 6.44191 11.5655 6.96604 11.5655 7.61566C11.5655 9.88197 10.2191 10.384 8.93754 10.5316C9.14634 10.7162 9.32634 11.0705 9.32634 11.6242C9.32634 12.414 9.31914 13.0489 9.31914 13.2482C9.31914 13.4032 9.42714 13.5878 9.71514 13.5287C10.8586 13.133 11.8522 12.3795 12.5561 11.3744C13.2601 10.3692 13.6388 9.1631 13.6391 7.92571C13.6391 4.66282 11.0615 2.02002 7.87914 2.02002Z" fill="currentColor"/>
</svg>
`
        },
        {
            eyebrow: 'Branch',
            label: 'main',
            icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.27781 4.70006C6.27781 5.4463 5.81339 6.08406 5.15781 6.34008L5.15781 9.78004C5.6672 9.97898 6.06118 10.4084 6.21156 10.9401H8.67781C9.7382 10.9401 10.5978 10.0805 10.5978 9.02006V6.34008C9.94223 6.08406 9.47781 5.4463 9.47781 4.70006C9.47781 3.72804 10.2658 2.94006 11.2378 2.94006C12.2098 2.94006 12.9978 3.72804 12.9978 4.70006C12.9978 5.4463 12.5334 6.08406 11.8778 6.34008V9.02006C11.8778 10.7874 10.4451 12.2201 8.67781 12.2201H6.08591C5.79459 12.7899 5.20176 13.1801 4.51781 13.1801C3.54579 13.1801 2.75781 12.3921 2.75781 11.4201C2.75781 10.6738 3.22224 10.0361 3.87781 9.78004L3.87781 6.34008C3.22224 6.08406 2.75781 5.4463 2.75781 4.70006C2.75781 3.72804 3.54579 2.94006 4.51781 2.94006C5.48983 2.94006 6.27781 3.72804 6.27781 4.70006Z" fill="#EDEDF0"/>
</svg>
`
        },
        {
            eyebrow: 'Root directory',
            label: 'homepage/src'
        },
        {
            eyebrow: 'Framework',
            label: 'Next.js',
            icon: `<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.46131 2.22342C7.43378 2.22592 7.3462 2.23467 7.26737 2.24093C5.44934 2.40482 3.74643 3.38563 2.66788 4.89313C2.06729 5.73133 1.68317 6.68212 1.53802 7.6892C1.48672 8.04074 1.48047 8.14458 1.48047 8.62122C1.48047 9.09787 1.48672 9.20171 1.53802 9.55325C1.88586 11.9565 3.59629 13.9757 5.91605 14.7238C6.33146 14.8576 6.76938 14.949 7.26737 15.004C7.46131 15.0253 8.29963 15.0253 8.49357 15.004C9.35316 14.9089 10.0814 14.6963 10.7996 14.3297C10.9097 14.2734 10.9309 14.2584 10.9159 14.2459C10.9059 14.2384 10.4367 13.6091 9.87367 12.8485L8.85017 11.4661L7.56766 9.56826C6.86197 8.52489 6.28141 7.67169 6.2764 7.67169C6.2714 7.67044 6.26639 8.51364 6.26389 9.54324C6.26014 11.346 6.25889 11.4185 6.23636 11.4611C6.20383 11.5224 6.17881 11.5474 6.12626 11.5749C6.08622 11.5949 6.05118 11.5987 5.86225 11.5987H5.64579L5.58823 11.5624C5.55069 11.5386 5.52317 11.5074 5.5044 11.4711L5.47812 11.4148L5.48063 8.90646L5.48438 6.39688L5.52317 6.34809C5.54319 6.32182 5.58573 6.28804 5.61576 6.27177C5.66706 6.24675 5.68708 6.24425 5.90354 6.24425C6.15879 6.24425 6.20133 6.25426 6.26764 6.32682C6.28641 6.34684 6.98084 7.3927 7.81165 8.6525C8.64246 9.9123 9.77857 11.6325 10.3366 12.4769L11.3501 14.0119L11.4014 13.9782C11.8556 13.6829 12.3361 13.2626 12.7164 12.8247C13.526 11.8952 14.0477 10.7618 14.2229 9.55325C14.2742 9.20171 14.2805 9.09787 14.2805 8.62122C14.2805 8.14458 14.2742 8.04074 14.2229 7.6892C13.8751 5.28596 12.1647 3.26678 9.84489 2.51866C9.43574 2.38605 9.00031 2.29472 8.51234 2.23968C8.39222 2.22717 7.56516 2.21341 7.46131 2.22342ZM10.0814 6.09413C10.1414 6.12415 10.1902 6.1817 10.2077 6.24175C10.2178 6.27428 10.2203 6.96985 10.2178 8.53741L10.214 10.7868L9.81736 10.1788L9.41947 9.57076V7.93566C9.41947 6.87853 9.42448 6.28429 9.43198 6.25551C9.452 6.18545 9.4958 6.13041 9.55586 6.09788C9.60716 6.07161 9.62592 6.06911 9.82237 6.06911C10.0075 6.06911 10.0401 6.07161 10.0814 6.09413Z" fill="white"/>
</svg>
`
        },
        {
            eyebrow: 'Domain',
            label: 'https://hello-world.appwrite.global'
        }
    ];

    let eyebrow = $state('');
    let container: HTMLElement;

    const writeEyebrow = async () => {
        await write('Deploy', (v) => (eyebrow = v), 500);
    };

    $effect(() => {
        inView(container, () => {
            writeEyebrow();
        });
    });
</script>

<div class="flex h-fit flex-1 gap-3" bind:this={container}>
    <div class="sticky inset-y-0 top-0 left-0 flex h-full justify-center bg-transparent">
        <div
            class="border-gradient absolute z-10 flex size-4 items-center justify-center rounded-full bg-gradient-to-tl from-transparent to-white/32"
        >
            <div class="size-1 rounded-full bg-white"></div>
        </div>
    </div>
    <div class="flex w-full flex-col gap-8 md:px-8">
        <span class="text-primary text-micro font-aeonik-fono uppercase"
            >{eyebrow}<span class="text-accent">_</span></span
        >

        <div
            class="border-smooth flex aspect-video w-full flex-col rounded-t-3xl border bg-gradient-to-br from-white/10 via-white/5 to-white/10 mask-b-from-0% px-2 pt-2 backdrop-blur-xl"
        >
            <img src={Dashboard} class="h-full w-full rounded-t-2xl" alt="Deployment dashboard" />
        </div>

        <div class="relative z-10 mx-auto -mt-24 flex max-w-md flex-col gap-4 text-center">
            <h2 class="text-title text-primary font-aeonik-pro">Deploy your site</h2>
            <p class="text-secondary text-description font-medium">
                Deploy your Site directly from the Appwrite Console
            </p>
        </div>
    </div>
</div>
