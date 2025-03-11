<script lang="ts">
    const platforms = [
        {
            label: 'GitHub',
            icon: ''
        },
        {
            label: 'Google',
            icon: ''
        },
        {
            label: 'Apple',
            icon: ''
        },
        {
            label: 'Microsoft',
            icon: ''
        }
    ];

    const inputs = [
        {
            label: 'Your name',
            name: 'name',
            value: "Walter O'Brian"
        },
        {
            label: 'Email',
            name: 'email',
            placeholder: 'Enter Email'
        },
        {
            label: 'Create Password',
            name: 'password',
            placeholder: 'Enter Password'
        }
    ];
</script>

<div
    class="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 md:col-span-6"
>
    <div class="space-y-3 pt-2 px-3 pb-4">
        <div class="flex items-center gap-2">
            <img src="/images/icons/illustrated/dark/auth.png" alt="Auth" class="size-7" />
            <h3 class="font-aeonik-pro text-label text-primary">Auth</h3>
        </div>
        <p class="text-sub-body text-primary max-w-lg font-medium">
            <span class="text-secondary"
                >Authenticate users securely with multiple login methods like</span
            > Email/Password, SMS, OAuth, Anonymous, and Magic URLs.
        </p>
    </div>
    <div
        class="relative flex h-[26.25rem] items-center justify-between overflow-clip rounded-xl bg-black/24 px-8"
    >
        <div class="mt-20 grid h-full w-full grid-cols-2 place-items-center">
            <div class="w-full">
                {#each platforms as platform}
                    <button
                        class="flex items-center gap-2 rounded-lg bg-[#19191C] py-2 px-3 text-white"
                    >
                        <img
                            src="/images/icons/gray-colors/{platform.label.toLowerCase()}.svg"
                            alt={platform.label}
                            class="size-5"
                        />
                        <span class="text-micro">{platform.label}</span>
                    </button>
                {/each}
            </div>
            <div
                class="mask bg-greyscale-850 border-smooth flex h-full w-full flex-col rounded-t-[40px] border-t border-x"
                style:--mask-height="150px"
            >
                <div class="mx-2 mt-2 flex-1 rounded-t-4xl bg-[#19191C] pt-4 px-3">
                    <form class="mt-8 flex flex-col gap-3">
                        {#each inputs as input}
                            <div class="flex flex-col gap-1">
                                <label for={input.name} class="text-x-micro text-secondary"
                                    >{input.label}</label
                                >
                                <input
                                    type="text"
                                    name={input.name}
                                    class="border-smooth text-micro w-full rounded-lg bg-[#19191C] py-2 px-3 text-white"
                                    placeholder={input.placeholder}
                                    value={input.value ?? null}
                                />
                            </div>
                        {/each}
                        <button
                            class="text-micro w-full rounded-lg bg-[#7C67FE] py-2 font-medium text-white"
                            >Sign up</button
                        >
                    </form>
                    <span class="text-x-micro text-secondary my-3 block text-center"
                        >or sign up with</span
                    >
                    <button
                        class="text-micro border-smooth flex w-full items-center justify-center gap-3 rounded-lg border py-2 font-medium text-white"
                    >
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_941_108114)">
                                <path
                                    d="M12.0026 6.1338C12.0026 5.64188 11.9617 5.28291 11.8733 4.91064H6.125V7.13092H9.49912C9.43112 7.68269 9.06378 8.51365 8.24743 9.07202L8.23599 9.14635L10.0535 10.5222L10.1794 10.5345C11.3359 9.49084 12.0026 7.95523 12.0026 6.1338Z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M6.11784 11.9832C7.77088 11.9832 9.15862 11.4513 10.1723 10.534L8.24027 9.07148C7.72328 9.42381 7.02938 9.66977 6.11784 9.66977C4.4988 9.66977 3.12466 8.62612 2.63482 7.18359L2.56302 7.18955L0.673152 8.61879L0.648438 8.68593C1.65523 10.6403 3.72326 11.9832 6.11784 11.9832Z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M2.63943 7.18515C2.51018 6.81289 2.43538 6.41401 2.43538 6.00187C2.43538 5.5897 2.51018 5.19085 2.63263 4.81859L2.62921 4.73931L0.715654 3.28711L0.653046 3.31621C0.238098 4.12723 0 5.03797 0 6.00187C0 6.96578 0.238098 7.87647 0.653046 8.68749L2.63943 7.18515Z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M6.11784 2.33142C7.26748 2.33142 8.04298 2.8167 8.48517 3.22223L10.2131 1.57361C9.15187 0.609707 7.77088 0.0180664 6.11784 0.0180664C3.72326 0.0180664 1.65523 1.36088 0.648438 3.31526L2.62802 4.81764C3.12466 3.37511 4.4988 2.33142 6.11784 2.33142Z"
                                    fill="#EB4335"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_941_108114">
                                    <rect width="12" height="12" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        Google</button
                    >
                </div>
            </div>
        </div>
        <div
            class="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"
        />
    </div>
</div>
