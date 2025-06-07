import type { RequestHandler } from "@sveltejs/kit";
import { readFileSync } from "fs";
import { join } from "path";

export const GET: RequestHandler = () => {
  try {
    const contentPath = join(process.cwd(), "src/routes/docs/llms.txt/content.txt");
    const llmsContent = readFileSync(contentPath, "utf-8");

    return new Response(llmsContent, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("Error reading llms content:", error);
    return new Response("Content not found", {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
};
