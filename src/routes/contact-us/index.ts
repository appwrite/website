import { PUBLIC_GROWTH_ENDPOINT } from '$env/static/public';

export async function sendSalesEmail(body: {
    email: string;
    subject: string;
    cloudEmail: string | undefined;
    companyName: string;
    companySize: string | null;
    companyWebsite: string;
    firstName: string;
    message: string;
    supportTier?: string | null;
}) {
    return await fetch(`${PUBLIC_GROWTH_ENDPOINT}/feedback/sales`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
}
