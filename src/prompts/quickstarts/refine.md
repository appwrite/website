Goal: Create a new Refine app wired to Appwrite (auth + data provider), using minimal changes.

Rules

- Never assume project details. Ask the user for: API Endpoint (region), Project ID, and (if using data provider) Database ID and Table ID.
- Prefer env vars; do not hardcode secrets.

1. Scaffold (Refine preset for Appwrite)
    - Run: npm create refine-app@latest -- --preset refine-appwrite
    - cd into the project

2. Dependencies
    - The preset includes the Appwrite integration. For existing apps instead: npm install @refinedev/appwrite

3. Configure env (ask user first)
    - Ask for: Endpoint (e.g. https://<REGION>.cloud.appwrite.io/v1), Project ID
    - Create `.env.local` with:
      VITE_APPWRITE_ENDPOINT=https://<REGION>.cloud.appwrite.io/v1
      VITE_APPWRITE_PROJECT_ID=<PROJECT_ID>
        # Optional if you’ll use providers right away
        VITE_APPWRITE_DATABASE_ID=<DATABASE_ID>
        VITE_APPWRITE_TABLE_ID=<TABLE_ID>

4. Appwrite client (key snippet)
    - File: `src/utility/appwriteClient.ts`

        ```ts
        import { Appwrite, Account, Storage } from '@refinedev/appwrite';
        const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
        const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
        if (!endpoint || !projectId) throw new Error('Missing VITE_APPWRITE_*');

        const appwriteClient = new Appwrite().setEndpoint(endpoint).setProject(projectId);
        const account = new Account(appwriteClient);
        const storage = new Storage(appwriteClient);
        export { appwriteClient, account, storage };
        ```

5. Providers wiring (idea + key snippets)
    - In `src/App.tsx`, keep the preset structure. Ensure the providers receive your Database/Table IDs (ask user for these or guide them to create them in Console).

        ```ts
        import { Refine } from '@refinedev/core';
        import { dataProvider, liveProvider } from '@refinedev/appwrite';
        import { appwriteClient } from './utility/appwriteClient';

        const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
        const tableId = import.meta.env.VITE_APPWRITE_TABLE_ID;
        // Pass databaseId to providers; tableId is used by resources/routes.
        <Refine
          dataProvider={dataProvider(appwriteClient, { databaseId })}
          liveProvider={liveProvider(appwriteClient, { databaseId })}
          // ...authProvider/router/themes as preset provides
        />
        ```

    - Use Refine’s `<AuthPage />` for login/register, and point your initial route to a resource backed by `tableId`.

6. Verify platform
    - Ask user to add a Web platform in Appwrite Console with Hostname = `localhost`.

7. Run & test
    - npm run dev -- --open --port 3000
    - Confirm you can load the auth page and list a resource backed by your table.

Deliverables

- `.env.local`, `src/utility/appwriteClient.ts`, updated `src/App.tsx` provider config
