<script lang="ts">
    const features = [
        {
            label: 'Self-Hosted',
            description: 'Own your data or host it on a cloud region of choice.',
            icon: '/images/icons/gradients/self-hosted.svg'
        },
        {
            label: 'Encryption',
            description: 'Built-in data encryption both in rest and in transit.',
            icon: '/images/icons/gradients/lock.svg'
        },
        {
            label: 'Abuse protection',
            description: 'Protect your APIs from abuse with built-in protection.',
            icon: '/images/icons/gradients/shield.svg'
        },
        {
            label: 'Data migrations',
            description: 'Easily transfer data from 3rd parties or between Cloud and self-hosted.',
            icon: '/images/icons/gradients/database.svg'
        },
        {
            label: 'GDPR',
            description: 'Safeguard user data and privacy with provided GDPR regulations.',
            icon: '/images/icons/gradients/star.svg'
        },
        {
            label: 'SOC-2',
            description: 'Ensure the highest level of security and privacy protection.',
            icon: '/images/icons/gradients/soc-2.svg'
        },
        {
            label: 'HIPAA',
            description: 'Protect sensitive user health data.',
            icon: '/images/icons/gradients/hipaa.svg'
        },
        {
            label: 'CCPA',
            description: 'Protect sensitive user health data.',
            icon: '/images/icons/gradients/ccpa.svg'
        }
    ];
</script>

<div class="light bg-[#EDEDF0] py-20">
    <div class="container mx-auto">
        <section class="flex flex-col items-start md:flex-row">
            <h2 class="text-title-lg font-aeonik-pro text-primary max-w-[700px] text-pretty">
                Self-host or take it to the Cloud<span class="text-accent">_</span>
            </h2>
            <p class="text-secondary text-description mt-4 max-w-xl font-medium">
                Migrate your data from and to any platform at any time with Appwrite’s migrations
                API. With built-in security and privacy for peace of mind.
            </p>
        </section>
    </div>
    <div class="mt-20 border-y border-dashed border-black/8">
        <div class="container grid grid-cols-1 overflow-hidden md:grid-cols-2 lg:grid-cols-4">
            {#each features as box}
                <div
                    class="text-sub-body relative border-b border-dashed border-black/8 p-8 font-medium last-of-type:border-0 nth-of-type-[4]:border-r-0 nth-of-type-[5]:border-b-0 nth-of-type-[6]:border-b-0 nth-of-type-[7]:border-b-0 nth-of-type-[8]:border-b-0 md:border-r md:px-8"
                >
                    <img src={box.icon} width="40" height="40" alt="" />
                    <h3 class="text-primary mt-4 flex flex-wrap items-baseline gap-3">
                        {box.label}
                    </h3>
                    <p class="text-secondary mt-1">
                        {box.description}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</div>
