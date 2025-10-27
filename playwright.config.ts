import { defineConfig } from '@playwright/test';

export default defineConfig({
    webServer: {
        command: 'bun run dev',
        port: 5173
    },
    fullyParallel: true,
    testDir: 'tests',
    testMatch: /(.+\.)?(test|spec)\.[jt]s/
});
