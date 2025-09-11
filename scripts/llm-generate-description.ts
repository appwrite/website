import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { readFileSync } from "fs";
import { pathToFileURL } from "url";
import path from "path";
import frontMatter from "front-matter";

function extractArg(name: string): string | undefined {
  const argIndex = process.argv.findIndex((arg) => arg.startsWith(`--${name}`));
  if (argIndex === -1) return undefined;

  const arg = process.argv[argIndex];
  const value = arg.split("=")[1];
  if (value) return value;

  const nextArg = process.argv[argIndex + 1];
  return nextArg && !nextArg.startsWith("--") ? nextArg : undefined;
}

function extractBooleanArg(name: string): boolean {
  return process.argv.includes(`--${name}`);
}

async function generateDescription({
  articleText,
  frontmatterAttributes,
}: {
  articleText: string;
  frontmatterAttributes: Record<
    string,
    string | number | boolean | Date | string[] | number[] | boolean[]
  >;
}) {
  const systemPrompt = `You are an expert at writing SEO-optimized page descriptions for technical documentation websites targeting senior software engineers.

Generate a concise, professional description (maximum 250 characters) that:
- Accurately summarizes the technical content
- Uses natural language with standard punctuation (use regular hyphens, not em dashes)
- Speaks directly to experienced developers and engineering leaders
- Includes relevant technical keywords for SEO
- Avoids AI-generated language patterns or marketing fluff
- Uses a professional, authoritative tone that resonates with senior engineers

The description should be suitable for use in HTML meta descriptions and social media previews.`;

  const userPrompt = `Generate a page description for this documentation page:

Title: ${frontmatterAttributes?.title || "Untitled"}
Summary: ${frontmatterAttributes?.summary || "No summary provided"}

Content:
${articleText}

Generate a description that captures the essence of this page in 250 characters or less.`;

  try {
    const { text: description } = await generateText({
      model: openai("gpt-4o-mini"),
      system: systemPrompt,
      prompt: userPrompt,
      maxTokens: 100,
    });

    const trimmedDescription = description.trim();
    const characterCount = trimmedDescription.length;

    // If the description is too long, try again with a more specific prompt
    if (characterCount > 250) {
      const retryPrompt = `The previous description was too long (${characterCount} characters). Generate a shorter description (maximum 250 characters) for this page:

Title: ${frontmatterAttributes?.title || "Untitled"}
Content: ${articleText.substring(0, 500)}...

Make it concise and under 250 characters.`;

      const { text: retryDescription } = await generateText({
        model: openai("gpt-4o-mini"),
        system: systemPrompt,
        prompt: retryPrompt,
        maxTokens: 80,
      });

      const finalDescription = retryDescription.trim();
      return {
        description: finalDescription,
        characterCount: finalDescription.length,
      };
    }

    return { description: trimmedDescription, characterCount };
  } catch (error) {
    throw new Error(
      `Failed to generate description: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}

export async function getDocPageContent(markdocPath: string) {
  try {
    const fileContent = readFileSync(markdocPath, "utf-8");
    const { attributes: frontmatterAttributes, body } =
      frontMatter(fileContent);

    // Use raw markdoc content directly - simpler and faster
    // The LLM can understand markdown syntax just fine
    const articleText = body;

    return {
      articleText: articleText.trim(),
      frontmatterAttributes,
    };
  } catch (error) {
    throw new Error(
      `Failed to parse markdoc file ${markdocPath}: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}

export async function generateDescriptionForDocsPage(
  filePath: string,
  options: { skipIfExists?: boolean } = {},
) {
  const resolvedPath = path.resolve(filePath);
  const { articleText, frontmatterAttributes } =
    await getDocPageContent(resolvedPath);

  if (!frontmatterAttributes) {
    throw new Error(
      "Frontmatter attributes are undefined - file may be malformed",
    );
  }

  // Check if description already exists and skip if requested
  if (options.skipIfExists && frontmatterAttributes.description) {
    console.log(
      `⏭️  Skipping ${filePath} - description already exists: "${frontmatterAttributes.description}"`,
    );
    return {
      description: frontmatterAttributes.description,
      characterCount: frontmatterAttributes.description.length,
      skipped: true,
    };
  }

  // If article text is empty, use frontmatter as fallback
  const contentToUse =
    articleText && articleText.trim()
      ? articleText
      : frontmatterAttributes.summary ||
        frontmatterAttributes.title ||
        "No content available";

  const { description, characterCount } = await generateDescription({
    articleText: contentToUse,
    frontmatterAttributes,
  });
  return { description, characterCount, skipped: false };
}

async function main() {
  const filePathArg = extractArg("file-path");
  const skipIfExists = extractBooleanArg("skip-existing");
  const showHelp = extractBooleanArg("help");

  if (showHelp) {
    console.log(`
📝 LLM Description Generator

Usage:
  npm run generate:page-description -- --file-path <path> [options]

Options:
  --file-path <path>     Path to the markdoc file to process
  --skip-existing        Skip files that already have descriptions
  --help                 Show this help message

Examples:
  npm run generate:page-description -- --file-path ./blog-post.markdoc
  npm run generate:page-description -- --file-path ./blog-post.markdoc --skip-existing

For CI/CD usage:
  npm run generate:page-description -- --file-path ./new-post.markdoc --skip-existing
`);
    return;
  }

  if (!filePathArg) {
    throw new Error("File path is required. Use --help for usage information.");
  }

  const resolvedPath = path.resolve(filePathArg);
  const { description, characterCount, skipped } =
    await generateDescriptionForDocsPage(resolvedPath, { skipIfExists });

  if (skipped) {
    console.log("✅ File skipped - description already exists");
    return;
  }

  console.log(
    `================ DESCRIPTION START (character count: ${characterCount}) =================`,
  );
  console.log(description);
  console.log(`===================== DESCRIPTION END ======================`);
}

// Runs only if invoked via CLI
// Check if this file is being run directly (not imported)
const isDirect =
  process.argv[1] && process.argv[1].endsWith("llm-generate-description.ts");
if (isDirect) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
