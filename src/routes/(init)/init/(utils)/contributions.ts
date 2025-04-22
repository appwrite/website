import { APPWRITE_DB_INIT_ID, APPWRITE_COL_INIT_ID } from '$env/static/private';
import { DOMParser, parseHTML } from 'linkedom';

import { appwriteInitServer } from './appwrite.server';
import type { TicketData } from './tickets';
import { z } from 'zod';

const contributionsSchema = z.array(z.array(z.number())).nullable();
export type ContributionsMatrix = z.infer<typeof contributionsSchema>;

const normalizeContributionMatrix = (matrix: number[][]) => {
    // Flatten the input matrix while preserving the actual values
    let flattened = matrix.flat().filter((value) => value !== undefined);
    const currentDays = flattened.length;

    // If we have fewer than 365 days, pad with zeros at the start
    if (currentDays < 364) {
        const padding = Array(364 - currentDays).fill(0);
        flattened = [...padding, ...flattened];
    }

    // If we have more than 364 days, take the most recent 364
    if (currentDays > 364) {
        flattened = flattened.slice(-364);
    }

    // Normalize contribution levels to be between 0-4
    // Only normalize if the value exists (is not zero from padding)
    flattened = flattened.map((value) => {
        if (value === 0) return 0;
        return Math.min(Math.max(Math.round(value), 0), 4);
    });

    // Convert back to weekly matrix format
    const normalizedMatrix: number[][] = [];
    for (let i = 0; i < flattened.length; i += 7) {
        const weekSlice = flattened.slice(i, Math.min(i + 7, flattened.length));
        normalizedMatrix.push(weekSlice);
    }

    return normalizedMatrix;
};

export const getTicketContributions = async (id: string) => {
    try {
        let matrix: ContributionsMatrix = [];

        const { gh_user, contributions } = (await appwriteInitServer.databases.getDocument(
            APPWRITE_DB_INIT_ID,
            APPWRITE_COL_INIT_ID,
            id
        )) as unknown as TicketData;

        if (!gh_user) return null;

        if (contributions?.length) {
            matrix = contributions.reduce((acc: number[][], curr: number, i: number) => {
                if (i % 7 === 0) acc.push([]);
                acc[acc.length - 1].push(curr);
                return acc;
            }, []);
        }

        const res = await fetch(`https://github.com/users/${gh_user}/contributions`);
        const html = await res.text();
        const root = parseHTML(html, 'text/html');
        const table = root.document.querySelector('table.ContributionCalendar-grid');

        if (!table) return null;

        const rows = table.querySelectorAll('tbody tr');
        const maxCols = rows[0].querySelectorAll('[role="gridcell"]').length;
        matrix = Array(maxCols)
            .fill(null)
            .map(() => []);

        for (let c = 0; c < maxCols; c++) {
            for (let r = 0; r < rows.length; r++) {
                const cells = rows[r].querySelectorAll('[role="gridcell"]');
                if (c >= cells.length) continue;
                matrix[c].push(Number(cells[c].getAttribute('data-level')));
            }
            matrix[c] = matrix[c].reverse();
        }

        await appwriteInitServer.databases.updateDocument(
            APPWRITE_DB_INIT_ID,
            APPWRITE_COL_INIT_ID,
            id,
            {
                contributions: normalizeContributionMatrix(matrix).flat()
            }
        );

        return await contributionsSchema.parseAsync(normalizeContributionMatrix(matrix));
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
