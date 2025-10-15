Goal: Add Appwrite auth to a new React Native (Expo) app with a minimal login/register/logout UI.

Rules

- Never assume project details. Ask the user for Cloud Region, Project ID, and package/bundle ID.
- Use explicit config (no hardcoding in code except reading constants/env the user sets).
- Respect the user’s package manager and Expo workflow.

1. Scaffold Expo app
    - Run: npx create-expo-app my-app && cd my-app

2. Install SDK and polyfills
    - Run: npx expo install react-native-appwrite react-native-url-polyfill

3. Configure identifiers (ask user)
    - Ask user for Android package name and iOS bundle identifier. Guide them to set these in `app.json`.
    - Ask for Cloud Region and Project ID from Console → Settings.

4. Client setup (key snippet)
    - File: `app/lib/appwrite.ts` (or `.js`)

        ```ts
        import 'react-native-url-polyfill/auto';
        import { Client, Account, ID } from 'react-native-appwrite';

        const endpoint = 'https://<REGION>.cloud.appwrite.io/v1'; // ask user for <REGION>
        const project = '<PROJECT_ID>'; // ask user for ID
        const platform = '<PACKAGE_OR_BUNDLE_ID>'; // ask user for this

        const client = new Client().setEndpoint(endpoint).setProject(project).setPlatform(platform);
        export const account = new Account(client);
        export { ID };
        ```

5. UI wiring (idea + key snippets)
    - Screen file (e.g., `app/(tabs)/index.tsx`):

        ```tsx
        import React, { useState } from 'react';
        import { View, Text, TextInput, TouchableOpacity } from 'react-native';
        import { account, ID } from '../lib/appwrite';

        const [user, setUser] = useState(null);
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [name, setName] = useState('');

        async function login(e: string, p: string) {
            await account.createEmailPasswordSession({ email: e, password: p });
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

    - Minimal JSX: display user name when logged in; inputs for email/password/name; buttons for Login/Register/Logout.

6. Verify platforms
    - Ask user to add Android and/or iOS platform in Console. Use the configured package/bundle identifiers.

7. Run & test
    - Run: npx expo start
    - Test register → auto login → logout → login.

Deliverables

- `app/lib/appwrite.ts`, updated screen with minimal form and actions
