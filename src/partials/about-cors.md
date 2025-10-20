{% info title="About adding a platform" %}
Adding `localhost` as a platform allows requests to be sent from your local development server to Appwrite. If you're deploying your application to production or a different domain, you should add that domain as a platform. Doing this prevents CORS errors when sending requests from your production environment to Appwrite.

To learn more about CORS errors and ways to debug them, check out our [guide on CORS errors](/blog/post/cors-error).
{% /info %}
