## Storage events {% ##storage-events %}

| Name                            | Payload                                        | Description                                  |
|---------------------------------|-------------------------------------------------|----------------------------------------------|
| `buckets.*`                     | [Bucket Object](/docs/models/bucket)            | This event triggers on any buckets event.    |
| `buckets.*.create`              | [Bucket Object](/docs/models/bucket)            | This event triggers when a bucket is created.|
| `buckets.*.delete`              | [Bucket Object](/docs/models/bucket)            | This event triggers when a bucket is deleted.|
| `buckets.*.files.*`             | [File Object](/docs/models/file)                | This event triggers on any files event.      |
| `buckets.*.files.*.create`      | [File Object](/docs/models/file)                | This event triggers when a file is created.  |
| `buckets.*.files.*.delete`      | [File Object](/docs/models/file)                | This event triggers when a file is deleted.  |
| `buckets.*.files.*.update`      | [File Object](/docs/models/file)                | This event triggers when a file is updated.  |
| `buckets.*.update`              | [Bucket Object](/docs/models/bucket)            | This event triggers when a bucket is updated.|