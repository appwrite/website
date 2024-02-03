import { splitStr } from '$lib/utils/string';
import { getMockContributions } from '$routes/init/helpers';
import type { ContributionsMatrix, TicketData, TicketVariant } from '$routes/init/ticket/constants';
import { getContributions } from '../get-contributions/helpers.server';

type GetCubeArgs = {
    week: number;
    day: number;
    level: number;
    variant?: TicketVariant;
};

const getCube = ({ week, day, level, variant = 'default' }: GetCubeArgs) => {
    const x = INITIAL_X + day * DIFF_X;
    const y = INITIAL_Y + week * DIFF_Y;
    const opacity = level / 4;
    const fill = variant === 'rainbow' ? 'white' : '#FD366E';

    return `<rect opacity="${opacity}" x="${x}" y="${y}" width="3.4087" height="3.4087" rx="0.852174" fill="${fill}" />`;
};
const INITIAL_X = 380;
const INITIAL_Y = 22.7998;
const DIFF_Y = 5.1133;
const DIFF_X = 5.1133;

export async function getCubes(ticket: TicketData) {
    // const matrix = ((await getContributions(ticket.$id)) ?? []) as ContributionsMatrix;
    const matrix = getMockContributions();

    return matrix.reduce((acc, week, w) => {
        week.forEach((level, d) => {
            acc.push(getCube({ week: w, day: d, level, variant: ticket.variant }));
        });

        return acc;
    }, [] as string[]);
}

