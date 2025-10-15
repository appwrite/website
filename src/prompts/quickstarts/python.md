Goal: Use Appwrite from a new Python server app to create/read data (no client UI).

Rules

- Ask user for Cloud Region, Project ID, and an API Key with required scopes.
- Read credentials from env; do not hardcode.

1. Scaffold
    - mkdir my_app && cd my_app
    - python -m venv .venv && source .venv/bin/activate (or Windows equivalent)

2. Install SDK
    - pip install appwrite==11.0.0

3. Configure env (ask user first)
    - Create `.env` with:
      APPWRITE_ENDPOINT=https://<REGION>.cloud.appwrite.io/v1
      APPWRITE_PROJECT_ID=<PROJECT_ID>
      APPWRITE_API_KEY=<API_KEY>

4. Client setup (key snippet)
    - File: `my_app.py`
        ```py
        from appwrite.client import Client
        from appwrite.services.tablesDB import TablesDB
        from appwrite.id import ID
        import os
        client = Client()
        client.set_endpoint(os.getenv('APPWRITE_ENDPOINT'))
        client.set_project(os.getenv('APPWRITE_PROJECT_ID'))
        client.set_key(os.getenv('APPWRITE_API_KEY'))
        tablesDB = TablesDB(client)
        ```

5. Example ops (idea + key snippets)
    - Create database/table/columns; seed rows; list rows using `Query`.
    - Key list pattern:
        ```py
        from appwrite.query import Query
        def list_rows(database_id, table_id):
            res = tablesDB.list_rows(database_id=database_id, table_id=table_id)
            print(res['rows'])
        ```

6. Run & test
    - python my_app.py

Deliverables

- `.env`, `my_app.py` with client and example ops
