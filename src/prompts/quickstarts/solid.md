Goal: Add Appwrite auth to a new Solid (Vite) app with a minimal login/register/logout UI.

Rules

- Ask user for Cloud Region and Project ID.
- Use `.env.local` with `VITE_` prefix; do not hardcode.

1. Scaffold Solid (Vite)
    - npm create vite@latest my-app -- --template solid && cd my-app

2. Install SDK
    - npm install appwrite

3. Configure env (ask user first)
    - Create `.env.local`:
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

5. UI wiring (idea + key snippets)
    - File: `src/App.jsx`
    - Use Solid signals and minimal form. Essentials:
        ```js
        import { createSignal } from 'solid-js';
        import { account, ID } from './lib/appwrite';
        const [user, setUser] = createSignal(null);
        const [email, setEmail] = createSignal('');
        const [password, setPassword] = createSignal('');
        const [name, setName] = createSignal('');
        async function login(e, p) {
            await account.createEmailPasswordSession({ email: e, password: p });
            setUser(await account.get());
        }
        async function register() {
            await account.create({
                userId: ID.unique(),
                email: email(),
                password: password(),
                name: name()
            });
            await login(email(), password());
        }
        async function logout() {
            await account.deleteSession({ sessionId: 'current' });
            setUser(null);
        }
        ```

6. Verify platform
    - Ask user to add Web platform in Console with Hostname = `localhost`.

7. Run & test
    - npm run dev -- --open --port 3000

Deliverables

- `.env.local`, `src/lib/appwrite.js`, updated `src/App.jsx` with minimal form/actions
