import { z } from 'zod';
import { getGithbubContributions } from './contributions.server';

const contributionsSchema = z.array(z.array(z.number())).nullable();
export type ContributionsMatrix = z.infer<typeof contributionsSchema>;

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

export const getTicketContributions = async (id: string) => {
    const matrix = await getGithbubContributions(id);

    try {
        return { data: contributionsSchema.parseAsync(matrix) };
    } catch (e) {
        console.error(e);
        return { data: null };
    }
};
