<script lang="ts">
    import { Root, Slide } from '$lib/components/carousel';

    const testimonials = [
        {
            name: 'Ryan O’Conner',
            copy: `The switch to using Appwrite brought infinite value that I'm still discovering today, but a major impact that it made was the amount of time and stress that it saved me as it simply just works.`,
            image: '/',
            title: 'Founder',
            company: 'K-Collect'
        },
        {
            name: 'Ryan O’Conner',
            copy: `The switch to using Appwrite brought infinite value that I'm still discovering today, but a major impact that it made was the amount of time and stress that it saved me as it simply just works.`,
            image: '/',
            title: 'Founder',
            company: 'K-Collect'
        },
        {
            name: 'Ryan O’Conner',
            copy: `The switch to using Appwrite brought infinite value that I'm still discovering today, but a major impact that it made was the amount of time and stress that it saved me as it simply just works.`,
            image: '/',
            title: 'Founder',
            company: 'K-Collect'
        },
        {
            name: 'Ryan O’Conner',
            copy: `The switch to using Appwrite brought infinite value that I'm still discovering today, but a major impact that it made was the amount of time and stress that it saved me as it simply just works.`,
            image: '/',
            title: 'Founder',
            company: 'K-Collect'
        },
        {
            name: 'Ryan O’Conner',
            copy: `The switch to using Appwrite brought infinite value that I'm still discovering today, but a major impact that it made was the amount of time and stress that it saved me as it simply just works.`,
            image: '/',
            title: 'Founder',
            company: 'K-Collect'
        }
    ];
</script>

<div class="light flex justify-center gap-3">
    <Root
        showBullets={false}
        showArrows={false}
        showGradient={false}
        autoScrollOptions={{
            active: true,
            speed: 0.5
        }}
    >
        {#each testimonials as testimonial}
            <Slide class="md:flex-[0_0_25%]">
                <div class="w-full rounded-2xl bg-white p-5">
                    <p class="text-sub-body text-secondary font-medium">{testimonial.copy}</p>
                    <span class="text-sub-body text-secondary"
                        >{testimonial.name} // {testimonial.company}</span
                    >
                </div>
            </Slide>
        {/each}
    </Root>
</div>
