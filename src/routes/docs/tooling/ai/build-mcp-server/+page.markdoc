---
layout: article
title: Build an MCP server
description: Build and deploy a custom Model Context Protocol server on Appwrite Functions using the Python MCP server template.
---

The Appwrite MCP server template lets you expose your own tools to AI clients over HTTPS. It provides the Model Context Protocol (MCP) transport, request handling, optional bearer authentication, and an Appwrite Function entrypoint. You only need to define the tools and the application logic behind them.

Use this guide when you want an AI agent to call operations that belong to your application, such as looking up an order, querying a reporting database, checking a job, or triggering a controlled workflow.

{% info title="Appwrite MCP server or MCP server template?" %}
The hosted [Appwrite MCP server](/docs/tooling/ai/mcp-servers/api) lets AI agents manage Appwrite projects and search Appwrite documentation. The template in this guide creates a separate MCP server with tools that you design and host.
{% /info %}

# Prerequisites {% #prerequisites %}

- An [Appwrite Cloud](https://cloud.appwrite.io) project
- A GitHub account for the Function repository
- An MCP client that supports remote servers over Streamable HTTP, such as Claude Code, Cursor, or Claude Desktop

{% section #create-function step=1 title="Create the MCP server Function" %}

1. Open your project in the Appwrite Console.
1. Select **Functions** in the sidebar, then select **Templates**.
1. Search for **MCP server** and select **Create**.
1. Choose a name and Python runtime for the Function.
1. Connect a new or existing GitHub repository.
1. Select the production branch and root directory, then create the Function.

Appwrite deploys a working MCP server with two sample tools, `echo` and `add`. After the first deployment becomes active, the Function's generated domain is the URL your MCP clients will use:

```text
https://<FUNCTION_ID>.<REGION>.appwrite.run
```

The Function uses `src/main.py` as its entrypoint and installs dependencies from `requirements.txt`. The template pins the official Python MCP SDK because its serverless adapter depends on specific SDK behavior.

{% /section %}

{% section #understand-template step=2 title="Review the template" %}

The generated repository contains these important files:

| Path | Purpose |
| --- | --- |
| `src/main.py` | Appwrite Function entrypoint that passes requests to the MCP adapter. |
| `src/app.py` | MCP server definition and tools. Edit this file to add your application logic. |
| `src/appwrite_mcp/` | Stateless HTTP transport and bearer-authentication helpers. |
| `requirements.txt` | Python dependencies, including the pinned MCP SDK. |

The default tools in `src/app.py` demonstrate how the server maps Python functions to MCP tools:

```python
from mcp.server.mcpserver import MCPServer

server = MCPServer(name="my-mcp", version="0.1.0")

@server.tool(description="Echo text back to the caller.")
def echo(text: str) -> str:
    return text

@server.tool(description="Add two numbers.")
def add(a: float, b: float) -> float:
    return a + b
```

Python type hints become the tool's input schema. Tool descriptions help the model decide when to call each tool and which arguments to provide.

{% /section %}

{% section #write-tools step=3 title="Define your tools" %}

Replace the sample tools with small, explicit operations. Each tool should have one responsibility, validate its inputs, and return structured data when the result contains multiple fields.

This example calculates an order total without giving the agent control over how the calculation works:

```python
from mcp.server.mcpserver import MCPServer

server = MCPServer(
    name="order-tools",
    version="1.0.0",
    instructions="Tools for validated order calculations.",
)

@server.tool(
    description=(
        "Calculate an order total from a unit price, quantity, and optional "
        "discount percentage between 0 and 100."
    )
)
def calculate_order_total(
    unit_price: float,
    quantity: int,
    discount_percent: float = 0,
) -> dict:
    if unit_price < 0:
        raise ValueError("unit_price must be zero or greater")
    if quantity < 1:
        raise ValueError("quantity must be at least 1")
    if not 0 <= discount_percent <= 100:
        raise ValueError("discount_percent must be between 0 and 100")

    subtotal = unit_price * quantity
    discount = subtotal * (discount_percent / 100)

    return {
        "subtotal": round(subtotal, 2),
        "discount": round(discount, 2),
        "total": round(subtotal - discount, 2),
    }
```

Avoid a single general-purpose tool that accepts arbitrary commands or queries. Narrow tools give you clearer validation, smaller permissions, and more predictable results.

Do not name a source module `server.py`. Appwrite Open Runtimes already provides a top-level module with that name.

{% /section %}

{% section #access-appwrite step=4 title="Access Appwrite services from a tool" %}

Tools can call Appwrite services in the same project without storing a long-lived API key. During each execution, Appwrite passes a [dynamic API key](/docs/products/functions/develop#dynamic-api-key) in the `x-appwrite-key` header. Its permissions are limited to the scopes configured for the Function.

Open the Function's **Settings** page and select only the scopes your tools need. For example, a read-only reporting server can use `databases.read`, `tables.read`, and `rows.read` without receiving write access.

Add the Appwrite Python SDK to `requirements.txt`:

```text
appwrite
```

Then initialize its client from the tool context:

```python
import os

from appwrite.client import Client
from mcp.server.mcpserver import Context

def appwrite_client(ctx: Context) -> Client:
    api_key = (ctx.headers or {}).get("x-appwrite-key")
    if not api_key:
        raise ValueError("No dynamic Appwrite API key was provided")

    return (
        Client()
        .set_endpoint(os.environ["APPWRITE_FUNCTION_API_ENDPOINT"])
        .set_project(os.environ["APPWRITE_FUNCTION_PROJECT_ID"])
        .set_key(api_key)
    )
```

Add `ctx: Context` to any tool that needs the client. Appwrite supplies the endpoint and project ID as Function environment variables.

{% /section %}

{% section #secure-server step=5 title="Secure the MCP endpoint" %}

The template is open by default, which is useful for an initial transport test. Before exposing internal tools or data, add these environment variables in the Function settings:

| Variable | Value | Purpose |
| --- | --- | --- |
| `MCP_AUTH_MODE` | `bearer` | Requires bearer authentication for MCP requests. |
| `MCP_AUTH_TOKEN` | A long random secret | Shared token that clients must send. |
| `MCP_SERVER_NAME` | Your server name | Name returned to clients during initialization. |
| `MCP_TOOL_TIMEOUT` | `25` | Returns a controlled timeout before the Function's 30-second limit. |

The bearer token protects access to the MCP endpoint. Function scopes separately control which Appwrite APIs the tools can call. Use both layers.

{% /section %}

{% section #deploy-server step=6 title="Deploy the server" %}

Commit your changes and push them to the Function's production branch. Appwrite creates and activates a new deployment automatically.

After the deployment succeeds, open the Function in the Appwrite Console and copy its domain. Review the execution logs if initialization or a tool call fails.

{% /section %}

{% section #connect-client step=7 title="Connect an MCP client" %}

Add the Function domain and bearer token to your client's MCP configuration:

```json
{
  "mcpServers": {
    "my-mcp": {
      "url": "https://<FUNCTION_ID>.<REGION>.appwrite.run",
      "headers": {
        "Authorization": "Bearer <MCP_AUTH_TOKEN>"
      }
    }
  }
}
```

For Claude Code, you can add a server without bearer authentication from the command line:

```bash
claude mcp add --transport http my-mcp https://<FUNCTION_ID>.<REGION>.appwrite.run
```

Reconnect the client, list the server's tools, and call one with known inputs. For the example above, ask the client to calculate the total for three items at $20 each with a 10% discount. Verify both the arguments selected by the model and the structured result returned by the tool.

{% /section %}

# Design for Appwrite Functions {% #function-constraints %}

The template uses stateless request and response handling. It does not provide long-lived SSE sessions, streamed progress updates, or server-initiated messages such as sampling. Each tool call returns one final result.

Requests through a Function domain are [synchronous executions](/docs/products/functions/execute#synchronous-executions) with a 30-second limit. Keep tools focused and leave `MCP_TOOL_TIMEOUT` at 25 seconds so the server can return a clean error first. For longer work, create one tool that starts a job and returns an ID, then another tool that checks the job's status.

{% arrow_link href="/blog/post/financial-analysis-mcp-server" %}
See a complete financial analysis MCP server built with this template
{% /arrow_link %}
