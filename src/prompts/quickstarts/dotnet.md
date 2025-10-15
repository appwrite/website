Goal: Use Appwrite from a new .NET console app to create/read data (no client UI).

Rules

- Ask user for Cloud Region, Project ID, and an API Key with required scopes.
- Read credentials from env/config; do not hardcode.

1. Scaffold
    - dotnet new console -o MyApp && cd MyApp

2. Install SDK
    - dotnet add package Appwrite --version 0.13.0

3. Configure env (ask user first)
    - Create `appsettings.Development.json` or use environment variables:
      APPWRITE_ENDPOINT=https://<REGION>.cloud.appwrite.io/v1
      APPWRITE_PROJECT_ID=<PROJECT_ID>
      APPWRITE_API_KEY=<API_KEY>

4. Client setup (key snippet)
    - File: `Program.cs`
        ```csharp
        using Appwrite; using Appwrite.Services; using Appwrite.Models;
        var client = new Client()
          .SetEndpoint(Environment.GetEnvironmentVariable("APPWRITE_ENDPOINT"))
          .SetProject(Environment.GetEnvironmentVariable("APPWRITE_PROJECT_ID"))
          .SetKey(Environment.GetEnvironmentVariable("APPWRITE_API_KEY"));
        var tablesDB = new TablesDB(client);
        ```

5. Example ops (idea + key snippets)
    - Create database/table/columns; seed rows; list rows.
        ```csharp
        var todos = await tablesDB.listRows(databaseId: dbId, tableId: tableId);
        foreach (var todo in todos.Documents) Console.WriteLine(todo.Data["title"]);
        ```

6. Run & test
    - dotnet run

Deliverables

- `Program.cs` with client and example ops, env/config entries
