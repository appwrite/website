import { PUBLIC_APPWRITE_COL_INIT_ID, PUBLIC_APPWRITE_DB_INIT_ID } from '$env/static/public';
import { appwriteInit } from '$lib/appwrite/init.js';
import type { TicketData } from '../../constants.js';
import sharp from 'sharp';

const getSvg = (ticket: TicketData) => `
<svg width="438" height="249" viewBox="0 0 438 249" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_327_1972)">
  <g clip-path="url(#clip0_327_1972)">
    <rect width="438" height="249" rx="18" fill="#19191C" />
    <rect width="438" height="249" rx="18" fill="url(#paint0_linear_327_1972)" fill-opacity="0.64" />
    <g clip-path="url(#clip1_327_1972)">
      <g filter="url(#filter1_b_327_1972)">
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
      </g>
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
          <rect opacity="0.64" x="414" y="22.7998" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 22.7998)" fill="#FD366E" />
          <rect opacity="0.4" x="414" y="27.9131" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 27.9131)" fill="#FD366E" />
          <rect opacity="0.32" x="414" y="33.0259" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 33.0259)" fill="#FD366E" />
          <rect opacity="0.16" x="414" y="38.1392" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 38.1392)" fill="#FD366E" />
          <rect opacity="0.8" x="414" y="43.252" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 43.252)" fill="#FD366E" />
          <rect opacity="0.64" x="414" y="48.3652" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 48.3652)" fill="#FD366E" />
          <rect opacity="0.4" x="414" y="53.478" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 53.478)" fill="#FD366E" />
          <rect opacity="0.32" x="414" y="58.5913" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 58.5913)" fill="#FD366E" />
          <rect opacity="0.16" x="414" y="63.7041" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 63.7041)" fill="#FD366E" />
          <rect opacity="0.4" x="414" y="68.8174" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 68.8174)" fill="#FD366E" />
          <rect opacity="0.32" x="414" y="73.9302" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 73.9302)" fill="#FD366E" />
          <rect opacity="0.8" x="414" y="79.0435" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 79.0435)" fill="#FD366E" />
          <rect opacity="0.16" x="414" y="84.1562" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 84.1562)" fill="#FD366E" />
          <rect opacity="0.4" x="414" y="89.2695" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 89.2695)" fill="#FD366E" />
          <rect opacity="0.32" x="414" y="94.3823" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 94.3823)" fill="#FD366E" />
          <rect opacity="0.32" x="414" y="99.4956" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 99.4956)" fill="#FD366E" />
          <rect opacity="0.32" x="414" y="104.608" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 104.608)" fill="#FD366E" />
          <rect opacity="0.64" x="414" y="109.722" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 109.722)" fill="#FD366E" />
          <rect opacity="0.16" x="414" y="114.834" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 114.834)" fill="#FD366E" />
          <rect opacity="0.64" x="414" y="119.948" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 119.948)" fill="#FD366E" />
          <rect opacity="0.4" x="414" y="125.061" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 125.061)" fill="#FD366E" />
          <rect opacity="0.32" x="414" y="130.174" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 130.174)" fill="#FD366E" />
          <rect opacity="0.16" x="414" y="135.287" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 135.287)" fill="#FD366E" />
          <rect opacity="0.8" x="414" y="140.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 140.4)" fill="#FD366E" />
          <rect opacity="0.8" x="414" y="145.513" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 145.513)" fill="#FD366E" />
          <rect opacity="0.64" x="414" y="150.626" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 150.626)" fill="#FD366E" />
          <rect opacity="0.4" x="414" y="155.739" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 155.739)" fill="#FD366E" />
          <rect opacity="0.8" x="414" y="160.852" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 160.852)" fill="#FD366E" />
          <rect opacity="0.4" x="414" y="165.965" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 165.965)" fill="#FD366E" />
          <rect opacity="0.16" x="414" y="171.078" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 171.078)" fill="#FD366E" />
          <rect opacity="0.32" x="414" y="176.191" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 176.191)" fill="#FD366E" />
          <rect opacity="0.16" x="414" y="181.304" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 181.304)" fill="#FD366E" />
          <rect opacity="0.64" x="414" y="186.417" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 186.417)" fill="#FD366E" />
          <rect opacity="0.16" x="414" y="191.53" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 191.53)" fill="#FD366E" />
          <rect opacity="0.64" x="414" y="196.643" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 196.643)" fill="#FD366E" />
          <rect opacity="0.32" x="414" y="201.756" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 201.756)" fill="#FD366E" />
          <rect opacity="0.8" x="414" y="206.869" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 206.869)" fill="#FD366E" />
          <rect opacity="0.4" x="414" y="211.982" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 211.982)" fill="#FD366E" />
          <rect opacity="0.32" x="414" y="217.096" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 217.096)" fill="#FD366E" />
          <rect opacity="0.32" x="414" y="222.208" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 222.208)" fill="#FD366E" />
          <rect opacity="0.64" x="414" y="227.321" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 227.321)" fill="#FD366E" />
          <rect opacity="0.4" x="414" y="232.435" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 232.435)" fill="#FD366E" />
          <rect opacity="0.16" x="414" y="237.548" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 237.548)" fill="#FD366E" />
          <rect opacity="0.8" x="414" y="242.661" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 242.661)" fill="#FD366E" />
          <rect opacity="0.8" x="414" y="247.774" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 414 247.774)" fill="#FD366E" />
          <rect opacity="0.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 251.182)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 246.069)" fill="#FD366E" />
          <rect opacity="0.8" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 240.956)" fill="#FD366E" />
          <rect opacity="0.16" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 235.843)" fill="#FD366E" />
          <rect opacity="0.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 230.73)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 225.617)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 220.504)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 215.391)" fill="#FD366E" />
          <rect opacity="0.64" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 210.278)" fill="#FD366E" />
          <rect opacity="0.16" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 205.165)" fill="#FD366E" />
          <rect opacity="0.64" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 200.052)" fill="#FD366E" />
          <rect opacity="0.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 194.939)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 189.826)" fill="#FD366E" />
          <rect opacity="0.16" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 184.713)" fill="#FD366E" />
          <rect opacity="0.8" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 179.6)" fill="#FD366E" />
          <rect opacity="0.8" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 174.487)" fill="#FD366E" />
          <rect opacity="0.64" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 169.374)" fill="#FD366E" />
          <rect opacity="0.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 164.261)" fill="#FD366E" />
          <rect opacity="0.8" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 159.147)" fill="#FD366E" />
          <rect opacity="0.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 154.035)" fill="#FD366E" />
          <rect opacity="0.16" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 148.921)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 143.809)" fill="#FD366E" />
          <rect opacity="0.16" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 138.695)" fill="#FD366E" />
          <rect opacity="0.64" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 133.583)" fill="#FD366E" />
          <rect opacity="0.16" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 128.469)" fill="#FD366E" />
          <rect opacity="0.64" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 123.356)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 118.243)" fill="#FD366E" />
          <rect opacity="0.8" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 113.13)" fill="#FD366E" />
          <rect opacity="0.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 108.017)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 102.904)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 97.791)" fill="#FD366E" />
          <rect opacity="0.64" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 92.6777)" fill="#FD366E" />
          <rect opacity="0.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 87.5649)" fill="#FD366E" />
          <rect opacity="0.16" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 82.4517)" fill="#FD366E" />
          <rect opacity="0.8" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 77.3389)" fill="#FD366E" />
          <rect opacity="0.8" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 72.2256)" fill="#FD366E" />
          <rect opacity="0.8" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 67.1128)" fill="#FD366E" />
          <rect opacity="0.64" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 61.9995)" fill="#FD366E" />
          <rect opacity="0.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 56.8867)" fill="#FD366E" />
          <rect opacity="0.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 51.7734)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 46.6606)" fill="#FD366E" />
          <rect opacity="0.16" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 41.5474)" fill="#FD366E" />
          <rect opacity="0.64" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 36.4346)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 31.3213)" fill="#FD366E" />
          <rect opacity="0.16" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 408.887 26.2085)" fill="#FD366E" />
          <rect opacity="0.4" x="403.774" y="22.7998" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 22.7998)" fill="#FD366E" />
          <rect opacity="0.32" x="403.774" y="27.9131" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 27.9131)" fill="#FD366E" />
          <rect opacity="0.16" x="403.774" y="33.0259" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 33.0259)" fill="#FD366E" />
          <rect opacity="0.8" x="403.774" y="38.1392" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 38.1392)" fill="#FD366E" />
          <rect opacity="0.8" x="403.774" y="43.252" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 43.252)" fill="#FD366E" />
          <rect opacity="0.64" x="403.774" y="48.3652" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 48.3652)" fill="#FD366E" />
          <rect opacity="0.32" x="403.774" y="53.478" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 53.478)" fill="#FD366E" />
          <rect opacity="0.32" x="403.774" y="58.5913" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 58.5913)" fill="#FD366E" />
          <rect opacity="0.32" x="403.774" y="63.7041" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 63.7041)" fill="#FD366E" />
          <rect opacity="0.64" x="403.774" y="68.8174" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 68.8174)" fill="#FD366E" />
          <rect opacity="0.16" x="403.774" y="73.9302" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 73.9302)" fill="#FD366E" />
          <rect opacity="0.64" x="403.774" y="79.0435" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 79.0435)" fill="#FD366E" />
          <rect opacity="0.4" x="403.774" y="84.1562" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 84.1562)" fill="#FD366E" />
          <rect opacity="0.4" x="403.774" y="89.2695" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 89.2695)" fill="#FD366E" />
          <rect opacity="0.8" x="403.774" y="94.3823" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 94.3823)" fill="#FD366E" />
          <rect opacity="0.4" x="403.774" y="99.4956" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 99.4956)" fill="#FD366E" />
          <rect opacity="0.4" x="403.774" y="104.608" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 104.608)" fill="#FD366E" />
          <rect opacity="0.16" x="403.774" y="109.722" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 109.722)" fill="#FD366E" />
          <rect opacity="0.8" x="403.774" y="114.834" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 114.834)" fill="#FD366E" />
          <rect opacity="0.8" x="403.774" y="119.948" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 119.948)" fill="#FD366E" />
          <rect opacity="0.8" x="403.774" y="125.061" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 125.061)" fill="#FD366E" />
          <rect opacity="0.64" x="403.774" y="130.174" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 130.174)" fill="#FD366E" />
          <rect opacity="0.4" x="403.774" y="135.287" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 135.287)" fill="#FD366E" />
          <rect opacity="0.4" x="403.774" y="140.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 140.4)" fill="#FD366E" />
          <rect opacity="0.32" x="403.774" y="145.513" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 145.513)" fill="#FD366E" />
          <rect opacity="0.16" x="403.774" y="150.626" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 150.626)" fill="#FD366E" />
          <rect opacity="0.64" x="403.774" y="155.739" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 155.739)" fill="#FD366E" />
          <rect opacity="0.32" x="403.774" y="160.852" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 160.852)" fill="#FD366E" />
          <rect opacity="0.16" x="403.774" y="165.965" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 165.965)" fill="#FD366E" />
          <rect opacity="0.16" x="403.774" y="171.078" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 171.078)" fill="#FD366E" />
          <rect opacity="0.64" x="403.774" y="176.191" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 176.191)" fill="#FD366E" />
          <rect opacity="0.4" x="403.774" y="181.304" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 181.304)" fill="#FD366E" />
          <rect opacity="0.32" x="403.774" y="186.417" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 186.417)" fill="#FD366E" />
          <rect opacity="0.16" x="403.774" y="191.53" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 191.53)" fill="#FD366E" />
          <rect opacity="0.32" x="403.774" y="196.643" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 196.643)" fill="#FD366E" />
          <rect opacity="0.32" x="403.774" y="201.756" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 201.756)" fill="#FD366E" />
          <rect opacity="0.64" x="403.774" y="206.869" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 206.869)" fill="#FD366E" />
          <rect opacity="0.4" x="403.774" y="211.982" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 211.982)" fill="#FD366E" />
          <rect opacity="0.8" x="403.774" y="217.095" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 217.095)" fill="#FD366E" />
          <rect opacity="0.64" x="403.774" y="222.208" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 222.208)" fill="#FD366E" />
          <rect opacity="0.4" x="403.774" y="227.321" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 227.321)" fill="#FD366E" />
          <rect opacity="0.32" x="403.774" y="232.435" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 232.435)" fill="#FD366E" />
          <rect opacity="0.16" x="403.774" y="237.547" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 237.547)" fill="#FD366E" />
          <rect opacity="0.4" x="403.774" y="242.661" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 242.661)" fill="#FD366E" />
          <rect opacity="0.32" x="403.774" y="247.773" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 403.774 247.773)" fill="#FD366E" />
          <rect opacity="0.64" x="398.661" y="22.7998" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 22.7998)" fill="#FD366E" />
          <rect opacity="0.4" x="398.661" y="27.9131" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 27.9131)" fill="#FD366E" />
          <rect opacity="0.32" x="398.661" y="33.0259" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 33.0259)" fill="#FD366E" />
          <rect opacity="0.16" x="398.661" y="38.1392" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 38.1392)" fill="#FD366E" />
          <rect opacity="0.8" x="398.661" y="43.252" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 43.252)" fill="#FD366E" />
          <rect opacity="0.64" x="398.661" y="48.3652" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 48.3652)" fill="#FD366E" />
          <rect opacity="0.4" x="398.661" y="53.478" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 53.478)" fill="#FD366E" />
          <rect opacity="0.32" x="398.661" y="58.5913" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 58.5913)" fill="#FD366E" />
          <rect opacity="0.16" x="398.661" y="63.7041" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 63.7041)" fill="#FD366E" />
          <rect opacity="0.4" x="398.661" y="68.8174" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 68.8174)" fill="#FD366E" />
          <rect opacity="0.32" x="398.661" y="73.9302" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 73.9302)" fill="#FD366E" />
          <rect opacity="0.8" x="398.661" y="79.0435" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 79.0435)" fill="#FD366E" />
          <rect opacity="0.16" x="398.661" y="84.1562" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 84.1562)" fill="#FD366E" />
          <rect opacity="0.4" x="398.661" y="89.2695" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 89.2695)" fill="#FD366E" />
          <rect opacity="0.32" x="398.661" y="94.3823" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 94.3823)" fill="#FD366E" />
          <rect opacity="0.32" x="398.661" y="99.4956" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 99.4956)" fill="#FD366E" />
          <rect opacity="0.32" x="398.661" y="104.608" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 104.608)" fill="#FD366E" />
          <rect opacity="0.64" x="398.661" y="109.722" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 109.722)" fill="#FD366E" />
          <rect opacity="0.16" x="398.661" y="114.834" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 114.834)" fill="#FD366E" />
          <rect opacity="0.64" x="398.661" y="119.948" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 119.948)" fill="#FD366E" />
          <rect opacity="0.4" x="398.661" y="125.061" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 125.061)" fill="#FD366E" />
          <rect opacity="0.32" x="398.661" y="130.174" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 130.174)" fill="#FD366E" />
          <rect opacity="0.16" x="398.661" y="135.287" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 135.287)" fill="#FD366E" />
          <rect opacity="0.8" x="398.661" y="140.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 140.4)" fill="#FD366E" />
          <rect opacity="0.8" x="398.661" y="145.513" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 145.513)" fill="#FD366E" />
          <rect opacity="0.64" x="398.661" y="150.626" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 150.626)" fill="#FD366E" />
          <rect opacity="0.4" x="398.661" y="155.739" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 155.739)" fill="#FD366E" />
          <rect opacity="0.8" x="398.661" y="160.852" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 160.852)" fill="#FD366E" />
          <rect opacity="0.4" x="398.661" y="165.965" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 165.965)" fill="#FD366E" />
          <rect opacity="0.16" x="398.661" y="171.078" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 171.078)" fill="#FD366E" />
          <rect opacity="0.32" x="398.661" y="176.191" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 176.191)" fill="#FD366E" />
          <rect opacity="0.16" x="398.661" y="181.304" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 181.304)" fill="#FD366E" />
          <rect opacity="0.64" x="398.661" y="186.417" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 186.417)" fill="#FD366E" />
          <rect opacity="0.16" x="398.661" y="191.53" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 191.53)" fill="#FD366E" />
          <rect opacity="0.64" x="398.661" y="196.643" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 196.643)" fill="#FD366E" />
          <rect opacity="0.32" x="398.661" y="201.756" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 201.756)" fill="#FD366E" />
          <rect opacity="0.8" x="398.661" y="206.869" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 206.869)" fill="#FD366E" />
          <rect opacity="0.4" x="398.661" y="211.982" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 211.982)" fill="#FD366E" />
          <rect opacity="0.32" x="398.661" y="217.095" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 217.095)" fill="#FD366E" />
          <rect opacity="0.32" x="398.661" y="222.208" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 222.208)" fill="#FD366E" />
          <rect opacity="0.64" x="398.661" y="227.321" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 227.321)" fill="#FD366E" />
          <rect opacity="0.4" x="398.661" y="232.435" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 232.435)" fill="#FD366E" />
          <rect opacity="0.16" x="398.661" y="237.547" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 237.547)" fill="#FD366E" />
          <rect opacity="0.8" x="398.661" y="242.661" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 242.661)" fill="#FD366E" />
          <rect opacity="0.8" x="398.661" y="247.773" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 398.661 247.773)" fill="#FD366E" />
          <rect opacity="0.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 251.182)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 246.069)" fill="#FD366E" />
          <rect opacity="0.8" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 240.956)" fill="#FD366E" />
          <rect opacity="0.16" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 235.843)" fill="#FD366E" />
          <rect opacity="0.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 230.73)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 225.617)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 220.504)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 215.391)" fill="#FD366E" />
          <rect opacity="0.64" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 210.278)" fill="#FD366E" />
          <rect opacity="0.16" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 205.165)" fill="#FD366E" />
          <rect opacity="0.64" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 200.052)" fill="#FD366E" />
          <rect opacity="0.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 194.939)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 189.826)" fill="#FD366E" />
          <rect opacity="0.16" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 184.713)" fill="#FD366E" />
          <rect opacity="0.8" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 179.6)" fill="#FD366E" />
          <rect opacity="0.8" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 174.487)" fill="#FD366E" />
          <rect opacity="0.64" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 169.374)" fill="#FD366E" />
          <rect opacity="0.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 164.261)" fill="#FD366E" />
          <rect opacity="0.8" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 159.147)" fill="#FD366E" />
          <rect opacity="0.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 154.035)" fill="#FD366E" />
          <rect opacity="0.16" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 148.921)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 143.809)" fill="#FD366E" />
          <rect opacity="0.16" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 138.695)" fill="#FD366E" />
          <rect opacity="0.64" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 133.583)" fill="#FD366E" />
          <rect opacity="0.16" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 128.469)" fill="#FD366E" />
          <rect opacity="0.64" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 123.356)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 118.243)" fill="#FD366E" />
          <rect opacity="0.8" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 113.13)" fill="#FD366E" />
          <rect opacity="0.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 108.017)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 102.904)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 97.791)" fill="#FD366E" />
          <rect opacity="0.64" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 92.6777)" fill="#FD366E" />
          <rect opacity="0.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 87.5649)" fill="#FD366E" />
          <rect opacity="0.16" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 82.4517)" fill="#FD366E" />
          <rect opacity="0.8" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 77.3389)" fill="#FD366E" />
          <rect opacity="0.8" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 72.2256)" fill="#FD366E" />
          <rect opacity="0.8" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 67.1128)" fill="#FD366E" />
          <rect opacity="0.64" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 61.9995)" fill="#FD366E" />
          <rect opacity="0.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 56.8867)" fill="#FD366E" />
          <rect opacity="0.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 51.7734)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 46.6606)" fill="#FD366E" />
          <rect opacity="0.16" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 41.5474)" fill="#FD366E" />
          <rect opacity="0.64" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 36.4346)" fill="#FD366E" />
          <rect opacity="0.32" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 31.3213)" fill="#FD366E" />
          <rect opacity="0.16" width="3.4087" height="3.4087" rx="0.852174"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 393.548 26.2085)" fill="#FD366E" />
          <rect opacity="0.4" x="388.435" y="22.7998" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 22.7998)" fill="#FD366E" />
          <rect opacity="0.32" x="388.435" y="27.9131" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 27.9131)" fill="#FD366E" />
          <rect opacity="0.16" x="388.435" y="33.0259" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 33.0259)" fill="#FD366E" />
          <rect opacity="0.8" x="388.435" y="38.1392" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 38.1392)" fill="#FD366E" />
          <rect opacity="0.8" x="388.435" y="43.252" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 43.252)" fill="#FD366E" />
          <rect opacity="0.64" x="388.435" y="48.3652" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 48.3652)" fill="#FD366E" />
          <rect opacity="0.32" x="388.435" y="53.478" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 53.478)" fill="#FD366E" />
          <rect opacity="0.32" x="388.435" y="58.5913" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 58.5913)" fill="#FD366E" />
          <rect opacity="0.32" x="388.435" y="63.7041" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 63.7041)" fill="#FD366E" />
          <rect opacity="0.64" x="388.435" y="68.8174" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 68.8174)" fill="#FD366E" />
          <rect opacity="0.16" x="388.435" y="73.9302" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 73.9302)" fill="#FD366E" />
          <rect opacity="0.64" x="388.435" y="79.0435" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 79.0435)" fill="#FD366E" />
          <rect opacity="0.4" x="388.435" y="84.1562" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 84.1562)" fill="#FD366E" />
          <rect opacity="0.4" x="388.435" y="89.2695" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 89.2695)" fill="#FD366E" />
          <rect opacity="0.8" x="388.435" y="94.3823" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 94.3823)" fill="#FD366E" />
          <rect opacity="0.4" x="388.435" y="99.4956" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 99.4956)" fill="#FD366E" />
          <rect opacity="0.4" x="388.435" y="104.608" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 104.608)" fill="#FD366E" />
          <rect opacity="0.16" x="388.435" y="109.722" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 109.722)" fill="#FD366E" />
          <rect opacity="0.8" x="388.435" y="114.834" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 114.834)" fill="#FD366E" />
          <rect opacity="0.8" x="388.435" y="119.948" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 119.948)" fill="#FD366E" />
          <rect opacity="0.8" x="388.435" y="125.061" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 125.061)" fill="#FD366E" />
          <rect opacity="0.64" x="388.435" y="130.174" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 130.174)" fill="#FD366E" />
          <rect opacity="0.4" x="388.435" y="135.287" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 135.287)" fill="#FD366E" />
          <rect opacity="0.4" x="388.435" y="140.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 140.4)" fill="#FD366E" />
          <rect opacity="0.32" x="388.435" y="145.513" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 145.513)" fill="#FD366E" />
          <rect opacity="0.16" x="388.435" y="150.626" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 150.626)" fill="#FD366E" />
          <rect opacity="0.64" x="388.435" y="155.739" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 155.739)" fill="#FD366E" />
          <rect opacity="0.32" x="388.435" y="160.852" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 160.852)" fill="#FD366E" />
          <rect opacity="0.16" x="388.435" y="165.965" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 165.965)" fill="#FD366E" />
          <rect opacity="0.16" x="388.435" y="171.078" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 171.078)" fill="#FD366E" />
          <rect opacity="0.64" x="388.435" y="176.191" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 176.191)" fill="#FD366E" />
          <rect opacity="0.4" x="388.435" y="181.304" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 181.304)" fill="#FD366E" />
          <rect opacity="0.32" x="388.435" y="186.417" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 186.417)" fill="#FD366E" />
          <rect opacity="0.16" x="388.435" y="191.53" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 191.53)" fill="#FD366E" />
          <rect opacity="0.32" x="388.435" y="196.643" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 196.643)" fill="#FD366E" />
          <rect opacity="0.32" x="388.435" y="201.756" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 201.756)" fill="#FD366E" />
          <rect opacity="0.64" x="388.435" y="206.869" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 206.869)" fill="#FD366E" />
          <rect opacity="0.4" x="388.435" y="211.982" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 211.982)" fill="#FD366E" />
          <rect opacity="0.8" x="388.435" y="217.096" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 217.096)" fill="#FD366E" />
          <rect opacity="0.64" x="388.435" y="222.208" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 222.208)" fill="#FD366E" />
          <rect opacity="0.4" x="388.435" y="227.321" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 227.321)" fill="#FD366E" />
          <rect opacity="0.32" x="388.435" y="232.435" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 232.435)" fill="#FD366E" />
          <rect opacity="0.16" x="388.435" y="237.548" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 237.548)" fill="#FD366E" />
          <rect opacity="0.4" x="388.435" y="242.661" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 242.661)" fill="#FD366E" />
          <rect opacity="0.32" x="388.435" y="247.774" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 388.435 247.774)" fill="#FD366E" />
          <rect opacity="0.64" x="383.322" y="22.7998" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 22.7998)" fill="#FD366E" />
          <rect opacity="0.4" x="383.322" y="27.9131" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 27.9131)" fill="#FD366E" />
          <rect opacity="0.32" x="383.322" y="33.0259" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 33.0259)" fill="#FD366E" />
          <rect opacity="0.16" x="383.322" y="38.1392" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 38.1392)" fill="#FD366E" />
          <rect opacity="0.8" x="383.322" y="43.252" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 43.252)" fill="#FD366E" />
          <rect opacity="0.64" x="383.322" y="48.3652" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 48.3652)" fill="#FD366E" />
          <rect opacity="0.4" x="383.322" y="53.478" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 53.478)" fill="#FD366E" />
          <rect opacity="0.32" x="383.322" y="58.5913" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 58.5913)" fill="#FD366E" />
          <rect opacity="0.16" x="383.322" y="63.7041" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 63.7041)" fill="#FD366E" />
          <rect opacity="0.4" x="383.322" y="68.8174" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 68.8174)" fill="#FD366E" />
          <rect opacity="0.32" x="383.322" y="73.9302" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 73.9302)" fill="#FD366E" />
          <rect opacity="0.8" x="383.322" y="79.0435" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 79.0435)" fill="#FD366E" />
          <rect opacity="0.16" x="383.322" y="84.1562" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 84.1562)" fill="#FD366E" />
          <rect opacity="0.4" x="383.322" y="89.2695" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 89.2695)" fill="#FD366E" />
          <rect opacity="0.32" x="383.322" y="94.3823" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 94.3823)" fill="#FD366E" />
          <rect opacity="0.32" x="383.322" y="99.4956" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 99.4956)" fill="#FD366E" />
          <rect opacity="0.32" x="383.322" y="104.608" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 104.608)" fill="#FD366E" />
          <rect opacity="0.64" x="383.322" y="109.722" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 109.722)" fill="#FD366E" />
          <rect opacity="0.16" x="383.322" y="114.834" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 114.834)" fill="#FD366E" />
          <rect opacity="0.64" x="383.322" y="119.948" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 119.948)" fill="#FD366E" />
          <rect opacity="0.4" x="383.322" y="125.061" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 125.061)" fill="#FD366E" />
          <rect opacity="0.32" x="383.322" y="130.174" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 130.174)" fill="#FD366E" />
          <rect opacity="0.16" x="383.322" y="135.287" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 135.287)" fill="#FD366E" />
          <rect opacity="0.8" x="383.322" y="140.4" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 140.4)" fill="#FD366E" />
          <rect opacity="0.8" x="383.322" y="145.513" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 145.513)" fill="#FD366E" />
          <rect opacity="0.64" x="383.322" y="150.626" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 150.626)" fill="#FD366E" />
          <rect opacity="0.4" x="383.322" y="155.739" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 155.739)" fill="#FD366E" />
          <rect opacity="0.8" x="383.322" y="160.852" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 160.852)" fill="#FD366E" />
          <rect opacity="0.4" x="383.322" y="165.965" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 165.965)" fill="#FD366E" />
          <rect opacity="0.16" x="383.322" y="171.078" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 171.078)" fill="#FD366E" />
          <rect opacity="0.32" x="383.322" y="176.191" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 176.191)" fill="#FD366E" />
          <rect opacity="0.16" x="383.322" y="181.304" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 181.304)" fill="#FD366E" />
          <rect opacity="0.64" x="383.322" y="186.417" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 186.417)" fill="#FD366E" />
          <rect opacity="0.16" x="383.322" y="191.53" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 191.53)" fill="#FD366E" />
          <rect opacity="0.64" x="383.322" y="196.643" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 196.643)" fill="#FD366E" />
          <rect opacity="0.32" x="383.322" y="201.756" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 201.756)" fill="#FD366E" />
          <rect opacity="0.8" x="383.322" y="206.869" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 206.869)" fill="#FD366E" />
          <rect opacity="0.4" x="383.322" y="211.982" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 211.982)" fill="#FD366E" />
          <rect opacity="0.32" x="383.322" y="217.095" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 217.095)" fill="#FD366E" />
          <rect opacity="0.32" x="383.322" y="222.208" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 222.208)" fill="#FD366E" />
          <rect opacity="0.64" x="383.322" y="227.321" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 227.321)" fill="#FD366E" />
          <rect opacity="0.4" x="383.322" y="232.435" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 232.435)" fill="#FD366E" />
          <rect opacity="0.16" x="383.322" y="237.547" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 237.547)" fill="#FD366E" />
          <rect opacity="0.8" x="383.322" y="242.661" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 242.661)" fill="#FD366E" />
          <rect opacity="0.8" x="383.322" y="247.773" width="3.4087" height="3.4087" rx="0.852174"
            transform="rotate(90 383.322 247.773)" fill="#FD366E" />
        </g>
      </g>
      ${
          ticket.gh_user
              ? `
      <text transform="translate(232.061 67.1128)" fill="#ADADB0" xml:space="preserve" style="white-space: pre"
        font-family="Aeonik Pro" font-size="10.2261" letter-spacing="0em">
        <tspan x="0" y="9.69774">@${ticket.gh_user}</tspan>
      </text>
      `
              : ''
      }
      <text transform="translate(232.061 46.6606)" fill="white" xml:space="preserve" style="white-space: pre"
        font-family="Aeonik Pro" font-size="17.0435" letter-spacing="-0.01em">
        <tspan x="0" y="15.5948">${ticket.name}</tspan>
      </text>
    </g>
    <text fill="#FD366E" xml:space="preserve" style="white-space: pre" font-family="Aeonik Pro" font-size="23.7885"
      letter-spacing="-0.01em">
      <tspan x="51.7739" y="71.2692">_</tspan>
    </text>
    <text fill="white" xml:space="preserve" style="white-space: pre" font-family="Aeonik Pro" font-size="23.7885"
      letter-spacing="-0.01em">
      <tspan x="20.5273" y="71.2692">init</tspan>
    </text>
    <text fill="white" fill-opacity="0.64" xml:space="preserve" style="white-space: pre" font-family="Aeonik Pro"
      font-size="23.7885" letter-spacing="-0.01em">
      <tspan x="20.5273" y="44.8783">${ticket.name}</tspan>
    </text>
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
      <tspan x="0" y="7.9441">JAN 15 - 20</tspan>
    </text>
    <g filter="url(#filter3_f_327_1972)">
      <path
        d="M269.739 -75.0625L-162.657 342.708C-169.717 349.529 -173.313 359.178 -172.44 368.956C-170.016 396.076 -137.304 408.357 -117.632 389.531L316.753 -26.1699C327.52 -36.4735 330.299 -52.5983 323.602 -65.9116C313.326 -86.3427 286.187 -90.9535 269.739 -75.0625Z"
        fill="url(#paint6_linear_327_1972)" />
    </g>
    <text transform="translate(20.9619 84.6782)" fill="white" fill-opacity="0.5" xml:space="preserve"
      style="white-space: pre" font-family="Aeonik Fono" font-size="10.2656" letter-spacing="0em">
      <tspan x="0" y="8.74695">#${ticket.id.toString().padStart(6, '0')}</tspan>
    </text>
    <rect x="214.791" y="143" width="222.857" height="106.297" fill="url(#paint7_linear_327_1972)" />
  </g>
</g>
<defs>
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
</defs>
</svg>
`;

export async function GET({ params }) {
    const ticket = (await appwriteInit.database.getDocument(
        PUBLIC_APPWRITE_DB_INIT_ID,
        PUBLIC_APPWRITE_COL_INIT_ID,
        params.id
    )) as unknown as TicketData;
    const svg = getSvg(ticket);

    const svgBuffer = Buffer.from(svg);
    const pngBuffer = await sharp(svgBuffer, {})
        .resize({
            width: 1000
        })
        .toFormat('png')
        .toBuffer();

    return new Response(pngBuffer, {
        headers: {
            'Content-Type': 'image/png'
        }
    });
}
