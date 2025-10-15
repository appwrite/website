Goal: Use Appwrite from a new PHP CLI app to create/read data (no client UI).

Rules

- Ask user for Cloud Region, Project ID, and an API Key with required scopes.
- Read credentials from env; do not hardcode.

1. Scaffold
    - mkdir my-app && cd my-app && composer init

2. Install SDK
    - composer require appwrite/appwrite:15.0.0

3. Configure env (ask user first)
    - Create `.env` with:
      APPWRITE_ENDPOINT=https://<REGION>.cloud.appwrite.io/v1
      APPWRITE_PROJECT_ID=<PROJECT_ID>
      APPWRITE_API_KEY=<API_KEY>

4. Client setup (key snippet)
    - File: `index.php`
        ```php
        <?php
        require_once 'vendor/autoload.php';
        use Appwrite\Client; use Appwrite\Services\TablesDB; use Appwrite\ID;
        $client = (new Client())
          ->setEndpoint(getenv('APPWRITE_ENDPOINT'))
          ->setProject(getenv('APPWRITE_PROJECT_ID'))
          ->setKey(getenv('APPWRITE_API_KEY'));
        $tablesDB = new TablesDB($client);
        ```

5. Example ops (idea + key snippets)
    - Create database/table/columns; seed rows; list rows using `Query`.
        ```php
        $todos = $tablesDB->listRows($dbId, $tableId);
        foreach ($todos['rows'] as $todo) echo $todo['title']."\n";
        ```

6. Run & test
    - php index.php

Deliverables

- `.env`, `index.php` with client and example ops
