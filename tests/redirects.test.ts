import { expect, test } from '@playwright/test';
import redirects from '../src/redirects.json' with { type: 'json' };

test('all redirects return successful responses', async ({ page }) => {
    for (const { link, redirect } of redirects) {
        const response = await page.goto(redirect);
        expect(response?.ok(), `${link} -> ${redirect} failed`).toBeTruthy();
    }
});
