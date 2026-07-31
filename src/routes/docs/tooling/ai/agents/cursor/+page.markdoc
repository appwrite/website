---
layout: article
title: Cursor
description: Learn how to use Cursor with Appwrite through quick start prompts and the Appwrite MCP server for AI-assisted development.
---

{% section #quick-start-prompts step=1 title="Quick start prompts" %}

Get started quickly with these pre-built prompts for common Appwrite integrations:

{% cards %}
{% cards_item href="/docs/tooling/ai/quickstart-prompts/nextjs" title="Next.js" icon="icon-nextjs" %}
{% /cards_item %}
{% cards_item href="/docs/tooling/ai/quickstart-prompts/tanstack-start" title="TanStack Start" icon="web-icon-tanstack" %}
{% /cards_item %}
{% /cards %}

{% arrow_link href="/docs/tooling/ai/quickstart-prompts" %}
Browse all quick start prompts
{% /arrow_link %}

{% /section %}

{% section #step-2 step=2 title="Add the MCP server" %}

Connect the Appwrite MCP server to Cursor for deeper integration with the Appwrite API and documentation. It is a remote HTTP server, so there are no additional pre-requisites to install.

Open the **Cursor Settings** page, head to the **MCP** tab, and click on the **Add new global MCP server** button. This will open an `mcp.json` file in your editor.

Update the `mcp.json` file to include the Appwrite MCP server:

```json
{
    "mcpServers": {
        "appwrite": {
            "url": "https://mcp.appwrite.io/"
        }
    }
}

```

The server uses OAuth for authentication. After you save the file, click **Needs login** next to the server in the MCP settings. Your browser opens so you can sign in to your Appwrite account and authorize access.

You can also **directly add the MCP server to Cursor** using the following link:

{% only_light %}
{% cards %}

{% cards_item href="https://cursor.com/install-mcp?name=appwrite&config=eyJ1cmwiOiJodHRwczovL21jcC5hcHB3cml0ZS5pby8ifQ==" title="Add to Cursor" image="/images/docs/mcp/logos/cursor-ai.svg" %}
{% /cards_item %}

{% /cards %}
{% /only_light %}

{% only_dark %}
{% cards %}

{% cards_item href="https://cursor.com/install-mcp?name=appwrite&config=eyJ1cmwiOiJodHRwczovL21jcC5hcHB3cml0ZS5pby8ifQ==" title="Add to Cursor" image="/images/docs/mcp/logos/dark/cursor-ai.svg" %}
{% /cards_item %}

{% /cards %}
{% /only_dark %}

Once you save the details, Cursor will connect with the MCP server and load all available tools. You may need to restart Cursor if it is unable to start the MCP server.

{% /section %}

{% section #step-3 step=3 title="Test the integration" %}

Open Cursor Agent and test your MCP integration. You can try out the following example prompts:

**Example prompts:**

- `Create a new user in my Appwrite project`
- `List all databases in my project`
- `Show me the tables in my database`
- `How do I set up real-time subscriptions in Appwrite?`
- `Show me how to authenticate users with OAuth`
- `How do I implement file uploads with Appwrite Storage?`

{% /section %}