<script lang="ts">
    import { toScale } from '$lib/utils/toScale';
    import { postController } from '.';
    import { elId } from '../Products.svelte';

    const {
        state: { authentication, bandwidth, databases, executions, requests, storage, realtime }
    } = postController;

    const formatK = (num: number) => {
        if (num > 999) {
            return `${(num / 1000).toFixed(1)}K`;
        }
        return Math.floor(num);
    };
</script>

<div class="gradient-box auth" id="post-auth-{$elId}">
    <div class="flex items-center gap-2">
        <p class="icon-user-group"></p>
        <p class="f-eyebrow">Authentication</p>
    </div>
    <p class="f-display mbs-16">
        {formatK(toScale($authentication, [0, 1], [0, 4000]))}
    </p>
    <div class="mbs-4 flex items-center justify-between">
        <p class="f-sub">Users</p>
        <p class="f-idk">Sessions: 20K</p>
    </div>
</div>

<div class="gradient-box storage" id="post-storage-{$elId}">
    <div class="flex items-center gap-2">
        <p class="icon-folder"></p>
        <p class="f-eyebrow">Storage</p>
    </div>
    <p class="f-display mbs-16">
        {toScale($storage, [0, 1], [0, 8]).toFixed(1)}
        <span class="f-tiny-display">GB</span>
    </p>
    <div class="mbs-4 flex items-center justify-between">
        <p class="f-sub">Storage</p>
        <p class="f-idk">Buckets: 44</p>
    </div>
</div>

<div class="gradient-box bandwidth" id="post-bandwidth-{$elId}">
    <p class="f-display">
        {toScale($bandwidth, [0, 1], [0, 1.2]).toFixed(2)}
        <span class="f-tiny-display">GB</span>
    </p>
    <p class="f-sub">Bandwidth</p>
    <img class="mbs-16" src="./images/animations/bandwidth-graph.svg" alt="" />
</div>

<div class="gradient-box functions" id="post-functions-{$elId}">
    <div class="flex items-center gap-2">
        <p class="icon-lightning-bolt"></p>
        <p class="f-eyebrow">Functions</p>
    </div>
    <p class="f-display mbs-16">
        {toScale($executions, [0, 1], [0, 846]).toFixed(0)}
    </p>
    <div class="mbs-4 flex items-center justify-between">
        <p class="f-sub">Executions</p>
    </div>
</div>

<div class="gradient-box databases" id="post-databases-{$elId}">
    <div class="flex items-center gap-2">
        <p class="icon-database"></p>
        <p class="f-eyebrow">Databases</p>
    </div>
    <p class="f-display mbs-16">
        {toScale($databases, [0, 1], [0, 8]).toFixed(0)}
    </p>
    <div class="mbs-4 flex items-center justify-between">
        <p class="f-sub">Databases</p>
        <p class="f-idk">Documents: 20</p>
    </div>
</div>

<div class="gradient-box requests" id="post-requests-{$elId}">
    <p class="f-display">{formatK(toScale($requests, [0, 1], [0, 6849]))}</p>
    <p class="f-sub">Requests</p>
    <img class="mbs-16" src="./images/animations/requests-graph.svg" alt="" />
</div>

<div class="gradient-box realtime" id="post-realtime-{$elId}">
    <p class="f-display">{formatK(toScale($realtime, [0, 1], [0, 100000]))}</p>
    <p class="f-sub">Realtime connections</p>
    <img class="mbs-16" src="./images/animations/realtime-graph.svg" alt="" />
</div>

<div class="gradient-overlay flex flex-col">
    <h3>See your products grow</h3>
    <p>
        Keep track of your projects progress on the Appwrite Console and see them grow into products
        users love and use every day.
    </p>
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    // Utilities
    .f-eyebrow {
        color: #adadb0;
        /* Eyebrow headings/level 3 */
        font-family: Inter;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 1.125rem */
        letter-spacing: 0.09rem;
        text-transform: uppercase;
    }

    .f-display {
        color: #ededf0;
        font-family: Aeonik Pro;
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2.25rem; /* 112.5% */
    }

    .f-tiny-display {
        color: var(--greyscale-50, #ededf0);
        text-align: center;
        font-family: Inter;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1rem; /* 114.286% */
    }

    .f-sub {
        color: #97979b;
        font-family: Inter;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.125rem; /* 128.571% */
    }

    .f-idk {
        color: var(--primary, #e4e4e7);
        text-align: right;
        font-family: Inter;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 1.3125rem */
        opacity: 40%;
    }

    .mbs-16 {
        margin-block-start: 1rem;
    }

    .mbs-4 {
        margin-block-start: 0.25rem;
    }

    .justify-between {
        justify-content: space-between;
    }

    // Components
    .gradient-box {
        @include gradients.border-gradient;
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0) 125.11%
        );
        --m-border-radius: 1rem;

        position: absolute;
        background: var(--card, rgba(35, 35, 37, 0.9));
        box-shadow:
            0px 0px 0px 0px rgba(0, 0, 0, 0.06),
            -2px 4px 9px 0px rgba(0, 0, 0, 0.06),
            -8px 15px 17px 0px rgba(0, 0, 0, 0.05),
            -19px 34px 23px 0px rgba(0, 0, 0, 0.03),
            -33px 60px 27px 0px rgba(0, 0, 0, 0.01),
            -52px 94px 30px 0px rgba(0, 0, 0, 0);
        backdrop-filter: blur(8px);

        padding: 1.5rem;

        z-index: 9999;

        min-width: 20rem;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .gradient-overlay {
        position: absolute;
        z-index: 100;
        bottom: -7.5rem;
        width: 100%;
        height: 30rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.25rem;

        padding-block-start: 15rem;

        opacity: 0;
        animation: fadeIn 0.75s ease-in-out 1.5s forwards;

        &::before {
            content: '';
            inset: 0;
            position: absolute;
            //background: #19191d; // old bg
            //filter: blur(125px); // break Safari
            background: #19191dcc;
            filter: blur(67px);
        }

        h3 {
            position: relative;
            color: var(--primary, #e4e4e7);
            text-align: center;

            /* Desktop/Display */
            font-family: Aeonik Pro;
            font-size: 4rem;
            font-style: normal;
            font-weight: 400;
            line-height: 4.25rem; /* 106.25% */
            letter-spacing: -0.04rem;
        }

        p {
            position: relative;

            color: var(--secondary, #adadb0);
            text-align: center;

            /* Desktop/Description */
            font-family: Inter;
            font-size: 1.25rem;
            font-style: normal;
            font-weight: 500;
            line-height: 1.75rem; /* 140% */
            letter-spacing: -0.0175rem;
            max-width: 40rem;
            text-align: center;
        }
    }

    // Specifics
    .auth {
        opacity: 0;
        left: 4rem;
        top: -11rem;
    }

    .storage {
        opacity: 0;
        left: -10rem;
        top: -2rem;
    }

    .bandwidth {
        opacity: 0;
        left: -4rem;
        top: 11rem;
    }

    .functions {
        opacity: 0;
        left: -6rem;
        top: 35rem;
    }

    .databases {
        opacity: 0;
        top: -13rem;
        right: 10rem;
    }

    .requests {
        opacity: 0;
        top: 17rem;
        right: -18rem;
    }

    .realtime {
        opacity: 0;
        top: -1rem;
        right: -7rem;
    }
</style>
