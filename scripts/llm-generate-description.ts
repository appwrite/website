import fs from 'fs/promises';
import path from 'path';
import fm from 'front-matter';
import { markdocSchema } from '../svelte.config.js';
// @ts-ignore
import { markdoc } from 'svelte-markdoc-preprocess';
import { preprocessMeltUI, sequence } from '@melt-ui/pp';
import { JSDOM } from 'jsdom';
import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';
import dedent from 'dedent';
import { pathToFileURL } from 'url';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY is not set');
}

async function generateDescription({
  articleText,
  frontmatterAttributes,
  previousAttempt,
}: {
  articleText: string;
  frontmatterAttributes: Record<string, any>;
  previousAttempt?: {
    text: string;
    characterCount: number;
  };
}) {
  console.log(`Generating description...`);
  const { text } = await generateText({
    model: openai("gpt-5-mini"),
    messages: [
      {
        role: 'system',
        content: dedent`
          You are a helpful technical writer. Your goal is to help Appwrite generate descriptions for their documentation pages.
          You will be given the content of a docs page, and you need to generate a description for it.

          Rules:
          - You MUST limit your response to 250 characters maximum.
          - The output must be SEO-optimized, you are not meant to just summarize the page in every detail. It should give a user/crawler a good idea of what the page covers.
          - Avoid deeply technical terms and jargon, this is just an SEO description.
          - Output must be worthy of being used as a meta description.
        `
      },
      {
        role: 'user',
        content: `
Here are the frontmatter attributes:
<frontmatter>
${JSON.stringify(frontmatterAttributes, null, 2)}
</frontmatter>

And here is the body of the page:
<article>
${articleText}
</article>

Generate the description.

${previousAttempt && `
Pay attention, you have made a previous attempt at generating the description, but it exceeded the character count limit (${previousAttempt.characterCount} characters).
This is your previous attempt:
<previous-attempt>
${previousAttempt.text}
</previous-attempt>

Make sure you stick to the character count limit of 250.
`}
        `
      }
    ]
  });

  const characterCount = text.split(' ').length;

  if (characterCount > 250) {
    console.log(`Character count is too long (${characterCount}), generating again...`);
    return generateDescription({
      articleText,
      frontmatterAttributes,
      previousAttempt: {
        text,
        characterCount
      }
    });
  }

  console.log(`Description generated successfully (${characterCount} characters)`);
  return {
    description: text,
    characterCount
  };
}

export async function getDocPageContent(markdocPath: string) {
  const fileContent = await fs.readFile(markdocPath, 'utf8');

  const seq = sequence([markdoc(markdocSchema), preprocessMeltUI()]);

  if (!seq || !seq.markup) {
      throw new Error('Sequence is undefined');
  }

  // Get the frontmatter
  const frontmatter = fm(fileContent);
  const markup = await seq.markup({ content: frontmatter.body, filename: markdocPath });
  const html = (markup as any).toString();
  
  // Use JSDOM to parse the HTML and extract text content from <article>
  const dom = new JSDOM(html);
  const articleElement = dom.window.document.querySelector('article');
  const articleText = articleElement ? articleElement.textContent : '';
  return {
    articleText,
    frontmatterAttributes: frontmatter.attributes
  };
}

export async function generateDescriptionForDocsPage(filePath: string) {
  const resolvedPath = path.resolve(filePath);
  const { articleText, frontmatterAttributes } = await getDocPageContent(resolvedPath);

  if (!articleText || !frontmatterAttributes) {
      throw new Error('Article text or frontmatter attributes are undefined');
  }

  const { description, characterCount } = await generateDescription({ articleText, frontmatterAttributes });
  return { description, characterCount };
}

async function main() {
  const filePathArg = extractArg('file-path');

  if (!filePathArg) {
      throw new Error('File path is required');
  }

  const resolvedPath = path.resolve(filePathArg);
  const { description, characterCount } = await generateDescriptionForDocsPage(resolvedPath);
  console.log(`Generated description:\n\n${description}\n`);
}

// Runs only if invoked via CLI
// @ts-ignore
const isDirect = import.meta.url === pathToFileURL(process.argv[1]).href;
if (isDirect) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

function extractArg(name: string): string | null {
    const args = process.argv;
    const prefix = `--${name}=`;

    const inlineArg = args.find((arg) => arg.startsWith(prefix));
    if (inlineArg) {
        return inlineArg.slice(prefix.length);
    }

    const keyIndex = args.findIndex((arg) => arg === `--${name}`);
    if (keyIndex !== -1 && keyIndex + 1 < args.length) {
        return args[keyIndex + 1];
    }

    return null;
}
