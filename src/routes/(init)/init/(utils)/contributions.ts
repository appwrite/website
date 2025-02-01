import { z } from 'zod';
import { BASE_URL } from '../utils';

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

export const getTicketContributions = async (id: string, f = fetch) => {
    const res = await f(`${BASE_URL}/tickets/${id}/get-contributions`);

    try {
        return contributionsSchema.parseAsync((await res.json()).data);
    } catch (e) {
        console.error(e);
        return { data: null };
    }
};
