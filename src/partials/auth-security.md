# Password history  {% #password-history %}

Password history prevents users from reusing recent passwords. This protects user accounts from security risks by enforcing a new password every time it's changed.

Password history can be enabled in the Auth service's **Security** tab on the Appwrite Console. You can choose how many previous passwords to remember, up to a maximum of 20, and block users from reusing them.

# Password dictionary {% #password-dictionary %}

Password dictionary protects users from using bad passwords. It compares the user's password to the [10,000 most common passwords](https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/10k-most-common.txt) and throws an error if there's a match. Together with [rate limits](/docs/advanced/platform/rate-limits), password dictionary will significantly reduce the chance of a malicious actor guessing user passwords.

Password dictionary can be enabled in the Auth service's **Security** tab on the Appwrite Console.

# Password hashing  {% #password-hashing %}
Appwrite protects passwords by using the [Argon2](https://github.com/P-H-C/phc-winner-argon2) password-hashing algorithm.
Argon 2 is a resilient and secure password hashing algorithm that is also the winner of the [Password Hashing Competition](https://www.password-hashing.net/).
Appwrite combines Argon 2 with the use of techniques such as salting, adjustable work factors, and memory hardness to securely handle passwords.

# Personal data  {% #personal-data %}

Encourage passwords that are hard to guess by disallowing users to pick passwords that contain personal data.
Personal data includes the user's name, email, and phone number.

Disallowing personal data can be enabled in the Auth service's **Security** tab on the Appwrite Console.