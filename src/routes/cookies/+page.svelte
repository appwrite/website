<script lang="ts">
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { Main } from '$lib/layouts';
    import { TITLE_SUFFIX } from '$routes/titles';
    import FooterNav from '../../lib/components/FooterNav.svelte';
    import MainFooter from '../../lib/components/MainFooter.svelte';

    const title = 'Cookies' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';
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

<div class="u-position-absolute" style="pointer-events:none;">
    <svg
        class="aw-is-not-mobile"
        xmlns="http://www.w3.org/2000/svg"
        width="1728"
        height="518"
        viewBox="0 0 1728 518"
        fill="none"
    >
        <g opacity="0.12" filter="url(#filter0_f_1684_10385)">
            <ellipse cx="864" rx="805" ry="262" fill="#FD366E" />
        </g>
        <defs>
            <filter
                id="filter0_f_1684_10385"
                x="-196.022"
                y="-517.022"
                width="2120.04"
                height="1034.04"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="127.511" result="effect1_foregroundBlur_1684_10385" />
            </filter>
        </defs>
    </svg>
</div>

<Main>
    <div class="aw-container">
        <div class="aw-grid-120-1fr-auto">
            <header class="aw-grid-120-1fr-auto-header">
                <h1 class="aw-title aw-u-color-text-primary">Cookies Policy</h1>
                <button
                    class="u-flex u-width-full-line aw-u-padding-block-20
                        aw-u-color-text-primary aw-is-only-mobile
                       aw-u-margin-inline-32-negative u-margin-block-start-24 aw-u-sep-block"
                    style="inline-size:100vw"
                >
                    <span
                        class="aw-container u-flex u-width-full-line u-main-space-between u-cross-center"
                    >
                        <span class="aw-description">Table of contents</span>
                        <span class="icon-menu-alt-4" aria-hidden="true" />
                    </span>
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
                            <a href="#whatIsCookie" class="is-selected">What is a cookie?</a>
                        </li>
                        <li>
                            <a href="#web">Web beacons</a>
                        </li>
                        <li>
                            <a href="#targeted">Targeted advertising</a>
                        </li>
                        <li>
                            <a href="#useCookies">How do we use cookies?</a>
                        </li>
                        <li>
                            <a href="#typeCookies">What types of cookies do we use?</a>
                        </li>
                        <li>
                            <a href="#controlCookies">How to control or delete cookies</a>
                        </li>
                        <li>
                            <a href="#thirdCookies">Third-party websites' cookies</a>
                        </li>
                        <li>
                            <a href="#moreInfo">Need more information?</a>
                        </li>
                        <li>
                            <a href="#pastCookies">Cookies that have been set in the past</a>
                        </li>
                        <li>
                            <a href="#contact">Contact us</a>
                        </li>
                    </ul>
                </div>
            </aside>
            <main class="aw-grid-120-1fr-auto-main /aw-is-mobile-closed">
                <div class="aw-content is-count-headers">
                    <section id="">
                        <p>
                            We use in our site
                            <a href="https://appwrite.io/" target="_blank" rel="noopener noreferrer"
                                >Appwrite (https://appwrite.io/)</a
                            >
                            ("<b>Site</b>") cookies and similar files or technologies to
                            automatically collect and store information about your computer, device,
                            and Site usage, in order to improve their performance and enhance your
                            user experience. We use the general term "<b>cookies</b>" in this policy
                            to refer to these technologies and all such similar technologies that
                            collect information automatically when you are using our Site where this
                            policy is posted. You can find out more about cookies and how to control
                            them in the information below.
                        </p>
                        <p>
                            If you do not accept the use of these cookies, please disable them using
                            the instructions in this cookie policy or by changing your browser
                            settings so that cookies from this Site cannot be placed on your
                            computer or mobile device. Important: disabling cookies on this Site may
                            impair certain Site features.
                        </p>
                        <p>
                            io In this Cookies Policy, we use the term Appwio "we", "us" and "our")
                            to refer to Appwrite Code Ltd. Our Privacy Policy is available at
                            <a
                                href="https://appwrite.io/policy/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                                >Appwrite Privacy Policy (https://appwrite.io/policy/privacy)</a
                            >.
                        </p>
                        <section class="u-flex u-flex-vertical u-gap-8" id="whatIsCookie">
                            <h3 class="aw-sub-body-500 aw-u-color-text-primary">
                                What is a cookie?
                            </h3>
                            <p>
                                Cookies are computer files containing small amounts of information
                                which are downloaded to your computer or mobile device when you
                                visit a website. Cookies can then be sent back to the originating
                                website on each subsequent visit, or to another website that
                                recognizes that cookie. Cookies are widely used in order to make
                                websites work, or to work more efficiently, as well as to provide
                                information to the owners of the website.
                            </p>
                        </section>
                        <p>
                            Cookies do lots of different jobs, like letting you navigate between
                            pages efficiently, remembering your preferences, and generally improving
                            the user experience. Cookies may tell us, for example, whether you have
                            visited our Site before or whether you are a new visitor.
                        </p>

                        <div>
                            <p>There are two broad categories of cookies:</p>
                            <ul>
                                <li>
                                    <b>First party cookies</b>, served directly by us to your
                                    computer or mobile device.
                                </li>
                                <li>
                                    <b>Third party cookies</b>, which are served by a third party on
                                    our behalf. We use third-party cookies for functionality,
                                    performance/analytics, marketing, unclassified and other
                                    technologies, and social media purposes. The third-party cookies
                                    are outside of our control. The third parties may, at any time,
                                    change their terms of service, purpose and use of cookies, etc.
                                    See below additional information on how to manage such cookies.
                                </li>
                            </ul>
                        </div>
                        <p>
                            Cookies can remain on your computer or mobile device for different
                            periods of time. Some cookies are 'session cookies', meaning that they
                            exist only while your browser is open. These are deleted automatically
                            once you close your browser. Other cookies are 'permanent cookies',
                            meaning that they survive after your browser is closed. They can be used
                            by websites to recognize your computer when you open your browser and
                            browse the Internet again.
                        </p>
                    </section>
                    <section id="web">
                        <div class="u-flex u-flex-vertical u-gap-8">
                            <div class="u-flex u-flex-vertical u-gap-8">
                                <h3 class="aw-sub-body-500 aw-u-color-text-primary">Web beacons</h3>
                                <p>
                                    Cookies are not the only way to recognize or track visitors to a
                                    website. We may use other, similar technologies from time to
                                    time, like web beacons (sometimes called "tracking pixels" or
                                    "clear gifs"). These are small graphics files that contain a
                                    unique identifier that enable us to recognize when someone has
                                    visited our website. This allows us, for example, to monitor the
                                    traffic patterns of users from one page within our website to
                                    another, to deliver or communicate with cookies, to understand
                                    whether you have come to our website from an online
                                    advertisement displayed on a third-party website, to improve
                                    website performance and to measure the success of email
                                    marketing campaigns. In most instances, these technologies are
                                    reliant on cookies to function, and therefore declining cookies
                                    prevents them from functioning.
                                </p>
                            </div>
                        </div>
                        <p>
                            You may have the right to decide whether to accept or reject cookies.
                            When you access our Site, you are presented with a cookie consent
                            mechanism that allows you to accept or reject cookies that are not
                            essential cookies. You may also control cookies by setting your browser
                            to turn off cookies as described further below. If you turn off cookies,
                            web beacon and other technologies will still detect your visits to our
                            Site; however, they will not be associated with information otherwise
                            stored in cookies.
                        </p>
                    </section>
                    <section id="targeted">
                        <div class="u-flex u-flex-vertical u-gap-8">
                            <h3 class="aw-sub-body-500 aw-u-color-text-primary">
                                Targeted advertising
                            </h3>
                            <p>
                                Third parties may drop cookies on your computer or mobile device to
                                serve advertising through our website. These companies may use
                                information about your visits to this and other websites in order to
                                provide relevant advertisements about goods and services that you
                                may be interested in. They may also employ technology that is used
                                to measure the effectiveness of advertisements. The information
                                collected through this process does not enable us or them to
                                identify your name, contact details or other personally identifying
                                details unless you choose to provide these to us.
                            </p>
                        </div>
                    </section>
                    <section id="useCookies">
                        <div class="u-flex u-flex-vertical u-gap-8">
                            <h3 class="aw-sub-body-500 aw-u-color-text-primary">
                                How do we use cookies?
                            </h3>
                            <p>We use cookies to:</p>
                            <ul>
                                <li>
                                    Track traffic flow and patterns of travel in connection with our
                                    Site;
                                </li>
                                <li>
                                    understand the total number of visitors to our Sites on an
                                    ongoing basis and the types of internet browsers (e.g. Chrome,
                                    Firefox, Safari, or Internet Explorer) and operating systems
                                    (e.g. Windows or Mac) used by our visitors;
                                </li>
                                <li>
                                    monitor the performance of our Site and to continually improve
                                    it; and
                                </li>
                                <li>customize and enhance your online experience.</li>
                            </ul>
                        </div>
                    </section>
                    <section id="typeCookies">
                        <div class="u-flex u-flex-vertical u-gap-8">
                            <h3 class="aw-sub-body-500 aw-u-color-text-primary">
                                What types of cookies do we use?
                            </h3>
                            <p>
                                The types of cookies used by us in connection with the Site can be
                                considered 'essential website cookies', 'functionality cookies',
                                'analytics and performance cookies', 'marketing', 'unclassified',
                                and 'other technologies'. We've set out some further information
                                below, and the purposes of the cookies we set in the following
                                table.
                            </p>
                        </div>
                    </section>
                    <section id="">
                        <h2 class="aw-title aw-u-color-text-primary">
                            Cookies necessary for essential website purposes
                        </h2>
                        <p>
                            These cookies are essential to provide you with services available
                            through this Site and to use some of its features, such as access to
                            secure areas. Without these cookies we will not be able to provide
                            services that you require, such as transactional pages and secure login
                            accounts.
                        </p>
                        <div class="aw-info-table-scroll">
                            <div class="aw-info-table-wrapper">
                                <table class="aw-info-table is-4-equals-columns">
                                    <thead class="aw-info-table-thead">
                                        <tr class="aw-info-table-col-row">
                                            <th class="aw-info-table-col-header">Cookie name</th>
                                            <th class="aw-info-table-col-header">Source</th>
                                            <th class="aw-info-table-col-header"
                                                >Expiry (In days)</th
                                            >
                                            <th class="aw-info-table-col-header">Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody class="aw-info-table-tbody">
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_orig_referrer</td>
                                            <td class="aw-info-table-col">Shopify</td>
                                            <td class="aw-info-table-col">13</td>
                                            <td class="aw-info-table-col"
                                                >This cookie is connection with swag shopping</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_cmp_a</td>
                                            <td class="aw-info-table-col">appwrite.io</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >CMPs are tools that help website owners comply with
                                                privacy regulations by obtaining user consent</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">cookietest</td>
                                            <td class="aw-info-table-col">Shopify</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Checking to see if the browser is set to block or
                                                allow cookies</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">keep_alive</td>
                                            <td class="aw-info-table-col">Shopify</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Ensure that a user remains authenticated and logged
                                                in while navigating different pages or performing
                                                various actions on the website / cart</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">secure_customer_sig</td>
                                            <td class="aw-info-table-col">Shopify</td>
                                            <td class="aw-info-table-col">365</td>
                                            <td class="aw-info-table-col">Customer login</td>
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">XSRF-TOKEN</td>
                                            <td class="aw-info-table-col">Homerun</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Used as a token to mitigate Cross-Site Request
                                                Forgery</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">laravel_session</td>
                                            <td class="aw-info-table-col">Homerun</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Used to store session-specific data and maintain
                                                user state across different requests and pages,
                                                enabling features like user authentication and
                                                personalizing users</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">enforce_policy</td>
                                            <td class="aw-info-table-col">paypal.com</td>
                                            <td class="aw-info-table-col">364</td>
                                            <td class="aw-info-table-col">E-commerce Provision</td>
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">ts_c</td>
                                            <td class="aw-info-table-col">paypal.com</td>
                                            <td class="aw-info-table-col">1094</td>
                                            <td class="aw-info-table-col">E-commerce Provision</td>
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">l7_az</td>
                                            <td class="aw-info-table-col">paypal.com</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col">E-commerce Provision</td>
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">tsrce</td>
                                            <td class="aw-info-table-col">paypal.com</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col">E-commerce Provision</td>
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">x-csrf-jwt</td>
                                            <td class="aw-info-table-col">paypal.com</td>
                                            <td class="aw-info-table-col">6</td>
                                            <td class="aw-info-table-col">E-commerce Provision</td>
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">LANG</td>
                                            <td class="aw-info-table-col">paypal.com</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col">E-commerce Provision</td>
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">__cfruid</td>
                                            <td class="aw-info-table-col">CloudFlare</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Improvement purposes, product analysis and
                                                deployment for our status pages</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">cf_use_ob</td>
                                            <td class="aw-info-table-col"
                                                >CloudFlare Website Security</td
                                            >
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Provides technical functions</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">x-pp-s</td>
                                            <td class="aw-info-table-col">paypal.com</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col">E-commerce Provision</td>
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">nsid</td>
                                            <td class="aw-info-table-col">paypal.com</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col">E-commerce Provision</td>
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">ts</td>
                                            <td class="aw-info-table-col">paypal.com</td>
                                            <td class="aw-info-table-col">1094</td>
                                            <td class="aw-info-table-col">E-commerce Provision</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <section id="">
                        <h2 class="aw-title aw-u-color-text-primary">Functionality cookies</h2>
                        <p>
                            These cookies record information about choices you've made and allow us
                            to tailor the website to you. These cookies allow us to provide you with
                            our services in the way in which you have required, as you continue to
                            use or come back to our Site. For example, these cookies allow us to:
                        </p>
                        <ul>
                            <li>
                                Save your location preference if you have set your location on the
                                homepage in order to receive a localized information;
                            </li>
                            <li>
                                Remember settings you have applied, such as layout, text size,
                                preferences, and colors;
                            </li>
                            <li>Show you when you are logged in; and</li>
                            <li>Store accessibility options.</li>
                        </ul>
                        <div class="aw-info-table-scroll">
                            <div class="aw-info-table-wrapper">
                                <table class="aw-info-table is-4-equals-columns">
                                    <thead class="aw-info-table-thead">
                                        <tr class="aw-info-table-col-row">
                                            <th class="aw-info-table-col-header">Cookie name</th>
                                            <th class="aw-info-table-col-header">Source</th>
                                            <th class="aw-info-table-col-header"
                                                >Expiry (In days)</th
                                            >
                                            <th class="aw-info-table-col-header">Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody class="aw-info-table-tbody">
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">hubspotutk</td>
                                            <td class="aw-info-table-col">Hubspot</td>
                                            <td class="aw-info-table-col">179</td>
                                            <td class="aw-info-table-col"
                                                >User authentication and tracking</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">localization</td>
                                            <td class="aw-info-table-col">betteruptime</td>
                                            <td class="aw-info-table-col">365</td>
                                            <td class="aw-info-table-col"
                                                >These cookies are set on pages with the Flickr
                                                widget</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">ahoy_visitor</td>
                                            <td class="aw-info-table-col">status.appwrite.io</td>
                                            <td class="aw-info-table-col">729</td>
                                            <td class="aw-info-table-col"
                                                >Helps to identify a specific user across multiple
                                                devices</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">__tld__</td>
                                            <td class="aw-info-table-col">appwrite.io</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Figure out a top-level domain for a user</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">wpm-domain-test</td>
                                            <td class="aw-info-table-col">Shopify</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Determine whether the domain is correctly
                                                configured to allow cookies to be set by Shopify</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">initial_params</td>
                                            <td class="aw-info-table-col">Homerun</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Helps Homerun understand how users are finding the
                                                website</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">cf_ob_info</td>
                                            <td class="aw-info-table-col">CloudFlare</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col">Technical functions.</td>
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">cookietest</td>
                                            <td class="aw-info-table-col">Shopify</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >A shopify cookie to ensure their website is working
                                                correctly</td
                                            >
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <section id="">
                        <h2 class="aw-title aw-u-color-text-primary">
                            Performance / Analytics cookies
                        </h2>
                        <p>
                            We use performance/analytics cookies to analyze how the website is
                            accessed, used, or is performing. We do this in order to provide you
                            with a better user experience and to maintain, operate and continually
                            improve the website. For example, these cookies allow us to:
                        </p>
                        <ul>
                            <li>
                                Better understand our website visitors so that we can improve how we
                                present our content
                            </li>
                            <li>
                                Test different design ideas for particular pages, such as our
                                homepage;
                            </li>
                            <li>
                                Collect information about Site visitors such as where they are
                                located and what browsers they are using;
                            </li>
                            <li>Determine the number of unique users of the website;</li>
                            <li>Improve the website by measuring any errors that occur; and</li>
                            <li>Conduct research and diagnostics to improve product offerings.</li>
                        </ul>
                        <div class="aw-info-table-scroll">
                            <div class="aw-info-table-wrapper">
                                <table class="aw-info-table is-4-equals-columns">
                                    <thead class="aw-info-table-thead">
                                        <tr class="aw-info-table-col-row">
                                            <th class="aw-info-table-col-header">Cookie name</th>
                                            <th class="aw-info-table-col-header">Source</th>
                                            <th class="aw-info-table-col-header"
                                                >Expiry (In days)</th
                                            >
                                            <th class="aw-info-table-col-header">Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody class="aw-info-table-tbody">
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_ga_xxxxxxxxxx</td>
                                            <td class="aw-info-table-col"
                                                >JavaScript / Google Analytics</td
                                            >
                                            <td class="aw-info-table-col">729</td>
                                            <td class="aw-info-table-col"
                                                >Gather information about how users interact with
                                                their websites</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">cb_group_id</td>
                                            <td class="aw-info-table-col"
                                                >Clearbit: B2B Marketing Intelligence</td
                                            >
                                            <td class="aw-info-table-col">364</td>
                                            <td class="aw-info-table-col"
                                                >Tracking marketing performance</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">initial_referrer</td>
                                            <td class="aw-info-table-col">Homerun</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Tracking the initial referral source of a visitor
                                                to a website that is using the Homerun platform</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">__hssrc</td>
                                            <td class="aw-info-table-col">HubSpot</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col">Website analytics</td>
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_shopify_d</td>
                                            <td class="aw-info-table-col">Shopify</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col">Shopify analytics</td>
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_s</td>
                                            <td class="aw-info-table-col">Shopify</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Shopify's analytics suite</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_gat</td>
                                            <td class="aw-info-table-col">Google Universal</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Google Universal Analytics - Throttle the request
                                                rate - limiting the collection of data on high
                                                traffic sites</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_shopify_s</td>
                                            <td class="aw-info-table-col">Shopify</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Shopify's analytics suite</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">mp_xxxxxxx_mixpanel</td>
                                            <td class="aw-info-table-col" />
                                            <td class="aw-info-table-col">364</td>
                                            <td class="aw-info-table-col"
                                                >Helps Mixpanel Improve usability</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">ahoy_visit</td>
                                            <td class="aw-info-table-col">BetterStack</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col">Analytics purposes</td>
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col"
                                                >__mp_opt_in_out_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td
                                            >
                                            <td class="aw-info-table-col">Mixpanel</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Helps Mixpanel Improve usability</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_y</td>
                                            <td class="aw-info-table-col">Shopify</td>
                                            <td class="aw-info-table-col">364</td>
                                            <td class="aw-info-table-col"
                                                >Shopify's analytics suite</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">cb%3Atest</td>
                                            <td class="aw-info-table-col"
                                                >Clearbit: B2B Marketing Intelligence</td
                                            >
                                            <td class="aw-info-table-col">364</td>
                                            <td class="aw-info-table-col"
                                                >Tracks page views and traits for Clearbit</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">__hstc</td>
                                            <td class="aw-info-table-col">HubSpot</td>
                                            <td class="aw-info-table-col">179</td>
                                            <td class="aw-info-table-col"
                                                >HubSpot - website analytics</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col"
                                                >ph_phc_Tbfg4EiRsr5iefFoth2Y1Hi3sttTeLQ5RV5TLg4hL1W_posthog</td
                                            >
                                            <td class="aw-info-table-col">Betterstack</td>
                                            <td class="aw-info-table-col">364</td>
                                            <td class="aw-info-table-col"
                                                >Track user behavior across different pages and
                                                interactions, enabling us to analyze user
                                                engagement, usage patterns, and other relevant data</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_shopify_sa_p</td>
                                            <td class="aw-info-table-col">Shopify</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Shopify's analytics suite concerning marketing and
                                                referrals</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_ga</td>
                                            <td class="aw-info-table-col">Google Universal</td>
                                            <td class="aw-info-table-col">729</td>
                                            <td class="aw-info-table-col"
                                                >Distinguish unique users by assigning a randomly
                                                generated number as a client identifier, calculate
                                                visitor, session and campaign data for the sites
                                                analytics reports</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_gid</td>
                                            <td class="aw-info-table-col">Google Universal</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Google Universal Analytics - Store and update a
                                                unique value for each page visited</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_shopify_sa_t</td>
                                            <td class="aw-info-table-col">Shopify</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Shopify's analytics suite</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_s</td>
                                            <td class="aw-info-table-col">Shopify</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Shopify's analytics suite</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_shopify_y</td>
                                            <td class="aw-info-table-col">Shopify</td>
                                            <td class="aw-info-table-col">364</td>
                                            <td class="aw-info-table-col"
                                                >Shopify's analytics suite</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_landing_page</td>
                                            <td class="aw-info-table-col">appwrite.io</td>
                                            <td class="aw-info-table-col">13</td>
                                            <td class="aw-info-table-col"
                                                >Track, report, and analyze landing pages</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_gclxxxx</td>
                                            <td class="aw-info-table-col">Google</td>
                                            <td class="aw-info-table-col">89</td>
                                            <td class="aw-info-table-col"
                                                >Google conversion tracking cookie</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_ga</td>
                                            <td class="aw-info-table-col">Google Universal </td>
                                            <td class="aw-info-table-col">729</td>
                                            <td class="aw-info-table-col"
                                                >Google Universal Analytics - distinguish unique
                                                users by assigning a randomly generated number as a
                                                client identifier, calculate visitor, session and
                                                campaign data for the sites analytics reports</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">__hssc</td>
                                            <td class="aw-info-table-col">appwrite.io/ HubSpot</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col">Website analytics</td>
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_ph</td>
                                            <td class="aw-info-table-col">BetterStack</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col">Analytics</td>
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_lr_uf_-rgthvf</td>
                                            <td class="aw-info-table-col">Logrocket</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Bug tracking and debugging</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_lr5_</td>
                                            <td class="aw-info-table-col">Logrocket</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Bug tracking and debugging</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_lr5_</td>
                                            <td class="aw-info-table-col">Logrocket</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Bug tracking and debugging</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col"
                                                >_lr_hb_-rgthvf%2Fappwrite</td
                                            >
                                            <td class="aw-info-table-col">Logrocket</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Bug tracking and debugging</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col"
                                                >_lr_tabs_-rgthvf%2Fappwrite</td
                                            >
                                            <td class="aw-info-table-col">Logrocket</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Bug tracking and debugging</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">cookiecookie</td>
                                            <td class="aw-info-table-col">Logrocket</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >For debugging actions on our the console</td
                                            >
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <section id="">
                        <h2 class="aw-title aw-u-color-text-primary">Marketing</h2>
                        <p>
                            We use marketing cookies to deliver many types of targeted digital
                            marketing.. We do this in order to provide you with a better user
                            experience and to maintain, operate and continually improve the website.
                            The cookie store user data and behavior information, which allows
                            advertising services to target audience according to variables. For
                            example, these cookies allow us to:
                        </p>
                        <ul>
                            <li>
                                Observe the site performance and generate retargeting (Site
                                retargeting, search retargeting, etc).
                            </li>
                            <li>Maintain and improve the website and our products</li>
                        </ul>
                        <div class="aw-info-table-scroll">
                            <div class="aw-info-table-wrapper">
                                <table class="aw-info-table is-4-equals-columns">
                                    <thead class="aw-info-table-thead">
                                        <tr class="aw-info-table-col-row">
                                            <th class="aw-info-table-col-header">Cookie name</th>
                                            <th class="aw-info-table-col-header">Source</th>
                                            <th class="aw-info-table-col-header"
                                                >Expiry (In days)</th
                                            >
                                            <th class="aw-info-table-col-header">Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody class="aw-info-table-tbody">
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">cb_user_id</td>
                                            <td class="aw-info-table-col"
                                                >Clearbit: B2B Marketing Intelligence</td
                                            >
                                            <td class="aw-info-table-col">364</td>
                                            <td class="aw-info-table-col"
                                                >Tracks page views and traits for Clearbit</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">pt_</td>
                                            <td class="aw-info-table-col">appwrite.io</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col">NA</td>
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_gat_UA-XXXXXX-X</td>
                                            <td class="aw-info-table-col">careers.appwrite.io</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Google Analytics Cookies</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">cb_anonymous_id</td>
                                            <td class="aw-info-table-col"
                                                >Clearbit: B2B Marketing Intelligence</td
                                            >
                                            <td class="aw-info-table-col">364</td>
                                            <td class="aw-info-table-col"
                                                >Tracks page views and traits for Clearbit</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">test_cookie</td>
                                            <td class="aw-info-table-col">doubleclick.net</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Doubleclick - Google's real time bidding
                                                advertising exchange</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">IDE</td>
                                            <td class="aw-info-table-col">doubleclick.net</td>
                                            <td class="aw-info-table-col">389</td>
                                            <td class="aw-info-table-col"
                                                >Doubleclick - Google's real time bidding
                                                advertising exchange</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">__cf_bm</td>
                                            <td class="aw-info-table-col">CloudFlare</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >CloudFlare authentication</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">_fbp</td>
                                            <td class="aw-info-table-col">Facebook</td>
                                            <td class="aw-info-table-col">89</td>
                                            <td class="aw-info-table-col"
                                                >Advertisement products from third party advertisers</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">bcookie</td>
                                            <td class="aw-info-table-col">LinkedIn</td>
                                            <td class="aw-info-table-col">364</td>
                                            <td class="aw-info-table-col"
                                                >Content sharing buttons</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">UserMatchHistory</td>
                                            <td class="aw-info-table-col">LinkedIn</td>
                                            <td class="aw-info-table-col">29</td>
                                            <td class="aw-info-table-col"
                                                >Content sharing buttons</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">personalization_id</td>
                                            <td class="aw-info-table-col">Twitter</td>
                                            <td class="aw-info-table-col">729</td>
                                            <td class="aw-info-table-col"
                                                >Collects data through a range of plug-ins and
                                                integrations, that is primarily used for tracking
                                                and targeting</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">lidc</td>
                                            <td class="aw-info-table-col">LinkedIn</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Content sharing buttons</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">li_sugr</td>
                                            <td class="aw-info-table-col">LinkedIn</td>
                                            <td class="aw-info-table-col">89</td>
                                            <td class="aw-info-table-col"
                                                >Content sharing buttons</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">AnalyticsSyncHistory</td>
                                            <td class="aw-info-table-col">LinkedIn</td>
                                            <td class="aw-info-table-col">29</td>
                                            <td class="aw-info-table-col"
                                                >Content sharing buttons</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">muc_ads</td>
                                            <td class="aw-info-table-col">Twitter</td>
                                            <td class="aw-info-table-col">729</td>
                                            <td class="aw-info-table-col"
                                                >Optimizes ads on the website</td
                                            >
                                        </tr>
                                        <tr class="aw-info-table-col-row">
                                            <td class="aw-info-table-col">ln_or</td>
                                            <td class="aw-info-table-col">Linkedin</td>
                                            <td class="aw-info-table-col">Session</td>
                                            <td class="aw-info-table-col"
                                                >Used to determine if Oribi analytics can be carried
                                                out on a specific domain</td
                                            >
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <section id="controlCookies">
                        <div class="u-flex u-flex-vertical u-gap-8">
                            <h3 class="aw-sub-body-500 aw-u-color-text-primary">
                                How to control or delete cookies
                            </h3>
                            <p>
                                You may have the right to decide whether to accept or reject
                                cookies. When you access our Site, you are presented with a cookie
                                consent mechanism that allows you to accept or reject cookies that
                                are not essential cookies.
                            </p>
                        </div>
                        <p>
                            As another way of controlling cookies, most browsers allow you to change
                            your cookie settings. These settings will typically be found in the
                            “options” or “preferences” menu of your browser. In order to understand
                            these settings and learn how to use them, please consult the “Help”
                            function of your browser, or the documentation published online for your
                            particular browser type and version.
                        </p>
                        <p>
                            However, please note that if you choose to refuse cookies you may not be
                            able to use the full functionality of our Site.
                        </p>

                        <div class="u-flex u-flex-vertical u-gap-8">
                            <p>
                                The following pages have information on how to change your cookies
                                settings for the different browsers:
                            </p>
                            <ul>
                                <li>
                                    <a
                                        href="https://support.google.com/chrome/answer/95647?hl=en&ref_topic=14666"
                                        target="_blank"
                                        rel="noopener noreferrer">Cookie settings in Chrome</a
                                    >
                                    and
                                    <a
                                        href="https://support.google.com/chrome/answer/95647?hl=en"
                                        target="_blank"
                                        rel="noopener noreferrer">Chrome mobile</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&redirectslug=Cookies"
                                        target="_blank"
                                        rel="noopener noreferrer">Cookie settings in Firefox</a
                                    >
                                    and
                                    <a
                                        href="https://support.mozilla.org/en-US/kb/clearing-cookies-private-data-history-and-settings"
                                        target="_blank"
                                        rel="noopener noreferrer">Firefox mobile</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d#ie=ie-10"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >Cookie settings in Internet Explorer</a
                                    >
                                    and
                                    <a
                                        href="https://support.microsoft.com/en-gb/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                                        target="_blank"
                                        rel="noopener noreferrer">Microsoft Edge</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                                        target="_blank"
                                        rel="noopener noreferrer">Cookie settings in Safari</a
                                    >
                                    and
                                    <a
                                        href="https://support.apple.com/en-gb/HT201265"
                                        target="_blank"
                                        rel="noopener noreferrer">Safari mobile</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://support.apple.com/en-gb/HT201265"
                                        target="_blank"
                                        rel="noopener noreferrer">Cookie settings in iOS</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://help.opera.com/en/latest/web-preferences/"
                                        target="_blank"
                                        rel="noopener noreferrer">Cookie settings in Opera</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://support.apple.com/en-gb/safari"
                                        target="_blank"
                                        rel="noopener noreferrer">Cookie settings in Apple Safari</a
                                    >
                                </li>
                            </ul>
                        </div>

                        <p>
                            If you use another browser, you can check if the procedure for your
                            browser is mentioned in
                            <a
                                href="https://allaboutcookies.org/how-to-manage-cookies"
                                target="_blank"
                                rel="noopener noreferrer">this explanatory website</a
                            >.
                        </p>

                        <p>
                            To opt out of being tracked by Google Analytics across all websites,
                            visit
                            <a
                                href="https://tools.google.com/dlpage/gaoptout"
                                target="_blank"
                                rel="noopener noreferrer">here</a
                            >.
                        </p>
                    </section>
                    <section id="thirdCookies">
                        <div class="u-flex u-flex-vertical u-gap-8">
                            <h3 class="aw-sub-body-500 aw-u-color-text-primary">
                                Third party websites' cookies
                            </h3>
                            <p>
                                When using our website, you may be directed to other websites for
                                such activities as surveys, to make payment in currency other than
                                U.S. dollars, or for job applications. These websites may use their
                                own cookies. We do not have control over the placement of cookies by
                                other websites you visit, even if you are directed to them from our
                                website.
                            </p>
                        </div>

                        <div class="u-flex u-flex-vertical u-gap-8">
                            <p>
                                If you use the buttons that allow you to share products and content
                                with your friends via social networks like Google, YouTube,Twitter
                                and Facebook, these companies may set a cookie on your computer
                                memory. Find out more about these here:
                            </p>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                                        target="_blank"
                                        rel="noopener noreferrer">Facebook</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com/en/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer">Twitter</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://policies.google.com/privacy?hl=en-GB"
                                        target="_blank"
                                        rel="noopener noreferrer">Google</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                                        target="_blank"
                                        rel="noopener noreferrer">GitHub</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://betterstack.com/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer">Betterstack</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://legal.hubspot.com/privacy-policy"
                                        target="_blank"
                                        rel="noopener noreferrer">Hubspot</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://www.shopify.com/legal/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer">Shopify</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://homerun.app/privacy-policy/"
                                        target="_blank"
                                        rel="noopener noreferrer">Homerun</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://www.paypal.com/us/legalhub/privacy-full"
                                        target="_blank"
                                        rel="noopener noreferrer">Paypal</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://logrocket.com/privacy/"
                                        target="_blank"
                                        rel="noopener noreferrer">Logrocket</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/legal/privacy-policy"
                                        target="_blank"
                                        rel="noopener noreferrer">Linkedin</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://mixpanel.com/legal/privacy-policy"
                                        target="_blank"
                                        rel="noopener noreferrer">Mixpanel</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://dashboard.clearbit.com/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer">Clearbit</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section id="moreInfo">
                        <div class="u-flex u-flex-vertical u-gap-8">
                            <h3 class="aw-sub-body-500 aw-u-color-text-primary">
                                Need more information?
                            </h3>
                            <p>
                                If you would like to find out more about cookies and their use on
                                the Internet, you may find the following link useful: <a
                                    href="https://allaboutcookies.org/"
                                    target="_blank"
                                    rel="noopener noreferrer">All about cookies</a
                                >.
                            </p>
                        </div>
                    </section>

                    <section id="pastCookies">
                        <div class="u-flex u-flex-vertical u-gap-8">
                            <h3 class="aw-sub-body-500 aw-u-color-text-primary">
                                Cookies that have been set in the past
                            </h3>
                            <p>
                                If you have disabled one or more Cookies, we may still use
                                information collected from cookies prior to your disabled preference
                                being set, however, we will stop using the disabled cookie to
                                collect any further information.
                            </p>
                        </div>
                    </section>

                    <section id="contact">
                        <div class="u-flex u-flex-vertical u-gap-8">
                            <h3 class="aw-sub-body-500 aw-u-color-text-primary">Contact us</h3>
                            <p>
                                If you have any questions or comments about this cookies policy, or
                                privacy matters generally, please contact us via email at
                                <a
                                    href="mailto:privacy@appwrite.io"
                                    target="_blank"
                                    rel="noopener noreferrer">privacy@appwrite.io</a
                                >.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>

        <FooterNav />
        <MainFooter />
    </div>
</Main>
