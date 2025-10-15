Goal: Add Appwrite auth to a new Android (Kotlin) app with a minimal login/register/logout UI.

Rules

- Ask user for Cloud Region and Project ID; do not hardcode.
- Ensure AndroidManifest has the Appwrite callback activity with the correct scheme.

1. Create project
    - Create an Android Studio project (Empty Activity). Note the package name.

2. Add SDK
    - In app-level build.gradle.kts dependencies: `implementation("io.appwrite:sdk-for-android:8.1.0")`

3. Configure OAuth callback (ask user)
    - Ask for Project ID (Console → Settings) and add to AndroidManifest inside `<application>`:
        ```xml
        <activity android:name="io.appwrite.views.CallbackActivity" android:exported="true">
          <intent-filter android:label="android_web_auth">
            <action android:name="android.intent.action.VIEW" />
            <category android:name="android.intent.category.DEFAULT" />
            <category android:name="android.intent.category.BROWSABLE" />
            <data android:scheme="appwrite-callback-<PROJECT_ID>" />
          </intent-filter>
        </activity>
        ```

4. Appwrite singleton (key snippet)
    - File: `Appwrite.kt` in your root package:
        ```kotlin
        object Appwrite {
          lateinit var client: Client; lateinit var account: Account
          fun init(ctx: Context, region: String, projectId: String){
            client = Client(ctx).setEndpoint("https://$region.cloud.appwrite.io/v1").setProject(projectId)
            account = Account(client)
          }
          suspend fun login(email: String, password: String) = account.createEmailPasswordSession(email, password)
          suspend fun register(email: String, password: String) = account.create(userId = ID.unique(), email = email, password = password)
          suspend fun logout() = account.deleteSession("current")
        }
        ```
    - On startup (e.g., in `MainActivity.onCreate`), call `Appwrite.init(applicationContext, <REGION>, <PROJECT_ID>)` (ask user for values).

5. UI wiring (idea + key snippets)
    - In `MainActivity`, use Compose or Views:
        - Two `TextField`s (email, password)
        - Buttons: Login, Register, Logout
        - When logged in, display current email/name from `account.get()`

6. Run & test
    - Build/run on emulator or device. Test register → auto login → logout → login.

Deliverables

- AndroidManifest callback, `Appwrite.kt`, updated `MainActivity` with minimal form/actions
