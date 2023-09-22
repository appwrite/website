## Authentication events {% #authentication-events %}

| Name                                   | Payload                            | Description                                         |
|----------------------------------------|------------------------------------|-----------------------------------------------------|
| `teams.*`                              | [Team Object](/docs/models/team)    | This event triggers on any teams event.             |
| `teams.*.create`                       | [Team Object](/docs/models/team)    | This event triggers when a team is created.         |
| `teams.*.delete`                       | [Team Object](/docs/models/team)    | This event triggers when a team is deleted.         |
| `teams.*.memberships.*`                | [Membership Object](/docs/models/membership) | This event triggers on any team memberships event.  |
| `teams.*.memberships.*.create`         | [Membership Object](/docs/models/membership) | This event triggers when a membership is created.  |
| `teams.*.memberships.*.delete`         | [Membership Object](/docs/models/membership) | This event triggers when a membership is deleted.  |
| `teams.*.memberships.*.update`         | [Membership Object](/docs/models/membership) | This event triggers when a membership is updated.  |
| `teams.*.memberships.*.update.status`  | [Membership Object](/docs/models/membership) | This event triggers when a team memberships status is updated. |
| `teams.*.update`                       | [Team Object](/docs/models/team)    | This event triggers when a team is updated.         |
| `teams.*.update.prefs`                 | [Team Object](/docs/models/team)    | This event triggers when a team's preferences are updated.  |
| `users.*`                              | [User Object](/docs/models/user)    | This event triggers on any user's event.            |
| `users.*.create`                       | [User Object](/docs/models/user)    | This event triggers when a user is created.         |
| `users.*.delete`                       | [User Object](/docs/models/user)    | This event triggers when a user is deleted.         |
| `users.*.recovery.*`                   | [Token Object](/docs/models/token)  | This event triggers on any user's recovery token event.  |
| `users.*.recovery.*.create`            | [Token Object](/docs/models/token)  | This event triggers when a recovery token for a user is created.  |
| `users.*.recovery.*.update`            | [Token Object](/docs/models/token)  | This event triggers when a recovery token for a user is validated.  |
| `users.*.sessions.*`                   | [Session Object](/docs/models/session)  | This event triggers on any user's sessions event.  |
| `users.*.sessions.*.create`            | [Session Object](/docs/models/session)  | This event triggers when a session for a user is created.  |
| `users.*.sessions.*.delete`            | [Session Object](/docs/models/session)  | This event triggers when a session for a user is deleted.  |
| `users.*.update`                       | [User Object](/docs/models/user)    | This event triggers when a user is updated.         |
| `users.*.update.email`                 | [User Object](/docs/models/user)    | This event triggers when a user's email address is updated.  |
| `users.*.update.name`                  | [User Object](/docs/models/user)    | This event triggers when a user's name is updated.  |
| `users.*.update.password`              | [User Object](/docs/models/user)    | This event triggers when a user's password is updated.  |
| `users.*.update.prefs`                 | [User Object](/docs/models/user)    | This event triggers when a user's preferences is updated.  |
| `users.*.update.status`                | [User Object](/docs/models/user)    | This event triggers when a user's status is updated.  |
| `users.*.verification.*`               | [Token Object](/docs/models/token)  | This event triggers on any user's verification token event.  |
| `users.*.verification.*.create`        | [Token Object](/docs/models/token)  | This event triggers when a verification token for a user is created.  |
| `users.*.verification.*.update`        | [Token Object](/docs/models/token)  | This event triggers when a verification token for a user is validated.  |