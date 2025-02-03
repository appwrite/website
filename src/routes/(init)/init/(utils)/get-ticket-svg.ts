import { type ContributionsMatrix } from '$routes/(init)/init/(utils)/contributions.server';
import { getGithbubContributions } from './contributions.server';
import type { TicketData } from './tickets';

type GetCubeArgs = {
    week: number;
    day: number;
    level: number;
};

const getTicketNumber = (ticket: TicketData) => {
    return `#${ticket.id.toString().padStart(6, '0')}`;
};

const fill = '#FD366E';

const getCube = ({ week, day, level }: GetCubeArgs) => {
    const x = INITIAL_X + day * DIFF_X;
    const y = INITIAL_Y - week * DIFF_Y;
    const opacity = level / 4;

    return `<rect opacity="${opacity === 0 ? '0.08' : opacity}" x="${x}" y="${y}" width="7.80023" height="7.80023" rx="1.95006" transform="rotate(-90 ${x} ${y})" fill="${fill}"/>`;
};

const INITIAL_X = 960.191;
const INITIAL_Y = 632.822;
const DIFF_Y = 11.651;
const DIFF_X = 11.651;

export async function getCubes(ticket: TicketData) {
    if (!ticket.show_contributions) return [];
    const matrix = ((await getGithbubContributions(ticket.$id)) ?? []) as ContributionsMatrix;

    return matrix?.reduce((acc, week, w) => {
        week.forEach((level, d) => {
            acc.push(getCube({ week: w, day: d, level }));
        });

        return acc;
    }, [] as string[]);
}

