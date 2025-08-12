{% table %}

- Name
- Description

---

- `databases.*`
- This event triggers on any database event.
  Returns [Database Object](/docs/references/cloud/models/database)

---

- `databases.*.tables.*`
- This event triggers on any table event.
  Returns [Table Object](/docs/references/cloud/models/table)

---

- `databases.*.tables.*.columns.*`
- This event triggers on any columns event.
  Returns [Column Object](/docs/references/cloud/models/columnList)

---

- `databases.*.tables.*.columns.*.create`
- This event triggers when an column is created.
  Returns [Column Object](/docs/references/cloud/models/columnList)

---

- `databases.*.tables.*.columns.*.delete`
- This event triggers when an column is deleted.
  Returns [Column Object](/docs/references/cloud/models/columnList)

---

- `databases.*.tables.*.create`
- This event triggers when a table is created.
  Returns [Table Object](/docs/references/cloud/models/table)

---

- `databases.*.tables.*.delete`
- This event triggers when a table is deleted.
  Returns [Table Object](/docs/references/cloud/models/table)

---

- `databases.*.tables.*.rows.*`
- This event triggers on any rows event.
  Returns [Row Object](/docs/references/cloud/models/row)

---

- `databases.*.tables.*.rows.*.create`
- This event triggers when a row is created.
  Returns [Row Object](/docs/references/cloud/models/row)

---

- `databases.*.tables.*.rows.*.delete`
- This event triggers when a row is deleted.
  Returns [Row Object](/docs/references/cloud/models/row)

---

- `databases.*.tables.*.rows.*.update`
- This event triggers when a row is updated.
  Returns [Row Object](/docs/references/cloud/models/row)

---

- `databases.*.tables.*.indexes.*`
- This event triggers on any indexes event.
  Returns [Index Object](/docs/references/cloud/models/index)

---

- `databases.*.tables.*.indexes.*.create`
- This event triggers when an index is created.
  Returns [Index Object](/docs/references/cloud/models/index)

---

- `databases.*.tables.*.indexes.*.delete`
- This event triggers when an index is deleted.
  Returns [Index Object](/docs/references/cloud/models/index)

---

- `databases.*.tables.*.update`
- This event triggers when a table is updated.
  Returns [Table Object](/docs/references/cloud/models/table)

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
