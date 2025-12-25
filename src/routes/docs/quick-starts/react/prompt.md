Goal: Add Appwrite auth to a new React (Vite) app with a working login/register/logout page.

Do exactly these steps in order. Confirm each step succeeds before continuing. If any command fails, show the error and fix it automatically.

Respect user's package manager at all time. Don't use NPM if the user uses something else.

1. Create or use existing React app
    - If you already have a React (Vite) project open, stay in it and use it.
    - Otherwise, run: npm create vite@latest my-app -- --template react
    - Change dir: cd my-app

2. Install Appwrite SDK
    - Run: npm install appwrite

3. Create Appwrite client module (ask user for details; never assume)
    - Ask the user for:
        - Appwrite Cloud Region (e.g. fra, nyc)
        - Project ID (from Console -> Settings)
    - Hardcode the endpoint and project ID in the file: src/lib/appwrite.js (or .ts) if provided, else leave placeholder and ask the user to provide them.
    - Create file: src/lib/appwrite.js (or .ts) with key snippet:
        ```js
        import { Client, Account, ID } from 'appwrite';
        const endpoint = 'https://<REGION>.cloud.appwrite.io/v1';
        const projectId = '<PROJECT_ID>';
        if (!endpoint || !projectId) throw new Error('Missing Appwrite endpoint and project ID');
        const client = new Client().setEndpoint(endpoint).setProject(projectId);
        export const account = new Account(client);
        export { ID };
        ```

4. Build the login page
    - If this is a fresh project, you may replace `src/App.jsx` (or .tsx) with a component that renders the auth UI.
    - If you are working in an existing project, add a new route/page instead of overriding the default route. If routing is not set up, install `react-router-dom` and add a `/auth` route that renders this component.
    - The component should render:
        - Email/password inputs
        - Name input for registration
        - Buttons: Login, Register, Logout
        - Shows "Logged in as <name>" when a session exists
    - Implement functions:
        - login(email, password): account.createEmailPasswordSession({ email, password }) then set user via account.get()
        - register(): account.create({ userId: ID.unique(), email, password, name }) then call login
        - logout(): account.deleteSession({ sessionId: 'current' }) then clear user state

5. Verify environment (ask user to confirm)
    - Confirm endpoint and project ID are set in `src/lib/appwrite.js`.
    - Ensure the Web app platform exists in Appwrite Console with Hostname = `localhost`. If missing, guide the user to add it.

6. Run and test
    - Run: npm run dev -- --open --port 3000
    - Open: http://localhost:3000
    - Test flows:
        - Register a new user and auto login works
        - Logout then login again
    - Surface any Appwrite errors (invalid project, endpoint, CORS/hostname) and fix by guiding updates to appwrite.js and Console settings.

Deliverables

- A running React app with working Appwrite auth (register/login/logout)
- Files created/updated: package.json (deps), src/lib/appwrite.js, src/App.jsx
