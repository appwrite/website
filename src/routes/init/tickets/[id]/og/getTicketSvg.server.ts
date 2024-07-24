import type { ContributionsMatrix, TicketData } from '$routes/init/tickets/constants';
import { getContributions } from '../get-contributions/helpers.server';

type GetCubeArgs = {
    week: number;
    day: number;
    level: number;
};

const getTicketNumber = (ticket: TicketData) => {
    return `#${ticket.id.toString().padStart(6, '0')}`;
};

const getCube = ({ week, day, level }: GetCubeArgs) => {
    const x = INITIAL_X + day * DIFF_X;
    const y = INITIAL_Y - week * DIFF_Y;
    const opacity = level / 4;
    const fill = 'white';

    return `<rect opacity="${opacity === 0 ? '0.08' : opacity}" x="${x}" y="${y}" width="7.80023" height="7.80023" rx="1.95006" transform="rotate(-90 ${x} ${y})" fill="${fill}"/>`;
};

const INITIAL_X = 958.781;
const INITIAL_Y = 626.972;
const DIFF_Y = 11.651;
const DIFF_X = 11.651;

export async function getCubes(ticket: TicketData) {
    const matrix = ((await getContributions(ticket.$id)) ?? []) as ContributionsMatrix;

    return matrix.reduce((acc, week, w) => {
        week.forEach((level, d) => {
            acc.push(getCube({ week: w, day: d, level }));
        });

        return acc;
    }, [] as string[]);
}

