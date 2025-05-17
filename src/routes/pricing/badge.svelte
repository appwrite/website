<script lang="ts">
    import SitesIcon from './sites_icon.png?enhanced';

    export let text: string;
</script>

<a class="outer-container group" href="/products/sites">
    <div class="outer">
        <enhanced:img src={SitesIcon} alt="auth" width="24" height="24" />
        <p class="text">{text}</p>
        <span class="web-icon-chevron-right transition-transform group-hover:translate-x-0.5"
        ></span>
    </div>

    <div class="pricing-info">Pricing will be revealed July 1st, 2025</div>
</a>

<style lang="scss">
    .outer-container {
        gap: 0.5rem;
        display: flex;
        margin-top: 2rem;
        align-self: center;
        flex-direction: column;
    }

    .outer {
        display: flex;
        padding: 6px 12px 6px 8px;
        align-items: center;
        gap: 9px;
        width: fit-content;

        border-radius: 999px;
        border: 1.002px solid var(--offset, rgba(255, 255, 255, 0.1));
        background: var(--smooth, rgba(255, 255, 255, 0.06));
    }

    .text {
        text-align: center;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: -0.072px;
        color: var(--color-bw-white, #fff);
    }

    .pricing-info {
        text-align: center;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: -0.063px;
    }
</style>
