import type { ImageProps } from '@unpic/svelte';
import { Avatars, Client } from '@appwrite.io/console';

const client = new Client();
client.setProject('console').setEndpoint('https://migration.appwrite.org/v1')
const avatars = new Avatars(client);

export const transformer: ImageProps['transformer'] = (options) => {
    const { url, height, width } = options;
    const src = new URL(url, 'https://appwrite.io');
    return avatars.getImage(src.toString(), width, height);
};
