# Configure GitHub app {% #git %}

Appwrite supports automatic deployments through Git integration. In order for Appwrite to access your repos, you must [create a GitHub app](https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps) to enable this integration. The GitHub app requires the following configurations.

For automatic Git deployment to work, Appwrite needs to receive communication from GitHub, this means your Appwrite project must be accessible on the internet. If you're running on `localhost`, you need to run a proxy like [ngrok](https://ngrok.com/).

## Automatic GitHub app setup {% #automatic-github-app-setup %}

We have built a simple form that utilizes [GitHub app manifest](https://docs.github.com/en/apps/sharing-github-apps/registering-a-github-app-from-a-manifest) to automatically pre-configure your GitHub app. Use below interface to create your app quickly.

{% github_app_form /%}

## Manual GitHub app setup {% #manual-github-app-setup %}

You can create your GitHub app manially by filling [GitHub app creation form](https://github.com/settings/apps/new) with the following configurations.

### GitHub App name {% #github-app-name %}

The GitHub App name will be displayed when connecting Appwrite to GitHub. In addition, this name will be transformed to a slug ("My GitHub App" will become "my-github-app") and appear in the URL when accessing your app in GitHub. This slug should be set as the `_APP_VCS_GITHUB_APP_NAME` environment variable in Appwrite.

### Homepage URL {% #github-homepage-url %}

The homepage URL will appear when looking at the public page of your app. It can be any URL you'd like.

### Callback URL {% #callback %}

GitHub will use **callback URLs** to redirect users back to Appwrite. Set these callback URLs under **Identifying and authorizing users** in the same order as listed below.

| URLs                                                                          |
| ----------------------------------------------------------------------------- |
| `https://<HOSTNAME_OR_IP>/v1/vcs/github/callback`                             |
| `https://<HOSTNAME_OR_IP>/v1/account/sessions/oauth2/callback/github/console` |

Also, check the **Request user authentication (OAuth) during installation** box.

### Post installation {% #post-install %}

Check the **Redirect on update** box under the **Post installation** section.

### Webhook {% #github-webhooks %}

GitHub will notify Appwrite about events like new commits using webhooks. Under **Webhook**, you need to check the **Active** checkbox. You also need to set the **Webhook URL** as `https://<HOSTNAME_OR_IP>/v1/vcs/github/events`.

If you're running Appwrite on `localhost`, GitHub can't send requests to Appwrite through webhooks and automatic deployments won't work. You'll need to host Appwrite on a server or use a proxy like [ngrok](https://ngrok.com/) to make Appwrite accessible to GitHub.

### Repository permissions {% #repository-permission %}

Configure these permissions under the **Repository permission** dropdown.

| Permission      | Access         |
| --------------- | -------------- |
| Administration  | Read and write |
| Checks          | Read and write |
| Commit Statuses | Read and write |
| Contents        | Read and write |
| Issues          | Read and write |
| Metadata        | Read-only      |
| Pull requests   | Read and write |
| Webhooks        | Read and write |

### Account permissions {% #account-permission %}

Configure these permissions under the **Account Permission** dropdown.

| Permission    | Access    |
| ------------- | --------- |
| Email address | Read-only |

### Subscribe to events {% #subscribe-events %}

Select these under the **Subscribe to events** dropdown.

| Events       |
| ------------ |
| Pull request |
| Push         |

### Where can this GitHub App be installed? {% #github-where-installed %}

Check the **Any account** box under **Where can this GitHub App be installed?** section. This is important to allow you to install the GitHub app on multiple Appwrite projects.
