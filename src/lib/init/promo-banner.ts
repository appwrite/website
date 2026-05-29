export type InitPromoPhase = 'before' | 'during' | 'after';

export type InitPromoBannerContent = {
    eventId: string;
    phase: InitPromoPhase;
    tagline: string;
    message: string;
    ctaLabel: string;
};

const INIT_JULY_2026 = {
    id: 'init-july-2026',
    startDate: '2026-07-06',
    endDate: '2026-07-10'
};

function parseDateOnly(value: string): Date {
    const [year, month, day] = value.split('-').map(Number);
    return new Date(year, month - 1, day);
}

function resolvePhase(now: Date): InitPromoPhase {
    const start = parseDateOnly(INIT_JULY_2026.startDate);
    const end = parseDateOnly(INIT_JULY_2026.endDate);
    end.setHours(23, 59, 59, 999);

    if (now > end) return 'after';
    if (now < start) return 'before';
    return 'during';
}

export function getInitPromoBannerContent(now = new Date()): InitPromoBannerContent | null {
    const phase = resolvePhase(now);

    switch (phase) {
        case 'before':
            return {
                eventId: INIT_JULY_2026.id,
                phase,
                tagline: 'A week of product launches and live sessions',
                message: 'July 6–10',
                ctaLabel: 'Claim your ticket'
            };
        case 'during':
            return {
                eventId: INIT_JULY_2026.id,
                phase,
                tagline: 'Product launches and live sessions',
                message: 'Live now',
                ctaLabel: 'Join Init'
            };
        case 'after':
            return {
                eventId: INIT_JULY_2026.id,
                phase,
                tagline: 'Catch up on launches and replays',
                message: '',
                ctaLabel: 'View recap'
            };
    }
}
