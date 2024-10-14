import type { ImageProps } from '@unpic/svelte';
import { Avatars, Client } from '@appwrite.io/console';

const client = new Client();
client.setProject('console').setEndpoint('https://appwrite-test-cdn.global.ssl.fastly.net/v1')
const avatars = new Avatars(client);

export const transformer: ImageProps['transformer'] = (options) => {
    const { url, height, width } = options;
    const src = new URL(url, 'https://appwrite.io');
    return avatars.getImage(src.toString(), width, height);
};
