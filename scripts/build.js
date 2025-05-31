import { build } from 'vite';

process.env.ROLLDOWN_OPTIONS_VALIDATION = 'loose';

async function main() {
    await build();
}

main();
