import { readFileSync } from 'fs';
import Markdoc, { type RenderableTreeNode } from '@markdoc/markdoc';
import matter from 'gray-matter';
import type { SearchResult } from './types';

export const flattenArrayAndConcatenate = (arr: string[]): string => {
    return arr
        .map((element) => (Array.isArray(element) ? flattenArrayAndConcatenate(element) : element))
        .join('');
};

export const removeFileExtension = (string: string) => {
    return string.replace(/\.[^/.]+$/, '');
};

export const getMarkdocContent = <T>(filePath: string) => {
    let source;

    try {
        source = readFileSync(filePath, 'utf-8');
    } catch (error) {
        console.error(`File ${filePath} cannot be read or doesn't exist`);
    }

    if (!source)
        return {} as T & {
            content: RenderableTreeNode;
            slug: string;
        };

    const matterResult = matter(source);
    const attributes = matterResult.data as T;
    const ast = Markdoc.parse(source);
    const content = Markdoc.transform(ast);

    return {
        ...attributes,
        content
    };
};

export const extractMarkdocContent = (children: RenderableTreeNode[]): string[] => {
    return children.flatMap((child) => {
        if (child instanceof Markdoc.Tag) {
            return extractMarkdocContent(child.children);
        } else {
            return [child];
        }
    }) as string[];
};

export const isHeading = (name: string) => name === 'Heading';

export const generateSearchableContent = ({
    title,
    slug,
    content
}: {
    title: string;
    slug: string;
    content?: RenderableTreeNode;
}) => {
    const groups = [] as SearchResult[];

    const paragraphRegex = /^p$/;
    const isParagraph = (name: string) => name.match(paragraphRegex);

    let position = 0;

    if (Array.isArray(content)) {
        content.forEach((child) => {
            if (Markdoc.Tag.isTag(child)) {
                if (
                    isHeading(child.name) &&
                    child.children[0] &&
                    Markdoc.Tag.isTag(child.children[0])
                ) {
                    const section: string[] = extractMarkdocContent(child.children[0].children);
                    const content = flattenArrayAndConcatenate(section);

                    position++;

                    groups.push({
                        title,
                        url: slug
                        //content,
                        //position
                    });
                } else if (isParagraph(child.name) && child.children) {
                    const paragraph = extractMarkdocContent(child.children);
                    const content = flattenArrayAndConcatenate(paragraph);

                    position++;

                    groups.push({
                        title,
                        url: slug
                        //content,
                        //position
                    });
                }
            }
        });
    } else if (typeof content === 'string') {
        position++;

        groups.push({
            title,
            url: slug
            //content,
            //position
        });
    } else if (Markdoc.Tag.isTag(content)) {
        const extractedContent = extractMarkdocContent([content]);
        const flattenedContent = flattenArrayAndConcatenate(extractedContent);

        position++;

        groups.push({
            title,
            url: slug
            //content: flattenedContent,
            //position
        });
    }

    return groups;
};
