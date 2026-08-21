You can create functions using the CLI without needing to access the Console.

{% partial file="cli-disclaimer.md" /%}

To create a function with the Appwrite CLI, start the guided `appwrite init function` workflow. It walks you through runtime selection, local or GitHub-backed source, execution access, generated domains, and environment variables before it writes files or creates resources.

```sh
appwrite init function
```

After the review step, the CLI can save the function locally or create and deploy it immediately. To deploy the generated code later, add any dependencies and push the function using the following command:

```sh
appwrite push functions
```

{% arrow_link href="/docs/tooling/command-line/functions#commands" %}
Learn more about the CLI functions commands
{% /arrow_link %}
