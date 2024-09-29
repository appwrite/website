import path from 'path';
import fs from 'fs/promises';
import minifier from 'html-minifier-terser';

const prerenderedPagesDir = 'build/prerendered';
const htmlMinifierOptions = {
    minifyJS: true,
    minifyCSS: true,
    useShortDoctype: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true
};

async function getHtmlFiles(dir) {
    let htmlFiles = [];
    const files = await fs.readdir(dir, { withFileTypes: true });

    for (const file of files) {
        const filePath = path.join(dir, file.name);
        if (file.isDirectory()) {
            htmlFiles = htmlFiles.concat(await getHtmlFiles(filePath));
        } else if (file.isFile() && file.name.endsWith('.html')) {
            htmlFiles.push(filePath);
        }
    }

    return htmlFiles;
}

// Function to format sizes in bytes to KB, MB, GB, etc.
function formatSize(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    const units = ['KB', 'MB', 'GB', 'TB'];
    let value = bytes / 1024;
    let unitIndex = 0;

    while (value >= 1024 && unitIndex < units.length - 1) {
        value /= 1024;
        unitIndex++;
    }

    return `${value.toFixed(2)} ${units[unitIndex]}`;
}

export async function minifyHtmlPostBuild() {
    let minifiedCount = 0;
    let totalOriginalSize = 0;
    let totalMinifiedSize = 0;

    const minifyTasks = [];

    console.log('Starting html minification...');

    try {
        const htmlFiles = await getHtmlFiles(prerenderedPagesDir);

        for (const htmlPath of htmlFiles) {
            minifyTasks.push(
                (async () => {
                    try {
                        const html = await fs.readFile(htmlPath, 'utf-8');
                        const originalSize = Buffer.byteLength(html, 'utf-8');
                        totalOriginalSize += originalSize;

                        const minHTML = await minifier.minify(html, htmlMinifierOptions);
                        const minifiedSize = Buffer.byteLength(minHTML, 'utf-8');
                        totalMinifiedSize += minifiedSize;

                        await fs.writeFile(htmlPath, minHTML);

                        minifiedCount += 1;
                    } catch (error) {
                        console.error(`Failed to minify HTML for ${htmlPath}: ${error.message}`);
                    }
                })()
            );
        }

        await Promise.all(minifyTasks);

        console.log(`Minification complete: ${minifiedCount} files processed.`);
        console.log(
            `Original: ${formatSize(totalOriginalSize)}, Minified: ${formatSize(totalMinifiedSize)}`
        );
    } catch (error) {
        console.error(`Error processing files: ${error.message}`);
    }
}
