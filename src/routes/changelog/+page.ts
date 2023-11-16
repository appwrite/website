import { CHANGELOG_DEPENDENCY, getAllChangelogEntries } from './utils';

export const prerender = false;

const PER_PAGE = 5;

export const load = async ({ depends, url }) => {
  depends(CHANGELOG_DEPENDENCY);

  const page = parseInt(url.searchParams.get('page') || '1', 10);

  const entries = await getAllChangelogEntries();
  return {
    entries: entries.slice(0, page * PER_PAGE),
    nextPage: page < Math.ceil(entries.length / PER_PAGE) ? page + 1 : null,
  };
};
