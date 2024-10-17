<script lang="ts">
    const testimonials = [
        {
            name: 'Kap.ts',
            username: '@Kaperskyguru',
            avatar: '/images/community/avatars/kap.png',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices lacus.'
        },
        {
            name: 'Kap.ts',
            username: '@Kaperskyguru',
            avatar: '/images/community/avatars/kap.png',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices lacus.'
        },
        {
            name: 'Kap.ts',
            username: '@Kaperskyguru',
            avatar: '/images/community/avatars/kap.png',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices lacus.'
        }
    ];
</script>

<div class="relative">
    <div class="container">
        <ul class="grid gap-8 md:grid-cols-3">
            {#each testimonials as testimonial}
                <li class="flex flex-col gap-5">
                    <div class="web-card is-white flex flex-col gap-5">
                        <q>{testimonial.quote}</q>
                        <div class="web-user-box">
                            <img
                                class="web-user-box-image"
                                src={testimonial.avatar}
                                alt="Avatar of {testimonial.name}"
                                height="48"
                                width="48"
                            />
                            <div class="web-user-box-name web-sub-body-500">{testimonial.name}</div>
                            <div class="web-user-box-username web-sub-body-400">
                                {testimonial.username}
                            </div>
                        </div>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</div>
