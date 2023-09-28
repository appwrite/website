import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'node:http'
import { readFile } from 'fs/promises';
import { handler } from './build/handler.js';

const root = dirname(fileURLToPath(import.meta.url));
const sitemap = readFile(resolve(root, 'build/sitemap.xml'));

const server = createServer(async (req, res) => {
    switch (req.url) {
        case '/sitemap.xml':
            res.setHeader('Content-Type', 'application/xml');
            res.writeHead(200);
            return res.end(await sitemap);
        default:
            return handler(req, res);
    }
});

server.listen(3000, () => console.log('Listening on http://0.0.0.0:3000'));