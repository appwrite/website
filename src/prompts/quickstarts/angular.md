Goal: Add Appwrite auth to a new Angular app with a minimal login/register/logout UI.

Rules

- Ask user for Cloud Region and Project ID; do not hardcode.
- Use Angular environment config to store these values.

1. Scaffold Angular
    - Run: ng new my-app --routing=false --style=css && cd my-app

2. Install SDK
    - npm install appwrite

3. Environment (ask user first)
    - Ask for Region (e.g. fra/nyc) and Project ID (Console → Settings).
    - Update `src/environments/environment.ts`:
        ```ts
        export const environment = {
            production: false,
            appwrite: {
                endpoint: 'https://<REGION>.cloud.appwrite.io/v1',
                projectId: '<PROJECT_ID>'
            }
        };
        ```

4. Client service (key snippet)
    - Create `src/app/appwrite.service.ts`:

        ```ts
        import { Injectable } from '@angular/core';
        import { Client, Account, ID } from 'appwrite';
        import { environment } from '../environments/environment';

        @Injectable({ providedIn: 'root' })
        export class AppwriteService {
            client = new Client()
                .setEndpoint(environment.appwrite.endpoint)
                .setProject(environment.appwrite.projectId);
            account = new Account(this.client);
            ID = ID;
        }
        ```

5. UI wiring (idea + snippets)
    - In a component, inject `AppwriteService` and bind a simple form (email, password, name) with buttons for Login, Register, Logout.
    - Actions:
        ```ts
        async login(email: string, password: string){ await svc.account.createEmailPasswordSession({ email, password }); this.user = await svc.account.get(); }
        async register(email: string, password: string, name: string){ await svc.account.create({ userId: svc.ID.unique(), email, password, name }); await this.login(email, password); }
        async logout(){ await svc.account.deleteSession({ sessionId: 'current' }); this.user = null; }
        ```

6. Verify platform
    - Confirm Web platform with Hostname = localhost in Console.

7. Run & test
    - ng serve --open

Deliverables

- environment config, `AppwriteService`, component with minimal form/actions
