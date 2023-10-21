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

<div class="aw-card is-white theme-light">
    <div class="aw-social-item u-flex-vertical">
        <div class="u-flex u-gap-16 u-main-space-between">
            <div class="aw-user-box">
                <img class="aw-user-box-image" src={avatar} alt="" />
                <div class="aw-user-box-name aw-sub-body-500 aw-clr-primary">{name}</div>
                <div class="aw-user-box-username aw-sub-body-400">{role}</div>
            </div>
        </div>
        <p class="aw-sub-body-500 aw-u-text-color-neutral-700 u-margin-block-start-20">{bio}</p>
        <ul class="u-flex u-gap-12 u-margin-block-start-32">
            <li>
                <a
                    class="aw-icon-button"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                >
                    <span class="aw-icon-github" aria-hidden="true" />
                </a>
            </li>
            <li>
                <a
                    class="aw-icon-button"
                    href={twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X profile"
                >
                    <span class="aw-icon-x" aria-hidden="true" />
                </a>
            </li>
            <li>
                <a
                    class="aw-icon-button"
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                >
                    <span class="aw-icon-linkedin" aria-hidden="true" />
                </a>
            </li>
        </ul>
    </div>
</div>

<style lang="scss">
    .aw-card {
        --p-card-padding: 1.25rem;
    }
</style>
