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

export const apple: typeof SvgComponent;
export const appwrite: typeof SvgComponent;
export const arrow-down: typeof SvgComponent;
export const arrow-ext-link: typeof SvgComponent;
export const arrow-left: typeof SvgComponent;
export const arrow-right: typeof SvgComponent;
export const arrow-up: typeof SvgComponent;
export const calendar: typeof SvgComponent;
export const check: typeof SvgComponent;
export const chevron-down: typeof SvgComponent;
export const chevron-left: typeof SvgComponent;
export const chevron-right: typeof SvgComponent;
export const chevron-up: typeof SvgComponent;
export const close: typeof SvgComponent;
export const command: typeof SvgComponent;
export const copy: typeof SvgComponent;
export const daily-dev: typeof SvgComponent;
export const dark: typeof SvgComponent;
export const discord: typeof SvgComponent;
export const divider-vertical: typeof SvgComponent;
export const download: typeof SvgComponent;
export const ext-link: typeof SvgComponent;
export const firebase: typeof SvgComponent;
export const github: typeof SvgComponent;
export const google: typeof SvgComponent;
export const hamburger-menu: typeof SvgComponent;
export const light: typeof SvgComponent;
export const linkedin: typeof SvgComponent;
export const location: typeof SvgComponent;
export const logout-left: typeof SvgComponent;
export const logout-right: typeof SvgComponent;
export const mailgun: typeof SvgComponent;
export const message: typeof SvgComponent;
export const minus: typeof SvgComponent;
export const nuxt: typeof SvgComponent;
export const platform: typeof SvgComponent;
export const play: typeof SvgComponent;
export const plus: typeof SvgComponent;
export const product-hunt: typeof SvgComponent;
export const refine: typeof SvgComponent;
export const rest: typeof SvgComponent;
export const search: typeof SvgComponent;
export const sendgrid: typeof SvgComponent;
export const star: typeof SvgComponent;
export const system: typeof SvgComponent;
export const textmagic: typeof SvgComponent;
export const twitter: typeof SvgComponent;
export const vue: typeof SvgComponent;
export const x: typeof SvgComponent;
export const ycombinator: typeof SvgComponent;
export const youtube: typeof SvgComponent;
