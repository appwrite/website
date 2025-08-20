{% table %}

- Name
- Description

---

- `databases.*`
- This event triggers on any database event.
  Returns [Database Object](/docs/references/cloud/models/database)

---

- `databases.*.collections.*`
- This event triggers on any collection event.
  Returns [Collection Object](/docs/references/cloud/models/collection)

---

- `databases.*.collections.*.attributes.*`
- This event triggers on any attributes event.
  Returns [Attribute Object](/docs/references/cloud/models/attributeList)

---

- `databases.*.collections.*.attributes.*.create`
- This event triggers when an attribute is created.
  Returns [Attribute Object](/docs/references/cloud/models/attributeList)

---

- `databases.*.collections.*.attributes.*.delete`
- This event triggers when an attribute is deleted.
  Returns [Attribute Object](/docs/references/cloud/models/attributeList)

---

- `databases.*.collections.*.create`
- This event triggers when a collection is created.
  Returns [Collection Object](/docs/references/cloud/models/collection)

---

- `databases.*.collections.*.delete`
- This event triggers when a collection is deleted.
  Returns [Collection Object](/docs/references/cloud/models/collection)

---

- `databases.*.collections.*.documents.*`
- This event triggers on any documents event.
  Returns [Document Object](/docs/references/cloud/models/document)

---

- `databases.*.collections.*.documents.*.create`
- This event triggers when a document is created.
  Returns [Document Object](/docs/references/cloud/models/document)

---

- `databases.*.collections.*.documents.*.delete`
- This event triggers when a document is deleted.
  Returns [Document Object](/docs/references/cloud/models/document)

---

- `databases.*.collections.*.documents.*.update`
- This event triggers when a document is updated.
  Returns [Document Object](/docs/references/cloud/models/document)

---

- `databases.*.collections.*.documents.*.upsert`
- This event triggers when a document is upserted.
  Returns [Document Object](/docs/references/cloud/models/document)

---

- `databases.*.collections.*.indexes.*`
- This event triggers on any indexes event.
  Returns [Index Object](/docs/references/cloud/models/index)

---

- `databases.*.collections.*.indexes.*.create`
- This event triggers when an index is created.
  Returns [Index Object](/docs/references/cloud/models/index)

---

- `databases.*.collections.*.indexes.*.delete`
- This event triggers when an index is deleted.
  Returns [Index Object](/docs/references/cloud/models/index)

---

- `databases.*.collections.*.update`
- This event triggers when a collection is updated.
  Returns [Collection Object](/docs/references/cloud/models/collection)

---

- `databases.*.create`
- This event triggers when a database is created.
  Returns [Database Object](/docs/references/cloud/models/database)

---

- `databases.*.delete`
- This event triggers when a database is deleted.
  Returns [Database Object](/docs/references/cloud/models/database)

---

- `databases.*.update`
- This event triggers when a database is updated.
  Returns [Database Object](/docs/references/cloud/models/database){% /table %}
