The Compute service manages your project's [dedicated databases](/docs/products/databases/dedicated), raw PostgreSQL, MySQL, MariaDB, and MongoDB engines that Appwrite provisions, runs, scales, and backs up for you. Use it to create and resize databases, fetch and rotate connection credentials, manage additional connection users and the connection pooler, install PostgreSQL extensions, schedule backups and point-in-time recovery, and operate high-availability replicas with automatic failover.

Every endpoint targets a dedicated database in your project and is guarded by the `databases.read` or `databases.write` scope. The Compute service only ever returns dedicated databases; Appwrite's serverless data products are managed through their own APIs and never appear here.

You can find guides and examples for connecting to and operating these databases in the [dedicated databases documentation](/docs/products/databases/dedicated).
