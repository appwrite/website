import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    webServer: {
        command: 'pnpm dev',
        port: 5173,
        env: {
            PLAYWRIGHT_TESTS: '1'
        }
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
