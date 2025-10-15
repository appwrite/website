Goal: Use Appwrite from a new Swift server (CLI) app to create/read data (no client UI).

Rules

- This is the Swift Server SDK. For iOS/macOS/tvOS/watchOS client apps, use the Apple quickstart.
- Ask user for Cloud Region, Project ID, and an API Key with required scopes; do not hardcode silently.
- Read credentials from environment/config.

1. Scaffold
    - Xcode → New Project → macOS → Command Line Tool (or `swift build` via SwiftPM).

2. Install SDK (SPM)
    - File → Add Packages… → `https://github.com/appwrite/sdk-for-swift` (version `10.0.0`, Up to Next Major).

3. Configure env (ask user first)
    - Provide environment variables:
      APPWRITE_ENDPOINT=https://<REGION>.cloud.appwrite.io/v1
      APPWRITE_PROJECT_ID=<PROJECT_ID>
      APPWRITE_API_KEY=<API_KEY>

4. Client setup (key snippet)
    - File: `main.swift` (or a separate module). Read env and construct the client:
        ```swift
        import Appwrite
        let env = ProcessInfo.processInfo.environment
        guard let endpoint = env["APPWRITE_ENDPOINT"],
              let projectId = env["APPWRITE_PROJECT_ID"],
              let apiKey = env["APPWRITE_API_KEY"] else {
          fatalError("Missing APPWRITE_* env vars")
        }
        let client = Client().setEndpoint(endpoint).setProject(projectId).setKey(apiKey)
        let tablesDB = TablesDB(client)
        ```

5. Example ops (idea + key snippets)
    - Create database/table/columns; seed rows; list rows.
        ```swift
        // list rows
        let res = try await tablesDB.listRows(databaseId: dbId, tableId: tableId)
        for row in res.rows { print(row.data["title"] ?? "") }
        ```

6. Run & test
    - Run from Xcode or `swift run`, ensuring env vars are provided.

Deliverables

- `main.swift` (client setup + example ops), env variables for endpoint/project/api key