const cards: Record<TicketVariant, string> = {
    pink: `<g filter="url(#filter0_b_446_1414)">
  <g clip-path="url(#clip0_446_1414)">
  <rect width="438" height="249" rx="18" fill="#19191C"/>
  <rect width="438" height="249" rx="18" fill="url(#paint0_linear_446_1414)" fill-opacity="0.64"/>
  <g filter="url(#filter1_f_446_1414)">
  <rect x="218.252" y="22.9998" width="196.251" height="274.751" rx="6.82611" fill="url(#paint1_linear_446_1414)"/>
  <rect x="218.466" y="23.2131" width="195.824" height="274.324" rx="6.6128" stroke="#FD366E" stroke-width="0.426632"/>
  </g>
  <g filter="url(#filter2_d_446_1414)">
  <g clip-path="url(#clip1_446_1414)">
  <g filter="url(#filter3_b_446_1414)">
  <rect x="218.25" y="22.9996" width="196.251" height="274.751" rx="6.82611" fill="#FD366E" fill-opacity="0.12"/>
  <rect x="218.464" y="23.2129" width="195.824" height="274.324" rx="6.6128" stroke="url(#paint2_linear_446_1414)" stroke-opacity="0.48" stroke-width="0.426632"/>
  <rect x="218.464" y="23.2129" width="195.824" height="274.324" rx="6.6128" stroke="url(#paint3_linear_446_1414)" stroke-width="0.426632"/>
  </g>
  <g filter="url(#filter4_b_446_1414)">
  <rect x="218.464" y="23.2129" width="195.824" height="274.324" rx="6.6128" stroke="url(#paint4_linear_446_1414)" stroke-opacity="0.48" stroke-width="0.426632"/>
  <rect x="218.464" y="23.2129" width="195.824" height="274.324" rx="6.6128" stroke="url(#paint5_linear_446_1414)" stroke-opacity="0.64" stroke-width="0.426632"/>
  </g>
  <g filter="url(#filter5_f_446_1414)">
  <path d="M463.106 128.104L248.194 363.358C241.901 370.247 242.01 380.829 248.443 387.586C255.558 395.059 267.522 394.917 274.458 387.277L488.637 151.354C495.606 143.678 494.285 131.634 485.818 125.65C478.711 120.626 468.976 121.678 463.106 128.104Z" fill="url(#paint6_linear_446_1414)"/>
  </g>
  <g filter="url(#filter6_f_446_1414)">
  <path d="M485.72 9.50119L270.808 244.756C264.515 251.644 264.624 262.226 271.057 268.983C278.172 276.456 290.136 276.314 297.072 268.674L511.251 32.7515C518.22 25.075 516.899 13.0308 508.432 7.04675C501.325 2.02345 491.59 3.07548 485.72 9.50119Z" fill="url(#paint7_linear_446_1414)"/>
  </g>
  <g filter="url(#filter7_f_446_1414)">
  <path d="M403.38 -9.69792L188.467 225.557C182.175 232.445 182.284 243.027 188.717 249.784C195.832 257.257 207.796 257.115 214.732 249.475L428.91 13.5524C435.879 5.87593 434.559 -6.16827 426.092 -12.1524C418.985 -17.1757 409.25 -16.1236 403.38 -9.69792Z" fill="url(#paint8_linear_446_1414)"/>
  </g>
  <g filter="url(#filter8_f_446_1414)">
  <path d="M312.081 -21.2169L97.169 214.038C90.8766 220.926 90.9857 231.508 97.4188 238.265C104.534 245.738 116.498 245.596 123.433 237.956L337.612 2.03346C344.581 -5.64303 343.261 -17.6872 334.794 -23.6713C327.686 -28.6946 317.951 -27.6426 312.081 -21.2169Z" fill="url(#paint9_linear_446_1414)"/>
  </g>
  <rect x="299.314" y="29.8257" width="34.1306" height="3.41306" rx="1.70653" fill="#19191C"/>
  </g>
  </g>
  </g>
  </g>`,
    default: `<g filter="url(#filter1_b_327_1972)">
  <mask id="path-3-inside-1_327_1972" fill="white">
  <path fill-rule="evenodd" clip-rule="evenodd"
  d="M218.743 26.5222C218 27.9805 218 29.8895 218 33.7076V286.292C218 290.11 218 292.019 218.743 293.477C219.397 294.76 220.44 295.803 221.722 296.457C223.181 297.2 225.09 297.2 228.908 297.2H403.092C406.91 297.2 408.819 297.2 410.278 296.457C411.56 295.803 412.603 294.76 413.257 293.477C414 292.019 414 290.11 414 286.292V33.7076C414 29.8895 414 27.9805 413.257 26.5222C412.603 25.2394 411.56 24.1965 410.278 23.5429C408.819 22.7998 406.91 22.7998 403.092 22.7998H228.908C225.09 22.7998 223.181 22.7998 221.722 23.5429C220.44 24.1965 219.397 25.2394 218.743 26.5222ZM300.661 29.6172C299.72 29.6172 298.957 30.3803 298.957 31.3215C298.957 32.2628 299.72 33.0259 300.661 33.0259H331.339C332.28 33.0259 333.043 32.2628 333.043 31.3215C333.043 30.3803 332.28 29.6172 331.339 29.6172H300.661Z" />
  </mask>
  <path fill-rule="evenodd" clip-rule="evenodd"
  d="M218.743 26.5222C218 27.9805 218 29.8895 218 33.7076V286.292C218 290.11 218 292.019 218.743 293.477C219.397 294.76 220.44 295.803 221.722 296.457C223.181 297.2 225.09 297.2 228.908 297.2H403.092C406.91 297.2 408.819 297.2 410.278 296.457C411.56 295.803 412.603 294.76 413.257 293.477C414 292.019 414 290.11 414 286.292V33.7076C414 29.8895 414 27.9805 413.257 26.5222C412.603 25.2394 411.56 24.1965 410.278 23.5429C408.819 22.7998 406.91 22.7998 403.092 22.7998H228.908C225.09 22.7998 223.181 22.7998 221.722 23.5429C220.44 24.1965 219.397 25.2394 218.743 26.5222ZM300.661 29.6172C299.72 29.6172 298.957 30.3803 298.957 31.3215C298.957 32.2628 299.72 33.0259 300.661 33.0259H331.339C332.28 33.0259 333.043 32.2628 333.043 31.3215C333.043 30.3803 332.28 29.6172 331.339 29.6172H300.661Z"
  fill="url(#paint1_linear_327_1972)" fill-opacity="0.8" />
  <path
  d="M218.743 26.5222L218.363 26.3287L218.743 26.5222ZM218.743 293.477L218.363 293.671L218.363 293.671L218.743 293.477ZM221.722 296.457L221.529 296.836L221.529 296.836L221.722 296.457ZM410.278 296.457L410.471 296.836L410.471 296.836L410.278 296.457ZM413.257 293.477L412.877 293.284L412.877 293.284L413.257 293.477ZM413.257 26.5222L412.877 26.7156L412.877 26.7156L413.257 26.5222ZM410.278 23.5429L410.084 23.9225L410.084 23.9225L410.278 23.5429ZM221.722 23.5429L221.529 23.1632L221.722 23.5429ZM218.426 33.7076C218.426 31.7915 218.426 30.3801 218.518 29.2647C218.608 28.1542 218.787 27.3747 219.123 26.7156L218.363 26.3287C217.956 27.128 217.763 28.0321 217.668 29.1953C217.574 30.3535 217.574 31.8056 217.574 33.7076H218.426ZM218.426 286.292V33.7076H217.574V286.292H218.426ZM219.123 293.284C218.787 292.625 218.608 291.845 218.518 290.735C218.426 289.619 218.426 288.208 218.426 286.292H217.574C217.574 288.194 217.574 289.646 217.668 290.804C217.763 291.967 217.956 292.872 218.363 293.671L219.123 293.284ZM221.916 296.077C220.713 295.464 219.735 294.487 219.123 293.284L218.363 293.671C219.058 295.034 220.166 296.142 221.529 296.836L221.916 296.077ZM228.908 296.774C226.992 296.774 225.58 296.773 224.465 296.682C223.354 296.592 222.575 296.413 221.916 296.077L221.529 296.836C222.328 297.244 223.232 297.437 224.395 297.532C225.554 297.626 227.006 297.626 228.908 297.626V296.774ZM403.092 296.774H228.908V297.626H403.092V296.774ZM410.084 296.077C409.425 296.413 408.646 296.592 407.535 296.682C406.42 296.773 405.008 296.774 403.092 296.774V297.626C404.994 297.626 406.446 297.626 407.605 297.532C408.768 297.437 409.672 297.244 410.471 296.836L410.084 296.077ZM412.877 293.284C412.265 294.487 411.287 295.464 410.084 296.077L410.471 296.836C411.834 296.142 412.942 295.034 413.637 293.671L412.877 293.284ZM413.574 286.292C413.574 288.208 413.574 289.619 413.482 290.735C413.392 291.845 413.213 292.625 412.877 293.284L413.637 293.671C414.044 292.872 414.237 291.967 414.332 290.804C414.426 289.646 414.426 288.194 414.426 286.292H413.574ZM413.574 33.7076V286.292H414.426V33.7076H413.574ZM412.877 26.7156C413.213 27.3747 413.392 28.1542 413.482 29.2647C413.574 30.3801 413.574 31.7916 413.574 33.7076H414.426C414.426 31.8056 414.426 30.3535 414.332 29.1953C414.237 28.0321 414.044 27.128 413.637 26.3287L412.877 26.7156ZM410.084 23.9225C411.287 24.5353 412.265 25.513 412.877 26.7156L413.637 26.3287C412.942 24.9658 411.834 23.8577 410.471 23.1632L410.084 23.9225ZM403.092 23.2259C405.008 23.2259 406.42 23.2262 407.535 23.3174C408.646 23.4081 409.425 23.5867 410.084 23.9225L410.471 23.1632C409.672 22.756 408.768 22.563 407.605 22.468C406.446 22.3734 404.994 22.3737 403.092 22.3737V23.2259ZM228.908 23.2259H403.092V22.3737H228.908V23.2259ZM221.916 23.9225C222.575 23.5867 223.354 23.4081 224.465 23.3174C225.58 23.2262 226.992 23.2259 228.908 23.2259V22.3737C227.006 22.3737 225.554 22.3734 224.395 22.468C223.232 22.563 222.328 22.756 221.529 23.1632L221.916 23.9225ZM219.123 26.7156C219.735 25.513 220.713 24.5353 221.916 23.9225L221.529 23.1632C220.166 23.8577 219.058 24.9658 218.363 26.3287L219.123 26.7156ZM299.383 31.3215C299.383 30.6156 299.955 30.0433 300.661 30.0433V29.1911C299.484 29.1911 298.53 30.1449 298.53 31.3215H299.383ZM300.661 32.5998C299.955 32.5998 299.383 32.0275 299.383 31.3215H298.53C298.53 32.4981 299.484 33.452 300.661 33.452V32.5998ZM331.339 32.5998H300.661V33.452H331.339V32.5998ZM332.617 31.3215C332.617 32.0275 332.045 32.5998 331.339 32.5998V33.452C332.516 33.452 333.47 32.4981 333.47 31.3215H332.617ZM331.339 30.0433C332.045 30.0433 332.617 30.6156 332.617 31.3215H333.47C333.47 30.1449 332.516 29.1911 331.339 29.1911V30.0433ZM300.661 30.0433H331.339V29.1911H300.661V30.0433Z"
  fill="url(#paint2_linear_327_1972)" fill-opacity="0.32" mask="url(#path-3-inside-1_327_1972)" />
  </g>`,
    rainbow: `<g xmlns="http://www.w3.org/2000/svg" filter="url(#filter0_b_450_3173)">
  <g clip-path="url(#clip0_450_3173)">
  <rect width="438" height="249" rx="18" fill="#19191C"/>
  <rect width="438" height="249" rx="18" fill="url(#paint0_linear_450_3173)" fill-opacity="0.64"/>
  <g filter="url(#filter1_f_450_3173)">
  <rect x="218" y="22.8" width="196" height="274.4" rx="6.81739" fill="url(#paint1_linear_450_3173)"/>
  <rect x="218.213" y="23.0131" width="195.574" height="273.974" rx="6.60435" stroke="white" stroke-width="0.426087"/>
  </g>
  <rect x="177" y="-15" width="277" height="354" fill="url(#pattern0)"/>
  <rect x="214.791" y="143" width="222.857" height="106.297" fill="url(#paint2_linear_450_3173)"/>
  </g>
  </g>`
};

