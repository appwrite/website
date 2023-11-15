import { getAllChangelogEntries } from './utils';

export const load = async () => {
  return {
    entries: getAllChangelogEntries()
  };
};
