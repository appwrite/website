{% accordion %}
{% accordion_item title="Deploying with Git" %}
If you created your function using Git, you can deploy it by simply pushing your code to your function's main branch.
{% /accordion_item %}
{% accordion_item title="Deploying with CLI" %}
{% info title="CLI setup" %}
Before you can deploy with the Appwrite CLI, make sure you've [installed and initialized](/docs/tooling/command-line/installation) the CLI.
{% /info %}

To deploy with the Appwrite CLI, your function must be added to `appwrite.json`. Use the `appwrite init function` method to create a starter function, then paste in your function code.

```bash
appwrite init function
```

Edit the generated code, add dependencies, and deploy the function using the following command:

```bash
appwrite deploy function
```

## Overwrite warning

If you made changes in the Appwrite Console that are different from your `appwrite.json`, using the CLI deploy command will overwrite your console changes. Update your `appwrite.json` manually before deploying.
{% /accordion_item %}
{% accordion_item title="Deploying manually" %}
If you're not using Git or the Appwrite CLI, you can deploy your function manually in the Appwrite Console.

First, navigate inside the folder that contains your dependency file. Package your code files into the `.tar.gz` format:

{% multicode %}
  ```bash
  tar --exclude code.tar.gz -czf code.tar.gz .
  ```
  ```cmd
  tar --exclude code.tar.gz -czf code.tar.gz .
  ```
  ```powershell
  tar --exclude code.tar.gz -czf code.tar.gz .
  ```
{% /multicode %}


Next, navigate to your Appwrite Console and upload the function.

1. Navigate to the function you want to deploy.
2. Click **Create deployment**.
3. Select the **Manual** tab.
4. Input the entry point of your function under **Entrypoint**. For the example above, it would be `index.js`.
5. Upload `code.tar.gz`.
6. Select **Activate deployment after build**.
7. Click **Create**.
{% /accordion_item %}
{% /accordion %}