export const getNewTicketSvg = async (ticket: TicketData) => {
    const cubes = await getCubes(ticket);
    const ticketNumber = getTicketNumber(ticket);
    const firstName = ticket.name.split(' ')[0];

    return `
 <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1200" height="630" fill="#F5F5F5"/>
<g clip-path="url(#clip0_346_418)" filter="url(#filter0_b_346_418)">
<rect width="1200" height="630" fill="#19191C"/>
<g filter="url(#filter1_f_346_418)">
<path d="M740.012 -205.65L-444.635 938.925C-463.978 957.614 -473.831 984.05 -471.437 1010.84C-464.798 1085.14 -375.175 1118.79 -321.28 1067.21L868.817 -71.698C898.314 -99.927 905.928 -144.104 887.582 -180.579C859.428 -236.555 785.073 -249.187 740.012 -205.65Z" fill="url(#paint0_linear_346_418)"/>
</g>
<text transform="translate(55.7944 54.7945)" fill="white" xml:space="preserve" style="white-space: pre" font-family="Aeonik Pro" font-size="54.7945" letter-spacing="-0.01em"><tspan x="0" y="56.9739">${firstName}&#x2019;s Ticket</tspan></text>
<text transform="translate(55.7944 133.274)" fill="white" fill-opacity="0.5" xml:space="preserve" style="white-space: pre" font-family="Aeonik Fono" font-size="27.3973" letter-spacing="0em"><tspan x="0" y="33.5">TICKET NUMBER: ${ticketNumber}</tspan></text>
<g  filter="url(#filter2_d_346_418)">
<g clip-path="url(#clip2_346_418)">
<rect x="870.945" y="216.438" width="579.493" height="814.913" rx="28.9747" transform="rotate(90 870.945 216.438)" fill="black"/>
<path opacity="0.2" d="M570.33 442.803L570.33 334.148" stroke="url(#paint1_linear_346_418)" stroke-width="3.62183"/>
<path opacity="0.2" d="M351.211 560.513L351.211 404.774" stroke="url(#paint2_linear_346_418)" stroke-width="3.62183"/>
<path opacity="0.2" d="M570.33 334.148L570.33 225.493" stroke="url(#paint3_linear_346_418)" stroke-width="3.62183"/>
<path opacity="0.2" d="M729.692 493.509L729.692 292.497" stroke="url(#paint4_linear_346_418)" stroke-width="3.62183"/>
<path opacity="0.2" d="M651.822 732.55L651.822 475.399" stroke="url(#paint5_linear_346_418)" stroke-width="3.62183"/>
<path opacity="0.2" d="M351.211 399.341L351.211 203.762" stroke="url(#paint6_linear_346_418)" stroke-width="3.62183"/>
<path opacity="0.2" d="M171.93 658.302L171.93 540.593" stroke="url(#paint7_linear_346_418)" stroke-width="3.62183"/>
<path opacity="0.2" d="M108.548 288.875L108.548 201.951" stroke="url(#paint8_linear_346_418)" stroke-width="3.62183"/>
<path opacity="0.2" d="M822.049 433.748L822.049 172.976" stroke="url(#paint9_linear_346_418)" stroke-width="3.62183"/>
<path opacity="0.2" d="M822.049 594.92L822.049 457.29" stroke="url(#paint10_linear_346_418)" stroke-width="3.62183"/>
<text transform="translate(92.3911 252.657)" fill="white" xml:space="preserve" style="white-space: pre" font-family="Aeonik Pro" font-size="43.462" letter-spacing="-0.01em"><tspan x="0" y="45.0156">${ticket.name}</tspan></text>
${ticket.title ? `<text transform="translate(92.2505 308.795)" fill="white" fill-opacity="0.64" xml:space="preserve" style="white-space: pre" font-family="Aeonik Pro" font-size="28.9747" letter-spacing="0em"><tspan x="0" y="30.0104">${ticket.title}</tspan></text>` : ''}
<g filter="url(#filter3_b_346_418)">
<path d="M654.245 750.847C614.125 750.847 587.772 732.669 587.772 688.803V584.87H551.979V543.77H590.525V485.678H634.578V543.77H692.791V584.87H634.578V688.408C634.578 703.03 640.478 709.353 654.638 709.353H690.431V750.847H654.245Z" fill="url(#paint11_linear_346_418)" fill-opacity="0.12"/>
</g>
<g filter="url(#filter4_b_346_418)">
<path d="M496.954 511.724C479.802 511.724 467.038 499.086 467.038 482.499C467.038 466.306 479.802 453.668 496.954 453.668C514.106 453.668 526.87 466.306 526.87 482.499C526.87 499.086 514.106 511.724 496.954 511.724ZM473.021 750.659V584.787H436.324V543.713H520.089V750.659H473.021Z" fill="url(#paint12_linear_346_418)" fill-opacity="0.2"/>
</g>
<g filter="url(#filter5_b_346_418)">
<path d="M230.437 750.847V543.771H276.85V567.482H280.39C289.437 551.674 308.317 538.633 335.85 538.633C381.083 538.633 409.796 572.619 409.796 615.299V750.847H363.383V626.364C363.383 600.677 345.29 582.894 321.69 582.894C296.123 582.894 276.85 602.653 276.85 628.735V750.847H230.437Z" fill="url(#paint13_linear_346_418)" fill-opacity="0.2"/>
</g>
<g filter="url(#filter6_b_346_418)">
<path d="M136.116 750.847V584.87H99.9292V543.771H182.529V750.847H136.116Z" fill="url(#paint14_linear_346_418)" fill-opacity="0.2"/>
</g>
<g filter="url(#filter7_b_346_418)">
<path d="M130.215 482.517C130.215 499.115 142.801 511.761 159.715 511.761C176.628 511.761 189.215 499.115 189.215 482.517C189.215 466.314 176.628 453.668 159.715 453.668C142.801 453.668 130.215 466.314 130.215 482.517Z" fill="url(#paint15_linear_346_418)" fill-opacity="0.12"/>
</g>
<path d="M691.115 709.353H655.322C641.162 709.353 635.262 703.03 635.262 688.408V584.87H693.475V543.77H635.262V485.678H591.209V543.77H552.662V584.87H588.455V688.803C588.455 732.669 614.808 750.847 654.928 750.847H691.115" stroke="url(#paint16_linear_346_418)" stroke-width="0.908239"/>
<path d="M691.115 709.353H655.322C641.162 709.353 635.262 703.03 635.262 688.408V584.87H693.475V543.77H635.262V485.678H591.209V543.77H552.662V584.87H588.455V688.803C588.455 732.669 614.808 750.847 654.928 750.847H691.115" stroke="url(#paint17_linear_346_418)" stroke-opacity="0.2" stroke-width="0.908239"/>
<path d="M473.618 750.847V751.301H474.072H520.485H520.939V750.847V543.771V543.316H520.485H437.885V544.225H520.031V750.393H474.526V584.87V584.416H474.072H437.885V585.324H473.618V750.847ZM467.718 482.517C467.718 499.367 480.51 512.215 497.672 512.215C514.834 512.215 527.626 499.367 527.626 482.517C527.626 466.058 514.83 453.214 497.672 453.214C480.514 453.214 467.718 466.058 467.718 482.517Z" stroke="url(#paint18_linear_346_418)" stroke-width="0.908239"/>
<path d="M473.618 750.847V751.301H474.072H520.485H520.939V750.847V543.771V543.316H520.485H437.885V544.225H520.031V750.393H474.526V584.87V584.416H474.072H437.885V585.324H473.618V750.847ZM467.718 482.517C467.718 499.367 480.51 512.215 497.672 512.215C514.834 512.215 527.626 499.367 527.626 482.517C527.626 466.058 514.83 453.214 497.672 453.214C480.514 453.214 467.718 466.058 467.718 482.517Z" stroke="url(#paint19_linear_346_418)" stroke-opacity="0.2" stroke-width="0.908239"/>
<path d="M231.111 567.482V750.847H277.524V628.735C277.524 602.653 296.798 582.894 322.364 582.894C345.964 582.894 364.057 600.677 364.057 626.364V750.847H410.471V615.299C410.471 572.619 381.757 538.633 336.524 538.633C308.991 538.633 290.111 551.674 281.064 567.482H277.524V543.771H254.318" stroke="url(#paint20_linear_346_418)" stroke-width="0.908239"/>
<path d="M231.111 567.482V750.847H277.524V628.735C277.524 602.653 296.798 582.894 322.364 582.894C345.964 582.894 364.057 600.677 364.057 626.364V750.847H410.471V615.299C410.471 572.619 381.757 538.633 336.524 538.633C308.991 538.633 290.111 551.674 281.064 567.482H277.524V543.771H254.318" stroke="url(#paint21_linear_346_418)" stroke-opacity="0.2" stroke-width="0.908239"/>
<path d="M136.794 750.847V584.87H100.607V543.771H183.207V750.847" stroke="url(#paint22_linear_346_418)" stroke-width="0.908239"/>
<path d="M136.794 750.847V584.87H100.607V543.771H183.207V750.847" stroke="url(#paint23_linear_346_418)" stroke-opacity="0.2" stroke-width="0.908239"/>
<path d="M181.404 461.933C176.149 456.796 168.808 453.668 160.397 453.668C143.484 453.668 130.897 466.314 130.897 482.517C130.897 499.115 143.484 511.761 160.397 511.761C167.704 511.761 174.204 509.4 179.23 505.38" stroke="url(#paint24_linear_346_418)" stroke-width="0.908239"/>
<path d="M181.404 461.933C176.149 456.796 168.808 453.668 160.397 453.668C143.484 453.668 130.897 466.314 130.897 482.517C130.897 499.115 143.484 511.761 160.397 511.761C167.704 511.761 174.204 509.4 179.23 505.38" stroke="url(#paint25_linear_346_418)" stroke-opacity="0.2" stroke-width="0.908239"/>
<g style="mix-blend-mode:plus-lighter" filter="url(#filter8_f_346_418)">
<path d="M691.115 709.353H655.322C641.162 709.353 635.262 703.03 635.262 688.408V584.87H693.475V543.77H635.262V485.678H591.209V543.77H552.662V584.87H588.455V688.803C588.455 732.669 614.808 750.847 654.928 750.847H691.115" stroke="url(#paint26_linear_346_418)" stroke-width="0.908239"/>
<path d="M691.115 709.353H655.322C641.162 709.353 635.262 703.03 635.262 688.408V584.87H693.475V543.77H635.262V485.678H591.209V543.77H552.662V584.87H588.455V688.803C588.455 732.669 614.808 750.847 654.928 750.847H691.115" stroke="url(#paint27_linear_346_418)" stroke-opacity="0.2" stroke-width="0.908239"/>
<path d="M473.619 750.847V751.301H474.073H520.486H520.94V750.847V543.771V543.316H520.486H437.887V544.225H520.032V750.393H474.527V584.87V584.416H474.073H437.887V585.324H473.619V750.847ZM467.719 482.517C467.719 499.367 480.511 512.215 497.673 512.215C514.835 512.215 527.627 499.367 527.627 482.517C527.627 466.058 514.831 453.214 497.673 453.214C480.515 453.214 467.719 466.058 467.719 482.517Z" stroke="url(#paint28_linear_346_418)" stroke-width="0.908239"/>
<path d="M473.619 750.847V751.301H474.073H520.486H520.94V750.847V543.771V543.316H520.486H437.887V544.225H520.032V750.393H474.527V584.87V584.416H474.073H437.887V585.324H473.619V750.847ZM467.719 482.517C467.719 499.367 480.511 512.215 497.673 512.215C514.835 512.215 527.627 499.367 527.627 482.517C527.627 466.058 514.831 453.214 497.673 453.214C480.515 453.214 467.719 466.058 467.719 482.517Z" stroke="url(#paint29_linear_346_418)" stroke-opacity="0.2" stroke-width="0.908239"/>
<path d="M231.115 567.482V750.847H277.528V628.735C277.528 602.653 296.802 582.894 322.368 582.894C345.968 582.894 364.061 600.677 364.061 626.364V750.847H410.474V615.299C410.474 572.619 381.761 538.633 336.528 538.633C308.995 538.633 290.115 551.674 281.068 567.482H277.528V543.77H254.322" stroke="url(#paint30_linear_346_418)" stroke-width="0.908239"/>
<path d="M231.115 567.482V750.847H277.528V628.735C277.528 602.653 296.802 582.894 322.368 582.894C345.968 582.894 364.061 600.677 364.061 626.364V750.847H410.474V615.299C410.474 572.619 381.761 538.633 336.528 538.633C308.995 538.633 290.115 551.674 281.068 567.482H277.528V543.77H254.322" stroke="url(#paint31_linear_346_418)" stroke-opacity="0.2" stroke-width="0.908239"/>
<path d="M136.794 750.847V584.87H100.607V543.771H183.207V750.847" stroke="url(#paint32_linear_346_418)" stroke-width="0.908239"/>
<path d="M136.794 750.847V584.87H100.607V543.771H183.207V750.847" stroke="url(#paint33_linear_346_418)" stroke-opacity="0.2" stroke-width="0.908239"/>
<path d="M181.403 461.933C176.148 456.796 168.807 453.668 160.395 453.668C143.482 453.668 130.896 466.314 130.896 482.517C130.896 499.115 143.482 511.761 160.395 511.761C167.703 511.761 174.203 509.4 179.229 505.38" stroke="url(#paint34_linear_346_418)" stroke-width="0.908239"/>
<path d="M181.403 461.933C176.148 456.796 168.807 453.668 160.395 453.668C143.482 453.668 130.896 466.314 130.896 482.517C130.896 499.115 143.482 511.761 160.395 511.761C167.703 511.761 174.203 509.4 179.229 505.38" stroke="url(#paint35_linear_346_418)" stroke-opacity="0.2" stroke-width="0.908239"/>
</g>
<g style="mix-blend-mode:screen" filter="url(#filter9_f_346_418)">
<ellipse cx="100.413" cy="543.67" rx="5.10411" ry="5.12815" fill="white"/>
</g>
<g style="mix-blend-mode:screen" filter="url(#filter10_f_346_418)">
<ellipse cx="100.417" cy="543.67" rx="8.16657" ry="8.20504" fill="url(#paint36_radial_346_418)" fill-opacity="0.19"/>
</g>
<g style="mix-blend-mode:screen" filter="url(#filter11_f_346_418)">
<ellipse cx="180.097" cy="461.874" rx="8.16657" ry="8.20504" fill="url(#paint37_radial_346_418)" fill-opacity="0.19"/>
</g>
<g style="mix-blend-mode:screen">
<ellipse cx="180.097" cy="461.874" rx="8.16657" ry="8.20504" fill="url(#paint38_radial_346_418)" fill-opacity="0.49"/>
</g>
<g style="mix-blend-mode:screen" filter="url(#filter12_f_346_418)">
<ellipse cx="518.953" cy="543.67" rx="5.10411" ry="5.12815" fill="white"/>
</g>
<g style="mix-blend-mode:screen" filter="url(#filter13_f_346_418)">
<ellipse cx="518.955" cy="543.67" rx="8.16657" ry="8.20504" fill="url(#paint39_radial_346_418)" fill-opacity="0.19"/>
</g>
<g style="mix-blend-mode:screen" filter="url(#filter14_f_346_418)">
<ellipse cx="634.644" cy="485.551" rx="5.10411" ry="5.12815" fill="white"/>
</g>
<g style="mix-blend-mode:screen" filter="url(#filter15_f_346_418)">
<ellipse cx="634.646" cy="485.551" rx="8.16657" ry="8.20504" fill="url(#paint40_radial_346_418)" fill-opacity="0.19"/>
</g>
<g filter="url(#filter16_f_346_418)">
<path d="M1344.63 258.858L-23.8739 1757C-63.9401 1800.87 -63.2453 1868.25 -22.2833 1911.28C23.0252 1958.87 99.2152 1957.96 143.382 1909.31L1507.22 406.909C1551.59 358.026 1543.18 281.334 1489.27 243.227C1444.01 211.236 1382.01 217.936 1344.63 258.858Z" fill="url(#paint41_linear_346_418)"/>
</g>
<g filter="url(#filter17_f_346_418)">
<path d="M1250.54 -321.919L-117.968 1176.23C-158.034 1220.09 -157.339 1287.47 -116.377 1330.5C-71.0685 1378.09 5.12145 1377.19 49.2879 1328.53L1413.12 -173.868C1457.5 -222.75 1449.09 -299.443 1395.18 -337.549C1349.92 -369.54 1287.92 -362.841 1250.54 -321.919Z" fill="url(#paint42_linear_346_418)"/>
</g>
<g opacity="0.88" filter="url(#filter18_f_346_418)">
<path d="M267.437 93.3853L-1101.07 1591.53C-1141.14 1635.39 -1140.44 1702.78 -1099.48 1745.8C-1054.17 1793.39 -977.982 1792.49 -933.815 1743.84L430.021 241.437C474.395 192.554 465.986 115.861 412.074 77.7549C366.814 45.7637 304.818 52.4633 267.437 93.3853Z" fill="url(#paint43_linear_346_418)"/>
</g>
<g filter="url(#filter19_f_346_418)">
<path d="M306.367 -565.26L-1062.14 932.886C-1102.21 976.748 -1101.51 1044.13 -1060.55 1087.16C-1015.24 1134.75 -939.051 1133.85 -894.885 1085.19L468.951 -417.209C513.325 -466.092 504.917 -542.784 451.005 -580.891C405.744 -612.882 343.748 -606.182 306.367 -565.26Z" fill="url(#paint44_linear_346_418)"/>
</g>
</g>
<g clip-path="url(#clip3_346_418)">
<path d="M1117.23 216.438C1133.23 216.438 1146.21 229.411 1146.21 245.413L1146.21 766.957C1146.21 782.959 1133.23 795.932 1117.23 795.932L903.542 795.932C887.54 795.932 874.568 782.959 874.568 766.957L874.568 245.413C874.568 229.411 887.54 216.438 903.542 216.438L1117.23 216.438Z" fill="black"/>
<text transform="translate(932.514 230.926) rotate(90)" fill="white" fill-opacity="0.64" xml:space="preserve" style="white-space: pre" font-family="Aeonik Fono" font-size="21.731" letter-spacing="0em"><tspan x="0" y="21.9318">TICKET NUMBER: ${ticketNumber}</tspan></text>
<text transform="translate(1097.31 230.926) rotate(90)" fill="white" xml:space="preserve" style="white-space: pre" font-family="Aeonik Fono" font-size="21.731" letter-spacing="0em"><tspan x="0" y="21.9318">INIT 2.0</tspan></text>
${cubes.join('')}
<g filter="url(#filter20_f_346_418)">
<path d="M1247.18 258.858L-121.325 1757C-161.391 1800.87 -160.696 1868.25 -119.734 1911.28C-74.4255 1958.87 1.76451 1957.96 45.9309 1909.31L1409.77 406.909C1454.14 358.026 1445.73 281.334 1391.82 243.227C1346.56 211.236 1284.56 217.936 1247.18 258.858Z" fill="url(#paint45_linear_346_418)"/>
</g>
<g filter="url(#filter21_f_346_418)">
<path d="M1250.53 -321.919L-117.973 1176.23C-158.04 1220.09 -157.345 1287.47 -116.383 1330.5C-71.0744 1378.09 5.11559 1377.19 49.282 1328.53L1413.12 -173.867C1457.49 -222.75 1449.08 -299.443 1395.17 -337.549C1349.91 -369.54 1287.92 -362.841 1250.53 -321.919Z" fill="url(#paint46_linear_346_418)"/>
</g>
</g>
</g>
<path d="M1083.59 109.589C1078.41 109.589 1075 107.243 1075 101.581V88.1667H1070.37V82.8621H1075.36V75.3643H1081.05V82.8621H1088.57V88.1667H1081.05V101.53C1081.05 103.417 1081.81 104.233 1083.64 104.233H1088.27V109.589H1083.59Z" fill="white"/>
<path d="M1083.59 109.589C1078.41 109.589 1075 107.243 1075 101.581V88.1667H1070.37V82.8621H1075.36V75.3643H1081.05V82.8621H1088.57V88.1667H1081.05V101.53C1081.05 103.417 1081.81 104.233 1083.64 104.233H1088.27V109.589H1083.59Z" fill="url(#paint47_linear_346_418)" fill-opacity="0.15"/>
<path d="M1063.27 78.7307C1061.08 78.7307 1059.46 77.0985 1059.46 74.9563C1059.46 72.865 1061.08 71.2328 1063.27 71.2328C1065.45 71.2328 1067.08 72.865 1067.08 74.9563C1067.08 77.0985 1065.45 78.7307 1063.27 78.7307ZM1060.22 109.589V88.1667H1055.54V82.8621H1066.22V109.589H1060.22Z" fill="white"/>
<path d="M1063.27 78.7307C1061.08 78.7307 1059.46 77.0985 1059.46 74.9563C1059.46 72.865 1061.08 71.2328 1063.27 71.2328C1065.45 71.2328 1067.08 72.865 1067.08 74.9563C1067.08 77.0985 1065.45 78.7307 1063.27 78.7307ZM1060.22 109.589V88.1667H1055.54V82.8621H1066.22V109.589H1060.22Z" fill="url(#paint48_linear_346_418)" fill-opacity="0.15"/>
<path d="M1028.82 109.589V82.8621H1034.82V85.9224H1035.28C1036.45 83.8822 1038.89 82.199 1042.45 82.199C1048.29 82.199 1052 86.5855 1052 92.0941V109.589H1046V93.5223C1046 90.2069 1043.67 87.9117 1040.62 87.9117C1037.31 87.9117 1034.82 90.4619 1034.82 93.8283V109.589H1028.82Z" fill="white"/>
<path d="M1028.82 109.589V82.8621H1034.82V85.9224H1035.28C1036.45 83.8822 1038.89 82.199 1042.45 82.199C1048.29 82.199 1052 86.5855 1052 92.0941V109.589H1046V93.5223C1046 90.2069 1043.67 87.9117 1040.62 87.9117C1037.31 87.9117 1034.82 90.4619 1034.82 93.8283V109.589H1028.82Z" fill="url(#paint49_linear_346_418)" fill-opacity="0.15"/>
<path d="M1019.68 78.7307C1017.5 78.7307 1015.87 77.0985 1015.87 74.9563C1015.87 72.865 1017.5 71.2328 1019.68 71.2328C1021.87 71.2328 1023.5 72.865 1023.5 74.9563C1023.5 77.0985 1021.87 78.7307 1019.68 78.7307ZM1016.64 109.589V88.1667H1011.96V82.8621H1022.63V109.589H1016.64Z" fill="white"/>
<path d="M1019.68 78.7307C1017.5 78.7307 1015.87 77.0985 1015.87 74.9563C1015.87 72.865 1017.5 71.2328 1019.68 71.2328C1021.87 71.2328 1023.5 72.865 1023.5 74.9563C1023.5 77.0985 1021.87 78.7307 1019.68 78.7307ZM1016.64 109.589V88.1667H1011.96V82.8621H1022.63V109.589H1016.64Z" fill="url(#paint50_linear_346_418)" fill-opacity="0.15"/>
<text opacity="0.5" transform="translate(1011.96 120.548)" fill="#E4E4E7" xml:space="preserve" style="white-space: pre" font-family="Aeonik Fono" font-size="23.2422" letter-spacing="0em"><tspan x="0" y="21.7646">AUG 19 - 23</tspan></text>
<rect x="1" y="482.247" width="1200" height="147.945" fill="url(#paint51_linear_346_418)"/>
</g>
<defs>
<filter id="filter0_b_346_418" x="-18.75" y="-18.75" width="1237.5" height="667.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="9.375"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_346_418"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_346_418" result="shape"/>
</filter>
<filter id="filter1_f_346_418" x="-659.291" y="-419.26" width="1744.28" height="1698.79" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="93.75" result="effect1_foregroundBlur_346_418"/>
</filter>
<filter id="filter2_d_346_418" x="-119.173" y="41.2321" width="1440.58" height="929.906" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="87.6031"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_346_418"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_346_418" result="shape"/>
</filter>
<filter id="filter3_b_346_418" x="523.004" y="456.704" width="198.762" height="323.118" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="14.4873"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_346_418"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_346_418" result="shape"/>
</filter>
<filter id="filter4_b_346_418" x="407.35" y="424.694" width="148.495" height="354.94" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="14.4873"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_346_418"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_346_418" result="shape"/>
</filter>
<filter id="filter5_b_346_418" x="201.462" y="509.659" width="237.309" height="270.163" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="14.4873"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_346_418"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_346_418" result="shape"/>
</filter>
<filter id="filter6_b_346_418" x="70.9545" y="514.796" width="140.549" height="265.026" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="14.4873"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_346_418"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_346_418" result="shape"/>
</filter>
<filter id="filter7_b_346_418" x="101.24" y="424.694" width="116.949" height="116.041" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="14.4873"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_346_418"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_346_418" result="shape"/>
</filter>
<filter id="filter8_f_346_418" x="96.0014" y="448.608" width="602.079" height="306.845" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.07597" result="effect1_foregroundBlur_346_418"/>
</filter>
<filter id="filter9_f_346_418" x="87.5237" y="530.757" width="25.7778" height="25.8261" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="3.89245" result="effect1_foregroundBlur_346_418"/>
</filter>
<filter id="filter10_f_346_418" x="90.1745" y="533.389" width="20.485" height="20.562" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.03799" result="effect1_foregroundBlur_346_418"/>
</filter>
<filter id="filter11_f_346_418" x="169.854" y="451.592" width="20.485" height="20.562" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.03799" result="effect1_foregroundBlur_346_418"/>
</filter>
<filter id="filter12_f_346_418" x="506.064" y="530.757" width="25.7778" height="25.8261" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="3.89245" result="effect1_foregroundBlur_346_418"/>
</filter>
<filter id="filter13_f_346_418" x="508.712" y="533.389" width="20.485" height="20.562" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.03799" result="effect1_foregroundBlur_346_418"/>
</filter>
<filter id="filter14_f_346_418" x="621.755" y="472.638" width="25.7778" height="25.8261" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="3.89245" result="effect1_foregroundBlur_346_418"/>
</filter>
<filter id="filter15_f_346_418" x="624.404" y="475.27" width="20.485" height="20.562" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.03799" result="effect1_foregroundBlur_346_418"/>
</filter>
<filter id="filter16_f_346_418" x="-120.899" y="155.632" width="1724.09" height="1858.19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="33.7145" result="effect1_foregroundBlur_346_418"/>
</filter>
<filter id="filter17_f_346_418" x="-375.298" y="-585.449" width="2044.7" height="2178.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="113.867" result="effect1_foregroundBlur_346_418"/>
</filter>
<filter id="filter18_f_346_418" x="-1358.4" y="-170.145" width="2044.7" height="2178.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="113.867" result="effect1_foregroundBlur_346_418"/>
</filter>
<filter id="filter19_f_346_418" x="-1159.17" y="-668.486" width="1724.09" height="1858.19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="33.7145" result="effect1_foregroundBlur_346_418"/>
</filter>
<filter id="filter20_f_346_418" x="-378.655" y="-4.67265" width="2044.7" height="2178.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="113.867" result="effect1_foregroundBlur_346_418"/>
</filter>
<filter id="filter21_f_346_418" x="-214.999" y="-425.145" width="1724.09" height="1858.19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="33.7145" result="effect1_foregroundBlur_346_418"/>
</filter>
<linearGradient id="paint0_linear_346_418" x1="743.429" y1="-119.474" x2="-233.159" y2="974.414" gradientUnits="userSpaceOnUse">
<stop offset="0.0553357" stop-color="white" stop-opacity="0.08"/>
<stop offset="0.391231" stop-color="white" stop-opacity="0.08"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_346_418" x1="569.83" y1="334.148" x2="569.83" y2="442.803" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_346_418" x1="350.711" y1="404.774" x2="350.711" y2="560.513" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_346_418" x1="569.83" y1="225.493" x2="569.83" y2="334.148" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_346_418" x1="729.192" y1="292.497" x2="729.192" y2="493.509" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint5_linear_346_418" x1="651.322" y1="475.399" x2="651.322" y2="732.55" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear_346_418" x1="350.711" y1="203.762" x2="350.711" y2="399.341" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="0.435" stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_346_418" x1="171.43" y1="540.593" x2="171.43" y2="658.302" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="0.435" stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint8_linear_346_418" x1="108.048" y1="201.951" x2="108.048" y2="288.875" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="0.435" stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint9_linear_346_418" x1="821.549" y1="172.976" x2="821.549" y2="433.748" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="0.435" stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint10_linear_346_418" x1="821.549" y1="457.29" x2="821.549" y2="594.92" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="0.435" stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint11_linear_346_418" x1="621.868" y1="643.774" x2="576.352" y2="505.789" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint12_linear_346_418" x1="481.265" y1="630.736" x2="517.916" y2="546.76" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint13_linear_346_418" x1="277.023" y1="644.866" x2="225.187" y2="686.852" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint14_linear_346_418" x1="180.723" y1="627.772" x2="99.3572" y2="546.787" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint15_linear_346_418" x1="188.888" y1="482.816" x2="136.781" y2="466.206" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint16_linear_346_418" x1="635.326" y1="488.286" x2="737.991" y2="701.387" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint17_linear_346_418" x1="634.645" y1="485.551" x2="632.952" y2="514.698" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint18_linear_346_418" x1="522.011" y1="544.012" x2="437.807" y2="585.747" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint19_linear_346_418" x1="518.949" y1="544.695" x2="486.778" y2="563.603" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint20_linear_346_418" x1="290.545" y1="559.203" x2="410.982" y2="559.203" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint21_linear_346_418" x1="277.697" y1="750.847" x2="280.98" y2="733.721" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint22_linear_346_418" x1="127.978" y1="482.474" x2="183.443" y2="482.474" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint23_linear_346_418" x1="100.416" y1="544.696" x2="118.544" y2="564.782" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint24_linear_346_418" x1="183.445" y1="461.619" x2="183.445" y2="513.927" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint25_linear_346_418" x1="100.419" y1="544.695" x2="118.547" y2="564.781" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint26_linear_346_418" x1="635.326" y1="488.286" x2="737.991" y2="701.387" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint27_linear_346_418" x1="634.645" y1="485.551" x2="632.952" y2="514.698" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint28_linear_346_418" x1="522.013" y1="544.012" x2="437.809" y2="585.747" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint29_linear_346_418" x1="518.95" y1="544.695" x2="486.78" y2="563.603" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint30_linear_346_418" x1="290.549" y1="559.203" x2="410.986" y2="559.203" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint31_linear_346_418" x1="277.701" y1="750.847" x2="280.984" y2="733.721" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint32_linear_346_418" x1="127.978" y1="482.474" x2="183.443" y2="482.474" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<linearGradient id="paint33_linear_346_418" x1="100.416" y1="544.696" x2="118.544" y2="564.782" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint34_linear_346_418" x1="183.444" y1="461.619" x2="183.444" y2="513.927" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint35_linear_346_418" x1="100.417" y1="544.695" x2="118.545" y2="564.781" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<radialGradient id="paint36_radial_346_418" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100.417 543.67) rotate(90) scale(8.20504 8.16657)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint37_radial_346_418" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(180.097 461.874) rotate(90) scale(8.20504 8.16657)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint38_radial_346_418" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(180.097 461.874) rotate(90) scale(8.20504 8.16657)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint39_radial_346_418" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(518.955 543.67) rotate(90) scale(8.20504 8.16657)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint40_radial_346_418" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(634.646 485.551) rotate(90) scale(8.20504 8.16657)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint41_linear_346_418" x1="994.485" y1="485.376" x2="8.2406" y2="1836.36" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.16"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint42_linear_346_418" x1="900.391" y1="-95.4007" x2="-85.8532" y2="1255.59" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.16"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint43_linear_346_418" x1="-82.7116" y1="319.903" x2="-1068.96" y2="1670.89" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.16"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint44_linear_346_418" x1="-43.7814" y1="-338.742" x2="-1030.03" y2="1012.24" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.16"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint45_linear_346_418" x1="897.035" y1="485.376" x2="-89.2101" y2="1836.36" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.16"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint46_linear_346_418" x1="900.386" y1="-95.4006" x2="-85.859" y2="1255.59" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.16"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint47_linear_346_418" x1="1050.27" y1="71.2328" x2="1050.27" y2="109.746" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<linearGradient id="paint48_linear_346_418" x1="1050.27" y1="71.2328" x2="1050.27" y2="109.746" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<linearGradient id="paint49_linear_346_418" x1="1050.27" y1="71.2328" x2="1050.27" y2="109.746" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<linearGradient id="paint50_linear_346_418" x1="1050.27" y1="71.2328" x2="1050.27" y2="109.746" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<linearGradient id="paint51_linear_346_418" x1="601" y1="482.247" x2="601" y2="630.192" gradientUnits="userSpaceOnUse">
<stop stop-color="#18181B" stop-opacity="0"/>
<stop offset="1" stop-color="#18181B"/>
</linearGradient>
<clipPath id="clip0_346_418">
<rect width="1200" height="630" fill="white"/>
</clipPath>
<clipPath id="clip1_346_418">
<rect width="579.493" height="1090.17" fill="white" transform="translate(1146.21 216.438) rotate(90)"/>
</clipPath>
<clipPath id="clip2_346_418">
<rect x="870.945" y="216.438" width="579.493" height="814.913" rx="28.9747" transform="rotate(90 870.945 216.438)" fill="white"/>
</clipPath>
<clipPath id="clip3_346_418">
<rect x="1146.21" y="216.438" width="579.493" height="271.638" rx="28.9739" transform="rotate(90 1146.21 216.438)" fill="white"/>
</clipPath>
</defs>
</svg>

  `;
};
