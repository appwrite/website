import { expect, test } from '@playwright/test';
import redirects from '../src/redirects.json' with { type: 'json' };

redirects.forEach(({ link, redirect }) => {
    test(`redirected from ${link} to ${redirect} exists`, async ({ page }) => {
        const response = await page.goto(redirect);

        expect(response?.ok()).toBeTruthy();
    });
});
