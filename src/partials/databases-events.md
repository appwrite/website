## Databases events {% #databases-events %}

| Name            | Payload                        | Description                             |
| ----------------------------------------- | ------------------------------ | --------------------------------------- |
| `databases.*`                             | [Database Object](/docs/models/database)     | This event triggers on any database event. |
| `databases.*.collections.*`               | [Collection Object](/docs/models/collection) | This event triggers on any collection event. |
| `databases.*.collections.*.attributes.*`  | [Attribute Object](/docs/models/attribute)   | This event triggers on any attributes event. |
| `databases.*.collections.*.attributes.*.create` | [Attribute Object](/docs/models/attribute)   | This event triggers when an attribute is created. |
| `databases.*.collections.*.attributes.*.delete` | [Attribute Object](/docs/models/attribute)   | This event triggers when an attribute is deleted. |
| `databases.*.collections.*.create`       | [Collection Object](/docs/models/collection) | This event triggers when a collection is created. |
| `databases.*.collections.*.delete`       | [Collection Object](/docs/models/collection) | This event triggers when a collection is deleted. |
| `databases.*.collections.*.documents.*`  | [Document Object](/docs/models/document)     | This event triggers on any documents event. |
| `databases.*.collections.*.documents.*.create` | [Document Object](/docs/models/document)     | This event triggers when a document is created. |
| `databases.*.collections.*.documents.*.delete` | [Document Object](/docs/models/document)     | This event triggers when a document is deleted. |
| `databases.*.collections.*.documents.*.update` | [Document Object](/docs/models/document)     | This event triggers when a document is updated. |
| `databases.*.collections.*.indexes.*`     | [Index Object](/docs/models/index)         | This event triggers on any indexes event. |
| `databases.*.collections.*.indexes.*.create` | [Index Object](/docs/models/index)         | This event triggers when an index is created. |
| `databases.*.collections.*.indexes.*.delete` | [Index Object](/docs/models/index)         | This event triggers when an index is deleted. |
| `databases.*.collections.*.update`        | [Collection Object](/docs/models/collection) | This event triggers when a collection is updated. |
| `databases.*.create`                     | [Database Object](/docs/models/database)     | This event triggers when a database is created. |
| `databases.*.delete`                     | [Database Object](/docs/models/database)     | This event triggers when a database is deleted. |
| `databases.*.update`                     | [Database Object](/docs/models/database)     | This event triggers when a database is updated. |
