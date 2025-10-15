Goal: Use Appwrite from a new Dart CLI app to create/read data (no UI).

Rules

- Ask user for Cloud Region, Project ID, and an API Key with required scopes.
- Read credentials from env; do not hardcode.

1. Scaffold
    - dart create -t console my_app && cd my_app
    - Remove `lib/` and `test/` directories as per docs.

2. Install SDK
    - dart pub add dart_appwrite:16.0.0

3. Configure env (ask user first)
    - Create `.env` with:
      APPWRITE_ENDPOINT=https://<REGION>.cloud.appwrite.io/v1
      APPWRITE_PROJECT_ID=<PROJECT_ID>
      APPWRITE_API_KEY=<API_KEY>

4. Client setup (key snippet)
    - File: `bin/my_app.dart`
        ```dart
        import 'package:dart_appwrite/dart_appwrite.dart';
        import 'dart:io';
        final client = Client()
          ..setEndpoint(Platform.environment['APPWRITE_ENDPOINT']!)
          ..setProject(Platform.environment['APPWRITE_PROJECT_ID']!)
          ..setKey(Platform.environment['APPWRITE_API_KEY']!);
        final tablesDB = TablesDB(client);
        ```

5. Example ops (idea + key snippets)
    - Create database/table/columns; seed rows; list rows.
        ```dart
        Future<void> listRows(String dbId, String tableId) async {
          final res = await tablesDB.listRows(databaseId: dbId, tableId: tableId);
          for (final row in res.rows) { print(row.data['title']); }
        }
        ```

6. Run & test
    - dart run bin/my_app.dart

Deliverables

- `.env`, `bin/my_app.dart` with client and example ops
