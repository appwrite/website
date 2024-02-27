## Messaging events {% #messaging-events %}

| Name                            | Payload                                                   | Description                                                  |
| ------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| `providers.*`                   | [Provider Object](/docs/references/1.5.x/models/provider) | This event triggers on any providers event.                  |
| `providers.*.create`            | [Provider Object](/docs/references/1.5.x/models/provider) | This event triggers when a provider is created.              |
| `providers.*.delete`            | [Provider Object](/docs/references/1.5.x/models/provider) | This event triggers when a provider is deleted.              |
| `providers.*.update`            | [Provider Object](/docs/references/1.5.x/models/provider) | This event triggers when a provider is updated.              |
| `topics.*`                      | [Topic Object](/docs/references/1.5.x/models/topic)       | This event triggers on any topic event.                      |
| `topics.*.create`               | [Topic Object](/docs/references/1.5.x/models/topic)       | This event triggers when a topic is created.                 |
| `topics.*.delete`               | [Topic Object](/docs/references/1.5.x/models/topic)       | This event triggers when a topic is deleted.                 |
| `topics.*.update`               | [Topic Object](/docs/references/1.5.x/models/topic)       | This event triggers when a topic is updated.                 |
| `topics.*.subscribers.*.create` | [Topic Object](/docs/references/1.5.x/models/topic)       | This event triggers when a subscriber to a topic is created. |
| `topics.*.subscribers.*.delete` | [Topic Object](/docs/references/1.5.x/models/topic)       | This event triggers when a subscriber to a topic is deleted. |
| `messages.*`                    | [Message Object](/docs/references/1.5.x/models/message)   | This event triggers on any message event.                    |
| `messages.*.create`             | [Message Object](/docs/references/1.5.x/models/message)   | This event triggers when a message is created.               |
| `messages.*.delete`             | [Message Object](/docs/references/1.5.x/models/message)   | This event triggers when a message is deleted.               |
| `messages.*.update`             | [Message Object](/docs/references/1.5.x/models/message)   | This event triggers when a message is updated.               |
