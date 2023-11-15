import { error } from '@sveltejs/kit';
import { getAllChangelogEntries } from '../utils.js';


export const load = async ({ params, }) => {
  const entries = await getAllChangelogEntries();
  const entry = entries.find((entry) => {
    return entry.filepath.includes(params.entry);
  });

  if (!entry) {
    throw error(404, 'Not found')
  }

  return {
    ...entry
  }

};