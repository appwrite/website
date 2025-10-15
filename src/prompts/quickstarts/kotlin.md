Goal: Use Appwrite from a new Kotlin server (CLI) app to create/read data (no client UI).

Rules

- This is the Kotlin Server SDK. For Android client apps, use the Android quickstart.
- Ask user for Cloud Region, Project ID, and an API Key with required scopes.
- Read credentials from env/config.

1. Scaffold
    - IntelliJ IDEA → New Project → Kotlin (Gradle, Kotlin DSL) → open project.

2. Install SDK
    - In `build.gradle.kts` add: `implementation("io.appwrite:sdk-for-kotlin:9.0.0")`

3. Configure env (ask user first)
    - Provide env vars:
      APPWRITE_ENDPOINT=https://<REGION>.cloud.appwrite.io/v1
      APPWRITE_PROJECT_ID=<PROJECT_ID>
      APPWRITE_API_KEY=<API_KEY>

4. Client setup (key snippet)
    - File: `Main.kt` essentials:

        ```kotlin
        import io.appwrite.Client
        import io.appwrite.services.TablesDB
        import io.appwrite.ID

        val client = Client()
          .setEndpoint(System.getenv("APPWRITE_ENDPOINT"))
          .setProject(System.getenv("APPWRITE_PROJECT_ID"))
          .setKey(System.getenv("APPWRITE_API_KEY"))
        val tablesDB = TablesDB(client)
        ```

5. Example ops (idea + key snippets)
    - Create database/table/columns; seed rows; list rows.
        ```kotlin
        suspend fun listRows(dbId: String, tableId: String){
          val res = tablesDB.listRows(dbId, tableId)
          for (row in res.rows){ println(row.data["title"]) }
        }
        ```

6. Run & test
    - Run from IntelliJ or `gradle run`, ensuring env vars are set.

Deliverables

- `Main.kt` with client and example ops, env variables for credentials
