import { HUBSPOT_INIT_TOKEN } from '$env/static/private';

export const hubspot = {
    fetch: async (path: string, options?: RequestInit) => {
        return fetch(`https://api.hubapi.com/crm/v3/${path}`, {
            headers: {
                Authorization: `Bearer ${HUBSPOT_INIT_TOKEN}`,
                'Content-Type': 'application/json',
                ...options?.headers
            },
            ...options
        });
    }
};
