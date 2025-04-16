
import { getAllChangelogEntries } from './changelog/utils';

export const trailingSlash = 'never';

export const load = async () => {
    return {
        changelogEntries: (await getAllChangelogEntries()).length
    };
};
