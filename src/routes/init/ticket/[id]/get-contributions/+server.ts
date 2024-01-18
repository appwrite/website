import { PUBLIC_APPWRITE_COL_INIT_ID, PUBLIC_APPWRITE_DB_INIT_ID } from '$env/static/public';
import { appwriteInit } from '$lib/appwrite/init.js';

import type { ContributionsMatrix, TicketData } from '../../constants.js';
import { parse } from 'node-html-parser';

const emptyResponse = new Response(JSON.stringify({ data: null }), {
    status: 404,
    headers: {
        'content-type': 'application/json'
    }
});

export async function GET({ params }) {
    const { gh_user } = (await appwriteInit.database.getDocument(
        PUBLIC_APPWRITE_DB_INIT_ID,
        PUBLIC_APPWRITE_COL_INIT_ID,
        params.id
    )) as unknown as TicketData;

    if (!gh_user) return emptyResponse;

    console.time('fetch on gh');
    const res = await fetch(`https://github.com/${gh_user}`);
    console.timeEnd('fetch on gh');
    const html = await res.text();
    const root = parse(html);
    const table = root.querySelector('table');
    if (!table) return emptyResponse;

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

        matrix[c] = matrix[c].toReversed();
    }

    return new Response(
        JSON.stringify({
            data: matrix
        }),
        {
            status: 200,
            headers: {
                'content-type': 'application/json'
            }
        }
    );
}
