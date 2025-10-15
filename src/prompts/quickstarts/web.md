Goal: Add Appwrite to a vanilla Web app (no framework) with a minimal login/register/logout UI.

Rules

- Never assume project details. Ask user for Cloud Region and Project ID.
- Prefer npm install; optionally show CDN path. Do not hardcode secrets.

1. Project skeleton
    - Create: index.html, app.js

2. Install SDK (package) or CDN
    - Package: npm install appwrite
    - CDN (optional): <script src="https://cdn.jsdelivr.net/npm/appwrite@17.0.0"></script>

3. Initialize (ask user first)
    - Ask for Region and Project ID.
    - If using bundler/module:
        ```js
        import { Client, Account, ID } from 'appwrite';
        const client = new Client()
            .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
            .setProject('<PROJECT_ID>');
        const account = new Account(client);
        export { account, ID };
        ```
    - If using CDN:
        ```html
        <script>
            const client = new Appwrite.Client()
                .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
                .setProject('<PROJECT_ID>');
            const account = new Appwrite.Account(client);
        </script>
        ```

4. UI wiring (idea + key snippets)
    - index.html: inputs (email, password, name) + buttons (Login, Register, Logout), area to show current user name.
    - app.js essentials:
        ```js
        async function login(email, password) {
            await account.createEmailPasswordSession({ email, password });
            show(await account.get());
        }
        async function register(email, password, name) {
            await account.create({ userId: ID.unique(), email, password, name });
            await login(email, password);
        }
        async function logout() {
            await account.deleteSession({ sessionId: 'current' });
            show(null);
        }
        ```

5. Verify platform
    - Ask user to add Web platform in Console with correct hostname (localhost for local dev).

6. Run & test
    - Serve the folder (any static server) and test register/login/logout.

Deliverables

- index.html, app.js wired to Appwrite via package or CDN
