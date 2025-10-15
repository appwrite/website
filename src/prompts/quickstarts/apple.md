Goal: Add Appwrite auth to a new Apple (iOS/Swift) app with a minimal login/register/logout UI.

Rules

- Ask user for Cloud Region and Project ID; do not hardcode.
- Ensure URL scheme `appwrite-callback-<PROJECT_ID>` is configured in Info.plist; add SceneDelegate hook for UIKit.

1. Create Xcode project
    - New iOS App; note Product Name and Bundle Identifier.

2. Add SDK (SPM)
    - Add package: https://github.com/appwrite/sdk-for-apple, version `10.1.0` (Up to Next Major).

3. URL scheme (ask user)
    - In Info.plist, add:
        ```xml
        <key>CFBundleURLTypes</key>
        <array>
        <dict>
          <key>CFBundleTypeRole</key><string>Editor</string>
          <key>CFBundleURLName</key><string>io.appwrite</string>
          <key>CFBundleURLSchemes</key><array><string>appwrite-callback-<PROJECT_ID></string></array>
        </dict>
        </array>
        ```
    - UIKit apps: in SceneDelegate, forward callback to WebAuthComponent.

4. Appwrite singleton (key snippet)
    - File: `Appwrite.swift`
        ```swift
        import Appwrite
        class Appwrite {
          let client = Client(); let account: Account
          init(region: String, projectId: String){
            client.setEndpoint("https://\(region).cloud.appwrite.io/v1").setProject(projectId)
            account = Account(client)
          }
          func login(_ email:String,_ password:String) async throws -> Session { try await account.createEmailPasswordSession(email: email, password: password) }
          func register(_ email:String,_ password:String) async throws -> User<[String: AnyCodable]> { try await account.create(userId: ID.unique(), email: email, password: password) }
          func logout() async throws { _ = try await account.deleteSession(sessionId: "current") }
        }
        ```

5. UI wiring (idea + key snippets)
    - SwiftUI view with `TextField`(email), `SecureField`(password), and buttons for Register/Login/Logout.
    - Call the singleton’s methods in Task { } blocks and show current user email/name on success.

6. Run & test
    - Build/run on simulator or device; test register/login/logout.

Deliverables

- Info.plist URL scheme, `Appwrite.swift`, SwiftUI (or UIKit) view with minimal form/actions
