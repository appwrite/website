<script lang="ts">
    import KCollect from '../(assets)/k-collect.png';

    const testimonials = [
        {
            name: 'Ryan O’Conner',
            copy: `The switch to using Appwrite brought infinite value that I'm still discovering today, but a major impact that it made was the amount of time and stress that it saved me as it simply just works.`,
            image: KCollect,
            title: 'Founder',
            company: 'K-Collect'
        },
        {
            name: 'Ryan O’Conner',
            copy: `The switch to using Appwrite brought infinite value that I'm still discovering today, but a major impact that it made was the amount of time and stress that it saved me as it simply just works.`,
            image: KCollect,
            title: 'Founder',
            company: 'K-Collect'
        },
        {
            name: 'Ryan O’Conner',
            copy: `The switch to using Appwrite brought infinite value that I'm still discovering today, but a major impact that it made was the amount of time and stress that it saved me as it simply just works.`,
            image: KCollect,
            title: 'Founder',
            company: 'K-Collect'
        },
        {
            name: 'Ryan O’Conner',
            copy: `The switch to using Appwrite brought infinite value that I'm still discovering today, but a major impact that it made was the amount of time and stress that it saved me as it simply just works.`,
            image: KCollect,
            title: 'Founder',
            company: 'K-Collect'
        },
        {
            name: 'Ryan O’Conner',
            copy: `The switch to using Appwrite brought infinite value that I'm still discovering today, but a major impact that it made was the amount of time and stress that it saved me as it simply just works.`,
            image: KCollect,
            title: 'Founder',
            company: 'K-Collect'
        },
        {
            name: 'Ryan O’Conner',
            copy: `The switch to using Appwrite brought infinite value that I'm still discovering today, but a major impact that it made was the amount of time and stress that it saved me as it simply just works.`,
            image: KCollect,
            title: 'Founder',
            company: 'K-Collect'
        },
        {
            name: 'Ryan O’Conner',
            copy: `The switch to using Appwrite brought infinite value that I'm still discovering today, but a major impact that it made was the amount of time and stress that it saved me as it simply just works.`,
            image: KCollect,
            title: 'Founder',
            company: 'K-Collect'
        },
        {
            name: 'Ryan O’Conner',
            copy: `The switch to using Appwrite brought infinite value that I'm still discovering today, but a major impact that it made was the amount of time and stress that it saved me as it simply just works.`,
            image: KCollect,
            title: 'Founder',
            company: 'K-Collect'
        }
    ];
</script>

<div class="overflow-hidden">
    <div class="light animate-scroll flex w-[200vw] items-center justify-center">
        {#each testimonials as testimonial}
            <div
                class="mr-4 rounded-2xl bg-white p-5"
                style:width={`${200 / testimonials.length}vw`}
            >
                <p class="text-sub-body text-secondary font-medium">{testimonial.copy}</p>

                <div class="mt-4 flex items-center gap-3">
                    <img
                        src={testimonial.image}
                        class="size-12 rounded-full"
                        alt="{testimonial.company} Logo"
                    />
                    <div>
                        <span class="text-secondary text-sub-body block font-medium">
                            {testimonial.name}
                        </span>
                        <span class="text-sub-body text-secondary block"
                            >{testimonial.title} // {testimonial.company}</span
                        >
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
