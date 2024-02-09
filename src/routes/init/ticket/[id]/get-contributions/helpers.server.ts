import { APPWRITE_DB_INIT_ID, APPWRITE_COL_INIT_ID } from '$env/static/private';
import { appwriteInit } from '$lib/appwrite/init';
import parse from 'node-html-parser';
import type { TicketData, ContributionsMatrix } from '../../constants';

export async function getContributions(id: string): Promise<ContributionsMatrix | null> {
    const { gh_user, contributions } = (await appwriteInit.database.getDocument(
        APPWRITE_DB_INIT_ID,
        APPWRITE_COL_INIT_ID,
        id
    )) as unknown as TicketData;

    if (!gh_user) return null;

    if (contributions?.length) {
        // Transform flat array into matrix with 7 columns
        const matrix: ContributionsMatrix = [];
        for (let i = 0; i < contributions.length; i += 7) {
            matrix.push(contributions.slice(i, i + 7));
        }
        return matrix;
    }

    const res = await fetch(`https://github.com/${gh_user}`);

    const html = await res.text();
    const root = parse(html);
    const table = root.querySelector('table');
    if (!table) return null;

    const matrix: ContributionsMatrix = [];
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

    // Update the document with the new contributions
    await appwriteInit.database.updateDocument(APPWRITE_DB_INIT_ID, APPWRITE_COL_INIT_ID, id, {
        contributions: matrix.flat()
    });

    return matrix;
}
