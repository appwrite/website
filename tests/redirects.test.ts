import { expect, test } from '@playwright/test';
import redirects from '../src/redirects.json' with { type: 'json' };

test('all redirects return successful responses', async ({ page }) => {
    const failures: string[] = [];

    for (const { link, redirect } of redirects) {
        try {
            const response = await page.goto(redirect);
            if (!response?.ok()) {
                failures.push(`${link} -> ${redirect} (status: ${response?.status()})`);
            }
        } catch (error) {
            failures.push(`${link} -> ${redirect} (error: ${error})`);
        }
    }

    expect(failures, `Failed redirects:\\n${failures.join('\\n')}`).toHaveLength(0);
});
