import { APPWRITE_DB_INIT_ID, APPWRITE_COL_INIT_ID } from '$env/static/private';
import { appwriteInit } from '$lib/appwrite/init';
import parse from 'node-html-parser';
import type { TicketData, ContributionsMatrix } from '../../constants';

export async function getContributions(id: string) {
    const { gh_user } = (await appwriteInit.database.getDocument(
        APPWRITE_DB_INIT_ID,
        APPWRITE_COL_INIT_ID,
        id
    )) as unknown as TicketData;

    if (!gh_user) return null;

    console.time('fetch on gh');
    const res = await fetch(`https://github.com/${gh_user}`);
    console.timeEnd('fetch on gh');
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

    return matrix;
}
