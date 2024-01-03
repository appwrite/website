import { getAllChangelogEntries } from "./changelog/utils";

export const prerender = true;


export const load = async () => {
  return {
    changelogEntries: (await getAllChangelogEntries()).length
  }

};