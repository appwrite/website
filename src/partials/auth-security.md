# Password history {% #password-history %}

Password history prevents users from reusing recent passwords. This protects user accounts from security risks by enforcing a new password every time it's changed.

Password history can be enabled in the Auth service's **Security** tab on the Appwrite Console. You can choose how many previous passwords to remember, up to a maximum of 20, and block users from reusing them.

# Password dictionary {% #password-dictionary %}

Password dictionary protects users from using bad passwords. It compares the user's password to the [10,000 most common passwords](https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/10k-most-common.txt) and throws an error if there's a match. Together with [rate limits](/docs/advanced/platform/rate-limits), password dictionary will significantly reduce the chance of a malicious actor guessing user passwords.

Password dictionary can be enabled in the Auth service's **Security** tab on the Appwrite Console.

# Password hashing {% #password-hashing %}

Appwrite protects passwords by using the [Argon2](https://github.com/P-H-C/phc-winner-argon2) password-hashing algorithm.

Argon 2 is a resilient and secure password hashing algorithm that is also the winner of the [Password Hashing Competition](https://www.password-hashing.net/).

Appwrite combines Argon 2 with the use of techniques such as salting, adjustable work factors, and memory hardness to securely handle passwords.

If an user is imported into Appwrite with hash differnt than Argon2, the password will be re-hashed on first successful user's sign in. This ensures all passwords are stored as securely as possible.

# Personal data {% #personal-data %}

Encourage passwords that are hard to guess by disallowing users to pick passwords that contain personal data.
Personal data includes the user's name, email, and phone number.

Disallowing personal data can be enabled in the Auth service's **Security** tab on the Appwrite Console.

# Session alerts {% #session-alerts %}

Enable email alerts for your users so that whenever another session is created for their account, they will be alerted to the new session.

You won't receive notifications when logging in using [Magic URL](/docs/products/auth/magic-url), [Email OTP](/docs/products/auth/email-otp), or [OAuth2](/docs/products/auth/oauth2) since these authentication methods already verify user access to their systems, establishing the authentication's legitimacy.

To toggle session alerts, navigate to **Auth** > **Security** > **Session alerts**.

# Memberships privacy {% #memberships-privacy %}

In certain use cases, your app may not need to share members’ personal information with others. You can safeguard privacy by marking specific membership details as private. To configure this setting, navigate to **Auth** > **Security** > **Memberships privacy**

These details can be made private:

- `userName` - The member's name
- `userEmail` - The member's email address
- `mfa` - Whether the member has enabled multi-factor authentication

{% info title="Scale plan feature" %}
Memberships privacy is available on the Appwrite Cloud scale plan.
{% /info %}