function getTribeSource(variant: TicketVariant, tribe: string) {
    if (variant === 'rainbow') {
        return `/images/tribes/rainbow/${tribe?.toLowerCase()}.png`;
    }
    return `/images/tribes/${tribe?.toLowerCase()}.png`;
}

async function toBase64(src: string, f: typeof fetch) {
    const base64 = await f(src)
        .then((res) => res.arrayBuffer())
        .then((buf) => Buffer.from(buf).toString('base64'));
    const img_type = src.split('.').pop();

    return `data:image/${img_type === 'svg' ? 'svg+xml' : img_type};base64,${base64}`;
}

export const getTicketSvg = async (ticket: TicketData, f: typeof fetch) => {
    const cubes = await getCubes(ticket);

    const line_height = 18;
    const big_line_height = 22;
    const chars_per_line = 16;
    // split ticket name in max 16 chars per line
    const split_name = splitStr(ticket.name, { chars: chars_per_line, breakWord: false });

    const rainbow_png = await toBase64('/images/ticket/rainbow.png', f);

    const tribe_src = getTribeSource(ticket.variant ?? 'default', ticket.tribe ?? 'appwrite');
    const tribe_svg = await toBase64(tribe_src, f);

    return `
<svg width="876" height="498" viewBox="0 0 438 249" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_327_1972)">
<g clip-path="url(#clip0_327_1972)">
  <rect width="438" height="249" rx="18" fill="#19191C" />
  <rect width="438" height="249" rx="18" fill="url(#paint0_linear_327_1972)" fill-opacity="0.64" />
  <g clip-path="url(#clip1_327_1972)">
  ${cards[ticket.variant ?? 'default']}
    <g filter="url(#filter2_f_327_1972)">
      <path
        d="M350.938 32.9374L187.966 224.365C176.667 237.637 177.096 257.267 188.966 270.033C202.592 284.688 225.811 284.643 239.38 269.935L409.852 85.1547C425.723 67.952 423.17 40.7847 404.372 26.8396C387.731 14.4945 364.37 17.1604 350.938 32.9374Z"
        fill="url(#paint3_linear_327_1972)" fill-opacity="0.08" />
    </g>
    <mask id="mask0_327_1972" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="379" y="22" width="35"
      height="276">
      <rect x="379.913" y="22.7998" width="34.087" height="274.4" fill="url(#paint4_linear_327_1972)" />
    </mask>
    <g mask="url(#mask0_327_1972)">
      <mask id="mask1_327_1972" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="379" y="22" width="35"
        height="276">
        <rect width="34.087" height="274.4" transform="matrix(-1 0 0 1 414 22.7998)"
          fill="url(#paint5_linear_327_1972)" />
      </mask>
      <g mask="url(#mask1_327_1972)">
        ${cubes.join('')}
      </g>
    </g>
    ${
        ticket.gh_user
            ? `
    <text transform="translate(232.061 67.1128)" fill="#ADADB0" xml:space="preserve" style="white-space: pre"
      font-family="Aeonik Pro" font-size="10.2261" letter-spacing="0em">
      <tspan x="0" y="${9.69774 + line_height * (split_name.length - 1)}">@${ticket.gh_user}</tspan>
    </text>
    `
            : ''
    }
    ${split_name.map(
        (line, i) => `
      <text transform="translate(232.061 46.6606)" fill="white" xml:space="preserve" style="white-space: pre"
      font-family="Aeonik Pro" font-size="17.0435" letter-spacing="-0.01em">
        <tspan x="0" y="${15.5 + line_height * i}">${line}</tspan>
      </text>
    `
    )}
  <image x="160" y="130" width="200" height="200" xlink:href="${tribe_svg}" xmlns:xlink="http://www.w3.org/1999/xlink"/>

  </g>
  <text fill="#FD366E" xml:space="preserve" style="white-space: pre" font-family="Aeonik Pro" font-size="23.7885"
    letter-spacing="-0.01em">
    <tspan x="51.7739" y="${71.2692 + big_line_height * (split_name.length - 1)}">_</tspan>
  </text>
  <text fill="white" xml:space="preserve" style="white-space: pre" font-family="Aeonik Pro" font-size="23.7885"
    letter-spacing="-0.01em">
    <tspan x="20.5273" y="${71.2692 + big_line_height * (split_name.length - 1)}">init</tspan>
  </text>
    ${split_name.map(
        (line, i) => `
        <text fill="white" fill-opacity="0.64" xml:space="preserve" style="white-space: pre" font-family="Aeonik Pro"
        font-size="23.7885" letter-spacing="-0.01em">
          <tspan x="20.5273" y="${44.8783 + big_line_height * i}">${line}</tspan>
        </text>
    `
    )}

  <path
    d="M34.9975 209.424V212.718H26.8944C24.5336 212.718 22.4723 211.394 21.3695 209.424C21.2092 209.138 21.0688 208.838 20.9511 208.526C20.7201 207.915 20.5748 207.259 20.5308 206.576V205.685C20.5403 205.532 20.5554 205.381 20.5751 205.232C20.6154 204.925 20.6763 204.625 20.7563 204.333C21.5133 201.568 23.9747 199.542 26.8944 199.542C29.8141 199.542 32.2752 201.568 33.0322 204.333H29.5674C28.9986 203.432 28.014 202.836 26.8944 202.836C25.7747 202.836 24.7902 203.432 24.2214 204.333C24.048 204.607 23.9135 204.91 23.8254 205.232C23.7471 205.518 23.7053 205.819 23.7053 206.13C23.7053 207.074 24.0898 207.926 24.7061 208.526C25.2773 209.083 26.0473 209.424 26.8944 209.424H34.9975Z"
    fill="#FD366E" />
  <path
    d="M35.0003 205.232V208.527H29.0854C29.7018 207.926 30.0862 207.075 30.0862 206.131C30.0862 205.819 30.0445 205.518 29.9662 205.232H35.0003Z"
    fill="#FD366E" />
  <g clip-path="url(#clip2_327_1972)">
    <path d="M66.8093 213.99V212.305H75.7416V213.99H66.8093Z" fill="#FD366E" />
    <path
      d="M64.2932 211.83C62.6215 211.83 61.5234 211.078 61.5234 209.262V204.959H60.032V203.258H61.6382V200.853H63.4738V203.258H65.8994V204.959H63.4738V209.245C63.4738 209.851 63.7196 210.112 64.3096 210.112H65.8011V211.83H64.2932Z"
      fill="white" />
    <path
      d="M57.7429 201.933C57.0382 201.933 56.5137 201.41 56.5137 200.723C56.5137 200.052 57.0382 199.528 57.7429 199.528C58.4477 199.528 58.9721 200.052 58.9721 200.723C58.9721 201.41 58.4477 201.933 57.7429 201.933ZM56.7595 211.83V204.96H55.2517V203.258H58.6935V211.83H56.7595Z"
      fill="white" />
    <path
      d="M46.6343 211.83V203.258H48.5682V204.24H48.7157C49.0927 203.585 49.8794 203.045 51.0267 203.045C52.9115 203.045 54.1079 204.452 54.1079 206.219V211.83H52.1739V206.677C52.1739 205.614 51.42 204.878 50.4366 204.878C49.3713 204.878 48.5682 205.696 48.5682 206.775V211.83H46.6343Z"
      fill="white" />
    <path
      d="M43.6872 201.933C42.9825 201.933 42.458 201.41 42.458 200.723C42.458 200.052 42.9825 199.528 43.6872 199.528C44.392 199.528 44.9165 200.052 44.9165 200.723C44.9165 201.41 44.392 201.933 43.6872 201.933ZM42.7039 211.83V204.96H41.196V203.258H44.6378V211.83H42.7039Z"
      fill="white" />
  </g>
  <text transform="translate(20.5308 218.878)" fill="#E4E4E7" xml:space="preserve" style="white-space: pre"
    font-family="Aeonik Fono" font-size="8.4834" letter-spacing="0em">
    <tspan x="0" y="7.9441">FEB 12 - 16</tspan>
  </text>
  <g filter="url(#filter3_f_327_1972)">
    <path
      d="M269.739 -75.0625L-162.657 342.708C-169.717 349.529 -173.313 359.178 -172.44 368.956C-170.016 396.076 -137.304 408.357 -117.632 389.531L316.753 -26.1699C327.52 -36.4735 330.299 -52.5983 323.602 -65.9116C313.326 -86.3427 286.187 -90.9535 269.739 -75.0625Z"
      fill="url(#paint6_linear_327_1972)" />
  </g>
  <text transform="translate(20.9619 84.6782)" fill="white" fill-opacity="0.5" xml:space="preserve"
    style="white-space: pre" font-family="Aeonik Fono" font-size="10.2656" letter-spacing="0em">
    <tspan x="0" y="${8.74695 + big_line_height * (split_name.length - 1)}">#${ticket.id
        .toString()
        .padStart(6, '0')}</tspan>
  </text>
  <rect x="214.791" y="143" width="222.857" height="106.297" fill="url(#paint7_linear_327_1972)" />
</g>
</g>
<defs>
<filter id="filter0_b_446_1414" x="-6.84375" y="-6.84375" width="451.688" height="262.688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="3.42188"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_446_1414"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_446_1414" result="shape"/>
</filter>
<filter id="filter1_f_446_1414" x="135.486" y="-59.7668" width="361.784" height="440.284" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="41.3833" result="effect1_foregroundBlur_446_1414"/>
</filter>
<filter id="filter2_d_446_1414" x="178.149" y="-15.3971" width="276.458" height="354.958" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.70653"/>
<feGaussianBlur stdDeviation="20.0517"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_446_1414"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_446_1414" result="shape"/>
</filter>
<filter id="filter3_b_446_1414" x="211.424" y="16.1735" width="209.903" height="288.403" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="3.41306"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_446_1414"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_446_1414" result="shape"/>
</filter>
<filter id="filter4_b_446_1414" x="211.424" y="16.1735" width="209.903" height="288.403" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="3.41306"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_446_1414"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_446_1414" result="shape"/>
</filter>
<filter id="filter5_f_446_1414" x="213.681" y="92.6188" width="309.303" height="330.345" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="14.9321" result="effect1_foregroundBlur_446_1414"/>
</filter>
<filter id="filter6_f_446_1414" x="236.295" y="-25.984" width="309.303" height="330.345" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="14.9321" result="effect1_foregroundBlur_446_1414"/>
</filter>
<filter id="filter7_f_446_1414" x="153.955" y="-45.1831" width="309.303" height="330.345" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="14.9321" result="effect1_foregroundBlur_446_1414"/>
</filter>
<filter id="filter8_f_446_1414" x="62.6566" y="-56.7021" width="309.303" height="330.345" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="14.9321" result="effect1_foregroundBlur_446_1414"/>
</filter>
<linearGradient id="paint0_linear_446_1414" x1="219" y1="0" x2="219" y2="249" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_446_1414" x1="436.048" y1="28.7593" x2="316.378" y2="157.389" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD366E" stop-opacity="0.8"/>
<stop offset="1" stop-color="#FD366E" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_446_1414" x1="414.501" y1="22.9996" x2="335.534" y2="34.2814" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD366E"/>
<stop offset="1" stop-color="#FD366E" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_446_1414" x1="407.035" y1="22.9996" x2="360.274" y2="87.7228" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.2"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_446_1414" x1="401.489" y1="38.785" x2="294.618" y2="118.778" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD366E"/>
<stop offset="1" stop-color="#FD366E" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint5_linear_446_1414" x1="434.98" y1="63.5296" x2="357.546" y2="124.111" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.44"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear_446_1414" x1="408.117" y1="163.675" x2="253.25" y2="375.831" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD366E" stop-opacity="0.16"/>
<stop offset="1" stop-color="#FD366E" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_446_1414" x1="430.731" y1="45.0721" x2="275.864" y2="257.229" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD366E" stop-opacity="0.16"/>
<stop offset="1" stop-color="#FD366E" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint8_linear_446_1414" x1="348.391" y1="25.873" x2="193.524" y2="238.029" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD366E" stop-opacity="0.16"/>
<stop offset="1" stop-color="#FD366E" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint9_linear_446_1414" x1="257.093" y1="14.3541" x2="102.226" y2="226.511" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD366E" stop-opacity="0.16"/>
<stop offset="1" stop-color="#FD366E" stop-opacity="0"/>
</linearGradient>
<clipPath id="clip0_446_1414">
<rect width="438" height="249" rx="18" fill="white"/>
</clipPath>
<clipPath id="clip1_446_1414">
<rect x="218.252" y="22.9998" width="196.251" height="274.751" rx="6.82611" fill="white"/>
</clipPath>
<filter id="filter0_b_327_1972" x="-6.84375" y="-6.84375" width="451.688" height="262.688"
  filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix" />
  <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.42188" />
  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_327_1972" />
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_327_1972" result="shape" />
</filter>
<filter id="filter1_b_327_1972" x="211.183" y="15.9824" width="209.635" height="288.035"
  filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix" />
  <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.4087" />
  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_327_1972" />
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_327_1972" result="shape" />
</filter>

<filter id="filter2_f_327_1972" x="111.596" y="-49.0865" width="376.865" height="398.256"
  filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix" />
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
  <feGaussianBlur stdDeviation="34.087" result="effect1_foregroundBlur_327_1972" />
</filter>
<filter id="filter3_f_327_1972" x="-241.006" y="-153.03" width="636.664" height="620.059"
  filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix" />
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
  <feGaussianBlur stdDeviation="34.2188" result="effect1_foregroundBlur_327_1972" />
</filter>
<linearGradient id="paint0_linear_327_1972" x1="219" y1="0" x2="219" y2="249" gradientUnits="userSpaceOnUse">
  <stop />
  <stop offset="1" stop-opacity="0" />
</linearGradient>
<linearGradient id="paint1_linear_327_1972" x1="414" y1="22.7998" x2="208.457" y2="300.077"
  gradientUnits="userSpaceOnUse">
  <stop stop-color="#232325" />
  <stop offset="1" stop-color="#232325" stop-opacity="0" />
  <stop offset="1" stop-color="#232325" stop-opacity="0.2" />
</linearGradient>
<linearGradient id="paint2_linear_327_1972" x1="405.478" y1="16.8346" x2="328.143" y2="53.265"
  gradientUnits="userSpaceOnUse">
  <stop stop-color="white" />
  <stop offset="1" stop-color="white" stop-opacity="0.08" />
</linearGradient>
<linearGradient id="paint3_linear_327_1972" x1="360.539" y1="59.757" x2="205.87" y2="271.642"
  gradientUnits="userSpaceOnUse">
  <stop stop-color="white" />
  <stop offset="1" stop-color="white" stop-opacity="0" />
</linearGradient>
<linearGradient id="paint4_linear_327_1972" x1="396.957" y1="22.7998" x2="396.957" y2="297.2"
  gradientUnits="userSpaceOnUse">
  <stop stop-color="#D9D9D9" />
  <stop offset="0.199262" stop-color="#D9D9D9" stop-opacity="0.4" />
  <stop offset="0.391652" stop-color="#D9D9D9" />
  <stop offset="0.579635" stop-color="#D9D9D9" stop-opacity="0.4" />
  <stop offset="0.754402" stop-color="#D9D9D9" />
  <stop offset="0.964415" stop-color="#D9D9D9" stop-opacity="0.4" />
</linearGradient>
<linearGradient id="paint5_linear_327_1972" x1="2.80462" y1="123.806" x2="34.087" y2="123.806"
  gradientUnits="userSpaceOnUse">
  <stop stop-color="#222224" />
  <stop offset="1" stop-color="#222224" stop-opacity="0" />
</linearGradient>
<linearGradient id="paint6_linear_327_1972" x1="270.987" y1="-43.608" x2="-85.4683" y2="355.661"
  gradientUnits="userSpaceOnUse">
  <stop offset="0.0553357" stop-color="white" stop-opacity="0.08" />
  <stop offset="0.391231" stop-color="white" stop-opacity="0.08" />
  <stop offset="1" stop-color="white" stop-opacity="0" />
</linearGradient>
<linearGradient id="paint7_linear_327_1972" x1="326.22" y1="143" x2="326.22" y2="249.297"
  gradientUnits="userSpaceOnUse">
  <stop stop-color="#18181B" stop-opacity="0" />
  <stop offset="1" stop-color="#18181B" />
</linearGradient>
<clipPath id="clip0_327_1972">
  <rect width="438" height="249" rx="18" fill="white" />
</clipPath>
<clipPath id="clip1_327_1972">
  <rect x="218" y="22.7998" width="196" height="274.4" rx="6.81739" fill="white" />
</clipPath>
<clipPath id="clip2_327_1972">
  <rect width="34.5396" height="14.543" fill="white" transform="translate(41.1333 199.487)" />
</clipPath>


<filter id="filter0_b_450_3173" x="-6.84375" y="-6.84375" width="451.688" height="262.688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="3.42188"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_450_3173"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_450_3173" result="shape"/>
</filter>
<filter id="filter1_f_450_3173" x="135.339" y="-59.8608" width="361.322" height="439.722" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="41.3304" result="effect1_foregroundBlur_450_3173"/>
</filter>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_450_3173" xmlns:xlink="http://www.w3.org/1999/xlink" transform="matrix(0.00120482 0 0 0.000942754 0 -0.00154516)"/>
</pattern>
<linearGradient id="paint0_linear_450_3173" x1="219" y1="0" x2="219" y2="249" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_450_3173" x1="435.517" y1="28.5522" x2="316" y2="157.017" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.8"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_450_3173" x1="326.22" y1="143" x2="326.22" y2="249.297" gradientUnits="userSpaceOnUse">
<stop stop-color="#18181B" stop-opacity="0"/>
<stop offset="1" stop-color="#18181B"/>
</linearGradient>
<clipPath id="clip0_450_3173">
<rect width="438" height="249" rx="18" fill="white"/>
</clipPath>
<image id="image0_450_3173" width="830" height="1064" xlink:href="${rainbow_png}" xmlns:xlink="http://www.w3.org/1999/xlink"/>


</defs>
</svg>
`;
};