export const getTicketSvg = async (ticket: TicketData) => {
    const cubes = await getCubes(ticket);
    const ticketNumber = getTicketNumber(ticket);
    const firstName = ticket.name.split(' ')[0];

    return `
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_819_219)">
<rect width="1200" height="630" fill="#19191C"/>
<rect width="1200" height="630" fill="url(#paint0_linear_819_219)" fill-opacity="0.64"/>
<g filter="url(#filter1_f_819_219)">
<path d="M739.012 -205.65L-445.635 938.925C-464.978 957.614 -474.831 984.05 -472.437 1010.84C-465.798 1085.14 -376.175 1118.79 -322.28 1067.21L867.817 -71.6979C897.314 -99.9269 904.928 -144.104 886.582 -180.579C858.428 -236.555 784.073 -249.187 739.012 -205.65Z" fill="url(#paint1_linear_819_219)"/>
</g>
<text transform="translate(54.7949 54.7945)" fill="white" xml:space="preserve" style="white-space: pre" font-family="Aeonik Pro" font-size="54.7945" letter-spacing="-0.01em" x="0" y="56.152"><tspan>${firstName}&#x2019;s ticket</tspan><tspan fill="#FD366E">_</tspan></text>
<text opacity="0.5" transform="translate(54.7949 136.014)" fill="#E4E4E7" xml:space="preserve" style="white-space: pre" font-family="Aeonik Fono" font-size="23.2422" letter-spacing="0em"><tspan x="0" y="21.7646">${ticketNumber}</tspan></text>
<g clip-path="url(#clip1_819_219)">
<g clip-path="url(#clip2_819_219)">
<rect x="869.945" y="216.438" width="579.493" height="814.913" rx="28.9747" transform="rotate(90 869.945 216.438)" fill="black"/>
<text transform="translate(91.3916 252.657)" fill="white" xml:space="preserve" style="white-space: pre" font-family="Aeonik Pro" font-size="43.462" letter-spacing="-0.01em"><tspan x="0" y="44.3636">${firstName}</tspan></text>
${ticket.title ? `<text transform="translate(91.251 308.795)" fill="white" fill-opacity="0.64" xml:space="preserve" style="white-space: pre" font-family="Aeonik Pro" font-size="28.9747" letter-spacing="0em"><tspan x="0" y="29.5758">${ticket.title}</tspan></text>` : null}
<g filter="url(#filter3_f_819_219)">
<path d="M1343.63 258.858L-24.8743 1757C-64.9405 1800.87 -64.2458 1868.25 -23.2838 1911.28C22.0247 1958.87 98.2147 1957.96 142.381 1909.31L1506.22 406.909C1550.59 358.027 1542.18 281.334 1488.27 243.228C1443.01 211.237 1381.01 217.936 1343.63 258.858Z" fill="url(#paint2_linear_819_219)"/>
</g>
<g filter="url(#filter4_f_819_219)">
<path d="M1249.54 -321.919L-118.967 1176.23C-159.033 1220.09 -158.339 1287.47 -117.377 1330.5C-72.0681 1378.09 4.12193 1377.19 48.2884 1328.53L1412.12 -173.867C1456.5 -222.75 1448.09 -299.443 1394.18 -337.549C1348.92 -369.54 1286.92 -362.841 1249.54 -321.919Z" fill="url(#paint3_linear_819_219)"/>
</g>
<g opacity="0.88" filter="url(#filter5_f_819_219)">
<path d="M266.438 93.3854L-1102.07 1591.53C-1142.14 1635.39 -1141.44 1702.78 -1100.48 1745.8C-1055.17 1793.4 -978.981 1792.49 -934.815 1743.84L429.021 241.437C473.396 192.554 464.987 115.861 411.075 77.755C365.814 45.7639 303.818 52.4634 266.438 93.3854Z" fill="url(#paint4_linear_819_219)"/>
</g>
<g filter="url(#filter6_f_819_219)">
<path d="M305.367 -565.26L-1063.14 932.886C-1103.21 976.748 -1102.51 1044.13 -1061.55 1087.16C-1016.24 1134.75 -940.051 1133.85 -895.885 1085.19L467.951 -417.209C512.325 -466.092 503.917 -542.784 450.005 -580.89C404.744 -612.882 342.748 -606.182 305.367 -565.26Z" fill="url(#paint5_linear_819_219)"/>
</g>
<path d="M734 562L734 394" stroke="url(#paint6_linear_819_219)" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round"/>
<path d="M757 445L757 347" stroke="url(#paint7_linear_819_219)" stroke-opacity="0.7" stroke-width="1.52753" stroke-linecap="round"/>
<path d="M673 302L673 204" stroke="url(#paint8_linear_819_219)" stroke-opacity="0.7" stroke-width="1.52753" stroke-linecap="round"/>
<path d="M811 407L811 269" stroke="url(#paint9_linear_819_219)" stroke-opacity="0.7" stroke-width="1.81265" stroke-linecap="round"/>
<path d="M811 569L811 489" stroke="url(#paint10_linear_819_219)" stroke-opacity="0.7" stroke-width="1.38013" stroke-linecap="round"/>
<path d="M560 360L560 204" stroke="url(#paint11_linear_819_219)" stroke-opacity="0.7" stroke-width="1.92725" stroke-linecap="round"/>
<path d="M573 378.998L573 297" stroke="url(#paint12_linear_819_219)" stroke-opacity="0.7" stroke-width="1.39726" stroke-linecap="round"/>
<path d="M394 414L394 358" stroke="url(#paint13_linear_819_219)" stroke-opacity="0.7" stroke-width="1.39726" stroke-linecap="round"/>
<path d="M408 470.998L408 389" stroke="url(#paint14_linear_819_219)" stroke-opacity="0.7" stroke-width="1.39726" stroke-linecap="round"/>
<path d="M272 430.998L272 379" stroke="url(#paint15_linear_819_219)" stroke-opacity="0.7" stroke-width="1.11267" stroke-linecap="round"/>
<path d="M288 456L288 358" stroke="url(#paint16_linear_819_219)" stroke-opacity="0.7" stroke-width="1.11267" stroke-linecap="round"/>
</g>
<g clip-path="url(#clip3_819_219)">
<path d="M1116.23 216.438C1132.23 216.438 1145.21 229.411 1145.21 245.413L1145.21 766.957C1145.21 782.959 1132.23 795.932 1116.23 795.932L902.542 795.932C886.54 795.932 873.568 782.959 873.568 766.957L873.568 245.413C873.568 229.411 886.54 216.438 902.542 216.438L1116.23 216.438Z" fill="black"/>
<text transform="translate(931.515 230.926) rotate(90)" fill="white" fill-opacity="0.64" xml:space="preserve" style="white-space: pre" font-family="Aeonik Fono" font-size="21.731" letter-spacing="0em"><tspan x="0" y="21.9318">TICKET NUMBER: ${ticketNumber}</tspan></text>
<text transform="translate(1096.31 230.926) rotate(90)" fill="white" xml:space="preserve" style="white-space: pre" font-family="Aeonik Fono" font-size="21.731" letter-spacing="0em"><tspan x="0" y="21.9318">INIT</tspan></text>
${cubes?.join('')}
<g filter="url(#filter7_f_819_219)">
<path d="M1246.18 258.858L-122.325 1757C-162.391 1800.87 -161.696 1868.25 -120.734 1911.28C-75.4255 1958.87 0.764512 1957.96 44.9309 1909.31L1408.77 406.909C1453.14 358.027 1444.73 281.334 1390.82 243.228C1345.56 211.236 1283.56 217.936 1246.18 258.858Z" fill="url(#paint17_linear_819_219)"/>
</g>
<g filter="url(#filter8_f_819_219)">
<path d="M1249.53 -321.919L-118.974 1176.23C-159.04 1220.09 -158.345 1287.47 -117.383 1330.5C-72.0749 1378.09 4.1151 1377.19 48.2815 1328.53L1412.12 -173.867C1456.49 -222.75 1448.08 -299.443 1394.17 -337.549C1348.91 -369.54 1286.91 -362.841 1249.53 -321.919Z" fill="url(#paint18_linear_819_219)"/>
</g>
</g>
<g filter="url(#filter9_b_819_219)">
<path d="M643.382 679.201C603.884 679.201 577.939 661.388 577.939 618.405V516.563H542.701V476.291H580.65V419.367H624.02V476.291H681.331V516.563H624.02V618.018C624.02 632.346 629.829 638.542 643.769 638.542H679.007V679.201H643.382Z" fill="url(#paint19_linear_819_219)" fill-opacity="0.18"/>
</g>
<g filter="url(#filter10_b_819_219)">
<path d="M465.333 679.201V516.563H429.708V476.29H511.027V679.201H465.333Z" fill="url(#paint20_linear_819_219)" fill-opacity="0.18"/>
</g>
<g filter="url(#filter11_b_819_219)">
<path d="M226.138 679.201V476.29H271.831V499.524H275.316C284.223 484.035 302.81 471.256 329.916 471.256C374.448 471.256 402.716 504.559 402.716 546.38V679.201H357.023V557.222C357.023 532.052 339.21 514.627 315.976 514.627C290.806 514.627 271.831 533.988 271.831 559.546V679.201H226.138Z" fill="url(#paint21_linear_819_219)" fill-opacity="0.19"/>
</g>
<g filter="url(#filter12_b_819_219)">
<path d="M133.281 679.201V516.563H97.6553V476.291H178.974V679.201H133.281Z" fill="url(#paint22_linear_819_219)" fill-opacity="0.18"/>
</g>
<g filter="url(#filter13_b_819_219)">
<path d="M127.471 416.268C127.471 432.532 139.862 444.923 156.513 444.923C173.164 444.923 185.556 432.532 185.556 416.268C185.556 400.391 173.164 388 156.513 388C139.862 388 127.471 400.391 127.471 416.268Z" fill="url(#paint23_linear_819_219)" fill-opacity="0.12"/>
</g>
<path d="M679.676 638.541H644.438C630.498 638.541 624.689 632.345 624.689 618.017V516.562H682V476.29H624.689V419.366H581.319V476.29H543.37V516.562H578.608V618.404C578.608 661.387 604.553 679.2 644.051 679.2H679.676" stroke="url(#paint24_linear_819_219)" stroke-width="1.71765" stroke-linecap="round"/>
<path d="M679.676 638.541H644.438C630.498 638.541 624.689 632.345 624.689 618.017V516.562H682V476.29H624.689V419.366H581.319V476.29H543.37V516.562H578.608V618.404C578.608 661.387 604.553 679.2 644.051 679.2H679.676" stroke="url(#paint25_linear_819_219)" stroke-opacity="0.2" stroke-width="1.71765" stroke-linecap="round"/>
<path d="M430.375 516.562H466V679.2H511.694V476.289H430.375" stroke="url(#paint26_linear_819_219)" stroke-width="1.71765" stroke-linecap="round"/>
<path d="M430.375 516.562H466V679.2H511.694V476.289H430.375" stroke="url(#paint27_linear_819_219)" stroke-opacity="0.2" stroke-width="1.71765" stroke-linecap="round"/>
<g filter="url(#filter14_b_819_219)">
<path d="M517.476 416.656C517.476 400.392 505.084 388.001 488.433 388.001C471.782 388.001 459.391 400.392 459.391 416.656C459.391 432.532 471.782 444.924 488.433 444.924C505.084 444.924 517.476 432.532 517.476 416.656Z" fill="url(#paint28_linear_819_219)" fill-opacity="0.12"/>
</g>
<path d="M467.082 436.825C472.256 441.859 479.483 444.924 487.764 444.924C504.415 444.924 516.807 432.532 516.807 416.656C516.807 400.392 504.415 388.001 487.764 388.001C480.57 388.001 474.171 390.314 469.223 394.253" stroke="url(#paint29_linear_819_219)" stroke-width="1.71765" stroke-linecap="round"/>
<path d="M467.082 436.825C472.256 441.859 479.483 444.924 487.764 444.924C504.415 444.924 516.807 432.532 516.807 416.656C516.807 400.392 504.415 388.001 487.764 388.001C480.57 388.001 474.171 390.314 469.223 394.253" stroke="url(#paint30_linear_819_219)" stroke-opacity="0.2" stroke-width="1.71765" stroke-linecap="round"/>
<path d="M226.807 499.523V679.2H272.5V559.545C272.5 533.987 291.475 514.626 316.645 514.626C339.879 514.626 357.692 532.051 357.692 557.221V679.2H403.385V546.379C403.385 504.557 375.117 471.255 330.585 471.255C303.479 471.255 284.892 484.034 275.985 499.523H272.5V476.289H249.653" stroke="url(#paint31_linear_819_219)" stroke-width="1.71765" stroke-linecap="round"/>
<path d="M133.95 679.2V516.562H98.3242V476.29H179.643V679.2" stroke="url(#paint32_linear_819_219)" stroke-width="1.71765" stroke-linecap="round"/>
<path d="M133.95 679.2V516.562H98.3242V476.29H179.643V679.2" stroke="url(#paint33_linear_819_219)" stroke-opacity="0.2" stroke-width="1.71765" stroke-linecap="round"/>
<path d="M177.866 396.098C172.692 391.065 165.465 388 157.184 388C140.533 388 128.142 400.391 128.142 416.268C128.142 432.532 140.533 444.923 157.184 444.923C164.378 444.923 170.778 442.61 175.726 438.671" stroke="url(#paint34_linear_819_219)" stroke-width="1.71765" stroke-linecap="round"/>
<path d="M177.866 396.098C172.692 391.065 165.465 388 157.184 388C140.533 388 128.142 400.391 128.142 416.268C128.142 432.532 140.533 444.923 157.184 444.923C164.378 444.923 170.778 442.61 175.726 438.671" stroke="url(#paint35_linear_819_219)" stroke-opacity="0.2" stroke-width="1.71765" stroke-linecap="round"/>
<g style="mix-blend-mode:screen" opacity="0.7" filter="url(#filter15_f_819_219)">
<g filter="url(#filter16_b_819_219)">
<path d="M127.471 416.268C127.471 432.532 139.862 444.923 156.513 444.923C173.164 444.923 185.556 432.532 185.556 416.268C185.556 400.391 173.164 388 156.513 388C139.862 388 127.471 400.391 127.471 416.268Z" fill="url(#paint36_linear_819_219)" fill-opacity="0.12"/>
</g>
<path d="M679.676 638.541H644.438C630.498 638.541 624.689 632.345 624.689 618.017V516.562H682V476.29H624.689V419.366H581.319V476.29H543.37V516.562H578.608V618.404C578.608 661.387 604.553 679.2 644.051 679.2H679.676" stroke="url(#paint37_linear_819_219)" stroke-width="1.71765" stroke-linecap="round"/>
<path d="M679.676 638.541H644.438C630.498 638.541 624.689 632.345 624.689 618.017V516.562H682V476.29H624.689V419.366H581.319V476.29H543.37V516.562H578.608V618.404C578.608 661.387 604.553 679.2 644.051 679.2H679.676" stroke="url(#paint38_linear_819_219)" stroke-opacity="0.2" stroke-width="1.71765" stroke-linecap="round"/>
<path d="M430.375 516.562H466V679.2H511.694V476.289H430.375" stroke="url(#paint39_linear_819_219)" stroke-width="1.71765" stroke-linecap="round"/>
<path d="M430.375 516.562H466V679.2H511.694V476.289H430.375" stroke="url(#paint40_linear_819_219)" stroke-opacity="0.2" stroke-width="1.71765" stroke-linecap="round"/>
<g filter="url(#filter17_b_819_219)">
<path d="M517.476 416.656C517.476 400.392 505.084 388.001 488.433 388.001C471.782 388.001 459.391 400.392 459.391 416.656C459.391 432.532 471.782 444.924 488.433 444.924C505.084 444.924 517.476 432.532 517.476 416.656Z" fill="url(#paint41_linear_819_219)" fill-opacity="0.12"/>
</g>
<path d="M467.082 436.825C472.256 441.859 479.483 444.924 487.764 444.924C504.415 444.924 516.807 432.532 516.807 416.656C516.807 400.392 504.415 388.001 487.764 388.001C480.57 388.001 474.171 390.314 469.223 394.253" stroke="url(#paint42_linear_819_219)" stroke-width="1.71765" stroke-linecap="round"/>
<path d="M467.082 436.825C472.256 441.859 479.483 444.924 487.764 444.924C504.415 444.924 516.807 432.532 516.807 416.656C516.807 400.392 504.415 388.001 487.764 388.001C480.57 388.001 474.171 390.314 469.223 394.253" stroke="url(#paint43_linear_819_219)" stroke-opacity="0.2" stroke-width="1.71765" stroke-linecap="round"/>
<path d="M226.807 499.523V679.2H272.5V559.545C272.5 533.987 291.475 514.626 316.645 514.626C339.879 514.626 357.692 532.051 357.692 557.221V679.2H403.385V546.379C403.385 504.557 375.117 471.255 330.585 471.255C303.479 471.255 284.892 484.034 275.985 499.523H272.5V476.289H249.653" stroke="url(#paint44_linear_819_219)" stroke-width="1.71765" stroke-linecap="round"/>
<path d="M133.95 679.2V516.562H98.3242V476.29H179.643V679.2" stroke="url(#paint45_linear_819_219)" stroke-width="1.71765" stroke-linecap="round"/>
<path d="M133.95 679.2V516.562H98.3242V476.29H179.643V679.2" stroke="url(#paint46_linear_819_219)" stroke-opacity="0.2" stroke-width="1.71765" stroke-linecap="round"/>
<path d="M177.866 396.098C172.692 391.065 165.465 388 157.184 388C140.533 388 128.142 400.391 128.142 416.268C128.142 432.532 140.533 444.923 157.184 444.923C164.378 444.923 170.778 442.61 175.726 438.671" stroke="url(#paint47_linear_819_219)" stroke-width="1.71765" stroke-linecap="round"/>
<path d="M177.866 396.098C172.692 391.065 165.465 388 157.184 388C140.533 388 128.142 400.391 128.142 416.268C128.142 432.532 140.533 444.923 157.184 444.923C164.378 444.923 170.778 442.61 175.726 438.671" stroke="url(#paint48_linear_819_219)" stroke-opacity="0.2" stroke-width="1.71765" stroke-linecap="round"/>
</g>
<g style="mix-blend-mode:screen" filter="url(#filter18_f_819_219)">
<circle cx="98.1361" cy="476.191" r="5.71034" fill="white"/>
</g>
<g style="mix-blend-mode:screen" filter="url(#filter19_f_819_219)">
<circle cx="98.1366" cy="476.192" r="9.13655" fill="url(#paint49_radial_819_219)" fill-opacity="0.19"/>
</g>
<g style="mix-blend-mode:screen" filter="url(#filter20_f_819_219)">
<circle cx="510.185" cy="476.191" r="7.16987" fill="white"/>
</g>
<g style="mix-blend-mode:screen" filter="url(#filter21_f_819_219)">
<circle cx="510.184" cy="476.193" r="11.4718" fill="url(#paint50_radial_819_219)" fill-opacity="0.19"/>
</g>
<g style="mix-blend-mode:screen" filter="url(#filter22_f_819_219)">
<circle cx="624.084" cy="419.242" r="5.76211" fill="white"/>
</g>
<g style="mix-blend-mode:screen" filter="url(#filter23_f_819_219)">
<circle cx="624.085" cy="419.241" r="9.21937" fill="url(#paint51_radial_819_219)" fill-opacity="0.19"/>
</g>
</g>
<path d="M1082.59 109.589C1077.41 109.589 1074 107.243 1074 101.581V88.1667H1069.37V82.8621H1074.36V75.3643H1080.05V82.8621H1087.57V88.1667H1080.05V101.53C1080.05 103.417 1080.81 104.233 1082.64 104.233H1087.27V109.589H1082.59Z" fill="white"/>
<path d="M1082.59 109.589C1077.41 109.589 1074 107.243 1074 101.581V88.1667H1069.37V82.8621H1074.36V75.3643H1080.05V82.8621H1087.57V88.1667H1080.05V101.53C1080.05 103.417 1080.81 104.233 1082.64 104.233H1087.27V109.589H1082.59Z" fill="url(#paint52_linear_819_219)" fill-opacity="0.15"/>
<path d="M1062.27 78.7307C1060.08 78.7307 1058.46 77.0985 1058.46 74.9563C1058.46 72.8651 1060.08 71.2329 1062.27 71.2329C1064.45 71.2329 1066.08 72.8651 1066.08 74.9563C1066.08 77.0985 1064.45 78.7307 1062.27 78.7307ZM1059.22 109.589V88.1667H1054.54V82.8621H1065.22V109.589H1059.22Z" fill="white"/>
<path d="M1062.27 78.7307C1060.08 78.7307 1058.46 77.0985 1058.46 74.9563C1058.46 72.8651 1060.08 71.2329 1062.27 71.2329C1064.45 71.2329 1066.08 72.8651 1066.08 74.9563C1066.08 77.0985 1064.45 78.7307 1062.27 78.7307ZM1059.22 109.589V88.1667H1054.54V82.8621H1065.22V109.589H1059.22Z" fill="url(#paint53_linear_819_219)" fill-opacity="0.15"/>
<path d="M1027.82 109.589V82.8621H1033.82V85.9225H1034.28C1035.45 83.8823 1037.89 82.1991 1041.45 82.1991C1047.29 82.1991 1051 86.5855 1051 92.0941V109.589H1045V93.5223C1045 90.2069 1042.67 87.9117 1039.62 87.9117C1036.31 87.9117 1033.82 90.462 1033.82 93.8283V109.589H1027.82Z" fill="white"/>
<path d="M1027.82 109.589V82.8621H1033.82V85.9225H1034.28C1035.45 83.8823 1037.89 82.1991 1041.45 82.1991C1047.29 82.1991 1051 86.5855 1051 92.0941V109.589H1045V93.5223C1045 90.2069 1042.67 87.9117 1039.62 87.9117C1036.31 87.9117 1033.82 90.462 1033.82 93.8283V109.589H1027.82Z" fill="url(#paint54_linear_819_219)" fill-opacity="0.15"/>
<path d="M1018.68 78.7307C1016.5 78.7307 1014.87 77.0985 1014.87 74.9563C1014.87 72.8651 1016.5 71.2329 1018.68 71.2329C1020.87 71.2329 1022.5 72.8651 1022.5 74.9563C1022.5 77.0985 1020.87 78.7307 1018.68 78.7307ZM1015.64 109.589V88.1667H1010.96V82.8621H1021.63V109.589H1015.64Z" fill="white"/>
<path d="M1018.68 78.7307C1016.5 78.7307 1014.87 77.0985 1014.87 74.9563C1014.87 72.8651 1016.5 71.2329 1018.68 71.2329C1020.87 71.2329 1022.5 72.8651 1022.5 74.9563C1022.5 77.0985 1020.87 78.7307 1018.68 78.7307ZM1015.64 109.589V88.1667H1010.96V82.8621H1021.63V109.589H1015.64Z" fill="url(#paint55_linear_819_219)" fill-opacity="0.15"/>
<text opacity="0.5" transform="translate(1010.96 120.548)" fill="#E4E4E7" xml:space="preserve" style="white-space: pre" font-family="Aeonik Fono" font-size="23.2422" letter-spacing="0em"><tspan x="0" y="21.7646">AUG 19 - 23</tspan></text>
<rect y="482.247" width="1200" height="147.945" fill="url(#paint56_linear_819_219)"/>
</g>
<defs>
<filter id="filter0_b_819_219" x="-18.75" y="-18.75" width="1237.5" height="667.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="9.375"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_819_219"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_819_219" result="shape"/>
</filter>
<filter id="filter1_f_819_219" x="-660.291" y="-419.26" width="1744.28" height="1698.79" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="93.75" result="effect1_foregroundBlur_819_219"/>
</filter>
<filter id="filter2_d_819_219" x="-109.35" y="52.0547" width="1418.94" height="908.261" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="82.1918"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_819_219"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_819_219" result="shape"/>
</filter>
<filter id="filter3_f_819_219" x="-121.9" y="155.632" width="1724.09" height="1858.19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="33.7145" result="effect1_foregroundBlur_819_219"/>
</filter>
<filter id="filter4_f_819_219" x="-376.297" y="-585.449" width="2044.7" height="2178.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="113.867" result="effect1_foregroundBlur_819_219"/>
</filter>
<filter id="filter5_f_819_219" x="-1359.4" y="-170.145" width="2044.7" height="2178.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="113.867" result="effect1_foregroundBlur_819_219"/>
</filter>
<filter id="filter6_f_819_219" x="-1160.17" y="-668.486" width="1724.09" height="1858.19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="33.7145" result="effect1_foregroundBlur_819_219"/>
</filter>
<filter id="filter7_f_819_219" x="-379.655" y="-4.67241" width="2044.7" height="2178.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="113.867" result="effect1_foregroundBlur_819_219"/>
</filter>
<filter id="filter8_f_819_219" x="-215.999" y="-425.144" width="1724.09" height="1858.19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="33.7145" result="effect1_foregroundBlur_819_219"/>
</filter>
<filter id="filter9_b_819_219" x="525.951" y="402.617" width="172.13" height="293.334" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="8.37496"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_819_219"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_819_219" result="shape"/>
</filter>
<filter id="filter10_b_819_219" x="412.958" y="459.54" width="114.819" height="236.41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="8.37496"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_819_219"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_819_219" result="shape"/>
</filter>
<filter id="filter11_b_819_219" x="209.388" y="454.506" width="210.078" height="241.444" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="8.37496"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_819_219"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_819_219" result="shape"/>
</filter>
<filter id="filter12_b_819_219" x="80.9053" y="459.541" width="114.819" height="236.41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="8.37496"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_819_219"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_819_219" result="shape"/>
</filter>
<filter id="filter13_b_819_219" x="110.721" y="371.25" width="91.5848" height="90.4232" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="8.37496"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_819_219"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_819_219" result="shape"/>
</filter>
<filter id="filter14_b_819_219" x="442.641" y="371.251" width="91.5848" height="90.4232" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="8.37496"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_819_219"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_819_219" result="shape"/>
</filter>
<filter id="filter15_f_819_219" x="88.8776" y="378.553" width="602.569" height="310.094" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4.29413" result="effect1_foregroundBlur_819_219"/>
</filter>
<filter id="filter16_b_819_219" x="110.721" y="371.25" width="91.5848" height="90.4232" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="8.37496"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_819_219"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_819_219" result="shape"/>
</filter>
<filter id="filter17_b_819_219" x="442.641" y="371.251" width="91.5848" height="90.4232" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="8.37496"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_819_219"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_819_219" result="shape"/>
</filter>
<filter id="filter18_f_819_219" x="69.5844" y="447.639" width="57.1036" height="57.1035" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="11.4207" result="effect1_foregroundBlur_819_219"/>
</filter>
<filter id="filter19_f_819_219" x="82.909" y="460.965" width="30.4555" height="30.4551" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="3.04552" result="effect1_foregroundBlur_819_219"/>
</filter>
<filter id="filter20_f_819_219" x="474.335" y="440.342" width="71.6988" height="71.6987" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="14.3397" result="effect1_foregroundBlur_819_219"/>
</filter>
<filter id="filter21_f_819_219" x="491.064" y="457.073" width="38.2391" height="38.2393" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="3.82393" result="effect1_foregroundBlur_819_219"/>
</filter>
<filter id="filter22_f_819_219" x="595.274" y="390.431" width="57.6213" height="57.6211" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="11.5242" result="effect1_foregroundBlur_819_219"/>
</filter>
<filter id="filter23_f_819_219" x="608.719" y="403.876" width="30.731" height="30.7312" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="3.07312" result="effect1_foregroundBlur_819_219"/>
</filter>
<linearGradient id="paint0_linear_819_219" x1="600" y1="0" x2="600" y2="630" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_819_219" x1="742.429" y1="-119.474" x2="-234.159" y2="974.414" gradientUnits="userSpaceOnUse">
<stop offset="0.0553357" stop-color="white" stop-opacity="0.08"/>
<stop offset="0.391231" stop-color="white" stop-opacity="0.08"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_819_219" x1="993.485" y1="485.376" x2="7.24011" y2="1836.36" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.16"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_819_219" x1="899.392" y1="-95.4004" x2="-86.8527" y2="1255.59" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.16"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_819_219" x1="-83.7111" y1="319.904" x2="-1069.96" y2="1670.89" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.16"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint5_linear_819_219" x1="-44.7814" y1="-338.742" x2="-1031.03" y2="1012.24" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.16"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear_819_219" x1="734.331" y1="394" x2="734.331" y2="562" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_819_219" x1="757.331" y1="347" x2="757.331" y2="445" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint8_linear_819_219" x1="673.331" y1="204" x2="673.331" y2="302" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint9_linear_819_219" x1="811.331" y1="269" x2="811.331" y2="407" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint10_linear_819_219" x1="811.331" y1="489" x2="811.331" y2="569" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint11_linear_819_219" x1="560.331" y1="204" x2="560.331" y2="360" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint12_linear_819_219" x1="573.331" y1="297" x2="573.331" y2="378.998" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint13_linear_819_219" x1="394.331" y1="358" x2="394.331" y2="414" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint14_linear_819_219" x1="408.331" y1="389" x2="408.331" y2="470.998" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint15_linear_819_219" x1="272.331" y1="379" x2="272.331" y2="430.998" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint16_linear_819_219" x1="288.331" y1="358" x2="288.331" y2="456" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint17_linear_819_219" x1="896.035" y1="485.376" x2="-90.2101" y2="1836.36" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.16"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint18_linear_819_219" x1="899.385" y1="-95.4005" x2="-86.8595" y2="1255.59" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.16"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint19_linear_819_219" x1="611.507" y1="574.282" x2="567.075" y2="438.95" gradientUnits="userSpaceOnUse">
<stop stop-color="#1E1E22" stop-opacity="0"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint20_linear_819_219" x1="473.336" y1="561.616" x2="509.516" y2="479.541" gradientUnits="userSpaceOnUse">
<stop stop-color="#1E1E22" stop-opacity="0"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint21_linear_819_219" x1="272.001" y1="575.351" x2="221.159" y2="616.726" gradientUnits="userSpaceOnUse">
<stop stop-color="#1E1E22" stop-opacity="0"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint22_linear_819_219" x1="177.196" y1="558.602" x2="97.4668" y2="478.872" gradientUnits="userSpaceOnUse">
<stop stop-color="#1E1E22" stop-opacity="0"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint23_linear_819_219" x1="185.234" y1="416.561" x2="133.98" y2="400.146" gradientUnits="userSpaceOnUse">
<stop stop-color="#1E1E22" stop-opacity="0"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint24_linear_819_219" x1="624.753" y1="421.921" x2="725.057" y2="631.104" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint25_linear_819_219" x1="624.083" y1="419.241" x2="622.431" y2="447.803" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint26_linear_819_219" x1="513.197" y1="476.525" x2="430.452" y2="517.73" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint27_linear_819_219" x1="510.182" y1="477.195" x2="478.587" y2="495.852" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint28_linear_819_219" x1="459.712" y1="416.363" x2="510.967" y2="432.778" gradientUnits="userSpaceOnUse">
<stop stop-color="#1E1E22" stop-opacity="0"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint29_linear_819_219" x1="481.936" y1="437.384" x2="465.833" y2="397.663" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint30_linear_819_219" x1="546.813" y1="355.728" x2="529.058" y2="335.963" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint31_linear_819_219" x1="227.508" y1="565.134" x2="403.889" y2="491.411" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint32_linear_819_219" x1="125.271" y1="416.226" x2="179.875" y2="416.226" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint33_linear_819_219" x1="98.1358" y1="477.196" x2="115.891" y2="496.961" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint34_linear_819_219" x1="179.875" y1="395.791" x2="179.875" y2="438.457" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint35_linear_819_219" x1="98.1357" y1="477.196" x2="115.891" y2="496.961" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint36_linear_819_219" x1="185.234" y1="416.561" x2="133.98" y2="400.146" gradientUnits="userSpaceOnUse">
<stop stop-color="#1E1E22" stop-opacity="0"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint37_linear_819_219" x1="624.753" y1="421.921" x2="725.057" y2="631.104" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint38_linear_819_219" x1="624.083" y1="419.241" x2="622.431" y2="447.803" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint39_linear_819_219" x1="513.197" y1="476.525" x2="430.452" y2="517.73" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint40_linear_819_219" x1="510.182" y1="477.195" x2="478.587" y2="495.852" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint41_linear_819_219" x1="459.712" y1="416.363" x2="510.967" y2="432.778" gradientUnits="userSpaceOnUse">
<stop stop-color="#1E1E22" stop-opacity="0"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint42_linear_819_219" x1="481.936" y1="437.384" x2="465.833" y2="397.663" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint43_linear_819_219" x1="546.813" y1="355.728" x2="529.058" y2="335.963" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint44_linear_819_219" x1="227.508" y1="565.134" x2="403.889" y2="491.411" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint45_linear_819_219" x1="125.271" y1="416.226" x2="179.875" y2="416.226" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint46_linear_819_219" x1="98.1358" y1="477.196" x2="115.891" y2="496.961" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint47_linear_819_219" x1="179.875" y1="395.791" x2="179.875" y2="438.457" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint48_linear_819_219" x1="98.1357" y1="477.196" x2="115.891" y2="496.961" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<radialGradient id="paint49_radial_819_219" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.1365 476.192) rotate(90) scale(9.13655)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint50_radial_819_219" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(510.184 476.193) rotate(90) scale(11.4718)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint51_radial_819_219" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(624.085 419.241) rotate(90) scale(9.21937)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint52_linear_819_219" x1="1049.27" y1="71.2329" x2="1049.27" y2="109.746" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<linearGradient id="paint53_linear_819_219" x1="1049.27" y1="71.2329" x2="1049.27" y2="109.746" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<linearGradient id="paint54_linear_819_219" x1="1049.27" y1="71.2329" x2="1049.27" y2="109.746" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<linearGradient id="paint55_linear_819_219" x1="1049.27" y1="71.2329" x2="1049.27" y2="109.746" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<linearGradient id="paint56_linear_819_219" x1="600" y1="482.247" x2="600" y2="630.192" gradientUnits="userSpaceOnUse">
<stop stop-color="#18181B" stop-opacity="0"/>
<stop offset="1" stop-color="#18181B"/>
</linearGradient>
<clipPath id="clip0_819_219">
<rect width="1200" height="630" fill="white"/>
</clipPath>
<clipPath id="clip1_819_219">
<rect width="579.493" height="1090.17" fill="white" transform="translate(1145.21 216.438) rotate(90)"/>
</clipPath>
<clipPath id="clip2_819_219">
<rect x="869.945" y="216.438" width="579.493" height="814.913" rx="28.9747" transform="rotate(90 869.945 216.438)" fill="white"/>
</clipPath>
<clipPath id="clip3_819_219">
<rect x="1145.21" y="216.438" width="579.493" height="271.638" rx="28.9739" transform="rotate(90 1145.21 216.438)" fill="white"/>
</clipPath>
</defs>
</svg>

  `;
};
