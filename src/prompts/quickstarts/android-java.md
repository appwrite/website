Goal: Use Appwrite from an Android app written in Java to sign up/login/logout (no full UI replacements).

Rules

- Ask the user for Cloud Region and Project ID; do not hardcode silently.
- Configure endpoint/project via safe config (BuildConfig fields or strings.xml). No secrets in client.
- Add OAuth callback for future social auth.

1. Install SDK
    - In app-level `build.gradle` inside `dependencies` add:
        ```groovy
        implementation "io.appwrite:sdk-for-android:8.1.0"
        ```

2. Configure endpoint + project (ask user first)
    - Use BuildConfig fields (recommended):
        ```groovy
        android {
          defaultConfig {
            // Replace with user-provided values
            buildConfigField "String", "APPWRITE_ENDPOINT", '"https://<REGION>.cloud.appwrite.io/v1"'
            buildConfigField "String", "APPWRITE_PROJECT_ID", '"<PROJECT_ID>"'
          }
        }
        ```
    - Alternative: `res/values/strings.xml` with `appwrite_endpoint` and `appwrite_project_id`.

3. Add OAuth callback (manifest snippet)
    - Inside `<application>`:
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

4. Appwrite helper (key snippet)
    - Create `AppwriteHelper.java` singleton and initialize from config:

        ```java
        import io.appwrite.Client;
        import io.appwrite.services.Account;

        public class AppwriteHelper {
          private static AppwriteHelper instance;
          private final Account account;

          private AppwriteHelper(Context context) {
            Client client = new Client(context)
              .setEndpoint(BuildConfig.APPWRITE_ENDPOINT)
              .setProject(BuildConfig.APPWRITE_PROJECT_ID);
            this.account = new Account(client);
          }

          public static synchronized AppwriteHelper get(Context ctx){
            if(instance==null) instance = new AppwriteHelper(ctx.getApplicationContext());
            return instance;
          }

          // key ops (examples)
          public void register(String email, String password, CoroutineCallback<?> cb){
            account.create(io.appwrite.ID.unique(), email, password, cb);
          }
          public void login(String email, String password, CoroutineCallback<?> cb){
            account.createEmailPasswordSession(email, password, cb);
          }
          public void logout(CoroutineCallback<?> cb){
            account.deleteSession("current", cb);
          }
        }
        ```

5. Wire minimal UI (idea + key snippets)
    - Keep your existing layout. Hook buttons to helper methods:
        ```java
        AppwriteHelper appwrite = AppwriteHelper.get(getApplicationContext());
        buttonLogin.setOnClickListener(v -> appwrite.login(email.getText().toString(), password.getText().toString(), cb));
        buttonRegister.setOnClickListener(v -> appwrite.register(email.getText().toString(), password.getText().toString(), cb));
        buttonLogout.setOnClickListener(v -> appwrite.logout(cb));
        ```

Deliverables

- Dependency added, manifest callback activity, BuildConfig (or strings) with user-provided endpoint/project, `AppwriteHelper.java` with client + key ops
