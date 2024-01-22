import type { TicketData } from '$routes/init/ticket/constants';
import { getDefaultSvg } from './default';
import { getPinkSvg } from './pink';
import { getRainbowSvg } from './rainbow';

export function getTicketSvg(ticket: TicketData) {
    switch (ticket.variant) {
        case 'rainbow':
            return getRainbowSvg(ticket);
        case 'pink':
            return getPinkSvg(ticket);
        default:
            return getDefaultSvg(ticket);
    }
}
