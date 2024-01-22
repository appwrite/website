import { getMockContributions } from '$routes/init/helpers';
import type { TicketData, ContributionsMatrix, TicketVariant } from '$routes/init/ticket/constants';
import { getContributions } from '../../get-contributions/helpers.server';

type GetCubeArgs = {
    week: number;
    day: number;
    level: number;
    variant?: TicketVariant;
};

const getCube = ({ week, day, level, variant = 'default' }: GetCubeArgs) => {
    const x = INITIAL_X + day * DIFF_X;
    const y = INITIAL_Y + week * DIFF_Y;
    const opacity = level / 4;
    const fill = variant === 'rainbow' ? 'white' : '#FD366E';

    return `<rect opacity="${opacity}" x="${x}" y="${y}" width="3.4087" height="3.4087" rx="0.852174" fill="${fill}" />`;
};
const INITIAL_X = 380;
const INITIAL_Y = 22.7998;
const DIFF_Y = 5.1133;
const DIFF_X = 5.1133;

export async function getCubes(ticket: TicketData) {
    // const matrix = ((await getContributions(ticket.$id)) ?? []) as ContributionsMatrix;
    const matrix = getMockContributions();

    return matrix.reduce((acc, week, w) => {
        week.forEach((level, d) => {
            acc.push(getCube({ week: w, day: d, level, variant: ticket.variant }));
        });

        return acc;
    }, [] as string[]);
}
