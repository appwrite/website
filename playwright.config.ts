import { devices, defineConfig } from '@playwright/test';

export default defineConfig({
    webServer: {
        command: 'bun run dev',
        port: 5173
    },
    fullyParallel: true,
    retries: 3,
    testDir: 'tests',
    testMatch: /(.+\.)?(test|spec)\.[jt]s/,
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        }
    ]
});
