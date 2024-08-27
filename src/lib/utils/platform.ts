export const isDom = () => typeof window !== 'undefined';
export function getPlatform() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const agent = (navigator as any).userAgentData;
    return (agent?.platform ?? navigator.platform) as string;
}
const pt = (v: RegExp) => isDom() && v.test(getPlatform().toLowerCase());
const ua = (v: RegExp) => isDom() && v.test(navigator.userAgent);
const vn = (v: RegExp) => isDom() && v.test(navigator.vendor);
export const isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;
export const isMac = () => pt(/^mac/) && !isTouchDevice();
export const isIPhone = () => pt(/^iphone/);
export const isSafari = () => isApple() && vn(/apple/i);
export const isFirefox = () => ua(/firefox\//i);
export const isApple = () => pt(/mac|iphone|ipad|ipod/i);
export const isIos = () => isApple() && !isMac();
