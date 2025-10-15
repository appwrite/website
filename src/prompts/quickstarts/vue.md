Goal: Add Appwrite auth to a new Vue (Vite) app with a simple login/register/logout UI.

Rules

- Never assume project details. Ask the user for Cloud Region and Project ID.
- Store them in `.env.local` with `VITE_` prefix. Do not hardcode.
- Respect the user’s package manager (examples use npm).

1. Scaffold Vue (Vite)
    - Run: npm init vue@latest my-app && cd my-app

2. Install SDK
    - Run: npm install appwrite

3. Configure env (ask user first)
    - Ask for Cloud Region (e.g. fra/nyc) and Project ID (Console → Settings).
    - Create `.env.local` with:
      VITE_APPWRITE_ENDPOINT=https://<REGION>.cloud.appwrite.io/v1
      VITE_APPWRITE_PROJECT_ID=<PROJECT_ID>

4. Appwrite client (key snippet)
    - File: `src/lib/appwrite.js`

        ```js
        import { Client, Account } from 'appwrite';

        const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
        const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
        if (!endpoint || !projectId) throw new Error('Missing VITE_APPWRITE_* in .env.local');

        export const client = new Client().setEndpoint(endpoint).setProject(projectId);
        export const account = new Account(client);
        export { ID } from 'appwrite';
        ```

5. App UI wiring (idea + key snippets)
    - File: `src/App.vue`
    - Template: minimal form with inputs (email, password, name) and buttons (Login, Register, Logout). Show current user name when logged in.
    - Script setup essentials:
        ```js
        import { ref } from 'vue';
        import { account, ID } from './lib/appwrite';
        const user = ref(null),
            email = ref(''),
            password = ref(''),
            name = ref('');
        async function login(e, p) {
            await account.createEmailPasswordSession({ email: e, password: p });
            user.value = await account.get();
        }
        async function register() {
            await account.create({
                userId: ID.unique(),
                email: email.value,
                password: password.value,
                name: name.value
            });
            await login(email.value, password.value);
        }
        async function logout() {
            await account.deleteSession({ sessionId: 'current' });
            user.value = null;
        }
        ```

6. Verify platform
    - Ask user to confirm a Web platform exists in Appwrite Console with Hostname = `localhost`.

7. Run & test
    - Run: npm run dev
    - Open http://localhost:3000 and test register/login/logout.

Deliverables

- `.env.local`, `src/lib/appwrite.js`, updated `src/App.vue` with minimal form and actions
