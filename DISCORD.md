**Announcing Appwrite MCP Server 2.0 // cc** @Product Updates

The Appwrite MCP server has been rebuilt with a new two-tool architecture. You no longer need to pass service flags like `--users` or `--storage` to enable specific Appwrite services.

All services are now enabled by default. The server exposes just two tools to the model: one to search the full Appwrite tool catalog, and one to execute operations. The full catalog is searched at runtime, using less of the model's context.

To upgrade, remove all service flags from your MCP configuration.

Read the announcement: https://appwrite.io/blog/post/announcing-appwrite-mcp-server-2
