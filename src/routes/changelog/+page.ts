import { CHANGELOG_DEPENDENCY, getAllChangelogEntries } from './utils';

const PER_PAGE = 5;

const isVercel = import.meta.env.VERCEL === '1';

export const load = async ({ depends, url }) => {
  depends(CHANGELOG_DEPENDENCY);

  const page = isVercel ? 10 ** 6 : parseInt(url.searchParams.get('page') || '1', 10);

  const entries = await getAllChangelogEntries();
  return {
    entries: entries.slice(0, page * PER_PAGE),
    nextPage: page < Math.ceil(entries.length / PER_PAGE) ? page + 1 : null,
  };
};
