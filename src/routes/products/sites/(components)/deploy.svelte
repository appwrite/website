<script lang="ts">
    import Spinner from '$lib/components/shared/spinner.svelte';

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
</script>

<div class="flex w-full flex-col gap-8 md:px-8">
    <span class="text-primary text-micro font-aeonik-fono uppercase"
        >Deploy<span class="text-accent">_</span></span
    >

    <div
        class="mask border-smooth flex aspect-video w-full flex-col rounded-t-3xl border bg-gradient-to-br from-white/10 via-white/5 to-white/10 px-2 pt-2 backdrop-blur-xl"
        style:--mask-height="400px"
    >
        <div class="flex-1 rounded-t-2xl bg-[#1D1D21] px-8 pt-16 md:px-16">
            <header class="flex flex-col justify-between gap-4 pb-10 md:flex-row md:items-center">
                <h2 class="text-primary font-aeonik-pro text-label">Create Site</h2>

                <div
                    class="border-greyscale-800 flex size-8 items-center justify-center gap-1.5 rounded-md border px-1.5 py-0.5"
                >
                    <span class="web-icon-close text-secondary"></span>
                </div>
            </header>
            <div class="grid flex-1 grid-cols-12 gap-8">
                <div class="col-span-8 flex flex-1 flex-col gap-8">
                    <div
                        class="border-smooth flex items-center justify-between gap-3 rounded-lg border p-4"
                    >
                        <div class="flex items-center gap-3">
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.47605 2.56412C9.44164 2.56725 9.33216 2.57819 9.23363 2.58601C6.9611 2.79087 4.83245 4.01689 3.48426 5.90126C2.73353 6.94901 2.25337 8.1375 2.07195 9.39635C2.00782 9.83578 2 9.96557 2 10.5614C2 11.1572 2.00782 11.287 2.07195 11.7264C2.50674 14.7305 4.64477 17.2544 7.54448 18.1896C8.06373 18.3569 8.61114 18.4711 9.23363 18.5399C9.47605 18.5665 10.524 18.5665 10.7664 18.5399C11.8409 18.421 12.7511 18.1552 13.6489 17.697C13.7865 17.6266 13.8131 17.6079 13.7943 17.5922C13.7818 17.5828 13.1953 16.7962 12.4915 15.8455L11.2121 14.1175L9.60899 11.7452C8.72688 10.441 8.00117 9.37446 7.99492 9.37446C7.98866 9.3729 7.98241 10.4269 7.97928 11.7139C7.97459 13.9673 7.97302 14.058 7.94487 14.1112C7.9042 14.1878 7.87292 14.2191 7.80723 14.2535C7.75719 14.2785 7.71339 14.2832 7.47722 14.2832H7.20665L7.1347 14.2379C7.08778 14.2082 7.05337 14.1691 7.02991 14.1237L6.99707 14.0533L7.0002 10.9179L7.00489 7.78095L7.05337 7.71996C7.0784 7.68712 7.13157 7.6449 7.16911 7.62457C7.23324 7.59329 7.25826 7.59017 7.52884 7.59017C7.8479 7.59017 7.90108 7.60268 7.98397 7.69338C8.00743 7.7184 8.87547 9.02573 9.91398 10.6005C10.9525 12.1752 12.3726 14.3254 13.0702 15.381L14.337 17.2998L14.4012 17.2576C14.9689 16.8885 15.5695 16.3631 16.045 15.8157C17.0569 14.6538 17.7091 13.237 17.9281 11.7264C17.9922 11.287 18 11.1572 18 10.5614C18 9.96557 17.9922 9.83578 17.9281 9.39635C17.4933 6.3923 15.3552 3.86833 12.4555 2.93318C11.9441 2.76741 11.3998 2.65326 10.7898 2.58445C10.6397 2.56881 9.60587 2.55161 9.47605 2.56412ZM12.7511 7.40251C12.8262 7.44004 12.8872 7.51198 12.9091 7.58704C12.9216 7.6277 12.9247 8.49717 12.9216 10.4566L12.9169 13.2683L12.4211 12.5083L11.9238 11.7483V9.70442C11.9238 8.38301 11.93 7.64021 11.9394 7.60424C11.9644 7.51667 12.0192 7.44786 12.0942 7.4072C12.1584 7.37436 12.1818 7.37123 12.4274 7.37123C12.6588 7.37123 12.6995 7.37436 12.7511 7.40251Z"
                                    fill="white"
                                />
                            </svg>

                            <h2 class="text-primary text-sm font-medium">Homepage</h2>
                            <div
                                class="border-smooth text-micro text-secondary block rounded-lg border bg-[#19191C] px-2 py-1 font-mono"
                            >
                                6620f370e612829af25a
                            </div>
                        </div>

                        <button
                            class="border-smooth text-secondary block rounded-[10px] border bg-[#19191C] px-2 py-1.5 text-sm font-medium"
                            >Change</button
                        >
                    </div>

                    <div class="border-smooth col-span-4 aspect-video flex-1 rounded-lg border p-2">
                        <span class="text-micro text-secondary -mt-4 block w-fit bg-[#1D1D21] px-2"
                            >Deploy</span
                        >

                        <div class="flex items-center justify-between px-2">
                            <div class="flex items-center gap-2">
                                <h2 class="text-primary py-4 text-sm font-medium">
                                    Deployment logs
                                </h2>
                                <span
                                    class="text-secondary text-micro rounded-lg bg-white/8 px-1.5 py-0.5"
                                    >Building</span
                                >
                            </div>

                            <span class="text-secondary flex items-center gap-2 font-mono text-sm">
                                32s <Spinner class="size-4" paused />
                            </span>
                        </div>

                        <div class="mask mx-2 flex flex-col bg-[#19191C] p-2">
                            {#each [...logs, ...logs] as { time, message }}
                                <div
                                    class="flex items-center gap-2 px-2 font-mono text-sm leading-6"
                                >
                                    <span class="text-secondary">{time}</span>
                                    <span class="text-primary line-clamp-1 font-medium"
                                        >{message}</span
                                    >
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
                <div class="border-smooth col-span-4 h-fit rounded-lg border p-4">
                    <ul class="flex flex-col gap-4">
                        {#each details as { eyebrow, label, icon }}
                            <li class="flex flex-col gap-1">
                                <span class="text-micro text-secondary">{eyebrow}</span>
                                <div class="flex items-center gap-1">
                                    {#if icon}
                                        {@html icon}
                                    {/if}
                                    <span class="text-primary text-sm font-medium">{label}</span>
                                </div>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="relative z-10 mx-auto -mt-24 flex max-w-md flex-col gap-4 pl-12 text-center">
        <h2 class="text-title text-primary font-aeonik-pro">Deploy your site</h2>
        <p class="text-secondary text-description">
            Deploy your Site directly from the Appwrite Console
        </p>
    </div>
</div>
