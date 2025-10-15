Goal: Use Appwrite from a new Node.js server app to create/read data (no client UI).

Rules

- Never assume project details. Ask for Cloud Region, Project ID, and an API Key with required scopes.
- Read credentials from environment variables; do not hardcode.

1. Scaffold Node app
    - mkdir my-app && cd my-app && npm init -y

2. Install SDK
    - npm install node-appwrite

3. Configure env (ask user first)
    - Ask for: REGION, PROJECT_ID, API_KEY (with needed scopes).
    - Create `.env` with:
      APPWRITE_ENDPOINT=https://<REGION>.cloud.appwrite.io/v1
      APPWRITE_PROJECT_ID=<PROJECT_ID>
      APPWRITE_API_KEY=<API_KEY>

4. Client setup (key snippet)
    - File: `app.js`
        ```js
        require('dotenv').config();
        const sdk = require('node-appwrite');
        const client = new sdk.Client()
            .setEndpoint(process.env.APPWRITE_ENDPOINT)
            .setProject(process.env.APPWRITE_PROJECT_ID)
            .setKey(process.env.APPWRITE_API_KEY);
        // Services
        const tablesDB = new sdk.TablesDB(client);
        module.exports = { sdk, client, tablesDB };
        ```

5. Example ops (idea + key snippets)
    - Create database/table/columns, seed rows, and list rows as in docs.
    - Key create/list pattern:
        ```js
        const { sdk, tablesDB } = require('./app');
        async function listRows(databaseId, tableId) {
            const res = await tablesDB.listRows({ databaseId, tableId });
            console.log(res.rows);
        }
        ```

6. Run & test
    - node app.js

Deliverables

- `.env`, `app.js` with client, additional scripts for create/list as needed
