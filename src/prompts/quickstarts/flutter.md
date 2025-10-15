Goal: Add Appwrite auth to a new Flutter app (multi‑platform) with a minimal login/register/logout UI.

Rules

- Ask user for Cloud Region and Project ID; do not hardcode silently.
- For mobile/web, ensure platform configuration (callback handling) per docs.

1. Scaffold Flutter
    - flutter create my_app && cd my_app

2. Install SDK
    - flutter pub add appwrite:17.0.0

3. Configure platforms (ask user)
    - Ask which platforms they target (Web, iOS, Android, Desktop) and guide:
        - Web: create `web/auth.html` to relay OAuth callback via postMessage (per docs).
        - iOS/macOS: ensure minimum deployment targets and URL scheme `appwrite-callback-<PROJECT_ID>` in Info.plist (per docs).
        - Android: add CallbackActivity with `data android:scheme="appwrite-callback-<PROJECT_ID>"` in AndroidManifest.

4. Client setup (key snippet)
    - File: `lib/main.dart` (essentials)

        ```dart
        import 'package:flutter/material.dart';
        import 'package:appwrite/appwrite.dart';
        import 'package:appwrite/models.dart' as models;

        void main() {
          WidgetsFlutterBinding.ensureInitialized();
          final client = Client()
            .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // ask user
            .setProject('<PROJECT_ID>'); // ask user
          final account = Account(client);
          runApp(MaterialApp(home: MyApp(account: account)));
        }
        ```

5. UI wiring (idea + key snippets)
    - In a stateful widget, keep: `models.User? user;` and controllers for email/password/name.
    - Actions:
        ```dart
        Future<void> login(String email, String password) async {
          await widget.account.createEmailPasswordSession(email: email, password: password);
          setState(() => user = await widget.account.get());
        }
        Future<void> register(String email, String password, String name) async {
          await widget.account.create(userId: ID.unique(), email: email, password: password, name: name);
          await login(email, password);
        }
        Future<void> logout() async {
          await widget.account.deleteSession(sessionId: 'current');
          setState(() => user = null);
        }
        ```
    - Minimal UI: show user name when logged in; text fields for email/password/name; buttons for Login/Register/Logout.

6. Run & test
    - flutter run (pick target) and validate register/login/logout flow.

Deliverables

- `lib/main.dart` essentials + platform-specific config (web auth.html, Info.plist/AndroidManifest entries)
