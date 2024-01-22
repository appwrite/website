import type { TicketData } from '$routes/init/ticket/constants';
import { getCubes } from './helpers';

export const getPinkSvg = async (ticket: TicketData) => {
    const cubes = await getCubes(ticket);

    return `
    <svg width="438" height="249" viewBox="0 0 438 249" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_26_8009)">
<g clip-path="url(#clip0_26_8009)">
<rect width="438" height="249" rx="18" fill="#19191C"/>
<rect width="438" height="249" rx="18" fill="url(#paint0_linear_26_8009)" fill-opacity="0.64"/>
<g filter="url(#filter1_f_26_8009)">
<rect x="218.252" y="22.9998" width="196.251" height="274.751" rx="6.82611" fill="url(#paint1_linear_26_8009)"/>
<rect x="218.465" y="23.2131" width="195.824" height="274.324" rx="6.6128" stroke="#FD366E" stroke-width="0.426632"/>
</g>
<g filter="url(#filter2_d_26_8009)">
<g clip-path="url(#clip1_26_8009)">
<g filter="url(#filter3_b_26_8009)">
<rect x="218.25" y="22.9995" width="196.251" height="274.751" rx="6.82611" fill="#FD366E" fill-opacity="0.12"/>
<rect x="218.463" y="23.2128" width="195.824" height="274.324" rx="6.6128" stroke="url(#paint2_linear_26_8009)" stroke-opacity="0.48" stroke-width="0.426632"/>
<rect x="218.463" y="23.2128" width="195.824" height="274.324" rx="6.6128" stroke="url(#paint3_linear_26_8009)" stroke-width="0.426632"/>
</g>
<text transform="translate(232.333 46.891)" fill="white" xml:space="preserve" style="white-space: pre" font-family="Aeonik Pro" font-size="17.0653" letter-spacing="-0.01em"><tspan x="0" y="15.6147">${
        ticket.name
    }</tspan></text>
<text transform="translate(232.333 67.5975)" fill="white" fill-opacity="0.64" xml:space="preserve" style="white-space: pre" font-family="Aeonik Pro" font-size="10.2392" letter-spacing="0em"><tspan x="0" y="9.71014">${
        ticket.gh_user ? `@${ticket.gh_user}` : ''
    }</tspan></text>
<path fill-rule="evenodd" clip-rule="evenodd" d="M272.469 158.393C284.092 160.811 294.402 167.465 301.395 177.06C304.775 181.623 307.183 186.831 308.47 192.362C309.757 197.893 309.896 203.629 308.878 209.215C307.889 214.566 305.796 219.652 302.734 224.149C307.208 232.393 308.714 241.925 307 251.147C305.96 256.656 303.769 261.883 300.569 266.487C297.37 271.09 293.235 274.967 288.434 277.863L252.604 300.012C242.36 306.016 230.251 307.999 218.627 305.577C207.003 303.154 196.694 296.499 189.701 286.903C186.326 282.338 183.922 277.131 182.638 271.601C181.353 266.071 181.216 260.337 182.234 254.753C183.223 249.403 185.314 244.317 188.373 239.819C183.909 231.579 182.403 222.058 184.106 212.842C185.144 207.332 187.335 202.104 190.534 197.5C193.734 192.896 197.87 189.02 202.672 186.127L238.497 163.971C248.737 157.962 260.845 155.974 272.469 158.393ZM218.056 287.941C223.497 289.899 229.401 290.178 235.003 288.741H235.04C237.608 288.083 240.061 287.038 242.315 285.642L278.086 263.487C280.967 261.741 283.448 259.407 285.368 256.638C287.288 253.87 288.603 250.728 289.228 247.417C289.84 244.059 289.757 240.61 288.984 237.284C288.211 233.959 286.764 230.827 284.732 228.083C281.326 223.403 276.592 219.854 271.145 217.896C265.698 215.938 259.788 215.661 254.182 217.102C251.614 217.76 249.161 218.805 246.907 220.201L233.242 228.654C232.558 229.071 231.816 229.386 231.04 229.588C229.35 230.02 227.569 229.936 225.928 229.345C224.287 228.755 222.861 227.685 221.834 226.275C221.227 225.447 220.797 224.502 220.573 223.5C220.349 222.497 220.336 221.459 220.533 220.451C220.721 219.453 221.118 218.505 221.698 217.67C222.278 216.836 223.028 216.133 223.898 215.608L259.75 193.528C260.429 193.106 261.168 192.79 261.942 192.589C263.631 192.155 265.412 192.239 267.053 192.83C268.694 193.422 270.119 194.494 271.142 195.907C272.231 197.397 272.746 199.23 272.593 201.069L272.46 202.333L273.766 202.728C278.787 204.188 283.526 206.486 287.783 209.523L289.617 210.787L290.295 208.787C290.657 207.725 290.941 206.637 291.143 205.534C291.752 202.173 291.665 198.723 290.887 195.397C290.109 192.072 288.657 188.941 286.62 186.2C283.216 181.517 278.482 177.966 273.035 176.008C267.587 174.05 261.676 173.774 256.07 175.218C253.503 175.878 251.05 176.923 248.795 178.317L213.018 200.472C210.14 202.219 207.661 204.55 205.742 207.316C203.823 210.081 202.506 213.219 201.876 216.526C201.252 219.883 201.323 223.332 202.085 226.661C202.847 229.989 204.285 233.125 206.308 235.876C209.712 240.557 214.445 244.107 219.891 246.067C225.338 248.026 231.247 248.303 236.853 246.863C239.421 246.2 241.873 245.154 244.128 243.759L257.846 235.31C258.529 234.889 259.272 234.573 260.049 234.372C261.739 233.94 263.52 234.025 265.161 234.616C266.802 235.208 268.228 236.278 269.254 237.689C269.857 238.519 270.284 239.463 270.508 240.464C270.731 241.465 270.748 242.501 270.556 243.508C270.363 244.507 269.962 245.455 269.381 246.29C268.799 247.125 268.05 247.829 267.179 248.356L231.445 270.511C230.765 270.929 230.026 271.244 229.253 271.445C227.542 271.892 225.736 271.806 224.075 271.2C222.414 270.594 220.978 269.496 219.957 268.053C218.871 266.561 218.358 264.728 218.511 262.89L218.645 261.626L217.338 261.236C212.319 259.772 207.581 257.475 203.322 254.442L201.487 253.172L200.81 255.172C200.448 256.235 200.164 257.322 199.962 258.426C199.352 261.786 199.439 265.236 200.217 268.562C200.995 271.888 202.447 275.018 204.484 277.76C207.886 282.436 212.614 285.983 218.056 287.941Z" fill="white" fill-opacity="0.04"/>
<g filter="url(#filter4_b_26_8009)">
<rect x="218.463" y="23.2128" width="195.824" height="274.324" rx="6.6128" stroke="url(#paint4_linear_26_8009)" stroke-opacity="0.48" stroke-width="0.426632"/>
<rect x="218.463" y="23.2128" width="195.824" height="274.324" rx="6.6128" stroke="url(#paint5_linear_26_8009)" stroke-opacity="0.64" stroke-width="0.426632"/>
</g>
<g filter="url(#filter5_f_26_8009)">
<path d="M463.105 128.104L248.193 363.358C241.901 370.247 242.01 380.829 248.443 387.586C255.558 395.059 267.522 394.917 274.457 387.277L488.636 151.354C495.605 143.678 494.285 131.634 485.818 125.65C478.71 120.626 468.975 121.678 463.105 128.104Z" fill="url(#paint6_linear_26_8009)"/>
</g>
<g filter="url(#filter6_f_26_8009)">
<path d="M485.72 9.50122L270.807 244.756C264.515 251.644 264.624 262.226 271.057 268.983C278.172 276.456 290.136 276.314 297.072 268.674L511.25 32.7516C518.219 25.0751 516.899 13.0309 508.432 7.04678C501.325 2.02349 491.59 3.07551 485.72 9.50122Z" fill="url(#paint7_linear_26_8009)"/>
</g>
<g filter="url(#filter7_f_26_8009)">
<path d="M403.379 -9.69788L188.466 225.557C182.174 232.445 182.283 243.027 188.716 249.784C195.831 257.257 207.795 257.115 214.731 249.475L428.91 13.5525C435.879 5.87598 434.558 -6.16822 426.091 -12.1523C418.984 -17.1756 409.249 -16.1236 403.379 -9.69788Z" fill="url(#paint8_linear_26_8009)"/>
</g>
<g filter="url(#filter8_f_26_8009)">
<path d="M312.081 -21.2169L97.1686 214.038C90.8762 220.926 90.9853 231.508 97.4184 238.265C104.533 245.738 116.497 245.596 123.433 237.956L337.612 2.03343C344.581 -5.64306 343.26 -17.6873 334.793 -23.6714C327.686 -28.6947 317.951 -27.6426 312.081 -21.2169Z" fill="url(#paint9_linear_26_8009)"/>
</g>
<mask id="mask0_26_8009" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="380" y="22" width="35" height="276">
<rect x="380.375" y="22.9993" width="34.1306" height="274.751" fill="url(#paint10_linear_26_8009)"/>
</mask>
<g mask="url(#mask0_26_8009)">
<mask id="mask1_26_8009" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="380" y="22" width="35" height="276">
<rect width="34.1306" height="274.751" transform="matrix(-1 0 0 1 414.514 22.9987)" fill="url(#paint11_linear_26_8009)"/>
</mask>
<g mask="url(#mask1_26_8009)">
${cubes.join('')}
</g>
</g>
<rect x="299.314" y="29.8257" width="34.1306" height="3.41306" rx="1.70653" fill="#19191C"/>
</g>
</g>
<text fill="#FD366E" xml:space="preserve" style="white-space: pre" font-family="Aeonik Pro" font-size="23.7885" letter-spacing="-0.01em"><tspan x="51.7739" y="71.2691">_</tspan></text>
<text fill="white" xml:space="preserve" style="white-space: pre" font-family="Aeonik Pro" font-size="23.7885" letter-spacing="-0.01em"><tspan x="20.5273" y="71.2691">init</tspan></text>
<text fill="white" fill-opacity="0.64" xml:space="preserve" style="white-space: pre" font-family="Aeonik Pro" font-size="23.7885" letter-spacing="-0.01em"><tspan x="20.5273" y="44.8782">${
        ticket.name
    }
</tspan></text>
<path d="M34.997 209.424V212.718H26.8939C24.5331 212.718 22.4718 211.393 21.369 209.424C21.2087 209.138 21.0684 208.838 20.9507 208.526C20.7196 207.915 20.5743 207.259 20.5303 206.575V205.685C20.5398 205.532 20.5549 205.381 20.5746 205.232C20.6149 204.925 20.6758 204.625 20.7558 204.333C21.5128 201.568 23.9742 199.542 26.8939 199.542C29.8136 199.542 32.2747 201.568 33.0317 204.333H29.5669C28.9981 203.432 28.0136 202.836 26.8939 202.836C25.7743 202.836 24.7897 203.432 24.2209 204.333C24.0475 204.607 23.913 204.909 23.8249 205.232C23.7466 205.517 23.7048 205.819 23.7048 206.13C23.7048 207.074 24.0893 207.925 24.7056 208.526C25.2768 209.083 26.0468 209.424 26.8939 209.424H34.997Z" fill="#FD366E"/>
<path d="M34.9998 205.232V208.526H29.085C29.7013 207.926 30.0857 207.075 30.0857 206.131C30.0857 205.819 30.044 205.518 29.9657 205.232H34.9998Z" fill="#FD366E"/>
<g clip-path="url(#clip2_26_8009)">
<path d="M66.8086 213.99V212.305H75.7409V213.99H66.8086Z" fill="#FD366E"/>
<path d="M64.2925 211.83C62.6208 211.83 61.5227 211.078 61.5227 209.262V204.959H60.0312V203.258H61.6374V200.853H63.473V203.258H65.8987V204.959H63.473V209.245C63.473 209.851 63.7189 210.112 64.3089 210.112H65.8003V211.83H64.2925Z" fill="white"/>
<path d="M57.7422 201.933C57.0374 201.933 56.513 201.41 56.513 200.722C56.513 200.052 57.0374 199.528 57.7422 199.528C58.4469 199.528 58.9714 200.052 58.9714 200.722C58.9714 201.41 58.4469 201.933 57.7422 201.933ZM56.7588 211.83V204.959H55.251V203.258H58.6928V211.83H56.7588Z" fill="white"/>
<path d="M46.6338 211.83V203.258H48.5677V204.24H48.7153C49.0922 203.585 49.8789 203.046 51.0262 203.046C52.911 203.046 54.1074 204.452 54.1074 206.219V211.83H52.1734V206.677C52.1734 205.614 51.4195 204.878 50.4361 204.878C49.3708 204.878 48.5677 205.696 48.5677 206.775V211.83H46.6338Z" fill="white"/>
<path d="M43.6865 201.933C42.9818 201.933 42.4573 201.41 42.4573 200.722C42.4573 200.052 42.9818 199.528 43.6865 199.528C44.3913 199.528 44.9157 200.052 44.9157 200.722C44.9157 201.41 44.3913 201.933 43.6865 201.933ZM42.7031 211.83V204.959H41.1953V203.258H44.6371V211.83H42.7031Z" fill="white"/>
</g>
<text transform="translate(20.5303 218.878)" fill="#E4E4E7" xml:space="preserve" style="white-space: pre" font-family="Aeonik Fono" font-size="8.4834" letter-spacing="0em"><tspan x="0" y="7.9441">JAN 15 - 20</tspan></text>
<g filter="url(#filter9_f_26_8009)">
<path d="M269.739 -75.0623L-162.657 342.708C-169.717 349.529 -173.313 359.178 -172.44 368.957C-170.016 396.076 -137.304 408.357 -117.632 389.532L316.753 -26.1697C327.52 -36.4733 330.299 -52.5981 323.602 -65.9114C313.326 -86.3424 286.187 -90.9532 269.739 -75.0623Z" fill="url(#paint12_linear_26_8009)"/>
</g>
<text transform="translate(20.9619 84.6785)" fill="white" fill-opacity="0.5" xml:space="preserve" style="white-space: pre" font-family="Aeonik Fono" font-size="10.2656" letter-spacing="0em"><tspan x="0" y="8.74695">#${ticket.id
        .toString()
        .padStart(6, '0')}</tspan></text>
<rect x="214.791" y="143" width="222.857" height="106.297" fill="url(#paint13_linear_26_8009)"/>
</g>
</g>
<defs>
<filter id="filter0_b_26_8009" x="-6.84375" y="-6.84375" width="451.688" height="262.688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="3.42188"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_26_8009"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_26_8009" result="shape"/>
</filter>
<filter id="filter1_f_26_8009" x="135.485" y="-59.7669" width="361.784" height="440.284" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="41.3833" result="effect1_foregroundBlur_26_8009"/>
</filter>
<filter id="filter2_d_26_8009" x="178.149" y="-15.3971" width="276.458" height="354.958" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.70653"/>
<feGaussianBlur stdDeviation="20.0517"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_8009"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_8009" result="shape"/>
</filter>
<filter id="filter3_b_26_8009" x="211.424" y="16.1734" width="209.903" height="288.403" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="3.41306"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_26_8009"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_26_8009" result="shape"/>
</filter>
<filter id="filter4_b_26_8009" x="211.424" y="16.1734" width="209.903" height="288.403" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="3.41306"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_26_8009"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_26_8009" result="shape"/>
</filter>
<filter id="filter5_f_26_8009" x="213.681" y="92.6188" width="309.303" height="330.345" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="14.9321" result="effect1_foregroundBlur_26_8009"/>
</filter>
<filter id="filter6_f_26_8009" x="236.295" y="-25.984" width="309.303" height="330.345" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="14.9321" result="effect1_foregroundBlur_26_8009"/>
</filter>
<filter id="filter7_f_26_8009" x="153.954" y="-45.1831" width="309.303" height="330.345" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="14.9321" result="effect1_foregroundBlur_26_8009"/>
</filter>
<filter id="filter8_f_26_8009" x="62.6563" y="-56.7021" width="309.303" height="330.345" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="14.9321" result="effect1_foregroundBlur_26_8009"/>
</filter>
<filter id="filter9_f_26_8009" x="-241.006" y="-153.03" width="636.664" height="620.059" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="34.2188" result="effect1_foregroundBlur_26_8009"/>
</filter>
<linearGradient id="paint0_linear_26_8009" x1="219" y1="0" x2="219" y2="249" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_26_8009" x1="436.048" y1="28.7593" x2="316.377" y2="157.389" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD366E" stop-opacity="0.8"/>
<stop offset="1" stop-color="#FD366E" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_26_8009" x1="414.501" y1="22.9995" x2="335.533" y2="34.2814" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD366E"/>
<stop offset="1" stop-color="#FD366E" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_26_8009" x1="407.035" y1="22.9995" x2="360.273" y2="87.7227" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.2"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_26_8009" x1="401.489" y1="38.7849" x2="294.617" y2="118.778" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD366E"/>
<stop offset="1" stop-color="#FD366E" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint5_linear_26_8009" x1="434.979" y1="63.5296" x2="357.545" y2="124.111" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.44"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear_26_8009" x1="408.117" y1="163.675" x2="253.25" y2="375.831" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD366E" stop-opacity="0.16"/>
<stop offset="1" stop-color="#FD366E" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_26_8009" x1="430.731" y1="45.0722" x2="275.864" y2="257.229" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD366E" stop-opacity="0.16"/>
<stop offset="1" stop-color="#FD366E" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint8_linear_26_8009" x1="348.39" y1="25.8731" x2="193.523" y2="238.03" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD366E" stop-opacity="0.16"/>
<stop offset="1" stop-color="#FD366E" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint9_linear_26_8009" x1="257.092" y1="14.354" x2="102.225" y2="226.51" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD366E" stop-opacity="0.16"/>
<stop offset="1" stop-color="#FD366E" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint10_linear_26_8009" x1="397.44" y1="22.9993" x2="397.44" y2="297.75" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9"/>
<stop offset="0.199262" stop-color="#D9D9D9" stop-opacity="0.4"/>
<stop offset="0.391652" stop-color="#D9D9D9"/>
<stop offset="0.579635" stop-color="#D9D9D9" stop-opacity="0.4"/>
<stop offset="0.754402" stop-color="#D9D9D9"/>
<stop offset="0.964415" stop-color="#D9D9D9" stop-opacity="0.4"/>
</linearGradient>
<linearGradient id="paint11_linear_26_8009" x1="2.80821" y1="123.964" x2="34.1306" y2="123.964" gradientUnits="userSpaceOnUse">
<stop stop-color="#222224"/>
<stop offset="1" stop-color="#222224" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint12_linear_26_8009" x1="270.987" y1="-43.6078" x2="-85.4683" y2="355.661" gradientUnits="userSpaceOnUse">
<stop offset="0.0553357" stop-color="white" stop-opacity="0.08"/>
<stop offset="0.391231" stop-color="white" stop-opacity="0.08"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint13_linear_26_8009" x1="326.219" y1="143" x2="326.219" y2="249.297" gradientUnits="userSpaceOnUse">
<stop stop-color="#18181B" stop-opacity="0"/>
<stop offset="1" stop-color="#18181B"/>
</linearGradient>
<clipPath id="clip0_26_8009">
<rect width="438" height="249" rx="18" fill="white"/>
</clipPath>
<clipPath id="clip1_26_8009">
<rect x="218.252" y="22.9998" width="196.251" height="274.751" rx="6.82611" fill="white"/>
</clipPath>
<clipPath id="clip2_26_8009">
<rect width="34.5396" height="14.543" fill="white" transform="translate(41.1328 199.487)"/>
</clipPath>
</defs>
</svg>
`;
};
