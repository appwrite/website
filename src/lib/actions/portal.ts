import { tick } from 'svelte';
import type { Action } from 'svelte/action';

export type PortalConfig =
    | { target?: string | HTMLElement | undefined; prepend?: boolean }
    | undefined;

const defaults: PortalConfig = {
    target: 'body',
    prepend: false
};

export const portal: Action<HTMLElement, PortalConfig> = (el, config?: PortalConfig) => {
    let targetEl;

    async function update(newConfig: PortalConfig) {
        const { target, prepend } = { ...defaults, ...newConfig };

        if (typeof target === 'string') {
            targetEl = document.querySelector(target);
            if (targetEl === null) {
                await tick();
                targetEl = document.querySelector(target);
            }
            if (targetEl === null) {
                throw new Error(`No element found matching css selector: "${target}"`);
            }
        } else if (target instanceof HTMLElement) {
            targetEl = target;
        } else {
            throw new TypeError(
                `Unknown portal target type: ${
                    target === null ? 'null' : typeof target
                }. Allowed types: string (CSS selector) or HTMLElement.`
            );
        }
        el.dataset.portal = '';
        if (prepend) {
            targetEl.prepend(el);
        } else {
            targetEl.appendChild(el);
        }
        el.hidden = false;
    }

    function destroy() {
        el.remove();
    }

    update(config ?? {});
    return {
        update,
        destroy
    };
};
