import type { SvelteComponentTyped } from "svelte";
import type { SVGAttributes } from "svelte/elements";

declare class SvgComponent extends SvelteComponentTyped<
  SVGAttributes<SVGSVGElement> & {
    // Support data-* attributes in Svelte 3
    [key: `data-${string}`]: any;
  },
  Record<string, any>,
  { default: {} }
> {}

export const Apple: typeof SvgComponent;
export const Appwrite: typeof SvgComponent;
export const ArrowDown: typeof SvgComponent;
export const ArrowExtLink: typeof SvgComponent;
export const ArrowLeft: typeof SvgComponent;
export const ArrowRight: typeof SvgComponent;
export const ArrowUp: typeof SvgComponent;
export const Calendar: typeof SvgComponent;
export const Check: typeof SvgComponent;
export const ChevronDown: typeof SvgComponent;
export const ChevronLeft: typeof SvgComponent;
export const ChevronRight: typeof SvgComponent;
export const ChevronUp: typeof SvgComponent;
export const Close: typeof SvgComponent;
export const Command: typeof SvgComponent;
export const Copy: typeof SvgComponent;
export const DailyDev: typeof SvgComponent;
export const Dark: typeof SvgComponent;
export const Discord: typeof SvgComponent;
export const DividerVertical: typeof SvgComponent;
export const Download: typeof SvgComponent;
export const ExtLink: typeof SvgComponent;
export const Firebase: typeof SvgComponent;
export const Github: typeof SvgComponent;
export const Google: typeof SvgComponent;
export const HamburgerMenu: typeof SvgComponent;
export const Light: typeof SvgComponent;
export const Linkedin: typeof SvgComponent;
export const Location: typeof SvgComponent;
export const LogoutLeft: typeof SvgComponent;
export const LogoutRight: typeof SvgComponent;
export const Mailgun: typeof SvgComponent;
export const Message: typeof SvgComponent;
export const Minus: typeof SvgComponent;
export const Nuxt: typeof SvgComponent;
export const Platform: typeof SvgComponent;
export const Play: typeof SvgComponent;
export const Plus: typeof SvgComponent;
export const ProductHunt: typeof SvgComponent;
export const Refine: typeof SvgComponent;
export const Rest: typeof SvgComponent;
export const Search: typeof SvgComponent;
export const Sendgrid: typeof SvgComponent;
export const Star: typeof SvgComponent;
export const System: typeof SvgComponent;
export const Textmagic: typeof SvgComponent;
export const Twitter: typeof SvgComponent;
export const Vue: typeof SvgComponent;
export const X: typeof SvgComponent;
export const Ycombinator: typeof SvgComponent;
export const Youtube: typeof SvgComponent;
