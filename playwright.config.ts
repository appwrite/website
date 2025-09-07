import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    webServer: {
        command: 'pnpm run dev',
        port: 5173
    },
    fullyParallel: true,
    testDir: 'tests',
    testMatch: /(.+\.)?(test|spec)\.[jt]s/,
    projects: [
        {
            name: 'Chrome',
            use: {
                channel: 'chrome'
            }
        }
    ]
};

export default config;
