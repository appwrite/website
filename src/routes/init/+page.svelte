<script lang="ts">
    import { Main } from '$lib/layouts';
</script>

<Main>
    <div class="hero">
        <img src="/images/logos/init.svg" alt="init" />
        <p class="aw-description">
            Appwrite is unveiling new features over a week of exciting announcements
        </p>
        <div class="buttons">
            <div class="aw-button">Get your ticket</div>
            <div class="aw-button is-secondary">Blog announcement</div>
        </div>
    </div>
</Main>

<style lang="scss">
    .hero {
        min-height: 500px;
        height: 70dvh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        p {
            max-width: 23.125rem;
            text-align: center;
        }

        .buttons {
            display: flex;
            gap: 0.5rem;

            padding-block-start: 1rem;
        }
    }
</style>
