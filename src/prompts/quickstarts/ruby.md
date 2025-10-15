Goal: Use Appwrite from a new Ruby CLI app to create/read data (no client UI).

Rules

- Ask user for Cloud Region, Project ID, and an API Key with required scopes.
- Read credentials from env; do not hardcode.

1. Scaffold
    - mkdir my-app && cd my-app && bundle init

2. Install SDK
    - bundle add appwrite

3. Configure env (ask user first)
    - Create `.env` with:
      APPWRITE_ENDPOINT=https://<REGION>.cloud.appwrite.io/v1
      APPWRITE_PROJECT_ID=<PROJECT_ID>
      APPWRITE_API_KEY=<API_KEY>

4. Client setup (key snippet)
    - File: `app.rb`
        ```ruby
        require 'appwrite'
        include Appwrite
        client = Client.new
          .set_endpoint(ENV['APPWRITE_ENDPOINT'])
          .set_project(ENV['APPWRITE_PROJECT_ID'])
          .set_key(ENV['APPWRITE_API_KEY'])
        tablesDB = TablesDB.new(client)
        ```

5. Example ops (idea + key snippets)
    - Create database/table/columns; seed rows; list rows.
        ```ruby
        todos = tablesDB.list_rows(database_id: db_id, table_id: table_id)
        todos['rows'].each { |t| puts t['title'] }
        ```

6. Run & test
    - ruby app.rb

Deliverables

- `.env`, `app.rb` with client and example ops
