Goal: Add Appwrite auth to a new Nuxt 3 app with a simple login/register/logout UI.

Rules

- Never assume project details. Ask user for Cloud Region and Project ID.
- Use `.env` with `NUXT_PUBLIC_` variables; do not hardcode.
- Respect the user’s package manager (examples use npm).

1. Scaffold Nuxt
    - Run: npx nuxi@latest init my-app && cd my-app

2. Install SDK
    - Run: npm install appwrite

3. Configure env (ask user first)
    - Ask for: Cloud Region (e.g. fra/nyc), Project ID (Console → Settings).
    - Create `.env` with:
      NUXT_PUBLIC_APPWRITE_ENDPOINT=https://<REGION>.cloud.appwrite.io/v1
      NUXT_PUBLIC_APPWRITE_PROJECT_ID=<PROJECT_ID>

4. Appwrite client (key snippet)
    - File: `utils/appwrite.js`

        ```js
        import { Client, Account } from 'appwrite';

        const endpoint = process.env.NUXT_PUBLIC_APPWRITE_ENDPOINT;
        const projectId = process.env.NUXT_PUBLIC_APPWRITE_PROJECT_ID;
        if (!endpoint || !projectId) throw new Error('Missing NUXT_PUBLIC_* env in .env');

        export const client = new Client().setEndpoint(endpoint).setProject(projectId);
        export const account = new Account(client);
        export { ID } from 'appwrite';
        ```

5. UI wiring in `app.vue` (idea + key snippets)
    - Template: minimal form with inputs (email, password, name) and buttons (Login, Register, Logout). Show current user name when logged in.
    - Script setup essentials:
        ```js
        import { ref } from 'vue';
        import { account, ID } from '~/utils/appwrite';
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
    - Ask user to confirm Web platform exists in Console with Hostname = `localhost`.

7. Run & test
    - Run: npm run dev
    - Open http://localhost:3000 and test register/login/logout.

Deliverables

- `.env`, `utils/appwrite.js`, updated `app.vue` minimal form and actions
