import { APPWRITE_INIT_DB_ID, APPWRITE_INIT_COLLECTION_ID } from '$env/static/private';
import { JSDOM } from 'jsdom';

import { appwriteInitServer } from './appwrite.server';
import type { TicketData } from './tickets';
import { z } from 'zod';

const contributionsSchema = z.array(z.array(z.number())).nullable();
export type ContributionsMatrix = z.infer<typeof contributionsSchema>;

export const getTicketContributions = async (id: string) => {
    try {
        const matrix: ContributionsMatrix = [];
        const { gh_user, contributions } = (await appwriteInitServer.databases.getDocument(
            APPWRITE_INIT_DB_ID,
            APPWRITE_INIT_COLLECTION_ID,
            id
        )) as unknown as TicketData;

        if (!gh_user) return null;

        // if contributions exist, push them into the matrix
        if (contributions?.length) {
            for (let i = 0; i < contributions.length; i += 7) {
                matrix.push(contributions.slice(i, i + 7));
            }

            return await contributionsSchema.parseAsync(matrix);
        }

        const res = await fetch(`https://github.com/users/${gh_user}/contributions`);

        const html = await res.text();
        const root = new JSDOM(html);

        const table = root.window.document.querySelector('table.ContributionCalendar-grid');

        if (!table) return null;

        const rows = table.querySelectorAll('tbody tr');
        const maxCols = rows[0].querySelectorAll('[role="gridcell"]').length;

        for (let c = 0; c < maxCols; c++) {
            matrix.push([]);
            for (let r = 0; r < rows.length; r++) {
                const row = rows[r];
                const cells = row.querySelectorAll('[role="gridcell"]');
                if (c >= cells.length) continue;

                const cell = cells[c];
                matrix[c].push(Number(cell.getAttribute('data-level')));
            }

            matrix[c] = matrix[c].reverse();
        }

        await appwriteInitServer.databases.updateDocument(
            APPWRITE_INIT_DB_ID,
            APPWRITE_INIT_COLLECTION_ID,
            id,
            {
                contributions: matrix.flat()
            }
        );

        console.log({ matrix: await contributionsSchema.parseAsync(matrix) });

        return await contributionsSchema.parseAsync(matrix);
    } catch (e) {
        console.error(e);
        return [];
    }
};

export const getMockContributions = () => {
    const result: ContributionsMatrix = [];
    for (let i = 0; i < 53; i++) {
        result.push([]);
        for (let j = 0; j < 7; j++) {
            result[i].push(Math.floor(Math.random() * 4));
        }
    }
    return result;
};
