Goal: Add Appwrite auth to a new React (Vite) app with a simple login/register/logout UI.

Important rules

- Never assume project details; ask the user for Appwrite Cloud region and Project ID.
- Store these in .env.local; do not hardcode.
- Respect the user’s package manager (npm/pnpm/yarn). Examples use npm.

1. Create React project (Vite)
    - Run: npm create vite@latest my-app -- --template react
    - cd my-app

2. Install Appwrite SDK
    - Run: npm install appwrite

3. Configure environment (ask user first)
    - Ask for: Appwrite Cloud Region (e.g. fra, nyc) and Project ID.
    - Create .env.local with:
      VITE_APPWRITE_ENDPOINT=https://<REGION>.cloud.appwrite.io/v1
      VITE_APPWRITE_PROJECT_ID=<PROJECT_ID>

4. Create Appwrite client module
    - Create file: src/lib/appwrite.js
    - Contents:
      import { Client, Account } from 'appwrite';

        const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
        const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

        if (!endpoint || !projectId) {
        throw new Error('Missing VITE_APPWRITE_ENDPOINT or VITE_APPWRITE_PROJECT_ID in .env.local');
        }

        export const client = new Client()
        .setEndpoint(endpoint)
        .setProject(projectId);

        export const account = new Account(client);
        export { ID } from 'appwrite';

5. Build the login page (idea + key snippets)
    - File: `src/App.jsx`
    - Render: minimal form (email, password, optional name) + buttons (Login, Register, Logout). Show user name when logged in.
    - Logic essentials:
        ```js
        import { account, ID } from './lib/appwrite';
        async function login(email, password) {
            await account.createEmailPasswordSession({ email, password });
            setUser(await account.get());
        }
        async function register() {
            await account.create({ userId: ID.unique(), email, password, name });
            await login(email, password);
        }
        async function logout() {
            await account.deleteSession({ sessionId: 'current' });
            setUser(null);
        }
        ```

6. Verify platform setup
    - Ask user to confirm a Web app platform exists in Appwrite Console with Hostname = localhost.

7. Run and test
    - Run: npm run dev -- --open --port 3000
    - Open http://localhost:3000 and test register/login/logout.

Deliverables

- Running Vite React app with Appwrite auth
- Files: src/lib/appwrite.js, src/App.jsx, .env.local
