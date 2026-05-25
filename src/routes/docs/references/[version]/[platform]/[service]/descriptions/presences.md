The Presences service records a short-lived status for each signed-in user and broadcasts every change over [Realtime](/docs/apis/realtime), so you can render online indicators, "viewing this page" cues, typing signals, and collaboration banners without writing any socket plumbing.

Each presence is attached to a user and carries a `status` string, an optional `metadata` JSON object for richer context, and an `expiresAt` timestamp that controls automatic cleanup. Presences are written by the user's own session or a server SDK, and read by any client with the right [permissions](/docs/advanced/platform/permissions).

You can find guides and examples on using the Presences API in the [Presences product pages](/docs/products/auth/presences).
