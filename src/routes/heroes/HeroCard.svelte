<script lang="ts" context="module">
    export type HeroCardProps = {
        name: string;
        role: string;
        bio: string;
        github?: string;
        twitter?: string;
        linkedin?: string;
        avatar: string;
    };
</script>

<script lang="ts">
    type $$Props = HeroCardProps;

    export let name: $$Props['name'];
    export let role: $$Props['role'];
    export let bio: $$Props['bio'];
    export let github: $$Props['github'] = undefined;
    export let twitter: $$Props['twitter'] = undefined;
    export let linkedin: $$Props['linkedin'] = undefined;
    export let avatar: $$Props['avatar'];
</script>

<div class="web-card is-white light">
    <div class="web-social-item flex flex-col">
        <div class="flex justify-between gap-4">
            <div class="web-user-box">
                <img class="web-user-box-image" src={avatar} alt="" />
                <div class="web-user-box-name text-sub-body web-clr-primary font-medium">
                    {name}
                </div>
                <div class="web-user-box-username text-sub-body">{role}</div>
            </div>
        </div>
        <p class="text-sub-body web-u-text-color-neutral-700 mt-5 font-medium">
            {bio}
        </p>
        <ul class="mt-8 flex gap-3">
            <li>
                <a
                    class="web-icon-button"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                >
                    <span class="web-icon-github" aria-hidden="true"></span>
                </a>
            </li>
            <li>
                <a
                    class="web-icon-button"
                    href={twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X profile"
                >
                    <span class="web-icon-x" aria-hidden="true"></span>
                </a>
            </li>
            <li>
                <a
                    class="web-icon-button"
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                >
                    <span class="web-icon-linkedin" aria-hidden="true"></span>
                </a>
            </li>
        </ul>
    </div>
</div>

<style lang="scss">
    .web-card {
        --p-card-padding: 1.25rem;
    }
</style>
