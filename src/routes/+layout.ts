import { changelogCount } from './changelog/utils';

export const prerender = false;

export const trailingSlash = 'never';

export const load = () => ({
    changelogCount
});
