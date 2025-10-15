Goal: Use Appwrite from a new Deno CLI app (via node-appwrite npm specifiers) to create/read data (no UI).

Rules

- Ask user for Cloud Region, Project ID, and an API Key with required scopes.
- Read credentials from env; do not hardcode.

1. Scaffold
    - mkdir my-app && cd my-app && echo "console.log('Hello, Deno!');" > mod.ts

2. Import SDK (npm specifiers)
    - At the top of `mod.ts`:
        ```ts
        import { Client, ID, TablesDB } from 'npm:node-appwrite';
        ```

3. Configure env (ask user first)
    - Provide env (Deno.env or launch args):
      APPWRITE_ENDPOINT=https://<REGION>.cloud.appwrite.io/v1
      APPWRITE_PROJECT_ID=<PROJECT_ID>
      APPWRITE_API_KEY=<API_KEY>

4. Client setup (key snippet)
    - `mod.ts` essentials:
        ```ts
        const client = new Client()
            .setEndpoint(Deno.env.get('APPWRITE_ENDPOINT')!)
            .setProject(Deno.env.get('APPWRITE_PROJECT_ID')!)
            .setKey(Deno.env.get('APPWRITE_API_KEY')!);
        const tablesDB = new TablesDB(client);
        ```

5. Example ops (idea + key snippets)
    - Create database/table/columns; seed rows; list rows.
        ```ts
        async function listRows(dbId: string, tableId: string) {
            const res = await tablesDB.listRows({ databaseId: dbId, tableId });
            res.rows.forEach((t: any) => console.log(t.title));
        }
        ```

6. Run & test
    - deno run --allow-env mod.ts

Deliverables

- `mod.ts` with client and example ops, env injection for credentials
