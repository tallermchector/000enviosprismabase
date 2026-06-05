/**
 * Netlify Edge Function: Serve Markdown
 *
 * This function intercepts requests to content pages and returns a clean
 * Markdown version if the request has the header `Accept: text/markdown`.
 *
 * How to test locally:
 * 1. Install Netlify CLI:
 *    npm install -g netlify-cli
 * 2. Start the local Netlify dev server:
 *    netlify dev
 * 3. Run the following curl command:
 *    curl -H "Accept: text/markdown" http://localhost:8888/servicios/envios-express
 *
 * How to add or remove paths from the edge function scope:
 * - Open `netlify.toml` in the project root.
 * - Add or remove `[[edge_functions]]` blocks with matching path patterns.
 *
 * Curl command to test the Markdown response:
 * curl -H "Accept: text/markdown" https://your-site.netlify.app/path
 */

import TurndownService from "npm:turndown";

// Handle potential default/wrapper export differences in ESM/CJS module systems
// deno-lint-ignore no-explicit-any
const TurndownClass: any = (TurndownService as any).default || TurndownService;

// deno-lint-ignore no-explicit-any
export default async (request: Request, context: any) => {
  // 1. Check for Accept: text/markdown header
  const acceptHeader = request.headers.get("Accept");
  if (!acceptHeader || !acceptHeader.includes("text/markdown")) {
    return; // Pass through to origin unchanged
  }

  // Clone the response context to allow fallback in case of errors
  // We call context.next() to fetch from the origin server (Next.js)
  const response = await context.next();
  const fallbackResponse = response.clone();

  try {
    // Check if the response is actually HTML
    const contentType = response.headers.get("Content-Type") || "";
    if (!contentType.includes("text/html")) {
      return response;
    }

    const html = await response.text();

    // 2. Strip non-content elements (scripts, styles, nav, footer, header, sidebars)
    const cleanHtml = stripNonContentElements(html);

    // 3. Convert the remaining HTML to Markdown using Turndown
    const turndownService = new TurndownClass({
      headingStyle: "atx",
      hr: "---",
      bulletListMarker: "-",
      codeBlockStyle: "fenced",
    });

    const markdown = turndownService.turndown(cleanHtml);

    // 4. Return the Markdown response with required headers
    const tokenCount = Math.round(markdown.length / 4);

    return new Response(markdown, {
      status: response.status,
      statusText: response.statusText,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "X-Markdown-Tokens": String(tokenCount),
        "Content-Signal": "ai-train=yes, search=yes, ai-input=yes",
      },
    });
  } catch (error) {
    console.error("Error in serve-markdown Edge Function:", error);
    // Fallback to the original HTML response on any error
    return fallbackResponse;
  }
};

/**
 * Strips scripts, styles, header, footer, nav, and aside elements from HTML.
 */
function stripNonContentElements(html: string): string {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/gi, "")
    .replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/gi, "")
    .replace(/<header\b[^>]*>[\s\S]*?<\/header>/gi, "")
    .replace(/<aside\b[^>]*>[\s\S]*?<\/aside>/gi, "");
}
