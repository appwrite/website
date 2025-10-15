Goal: Add Appwrite auth to a new SvelteKit app with a simple login/register/logout UI.

Important rules

- Never assume project details; ask the user for Appwrite Cloud region and Project ID.
- Store these in `.env` (SvelteKit reads from `$env/static/public`). Do not hardcode.
- Respect the user’s package manager. Examples use npm.

1. Create SvelteKit project
    - Run: npx sv create
    - Choose SvelteKit + JavaScript (or TypeScript if user wants TS).
    - cd into the created directory.

2. Install Appwrite SDK
    - Run: npm install appwrite

3. Configure environment (ask user first)
    - Ask for Cloud Region and Project ID.
    - Create `.env` in project root with:
      PUBLIC_APPWRITE_ENDPOINT=https://<REGION>.cloud.appwrite.io/v1
      PUBLIC_APPWRITE_PROJECT_ID=<PROJECT_ID>

4. Create Appwrite client module
    - Create file: src/lib/appwrite.js
    - Contents:
      import { Client, Account } from 'appwrite';
      import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_ID } from '$env/static/public';

        if (!PUBLIC_APPWRITE_ENDPOINT || !PUBLIC_APPWRITE_PROJECT_ID) {
        throw new Error('Missing PUBLIC_APPWRITE_ENDPOINT or PUBLIC_APPWRITE_PROJECT_ID in .env');
        }

        export const client = new Client()
        .setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
        .setProject(PUBLIC_APPWRITE_PROJECT_ID);

        export const account = new Account(client);
        export { ID } from 'appwrite';

5. Build the login page (idea + key snippets, no full file replacement)
    - In `src/routes/+page.svelte`, add a minimal form with inputs: email, password, optional name; and buttons: Login, Register, Logout.
    - State and actions (paste inside `<script>`):

        ```js
        import { account, ID } from '$lib/appwrite';
        let user = null,
            email = '',
            password = '',
            name = '';

        async function login(email, password) {
            await account.createEmailPasswordSession({ email, password });
            user = await account.get();
        }
        async function register() {
            await account.create({ userId: ID.unique(), email, password, name });
            await login(email, password);
        }
        async function logout() {
            await account.deleteSession({ sessionId: 'current' });
            user = null;
        }
        ```

    - Submit handler pattern (choose click handlers or a single form submit):
        ```js
        function submit(e) {
            e.preventDefault();
            const fd = new FormData(e.target);
            const type = e.submitter?.dataset?.type;
            if (type === 'login') login(fd.get('email'), fd.get('password'));
            if (type === 'register') {
                email = fd.get('email');
                password = fd.get('password');
                register();
            }
        }
        ```
    - Render logic: show “Logged in as {user?.name}” when `user` is set; otherwise “Not logged in”.

6. Verify platform setup
    - Ask user to confirm a Web platform exists in Appwrite Console with Hostname = localhost.

7. Run and test
    - Run: npm run dev
    - Open http://localhost:5173 and test register/login/logout.

Deliverables

- Running SvelteKit app with Appwrite auth
- Files: src/lib/appwrite.js, src/routes/+page.svelte, .env
