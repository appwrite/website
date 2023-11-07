<script lang="ts">
    import { Main } from '$lib/layouts';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';

    import FooterNav from '../../lib/components/FooterNav.svelte';
    import MainFooter from '../../lib/components/MainFooter.svelte';

    const title = 'Terms' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    const APP_NAME = 'Appwrite';
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Desscription -->
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <!-- Image -->
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Main>
    <div class="aw-container">
        <div class="aw-grid-120-1fr-auto">
            <header class="aw-grid-120-1fr-auto-header">
                <h1 class="aw-title aw-u-color-text-primary">Terms and Conditions</h1>
                <button
                    class="u-flex u-width-full-line u-main-space-between u-cross-center
                        aw-u-padding-20 aw-u-color-text-primary aw-is-only-mobile
                       aw-u-margin-inline-32-negative u-margin-block-start-24 aw-u-sep-block"
                    style="inline-size:100vw"
                >
                    <span class="aw-description">Table of contents</span>
                    <span class="icon-menu-alt-4" aria-hidden="true" />
                </button>
            </header>
            <aside class="aw-grid-120-1fr-auto-side aw-is-mobile-closed">
                <div class="aw-page-steps">
                    <div class="aw-page-steps-location aw-is-not-mobile" style="--location:0%;">
                        <button class="aw-page-steps-location-button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_1684_10747)">
                                    <g filter="url(#filter0_b_1684_10747)">
                                        <circle
                                            cx="8"
                                            cy="8"
                                            r="8"
                                            fill="url(#paint0_linear_1684_10747)"
                                            fill-opacity="0.32"
                                        />
                                        <circle
                                            cx="8"
                                            cy="8"
                                            r="7.75"
                                            stroke="url(#paint1_linear_1684_10747)"
                                            stroke-width="0.5"
                                        />
                                    </g>
                                    <circle cx="8" cy="7.99219" r="3" fill="white" />
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_b_1684_10747"
                                        x="-200"
                                        y="-200"
                                        width="416"
                                        height="416"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                    >
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feGaussianBlur
                                            in="BackgroundImageFix"
                                            stdDeviation="100"
                                        />
                                        <feComposite
                                            in2="SourceAlpha"
                                            operator="in"
                                            result="effect1_backgroundBlur_1684_10747"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_backgroundBlur_1684_10747"
                                            result="shape"
                                        />
                                    </filter>
                                    <linearGradient
                                        id="paint0_linear_1684_10747"
                                        x1="2.02105"
                                        y1="1.10843"
                                        x2="16.3872"
                                        y2="17.2901"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="white" stop-opacity="0.4" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint1_linear_1684_10747"
                                        x1="7.45643"
                                        y1="-1.10615"
                                        x2="5.53812"
                                        y2="17.9973"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="white" stop-opacity="0.16" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                    <clipPath id="clip0_1684_10747">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                    <ul class="aw-page-steps-list aw-sub-body-500">
                        <li>
                            <a href="#introduction" class="is-selected">Introduction</a>
                        </li>
                        <li>
                            <a href="#subscriptions">Subscriptions</a>
                        </li>
                        <li>
                            <a href="#fee">Fee Changes</a>
                        </li>
                        <li>
                            <a href="#refunds">Refunds</a>
                        </li>
                        <li>
                            <a href="#content">Content</a>
                        </li>
                        <li>
                            <a href="#accounts">Accounts</a>
                        </li>
                        <li>
                            <a href="#property">Intellectual Property</a>
                        </li>
                        <li>
                            <a href="#other">Links To Other Web Sites</a>
                        </li>
                        <li>
                            <a href="#termination">Termination</a>
                        </li>
                        <li>
                            <a href="#liability">Limitation Of Liability</a>
                        </li>
                        <li>
                            <a href="#disclaimer">Disclaimer</a>
                        </li>
                        <li>
                            <a href="#governingLaw">Governing Law</a>
                        </li>
                        <li>
                            <a href="#contact">Contact us</a>
                        </li>
                    </ul>
                </div>
            </aside>
            <main class="aw-grid-120-1fr-auto-main /aw-is-mobile-closed">
                <div class="aw-content is-count-headers">
                    <section id="introduction">
                        <div>
                            <p>
                                These Terms and Conditions («Terms», «Terms and Conditions») govern
                                your relationship with <a href="/" class="aw-link"
                                    >https://appwrite.io</a
                                > website (the «Service») operated by Appwrite («us», «we», or «our»).
                            </p>

                            <p>
                                Please read these Terms and Conditions carefully before using the
                                Service.
                            </p>

                            <p>
                                Your access to and use of the Service is conditioned on your
                                acceptance of and compliance with these Terms. These Terms apply to
                                all visitors, users and others who access or use the Service.
                            </p>

                            <p>
                                By accessing or using the Service you agree to be bound by these
                                Terms. If you disagree with any part of the terms then you may not
                                access the Service.
                            </p>
                        </div>
                    </section>
                    <section id="subscriptions">
                        <h2 class="aw-title aw-u-color-text-primary">Subscriptions</h2>

                        <p>
                            Some parts of the Service are billed on a subscription basis
                            («Subscription(s)»). You will be billed in advance on a recurring and
                            periodic basis («Billing Cycle»). Billing cycles are set on a monthly
                            basis.
                        </p>

                        <p>
                            At the end of each Billing Cycle, your Subscription will automatically
                            renew under the exact same conditions unless you cancel it or {APP_NAME}
                            cancels it. You may cancel your Subscription renewal either through your
                            online account management page or by contacting
                            {APP_NAME} customer support team.
                        </p>

                        <p>
                            A valid payment method, including credit card or PayPal, is required to
                            process the payment for your Subscription. You shall provide {APP_NAME} with
                            accurate and complete billing information including full name, address, state,
                            zip code, telephone number, and a valid payment method information. By submitting
                            such payment information, you automatically authorize
                            {APP_NAME} to charge all Subscription fees incurred through your account
                            to any such payment instruments.
                        </p>

                        <p>
                            Should automatic billing fail to occur for any reason, {APP_NAME} will issue
                            an electronic invoice indicating that you must proceed manually, within a
                            certain deadline date, with the full payment corresponding to the billing
                            period as indicated on the invoice.
                        </p>
                    </section>
                    <section id="fee">
                        <h2 class="aw-title aw-u-color-text-primary">Fee Changes</h2>

                        <p>
                            {APP_NAME}, in its sole discretion and at any time, may modify the
                            Subscription fees for the Subscriptions. Any Subscription fee change
                            will become effective at the end of the then-current Billing Cycle.
                        </p>

                        <p>
                            {APP_NAME} will provide you with a reasonable prior notice of any change
                            in Subscription fees to give you an opportunity to terminate your Subscription
                            before such change becomes effective.
                        </p>

                        <p>
                            Your continued use of the Service after the Subscription fee change
                            comes into effect constitutes your agreement to pay the modified
                            Subscription fee amount.
                        </p>
                    </section>
                    <section id="refunds">
                        <h2 class="aw-title aw-u-color-text-primary">Refunds</h2>

                        <p>
                            Certain refund requests for Subscriptions may be considered by {APP_NAME}
                            on a case-by-case basis and granted in sole discretion of {APP_NAME}.
                        </p>
                    </section>
                    <section id="content">
                        <h2 class="aw-title aw-u-color-text-primary">Content</h2>

                        <p>
                            Our Service allows you to post, link, store, share and otherwise make
                            available certain information, text, graphics, videos, or other material
                            («Content»). You are responsible for the Content that you post to the
                            Service, including its legality, reliability, and appropriateness.
                        </p>

                        <p>
                            By posting Content to the Service, you grant us the right and license to
                            use, modify, perform, display, reproduce, and distribute such Content on
                            and through the Service. You retain any and all of your rights to any
                            Content you submit, post or display on or through the Service and you
                            are responsible for protecting those rights.
                        </p>

                        <p>
                            You represent and warrant that: (i) the Content is yours (you own it) or
                            you have the right to use it and grant us the rights and license as
                            provided in these Terms, and (ii) the posting of your Content on or
                            through the Service does not violate the privacy rights, publicity
                            rights, copyrights, contract rights or any other rights of any person.
                        </p>
                    </section>

                    <section id="accounts">
                        <h2 class="aw-title aw-u-color-text-primary">Accounts</h2>

                        <p>
                            When you create an account with us, you must provide us information that
                            is accurate, complete, and current at all times. Failure to do so
                            constitutes a breach of the Terms, which may result in immediate
                            termination of your account on our Service.
                        </p>

                        <p>
                            You are responsible for safeguarding the password that you use to access
                            the Service and for any activities or actions under your password,
                            whether your password is with our Service or a third-party service.
                        </p>

                        <p>
                            You agree not to disclose your password to any third party. You must
                            notify us immediately upon becoming aware of any breach of security or
                            unauthorized use of your account.
                        </p>
                    </section>
                    <section id="property">
                        <h2 class="aw-title aw-u-color-text-primary">Intellectual Property</h2>

                        <p>
                            The Service and its original content (excluding Content provided by
                            users), features and functionality are and will remain the exclusive
                            property of {APP_NAME}
                            and its licensors. The Service is protected by copyright, trademark, and
                            other laws of both the Israel and foreign countries. Our trademarks and trade
                            dress may not be used in connection with any product or service without the
                            prior written consent of {APP_NAME}.
                        </p>
                    </section>
                    <section id="other">
                        <h2 class="aw-title aw-u-color-text-primary">Links To Other Web Sites</h2>

                        <p>
                            Our Service may contain links to third-party web sites or services that
                            are not owned or controlled by {APP_NAME}.
                        </p>

                        <p>
                            {APP_NAME} has no control over, and assumes no responsibility for, the content,
                            privacy policies, or practices of any third party web sites or services.
                            You further acknowledge and agree that {APP_NAME} shall not be responsible
                            or liable, directly or indirectly, for any damage or loss caused or alleged
                            to be caused by or in connection with use of or reliance on any such content,
                            goods or services available on or through any such web sites or services.
                        </p>

                        <p>
                            We strongly advise you to read the terms and conditions and privacy
                            policies of any third-party web sites or services that you visit.
                        </p>
                    </section>
                    <section id="termination">
                        <h2 class="aw-title aw-u-color-text-primary">Termination</h2>

                        <p>
                            We may terminate or suspend your account immediately, without prior
                            notice or liability, for any reason whatsoever, including without
                            limitation if you breach the Terms.
                        </p>

                        <p>
                            Upon termination, your right to use the Service will immediately cease.
                            If you wish to terminate your account, you may simply discontinue using
                            the Service.
                        </p>
                    </section>
                    <section id="liability">
                        <h2 class="aw-title aw-u-color-text-primary">Limitation Of Liability</h2>

                        <p>
                            In no event shall {APP_NAME}, nor its directors, employees, partners,
                            agents, suppliers, or affiliates, be liable for any indirect,
                            incidental, special, consequential or punitive damages, including
                            without limitation, loss of profits, data, use, goodwill, or other
                            intangible losses, resulting from (I) your access to or use of or
                            inability to access or use the Service; (II) any conduct or content of
                            any third party on the Service; (III) any content obtained from the
                            Service; and (IV) unauthorized access, use or alteration of your
                            transmissions or content, whether based on warranty, contract, tort
                            (including negligence) or any other legal theory, whether or not we have
                            been informed of the possibility of such damage, and even if a remedy
                            set forth herein is found to have failed of its essential purpose.
                        </p>
                    </section>

                    <section id="disclaimer">
                        <h2 class="aw-title aw-u-color-text-primary">Disclaimer</h2>

                        <p>
                            Your use of the Service is at your sole risk. The Service is provided on
                            an «AS IS» and «AS AVAILABLE» basis. The Service is provided without
                            warranties of any kind, whether express or implied, including, but not
                            limited to, implied warranties of merchantability, fitness for a
                            particular purpose, non-infringement or course of performance.
                        </p>

                        <p>
                            {APP_NAME} its subsidiaries, affiliates, and its licensors do not warrant
                            that a) the Service will function uninterrupted, secure or available at any
                            particular time or location; b) any errors or defects will be corrected;
                            c) the Service is free of viruses or other harmful components; or d) the
                            results of using the Service will meet your requirements.
                        </p>
                    </section>
                    <section id="governingLaw">
                        <h2 class="aw-title aw-u-color-text-primary">Governing Law</h2>

                        <p>
                            These Terms shall be governed and construed in accordance with the laws
                            of Israel, without regard to its conflict of law provisions.
                        </p>

                        <p>
                            Our failure to enforce any right or provision of these Terms will not be
                            considered a waiver of those rights. If any provision of these Terms is
                            held to be invalid or unenforceable by a court, the remaining provisions
                            of these Terms will remain in effect. These Terms constitute the entire
                            agreement between us regarding our Service, and supersede and replace
                            any prior agreements we might have between us regarding the Service.
                        </p>
                    </section>
                    <section id="changes">
                        <h2 class="aw-title aw-u-color-text-primary">Changes</h2>

                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these
                            Terms at any time. If a revision is material we will try to provide at
                            least 30 days notice prior to any new terms taking effect. What
                            constitutes a material change will be determined at our sole discretion.
                        </p>

                        <p>
                            By continuing to access or use our Service after those revisions become
                            effective, you agree to be bound by the revised terms. If you do not
                            agree to the new terms, please stop using the Service.
                        </p>
                    </section>
                    <section id="contact">
                        <h2 class="aw-title aw-u-color-text-primary">Contact Us</h2>

                        <p>
                            If you have any questions about these Terms, please <a
                                href="/contact-us">contact us</a
                            >.
                        </p>
                    </section>
                </div>
            </main>
        </div>
        <FooterNav />
        <MainFooter />
    </div>
</Main>
