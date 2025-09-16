import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Downloads the latest Appwrite versions from the API and saves them to a TypeScript file
 * @returns {Promise<void>}
 */
export async function downloadVersions() {
    try {
        console.log('Fetching Appwrite SDK versions...');
        
        const response = await fetch('https://cloud.appwrite.io/versions');
        
        if (!response.ok) {
            throw new Error(`Failed to fetch SDK versions: ${response.status} ${response.statusText}`);
        }
        
        const versions = await response.json();
        
        if (!versions['client-web']) {
            throw new Error('Invalid SDK versions response: missing client-web version');
        }
        
        const outputPath = join(__dirname, '../src/lib/sdk-versions.ts');
        const tsContent = `export const appwriteVersions = ${JSON.stringify(versions, null, 2)} as const;

export type AppwriteVersions = typeof appwriteVersions;
`;
        writeFileSync(outputPath, tsContent);
        console.log('✓ Appwrite SDK versions downloaded successfully');
    } catch (error) {
        console.error('Failed to download Appwrite SDK versions:', error.message);
    }
}

if (import.meta.url === `file://${process.argv[1]}`) {
    downloadVersions();
}
