import { APPWRITE_COL_INIT_ID, APPWRITE_DB_INIT_ID } from '$env/static/private';
import { parseHTML } from 'linkedom';
import { z } from 'zod';
import { createInitServerClient } from './appwrite';
import type { TicketData } from './tickets';

const contributionsSchema = z.array(z.array(z.number()));
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
    const { databases } = createInitServerClient();
    try {
        let matrix: number[][] = [];

        const { gh_user, contributions } = (await databases.getDocument(
            APPWRITE_DB_INIT_ID,
            APPWRITE_COL_INIT_ID,
            id
        )) as unknown as TicketData;

        if (!gh_user) return [];

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

        if (!table) return [];

        const rows = table.querySelectorAll('tbody tr');
        const maxCols = rows[0].querySelectorAll('[role="gridcell"]').length;
        matrix = Array(maxCols)
            .fill(null)
            .map(() => []);

        for (let c = 0; c < maxCols; c++) {
            for (let r = 0; r < rows.length; r++) {
                const cells = rows[r].querySelectorAll('[role="gridcell"]');
                if (c >= cells.length) continue;
                const dataLevel = cells[c].getAttribute('data-level');
                matrix[c].push(Number(dataLevel));
            }
            matrix[c] = matrix[c].reverse();
        }

        // Check if all contributions are zero
        const allZero = matrix.flat().every((val) => val === 0);
        if (allZero) return [];

        // ... rest of your code
        matrix = matrix.map((col) => col.filter((val) => val !== 0));
        matrix = matrix.map((col) => {
            if (col.length > 7) return col.slice(0, 7);
            if (col.length < 7) return [...col, ...Array(7 - col.length).fill(0)];
            return col;
        });

        if (matrix.length > 52) {
            matrix = matrix.slice(0, 52);
        } else if (matrix.length < 52) {
            const emptyCol = Array(7).fill(0);
            while (matrix.length < 52) {
                matrix.push([...emptyCol]);
            }
        }

        await databases.updateDocument(APPWRITE_DB_INIT_ID, APPWRITE_COL_INIT_ID, id, {
            contributions: normalizeContributionMatrix(matrix).flat()
        });

        const normalized = matrix.map((week) =>
            week.map((day) => (day === 0 ? 0 : Math.min(Math.max(Math.round(day), 0), 4)))
        );

        const finalMatrix = normalizeContributionMatrix(matrix);

        if (finalMatrix.flat().every((val) => val === 0)) {
            return [];
        }

        return await contributionsSchema.parseAsync(normalizeContributionMatrix(normalized));
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
